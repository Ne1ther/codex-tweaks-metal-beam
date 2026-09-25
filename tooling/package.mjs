import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const manifest = JSON.parse(await fs.readFile(path.join(root, 'package.json'), 'utf8'));
if (manifest.name !== 'ct-metal-beam' || !/^\d+\.\d+\.\d+(?:-[\w.-]+)?$/.test(manifest.version)) {
  throw new Error('Unexpected package name or version');
}
const files = [];
async function collect(relative) {
  const absolute = path.join(root, relative);
  const stat = await fs.lstat(absolute);
  if (stat.isSymbolicLink()) throw new Error(`Symlink is not allowed: ${relative}`);
  if (stat.isDirectory()) {
    for (const name of (await fs.readdir(absolute)).sort()) {
      if (['node_modules', '.DS_Store', '.git', 'dist'].includes(name)) continue;
      await collect(path.join(relative, name));
    }
  } else if (stat.isFile()) {
    files.push(relative);
  } else {
    throw new Error(`Special file is not allowed: ${relative}`);
  }
}
// Include the editable source and licenses, never local dependencies or Git data.
for (const name of [
  'package.json', 'README.md', 'README.en.md', 'LICENSE', 'NOTICE',
  'THIRD_PARTY_NOTICES.md', 'CHANGELOG.md', 'VALIDATION.md',
  'src', 'vendor-src', 'licenses', 'preview', 'tooling', 'tests', 'docs',
]) await collect(name);

const output = path.join(root, 'dist');
await fs.mkdir(output, {recursive: true});
const name = `${manifest.name}-${manifest.version}.zip`;
const archive = path.join(output, name);
await fs.rm(archive, {force: true});
// -X omits host-specific extra fields. All input paths have been checked above.
execFileSync('zip', ['-X', '-q', archive, ...files], {cwd: root, stdio: 'inherit'});
const digest = createHash('sha256').update(await fs.readFile(archive)).digest('hex');
await fs.writeFile(path.join(output, 'SHA256SUMS'), `${digest}  ${name}\n`);
console.log(`Created ${name} (${files.length} regular files; package.json at ZIP root)`);
