import {mountSettings} from '../src/settings.js';
import {activate} from '../src/index.js';
import {DEFAULTS,KEY} from '../src/config.js';
import {runtimeState} from '../src/vendor/material-runtime.js';

const $=selector=>document.querySelector(selector);
const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const arrow='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
const stop='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6.5" y="6.5" width="11" height="11" rx="2"/></svg>';
const chevron='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 6 3 3 3-3"/></svg>';
const mic='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><rect x="8" y="3" width="8" height="12" rx="4"/><path d="M5 11v1a7 7 0 0 0 14 0v-1M12 19v3"/></svg>';
let cleanup=null,library=null,settingsMount=null,settingsCleanup=null,taskRunning=false,nativeClicks=0,accountClicks=0,modelClicks=0,voiceClicks=0,modeClicks=0;
const report=value=>{$('#report').textContent=typeof value==='string'?value:JSON.stringify(value,null,2);};
function paintState(){$('#state').textContent=taskRunning?'运行中 · 流光增强':'空闲 · 缓慢流动';$('#dot').classList.toggle('working',taskRunning);}
function composer(home=false){
  taskRunning=false;paintState();
  $('#composer-slot').innerHTML=`<div data-codex-composer-root><div class="composer" data-composer-surface-variant="conversation"><textarea class="message" aria-label="消息" placeholder="从一个想法开始…" spellcheck="false"></textarea><div class="bottom"><button class="plus" aria-label="添加附件">＋</button><div class="spacer"></div><button class="chip agent" aria-label="Agent 模式">Agent ${chevron}</button><button class="chip model" data-codex-intelligence-trigger="true" data-composer-navigation-target="reasoning" aria-label="选择模型" aria-haspopup="menu" aria-expanded="false"><span class="_ModelPickerTriggerMeasurement_fixture" aria-hidden="true">隐藏的宽度测量文字不应发光</span><span class="_ModelPickerTriggerLabel_fixture"><span class="model-name">GPT-6 Astra</span><span class="model-effort">最高</span></span>${chevron}</button><button class="voice" aria-label="Voice input">${mic}</button><button class="send" aria-label="Send message" disabled>${arrow}</button></div></div></div>`;
  if(home){const surface=$('.composer');surface.removeAttribute('data-composer-surface-variant');const shell=document.createElement('div');shell.className='home-shell';shell.setAttribute('data-composer-surface-variant','home');surface.before(shell);shell.append(surface);}
  $('.message').addEventListener('input',()=>{$('.send').disabled=!taskRunning&&!$('.message').value.trim();});
  $('.model').addEventListener('click',()=>{modelClicks++;const el=$('.model');const open=el.getAttribute('aria-expanded')!=='true';el.setAttribute('aria-expanded',String(open));el.dataset.state=open?'active':'closed';el.querySelector('.model-name').textContent=open?'选择模型':'GPT-6 Astra';el.querySelector('.model-effort').hidden=open;});
  $('.voice').addEventListener('click',()=>{voiceClicks++;$('.voice').setAttribute('aria-pressed',String(voiceClicks%2===1));});
  $('.send').addEventListener('click',()=>{nativeClicks++;taskRunning=!taskRunning;const el=$('.send');el.setAttribute('aria-label',taskRunning?'Stop generating':'Send message');el.querySelector('svg').outerHTML=taskRunning?stop:arrow;$('[data-codex-composer-root]').setAttribute('aria-busy',String(taskRunning));paintState();el.disabled=!taskRunning&&!$('.message').value.trim();});
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
for(const row of document.querySelectorAll('.sidebar-row')){
  row.setAttribute('data-app-action-sidebar-thread-row','');row.setAttribute('data-app-action-sidebar-thread-active',String(row.hasAttribute('aria-current')));row.removeAttribute('aria-current');
  row.addEventListener('pointerenter',()=>row.classList.add('native-hover'));
  row.addEventListener('pointerleave',()=>row.classList.remove('native-hover'));
  row.addEventListener('click',()=>{for(const other of document.querySelectorAll('.sidebar-row'))other.setAttribute('data-app-action-sidebar-thread-active',String(other===row));});
}
$('.profile-trigger').addEventListener('click',()=>{accountClicks++;$('.profile-trigger').setAttribute('aria-expanded',String(accountClicks%2===1));});
$('.mode-trigger').addEventListener('click',()=>{modeClicks++;const open=$('.mode-menu').hidden;$('.mode-menu').hidden=!open;$('.mode-trigger').setAttribute('aria-expanded',String(open));});
for(const option of document.querySelectorAll('[data-mode-option]'))option.addEventListener('click',()=>{
  const next=document.createElement('span');next.className='truncate font-openai-sans mode-label';next.textContent=option.dataset.modeOption;
  $('.mode-label').replaceWith(next);$('.mode-trigger').setAttribute('aria-label',`Switch mode, current mode: ${option.dataset.modeOption}`);$('.mode-trigger').setAttribute('aria-expanded','false');$('.mode-menu').hidden=true;
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
    composer();enable();library.setConfig({...DEFAULTS});document.documentElement.dataset.theme='dark';$('.fixture').scrollIntoView({block:'center',behavior:'instant'});await wait(650);
    let status=library.getStatus();check('Send material and passive voice reflection mounted',status.metals===2&&status.reflections===1&&status.beams===1&&!!$('.voice [data-ctmb-metal-fx-reflection]')&&!$('.voice').hasAttribute('data-codex-tweaks-mb-metal'),status);
    const word=$('.mode-label'),wordCSS=getComputedStyle(word),wordBox=word.getBoundingClientRect(),mode=$('.mode-trigger'),modeSVG=mode.querySelector('svg');
    check('Persistent mode word alone receives glyph-clipped color',status.wordmarks===1&&wordCSS.backgroundClip.split(',').every(value=>value.trim()==='text')&&wordCSS.filter==='none'&&wordCSS.textShadow==='none'&&!mode.hasAttribute('data-codex-tweaks-mb-surface')&&getComputedStyle(modeSVG).backgroundImage==='none'&&!mode.querySelector('canvas,[data-codex-tweaks-mb-owned]'));
    const beforeMist=getComputedStyle(word,'::after').opacity,wordScans=library.getStatus().scans;await wait(420);
    check('Wordmark colors flow while idle without JS rescans',getComputedStyle(word,'::after').opacity!==beforeMist&&library.getStatus().scans===wordScans);
    library.setConfig({wordmarkHaze:false});const bareBox=word.getBoundingClientRect();
    check('Text effect toggle preserves original size and font',!word.hasAttribute('data-codex-tweaks-mb-wordmark')&&Math.abs(wordBox.width-bareBox.width)<.1&&Math.abs(wordBox.height-bareBox.height)<.1);library.setConfig({wordmarkHaze:true});
    const beforeModeClicks=modeClicks;mode.click();await wait(150);
    check('Mode menu still opens and its option text remains uncolored',modeClicks===beforeModeClicks+1&&!$('.mode-menu').hidden&&!$('.mode-menu').querySelector('[data-codex-tweaks-mb-wordmark]'));
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
    const model=$('.model'),modelBand=model.querySelector('.ctmb-model-haze'),modelText=model.querySelector('[class*="ModelPickerTriggerLabel_"]');
    const bandBox=modelBand.getBoundingClientRect(),textBox=modelText.getBoundingClientRect();
    check('Model haze follows visible text center, not whole button or chevron',status.modelBands===1&&Math.abs(bandBox.top+bandBox.height/2-textBox.top-textBox.height/2)<.1&&bandBox.height<model.clientHeight&&bandBox.right<model.querySelector('svg').getBoundingClientRect().left&&!model.hasAttribute('data-codex-tweaks-mb-surface'));
    const modelRect=model.getBoundingClientRect();
    check('Model haze fills the text band with soft margins on all four sides',bandBox.left>=modelRect.left+2&&bandBox.right<=modelRect.right-2&&bandBox.top>=modelRect.top+2&&bandBox.bottom<=modelRect.bottom-2&&bandBox.height>=22&&bandBox.width>=textBox.width&&getComputedStyle(modelBand).maskImage.includes('linear-gradient'));
    const frame=$('.ctmb-beam-frame'),beamRoot=frame.querySelector('[data-beam]'),beamPaint=getComputedStyle(beamRoot,'::before').backgroundImage,frameOpacity=getComputedStyle(frame).opacity;
    await wait(230);
    check('Beam keeps flowing by opacity while its painted gradient stays fixed',getComputedStyle(frame).opacity!==frameOpacity&&getComputedStyle(beamRoot,'::before').backgroundImage===beamPaint&&frame.getAnimations().every(a=>a.effect.getKeyframes().every(k=>!Object.keys(k).some(key=>/background|filter|mask|angle/.test(key)))));
    const smoothStart=runtimeState().directFrames;await wait(510);check('Visible idle rings receive smooth updates with low-rate auxiliary sampling',runtimeState().directFrames-smoothStart>=20&&library.getStatus().auxiliaryFps===6&&library.getStatus().loopScheduled,{framesIn510ms:runtimeState().directFrames-smoothStart});
    check('Model haze uses pointer-transparent images without extra canvas',getComputedStyle(modelBand).pointerEvents==='none'&&!model.querySelector('canvas')&&getComputedStyle(modelBand).backgroundColor==='rgba(0, 0, 0, 0)');
    const wave=modelBand.querySelector('i'),waveTransform=getComputedStyle(wave).transform;await wait(160);
    check('Model soft waves keep changing while idle',getComputedStyle(wave).transform!==waveTransform);
    const oldModelClicks=modelClicks,oldVoiceClicks=voiceClicks;model.click();$('.voice').click();await wait(240);
    const changedBox=modelBand.getBoundingClientRect(),changedText=modelText.getBoundingClientRect();
    check('Native model and voice clicks survive, model opening remains haze only',modelClicks===oldModelClicks+1&&voiceClicks===oldVoiceClicks+1&&model.getAttribute('aria-expanded')==='true'&&!model.querySelector('canvas')&&changedBox.width<=changedText.width+12.2&&changedBox.left>=model.getBoundingClientRect().left+2&&changedBox.right<=model.getBoundingClientRect().right-2);
    model.click();await wait(180);
    library.setConfig({modelHaze:false});check('Model haze can be disabled without changing Send or voice reflection',!model.querySelector('.ctmb-model-haze')&&!!native.querySelector('canvas')&&!!$('.voice [data-ctmb-metal-fx-reflection]'));library.setConfig({modelHaze:true});
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
    library.setConfig({motion:false});await wait(260);const pausedFrame=runtimeState().frames,pausedDirect=runtimeState().directFrames;await wait(260);
    check('Pause stops shader frame count',runtimeState().frames===pausedFrame&&runtimeState().directFrames===pausedDirect&&!runtimeState().loopScheduled,runtimeState());
    check('Pause freezes model haze too',getComputedStyle($('.ctmb-model-haze i')).animationPlayState==='paused');
    const wordPaused=getComputedStyle($('.mode-label'),'::after').opacity;await wait(140);
    check('Pause freezes mode word colors',getComputedStyle($('.mode-label'),'::after').animationPlayState==='paused'&&getComputedStyle($('.mode-label'),'::after').opacity===wordPaused);
    composer(true);await wait(400);
    check('Home square shell resolves to rounded composer body',library.getStatus().beams===1);
    check('Remount while paused still paints',runtimeState().frames>0&&!!$('.ctmb-metal-fx-root')&&getComputedStyle($('.ctmb-metal-fx-root')).visibility==='visible');
    library.setConfig({motion:true});await wait(240);const resumeFrame=runtimeState().frames;await wait(410);
    check('Resume restarts rendering',runtimeState().frames>resumeFrame);
    document.documentElement.dataset.theme='light';await wait(240);
    const direct=$('.send [data-ctmb-direct]'),source=$('.send .ctmb-metal-fx-canvas:not([data-ctmb-direct])');
    const gl=direct.getContext('webgl2'),loss=gl.getExtension('WEBGL_lose_context');loss.loseContext();await wait(220);
    check('Lost direct context falls back to the existing material',direct.hidden&&source.style.opacity!=='0'&&source.width>0);
    loss.restoreContext();await wait(450);
    check('Restored direct context resumes and hides its fallback',!direct.hidden&&source.style.opacity==='0'&&gl.getError()===gl.NO_ERROR&&!runtimeState().directError);
    check('Light theme removes dark reflections',library.getStatus().reflections===0&&$('.ctmb-metal-fx-root')?.dataset.theme==='light');
    check('Light theme uses readable deeper word colors',$('.mode-label').getAttribute('data-codex-tweaks-mb-wordmark')==='light'&&getComputedStyle($('.mode-label')).getPropertyValue('--ctmb-word-ink').trim()==='#4f5265');
    document.documentElement.dataset.theme='dark';await wait(240);
    const originalButton=$('.send');const originalSVG=originalButton.querySelector('svg');
    disable();await wait(240);
    check('Cleanup releases GL, canvases, styles, haze, and owned attributes',!runtimeState().webgl&&runtimeState().instances===0&&runtimeState().directSurfaces===0&&document.querySelectorAll('canvas,[data-codex-tweaks-mb-account],[data-codex-tweaks-mb-model],[data-codex-tweaks-mb-wordmark],[data-codex-tweaks-mb-wordmark-paused],[data-codex-tweaks-mb-surface],[data-codex-tweaks-mb-owned],[data-codex-tweaks-mb-metal],[data-codex-tweaks-mb-position],[data-ctmb-metal-fx-reflection],#ctmb-metal-fx-styles,#ctmb-mfx-bend-style').length===0);
    check('Cleanup restores native disabled dimming',getComputedStyle($('.send')).opacity==='0.25');
    check('Cleanup preserves native nodes and neighbor styles',$('.send')===originalButton&&originalButton.querySelector('svg')===originalSVG&&$('.voice').style.position===''&&$('.voice').style.isolation===''&&$('.model').style.position==='');
    for(let i=0;i<3;i++){enable();await wait(160);disable();await wait(80);}
    check('Repeated activation leaves no effect nodes',document.querySelectorAll('[data-codex-tweaks-mb-owned],canvas').length===0&&!runtimeState().webgl);
    enable();await wait(350);check('Reactivated successfully',library.getStatus().metals===2&&library.getStatus().reflections===1&&library.getStatus().modelBands===1);
    const startScans=library.getStatus().scans;const stream=document.createElement('p');document.body.append(stream);
    for(let i=0;i<20;i++){stream.textContent+='word ';await wait(8);}await wait(150);
    check('Text streaming does not trigger rescanning',library.getStatus().scans===startScans,{before:startScans,after:library.getStatus().scans});stream.remove();
    const focusDescriptor=Object.getOwnPropertyDescriptor(document,'hasFocus');
    try{
      Object.defineProperty(document,'hasFocus',{configurable:true,value:()=>false});window.dispatchEvent(new FocusEvent('blur'));await wait(260);
      const frameCount=runtimeState().frames;await wait(300);
      check('Window blur freezes the shader and clears its scheduled work',library.getStatus().paused&&frameCount===runtimeState().frames&&!runtimeState().loopScheduled);
      check('Window blur freezes all decorative CSS motion',[...document.getAnimations()].filter(a=>a.animationName?.startsWith('ctmb-')).every(a=>a.playState==='paused'||a.playState==='finished'));
    }finally{if(focusDescriptor)Object.defineProperty(document,'hasFocus',focusDescriptor);else delete document.hasFocus;window.dispatchEvent(new FocusEvent('focus'));}
    await wait(250);const focusedFrame=runtimeState().frames;await wait(250);
    check('Refocusing resumes the existing material',!library.getStatus().paused&&runtimeState().frames>focusedFrame);
    report({passed:results.filter(r=>r.pass).length,total:results.length,results});
  }catch(error){results.push({error:String(error.stack||error)});report(results);}finally{$('#tests').disabled=false;}
};
