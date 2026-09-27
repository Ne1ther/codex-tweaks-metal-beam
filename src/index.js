import {readConfig,writeConfig,normalize,KEY} from './config.js';
import {OWN,METAL,POSITION,SURFACE_MARK,CSS} from './style.js';
import {discover,geometry,neighbor,isSidebarRow,theme,running,relevantMutation,selectionMutation,COMPOSER,SIDEBAR} from './targets.js';
import {mountModelText} from './model-haze.js';
import {mountSvgWordmark} from './wordmark.js';
import {startRuntime,disposeRuntime,mountMetal,mountBeam,setMotionPaused,setActivity,invalidateReflectionGeometry,runtimeState,isMetalFxSupported} from './vendor/material-runtime.js';

export function activate({root,onCleanup,api}) {
  const route=new URLSearchParams(location.search).get('initialRoute');
  if(route==='/avatar-overlay'||location.pathname.endsWith('/avatar-overlay-composition-surface.html'))return;
  let config=readConfig(),live=true,timer=0,layoutRaf=0,selectionRaf=0,lastError='';
  let visibleTheme=theme(),paused=false,scans=0,retargets=0;
  const metals=new Map(),beams=new Map(),marks=new Map(),models=new Map(),wordmarks=new Map(),voices=new Map(),failed=new WeakSet();
  const positions=new WeakMap();
  const reduced=matchMedia('(prefers-reduced-motion:reduce)'),contrast=matchMedia('(forced-colors:active)'),systemTheme=matchMedia('(prefers-color-scheme:dark)');
  const supported=isMetalFxSupported();
  const style=document.createElement('style');style.setAttribute(OWN,'style');style.textContent=CSS;root.append(style);
  // Wide halos and Beam live outside the application's scrolling layout.
  const overlay=document.createElement('div');overlay.className='ctmb-overlay';overlay.setAttribute(OWN,'overlay');overlay.setAttribute('aria-hidden','true');document.body.append(overlay);
  startRuntime();
  function setAttribute(el,key,value){if(el.getAttribute(key)!==value)el.setAttribute(key,value);}
  function attribute(el,key,value){const before=el.getAttribute(key);setAttribute(el,key,value);return()=>{if(before===null)el.removeAttribute(key);else setAttribute(el,key,before);};}
  function position(node,box){
    if(node.hidden===!!box)node.hidden=!box;if(!box)return;
    const signature=[box.x,box.y,box.width,box.height,box.radius].join(',');
    if(positions.get(node)===signature)return;positions.set(node,signature);
    node.style.transform=`translate3d(${box.x}px,${box.y}px,0)`;
    node.style.width=`${box.width}px`;node.style.height=`${box.height}px`;node.style.borderRadius=`${box.radius}px`;
  }
  function layout(){
    layoutRaf=0;if(!live)return;
    const batch=[];
    for(const item of metals.values())batch.push([item.portal,geometry(item.el)]);
    for(const item of beams.values())batch.push([item.node,geometry(item.el)]);
    for(const [node,box] of batch)position(node,box);
  }
  function scheduleLayout(){invalidateReflectionGeometry();if(live&&!layoutRaf)layoutRaf=requestAnimationFrame(layout);}
  function scroll(event){
    const target=event.target;
    // Conversation autoscroll does not move the sidebar or fixed composer.
    if(target!==document&&!target.contains?.(overlay)&&!target.closest?.(SIDEBAR)&&![...metals.keys(),...beams.keys(),...models.keys()].some(el=>target.contains?.(el))&&!target.querySelector?.(`${COMPOSER},${SIDEBAR}`))return;
    scheduleLayout();if(timer)clearTimeout(timer);timer=0;schedule();
  }
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
    setAttribute(el,METAL,visibleTheme);
    const props={button:el,glowPortal:item.portal,neighbors:item.neighbors,radius:box.radius,variant:box.variant,theme:visibleTheme,strength:config.intensity,paused,preset:config.palette};
    const signature=JSON.stringify([box.radius,box.variant,visibleTheme,config.intensity,paused,config.palette]);
    if(signature===item.signature)return;item.signature=signature;
    if(item.handle)item.handle.update(props);else item.handle=mountMetal(item.node,props,e=>error(el,e));
  }
  function updateBeam(el,box){
    let item=beams.get(el);
    if(item&&!item.node.isConnected){remove(beams,el);item=null;}
    if(!item){item=prepare(el,'beam',box);beams.set(el,item);resize.observe(el);}
    position(item.node,box);setAttribute(item.node,'data-paused',String(paused));setAttribute(item.node,'data-theme',visibleTheme);
    const props={radius:box.radius,theme:visibleTheme,running:running(el),paused};
    const signature=JSON.stringify(props);if(signature===item.signature)return;item.signature=signature;
    if(item.handle)item.handle.update(props);else item.handle=mountBeam(item.node,props,e=>error(el,e));
  }
  function updateMarks(found){
    const wanted=new Map();
    if(config.broad&&!contrast.matches)for(const el of found.sidebarRows)wanted.set(el,'sidebar-row');
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
  function removeModel(el,item){
    decorationVisibility.unobserve(el);item.handle.dispose();
    for(const reset of item.restore.reverse())reset();models.delete(el);
  }
  function updateModels(found){
    const wanted=new Set(contrast.matches?[]:found.models);
    for(const [el,item] of models)if(!wanted.has(el))removeModel(el,item);
    for(const el of wanted){
      let item=models.get(el);
      if(!item){
        const restore=[attribute(el,'data-codex-tweaks-mb-model',visibleTheme),attribute(el,'data-codex-tweaks-mb-model-paused',String(paused))];
        item={handle:mountModelText(el),restore,visible:true};models.set(el,item);decorationVisibility.observe(el);
      }else item.handle.refresh();
      setAttribute(el,'data-codex-tweaks-mb-model',visibleTheme);
      setAttribute(el,'data-codex-tweaks-mb-model-paused',String(paused||!item.visible));
    }
  }
  function removeWordmark(el,item){
    decorationVisibility.unobserve(el);item.observer.disconnect();item.handle?.dispose();for(const reset of item.restore.reverse())reset();wordmarks.delete(el);
  }
  function updateWordmarks(found){
    const wanted=new Set(contrast.matches?[]:found.wordmarks);
    for(const [el,item] of wordmarks)if(!wanted.has(el))removeWordmark(el,item);
    for(const el of wanted){
      let item=wordmarks.get(el);
      if(!item){
        const svg=el.namespaceURI==='http://www.w3.org/2000/svg';
        const restore=[attribute(el,'data-codex-tweaks-mb-wordmark',visibleTheme),attribute(el,'data-codex-tweaks-mb-wordmark-paused',String(paused))];
        if(!svg)restore.push(attribute(el,'data-codex-tweaks-mb-wordmark-text',el.textContent.trim()));
        // Observe only the mode trigger, so replacing its native label is
        // rediscovered without listening to streamed message text.
        const observer=new MutationObserver(records=>{if(records.some(record=>!record.target.closest?.(`[${OWN}]`)&&(record.type==='characterData'||[...record.addedNodes,...record.removedNodes].some(node=>node.nodeType!==1||!node.hasAttribute(OWN)))))schedule();});
        observer.observe(el.closest('button,[role="button"]')||el.parentElement,{subtree:true,childList:true,characterData:true});
        item={restore,observer,handle:svg?mountSvgWordmark(el):null,visible:true};wordmarks.set(el,item);decorationVisibility.observe(el);
      }
      if(!item.handle)setAttribute(el,'data-codex-tweaks-mb-wordmark-text',el.textContent.trim());
      setAttribute(el,'data-codex-tweaks-mb-wordmark',visibleTheme);
      setAttribute(el,'data-codex-tweaks-mb-wordmark-paused',String(paused||!item.visible));
      item.handle?.refresh({theme:visibleTheme,paused:paused||!item.visible});
    }
  }
  function removeVoice(el,item){
    decorationVisibility.unobserve(el);item.node.remove();for(const reset of item.restore.reverse())reset();voices.delete(el);
  }
  function updateVoices(found){
    const wanted=new Set(contrast.matches?[]:found.voices);
    for(const [el,item] of voices)if(!wanted.has(el))removeVoice(el,item);
    for(const el of wanted){
      let item=voices.get(el);
      if(!item){
        const restore=[attribute(el,'data-codex-tweaks-mb-voice',visibleTheme),attribute(el,'data-codex-tweaks-mb-voice-paused',String(paused))];
        if(getComputedStyle(el).position==='static')restore.push(attribute(el,POSITION,''));
        const node=document.createElement('span');node.className='ctmb-voice-light';node.setAttribute(OWN,'voice');node.setAttribute('aria-hidden','true');el.append(node);
        item={node,restore,visible:true};voices.set(el,item);decorationVisibility.observe(el);
      }else if(!item.node.isConnected)el.append(item.node);
      setAttribute(el,'data-codex-tweaks-mb-voice',visibleTheme);
      setAttribute(el,'data-codex-tweaks-mb-voice-paused',String(paused||!item.visible));
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
    updateVoices(found);
    for(const [el,box] of wantMetal)try{updateMetal(el,box);}catch(e){error(el,e);remove(metals,el);}
    for(const [el,box] of wantBeam)try{updateBeam(el,box);}catch(e){error(el,e);remove(beams,el);}
    setActivity([...wantBeam.keys(),...wantMetal.keys()].some(running));
    setMotionPaused(paused);
  }
  function schedule(){if(live&&!timer)timer=window.setTimeout(scan,90);}
  function scheduleSelection(){if(live&&!selectionRaf)selectionRaf=requestAnimationFrame(()=>{selectionRaf=0;scan();});}
  const resize=new ResizeObserver(()=>{scheduleLayout();schedule();});
  const decorationVisibility=new IntersectionObserver(entries=>{for(const entry of entries){
    const item=models.get(entry.target),wordmark=wordmarks.get(entry.target),voice=voices.get(entry.target);
    if(item){item.visible=entry.isIntersecting;setAttribute(entry.target,'data-codex-tweaks-mb-model-paused',String(paused||!item.visible));}
    if(wordmark){wordmark.visible=entry.isIntersecting;setAttribute(entry.target,'data-codex-tweaks-mb-wordmark-paused',String(paused||!wordmark.visible));wordmark.handle?.refresh({theme:visibleTheme,paused:paused||!wordmark.visible});}
    if(voice){voice.visible=entry.isIntersecting;setAttribute(entry.target,'data-codex-tweaks-mb-voice-paused',String(paused||!voice.visible));}
  }});
  const observer=new MutationObserver(records=>{
    const removedMount=records.some(record=>(metals.has(record.target)&&!metals.get(record.target).node.isConnected)||(marks.get(record.target)?.node&&!marks.get(record.target).node.isConnected)||(voices.has(record.target)&&!voices.get(record.target).node.isConnected));
    const selectionChanged=selectionMutation(records);
    if(selectionChanged)scheduleSelection();else if(removedMount||relevantMutation(records))schedule();
  });
  observer.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['aria-label','title','aria-busy','aria-current','aria-selected','aria-expanded','aria-pressed','aria-disabled','disabled','hidden','aria-hidden','data-state','data-selected','data-theme','class','data-composer-surface-variant','data-codex-composer-root','data-app-action-sidebar-thread-active','data-app-action-sidebar-thread-selected']});
  const events=[];
  const listen=(target,type,handler,options)=>{target.addEventListener(type,handler,options);events.push(()=>target.removeEventListener(type,handler,options));};
  listen(document,'visibilitychange',scan);listen(window,'blur',scan);listen(window,'focus',scan);listen(window,'resize',()=>{scheduleLayout();schedule();},{passive:true});listen(document,'scroll',scroll,{passive:true,capture:true});
  listen(reduced,'change',scan);listen(contrast,'change',scan);listen(systemTheme,'change',scan);
  document.fonts?.ready.then(()=>{if(live)scheduleLayout();});
  listen(window,'storage',event=>{if(event.key===KEY){config=readConfig();scan();}});
  const diagnose=()=>({...runtimeState(),version:'0.3.11',supported,metals:metals.size,beams:beams.size,surfaces:marks.size,modelBands:models.size,wordmarks:wordmarks.size,voiceLights:voices.size,retargets,running:[...beams.keys()].some(running),paused,scans,error:lastError});
  const update=patch=>{config=normalize({...config,...patch});const saved=writeConfig(config);scan();return saved;};
  api?.registerLibrary('metal-beam',{getStatus:diagnose,getConfig:()=>({...config}),setConfig:update});
  function cleanup(){
    if(!live)return;live=false;if(timer)clearTimeout(timer);if(layoutRaf)cancelAnimationFrame(layoutRaf);if(selectionRaf)cancelAnimationFrame(selectionRaf);timer=layoutRaf=selectionRaf=0;
    observer.disconnect();resize.disconnect();decorationVisibility.disconnect();for(const dispose of events)dispose();
    for(const el of [...metals.keys()])remove(metals,el);for(const el of [...beams.keys()])remove(beams,el);
    for(const item of marks.values())item.restore();marks.clear();
    for(const [el,item] of models)removeModel(el,item);
    for(const [el,item] of wordmarks)removeWordmark(el,item);
    for(const [el,item] of voices)removeVoice(el,item);
    disposeRuntime();overlay.remove();style.remove();
  }
  onCleanup(cleanup);scan();return cleanup;
}
