// Only the native label's glyphs receive the softly blended color field.
// Keep the native text sharp. A decorative, accessibility-empty pseudo-element
// crossfades a second fixed color field; neither field is repainted per frame.
export const WORDMARK_CSS=`
[data-codex-tweaks-mb-wordmark]:not(svg) {
  position:relative;
  --ctmb-word-ink:#d7dce7;--ctmb-word-blue:#91d2e7;--ctmb-word-violet:#ccafe8;--ctmb-word-rose:#e2bfce;
  background-image:radial-gradient(ellipse at 30% 35%,var(--ctmb-word-blue),transparent 57%),radial-gradient(ellipse at 70% 62%,var(--ctmb-word-violet),transparent 58%),linear-gradient(110deg,var(--ctmb-word-ink) 8%,var(--ctmb-word-rose) 49%,var(--ctmb-word-ink) 90%);
  background-size:210% 220%,230% 210%,180% 100%;background-position:0% 45%,100% 55%,25% 50%;background-repeat:no-repeat;
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
}
[data-codex-tweaks-mb-wordmark]:not(svg)::after {
  content:attr(data-codex-tweaks-mb-wordmark-text) / "";
  position:absolute;inset:0;pointer-events:none;font:inherit;letter-spacing:inherit;white-space:inherit;
  background-image:radial-gradient(ellipse at 75% 60%,var(--ctmb-word-blue),transparent 65%),radial-gradient(ellipse at 22% 35%,var(--ctmb-word-rose),transparent 65%),linear-gradient(110deg,var(--ctmb-word-violet),var(--ctmb-word-ink));
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
  opacity:.18;animation:ctmb-wordmark-mist 14s cubic-bezier(.45,0,.55,1) infinite alternate;
}
[data-codex-tweaks-mb-wordmark="light"]:not(svg) {--ctmb-word-ink:#4f5265;--ctmb-word-blue:#36778b;--ctmb-word-violet:#765592;--ctmb-word-rose:#94617e}
[data-codex-tweaks-mb-wordmark-paused="true"]:not(svg)::after {animation-play-state:paused}
[data-codex-tweaks-mb-svg-wordmark] {
  position:absolute;pointer-events:none;contain:strict;z-index:1;
  --ctmb-word-ink:#d7dce7;--ctmb-word-blue:#91d2e7;--ctmb-word-violet:#ccafe8;--ctmb-word-rose:#e2bfce;
  -webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:0 0;mask-position:0 0;
  -webkit-mask-size:100% 100%;mask-size:100% 100%;mask-mode:alpha;
  background-image:radial-gradient(ellipse at 22% 35%,var(--ctmb-word-blue),transparent 57%),radial-gradient(ellipse at 76% 62%,var(--ctmb-word-violet),transparent 58%),linear-gradient(110deg,var(--ctmb-word-ink) 8%,var(--ctmb-word-rose) 49%,var(--ctmb-word-ink) 90%);
}
[data-codex-tweaks-mb-svg-wordmark]::after {
  content:"";position:absolute;inset:0;pointer-events:none;
  background-image:radial-gradient(ellipse at 78% 60%,var(--ctmb-word-blue),transparent 65%),radial-gradient(ellipse at 20% 35%,var(--ctmb-word-rose),transparent 65%),linear-gradient(110deg,var(--ctmb-word-violet),var(--ctmb-word-ink));
  opacity:.18;animation:ctmb-wordmark-mist 14s cubic-bezier(.45,0,.55,1) infinite alternate;
}
[data-codex-tweaks-mb-svg-wordmark="light"] {--ctmb-word-ink:#4f5265;--ctmb-word-blue:#36778b;--ctmb-word-violet:#765592;--ctmb-word-rose:#94617e}
[data-codex-tweaks-mb-svg-wordmark][data-paused="true"]::after {animation-play-state:paused}
@keyframes ctmb-wordmark-mist {from{opacity:.18}to{opacity:.9}}
@media (prefers-reduced-motion:reduce){[data-codex-tweaks-mb-wordmark]:not(svg)::after,[data-codex-tweaks-mb-svg-wordmark]::after{animation-play-state:paused!important}}
@media (forced-colors:active){[data-codex-tweaks-mb-wordmark]:not(svg){background:none!important;-webkit-text-fill-color:currentColor!important}[data-codex-tweaks-mb-wordmark]:not(svg)::after,[data-codex-tweaks-mb-svg-wordmark]{display:none!important}}
`;

const SVG_NS='http://www.w3.org/2000/svg';
const OWN='data-codex-tweaks-mb-owned';
const SHAPES=new Set(['path','rect','circle','ellipse','line','polyline','polygon']);
const SKIP=new Set(['title','desc','metadata','defs','style','script']);
const GEOMETRY=['d','x','y','width','height','rx','ry','cx','cy','r','x1','x2','y1','y2','points','pathLength','transform'];
const PRESENTATION=['fill','fill-rule','fill-opacity','stroke','stroke-width','stroke-linecap','stroke-linejoin','stroke-miterlimit','stroke-dasharray','stroke-dashoffset','stroke-opacity','opacity','vector-effect','display','visibility'];
const WATCHED=['viewBox','preserveAspectRatio','class','style',...GEOMETRY,...PRESENTATION];
const positions=new WeakMap();
const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[char]));
const localName=node=>(node.localName||node.tagName||'').toLowerCase();
const attr=(node,key)=>node.getAttribute(key);
const css=(node)=>node.ownerDocument?.defaultView?.getComputedStyle(node);

