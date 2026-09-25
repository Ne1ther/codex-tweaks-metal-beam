import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
import {normalize,DEFAULTS,sendLabel,stopLabel} from '../src/config.js';
const base=path.dirname(path.dirname(fileURLToPath(import.meta.url)));
test('Standalone preview preserves embedded shader/template literals',()=>{
  const html=fs.readFileSync(path.join(base,'preview/standalone.html'),'utf8');
  const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length,1);
  assert.doesNotThrow(()=>new vm.Script(scripts[0][1]));
});
test('Untrusted / old local settings cannot create an invalid material configuration',()=>{
  for(const value of [null,undefined,[],false,'silver'])assert.deepEqual(normalize(value),DEFAULTS);
  assert.equal(normalize({intensity:Infinity}).intensity,.9);
  assert.equal(normalize({intensity:99,palette:'unknown',motion:'false'}).intensity,1);
  assert.equal(normalize({intensity:99,palette:'unknown',motion:'false'}).palette,'chromatic');
  assert.equal(normalize({broad:false,beam:false,motion:false}).motion,false);
});
test('Send / stop matching accepts control metadata without matching ordinary labels',()=>{
  for(const label of ['Send','Send message','发送','提交'])assert.ok(sendLabel(label));
  for(const label of ['Stop generating','Stop','停止生成','停止运行'])assert.ok(stopLabel(label));
  for(const label of ['Send feedback','Stopwatch','重新发送邮件','取消','Response stopped'])assert.equal(sendLabel(label)||stopLabel(label),false);
});
test('Distribution is renderer-only API v3, local bundled dependencies, without symlinks',()=>{
  const manifest=JSON.parse(fs.readFileSync(path.join(base,'package.json')));
  assert.equal(manifest.name,'ct-metal-beam');assert.equal(manifest.version,'0.3.6');
  assert.equal(manifest.codexTweaks.apiVersion,3);assert.deepEqual(manifest.dependencies,{});
  assert.equal(manifest.codexTweaks.entrypoints.node,undefined);assert.equal(manifest.codexTweaks.permissions,undefined);assert.equal(manifest.codexTweaks.ui,undefined);
  function walk(dir){for(const item of fs.readdirSync(dir)){if(item==='node_modules')continue;const file=path.join(dir,item);const stat=fs.lstatSync(file);assert.equal(stat.isSymbolicLink(),false,file);if(stat.isDirectory())walk(file);else assert.ok(stat.isFile(),file);}}
  walk(base);
  const runtime=fs.readFileSync(path.join(base,'src/vendor/material-runtime.js'),'utf8');
  assert.ok(runtime.length>100000);assert.ok(!/\bimport\s.+from\s*["'](?:https?:|react)/.test(runtime));
});
