import {test} from 'node:test';
import assert from 'node:assert/strict';
import {getEventListeners} from 'node:events';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';
import {build} from '../tooling/node_modules/esbuild/lib/main.js';

// Execute the production baker and geometry code, replacing only its WebGL
// renderer and browser APIs. No generated files or shared globals are needed.
// The Canvas2D double follows premultiplied source-over/lighter pixel math;
// shader appearance, browser PNG codecs and real GPU disposal need browser QA.
const bundle=await build({
  entryPoints:[fileURLToPath(new URL('../vendor-src/metal-fx/engine/renderer/ring-atlas.ts',import.meta.url))],
  bundle:true,write:false,platform:'browser',format:'cjs',logLevel:'silent',
  plugins:[{
    name:'isolated-direct-renderer',
    setup(builder){
      builder.onResolve({filter:/^\.\/direct$/},()=>({path:'direct',namespace:'test-renderer'}));
      builder.onLoad({filter:/.*/,namespace:'test-renderer'},()=>({
        contents:'export const createDirectBaker=(...args)=>globalThis.createTestBaker(...args);',
      }));
    },
  }],
});
const program=new vm.Script(bundle.outputFiles[0].text,{filename:'ring-atlas.test.bundle.cjs'});
const MAX_BYTES=32*1024*1024;
const preset=Object.freeze({speed:1,colorTint:'#aabbcc80'});
const instance=(width=40,height=40,extra={})=>Object.freeze({
  cssWidth:width,cssHeight:height,mask:null,deform:null,
  canvas:Object.freeze({name:'visible canvas: never a bake target'}),...extra,
});
const transparent=()=>[0,0,0,0];
const close=(actual,expected,message)=>assert.ok(Math.abs(actual-expected)<1e-10,`${message}: ${actual} != ${expected}`);
const closePixel=(actual,expected)=>actual.forEach((value,i)=>close(value,expected[i],`RGBA channel ${i}`));

function composite(source,destination,alpha,operation){
  const weighted=source.map(value=>value*alpha);
  if(operation==='lighter')return weighted.map((value,i)=>Math.min(1,value+destination[i]));
  assert.equal(operation,'source-over','unexpected Canvas2D blend operation');
  return weighted.map((value,i)=>value+destination[i]*(1-weighted[3]));
}

