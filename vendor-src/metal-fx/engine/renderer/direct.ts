/** Visible rings stay on the GPU: no per-frame Canvas2D copy or hole punch.
 * Paper's material function is unchanged. A crop in the vertex stage matches
 * the original shared texture mapping. A narrow mesh skips the empty centre;
 * the material derivatives remain defined all the way to the rounded edge.
 * The existing low-rate source still supplies the sampled halo/reflections.
 */
import {compileShader,linkProgram,VERT_SHADER_SRC,FRAG_SHADER_SRC} from '../shaders';
import {hexToRgba} from '../color';
import {CANONICAL_GL_SIZE,GL_DPR_CAP} from '../perfConfig';
import {CANONICAL_PILL_W,CANONICAL_PILL_H,type MetalFxInstance} from './core';
import type {PresetMode} from '../presets';

const vertex=VERT_SHADER_SRC
  .replace('layout(location = 0)', 'uniform vec2 u_ctCrop;\nout vec2 v_ctLocal;\nlayout(location = 0)')
  .replace('vec2 uv = gl_Position.xy * .5;', 'v_ctLocal=a_position.xy*.5+.5;\n  vec2 uv=a_position.xy*.5*u_ctCrop;');
const fragment=FRAG_SHADER_SRC.replace(/void\s+main\s*\(\s*\)/,'void ctMaterial()')+`
in vec2 v_ctLocal;
uniform vec2 u_ctSize;
uniform float u_ctRadius,u_ctRing,u_ctAlpha,u_ctDpr;
float ctRoundBox(vec2 p,vec2 halfSize,float radius){
  vec2 q=abs(p)-halfSize+radius;
  return length(max(q,0.))+min(max(q.x,q.y),0.)-radius;
}
void main(){
  vec2 p=(v_ctLocal-.5)*u_ctSize;
  float aa=.6/max(1.,u_ctDpr);
  float outer=ctRoundBox(p,u_ctSize*.5,u_ctRadius);
  float inner=ctRoundBox(p,u_ctSize*.5-u_ctRing,max(0.,u_ctRadius-u_ctRing));
  float mask=(1.-smoothstep(-aa,aa,outer))*smoothstep(-aa,aa,inner);
  ctMaterial();
  fragColor*=mask*u_ctAlpha;
}`;

type Surface={canvas:HTMLCanvasElement;gl:WebGL2RenderingContext;program:WebGLProgram;
  buffer:WebGLBuffer;texture:WebGLTexture|null;uniforms:Record<string,WebGLUniformLocation|null>;
  preset:PresetMode|null;lost:boolean;detach:()=>void;sourceOpacity:string;signature:string;vertices:number;time:number};
