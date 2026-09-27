import {test} from 'node:test';
import assert from 'node:assert/strict';
import {svgWordmarkMask,mountSvgWordmark} from '../src/wordmark.js';

const SVG_NS='http://www.w3.org/2000/svg';
class Style {
  values=new Map();priorities=new Map();
  setProperty(key,value,priority=''){this.values.set(key,String(value));this.priorities.set(key,priority);}
  getPropertyValue(key){return this.values.get(key)||'';}
  getPropertyPriority(key){return this.priorities.get(key)||'';}
  removeProperty(key){const value=this.getPropertyValue(key);this.values.delete(key);this.priorities.delete(key);return value;}
}
function fixture(){
  const observers=[],reads={bounds:0,styles:0};
  class Observer {
    constructor(callback){this.callback=callback;this.targets=[];this.disconnected=false;observers.push(this);}
    observe(target){this.targets.push(target);}
    disconnect(){this.disconnected=true;}
    fire(){this.callback([]);}
  }
  const doc={defaultView:{MutationObserver:Observer,ResizeObserver:Observer,getComputedStyle(node){reads.styles++;return {position:node.style.getPropertyValue('position')||'static',getPropertyValue(key){return node.computed?.[key]||node.getAttribute(key)||'';}};}}};
  class Element {
    constructor(tag,attrs={}){this.localName=tag;this.namespaceURI=SVG_NS;this.ownerDocument=doc;this.attributes=new Map(Object.entries(attrs));this.children=[];this.style=new Style();this.computed={};this.isConnected=true;this.clientLeft=0;this.clientTop=0;this.scrollLeft=0;this.scrollTop=0;this.offsetWidth=100;this.offsetHeight=30;this.box={left:10,top:10,width:100,height:30};}
    getAttribute(key){return this.attributes.get(key)??null;}
    setAttribute(key,value){this.attributes.set(key,String(value));}
    append(child){this.children.push(child);child.parentElement=this;}
    remove(){this.parentElement.children=this.parentElement.children.filter(child=>child!==this);this.parentElement=null;this.isConnected=false;}
    getBoundingClientRect(){reads.bounds++;return this.box;}
  }
  doc.createElement=tag=>new Element(tag);
  const el=(tag,attrs={},children=[])=>{const node=new Element(tag,attrs);for(const child of children)node.append(child);return node;};
  const path=el('path',{d:'M0 0H70V20H0Z M5 5V15H65V5Z','fill-rule':'evenodd',fill:'currentColor'});
  const svg=el('svg',{viewBox:'0 0 70 20','aria-hidden':'true'},[path]);svg.box={left:15,top:15,width:70,height:20};svg.offsetWidth=70;svg.offsetHeight=20;
  const arrow=el('svg',{viewBox:'0 0 16 16'},[el('path',{d:'M2 5L8 11L14 5',fill:'none',stroke:'currentColor'})]);
  const parent=el('button');parent.append(svg);parent.append(arrow);
  return {el,doc,svg,path,parent,arrow,observers,reads};
}
const markup=mask=>decodeURIComponent(mask.slice(mask.indexOf(',')+1,-2));

test('SVG mask keeps native shape, holes, and stroke while stripping text, IDs, handlers, and links',()=>{
  const {el,svg,path}=fixture();
  path.setAttribute('id','private-identity');path.setAttribute('onclick','doSomething()');path.setAttribute('href','https://example.invalid/image');
  svg.append(el('title',{},[]));svg.append(el('desc',{},[]));svg.append(el('script',{},[]));
  const xml=markup(svgWordmarkMask(svg,{width:70,height:20}));
  assert.match(xml,/viewBox="0 0 70 20"/);
  assert.match(xml,/d="M0 0H70V20H0Z M5 5V15H65V5Z"/);
  assert.match(xml,/fill-rule="evenodd"/);
  assert.match(xml,/fill="white"/);
  assert.doesNotMatch(xml,/private|onclick|href|example|<title|<desc|<script/);
});

test('Referenced or unsupported geometry falls back without copying arbitrary SVG content',()=>{
  const {el,svg,path}=fixture();
  path.computed.fill='url(https://example.invalid/mask.svg)';
  assert.equal(svgWordmarkMask(svg,{width:70,height:20}),null);
  delete path.computed.fill;svg.append(el('use',{href:'#glyph'}));
  assert.equal(svgWordmarkMask(svg,{width:70,height:20}),null);
  svg.children.pop();path.setAttribute('clip-path','url(#letter-clip)');
  assert.equal(svgWordmarkMask(svg,{width:70,height:20}),null);
  path.attributes.delete('clip-path');svg.setAttribute('clip-path','url(#root-clip)');
  assert.equal(svgWordmarkMask(svg,{width:70,height:20}),null);
});

test('Invalid dimensions, malformed viewBox, and unbounded shape collections use native fallback',()=>{
  const {el,svg}=fixture();
  for(const size of [{width:NaN,height:20},{width:0,height:20},{width:601,height:20},{width:70,height:161}])assert.equal(svgWordmarkMask(svg,size),null);
  svg.setAttribute('viewBox','0 0 Infinity 20');assert.equal(svgWordmarkMask(svg,{width:70,height:20}),null);
  svg.setAttribute('viewBox','0 0 70 20');for(let i=0;i<128;i++)svg.append(el('path',{d:'M0 0H1V1Z'}));
  assert.equal(svgWordmarkMask(svg,{width:70,height:20}),null);
});