function createHarness(options={}){
  const state={
    now:0,canvases:[],cells:[],phases:[],requests:[],disposals:0,
    pending:new Map(),yields:[],cancelled:[],encodes:[],created:[],revoked:[],
  };
  let nextHandle=1,contextCount=0,successfulContexts=0;
  const schedule=(kind,callback,settings)=>{
    const id=nextHandle++;
    state.pending.set(id,{kind,callback});
    state.yields.push({kind,settings,frames:state.cells.length,renders:state.phases.length,time:state.now});
    return id;
  };
  const cancel=(kind,id)=>{
    assert.equal(state.pending.get(id)?.kind,kind,'cancel the matching browser callback');
    state.pending.delete(id);state.cancelled.push({kind,id});
  };

  class RasterCanvas{
    constructor(width,height,kind){
      this.width=width;this.height=height;this.kind=kind;this.pixel=transparent();
      this.initialSize=[width,height];state.canvases.push(this);
    }
    getContext(type,settings){
      assert.equal(type,'2d');assert.equal(settings.alpha,true);
      contextCount++;
      if(contextCount>(options.failContextAfter??Infinity))return null;
      if(options.offscreenContextUnavailable&&this.kind==='offscreen')return null;
      const canvas=this,atlas=successfulContexts++===0,cells=new Map();
      return {
        globalAlpha:1,globalCompositeOperation:'source-over',
        clearRect(x,y,width,height){
          assert.deepEqual([x,y,width,height],[0,0,canvas.width,canvas.height]);
          canvas.pixel=transparent();cells.clear();
        },
        drawImage(source,x,y){
          assert.ok(Array.isArray(source.pixel),'copy an isolated renderer or scratch canvas');
          const key=`${x},${y}`,destination=atlas?(cells.get(key)??transparent()):canvas.pixel;
          const pixel=composite(source.pixel,destination,this.globalAlpha,this.globalCompositeOperation);
          if(atlas){
            cells.set(key,pixel);
            state.cells.push({x,y,width:source.width,height:source.height,pixel});
          }else canvas.pixel=pixel;
        },
      };
    }
  }
  function encode(canvas,kind,type){
    assert.equal(type,'image/png');
    const request={canvas,kind,width:canvas.width,height:canvas.height};
    state.encodes.push(request);
    if(options.encodeMode==='throw')throw Error('Encoder threw');
    if(options.encodeMode==='reject')return Promise.reject(Error('Encoder rejected'));
    if(options.encodeMode==='deferred')return new Promise((resolve,reject)=>Object.assign(request,{resolve,reject}));
    return Promise.resolve(options.encodeMode==='null'?null:new Blob(['test PNG'],{type}));
  }
  class TestOffscreenCanvas extends RasterCanvas{
    constructor(width,height){super(width,height,'offscreen');}
    convertToBlob({type}){return encode(this,'convertToBlob',type);}
  }
  class TestHTMLCanvas extends RasterCanvas{
    constructor(){super(300,150,'html');}
    toBlob(callback,type){encode(this,'toBlob',type).then(callback);}
  }
  const dpr=options.dpr??2;
  const window={devicePixelRatio:dpr};
  if(options.scheduler!=='raf'){
    window.requestIdleCallback=(callback,settings)=>schedule('idle',callback,settings);
    window.cancelIdleCallback=id=>cancel('idle',id);
  }
  const sandbox={
    module:{exports:{}},window,DOMException,
    performance:{now:()=>state.now},
    requestAnimationFrame:callback=>schedule('raf',callback),
    cancelAnimationFrame:id=>cancel('raf',id),
    OffscreenCanvas:options.offscreen===false?undefined:TestOffscreenCanvas,
    document:{createElement(tag){assert.equal(tag,'canvas');return new TestHTMLCanvas();}},
    URL:{
      createObjectURL(blob){
        if(options.urlFailure)throw Error('Blob URL failed');
        const url=`blob:ring-atlas-test/${state.created.length}`;state.created.push({url,blob});return url;
      },
      revokeObjectURL(url){state.revoked.push(url);},
    },
    createTestBaker(inst,bakedPreset){
      state.requests.push({inst,preset:bakedPreset});
      const nativeDpr=Math.min(dpr||1,2);
      const canvas={
        width:options.frameWidth??Math.max(1,Math.round(inst.cssWidth*nativeDpr)),
        height:options.frameHeight??Math.max(1,Math.round(inst.cssHeight*nativeDpr)),
        pixel:transparent(),
      };
      state.directCanvas=canvas;
      return {
        canvas,dpr:nativeDpr,maxTextureSize:options.maxTextureSize??4096,
        render(phase){
          state.phases.push(phase);state.now+=options.renderMs??.1;
          if(state.phases.length===options.failRenderAt)throw Error('Renderer failed');
          canvas.pixel=(options.sample??(()=>[.25,0,0,.5]))(phase);
        },
        dispose(){state.disposals++;canvas.width=canvas.height=1;},
      };
    },
  };
  program.runInNewContext(sandbox);

  // Drive only explicit browser callbacks, with a bounded microtask drain.
  // No real frame timers or wall-clock sleeps make the tests timing-dependent.
  async function until(condition){
    for(let step=0;step<2000;step++){
      await Promise.resolve();
      if(condition())return;
      const next=state.pending.entries().next().value;
      if(next){
        const [id,{kind,callback}]=next;state.pending.delete(id);
        callback(kind==='idle'?{didTimeout:false,timeRemaining:()=>50}:state.now);
      }
    }
    assert.fail('bake did not reach the expected state within 2000 scheduler steps');
  }
  async function finish(promise){
    let outcome;
    promise.then(value=>{outcome={value};},error=>{outcome={error};});
    await until(()=>outcome!==undefined);
    if('error' in outcome)throw outcome.error;
    return outcome.value;
  }
  return {api:sandbox.module.exports,state,finish,until,URL:sandbox.URL};
}

