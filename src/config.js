// v3 enables the interface-wide scope requested after the 0.2 preview.
export const KEY='codex-tweaks:ct-metal-beam:settings:v3';
export const DEFAULTS=Object.freeze({palette:'chromatic',intensity:.9,motion:true,beam:true,broad:true,modelHaze:true,wordmarkHaze:true});
export function normalize(value={}) {
  if(!value || typeof value!=='object') value={};
  return {
    palette:['chromatic','silver','gold'].includes(value.palette)?value.palette:DEFAULTS.palette,
    intensity:Number.isFinite(value.intensity)?Math.max(.2,Math.min(1,value.intensity)):DEFAULTS.intensity,
    ...Object.fromEntries(['motion','beam','broad','modelHaze','wordmarkHaze'].map(key=>[key,typeof value[key]==='boolean'?value[key]:DEFAULTS[key]])),
  };
}
export function readConfig(){try{return normalize(JSON.parse(localStorage.getItem(KEY)));}catch{return {...DEFAULTS};}}
export function writeConfig(config){try{localStorage.setItem(KEY,JSON.stringify(normalize(config)));return true;}catch{return false;}}
export function stopLabel(name=''){return /^(stop(?: generating| generation| response| responding| running| task| turn)?|cancel generation|停止(?:生成|响应|回答|运行|任务)?|中止(?:生成|运行)?)$/i.test(name.trim());}
export function sendLabel(name=''){return /^(send(?: message| prompt)?|submit|发送(?:消息)?|提交)$/i.test(name.trim());}
