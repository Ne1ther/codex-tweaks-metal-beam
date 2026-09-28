import {DEFAULTS} from '../src/config.js';
const $=selector=>document.querySelector(selector);
const sameBox=(a,b)=>['x','y','width','height'].every(key=>Math.abs(a[key]-b[key])<.1);
const opacityOnly=el=>el.getAnimations({subtree:true}).every(animation=>animation.effect.getKeyframes().every(frame=>Object.keys(frame).every(key=>['offset','computedOffset','easing','composite','opacity'].includes(key))));
const primaryRing=()=>$('.send .ctmb-ring-frames img');
const ringPaused=()=>primaryRing()?.getAnimations().every(animation=>animation.playState==='paused');
export async function checkModernControls({check,wait,library:getLibrary,composer,modeLabel,enable,disable,voiceClicks,runtimeState}){
  let library=getLibrary();library.setConfig({...DEFAULTS});await wait(420);
  const svg=$('.native-wordmark'),mode=$('.mode-trigger'),arrow=mode.querySelector(':scope > svg'),sr=$('.mode-label .sr-only');
  const nativeBox=svg.getBoundingClientRect(),nativePaths=svg.innerHTML,arrowMarkup=arrow.outerHTML;
  let layer=$('[data-codex-tweaks-mb-svg-wordmark]');
  check('New native SVG wordmark receives a glyph-shaped layer, not the hidden label or arrow',library.getStatus().wordmarks===1&&svg.hasAttribute('data-codex-tweaks-mb-wordmark')&&!sr.hasAttribute('data-codex-tweaks-mb-wordmark')&&!arrow.hasAttribute('data-codex-tweaks-mb-wordmark')&&!!layer&&getComputedStyle(layer).display==='block'&&getComputedStyle(layer).maskImage.includes('data:image/svg+xml'));
  check('SVG decoration keeps native geometry, paths, accessibility label and arrow intact',svg.innerHTML===nativePaths&&sr.textContent==='Codex'&&arrow.outerHTML===arrowMarkup&&sameBox(nativeBox,layer.getBoundingClientRect())&&layer.getAttribute('aria-hidden')==='true'&&getComputedStyle(layer).pointerEvents==='none');
  check('Wordmark animates only a small fixed mask with no blur or canvas',opacityOnly(layer)&&getComputedStyle(layer).filter==='none'&&getComputedStyle(layer,'::after').filter==='none'&&!mode.querySelector('canvas'));
  library.setConfig({wordmarkHaze:false});
  check('Turning off SVG decoration restores the exact native logo without layout shift',!$('[data-codex-tweaks-mb-svg-wordmark]')&&sameBox(nativeBox,svg.getBoundingClientRect())&&svg.innerHTML===nativePaths&&svg.style.opacity==='');
  library.setConfig({wordmarkHaze:true});await wait(160);
  const old=svg;mode.click();$('[data-mode-option="ChatGPT"]').click();await wait(220);
  check('Changing product mode decorates the replacement SVG once and leaves menu labels native',$('.mode-label .sr-only').textContent==='ChatGPT'&&$('[data-codex-tweaks-mb-svg-wordmark]')&&document.querySelectorAll('[data-codex-tweaks-mb-svg-wordmark]').length===1&&!old.hasAttribute('data-codex-tweaks-mb-wordmark')&&!$('.mode-menu').querySelector('[data-codex-tweaks-mb-wordmark]'));
  layer=$('[data-codex-tweaks-mb-svg-wordmark]');const beforeMask=layer.style.maskImage,path=$('.native-wordmark path'),d=path.getAttribute('d');path.setAttribute('d','M0 0H12V24H0Z');await wait(100);
  check('An in-place native SVG path update refreshes the static mask',layer.style.maskImage!==beforeMask);path.setAttribute('d',d);await wait(100);
  modeLabel('Codex');await wait(200);
  const voice=$('.send'),mic=$('.voice'),voiceBox=voice.getBoundingClientRect(),voiceIcon=voice.querySelector('svg');
  check('Empty primary voice has the same Metal mount as Send, with no separate glow',voice.hasAttribute('data-codex-tweaks-mb-metal')&&voice.querySelectorAll('.ctmb-metal-mount').length===1&&!$('.ctmb-voice-light,[data-codex-tweaks-mb-voice]'));
  check('Adjacent dictation receives passive reflection without its own Metal',!mic.hasAttribute('data-codex-tweaks-mb-metal')&&!mic.querySelector('.ctmb-metal-mount')&&!!mic.querySelector('[data-ctmb-metal-fx-reflection]'));
  const waitForCache=async()=>{const start=performance.now();while((!primaryRing()||runtimeState().ringCachePending)&&performance.now()-start<6000)await wait(50);};
  await waitForCache();
  const mount=voice.querySelector('.ctmb-metal-mount'),ring=primaryRing(),bakes=runtimeState().ringCacheBakes;
  const sameMaterial=()=>voice.querySelector('.ctmb-metal-mount')===mount&&primaryRing()===ring&&!!ring&&runtimeState().ringCacheBakes===bakes&&voice.querySelectorAll('.ctmb-metal-mount').length===1;
  check('Primary voice uses the existing cached material renderer',!!ring&&runtimeState().ringCachePending===0&&!runtimeState().ringCacheError);
  mount.remove();await wait(25);
  check('Native rerender reattaches a removed material child without rebaking',sameMaterial());
  const clickCount=voiceClicks();voice.click();await wait(100);
  check('Native primary voice click and icon are preserved',voiceClicks()===clickCount+1&&voice.querySelector('svg')===voiceIcon&&sameBox(voiceBox,voice.getBoundingClientRect()));
  voice.disabled=true;await wait(140);const disabledClicks=voiceClicks();voice.click();
  check('Disabled voice keeps the shared material and native disabled action',sameMaterial()&&voice.disabled&&voiceClicks()===disabledClicks);voice.disabled=false;await wait(140);
  voice.setAttribute('aria-pressed','true');await wait(140);check('Pressed state preserves native semantics without rebuilding Metal',sameMaterial()&&voice.getAttribute('aria-pressed')==='true');voice.removeAttribute('aria-pressed');await wait(140);
  const draft=$('.message');draft.value='Test state transition';draft.dispatchEvent(new Event('input',{bubbles:true}));await wait(350);
  check('Typing switches to Send while reusing the exact Metal cache and geometry',voice.getAttribute('aria-label')==='Send message'&&sameMaterial()&&sameBox(voiceBox,voice.getBoundingClientRect()));
  voice.click();await wait(200);
  check('Running changes to Stop without rebuilding its Metal cache',library.getStatus().running&&voice.getAttribute('aria-label')==='Stop generating'&&sameMaterial());
  voice.click();draft.value='';draft.dispatchEvent(new Event('input',{bubbles:true}));await wait(220);
  check('Clearing restores primary voice with the same material and no extra cache bake',voice.getAttribute('aria-label')==='开启语音聊天'&&sameMaterial()&&sameBox(voiceBox,voice.getBoundingClientRect()));
  voice.setAttribute('aria-label','Start new voice chat');await wait(150);
  check('English voice label reuses the same primary Metal',sameMaterial());
  // Codex's voice and Send branches can replace the native button instead
  // of changing its label in place. The first rendered frame must inherit the
  // original material rather than starting another shader bake.
  let switched=$('.send'),nativeClicks=0;
  const replacePrimary=label=>{
    const old=switched,next=document.createElement('button');
    next.className='send';next.setAttribute('aria-label',label);
    next.append(old.querySelector('svg').cloneNode(true));
    next.addEventListener('click',()=>nativeClicks++);
    old.replaceWith(next);switched=next;
    return old;
  };
  const beforeReplacementBakes=runtimeState().ringCacheBakes;
  const oldVoice=replacePrimary('Send message');await wait(25);
  check('Replacing Voice with Send keeps the same decoded Metal before the old 90 ms scan',switched.querySelector('.ctmb-metal-mount')===mount&&primaryRing()===ring&&!oldVoice.hasAttribute('data-codex-tweaks-mb-metal')&&runtimeState().ringCacheBakes===beforeReplacementBakes);
  switched.click();check('New native Send remains clickable through reused Metal',nativeClicks===1);
  const oldSend=replacePrimary('开启语音聊天');await wait(25);
  check('Replacing Send with Voice also keeps one cached Metal',switched.querySelector('.ctmb-metal-mount')===mount&&primaryRing()===ring&&!oldSend.hasAttribute('data-codex-tweaks-mb-metal')&&runtimeState().ringCacheBakes===beforeReplacementBakes);
  for(let i=0;i<6;i++){replacePrimary(i%2?'开启语音聊天':'Send message');await wait(25);}
  check('Rapid native branch switches do not stack mounts or rebake the shader',switched.querySelectorAll('.ctmb-metal-mount').length===1&&primaryRing()===ring&&runtimeState().ringCacheBakes===beforeReplacementBakes&&library.getStatus().metals===2);
  const parent=switched.parentElement;switched.remove();await wait(140);
  const delayed=document.createElement('button');delayed.className='send';delayed.setAttribute('aria-label','Send message');delayed.append(voiceIcon.cloneNode(true));parent.append(delayed);switched=delayed;await wait(25);
  check('A two-commit native switch recovers its retained cache without a new bake',switched.querySelector('.ctmb-metal-mount')===mount&&primaryRing()===ring&&runtimeState().ringCacheBakes===beforeReplacementBakes);
  composer(true);await wait(200);check('Home voice label is supported with one primary material and no stale button',$('.send').hasAttribute('data-codex-tweaks-mb-metal')&&$('.send').getAttribute('aria-label')==='开始新的语音聊天'&&!$('.footer-voice').hasAttribute('data-codex-tweaks-mb-metal')&&!voice.isConnected&&!voice.hasAttribute('data-codex-tweaks-mb-metal')&&library.getStatus().metals===2&&document.querySelectorAll('.ctmb-metal-mount').length===2);
  library.setConfig({broad:false,beam:false,modelHaze:false});await wait(350);
  await waitForCache();
  const simple=runtimeState(),scans=library.getStatus().scans,wordLayer=$('[data-codex-tweaks-mb-svg-wordmark]'),wordOpacity=getComputedStyle(wordLayer,'::after').opacity;
  const player=primaryRing()?.getAnimations()[0],playerTime=player?.currentTime;
  await wait(360);
  check('Voice cache moves without live ring draws, new bakes or target scans',simple.instances===1&&simple.cachedRings===1&&runtimeState().directFrames===simple.directFrames&&runtimeState().ringCacheBakes===simple.ringCacheBakes&&library.getStatus().scans===scans&&player?.currentTime>playerTime&&getComputedStyle(wordLayer,'::after').opacity!==wordOpacity);
  library.setConfig({motion:false});await wait(100);const frozen=getComputedStyle(wordLayer,'::after').opacity;
  await wait(180);
  check('Pause freezes SVG color and primary voice Metal',getComputedStyle(wordLayer,'::after').opacity===frozen&&ringPaused());
  library.setConfig({motion:true});
  const focusDescriptor=Object.getOwnPropertyDescriptor(document,'hasFocus');
  try{
    Object.defineProperty(document,'hasFocus',{configurable:true,value:()=>false});window.dispatchEvent(new FocusEvent('blur'));await wait(120);
    check('Blur keeps cached voice Metal and SVG glyph motion',getComputedStyle(wordLayer,'::after').animationPlayState==='running'&&!ringPaused()&&runtimeState().motionMode==='ambient'&&!runtimeState().loopScheduled);
  }finally{if(focusDescriptor)Object.defineProperty(document,'hasFocus',focusDescriptor);else delete document.hasFocus;window.dispatchEvent(new FocusEvent('focus'));}
  await wait(120);
  check('Focus resumes SVG and voice without replacing their layers',wordLayer===$('[data-codex-tweaks-mb-svg-wordmark]')&&getComputedStyle(wordLayer,'::after').animationPlayState==='running'&&primaryRing()?.getAnimations()[0]===player&&player.playState==='running');
  document.documentElement.dataset.theme='light';await wait(180);
  check('Light theme updates both effects without changing native geometry',wordLayer.getAttribute('data-codex-tweaks-mb-svg-wordmark')==='light'&&$('.send').getAttribute('data-codex-tweaks-mb-metal')==='light'&&sameBox($('.native-wordmark').getBoundingClientRect(),wordLayer.getBoundingClientRect()));
  const nativeSvg=$('.native-wordmark'),nativeVoice=$('.send'),savedSvg=nativeSvg.innerHTML;
  disable();await wait(80);
  check('Cleanup removes SVG and voice Metal and restores native styles',!$('[data-codex-tweaks-mb-svg-wordmark],.ctmb-metal-mount,.ctmb-ring-frames,.ctmb-voice-light,[data-codex-tweaks-mb-metal]')&&runtimeState().ringCacheBytes===0&&nativeSvg.innerHTML===savedSvg&&nativeSvg.parentElement.style.position===''&&nativeVoice.style.position===''&&getComputedStyle(nativeVoice).position==='static');
  const label=$('.mode-label'),nativeChildren=[...label.childNodes];label.replaceChildren();enable();library=getLibrary();await wait(120);
  check('Missing SVG heading does not decorate empty controls',library.getStatus().wordmarks===0);
  label.append(...nativeChildren);await wait(180);
  check('A late-mounted SVG heading is detected without another user action',library.getStatus().wordmarks===1&&!!$('[data-codex-tweaks-mb-svg-wordmark]'));
  library.setConfig({...DEFAULTS});document.documentElement.dataset.theme='dark';await wait(250);
  check('Reactivation creates one SVG and one primary voice Metal',document.querySelectorAll('[data-codex-tweaks-mb-svg-wordmark]').length===1&&$('.send').querySelectorAll('.ctmb-metal-mount').length===1&&!$('.ctmb-voice-light'));
}