function assertReleased(harness,signal,{direct=true}={}){
  const {state}=harness;
  assert.equal(state.disposals,direct?1:0,'dispose the isolated renderer exactly once');
  if(direct)assert.deepEqual([state.directCanvas.width,state.directCanvas.height],[1,1]);
  for(const canvas of state.canvases)assert.deepEqual([canvas.width,canvas.height],[1,1],'release raster backing storage');
  assert.equal(state.pending.size,0,'no browser callback remains scheduled');
  assert.equal(getEventListeners(signal,'abort').length,0,'remove abort listeners');
}

test('native geometry keeps 60 fps and adapts loop length within 32 MiB',()=>{
  const {api,state}=createHarness();
  assert.deepEqual({...api.ringAtlasGeometry(instance())},{
    width:80,height:80,dpr:2,columns:8,rows:40,count:320,frameMs:1000/60,bytes:8_192_000,
  });
  const sidebar=api.ringAtlasGeometry(instance(210,38));
  assert.deepEqual({...sidebar},{
    width:420,height:76,dpr:2,columns:8,rows:32,count:256,frameMs:1000/60,bytes:32_686_080,
  });
  assert.equal(api.estimateRingAtlasBytes(instance()),8_192_000);
  assert.equal(api.estimateRingAtlasBytes(instance(210,38)),MAX_BYTES);
  assert.ok(sidebar.bytes<=MAX_BYTES);
  assert.ok(sidebar.bytes+8*420*76*4>MAX_BYTES,'one more row would exceed the cap');
  assert.equal(state.requests.length,0,'preflight must not create a WebGL renderer');
  assert.equal(state.canvases.length,0,'preflight must not allocate raster canvases');
});

test('geometry rounds native pixels, caps DPR at two, and honors dimension/minimum-frame boundaries',()=>{
  const fractional=createHarness({dpr:1.5}).api.ringAtlasGeometry(instance(40.25,19.75));
  assert.deepEqual([fractional.width,fractional.height,fractional.dpr],[60,30,1.5]);
  assert.equal(createHarness({dpr:3}).api.ringAtlasGeometry(instance()).dpr,2);
  assert.equal(createHarness({dpr:0}).api.ringAtlasGeometry(instance()).dpr,1);
  const {api}=createHarness({dpr:1});
  assert.equal(api.ringAtlasGeometry(instance(16,100)).rows,40);
  const tall=api.ringAtlasGeometry(instance(16,256));
  assert.deepEqual([tall.count,tall.rows,tall.height],[128,16,256]);
  assert.equal(api.ringAtlasGeometry(instance(512,16)).width*8,4096);
  assert.equal(api.ringAtlasGeometry(instance(513,16)).columns,4);
  assert.equal(api.ringAtlasGeometry(instance(1025,16)).columns,2);
  assert.equal(api.ringAtlasGeometry(instance(2049,16)).columns,1);
  assert.equal(api.ringAtlasGeometry(instance(4096,16)).bytes,MAX_BYTES);
  assert.throws(()=>api.ringAtlasGeometry(instance(4097,16)),/dimension limit/);
  assert.throws(()=>api.ringAtlasGeometry(instance(16,257)),/dimension limit/);
  assert.equal(api.ringAtlasGeometry(instance(256,256)).bytes,MAX_BYTES);
  assert.throws(()=>api.ringAtlasGeometry(instance(257,256)),/32 MiB/);
});

for(const [cssWidth,count,rows] of [[300,180,45],[360,152,38]]){
  test(`${cssWidth}px sidebar bakes a native DPR-2 atlas with four columns`,async()=>{
    const h=createHarness(),controller=new AbortController(),inst=instance(cssWidth,38);
    const geometry=h.api.ringAtlasGeometry(inst);
    assert.deepEqual([geometry.width,geometry.height,geometry.dpr,geometry.columns,geometry.count,geometry.rows],
      [cssWidth*2,76,2,4,count,rows]);
    const result=await h.finish(h.api.bakeRingAtlas(inst,preset,controller.signal));
    assert.deepEqual({...result,src:undefined},{...geometry,src:undefined});
    assert.equal(result.count%result.columns,0);assert.ok(result.count>=128&&result.count<=320);
    assert.equal(result.frameMs,1000/60);assert.ok(result.bytes<=MAX_BYTES);
    assert.ok(result.bytes<=h.api.estimateRingAtlasBytes(inst));
    const encoded=h.state.encodes[0];
    assert.deepEqual([encoded.width,encoded.height],[result.width*4,76*rows]);
    assert.ok(encoded.width<=4096&&encoded.height<=4096);
    assert.equal(encoded.width*encoded.height*4,result.bytes);
    assert.equal(h.state.cells.length,count);
    h.state.cells.forEach((cell,i)=>assert.deepEqual(
      [cell.x,cell.y,cell.width,cell.height],[(i%4)*result.width,Math.floor(i/4)*76,result.width,76],
    ));
    assertReleased(h,controller.signal);
  });
}