const surfaces=new Map<MetalFxInstance,Surface>();
let lastFailure='';
function ringMesh(w:number,h:number,r:number,ring:number,dpr:number):Float32Array{
  const points:number[]=[],steps=16,pad=1/dpr;
  r=Math.max(0,Math.min(r,w/2,h/2));
  const vertex=(corner:number,angle:number,inset:number)=>{
    const radius=Math.max(0,r-inset);
    const cx=corner===0||corner===1?w-inset-radius:inset+radius;
    const cy=corner===0||corner===3?inset+radius:h-inset-radius;
    points.push((cx+radius*Math.cos(angle))/w*2-1,(cy+radius*Math.sin(angle))/h*2-1);
  };
  for(let corner=0;corner<4;corner++)for(let i=0;i<=steps;i++){
    const angle=(corner-1+i/steps)*Math.PI/2;
    vertex(corner,angle,-pad);vertex(corner,angle,ring+pad);
  }
  points.push(...points.slice(0,4));
  return new Float32Array(points);
}
function pipeline(gl:WebGL2RenderingContext){
  const vert=compileShader(gl,gl.VERTEX_SHADER,vertex),frag=compileShader(gl,gl.FRAGMENT_SHADER,fragment);
  const program=linkProgram(gl,vert,frag);gl.deleteShader(vert);gl.deleteShader(frag);gl.useProgram(program);
  const buffer=gl.createBuffer();if(!buffer)throw Error('Direct ring buffer unavailable');
  gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
  const pos=gl.getAttribLocation(program,'a_position');gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0);
  const uniforms:Record<string,WebGLUniformLocation|null>={};
  for(let i=0,n=gl.getProgramParameter(program,gl.ACTIVE_UNIFORMS);i<n;i++){const name=gl.getActiveUniform(program,i)!.name;uniforms[name]=gl.getUniformLocation(program,name);}
  const texture=gl.createTexture();gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,texture);
  gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]));
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  gl.uniform1i(uniforms.u_image,0);gl.uniform1i(uniforms.u_isImage,0);
  gl.disable(gl.BLEND);gl.clearColor(0,0,0,0);
  return {program,buffer,texture,uniforms};
}
export function createDirectSurface(inst:MetalFxInstance):void{
  if(inst.mask||inst.deform||surfaces.has(inst))return;
  const canvas=document.createElement('canvas');canvas.className='ctmb-metal-fx-canvas';
  canvas.dataset.ctmbDirect='';canvas.setAttribute('aria-hidden','true');
  canvas.style.cssText=inst.canvas.style.cssText;
  let gl:WebGL2RenderingContext|null=null;
  try{
    gl=canvas.getContext('webgl2',{alpha:true,premultipliedAlpha:true,antialias:false,powerPreference:'low-power'});
    if(!gl)throw Error('Direct WebGL2 unavailable');
    const built=pipeline(gl);
    const s:Surface={canvas,gl,...built,preset:null,lost:false,detach:()=>{},sourceOpacity:inst.canvas.style.opacity,signature:'',vertices:0,time:0};
    const lost=(event:Event)=>{event.preventDefault();s.lost=true;canvas.hidden=true;inst.canvas.style.opacity=s.sourceOpacity;};
    const restored=()=>{try{
      const preset=s.preset;Object.assign(s,pipeline(s.gl));s.lost=false;s.preset=null;s.signature='';
      updateDirectSurface(inst);if(preset)drawDirectSurface(inst,preset,s.time);canvas.hidden=false;
    }catch(error){s.lost=true;lastFailure=String(error);}};
    canvas.addEventListener('webglcontextlost',lost);canvas.addEventListener('webglcontextrestored',restored);
    s.detach=()=>{canvas.removeEventListener('webglcontextlost',lost);canvas.removeEventListener('webglcontextrestored',restored);};
    inst.canvas.after(canvas);surfaces.set(inst,s);updateDirectSurface(inst);
  }catch(error){lastFailure=String(error);gl?.getExtension('WEBGL_lose_context')?.loseContext();canvas.remove();}
}
export function hasDirectSurface(inst:MetalFxInstance):boolean{return !!surfaces.get(inst)&&!surfaces.get(inst)!.lost;}
export function updateDirectSurface(inst:MetalFxInstance):void{
  const s=surfaces.get(inst);if(!s||s.lost)return;
  const dpr=Math.min(GL_DPR_CAP,window.devicePixelRatio||1),w=inst.cssWidth,h=inst.cssHeight;
  const signature=[w,h,dpr,inst.cornerRadius,inst.ringCssPx,inst.shaderScale,inst.opacityMul].join(',');
  if(signature===s.signature)return;s.signature=signature;
  s.canvas.width=Math.max(1,Math.round(w*dpr));s.canvas.height=Math.max(1,Math.round(h*dpr));
  s.gl.viewport(0,0,s.canvas.width,s.canvas.height);
  const {gl,uniforms:u}=s;
  const mesh=ringMesh(w,h,inst.cornerRadius,inst.ringCssPx,dpr);s.vertices=mesh.length/2;
  gl.bindBuffer(gl.ARRAY_BUFFER,s.buffer);gl.bufferData(gl.ARRAY_BUFFER,mesh,gl.STATIC_DRAW);
  gl.uniform2f(u.u_ctCrop,Math.min(1,w/(CANONICAL_PILL_W*inst.shaderScale)),Math.min(1,h/(CANONICAL_PILL_H*inst.shaderScale)));
  gl.uniform2f(u.u_ctSize,w,h);gl.uniform1f(u.u_ctRadius,inst.cornerRadius);gl.uniform1f(u.u_ctRing,inst.ringCssPx);gl.uniform1f(u.u_ctDpr,dpr);
  gl.uniform2f(u.u_resolution,CANONICAL_GL_SIZE*dpr,CANONICAL_GL_SIZE*dpr);gl.uniform1f(u.u_pixelRatio,dpr);
  s.preset=null;
}
export function drawDirectSurface(inst:MetalFxInstance,preset:PresetMode,time:number):boolean{
  const s=surfaces.get(inst);if(!s||s.lost)return false;
  s.time=time;
  const {gl,uniforms:u}=s;
  if(s.preset!==preset){
    s.preset=preset;
    gl.uniform4fv(u.u_colorBack,hexToRgba(preset.colorBack));gl.uniform4fv(u.u_colorTint,hexToRgba(preset.colorTint));
    for(const field of ['repetition','softness','shiftRed','shiftBlue','distortion','contour','angle','shape','originX','originY','worldWidth','worldHeight','fit','scale','rotation','offsetX','offsetY'] as const)gl.uniform1f(u[`u_${field}`],preset[field]);
    gl.uniform1f(u.u_imageAspectRatio,1);gl.uniform1f(u.u_ctAlpha,inst.opacityMul*preset.shaderOpacity);
  }
  gl.uniform1f(u.u_time,time*preset.speed);gl.clear(gl.COLOR_BUFFER_BIT);gl.drawArrays(gl.TRIANGLE_STRIP,0,s.vertices);
  if(inst.canvas.style.opacity!=='0')inst.canvas.style.opacity='0';
  return true;
}
export function destroyDirectSurface(inst:MetalFxInstance):void{
  const s=surfaces.get(inst);if(!s)return;surfaces.delete(inst);s.detach();
  inst.canvas.style.opacity=s.sourceOpacity;s.canvas.remove();
  s.gl.deleteBuffer(s.buffer);s.gl.deleteTexture(s.texture);s.gl.deleteProgram(s.program);
  s.gl.getExtension('WEBGL_lose_context')?.loseContext();
}
export function disposeDirectSurfaces():void{for(const inst of surfaces.keys())destroyDirectSurface(inst);lastFailure='';}
export function directState(){return {directSurfaces:surfaces.size,directError:lastFailure};}
