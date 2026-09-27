// Keep the modelHaze preference compatible, but paint only native text glyphs.
// Both color fields are fixed; only the small overlay's opacity is animated.
const LABEL='data-codex-tweaks-mb-model-text';
const CONTENT='data-codex-tweaks-mb-model-content';
const TONE='data-codex-tweaks-mb-model-tone';
function textLabels(trigger){
  const anchors=[...trigger.querySelectorAll('[class*="ModelPickerTriggerLabel_"],[class*="ModelPickerTriggerPlaceholder_"]')];
  const candidates=anchors.length?anchors.flatMap(el=>[el,...el.querySelectorAll('span')]):[...trigger.querySelectorAll('span')];
  return [...new Set(candidates)].filter(el=>!el.children.length&&el.textContent.trim()&&
    !el.closest('[hidden],[aria-hidden="true"],.sr-only,[class*="ModelPickerTriggerMeasurement_"],svg,[data-codex-tweaks-mb-owned]')&&
    el.checkVisibility({checkOpacity:true,checkVisibilityCSS:true}));
}
function set(el,key,value){if(el.getAttribute(key)!==value)el.setAttribute(key,value);}
export function mountModelText(trigger){
  const labels=new Map();let frame=0,live=true;
  function sync(){
    frame=0;if(!live)return;
    const wanted=textLabels(trigger);
    for(const [el,restore] of labels)if(!wanted.includes(el)){restore();labels.delete(el);}
    for(const [index,el] of wanted.entries()){
      if(!labels.has(el)){
        const saved=[LABEL,CONTENT,TONE].map(key=>[key,el.getAttribute(key)]);
        labels.set(el,()=>{for(const [key,value] of saved){if(value===null)el.removeAttribute(key);else set(el,key,value);}});
      }
      set(el,LABEL,'');set(el,CONTENT,el.textContent);set(el,TONE,index?'secondary':'primary');
    }
  }
  const observer=new MutationObserver(()=>{if(live&&!frame)frame=requestAnimationFrame(sync);});
  // Native React children remain untouched. Observe only the model trigger,
  // including hidden effort text and replaced labels, never the conversation.
  observer.observe(trigger,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class','hidden','aria-hidden']});
  sync();
  return {refresh(){if(frame)cancelAnimationFrame(frame);sync();},dispose(){live=false;observer.disconnect();if(frame)cancelAnimationFrame(frame);for(const restore of labels.values())restore();labels.clear();}};
}
export const MODEL_HAZE_CSS=`
[data-codex-tweaks-mb-model-text] {
  position:relative;
  --ctmb-model-ink:#dce3ed;--ctmb-model-blue:#a8cddd;--ctmb-model-violet:#cbbfe0;
  background-image:linear-gradient(112deg,var(--ctmb-model-ink) 5%,var(--ctmb-model-blue) 45%,var(--ctmb-model-violet) 80%,var(--ctmb-model-ink));
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
}
[data-codex-tweaks-mb-model-text]::after {
  content:attr(data-codex-tweaks-mb-model-content) / "";
  position:absolute;inset:0;pointer-events:none;font:inherit;letter-spacing:inherit;white-space:inherit;text-align:inherit;
  overflow:hidden;text-overflow:inherit;
  background-image:linear-gradient(112deg,var(--ctmb-model-violet) 3%,var(--ctmb-model-ink) 40%,var(--ctmb-model-blue) 86%);
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
  opacity:.12;animation:ctmb-model-iridescence 12s cubic-bezier(.45,0,.55,1) -4s infinite alternate;
}
[data-codex-tweaks-mb-model-tone="secondary"] {--ctmb-model-ink:#afb2bf;--ctmb-model-blue:#8fabbd;--ctmb-model-violet:#b0a3bf}
[data-codex-tweaks-mb-model="light"] [data-codex-tweaks-mb-model-text] {--ctmb-model-ink:#444957;--ctmb-model-blue:#3d6578;--ctmb-model-violet:#706181}
[data-codex-tweaks-mb-model="light"] [data-codex-tweaks-mb-model-tone="secondary"] {--ctmb-model-ink:#666876;--ctmb-model-blue:#547585;--ctmb-model-violet:#7b6e88}
[data-codex-tweaks-mb-model-paused="true"] [data-codex-tweaks-mb-model-text]::after {animation-play-state:paused}
@keyframes ctmb-model-iridescence {from{opacity:.12}to{opacity:.84}}
@media (prefers-reduced-motion:reduce){[data-codex-tweaks-mb-model-text]::after{animation-play-state:paused!important}}
@media (forced-colors:active){[data-codex-tweaks-mb-model-text]{background:none!important;-webkit-text-fill-color:currentColor!important}[data-codex-tweaks-mb-model-text]::after{display:none!important}}
`;