test('Mount overlays only original glyph bounds, preserves native SVG/arrow, and state refresh reads no geometry',()=>{
  const {svg,parent,arrow,reads}=fixture();
  const before=[...svg.attributes];
  const instance=mountSvgWordmark(svg),layer=parent.children.at(-1);
  assert.equal(parent.children.length,3);assert.equal(parent.children[0],svg);assert.equal(parent.children[1],arrow);
  assert.deepEqual([...svg.attributes],before);assert.equal(svg.style.getPropertyValue('opacity'),'');
  assert.equal(layer.getAttribute('data-codex-tweaks-mb-owned'),'wordmark');assert.equal(layer.getAttribute('aria-hidden'),'true');
  assert.equal(layer.style.left,'5px');assert.equal(layer.style.top,'5px');assert.equal(layer.style.width,'70px');assert.equal(layer.style.height,'20px');assert.equal(layer.style.display,'block');
  const observed={...reads};
  for(let i=0;i<20;i++)instance.refresh({theme:'light',paused:i%2===0});
  assert.deepEqual(reads,observed);assert.equal(layer.getAttribute('data-codex-tweaks-mb-svg-wordmark'),'light');assert.equal(layer.getAttribute('data-paused'),'false');
  instance.dispose();assert.deepEqual(parent.children,[svg,arrow]);assert.equal(parent.style.getPropertyValue('position'),'');
});

test('Native path replacement and resize update a single layer, then disposal disconnects every observer',async()=>{
  const {svg,path,parent,observers,reads}=fixture();
  const instance=mountSvgWordmark(svg),layer=parent.children.at(-1),originalMask=layer.style.getPropertyValue('mask-image');
  path.setAttribute('d','M0 0H50V15H0Z');const before=reads.bounds;
  observers[0].fire();observers[0].fire();await Promise.resolve();
  assert.equal(reads.bounds,before+2);assert.notEqual(layer.style.getPropertyValue('mask-image'),originalMask);assert.equal(parent.children.length,3);
  svg.box.width=90;observers[1].fire();await Promise.resolve();assert.equal(layer.style.width,'90px');
  instance.dispose();instance.dispose();assert.ok(observers.every(observer=>observer.disconnected));
  const stopped={...reads};observers[0].fire();await Promise.resolve();instance.refresh();assert.deepEqual(reads,stopped);
});

test('Unsupported replacement retains the native logo, and cleanup respects a host positioning change',async()=>{
  const {el,svg,parent,observers}=fixture();
  const instance=mountSvgWordmark(svg),layer=parent.children.at(-1);
  svg.append(el('image',{href:'https://example.invalid/logo.svg'}));observers[0].fire();await Promise.resolve();
  assert.equal(layer.style.display,'none');assert.equal(svg.style.getPropertyValue('opacity'),'');assert.equal(svg.getAttribute('aria-hidden'),'true');
  parent.style.setProperty('position','absolute');instance.dispose();assert.equal(parent.style.getPropertyValue('position'),'absolute');
});

test('Overlapping lifecycle handles release host positioning only after the last owned layer',()=>{
  const {svg,parent}=fixture();
  parent.style.setProperty('position','static','important');
  const a=mountSvgWordmark(svg),b=mountSvgWordmark(svg);
  a.dispose();assert.equal(parent.style.getPropertyValue('position'),'relative');
  b.dispose();assert.equal(parent.style.getPropertyValue('position'),'static');assert.equal(parent.style.getPropertyPriority('position'),'important');
});

test('Fractional native sizes remain exact rather than using integer-rounded offsetWidth as scale',()=>{
  const {svg,parent}=fixture();
  parent.box.width=100.6;parent.box.height=30.4;parent.offsetWidth=101;parent.offsetHeight=30;
  svg.box.width=70.3;svg.box.height=20.2;
  const instance=mountSvgWordmark(svg),layer=parent.children.at(-1);
  assert.equal(layer.style.width,'70.3px');assert.equal(layer.style.height,'20.2px');assert.equal(layer.style.left,'5px');
  instance.dispose();
});

test('A scaled parent maps the overlay into local coordinates and non-axis-aligned geometry falls back',()=>{
  const {svg,parent}=fixture();
  parent.computed.transform='matrix(2, 0, 0, 2, 0, 0)';
  const instance=mountSvgWordmark(svg),layer=parent.children.at(-1);
  assert.equal(layer.style.width,'35px');assert.equal(layer.style.left,'2.5px');
  parent.computed.transform='matrix(1, .1, 0, 1, 0, 0)';instance.refresh();assert.equal(layer.style.display,'none');
  instance.dispose();
});

test('Browsers without CSS masks retain only the native logo instead of painting a gradient rectangle',()=>{
  const {svg,parent,doc,observers}=fixture();doc.defaultView.CSS={supports:()=>false};
  const instance=mountSvgWordmark(svg);instance.refresh({theme:'dark',paused:false});instance.dispose();
  assert.equal(parent.children.length,2);assert.equal(parent.style.getPropertyValue('position'),'');assert.equal(observers.length,0);
});