test('a wide ring still rejects impossible native memory or single-frame dimensions',async()=>{
  const h=createHarness();
  for(const inst of [instance(360,50),instance(2049,8)]){
    const controller=new AbortController();
    await assert.rejects(h.api.bakeRingAtlas(inst,preset,controller.signal),/32 MiB or dimension limit/);
    assert.equal(h.state.requests.length,0);assert.equal(h.state.canvases.length,0);
    assertReleased(h,controller.signal,{direct:false});
  }
});

test('invalid or nonrigid geometry fails before allocating resources',async()=>{
  const h=createHarness();
  for(const [width,height] of [[0,40],[-1,40],[40,0],[NaN,40],[40,Infinity]]){
    assert.throws(()=>h.api.ringAtlasGeometry(instance(width,height)),/Invalid ring atlas geometry/);
  }
  for(const dpr of [-1,-Infinity])assert.throws(()=>createHarness({dpr}).api.ringAtlasGeometry(instance()),/Invalid/);
  for(const extra of [{mask:{}},{deform:{}}])assert.throws(()=>h.api.ringAtlasGeometry(instance(40,40,extra)),/rigid ring/);
  const controller=new AbortController();
  await assert.rejects(h.api.bakeRingAtlas(instance(300,300),preset,controller.signal),/32 MiB/);
  assert.equal(h.state.requests.length,0);assert.equal(h.state.canvases.length,0);
  assertReleased(h,controller.signal,{direct:false});
});

test('successful bake packs every native frame, yields bounded batches, and transfers URL ownership',async()=>{
  const h=createHarness(),controller=new AbortController(),inst=instance();
  const result=await h.finish(h.api.bakeRingAtlas(inst,preset,controller.signal));
  assert.equal(result.count,320);assert.equal(result.frameMs,1000/60);
  assert.equal(h.state.cells.length,result.count);
  h.state.cells.forEach((cell,i)=>assert.deepEqual(
    [cell.x,cell.y,cell.width,cell.height],[(i%8)*80,Math.floor(i/8)*80,80,80],
  ));
  const boundaries=[0,...h.state.yields.map(yielded=>yielded.frames),result.count];
  for(let i=1;i<boundaries.length;i++)assert.ok(boundaries[i]-boundaries[i-1]<=4,'yield at least every four delivered frames');
  const renders=[0,...h.state.yields.map(yielded=>yielded.renders),h.state.phases.length];
  for(let i=1;i<renders.length;i++)assert.ok(renders[i]-renders[i-1]<=8,'seam adds at most one render per frame');
  assert.equal(h.state.yields.length,79);
  for(const yielded of h.state.yields){assert.equal(yielded.kind,'idle');assert.equal(yielded.settings.timeout,50);}
  assert.equal(h.state.requests[0].inst,inst);
  assert.notEqual(h.state.requests[0].preset,preset,'snapshot the preset');
  assert.deepEqual({...h.state.requests[0].preset},preset);
  assert.deepEqual([h.state.encodes[0].kind,h.state.encodes[0].width,h.state.encodes[0].height],['convertToBlob',640,3200]);
  assert.equal(h.state.created.length,1);assert.equal(result.src,h.state.created[0].url);
  assert.equal(h.state.created[0].blob.type,'image/png');assert.deepEqual(h.state.revoked,[]);
  assertReleased(h,controller.signal);
  h.URL.revokeObjectURL(result.src);assert.deepEqual(h.state.revoked,[result.src],'successful caller owns revocation');
});

