/** Native-resolution Paper Metal frames for compositor-only playback.
 *
 * Geometry is fixed for one bake. The caller must abort/rebake after a geometry,
 * DPR or preset change, decode the result before displaying it, and revoke src
 * with URL.revokeObjectURL when the cache entry is no longer in use.
 */
import type {MetalFxInstance} from './core';
import type {PresetMode} from '../presets';
import {GL_DPR_CAP} from '../perfConfig';
import {createDirectBaker} from './direct';

export interface RingAtlas {
  /** Owned blob URL. Ownership passes to the successful caller. */
  src:string;
  /** One frame's backing-pixel dimensions, not the full atlas dimensions. */
  width:number;
  height:number;
  dpr:number;
  columns:number;
  rows:number;
  count:number;
  frameMs:number;
  /** Logical decoded RGBA bytes, excluding browser copies and staging. */
  bytes:number;
}

// Prefer power-of-two grids, but odd column counts can rescue small devices.
const COLUMN_OPTIONS=[8,4,2,1,7,6,5,3] as const;
const MAX_FRAMES=320,MIN_FRAMES=128,SEAM_FRAMES=40;
const MAX_BYTES=32*1024*1024,MAX_DIMENSION=4096,FRAME_MS=1000/60;
const PHASE_START=.4,PHASE_STEP=.01;
type RasterCanvas=HTMLCanvasElement|OffscreenCanvas;
type RasterContext=CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D;

function layout(width:number,height:number,dpr:number,dimension:number):Omit<RingAtlas,'src'>{
  const frameBytes=width*height*4;
  for(const columns of COLUMN_OPTIONS){
    if(width*columns>dimension)continue;
    const capacity=Math.min(MAX_FRAMES,Math.floor(MAX_BYTES/frameBytes),Math.floor(dimension/height)*columns);
    const count=Math.floor(capacity/columns)*columns;
    if(count<MIN_FRAMES)continue;
    return {width,height,dpr,columns,rows:count/columns,count,frameMs:FRAME_MS,bytes:frameBytes*count};
  }
  throw Error('Native ring atlas exceeds the 32 MiB or dimension limit');
}

/** Preferred native geometry, without canvas allocation. A smaller device
 * texture limit may select a different grid; use the byte estimate to reserve. */
export function ringAtlasGeometry(inst:MetalFxInstance):Omit<RingAtlas,'src'>{
  const dpr=Math.min(GL_DPR_CAP,window.devicePixelRatio||1),w=inst.cssWidth,h=inst.cssHeight;
  if(inst.mask||inst.deform)throw Error('Ring atlas requires a rigid ring');
  if(![w,h,dpr].every(Number.isFinite)||w<=0||h<=0||dpr<=0)throw Error('Invalid ring atlas geometry');
  return layout(Math.max(1,Math.round(w*dpr)),Math.max(1,Math.round(h*dpr)),dpr,MAX_DIMENSION);
}

/** Reserve an upper bound independent of grid rounding or hardware limits.
 * Actual allocation can be smaller; it cannot exceed 320 native frames or
 * the decoded byte cap. Validate geometry before reserving the shared budget. */
export function estimateRingAtlasBytes(inst:MetalFxInstance):number{
  const {width,height}=ringAtlasGeometry(inst);
  return Math.min(MAX_BYTES,MAX_FRAMES*width*height*4);
}

function checkAbort(signal:AbortSignal):void {
  if(signal.aborted)throw signal.reason??new DOMException('Ring atlas bake aborted','AbortError');
}

function raster(width:number,height:number):{canvas:RasterCanvas;context:RasterContext}{
  if(typeof OffscreenCanvas!=='undefined'&&typeof OffscreenCanvas.prototype.convertToBlob==='function'){
    const canvas=new OffscreenCanvas(width,height),context=canvas.getContext('2d',{alpha:true});
    if(context)return {canvas,context};
    canvas.width=canvas.height=1;
  }
  const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
  const context=canvas.getContext('2d',{alpha:true});
  if(!context){canvas.width=canvas.height=1;throw Error('Ring atlas Canvas2D unavailable');}
  return {canvas,context};
}

/** Yield between bounded batches. Aborting cancels the outstanding callback. */
function yieldToBrowser(signal:AbortSignal):Promise<void>{
  checkAbort(signal);
  return new Promise((resolve,reject)=>{
    let handle=0;
    const idle=typeof window.requestIdleCallback==='function';
    const cleanup=()=>signal.removeEventListener('abort',abort);
    const abort=()=>{
      if(idle)window.cancelIdleCallback(handle);else cancelAnimationFrame(handle);
      cleanup();reject(signal.reason??new DOMException('Ring atlas bake aborted','AbortError'));
    };
    signal.addEventListener('abort',abort,{once:true});
    const ready=()=>{cleanup();if(signal.aborted)abort();else resolve();};
    handle=idle?window.requestIdleCallback(ready,{timeout:50}):requestAnimationFrame(ready);
  });
}

