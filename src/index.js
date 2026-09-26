import {readConfig,writeConfig,normalize,KEY} from './config.js';
import {OWN,METAL,POSITION,SURFACE_MARK,CSS} from './style.js';
import {discover,geometry,modelTextBand,neighbor,isSidebarRow,theme,running,relevantMutation} from './targets.js';
import {startRuntime,disposeRuntime,mountMetal,mountBeam,setMotionPaused,setActivity,invalidateReflectionGeometry,runtimeState,isMetalFxSupported} from './vendor/material-runtime.js';

export function activate({root,onCleanup,api}) {
  const route=new URLSearchParams(location.search).get('initialRoute');
  if(route==='/avatar-overlay'||location.pathname.endsWith('/avatar-overlay-composition-surface.html'))return;
  let config=readConfig(),live=true,timer=0,layoutRaf=0,selectionRaf=0,lastError='';
  let visibleTheme=theme(),paused=false,scans=0,retargets=0;
  const metals=new Map(),beams=new Map(),marks=new Map(),models=new Map(),wordmarks=new Map(),failed=new WeakSet();
  const reduced=matchMedia('(prefers-reduced-motion:reduce)'),contrast=matchMedia('(forced-colors:active)'),systemTheme=matchMedia('(prefers-color-scheme:dark)');
  const supported=isMetalFxSupported();
  const style=document.createElement('style');style.setAttribute(OWN,'style');style.textContent=CSS;root.append(style);
  // Wide halos and Beam live outside the application's scrolling layout.
  const overlay=document.createElement('div');overlay.className='ctmb-overlay';overlay.setAttribute(OWN,'overlay');overlay.setAttribute('aria-hidden','true');document.body.append(overlay);
  startRuntime();
  function attribute(el,key,value){const before=el.getAttribute(key);el.setAttribute(key,value);return()=>{if(before===null)el.removeAttribute(key);else el.setAttribute(key,before);};}
  function position(node,box){
    node.hidden=!box;if(!box)return;
    node.style.transform=`translate3d(${box.x}px,${box.y}px,0)`;
    node.style.width=`${box.width}px`;node.style.height=`${box.height}px`;node.style.borderRadius=`${box.radius}px`;
  }
  function layout(){
    layoutRaf=0;if(!live)return;
    const batch=[];
    for(const item of metals.values())batch.push([item.portal,geometry(item.el)]);
    for(const item of beams.values())batch.push([item.node,geometry(item.el)]);
    for(const [node,box] of batch)position(node,box);
    for(const [el,item] of models)positionModel(el,item);
  }
  function scheduleLayout(){invalidateReflectionGeometry();if(live&&!layoutRaf)layoutRaf=requestAnimationFrame(layout);schedule();}
  function prepare(el,kind,box){
    const restore=[];
    const node=document.createElement('div');node.setAttribute(OWN,kind);node.setAttribute('aria-hidden','true');node.className=`ctmb-${kind}-mount`;
    let portal=null;
    if(kind==='metal'){
      if(getComputedStyle(el).position==='static')restore.push(attribute(el,POSITION,''));
      restore.push(attribute(el,METAL,visibleTheme));
      portal=document.createElement('div');portal.className='ctmb-glow-portal';portal.setAttribute(OWN,'glow');overlay.append(portal);position(portal,box);
      el.append(node);
    }else{overlay.append(node);position(node,box);}
    return {el,node,portal,handle:null,restore,neighbor:null,neighbors:[],signature:''};
  }
  function remove(map,el){
    const item=map.get(el);if(!item)return;map.delete(el);item.handle?.dispose();item.node.remove();item.portal?.remove();
    for(const restore of item.restore.reverse())restore();resize.unobserve(el);
  }
  function error(el,error){failed.add(el);lastError=String(error?.message||error).slice(0,180);schedule();}
  function updateMetal(el,box){
    let item=metals.get(el);
    if(item&&!item.node.isConnected){remove(metals,el);item=null;}
    if(!item){item=prepare(el,'metal',box);metals.set(el,item);resize.observe(el);}
    position(item.portal,box);
    const candidate=neighbor(el);
    const nextNeighbor=[...metals.values()].some(other=>other!==item&&other.neighbor===candidate)?null:candidate;
    if(nextNeighbor!==item.neighbor){item.neighbor=nextNeighbor;item.neighbors=nextNeighbor?[{current:nextNeighbor}]:[];item.signature='';}
    el.setAttribute(METAL,visibleTheme);
    const props={button:el,glowPortal:item.portal,neighbors:item.neighbors,radius:box.radius,variant:box.variant,theme:visibleTheme,strength:config.intensity,paused,preset:config.palette};
    const signature=JSON.stringify([box.radius,box.variant,visibleTheme,config.intensity,paused,config.palette]);
    if(signature===item.signature)return;item.signature=signature;
    if(item.handle)item.handle.update(props);else item.handle=mountMetal(item.node,props,e=>error(el,e));
  }
  function updateBeam(el,box){
    let item=beams.get(el);
    if(item&&!item.node.isConnected){remove(beams,el);item=null;}
    if(!item){item=prepare(el,'beam',box);beams.set(el,item);resize.observe(el);}
    position(item.node,box);item.node.dataset.paused=String(paused);item.node.dataset.theme=visibleTheme;
    const props={radius:box.radius,theme:visibleTheme,running:running(el),paused};
    const signature=JSON.stringify(props);if(signature===item.signature)return;item.signature=signature;
    if(item.handle)item.handle.update(props);else item.handle=mountBeam(item.node,props,e=>error(el,e));
  }
  function updateMarks(found){
    const wanted=new Map();
    if(config.broad&&!contrast.matches){for(const el of found.controls)wanted.set(el,isSidebarRow(el)?'sidebar-row':'control');for(const el of found.panels)wanted.set(el,'panel');}
    for(const [el,item] of marks)if(!wanted.has(el)||wanted.get(el)!==item.kind){item.restore();marks.delete(el);}
    for(const [el,kind] of wanted){
      if(marks.has(el)){const item=marks.get(el);if(item.node&&!item.node.isConnected)el.append(item.node);continue;}
      const restore=[attribute(el,SURFACE_MARK,kind)];let node=null;
      if(kind==='sidebar-row'){
        if(getComputedStyle(el).position==='static')restore.push(attribute(el,POSITION,''));
        node=document.createElement('div');node.className='ctmb-sidebar-light';node.setAttribute(OWN,'sidebar-light');node.setAttribute('aria-hidden','true');el.append(node);
      }
      marks.set(el,{kind,node,restore(){node?.remove();for(const reset of restore.reverse())reset();}});
    }
  }
  function reuseSidebarMaterials(wanted){
    const spare=[...metals.values()].filter(item=>!wanted.has(item.el)&&isSidebarRow(item.el));
    for(const [el] of wanted){
      if(metals.has(el)||!isSidebarRow(el)||!spare.length)continue;
      const item=spare.shift(),old=item.el;metals.delete(old);resize.unobserve(old);
      for(const reset of item.restore.reverse())reset();item.restore=[];
      if(getComputedStyle(el).position==='static')item.restore.push(attribute(el,POSITION,''));
      item.restore.push(attribute(el,METAL,visibleTheme));el.append(item.node);
      item.el=el;item.signature='';metals.set(el,item);resize.observe(el);retargets++;
    }
  }
  function positionModel(el,item){
    const band=modelTextBand(el);item.node.hidden=!band;if(!band)return;
    if(item.anchor!==band.anchor){if(item.anchor)item.resize.unobserve(item.anchor);item.anchor=band.anchor;if(item.anchor)item.resize.observe(item.anchor);}
    const signature=JSON.stringify([band.x,band.y,band.width,band.height]);if(signature===item.signature)return;item.signature=signature;
    item.node.style.left=`${band.x}px`;item.node.style.top=`${band.y}px`;
    item.node.style.width=`${band.width}px`;item.node.style.height=`${band.height}px`;
  }
  function removeModel(el,item){
    decorationVisibility.unobserve(el);item.resize.disconnect();item.observer.disconnect();item.node.remove();
    for(const reset of item.restore.reverse())reset();models.delete(el);
  }
  function updateModels(found){
    const wanted=new Set(contrast.matches?[]:found.models);
    for(const [el,item] of models)if(!wanted.has(el))removeModel(el,item);
    for(const el of wanted){
      let item=models.get(el);
      if(!item){
        const restore=[attribute(el,'data-codex-tweaks-mb-model',visibleTheme)];
        if(getComputedStyle(el).position==='static')restore.push(attribute(el,POSITION,''));
        const node=document.createElement('span');node.className='ctmb-model-haze';node.setAttribute(OWN,'model-haze');node.setAttribute('aria-hidden','true');
        node.append(document.createElement('i'),document.createElement('i'));el.append(node);
        const resize=new ResizeObserver(scheduleLayout);
        const observer=new MutationObserver(records=>{if(records.some(record=>!record.target.parentElement?.closest?.(`[${OWN}]`)&&!record.target.hasAttribute?.(OWN)))scheduleLayout();});
        observer.observe(el,{subtree:true,childList:true,characterData:true});resize.observe(el);
        item={node,restore,resize,observer,anchor:null,signature:'',visible:true};models.set(el,item);decorationVisibility.observe(el);
      }
      if(!item.node.isConnected)el.append(item.node);
      el.setAttribute('data-codex-tweaks-mb-model',visibleTheme);item.node.dataset.paused=String(paused||!item.visible);
      positionModel(el,item);
    }
  }
  function removeWordmark(el,item){
    decorationVisibility.unobserve(el);item.observer.disconnect();for(const reset of item.restore.reverse())reset();wordmarks.delete(el);
  }
  function updateWordmarks(found){
    const wanted=new Set(contrast.matches?[]:found.wordmarks);
    for(const [el,item] of wordmarks)if(!wanted.has(el))removeWordmark(el,item);
    for(const el of wanted){
      let item=wordmarks.get(el);
      if(!item){
        const restore=[attribute(el,'data-codex-tweaks-mb-wordmark-text',el.textContent.trim()),attribute(el,'data-codex-tweaks-mb-wordmark',visibleTheme),attribute(el,'data-codex-tweaks-mb-wordmark-paused',String(paused))];
        // Observe only the mode trigger, so replacing its native label is
        // rediscovered without listening to streamed message text.
        const observer=new MutationObserver(schedule);
        observer.observe(el.closest('button,[role="button"]')||el.parentElement,{subtree:true,childList:true,characterData:true});
        item={restore,observer,visible:true};wordmarks.set(el,item);decorationVisibility.observe(el);
      }
      el.setAttribute('data-codex-tweaks-mb-wordmark-text',el.textContent.trim());
      el.setAttribute('data-codex-tweaks-mb-wordmark',visibleTheme);
      el.setAttribute('data-codex-tweaks-mb-wordmark-paused',String(paused||!item.visible));
    }
  }
  function scan(){
    if(timer)clearTimeout(timer);timer=0;if(!live)return;scans++;invalidateReflectionGeometry();
    visibleTheme=theme();paused=!config.motion||reduced.matches||document.hidden||!document.hasFocus();
    const found=discover(config.broad,config.modelHaze,config.wordmarkHaze),wantMetal=new Map(),wantBeam=new Map();updateMarks(found);updateModels(found);updateWordmarks(found);
    const add=(el)=>{const box=geometry(el);if(box&&!failed.has(el))wantMetal.set(el,box);};
    if(!contrast.matches){
      if(supported){
        for(const el of found.buttons){add(el);if(wantMetal.size>=3)break;}
        for(const el of found.selected){if(wantMetal.size>=5)break;add(el);}
      }
      if(config.beam)for(const el of found.composers){const box=geometry(el);if(box&&!failed.has(el))wantBeam.set(el,box);if(wantBeam.size>=2)break;}
    }
    reuseSidebarMaterials(wantMetal);
    for(const el of metals.keys())if(!wantMetal.has(el))remove(metals,el);
    for(const el of beams.keys())if(!wantBeam.has(el))remove(beams,el);
    for(const [el,box] of wantMetal)try{updateMetal(el,box);}catch(e){error(el,e);remove(metals,el);}
    for(const [el,box] of wantBeam)try{updateBeam(el,box);}catch(e){error(el,e);remove(beams,el);}
    setActivity([...wantBeam.keys(),...wantMetal.keys()].some(running));
    setMotionPaused(paused);
  }
  function schedule(){if(live&&!timer)timer=window.setTimeout(scan,90);}
  function scheduleSelection(){if(live&&!selectionRaf)selectionRaf=requestAnimationFrame(()=>{selectionRaf=0;scan();});}
  const resize=new ResizeObserver(scheduleLayout);
  const decorationVisibility=new IntersectionObserver(entries=>{for(const entry of entries){const item=models.get(entry.target),wordmark=wordmarks.get(entry.target);if(item){item.visible=entry.isIntersecting;item.node.dataset.paused=String(paused||!item.visible);}if(wordmark){wordmark.visible=entry.isIntersecting;entry.target.setAttribute('data-codex-tweaks-mb-wordmark-paused',String(paused||!wordmark.visible));}}});
  const observer=new MutationObserver(records=>{
    const removedMount=records.some(record=>(metals.has(record.target)&&!metals.get(record.target).node.isConnected)||(marks.get(record.target)?.node&&!marks.get(record.target).node.isConnected)||(models.has(record.target)&&!models.get(record.target).node.isConnected));
    const selectionChanged=records.some(record=>record.type==='attributes'&&['aria-current','aria-selected','data-app-action-sidebar-thread-active','data-app-action-sidebar-thread-selected'].includes(record.attributeName));
    if(selectionChanged)scheduleSelection();else if(removedMount||relevantMutation(records))schedule();
  });
  observer.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['aria-label','title','aria-busy','aria-current','aria-selected','aria-expanded','aria-disabled','disabled','hidden','aria-hidden','data-state','data-selected','data-theme','class','data-composer-surface-variant','data-codex-composer-root','data-app-action-sidebar-thread-active','data-app-action-sidebar-thread-selected']});
  const events=[];
  const listen=(target,type,handler,options)=>{target.addEventListener(type,handler,options);events.push(()=>target.removeEventListener(type,handler,options));};
  listen(document,'visibilitychange',scan);listen(window,'blur',scan);listen(window,'focus',scan);listen(window,'resize',scheduleLayout,{passive:true});listen(document,'scroll',scheduleLayout,{passive:true,capture:true});
  listen(reduced,'change',scan);listen(contrast,'change',scan);listen(systemTheme,'change',scan);
  document.fonts?.ready.then(()=>{if(live)scheduleLayout();});
  listen(window,'storage',event=>{if(event.key===KEY){config=readConfig();scan();}});
  const diagnose=()=>({...runtimeState(),version:'0.3.7',supported,metals:metals.size,beams:beams.size,surfaces:marks.size,modelBands:models.size,wordmarks:wordmarks.size,retargets,running:[...beams.keys()].some(running),paused,scans,error:lastError});
  const update=patch=>{config=normalize({...config,...patch});const saved=writeConfig(config);scan();return saved;};
  api?.registerLibrary('metal-beam',{getStatus:diagnose,getConfig:()=>({...config}),setConfig:update});
  function cleanup(){
    if(!live)return;live=false;if(timer)clearTimeout(timer);if(layoutRaf)cancelAnimationFrame(layoutRaf);if(selectionRaf)cancelAnimationFrame(selectionRaf);timer=layoutRaf=selectionRaf=0;
    observer.disconnect();resize.disconnect();decorationVisibility.disconnect();for(const dispose of events)dispose();
    for(const el of [...metals.keys()])remove(metals,el);for(const el of [...beams.keys()])remove(beams,el);
    for(const item of marks.values())item.restore();marks.clear();
    for(const [el,item] of models)removeModel(el,item);
    for(const [el,item] of wordmarks)removeWordmark(el,item);
    disposeRuntime();overlay.remove();style.remove();
  }
  onCleanup(cleanup);scan();return cleanup;
}
