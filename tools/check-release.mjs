import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root=path.resolve(path.dirname(new URL(import.meta.url).pathname),'..');
let pass=0, fail=0;
const ok=(name,cond,detail='')=>{ if(cond){pass++; console.log(`PASS ${name}${detail?` — ${detail}`:''}`)} else {fail++; console.error(`FAIL ${name}${detail?` — ${detail}`:''}`)} };
const read=p=>fs.readFileSync(path.join(root,p));
const text=p=>read(p).toString('utf8');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');

const required=[
  'README.md','README.hu.md','README.en.md','LICENSE','NOTICE.md','THIRD_PARTY_NOTICES.md','CHANGELOG.md','CONTRIBUTING.md','SECURITY.md','PRIVACY.md','AGENTS.md','STATUS.md','VERSION.json','index.html','sPg_Material_Radar_Signature_Crafting_Quality.html','release/sPg_Material_Radar_Signature_Crafting_Quality.html','docs/ARCHITECTURE.md','docs/TESTING.md','docs/RELEASE.md','tools/build-manifest.mjs','tools/check-release.mjs','FILE-INVENTORY.json','PACKAGE-MANIFEST.json','.github/workflows/release-gate.yml'
];
for(const p of required) ok(`required:${p}`,fs.existsSync(path.join(root,p)));

let version, manifest, inventory;
try{version=JSON.parse(text('VERSION.json'));ok('VERSION.json parse',true)}catch(e){ok('VERSION.json parse',false,e.message)}
try{manifest=JSON.parse(text('PACKAGE-MANIFEST.json'));ok('PACKAGE-MANIFEST parse',true)}catch(e){ok('PACKAGE-MANIFEST parse',false,e.message)}
try{inventory=JSON.parse(text('FILE-INVENTORY.json'));ok('FILE-INVENTORY parse',true)}catch(e){ok('FILE-INVENTORY parse',false,e.message)}

const app=read('index.html');
const standalone=read('sPg_Material_Radar_Signature_Crafting_Quality.html');
const release=read('release/sPg_Material_Radar_Signature_Crafting_Quality.html');
ok('canonical/standalone byte parity',app.equals(standalone));
ok('canonical/release byte parity',app.equals(release));
if(version) ok('canonical SHA-256',sha(app)===version.canonical_sha256,sha(app));

const html=app.toString('utf8');
const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(m=>m[1]);
ok('embedded script present',scripts.length>0,`${scripts.length} script block(s)`);
for(let i=0;i<scripts.length;i++){
  try{new Function(scripts[i]);ok(`script ${i+1} parse`,true)}catch(e){ok(`script ${i+1} parse`,false,e.message)}
}

const ids=[...html.matchAll(/\bid=["']([^"']+)["']/g)].map(m=>m[1]);
const dup=[...new Set(ids.filter((id,i)=>ids.indexOf(id)!==i))];
ok('duplicate DOM ids',dup.length===0,dup.join(', '));
for(const id of ['placeAll','placeSurface','placeSpace','targetMiningToggle','scmdbLiveStatus']) ok(`required DOM id:${id}`,ids.includes(id));
ok('removed craftOnly control absent',!ids.includes('craftOnly'));

for(const marker of [
  'https://raw.githubusercontent.com/KrovaxCode/SCMDB_DATA/main/data/latest.json',
  'qualityScale',
  'ACTIVE_QUALITY_LOCATION_REGISTRY',
  'SCMDB_LOCATION_LABEL_OVERRIDES',
  'Nem hivatalos Star Citizen rajongói segédoldal'
]) ok(`marker:${marker.slice(0,42)}`,html.includes(marker));

if(manifest?.artifacts){
  for(const [p,meta] of Object.entries(manifest.artifacts)){
    const abs=path.join(root,p);
    const exists=fs.existsSync(abs); ok(`manifest exists:${p}`,exists); if(exists) ok(`manifest hash:${p}`,sha(fs.readFileSync(abs))===meta.sha256);
  }
}
if(inventory?.files){
  let stale=[];
  for(const f of inventory.files){ const abs=path.join(root,f.path); if(!fs.existsSync(abs)||sha(fs.readFileSync(abs))!==f.sha256||fs.statSync(abs).size!==f.size) stale.push(f.path); }
  ok('file inventory hashes',stale.length===0,stale.slice(0,10).join(', '));
}

console.log(`\nSTATIC RELEASE GATE: ${fail===0?'PASS':'FAIL'} — ${pass} passed, ${fail} failed`);
process.exit(fail===0?0:1);
