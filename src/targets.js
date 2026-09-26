import {OWN,METAL} from './style.js';
import {stopLabel,sendLabel} from './config.js';
export const COMPOSER='[data-codex-composer-root]';
export const SURFACE='[data-composer-surface-variant]';
export const SIDEBAR='.app-shell-left-panel,[data-testid="app-shell-floating-left-panel"],[data-pip-obstacle="app-shell-floating-left-panel"]';
export const THREAD_ROW='[data-app-action-sidebar-thread-row]';
export const MODEL_TRIGGER='[data-codex-intelligence-trigger]';
const CONTROL=`button,a[href],[role="button"],[role="tab"],[role="switch"],[role="menuitem"],[role="treeitem"],[role="combobox"],[tabindex="0"],${THREAD_ROW}`;
const PANEL='[role="menu"],[role="dialog"],[role="listbox"]';
const ZONE=`${COMPOSER},header,nav,[role="toolbar"],${PANEL},${SIDEBAR}`;
const EDITOR='textarea,[contenteditable="true"],[role="textbox"]';
const SELECTED='[aria-current="page"],[aria-current="true"],[aria-selected="true"],[data-state="active"],[data-selected="true"],[data-app-action-sidebar-thread-active="true"],[data-app-action-sidebar-thread-selected="true"]';
const EXCLUDED=`[${OWN}],.ctmb-settings,pre,code,${EDITOR},.monaco-editor,.xterm,[data-codex-tweaks-mb-ignore]`;
const name=el=>el.getAttribute('aria-label')||el.getAttribute('title')||'';
export const isOwned=node=>!!node?.closest?.(`[${OWN}],[data-ctmb-metal-fx-reflection],.ctmb-settings`);
export const voiceLabel=(value='')=>/^(?:(?:start(?: new)?|stop|use|toggle) )?(?:voice(?: mode| input| chat)?|dictation|dictate|microphone|语音(?:输入|聊天)?|(?:开始|停止|使用|切换)?(?:语音|听写|录音))$/i.test(value.trim());
export function isModelTrigger(el){return el.matches(MODEL_TRIGGER)||/^(?:(?:select|change|choose) model|(?:选择|切换)模型)$/i.test(name(el).trim());}
export function modelTextBand(el){
  const box=geometry(el);if(!box)return null;
  // The visible native label excludes the chevron and invisible measurement
  // text. Read geometry only; keep its text and React-owned children intact.
  const anchor=[...el.querySelectorAll('[class*="ModelPickerTriggerLabel_"],[class*="ModelPickerTriggerPlaceholder_"]')].find(node=>node.checkVisibility?.({checkOpacity:true,checkVisibilityCSS:true}));
  let textBox=anchor?.getBoundingClientRect();
  if(!textBox){
    const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),rects=[];
    for(let node=walker.nextNode();node;node=walker.nextNode()){
      if(!node.length||node.parentElement.closest('svg,[aria-hidden="true"],.sr-only')||isOwned(node.parentElement))continue;
      const range=document.createRange();range.selectNodeContents(node);
      for(const rect of range.getClientRects())if(rect.width>0&&rect.height>2)rects.push(rect);
    }
    if(!rects.length)return null;
    const left=Math.min(...rects.map(r=>r.left)),right=Math.max(...rects.map(r=>r.right)),top=Math.min(...rects.map(r=>r.top)),bottom=Math.max(...rects.map(r=>r.bottom));
    textBox={left,right,top,bottom,width:right-left,height:bottom-top};
  }
  const scale=box.width/el.offsetWidth||1;
  // Keep transparent margins inside the native trigger, including short labels.
  const inset=2,clientW=el.clientWidth,clientH=el.clientHeight;
  const textLeft=(textBox.left-box.x)/scale-el.clientLeft;
  const textRight=(textBox.left+textBox.width-box.x)/scale-el.clientLeft;
  const chevron=el.querySelector('svg')?.getBoundingClientRect();
  const maxRight=chevron?(chevron.left-box.x)/scale-el.clientLeft-1:clientW-inset;
  const x=Math.max(inset,textLeft-7),right=Math.min(clientW-inset,maxRight,textRight+5);
  const height=Math.min(30,Math.max(0,clientH-2*inset),textBox.height/scale*1.7);
  if(right<=x||height<4)return null;
  const center=(textBox.top+textBox.height/2-box.y)/scale-el.clientTop;
  const y=Math.max(inset,Math.min(clientH-inset-height,center-height/2));
  return {anchor,x,y,width:right-x,height};
}
export function geometry(el,{occlusion=true}={}) {
  if(!el?.isConnected||el.closest('[hidden],[aria-hidden="true"]'))return null;
  const box=el.getBoundingClientRect();
  if(box.width<16||box.height<16||box.width>1800||box.height>900||box.right<=0||box.bottom<=0||box.left>=innerWidth||box.top>=innerHeight)return null;
  if(el.checkVisibility&&!el.checkVisibility({checkOpacity:true,checkVisibilityCSS:true}))return null;
  const css=getComputedStyle(el);
  if(css.display==='none'||css.visibility!=='visible'||Number(css.opacity)===0)return null;
  const value=css.borderTopLeftRadius;
  const radius=Math.min(box.width/2,box.height/2,parseFloat(value)*(value.endsWith('%')?box.width/100:1)||0);
  if(radius<3)return null;
  // Suppress portaled light when another surface actually covers this control.
  if(occlusion){
    const hit=document.elementFromPoint(Math.max(1,Math.min(innerWidth-2,box.left+box.width/2)),Math.max(1,Math.min(innerHeight-2,box.top+box.height/2)));
    if(hit&&!el.contains(hit)&&!hit.contains(el))return null;
  }
  return {x:box.left,y:box.top,width:box.width,height:box.height,radius,
    variant:Math.abs(box.width-box.height)<3&&radius>=Math.min(box.width,box.height)*.4?'circle':'button'};
}
function eligible(el){return !el.matches('input,select,textarea,svg,canvas,img,iframe,video')&&!el.closest(EXCLUDED)&&!el.closest('[hidden],[aria-hidden="true"]');}
function roundedSurface(root){
  const explicit=[...root.querySelectorAll(SURFACE)].filter(el=>!el.hasAttribute('data-composer-utility-bar-variant'));
  if(root.matches(SURFACE)&&!root.hasAttribute('data-composer-utility-bar-variant'))explicit.unshift(root);
  const usable=explicit.filter(el=>geometry(el,{occlusion:false}));
  if(usable.length)return usable.filter(el=>!usable.some(other=>other!==el&&el.contains(other)));
  // Home pages may mark a square layout shell. Follow the editable's ancestors
  // to the first rounded body that also contains the composer's controls.
  const found=[];
  for(const editor of root.querySelectorAll(EDITOR))for(let el=editor.parentElement;el&&root.contains(el);el=el.parentElement){
    if(el.querySelector('button')&&geometry(el,{occlusion:false})){found.push(el);break;}
  }
  return [...new Set(found)];
}
function selectedRow(el){
  if(el.matches(SELECTED))return true;
  if(el.matches(THREAD_ROW))return false;
  if(el.matches('a[href]'))try{const url=new URL(el.getAttribute('href'),location.href);if(url.pathname===location.pathname&&url.hash===location.hash&&url.pathname!=='/')return true;}catch{}
  // A native hover background is not a selection signal.
  return false;
}
export function isSidebarRow(el){
  if(!el?.closest(SIDEBAR))return false;
  const row=el.closest(THREAD_ROW);if(row)return el===row;
  return el.matches('a[href],[role="treeitem"],button,[role="button"]')&&!el.closest('[aria-haspopup="menu"]')&&el.getBoundingClientRect().width>=90;
}
function wordmarkLabels(){
  const found=[];
  for(const side of document.querySelectorAll(SIDEBAR)){
    const top=side.getBoundingClientRect().top,candidates=[],labels=new Set(side.querySelectorAll('span.font-openai-sans'));
    for(const trigger of side.querySelectorAll('button[aria-label],[role="button"][aria-label]'))if(/(?:switch mode|切换模式|选择模式)/i.test(name(trigger)))for(const label of trigger.querySelectorAll('span'))labels.add(label);
    for(const label of labels){
      if(label.closest(`${EXCLUDED},${THREAD_ROW},.sidebar-item,[class~="[container-type:inline-size]"],[role="menu"],[role="menuitem"],[role="menuitemradio"]`)||label.querySelector('span,svg,img,button'))continue;
      if(!label.checkVisibility?.({checkOpacity:true,checkVisibilityCSS:true}))continue;
      const trigger=label.closest('button,[role="button"]');
      const explicit=trigger&&/(?:switch mode|切换模式|选择模式)/i.test(name(trigger));
      const b=label.getBoundingClientRect();
      const headerLabel=label.classList.contains('font-openai-sans')&&b.top>=top&&b.top<top+160;
      if(!explicit&&!headerLabel)continue;
      // Validate only the public mode-heading label, never task/account text.
      if(!/^(?:Codex|ChatGPT(?: Work)?)$/.test(label.textContent?.trim()??''))continue;
      if(explicit||headerLabel)candidates.push(label);
    }
    // A panel has one persistent mode label. Portal menu options are excluded.
    if(candidates.length)found.push(candidates.sort((a,b)=>a.getBoundingClientRect().top-b.getBoundingClientRect().top)[0]);
  }
  return [...new Set(found)];
}
export function discover(broad=true,modelHaze=true,wordmarkHaze=true) {
  const composers=[],buttons=[],selected=[],controls=[],panels=[],models=[];
  const labels=wordmarkLabels(),modeControls=new Set(labels.map(el=>el.closest('button,[role="button"]')).filter(Boolean));
  for(const root of document.querySelectorAll(COMPOSER)){
    if(root.closest(EXCLUDED))continue;
    composers.push(...roundedSurface(root));
    for(const el of root.querySelectorAll(CONTROL))if(eligible(el)){
      if(sendLabel(name(el))||stopLabel(name(el)))buttons.push(el);
      if(modelHaze&&isModelTrigger(el))models.push(el);
    }
  }
  if(broad){
    for(const zone of document.querySelectorAll(ZONE))for(const el of zone.querySelectorAll(CONTROL)){
      if(!eligible(el)||voiceLabel(name(el))||isModelTrigger(el)||modeControls.has(el))continue;controls.push(el);if(selectedRow(el))selected.push(el);
    }
    for(const el of document.querySelectorAll(PANEL))if(eligible(el)&&geometry(el,{occlusion:false}))panels.push(el);
  }
  return {composers:[...new Set(composers)],buttons:[...new Set(buttons)],selected:[...new Set(selected)].filter(el=>!selected.some(other=>other!==el&&other.contains(el))),controls:[...new Set(controls)],panels,models:[...new Set(models)].slice(0,2),wordmarks:wordmarkHaze?labels:[]};
}
export function running(el){
  const root=el.closest(COMPOSER);
  return !!root&&(root.getAttribute('aria-busy')==='true'||[...root.querySelectorAll('button,[role="button"]')].some(button=>!button.disabled&&stopLabel(name(button))&&button.getClientRects().length>0));
}
export function neighbor(button){
  const root=button.closest(COMPOSER);if(!root||!(sendLabel(name(button))||stopLabel(name(button))))return null;
  const a=button.getBoundingClientRect();let best=null,bestGap=96;
  for(const el of root.querySelectorAll(CONTROL)){
    if(el===button||el.closest(EXCLUDED)||el.hasAttribute(METAL)||!voiceLabel(name(el)))continue;
    const b=el.getBoundingClientRect(),gap=Math.max(b.left-a.right,a.left-b.right,0),overlap=Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top);
    if(overlap>=Math.min(a.height,b.height)*.45&&gap<bestGap&&geometry(el)){best=el;bestGap=gap;}
  }
  return best;
}
export function hoverControl(target){
  const el=target?.closest?.(CONTROL);
  if(!el||!eligible(el)||!el.closest(ZONE)||el.disabled)return null;
  const box=el.getBoundingClientRect();return box.width<=600&&box.height<=80?el:null;
}
export function theme(){
  const value=document.documentElement.getAttribute('data-theme')||document.body?.getAttribute('data-theme')||[...document.querySelectorAll('[data-theme="light"],[data-theme="dark"]')].find(el=>!isOwned(el))?.getAttribute('data-theme');
  if(value==='light'||value==='dark')return value;
  if(document.documentElement.classList.contains('electron-light')||document.body?.classList.contains('electron-light'))return 'light';
  if(document.documentElement.classList.contains('dark')||document.documentElement.classList.contains('electron-dark'))return 'dark';
  return matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';
}
export function relevantMutation(records){
  return records.some(record=>{
    if(isOwned(record.target))return false;
    if(record.type==='attributes')return record.attributeName==='data-theme'||record.target===document.documentElement||record.target===document.body||!!record.target.closest(ZONE);
    return [...record.addedNodes,...record.removedNodes].some(node=>node.nodeType===1&&!isOwned(node)&&(node.matches(`${COMPOSER},${SURFACE},${CONTROL},${PANEL}`)||node.querySelector(`${COMPOSER},${SURFACE},${CONTROL},${PANEL}`)));
  });
}