/** Browser PNG encoding cannot itself be cancelled; release our resources and
 * reject immediately on abort, while still handling its eventual completion. */
function encode(canvas:RasterCanvas,signal:AbortSignal):Promise<Blob>{
  checkAbort(signal);
  return new Promise((resolve,reject)=>{
    const abort=()=>{cleanup();reject(signal.reason??new DOMException('Ring atlas bake aborted','AbortError'));};
    const cleanup=()=>signal.removeEventListener('abort',abort);
    signal.addEventListener('abort',abort,{once:true});
    const done=(blob:Blob|null)=>{
      cleanup();
      if(signal.aborted){abort();return;}
      if(blob)resolve(blob);else reject(Error('Ring atlas PNG encoding failed'));
    };
    try{
      if('convertToBlob' in canvas)canvas.convertToBlob({type:'image/png'}).then(done,error=>{cleanup();reject(error);});
      else canvas.toBlob(done,'image/png');
    }catch(error){cleanup();reject(error);}
  });
}

export async function bakeRingAtlas(inst:MetalFxInstance,preset:PresetMode,signal:AbortSignal):Promise<RingAtlas>{
  checkAbort(signal);
  let baker:ReturnType<typeof createDirectBaker>|null=null;
  let atlas:ReturnType<typeof raster>|null=null,scratch:ReturnType<typeof raster>|null=null;
  let src='',delivered=false;
  try{
    ringAtlasGeometry(inst); // Reject unsupported sizes before opening WebGL.
    // The isolated renderer snapshots native geometry and preset uniforms once.
    baker=createDirectBaker(inst,{...preset});
    const width=baker.canvas.width,height=baker.canvas.height;
    const dimension=Math.min(MAX_DIMENSION,baker.maxTextureSize);
    const geometry=layout(width,height,baker.dpr,dimension),{count,columns,rows}=geometry;
    atlas=raster(width*columns,height*rows);scratch=raster(width,height);
    const target=atlas.context,mix=scratch.context,seamStart=count-SEAM_FRAMES;
    let batchStart=performance.now(),batchFrames=0;
    for(let i=0;i<count;i++){
      checkAbort(signal);
      const x=(i%columns)*width,y=Math.floor(i/columns)*height;
      const phase=PHASE_START+i*PHASE_STEP;
      if(i<seamStart){
        baker.render(phase);target.drawImage(baker.canvas,x,y);
      }else{
        // Blend the final 40 frames into phases 0..0.39. The next loop starts
        // at 0.40, retaining the original forward cadence through the seam.
        // Smoothstep makes blend velocity zero at both ends. On transparent
        // scratch, weighted source-over then lighter sums premultiplied RGBA;
        // two ordinary source-over draws would darken the transparent ring.
        const j=i-seamStart,t=j/(SEAM_FRAMES-1),weight=t*t*(3-2*t);
        mix.clearRect(0,0,width,height);
        mix.globalCompositeOperation='source-over';mix.globalAlpha=1-weight;
        baker.render(phase);mix.drawImage(baker.canvas,0,0);
        mix.globalCompositeOperation='lighter';mix.globalAlpha=weight;
        baker.render(j*PHASE_STEP);mix.drawImage(baker.canvas,0,0);
        mix.globalCompositeOperation='source-over';mix.globalAlpha=1;
        target.drawImage(scratch.canvas,x,y);
      }
      // Individual browser/GPU calls may exceed this budget; never accumulate
      // more than four frames or 4 ms of synchronous work before yielding.
      if(++batchFrames>=4||performance.now()-batchStart>=4){
        if(i+1<count)await yieldToBrowser(signal);
        batchStart=performance.now();batchFrames=0;
      }
    }
    checkAbort(signal);
    const blob=await encode(atlas.canvas,signal);
    checkAbort(signal);src=URL.createObjectURL(blob);
    delivered=true;
    // Cadence and native resolution stay fixed; larger rings use a shorter
    // loop of complete grid rows to meet the decoded byte and dimension caps.
    return {src,...geometry};
  }finally{
    baker?.dispose();
    if(atlas)atlas.canvas.width=atlas.canvas.height=1;
    if(scratch)scratch.canvas.width=scratch.canvas.height=1;
    if(src&&!delivered)URL.revokeObjectURL(src);
  }
}
