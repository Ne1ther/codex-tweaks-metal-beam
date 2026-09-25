import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {build} from 'esbuild';
const dir=path.dirname(path.dirname(fileURLToPath(import.meta.url)));
// Parent workspaces may have their own React. Resolve all bundled dependencies
// from the locked tooling directory so hooks and React DOM share one copy.
const alias=Object.fromEntries(['react','react-dom','scheduler','@paper-design/shaders'].map(name=>[name,path.join(dir,'tooling/node_modules',name)]));
const material=await build({absWorkingDir:dir,entryPoints:[`${dir}/vendor-src/runtime.jsx`],outfile:`${dir}/src/vendor/material-runtime.js`,
  bundle:true,format:'esm',platform:'browser',target:'chrome120',minify:true,jsx:'automatic',
  alias,metafile:true,define:{'process.env.NODE_ENV':'"production"'},legalComments:'eof'});
for(const input of Object.keys(material.metafile.inputs)){
  if(!path.resolve(dir,input).startsWith(`${dir}${path.sep}`))throw new Error(`Dependency escaped the package: ${input}`);
}
const result=await build({entryPoints:[`${dir}/preview/main.js`],bundle:true,format:'iife',platform:'browser',target:'chrome120',minify:true,write:false,define:{'process.env.NODE_ENV':'"production"'}});
const script=result.outputFiles[0].text.replace(/<\/script/gi,'<\\/script');
const template=await fs.readFile(`${dir}/preview/template.html`,'utf8');
await fs.writeFile(`${dir}/preview/standalone.html`,template.replace('<!-- SCRIPT -->',()=>`<script>${script}</script>`));
const manifest=JSON.parse(await fs.readFile(`${dir}/package.json`,'utf8'));
console.log(`Built ${manifest.name} ${manifest.version} from MetalFx / BorderBeam source.`);