test('elapsed work triggers an early yield and RAF is supported without requestIdleCallback',async()=>{
  const h=createHarness({renderMs:2.1,scheduler:'raf'}),controller=new AbortController();
  const pending=h.api.bakeRingAtlas(instance(),preset,controller.signal);
  const rejected=assert.rejects(pending,{name:'AbortError'});
  assert.equal(h.state.yields[0].kind,'raf');
  assert.equal(h.state.yields[0].frames,2,'4 ms budget wins over the four-frame batch limit');
  close(h.state.yields[0].time,4.2,'yield after the frame that crosses the budget');
  controller.abort();await rejected;
  assert.equal(h.state.cancelled[0].kind,'raf');assertReleased(h,controller.signal);
});

test('device texture limits shorten the loop without downscaling, and impossible limits clean up',async()=>{
  const h=createHarness({maxTextureSize:2048}),controller=new AbortController();
  const reservation=h.api.estimateRingAtlasBytes(instance());
  const result=await h.finish(h.api.bakeRingAtlas(instance(),preset,controller.signal));
  assert.deepEqual([result.width,result.height,result.count,result.rows],[80,80,200,25]);
  assert.ok(result.bytes<=reservation);assert.equal(result.frameMs,1000/60);
  assertReleased(h,controller.signal);
  const tooSmall=createHarness({maxTextureSize:1024}),failed=new AbortController();
  await assert.rejects(tooSmall.api.bakeRingAtlas(instance(),preset,failed.signal),/dimension limit/);
  assert.equal(tooSmall.state.canvases.length,0);assertReleased(tooSmall,failed.signal);
});

test('non-power-of-two fallback fits small devices without exceeding the preflight reservation',async()=>{
  const h=createHarness({maxTextureSize:3072}),controller=new AbortController(),inst=instance(210,50);
  const preferred=h.api.ringAtlasGeometry(inst),reservation=h.api.estimateRingAtlasBytes(inst);
  assert.deepEqual([preferred.columns,preferred.count],[8,192]);
  const result=await h.finish(h.api.bakeRingAtlas(inst,preset,controller.signal));
  assert.deepEqual([result.width,result.height,result.columns,result.rows,result.count],[420,100,7,28,196]);
  assert.ok(result.bytes>preferred.bytes,'odd-column rounding can exceed the preferred grid size');
  assert.ok(result.bytes<=reservation&&reservation<=MAX_BYTES,'conservative reservation covers every legal grid');
  assert.equal(result.count%result.columns,0);assert.equal(result.frameMs,1000/60);
  assert.deepEqual([h.state.encodes[0].width,h.state.encodes[0].height],[2940,2800]);
  h.state.cells.forEach((cell,i)=>assert.deepEqual([cell.x,cell.y],[(i%7)*420,Math.floor(i/7)*100]));
  assertReleased(h,controller.signal);
});

test('the last forty frames blend premultiplied RGBA and end one phase step before restart',async()=>{
  const outgoing=[.25,0,0,.25],incoming=[0,0,.75,.75];
  const h=createHarness({sample:phase=>phase<.4?incoming:outgoing}),controller=new AbortController();
  const result=await h.finish(h.api.bakeRingAtlas(instance(210,38),preset,controller.signal));
  const start=result.count-40;
  assert.equal(result.count,256);assert.equal(h.state.phases.length,result.count+40);
  for(let i=0;i<start;i++){
    close(h.state.phases[i],.4+i*.01,'unchanged source cadence');
    closePixel(h.state.cells[i].pixel,outgoing);
  }
  for(let j=0;j<40;j++){
    close(h.state.phases[start+j*2],.4+(start+j)*.01,'outgoing seam phase');
    close(h.state.phases[start+j*2+1],j*.01,'incoming seam phase');
  }
  // At one-third/two-thirds of smoothstep the incoming weights are 7/27 and
  // 20/27. Unequal alpha catches both straight-alpha mixing and source-over
  // being accidentally used for the second weighted draw.
  for(const [offset,weight] of [[0,0],[13,7/27],[26,20/27],[39,1]]){
    closePixel(h.state.cells[start+offset].pixel,outgoing.map((value,i)=>value*(1-weight)+incoming[i]*weight));
  }
  close(h.state.phases[0]-h.state.phases.at(-1),.01,'seam endpoint to restart');
  assertReleased(h,controller.signal);
});

