import {mountSettings} from '../src/settings.js';
import {activate} from '../src/index.js';
import {DEFAULTS,KEY} from '../src/config.js';
import {runtimeState} from '../src/vendor/material-runtime.js';
import {svgWordmark} from './svg-fixture.js';
import {checkModernControls} from './modern-checks.js';

const $=selector=>document.querySelector(selector);
const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function waitForRings(){const started=performance.now();while(runtimeState().cachedRings<2&&performance.now()-started<5000)await wait(50);}
const ringAnimations=()=>[...document.querySelectorAll('.ctmb-ring-frames img')].flatMap(img=>img.getAnimations());
const arrow='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
const stop='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6.5" y="6.5" width="11" height="11" rx="2"/></svg>';
const chevron='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 6 3 3 3-3"/></svg>';
const mic='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><rect x="8" y="3" width="8" height="12" rx="4"/><path d="M5 11v1a7 7 0 0 0 14 0v-1M12 19v3"/></svg>';
const voiceWave='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 10V14M8 6V18M12 4V20M16 7V17M20 10V14"/></svg>';
let cleanup=null,library=null,settingsMount=null,settingsCleanup=null,taskRunning=false,nativeClicks=0,accountClicks=0,modelClicks=0,voiceClicks=0,modeClicks=0,primaryVoiceClicks=0,modernFixture=true;
const report=value=>{$('#report').textContent=typeof value==='string'?value:JSON.stringify(value,null,2);};
const scopeTargets=()=>[...document.querySelectorAll('.outline-tick,.usage-summary')];
const nativeDecoration=el=>{const css=getComputedStyle(el);return [css.boxShadow,css.outlineStyle,css.outlineWidth,css.outlineColor,css.borderRadius].join('|');};
const nativeScope=new Map(scopeTargets().map(el=>{el.focus({preventScroll:true});const before=nativeDecoration(el);el.blur();return [el,before];}));
function paintState(){$('#state').textContent=taskRunning?'运行中 · 流光增强':'空闲 · 缓慢流动';$('#dot').classList.toggle('working',taskRunning);}
function composer(home=false){
  taskRunning=false;paintState();
  $('#composer-slot').innerHTML=`<div data-codex-composer-root><div class="composer" data-composer-surface-variant="conversation"><textarea class="message" aria-label="消息" placeholder="从一个想法开始…" spellcheck="false"></textarea><div class="bottom"><button class="plus" aria-label="添加附件">＋</button><div class="spacer"></div><button class="chip agent" aria-label="Agent 模式">Agent ${chevron}</button><button class="chip model" data-codex-intelligence-trigger="true" data-composer-navigation-target="reasoning" aria-label="选择模型" aria-haspopup="menu" aria-expanded="false"><span class="_ModelPickerTriggerMeasurement_fixture" aria-hidden="true">隐藏的宽度测量文字不应发光</span><span class="_ModelPickerTriggerLabel_fixture"><span class="model-name">GPT-6 Astra</span><span class="model-effort">最高</span></span>${chevron}</button><button class="voice" aria-label="Voice input">${mic}</button><button class="send" aria-label="Send message" disabled>${arrow}</button></div></div></div>`;
  if(home){const surface=$('.composer');surface.removeAttribute('data-composer-surface-variant');const shell=document.createElement('div');shell.className='home-shell';shell.setAttribute('data-composer-surface-variant','home');surface.before(shell);shell.append(surface);}
  function syncPrimary(){
    const el=$('.send'),voice=modernFixture&&!taskRunning&&!$('.message').value.trim();
    el.disabled=!modernFixture&&!taskRunning&&!$('.message').value.trim();
    const action=taskRunning?'stop':voice?'voice':'send';
    el.setAttribute('aria-label',taskRunning?'Stop generating':voice?(home?'开始新的语音聊天':'开启语音聊天'):'Send message');
    if(el.dataset.fixtureAction!==action){el.querySelector('svg').outerHTML=taskRunning?stop:voice?voiceWave:arrow;el.dataset.fixtureAction=action;}
  }
  syncPrimary();
  $('.message').addEventListener('input',syncPrimary);
  $('.model').addEventListener('click',()=>{modelClicks++;const el=$('.model');const open=el.getAttribute('aria-expanded')!=='true';el.setAttribute('aria-expanded',String(open));el.dataset.state=open?'active':'closed';el.querySelector('.model-name').textContent=open?'选择模型':'GPT-6 Astra';el.querySelector('.model-effort').hidden=open;});
  $('.voice').addEventListener('click',()=>{voiceClicks++;$('.voice').setAttribute('aria-pressed',String(voiceClicks%2===1));});
  $('.send').addEventListener('click',()=>{if(modernFixture&&!taskRunning&&!$('.message').value.trim()){primaryVoiceClicks++;return;}nativeClicks++;taskRunning=!taskRunning;$('[data-codex-composer-root]').setAttribute('aria-busy',String(taskRunning));paintState();syncPrimary();});
}
function modeLabel(mode){
  const next=document.createElement('span');next.className=modernFixture?'mode-label svg-mode-label':'truncate font-openai-sans mode-label';
  if(modernFixture)next.innerHTML=svgWordmark(mode);else next.textContent=mode;
  $('.mode-label').replaceWith(next);$('.mode-trigger').setAttribute('aria-label',`Switch mode, current mode: ${mode}`);$('.mode-trigger').setAttribute('aria-expanded','false');$('.mode-menu').hidden=true;
}
function enable(){
  if(cleanup)return;
  const callbacks=[];
  const stop=activate({root:$('#package-root'),onCleanup:fn=>callbacks.push(fn),api:{registerLibrary(name,value){library=value;}},ui:{settingsSections:{register(section){settingsMount=section.mount;return{unregister(){settingsCleanup?.();settingsCleanup=null;settingsMount=null;}};}}}});
  settingsMount=container=>mountSettings(container,library.getConfig,library.setConfig,library.getStatus);
  cleanup=()=>{settingsCleanup?.();settingsCleanup=null;settingsMount=null;stop?.();for(const fn of callbacks)fn();cleanup=null;};
  $('#enable').textContent='停用效果';$('#enable').setAttribute('aria-pressed','true');
}
function disable(){cleanup?.();$('#enable').textContent='启用效果';$('#enable').setAttribute('aria-pressed','false');}
localStorage.setItem(KEY,JSON.stringify(DEFAULTS));
composer();
modeLabel('Codex');
for(const row of document.querySelectorAll('.sidebar-row')){
  row.setAttribute('data-app-action-sidebar-thread-row','');row.setAttribute('data-app-action-sidebar-thread-active',String(row.hasAttribute('aria-current')));row.removeAttribute('aria-current');
  row.addEventListener('pointerenter',()=>row.classList.add('native-hover'));
  row.addEventListener('pointerleave',()=>row.classList.remove('native-hover'));
  row.addEventListener('click',()=>{for(const other of document.querySelectorAll('.sidebar-row'))other.setAttribute('data-app-action-sidebar-thread-active',String(other===row));});
}
$('.profile-trigger').addEventListener('click',()=>{accountClicks++;$('.profile-trigger').setAttribute('aria-expanded',String(accountClicks%2===1));});
$('.mode-trigger').addEventListener('click',()=>{modeClicks++;const open=$('.mode-menu').hidden;$('.mode-menu').hidden=!open;$('.mode-trigger').setAttribute('aria-expanded',String(open));});
for(const option of document.querySelectorAll('[data-mode-option]'))option.addEventListener('click',()=>{
  modeLabel(option.dataset.modeOption);
});
enable();
$('#theme').onclick=()=>{const light=document.documentElement.dataset.theme!=='light';document.documentElement.dataset.theme=light?'light':'dark';$('#theme').textContent=light?'切换深色':'切换浅色';};
$('#pause').onclick=()=>{const motion=!library.getConfig().motion;library.setConfig({motion});$('#pause').textContent=motion?'暂停动画':'继续动画';$('#pause').setAttribute('aria-pressed',String(!motion));};
$('#beam').onclick=()=>{const beam=!library.getConfig().beam;library.setConfig({beam});$('#beam').setAttribute('aria-pressed',String(beam));};
$('#enable').onclick=()=>cleanup?disable():enable();
$('#settings-button').onclick=()=>{if(settingsCleanup){settingsCleanup();settingsCleanup=null;}else if(settingsMount)settingsCleanup=settingsMount($('#settings'));};
$('#remount').onclick=composer;
$('#diagnose').onclick=()=>report({...library.getStatus(),nativeClicks,canvasCount:document.querySelectorAll('canvas').length});
$('#tests').onclick=async()=>{
  $('#tests').disabled=true;const results=[];
  const check=(label,condition,detail)=>{results.push({test:label,pass:!!condition,...(detail?{detail}: {})});report(results);};
  try{
    modernFixture=false;modeLabel('Codex');composer();enable();library.setConfig({...DEFAULTS});document.documentElement.dataset.theme='dark';$('.fixture').scrollIntoView({block:'center',behavior:'instant'});await wait(650);
    let status=library.getStatus();check('Send material and passive voice reflection mounted',status.metals===2&&status.reflections===1&&status.beams===1&&!!$('.voice [data-ctmb-metal-fx-reflection]')&&!$('.voice').hasAttribute('data-codex-tweaks-mb-metal'),status);
    check('Conversation outline and usage widget receive no decoration markers',scopeTargets().every(el=>!el.hasAttribute('data-codex-tweaks-mb-surface')&&!el.hasAttribute('data-codex-tweaks-mb-metal')&&!el.querySelector('[data-codex-tweaks-mb-owned]')));
    for(const [el,before] of nativeScope){el.focus({preventScroll:true});check(`Native focus styling is preserved: ${el.getAttribute('aria-label')}`,nativeDecoration(el)===before,{before,after:nativeDecoration(el)});el.blur();}
    const tick=$('.outline-tick');tick.setAttribute('aria-current','true');await wait(160);
    check('Selecting a conversation outline tick does not create a material or frame',!tick.hasAttribute('data-codex-tweaks-mb-surface')&&!tick.hasAttribute('data-codex-tweaks-mb-metal')&&getComputedStyle(tick).boxShadow==='none'&&library.getStatus().metals===2);tick.removeAttribute('aria-current');await wait(160);
    const usage=$('.usage-summary'),usageHome=usage.parentElement;
    try{
      $('.app-shell-left-panel').append(usage);usage.setAttribute('data-state','active');await wait(180);
      check('Usage widget inside the sidebar is not mistaken for a navigation row',!usage.hasAttribute('data-codex-tweaks-mb-surface')&&!usage.hasAttribute('data-codex-tweaks-mb-metal')&&!usage.querySelector('[data-codex-tweaks-mb-owned]'));
    }finally{usageHome.append(usage);usage.removeAttribute('data-state');}await wait(180);
    const word=$('.mode-label'),wordCSS=getComputedStyle(word),wordBox=word.getBoundingClientRect(),mode=$('.mode-trigger'),modeSVG=mode.querySelector('svg');
    check('Persistent mode word alone receives glyph-clipped color',status.wordmarks===1&&wordCSS.backgroundClip.split(',').every(value=>value.trim()==='text')&&wordCSS.filter==='none'&&wordCSS.textShadow==='none'&&!mode.hasAttribute('data-codex-tweaks-mb-surface')&&getComputedStyle(modeSVG).backgroundImage==='none'&&!mode.querySelector('canvas,[data-codex-tweaks-mb-owned]'));
    const beforeMist=getComputedStyle(word,'::after').opacity,wordScans=library.getStatus().scans;await wait(420);
    check('Wordmark colors flow while idle without JS rescans',getComputedStyle(word,'::after').opacity!==beforeMist&&library.getStatus().scans===wordScans);
    library.setConfig({wordmarkHaze:false});const bareBox=word.getBoundingClientRect();
    check('Text effect toggle preserves original size and font',!word.hasAttribute('data-codex-tweaks-mb-wordmark')&&Math.abs(wordBox.width-bareBox.width)<.1&&Math.abs(wordBox.height-bareBox.height)<.1);library.setConfig({wordmarkHaze:true});
    const beforeModeClicks=modeClicks;mode.click();await wait(150);
    check('Mode menu still opens and its option text remains uncolored',modeClicks===beforeModeClicks+1&&!$('.mode-menu').hidden&&!$('.mode-menu').querySelector('[data-codex-tweaks-mb-wordmark]'));
    check('Menu panel and menu items retain their native decoration',!$('.mode-menu').matches('[data-codex-tweaks-mb-surface]')&&!$('.mode-menu').querySelector('[data-codex-tweaks-mb-surface],[data-codex-tweaks-mb-owned]'));
    $('[data-mode-option="ChatGPT"]').click();await wait(220);
    check('ChatGPT retains word-only effect after native label replacement',$('.mode-label').textContent==='ChatGPT'&&$('.mode-label').hasAttribute('data-codex-tweaks-mb-wordmark')&&library.getStatus().wordmarks===1&&$('.mode-menu').hidden&&mode.querySelector('svg')===modeSVG&&!word.hasAttribute('data-codex-tweaks-mb-wordmark'));
    mode.click();$('[data-mode-option="Codex"]').click();await wait(220);
    check('Switching back to Codex keeps the effect without duplicate labels',$('.mode-label').textContent==='Codex'&&document.querySelectorAll('[data-codex-tweaks-mb-wordmark]').length===1&&mode.querySelectorAll('.mode-label').length===1);
    const native=$('.send'),draft=$('.message');
    check('Empty idle input keeps Metal visible while Send stays disabled',native.disabled&&getComputedStyle(native).opacity==='1'&&getComputedStyle(native.querySelector('.ctmb-metal-fx-root')).visibility==='visible');
    const emptyClicks=nativeClicks;native.click();check('Disabled button still cannot send',nativeClicks===emptyClicks);
    const idleFrame=runtimeState().frames;await wait(410);check('Idle material keeps moving without hover',runtimeState().frames>idleFrame);
    const beforeHover=library.getStatus(),beforeCanvas=[...document.querySelectorAll('canvas')],canvas=native.querySelector('canvas');
    const rect=canvas.getBoundingClientRect(),box=native.getBoundingClientRect();
    for(let i=0;i<24;i++){
      const target=i%2?native:$('.model');
      target.dispatchEvent(new PointerEvent('pointerover',{bubbles:true,relatedTarget:document.body}));
      target.dispatchEvent(new PointerEvent('pointermove',{bubbles:true,pointerType:'mouse',clientX:box.x+20+24*Math.cos(i),clientY:box.y+20+24*Math.sin(i)}));
      target.dispatchEvent(new PointerEvent('pointerout',{bubbles:true,relatedTarget:document.body}));
      await wait(16);
    }
    await wait(200);const afterHover=library.getStatus(),afterRect=canvas.getBoundingClientRect();
    check('Pointer movement does not rescan or create shader instances',afterHover.scans===beforeHover.scans&&afterHover.instances===beforeHover.instances&&beforeCanvas.length===document.querySelectorAll('canvas').length&&beforeCanvas.every(el=>el.isConnected));
    check('Hover keeps the material aligned with the native button',!document.querySelector('[data-mfx-bend]')&&['x','y','width','height'].every(key=>Math.abs(afterRect[key]-rect[key])<.1));
    const field=$('.composer');check('No horizontal or vertical composer overflow',field.scrollWidth===field.clientWidth&&field.scrollHeight===field.clientHeight,{width:[field.clientWidth,field.scrollWidth],height:[field.clientHeight,field.scrollHeight]});
    check('Beam is outside the scrollable composer',!!document.querySelector('.ctmb-overlay .ctmb-beam-mount')&&!field.querySelector('.ctmb-beam-mount'));
    const model=$('.model'),modelName=model.querySelector('.model-name'),modelEffort=model.querySelector('.model-effort'),modelText=model.querySelector('[class*="ModelPickerTriggerLabel_"]');
    const nameBox=modelName.getBoundingClientRect(),nameCSS=getComputedStyle(modelName),modelChildren=[...model.children];
    check('Only native model and effort glyphs receive color, never button or chevron',status.modelBands===1&&model.querySelectorAll('[data-codex-tweaks-mb-model-text]').length===2&&nameCSS.backgroundClip==='text'&&getComputedStyle(model.querySelector('svg')).backgroundImage==='none'&&!model.hasAttribute('data-codex-tweaks-mb-surface')&&!model.querySelector('[data-codex-tweaks-mb-owned]'));
    check('Hidden model measurement text is never decorated',!model.querySelector('[class*="ModelPickerTriggerMeasurement_"]').hasAttribute('data-codex-tweaks-mb-model-text'));
    const bareNameStyle=[nameCSS.font,nameCSS.letterSpacing];library.setConfig({modelHaze:false});
    const plainBox=modelName.getBoundingClientRect(),plainCSS=getComputedStyle(modelName);
    check('Model color preserves native dimensions, font and DOM children',['x','y','width','height'].every(k=>Math.abs(nameBox[k]-plainBox[k])<.1)&&bareNameStyle.join('|')===[plainCSS.font,plainCSS.letterSpacing].join('|')&&modelChildren.every((node,i)=>model.children[i]===node)&&!modelName.hasAttribute('data-codex-tweaks-mb-model-content'));
    library.setConfig({modelHaze:true});
    const frame=$('.ctmb-beam-frame'),beamTexture=frame.querySelector('img'),beamPaint=beamTexture?.src,frameOpacity=getComputedStyle(frame).opacity;
    check('Beam flattens its masks and blur into four decoded textures',$('.ctmb-cached-beam').dataset.raster==='ready'&&document.querySelectorAll('.ctmb-beam-texture').length===4&&[...document.querySelectorAll('.ctmb-beam-texture')].every(img=>img.complete&&img.naturalWidth>0)&&!frame.querySelector('[data-beam]'));
    await wait(230);
    check('Beam keeps flowing by opacity while its raster stays fixed',getComputedStyle(frame).opacity!==frameOpacity&&frame.querySelector('img').src===beamPaint&&frame.getAnimations().every(a=>a.effect.getKeyframes().every(k=>!Object.keys(k).some(key=>/background|filter|mask|angle/.test(key)))));
    field.style.width='85%';await wait(350);
    check('Beam rebakes after resize without clipped or stretched texture',frame.querySelector('img').src!==beamPaint&&Math.abs(frame.querySelector('img').naturalWidth-frame.getBoundingClientRect().width*Math.min(devicePixelRatio,2))<1.1);
    field.style.width='';await wait(300);
    const decode=HTMLImageElement.prototype.decode;
    try{
      HTMLImageElement.prototype.decode=function(){return Promise.reject(new Error('fixture decode unavailable'));};
      library.setConfig({beam:false});library.setConfig({beam:true});await wait(220);
      check('Blocked image decoding retains the original CSS beam',$('.ctmb-cached-beam').dataset.raster==='css'&&!!$('.ctmb-beam-frame [data-beam]')&&library.getStatus().error==='');
    }finally{HTMLImageElement.prototype.decode=decode;library.setConfig({beam:false});library.setConfig({beam:true});}await wait(350);
    check('Beam recovers its cache after a failed mount',$('.ctmb-cached-beam').dataset.raster==='ready');
    await waitForRings();
    const smoothStart=runtimeState().directFrames,players=ringAnimations(),playerTimes=players.map(a=>a.currentTime),ringPaints=[...document.querySelectorAll('.ctmb-ring-frames img')].map(img=>img.src);await wait(510);
    check('Cached native-resolution rings keep moving without live shader draws',players.length===2&&players.every((a,i)=>a.currentTime-playerTimes[i]>=400)&&runtimeState().directFrames===smoothStart&&library.getStatus().auxiliaryFps===6,{liveRingDraws:runtimeState().directFrames-smoothStart,cachedRings:runtimeState().cachedRings});
    check('Ring playback uses fixed images and 60 fps transform samples',players.every(a=>{const frames=a.effect.getKeyframes();return Math.abs(a.effect.getTiming().duration/(frames.length-1)-1000/60)<.01&&frames.every(k=>Object.keys(k).every(key=>['offset','computedOffset','easing','composite','transform'].includes(key)));})&&ringPaints.every((src,i)=>src===document.querySelectorAll('.ctmb-ring-frames img')[i].src));
    check('Ring cache stays within its package memory budget',runtimeState().ringCacheBytes>0&&runtimeState().ringCacheBytes<=64*1024*1024&&!runtimeState().ringCachePending&&!runtimeState().ringCacheError);
    const wideRow=$('.sidebar-row[data-app-action-sidebar-thread-active="true"]'),oldWidth=wideRow.style.width;
    wideRow.style.width='360px';await wait(150);await waitForRings();
    const wideImage=wideRow.querySelector('.ctmb-ring-frames img');
    check('A wide Retina sidebar caches without lowering resolution',runtimeState().cachedRings===2&&!!wideImage&&Math.abs(wideImage.naturalWidth/parseFloat(wideImage.style.width)-Math.min(devicePixelRatio,2))<.001&&wideImage.naturalWidth<=4096&&wideImage.naturalHeight<=4096);
    wideRow.style.width=oldWidth;await wait(150);await waitForRings();
    check('Model overlay is accessibility-empty and pointer-transparent without canvas or blur',getComputedStyle(modelName,'::after').pointerEvents==='none'&&getComputedStyle(modelName,'::after').content.endsWith('/ ""')&&!model.querySelector('canvas')&&getComputedStyle(modelName,'::after').filter==='none');
    const modelOpacity=getComputedStyle(modelName,'::after').opacity,modelPaint=getComputedStyle(modelName,'::after').backgroundImage,modelScans=library.getStatus().scans;await wait(160);
    check('Idle model iridescence changes only opacity without rescans',getComputedStyle(modelName,'::after').opacity!==modelOpacity&&getComputedStyle(modelName,'::after').backgroundImage===modelPaint&&library.getStatus().scans===modelScans&&modelName.getAnimations({subtree:true}).every(anim=>anim.effect.getKeyframes().every(frame=>Object.keys(frame).every(key=>['offset','computedOffset','easing','composite','opacity'].includes(key)))));
    const oldModelClicks=modelClicks,oldVoiceClicks=voiceClicks;model.click();$('.voice').click();await wait(240);
    check('Native model and voice clicks survive and text overlay follows native changes',modelClicks===oldModelClicks+1&&voiceClicks===oldVoiceClicks+1&&model.getAttribute('aria-expanded')==='true'&&modelName.getAttribute('data-codex-tweaks-mb-model-content')===modelName.textContent&&!modelEffort.hasAttribute('data-codex-tweaks-mb-model-text'));
    model.click();await wait(180);
    const replacement=modelName.cloneNode(false);for(const attr of [...replacement.attributes])if(attr.name.startsWith('data-codex-tweaks-mb-'))replacement.removeAttribute(attr.name);replacement.textContent='GPT-6 Astra';modelName.replaceWith(replacement);await wait(160);
    check('Replacing a native model label restores the old node and decorates the new one',!modelName.hasAttribute('data-codex-tweaks-mb-model-text')&&replacement.getAttribute('data-codex-tweaks-mb-model-content')==='GPT-6 Astra');
    const originalName=replacement.textContent;replacement.textContent='GPT-6 Astra with a long model name';replacement.style.maxWidth='90px';await wait(160);
    check('Long model labels retain native ellipsis and clip the matching overlay',replacement.scrollWidth>replacement.clientWidth&&getComputedStyle(replacement).textOverflow==='ellipsis'&&getComputedStyle(replacement,'::after').textOverflow==='ellipsis'&&getComputedStyle(replacement,'::after').overflow==='hidden');
    replacement.textContent=originalName;replacement.style.maxWidth='';await wait(160);
    library.setConfig({modelHaze:false});check('Model text color can be disabled without changing Send or voice reflection',!model.querySelector('[data-codex-tweaks-mb-model-text]')&&!model.hasAttribute('data-codex-tweaks-mb-model-paused')&&!!native.querySelector('canvas')&&!!$('.voice [data-ctmb-metal-fx-reflection]'));library.setConfig({modelHaze:true});
    const selected=document.querySelector('.sidebar-row[data-app-action-sidebar-thread-active="true"]'),selectedRoot=selected.querySelector('.ctmb-metal-fx-root'),selectedCanvas=selected.querySelector('canvas');
    check('Actual Codex active marker selects persistent Metal without aria-current',!!selectedRoot&&!selected.hasAttribute('aria-current'));
    const nextRow=[...document.querySelectorAll('.sidebar-row')].find(el=>el!==selected);
    const hoverInstances=library.getStatus().instances;nextRow.classList.add('native-hover');await wait(160);
    check('Native hover background is not mistaken for selected Metal',!nextRow.querySelector('canvas')&&library.getStatus().instances===hoverInstances);
    check('Sidebar hover has a persistent lightweight opacity layer',!!nextRow.querySelector('.ctmb-sidebar-light')&&getComputedStyle(nextRow.querySelector('.ctmb-sidebar-light')).transitionProperty==='opacity');
    nextRow.classList.remove('native-hover');nextRow.click();await wait(60);
    check('Sidebar selection reuses its live material and canvas',nextRow.querySelector('.ctmb-metal-fx-root')===selectedRoot&&nextRow.querySelector('canvas')===selectedCanvas&&!selected.querySelector('.ctmb-metal-fx-root'));
    const footer=$('.profile-footer');
    check('Account footer remains native without haze or decorative animation',!footer.querySelector('.ctmb-account-haze')&&!footer.hasAttribute('data-codex-tweaks-mb-account')&&footer.getAnimations({subtree:true}).length===0);
    const oldAccountClicks=accountClicks;$('.profile-trigger').click();check('Native account button retains its click handler',accountClicks===oldAccountClicks+1);
    draft.value='This draft must survive decoration';draft.dispatchEvent(new Event('input',{bubbles:true}));draft.focus();
    const before=nativeClicks;native.click();await wait(220);
    check('Original send event and running state',nativeClicks===before+1&&library.getStatus().running&&draft.value==='This draft must survive decoration');
    check('Running keeps smooth rings and raises only auxiliary sampling',library.getStatus().targetFps===60&&library.getStatus().auxiliaryFps===12);
    const mountingCount=document.querySelectorAll('[data-codex-tweaks-mb-owned="metal"]').length;
    check('No doubled mounts after native icon replacement',mountingCount===2&&!$('.voice').querySelector('.ctmb-metal-mount'));
    library.setConfig({motion:false});await wait(260);const pausedFrame=runtimeState().frames,pausedDirect=runtimeState().directFrames,pausedPlayers=ringAnimations().map(a=>[a,a.currentTime]);await wait(260);
    check('Pause stops shader frame count',runtimeState().frames===pausedFrame&&runtimeState().directFrames===pausedDirect&&!runtimeState().loopScheduled,runtimeState());
    check('Pause freezes cached rings at their current frame',pausedPlayers.length===2&&pausedPlayers.every(([a,time])=>a.playState==='paused'&&a.currentTime===time));
    check('Pause freezes model text color too',getComputedStyle($('.model-name'),'::after').animationPlayState==='paused');
    const wordPaused=getComputedStyle($('.mode-label'),'::after').opacity;await wait(140);
    check('Pause freezes mode word colors',getComputedStyle($('.mode-label'),'::after').animationPlayState==='paused'&&getComputedStyle($('.mode-label'),'::after').opacity===wordPaused);
    composer(true);await wait(400);
    check('Home square shell resolves to rounded composer body',library.getStatus().beams===1);
    check('Remount while paused still paints',runtimeState().frames>0&&!!$('.ctmb-metal-fx-root')&&getComputedStyle($('.ctmb-metal-fx-root')).visibility==='visible');
    library.setConfig({motion:true});await wait(240);const resumeFrame=runtimeState().frames;await wait(410);
    check('Resume restarts rendering',runtimeState().frames>resumeFrame);
    await waitForRings();const darkRing=$('.send .ctmb-ring-frames img').src;
    document.documentElement.dataset.theme='light';await wait(240);await waitForRings();
    check('Theme changes replace the cached material',!!$('.send .ctmb-ring-frames img')&&$('.send .ctmb-ring-frames img').src!==darkRing&&!runtimeState().ringCacheError);
    const direct=$('.send [data-ctmb-direct]'),source=$('.send .ctmb-metal-fx-canvas:not([data-ctmb-direct])');
    const gl=direct.getContext('webgl2'),loss=gl.getExtension('WEBGL_lose_context');loss.loseContext();await wait(220);
    check('Cached ring survives a lost live context without exposing duplicate layers',direct.hidden&&source.style.opacity==='0'&&!!$('.send .ctmb-ring-frames img')&&ringAnimations().some(a=>a.playState==='running'));
    loss.restoreContext();await wait(450);
    check('Restored direct context resumes and hides its fallback',!direct.hidden&&source.style.opacity==='0'&&gl.getError()===gl.NO_ERROR&&!runtimeState().directError);
    check('Light theme removes dark reflections',library.getStatus().reflections===0&&$('.ctmb-metal-fx-root')?.dataset.theme==='light');
    check('Light theme uses readable deeper word colors',$('.mode-label').getAttribute('data-codex-tweaks-mb-wordmark')==='light'&&getComputedStyle($('.mode-label')).getPropertyValue('--ctmb-word-ink').trim()==='#4f5265');
    document.documentElement.dataset.theme='dark';await wait(240);
    const originalButton=$('.send');const originalSVG=originalButton.querySelector('svg');
    disable();await wait(240);
    check('Cleanup releases GL, canvases, styles, haze, and owned attributes',!runtimeState().webgl&&runtimeState().instances===0&&runtimeState().directSurfaces===0&&document.querySelectorAll('canvas,[data-codex-tweaks-mb-account],[data-codex-tweaks-mb-model],[data-codex-tweaks-mb-model-text],[data-codex-tweaks-mb-model-content],[data-codex-tweaks-mb-model-tone],[data-codex-tweaks-mb-model-paused],[data-codex-tweaks-mb-wordmark],[data-codex-tweaks-mb-wordmark-paused],[data-codex-tweaks-mb-surface],[data-codex-tweaks-mb-owned],[data-codex-tweaks-mb-metal],[data-codex-tweaks-mb-position],[data-ctmb-metal-fx-reflection],#ctmb-metal-fx-styles,#ctmb-mfx-bend-style').length===0);
    check('Cleanup releases cached ring images, animations and memory reservations',runtimeState().ringCacheBytes===0&&runtimeState().cachedRings===0&&runtimeState().ringCachePending===0&&document.querySelectorAll('.ctmb-ring-frames').length===0);
    check('Cleanup restores native disabled dimming',getComputedStyle($('.send')).opacity==='0.25');
    check('Cleanup preserves native nodes and neighbor styles',$('.send')===originalButton&&originalButton.querySelector('svg')===originalSVG&&$('.voice').style.position===''&&$('.voice').style.isolation===''&&$('.model').style.position==='');
    for(let i=0;i<3;i++){enable();await wait(160);disable();await wait(80);}
    check('Repeated activation leaves no effect nodes',document.querySelectorAll('[data-codex-tweaks-mb-owned],canvas').length===0&&!runtimeState().webgl);
    const originalDecode=HTMLImageElement.prototype.decode;
    try{
      HTMLImageElement.prototype.decode=function(){return Promise.reject(new Error('fixture ring decode unavailable'));};
      enable();await wait(1300);const fallbackFrames=runtimeState().directFrames;await wait(220);
      check('Failed ring image decoding retains moving live material and releases its reservation',runtimeState().cachedRings===0&&runtimeState().ringCacheBytes===0&&!!runtimeState().ringCacheError&&runtimeState().directFrames>fallbackFrames&&[...document.querySelectorAll('[data-ctmb-direct]')].every(canvas=>canvas.style.visibility!=='hidden'));
    }finally{disable();HTMLImageElement.prototype.decode=originalDecode;}
    enable();await wait(350);check('Reactivated successfully',library.getStatus().metals===2&&library.getStatus().reflections===1&&library.getStatus().modelBands===1);
    const startScans=library.getStatus().scans;const stream=document.createElement('p');document.body.append(stream);
    for(let i=0;i<20;i++){stream.textContent+='word ';await wait(8);}await wait(150);
    check('Text streaming does not trigger rescanning',library.getStatus().scans===startScans,{before:startScans,after:library.getStatus().scans});stream.remove();
    const statusLabel=document.createElement('span');$('.sidebar-row').append(statusLabel);const statusScans=library.getStatus().scans;
    for(let i=0;i<20;i++){statusLabel.className=i%2?'streaming busy':'streaming';await wait(15);}await wait(150);
    check('Sidebar title and spinner class updates do not rescan controls',library.getStatus().scans===statusScans,{before:statusScans,after:library.getStatus().scans});statusLabel.remove();
    const transcript=document.createElement('div');transcript.style.cssText='height:20px;overflow:auto';transcript.innerHTML='<p style="height:500px">test conversation</p>';document.body.append(transcript);await wait(150);const scrollScans=library.getStatus().scans;
    for(let i=0;i<20;i++){transcript.scrollTop=i*10;transcript.dispatchEvent(new Event('scroll'));await wait(10);}await wait(150);
    check('Conversation autoscroll does not rediscover stationary effects',library.getStatus().scans===scrollScans,{before:scrollScans,after:library.getStatus().scans});transcript.remove();
    const focusDescriptor=Object.getOwnPropertyDescriptor(document,'hasFocus');
    try{
      Object.defineProperty(document,'hasFocus',{configurable:true,value:()=>false});window.dispatchEvent(new FocusEvent('blur'));await wait(260);
      const frameCount=runtimeState().frames;await wait(300);
      check('Window blur freezes the shader and clears its scheduled work',library.getStatus().paused&&frameCount===runtimeState().frames&&!runtimeState().loopScheduled);
      check('Window blur freezes all decorative CSS motion',[...document.getAnimations()].filter(a=>a.animationName?.startsWith('ctmb-')).every(a=>a.playState==='paused'||a.playState==='finished'));
      check('Window blur also freezes cached ring playback',ringAnimations().every(a=>a.playState==='paused')&&runtimeState().ringCachePending===0);
    }finally{if(focusDescriptor)Object.defineProperty(document,'hasFocus',focusDescriptor);else delete document.hasFocus;window.dispatchEvent(new FocusEvent('focus'));}
    await wait(250);const focusedFrame=runtimeState().frames;await wait(250);
    check('Refocusing resumes the existing material',!library.getStatus().paused&&runtimeState().frames>focusedFrame);
    modernFixture=true;modeLabel('Codex');composer();
    await checkModernControls({check,wait,library:()=>library,composer,modeLabel,enable,disable,voiceClicks:()=>primaryVoiceClicks,runtimeState});
    report({passed:results.filter(r=>r.pass).length,total:results.length,results});
  }catch(error){results.push({error:String(error.stack||error)});report(results);}finally{modernFixture=true;modeLabel('Codex');composer();enable();library.setConfig({...DEFAULTS});$('#tests').disabled=false;}
};