// Exported for sanitizer tests. The data URI contains only local vector geometry,
// never title/description text, IDs, links, image data, handlers, or native DOM.
// Unsupported referenced geometry deliberately falls back to the native logo.
export function svgWordmarkMask(svg,{width,height}) {
  if(localName(svg)!=='svg'||!Number.isFinite(width)||!Number.isFinite(height)||width<=0||height<=0||width>600||height>160)return null;
  const box=(attr(svg,'viewBox')||`0 0 ${width} ${height}`).trim().split(/[\s,]+/).map(Number);
  if(box.length!==4||box.some(value=>!Number.isFinite(value))||box[2]<=0||box[3]<=0)return null;
  const aspect=attr(svg,'preserveAspectRatio')||'xMidYMid meet';
  if(!/^(?:none|x(?:Min|Mid|Max)Y(?:Min|Mid|Max)(?:\s+(?:meet|slice))?)$/.test(aspect.trim()))return null;
  let nodes=0,shapes=0,total=0;
  const copy=node=>{
    const tag=localName(node);if(SKIP.has(tag))return '';
    if(tag!=='g'&&!SHAPES.has(tag))throw new Error('Unsupported SVG wordmark geometry');
    if(++nodes>128)throw new Error('SVG wordmark too complex');
    const computed=css(node),values=[];
    // References may hide part of a shape. Rendering a partial copy could paint
    // outside the native letters, so retain the unmodified logo in those cases.
    for(const key of ['clip-path','mask','filter']){
      const value=computed?.getPropertyValue(key)||attr(node,key);
      if(value&&value!=='none')throw new Error('Referenced SVG wordmark paint');
    }
    for(const key of GEOMETRY){
      const value=attr(node,key);if(value===null||value==='')continue;
      if(value.length>120000||/url\s*\(|[<>]/i.test(value))throw new Error('Invalid SVG geometry');
      values.push(`${key}="${escape(value)}"`);
    }
    for(const key of PRESENTATION){
      const value=(computed?.getPropertyValue(key)||attr(node,key)||'').trim();if(!value)continue;
      if(value.length>256||/url\s*\(|var\s*\(|[<>"'\\;]/i.test(value))throw new Error('Referenced SVG paint');
      values.push(`${key}="${escape(value==='currentcolor'||value==='currentColor'?'white':value)}"`);
    }
    if(SHAPES.has(tag))shapes++;
    const content=[...node.children].map(copy).join('');
    const result=`<${tag}${values.length?' '+values.join(' '):''}>${content}</${tag}>`;
    total+=result.length;if(total>200000)throw new Error('SVG wordmark too large');
    return result;
  };
  try{
    const content=[...svg.children].map(copy).join('');if(!shapes)return null;
    const root=css(svg),opacity=root?.getPropertyValue('opacity')||'1';
    for(const key of ['clip-path','mask','filter']){const value=root?.getPropertyValue(key)||attr(svg,key);if(value&&value!=='none')return null;}
    if(!/^\s*(?:0?(?:\.\d+)?|1(?:\.0+)?)\s*$/.test(opacity))return null;
    const xml=`<svg xmlns="${SVG_NS}" width="${width}" height="${height}" viewBox="${box.join(' ')}" preserveAspectRatio="${escape(aspect)}" opacity="${opacity}">${content}</svg>`;
    return `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(xml)}")`;
  }catch{return null;}
}

function holdPosition(parent){
  let entry=positions.get(parent);
  if(!entry){
    const style=parent.style,changed=css(parent)?.position==='static';
    entry={count:0,changed,value:style.getPropertyValue('position'),priority:style.getPropertyPriority('position')};
    positions.set(parent,entry);if(changed)style.setProperty('position','relative');
  }
  entry.count++;
  return ()=>{
    if(--entry.count)return;positions.delete(parent);
    // Do not overwrite a native change made while the effect was active.
    if(entry.changed&&parent.style.getPropertyValue('position')==='relative'&&!parent.style.getPropertyPriority('position')){
      if(entry.value)parent.style.setProperty('position',entry.value,entry.priority);else parent.style.removeProperty('position');
    }
  };
}

function inheritedScale(parent){
  let x=1,y=1;
  for(let node=parent;node;node=node.parentElement){
    const computed=css(node),value=computed?.getPropertyValue('transform')||'none';
    if(value!=='none'){
      const matrix=value.match(/^matrix(3d)?\(([^)]+)\)$/),entries=matrix?.[2].trim().split(/[\s,]+/).map(Number);
      if(!entries||entries.some(entry=>!Number.isFinite(entry)))return null;
      if(matrix[1]){
        if(entries.length!==16||[1,2,3,4,6,7,8,9,11,14].some(index=>Math.abs(entries[index])>1e-6)||entries[10]!==1||entries[15]!==1)return null;
        x*=entries[0];y*=entries[5];
      }else{
        if(entries.length!==6||Math.abs(entries[1])>1e-6||Math.abs(entries[2])>1e-6)return null;
        x*=entries[0];y*=entries[3];
      }
    }
    const scale=computed?.getPropertyValue('scale');
    if(scale&&scale!=='none'){
      const values=scale.trim().split(/\s+/).map(Number);
      if(values.length>2||values.some(value=>!Number.isFinite(value)))return null;
      x*=values[0];y*=values[1]??values[0];
    }
    const rotate=computed?.getPropertyValue('rotate');if(rotate&&rotate!=='none'&&!/^0(?:deg|rad|turn)?$/.test(rotate))return null;
    const zoom=computed?.getPropertyValue('zoom');
    if(zoom&&zoom!=='normal'){const factor=parseFloat(zoom)/(zoom.endsWith('%')?100:1);if(!Number.isFinite(factor))return null;x*=factor;y*=factor;}
  }
  return x>0&&y>0?{x,y}:null;
}

export function mountSvgWordmark(svg){
  const parent=svg?.parentElement,document=svg?.ownerDocument,view=document?.defaultView;
  if(!parent||localName(svg)!=='svg'||svg.namespaceURI!==SVG_NS)return {refresh(){},dispose(){}};
  if(view?.CSS?.supports&&!view.CSS.supports('mask-image','linear-gradient(white, white)')&&!view.CSS.supports('-webkit-mask-image','linear-gradient(white, white)'))return {refresh(){},dispose(){}};
  const layer=document.createElement('span');
  layer.setAttribute(OWN,'wordmark');layer.setAttribute('aria-hidden','true');
  layer.setAttribute('data-codex-tweaks-mb-svg-wordmark','dark');layer.setAttribute('data-paused','true');
  layer.style.display='none';
  const releasePosition=holdPosition(parent);parent.append(layer);
  let disposed=false,queued=false,lastMask='',lastGeometry='',theme='dark',paused=true;
  function measure(){
    if(disposed)return;
    if(!svg.isConnected||svg.parentElement!==parent){layer.style.display='none';return;}
    const bounds=svg.getBoundingClientRect(),host=parent.getBoundingClientRect(),scale=inheritedScale(parent);
    if(!scale){layer.style.display='none';return;}
    const scaleX=scale.x,scaleY=scale.y;
    const width=bounds.width/scaleX,height=bounds.height/scaleY;
    const mask=svgWordmarkMask(svg,{width,height});
    if(!mask){layer.style.display='none';return;}
    const left=(bounds.left-host.left)/scaleX-parent.clientLeft+parent.scrollLeft;
    const top=(bounds.top-host.top)/scaleY-parent.clientTop+parent.scrollTop;
    const geometry=`${left},${top},${width},${height}`;
    if(geometry!==lastGeometry){
      Object.assign(layer.style,{left:`${left}px`,top:`${top}px`,width:`${width}px`,height:`${height}px`});lastGeometry=geometry;
    }
    if(mask!==lastMask){layer.style.setProperty('-webkit-mask-image',mask);layer.style.setProperty('mask-image',mask);lastMask=mask;}
    layer.style.display='block';
  }
  function schedule(){
    if(disposed||queued)return;queued=true;
    // Coalesce native path updates. There is no recurring JS animation loop.
    queueMicrotask(()=>{queued=false;if(!disposed)measure();});
  }
  const mutation=typeof view?.MutationObserver==='function'?new view.MutationObserver(schedule):null;
  mutation?.observe(svg,{subtree:true,childList:true,attributes:true,attributeFilter:WATCHED});
  const resize=typeof view?.ResizeObserver==='function'?new view.ResizeObserver(schedule):null;
  resize?.observe(svg);resize?.observe(parent);
  measure();
  return {
    // State-only refresh does not read layout. Calling refresh() explicitly
    // remeasures geometry; native SVG / parent resize is observed independently.
    refresh(state){
      if(disposed)return;
      const nextTheme=state?.theme??svg.getAttribute('data-codex-tweaks-mb-wordmark')??theme;
      const nextPaused=state?.paused??(svg.getAttribute('data-codex-tweaks-mb-wordmark-paused')==='true');
      if(nextTheme!==theme){theme=nextTheme;layer.setAttribute('data-codex-tweaks-mb-svg-wordmark',theme==='light'?'light':'dark');}
      if(nextPaused!==paused){paused=nextPaused;layer.setAttribute('data-paused',String(paused));}
      if(!state)measure();
    },
    dispose(){
      if(disposed)return;disposed=true;mutation?.disconnect();resize?.disconnect();layer.remove();releasePosition();
      lastMask='';lastGeometry='';
    }
  };
}