test('equal-alpha source frames retain their alpha throughout the seam',async()=>{
  const h=createHarness({sample:phase=>phase<.4?[0,0,.5,.5]:[.5,0,0,.5]}),controller=new AbortController();
  await h.finish(h.api.bakeRingAtlas(instance(),preset,controller.signal));
  for(const cell of h.state.cells.slice(-40))close(cell.pixel[3],.5,'transparent ring coverage must not darken');
  assertReleased(h,controller.signal);
});

for(const options of [{offscreen:false},{offscreenContextUnavailable:true}]){
  test(`HTML canvas PNG fallback works: ${JSON.stringify(options)}`,async()=>{
    const h=createHarness(options),controller=new AbortController();
    const result=await h.finish(h.api.bakeRingAtlas(instance(),preset,controller.signal));
    assert.equal(result.count,320);assert.equal(h.state.encodes[0].kind,'toBlob');
    assert.equal(h.state.created.length,1);assertReleased(h,controller.signal);
  });
}

test('already-aborted requests preserve the reason and allocate nothing',async()=>{
  const h=createHarness(),controller=new AbortController(),reason=Error('superseded before bake');controller.abort(reason);
  await assert.rejects(h.api.bakeRingAtlas(instance(),preset,controller.signal),error=>error===reason);
  assert.equal(h.state.requests.length,0);assert.equal(h.state.canvases.length,0);
  assert.equal(h.state.created.length,0);assertReleased(h,controller.signal,{direct:false});
});

test('abort while waiting for idle cancels the callback and releases all resources',async()=>{
  const h=createHarness(),controller=new AbortController(),reason=Error('geometry changed');
  const pending=h.api.bakeRingAtlas(instance(),preset,controller.signal);
  const rejected=assert.rejects(pending,error=>error===reason);
  assert.equal(h.state.pending.size,1);assert.equal(h.state.phases.length,4);
  controller.abort(reason);await rejected;
  assert.equal(h.state.cancelled[0].kind,'idle');assert.equal(h.state.encodes.length,0);
  assert.equal(h.state.created.length,0);assertReleased(h,controller.signal);
});

for(const offscreen of [true,false]){
  test(`abort during ${offscreen?'OffscreenCanvas':'HTML canvas'} encoding rejects before the codec completes`,async()=>{
    const h=createHarness({offscreen,encodeMode:'deferred'}),controller=new AbortController();
    const pending=h.api.bakeRingAtlas(instance(),preset,controller.signal);
    const rejected=assert.rejects(pending,{name:'AbortError'});
    await h.until(()=>h.state.encodes.length===1);
    assert.equal(getEventListeners(controller.signal,'abort').length,1);
    controller.abort();await rejected;
    assertReleased(h,controller.signal);assert.equal(h.state.created.length,0);
    h.state.encodes[0].resolve(new Blob(['late PNG'],{type:'image/png'}));
    await Promise.resolve();await Promise.resolve();
    assert.equal(h.state.created.length,0,'late encoding must not create a leaked URL');
    assert.equal(h.state.disposals,1,'late encoding must not dispose twice');
    assert.equal(getEventListeners(controller.signal,'abort').length,0);
  });
}

for(const [name,options,message] of [
  ['renderer failure',{failRenderAt:3},/Renderer failed/],
  ['scratch allocation failure',{failContextAfter:1},/Canvas2D unavailable/],
  ['empty PNG',{encodeMode:'null'},/PNG encoding failed/],
  ['rejected PNG promise',{encodeMode:'reject'},/Encoder rejected/],
  ['synchronous PNG failure',{encodeMode:'throw'},/Encoder threw/],
  ['Blob URL failure',{urlFailure:true},/Blob URL failed/],
]){
  test(`${name} releases partially allocated resources without leaking a URL`,async()=>{
    const h=createHarness(options),controller=new AbortController();
    await assert.rejects(h.finish(h.api.bakeRingAtlas(instance(),preset,controller.signal)),message);
    assert.equal(h.state.created.length,0);assertReleased(h,controller.signal);
  });
}
