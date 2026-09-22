import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const normalize = p => p.split(path.sep).join('/');
const excluded = new Set(['FILE-INVENTORY.json','PACKAGE-MANIFEST.json']);

function walk(dir){
  const out=[];
  for(const ent of fs.readdirSync(dir,{withFileTypes:true})){
    if(ent.name==='.git') continue;
    const p=path.join(dir,ent.name);
    if(ent.isDirectory()) out.push(...walk(p)); else out.push(p);
  }
  return out;
}
function sha256(buf){return crypto.createHash('sha256').update(buf).digest('hex')}

const files=walk(root).map(p=>({
  path:normalize(path.relative(root,p)),
  size:fs.statSync(p).size,
  sha256:sha256(fs.readFileSync(p))
})).filter(x=>!excluded.has(x.path)).sort((a,b)=>a.path.localeCompare(b.path));

const inventory={
  generated:'2026-09-22',
  note:'Generated from package contents. Manifest files themselves are excluded to avoid recursive hashes.',
  files
};
fs.writeFileSync(path.join(root,'FILE-INVENTORY.json'),JSON.stringify(inventory,null,2)+'\n');

const version=JSON.parse(fs.readFileSync(path.join(root,'VERSION.json'),'utf8'));
const keyPaths=[
  'index.html',
  'sPg_Material_Radar_Signature_Crafting_Quality.html',
  'release/sPg_Material_Radar_Signature_Crafting_Quality.html',
  'VERSION.json',
  'STATUS.md',
  'AGENTS.md',
  'test-artifacts/runtime-fallback-summary.json',
  'test-artifacts/source-verification-summary.json'
];
const keyed={};
for(const p of keyPaths){
  const abs=path.join(root,p);
  if(fs.existsSync(abs)) keyed[p]={size:fs.statSync(abs).size,sha256:sha256(fs.readFileSync(abs))};
}
const manifest={
  project:version.project,
  release_package_id:version.release_package_id,
  generated:'2026-09-22',
  canonical_entrypoint:version.canonical_entrypoint,
  canonical_sha256:version.canonical_sha256,
  artifacts:keyed
};
fs.writeFileSync(path.join(root,'PACKAGE-MANIFEST.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(`Wrote FILE-INVENTORY.json (${files.length} files) and PACKAGE-MANIFEST.json`);
