/** Retain the original material frames, then play them on the compositor.
 * No per-frame JS, shader calls or Canvas2D uploads in the cached ring path.
 * The shared low-rate source still drives the original halo and reflections.
 */
import type {MetalFxInstance} from './core';
import type {PresetMode} from '../presets';
import {bakeRingAtlas,estimateRingAtlasBytes} from './ring-atlas';
import {setDirectSurfaceCached} from './direct';

type Player={key:string;abort:AbortController;bytes:number;url:string;node:HTMLDivElement|null;animation:Animation|null;time:number;disposed:boolean;rate:number;playing:boolean|null;sourceOpacity:string};
const players=new Map<MetalFxInstance,Player>(),failed=new WeakMap<MetalFxInstance,string>();
const LIMIT=64*1024*1024;
let reserved=0,speed=1,paused=false,error='',bakes=0;
function keyOf(inst:MetalFxInstance,preset:PresetMode){return JSON.stringify([inst.cssWidth,inst.cssHeight,Math.min(2,window.devicePixelRatio||1),inst.cornerRadius,inst.ringCssPx,inst.shaderScale,inst.opacityMul,preset]);}
function dispose(inst:MetalFxInstance,entry:Player){
  if(entry.disposed)return;entry.disposed=true;entry.abort.abort();entry.animation?.cancel();entry.node?.remove();
  if(entry.url)URL.revokeObjectURL(entry.url);
  if(entry.node&&!setDirectSurfaceCached(inst,false))inst.canvas.style.opacity=entry.sourceOpacity;
  reserved-=entry.bytes;players.delete(inst);
}
function setPlaying(inst:MetalFxInstance,entry:Player){
  const animation=entry.animation;if(!animation)return;
  if(entry.rate!==speed){animation.updatePlaybackRate(speed);entry.rate=speed;}
  const playing=!(paused||inst.paused||!inst.visible||document.hidden);
  if(entry.playing!==playing){if(playing)animation.play();else animation.pause();entry.playing=playing;}
}
export function syncRingPlayer(inst:MetalFxInstance,preset:PresetMode,time:number):boolean{
  if(inst.mask||inst.deform)return false;
  const key=keyOf(inst,preset);let entry=players.get(inst);
  if(entry&&entry.key!==key){dispose(inst,entry);entry=undefined;}
  if(entry){entry.time=time;setPlaying(inst,entry);return !!entry.node;}
  if(paused||inst.paused||!inst.visible||document.hidden||failed.get(inst)===key)return false;
  let bytes:number;
  try{bytes=estimateRingAtlasBytes(inst);}catch{return false;}
  if(!bytes||reserved+bytes>LIMIT)return false;
  entry={key,abort:new AbortController(),bytes,url:'',node:null,animation:null,time,disposed:false,rate:1,playing:null,sourceOpacity:inst.canvas.style.opacity};
  players.set(inst,entry);reserved+=bytes;const item=entry;
  bakeRingAtlas(inst,preset,item.abort.signal).then(async atlas=>{
    if(item.disposed){URL.revokeObjectURL(atlas.src);return;}
    item.url=atlas.src;const img=new Image();img.alt='';img.draggable=false;img.src=atlas.src;
    await img.decode();if(item.disposed)return;
    const node=document.createElement('div');node.className='ctmb-ring-frames';node.setAttribute('aria-hidden','true');
    node.style.cssText='position:absolute;inset:0;overflow:hidden;border-radius:inherit;pointer-events:none;contain:strict;z-index:0';
    const w=atlas.width/atlas.dpr,h=atlas.height/atlas.dpr;
    img.style.cssText=`display:block;max-width:none;width:${w*atlas.columns}px;height:${h*atlas.rows}px;position:absolute;left:0;top:0;pointer-events:none;will-change:transform`;
    node.append(img);inst.canvas.after(node);item.node=node;
    const frames=Array.from({length:atlas.count+1},(_,i)=>{const index=i%atlas.count;return {transform:`translate3d(${-(index%atlas.columns)*w}px,${-Math.floor(index/atlas.columns)*h}px,0)`,offset:i/atlas.count,easing:'steps(1,end)'};});
    item.animation=img.animate(frames,{duration:atlas.count*atlas.frameMs,iterations:Infinity});
    // Material phase advances .6 units/second while idle, exactly as before.
    item.animation.currentTime=(((item.time-.4)/.01)%atlas.count+atlas.count)%atlas.count*atlas.frameMs;
    setDirectSurfaceCached(inst,true);
    inst.canvas.style.opacity='0';setPlaying(inst,item);bakes++;
  }).catch(e=>{
    if(item.disposed)return;
    error=String(e?.message||e).slice(0,160);failed.set(inst,key);dispose(inst,item);
  });
  return false;
}
export function hasRingPlayer(inst:MetalFxInstance){return !!players.get(inst)?.node;}
export function invalidateRingPlayer(inst:MetalFxInstance,preset:PresetMode){const item=players.get(inst);if(item&&(inst.mask||inst.deform||item.key!==keyOf(inst,preset)))removeRingPlayer(inst);}
export function refreshRingDocumentVisibility(){for(const [inst,item] of players){if(document.hidden&&!item.node)dispose(inst,item);else setPlaying(inst,item);}}
export function removeRingPlayer(inst:MetalFxInstance){const item=players.get(inst);if(item)dispose(inst,item);failed.delete(inst);}
export function pauseRingPlayers(value:boolean){paused=value;for(const [inst,item] of players){if(value&&!item.node)dispose(inst,item);else setPlaying(inst,item);}}
export function setRingSpeed(value:number){if(speed===value)return;speed=value;for(const [inst,item] of players)setPlaying(inst,item);}
export function refreshRingVisibility(inst:MetalFxInstance){const item=players.get(inst);if(item)setPlaying(inst,item);}
export function disposeRingPlayers(){for(const [inst,item] of players)dispose(inst,item);reserved=0;paused=false;speed=1;error='';bakes=0;}
export function ringPlayerState(){return {cachedRings:[...players.values()].filter(p=>!!p.node).length,ringCachePending:[...players.values()].filter(p=>!p.node).length,ringCacheBytes:reserved,ringCacheBakes:bakes,ringCacheError:error};}
