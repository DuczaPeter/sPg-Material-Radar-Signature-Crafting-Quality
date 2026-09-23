import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
let pass=0, fail=0;
const details=[];
const ok=(name,cond,detail='')=>{ details.push({name,pass:!!cond,detail}); if(cond){pass++; console.log(`PASS ${name}${detail?` — ${detail}`:''}`)} else {fail++; console.error(`FAIL ${name}${detail?` — ${detail}`:''}`)} };
const abs=p=>path.join(root,p);
const exists=p=>fs.existsSync(abs(p));
const read=p=>fs.readFileSync(abs(p));
const text=p=>read(p).toString('utf8');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');

const required=[
  'README.md','README.en.md','LICENSE','NOTICE.md','THIRD_PARTY_NOTICES.md','CHANGELOG.md','CONTRIBUTING.md','SECURITY.md','PRIVACY.md','AGENTS.md','STATUS.md','VERSION.json',
  'index.html','sPg_Material_Radar_Signature_Crafting_Quality.html','release/sPg_Material_Radar_Signature_Crafting_Quality.html',
  'docs/RELEASE_STANDARD.md','docs/RELEASE_CONTRACT.md','docs/RELEASE_CHECKLIST.md','docs/FINAL_REPORT.md','docs/ARCHITECTURE.md','docs/TESTING.md','docs/RELEASE.md','docs/VISUALS.md',
  'assets/ui-desktop.png','assets/ui-mobile.png','assets/data-flow.svg','assets/social-preview.svg','assets/social-preview.png',
  'test-artifacts/source-verification-summary.json','test-artifacts/runtime-fallback-summary.json','test-artifacts/visual-validation-summary.json',
  'tools/build-manifest.mjs','tools/check-release.mjs','tools/runtime-smoke.py','FILE-INVENTORY.json','PACKAGE-MANIFEST.json','CHECKSUMS.sha256',
  '.github/workflows/release-gate.yml','.github/ISSUE_TEMPLATE/bug_report.md','.github/ISSUE_TEMPLATE/feature_request.md','.github/pull_request_template.md'
];
for(const p of required) ok(`required:${p}`,exists(p));

let version, manifest, inventory, runtime, source;
for (const [label,p] of [['VERSION','VERSION.json'],['MANIFEST','PACKAGE-MANIFEST.json'],['INVENTORY','FILE-INVENTORY.json'],['RUNTIME','test-artifacts/runtime-fallback-summary.json'],['SOURCE','test-artifacts/source-verification-summary.json']]) {
  try { const obj=JSON.parse(text(p)); if(label==='VERSION')version=obj; if(label==='MANIFEST')manifest=obj; if(label==='INVENTORY')inventory=obj; if(label==='RUNTIME')runtime=obj; if(label==='SOURCE')source=obj; ok(`${label} parse`,true); }
  catch(e){ok(`${label} parse`,false,e.message)}
}

const app=read('index.html');
const standalone=read('sPg_Material_Radar_Signature_Crafting_Quality.html');
const release=read('release/sPg_Material_Radar_Signature_Crafting_Quality.html');
ok('canonical/standalone byte parity',app.equals(standalone));
ok('canonical/release byte parity',app.equals(release));
const appSha=sha(app);
if(version){
  ok('canonical SHA-256 matches VERSION',appSha===version.canonical_sha256,appSha);
  ok('release standard version consistency',version.release_standard_version==='V4.1',version.release_standard_version||'missing');
  ok('release package id consistency',version.release_package_id==='2026.09.23-r2-v4.1-standard',version.release_package_id||'missing');
  ok('source commit consistency',version.source_commit==='a364bfba7127f9e9e68d84d38ef0eba81a8b1063',version.source_commit||'missing');
}

const standard=text('docs/RELEASE_STANDARD.md');
ok('release standard V4.1 marker',standard.includes('Standard version: V4.1'));
ok('release contract predates gate definition structurally',text('docs/RELEASE_CONTRACT.md').includes('## Required gates'));

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
  'qualityScale','ACTIVE_QUALITY_LOCATION_REGISTRY','SCMDB_LOCATION_LABEL_OVERRIDES','Nem hivatalos Star Citizen rajongói segédoldal'
]) ok(`app marker:${marker.slice(0,46)}`,html.includes(marker));

// Core HU/EN content parity: both primary language pages must carry the same major claims/limitations.
const hu=text('README.md');
const en=text('README.en.md');
const huTopics=['Minden hely / Felszín / Űr','Target Mining','KrovaxCode / SCMDB_DATA','READY WITH LIMITATIONS','4 órás','All Rights Reserved'];
const enTopics=['All locations / Surface / Space','Target Mining','KrovaxCode / SCMDB_DATA','READY WITH LIMITATIONS','four-hour','All Rights Reserved'];
for(const x of huTopics) ok(`HU topic:${x}`,hu.includes(x));
for(const x of enTopics) ok(`EN topic:${x}`,en.includes(x));

// Credential/secret cleanliness. Excludes binary files and matches only actual secret-shaped values.
const textExt=new Set(['.md','.txt','.json','.html','.mjs','.js','.py','.yml','.yaml','.svg','.gitignore']);
const secretPatterns=[
  ['private-key',/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
  ['github-token',/\bgh[opsu]_[A-Za-z0-9]{30,}\b/],
  ['aws-access-key',/\bAKIA[0-9A-Z]{16}\b/],
  ['bearer-token',/\bBearer\s+[A-Za-z0-9._~+\/-]{24,}\b/i],
  ['assigned-api-secret',/(?:api[_-]?key|secret|token|password)\s*[:=]\s*["'][A-Za-z0-9._~+\/-]{20,}["']/i],
  ['windows-user-path',/[A-Za-z]:\\Users\\[^\\\s]+\\/],
  ['unix-home-path',/\/home\/[A-Za-z0-9._-]+\//]
];
const ignorePaths=new Set(['tools/check-release.mjs']);
let secretHits=[];
function walk(dir, rel=''){
  for(const ent of fs.readdirSync(dir,{withFileTypes:true})){
    if(['.git','node_modules','__pycache__'].includes(ent.name)) continue;
    const r=(rel?`${rel}/`:``)+ent.name;
    const a=path.join(dir,ent.name);
    if(ent.isDirectory()) walk(a,r);
    else if(!ignorePaths.has(r) && textExt.has(path.extname(ent.name).toLowerCase())){
      const s=fs.readFileSync(a,'utf8');
      for(const [name,re] of secretPatterns) if(re.test(s)) secretHits.push(`${r}:${name}`);
    }
  }
}
walk(root);
ok('credential / secret cleanliness',secretHits.length===0,secretHits.slice(0,10).join(', '));

// Visual checks: dimensions, non-empty files, original visual documentation present.
for(const p of ['assets/ui-desktop.png','assets/ui-mobile.png','assets/data-flow.svg','assets/social-preview.svg','assets/social-preview.png']) ok(`visual non-empty:${p}`,exists(p)&&fs.statSync(abs(p)).size>500);
ok('desktop screenshot evidence referenced',text('docs/VISUALS.md').includes('1440×1000'));
ok('mobile screenshot evidence referenced',text('docs/VISUALS.md').includes('390×844'));

if(runtime){
  ok('runtime evidence level',runtime.evidence_level==='RUNTIME VERIFIED',runtime.evidence_level||'missing');
  ok('runtime fallback PASS',runtime.status==='PASS',runtime.status||'missing');
  const tests=runtime.tests||[];
  ok('runtime desktop+mobile cases',tests.length===2,`${tests.length}`);
  for(const t of tests) ok(`runtime viewport ${t.viewport?.width}x${t.viewport?.height}`,t.pass===true && t.horizontal_overflow_px===0 && t.page_error_count===0);
}
if(source){
  ok('source verification PASS',source.status==='PASS',source.status||'missing');
  ok('SCMDB live snapshot recorded',source.krovax_latest?.version==='4.10.1-live.12660092',source.krovax_latest?.version||'missing');
}

if(manifest?.artifacts){
  for(const [p,meta] of Object.entries(manifest.artifacts)){
    const a=abs(p); const e=fs.existsSync(a); ok(`manifest exists:${p}`,e); if(e) ok(`manifest hash:${p}`,sha(fs.readFileSync(a))===meta.sha256);
  }
}
if(inventory?.files){
  let stale=[];
  for(const f of inventory.files){const a=abs(f.path);if(!fs.existsSync(a)||sha(fs.readFileSync(a))!==f.sha256||fs.statSync(a).size!==f.size)stale.push(f.path)}
  ok('file inventory hashes',stale.length===0,stale.slice(0,10).join(', '));
}

// Final checksum validation. The checksum file intentionally does not hash itself.
let checksumBad=[];
for(const line of text('CHECKSUMS.sha256').split(/\r?\n/).filter(Boolean)){
  const m=line.match(/^([a-f0-9]{64})\s{2}(.+)$/);
  if(!m){checksumBad.push(`format:${line}`);continue}
  const [,expected,p]=m; const a=abs(p);
  if(!fs.existsSync(a)||sha(fs.readFileSync(a))!==expected)checksumBad.push(p);
}
ok('CHECKSUMS.sha256 hashes',checksumBad.length===0,checksumBad.slice(0,10).join(', '));

ok('own LICENSE present/resolved',text('LICENSE').includes('All rights reserved'));
ok('third-party unknown licences disclosed',text('THIRD_PARTY_NOTICES.md').includes('LICENSE STATUS: UNKNOWN'));
ok('unofficial fan-site notice',text('NOTICE.md').toLowerCase().includes('unofficial star citizen fan site/tool'));

console.log(`\nSTATIC RELEASE GATE: ${fail===0?'PASS':'FAIL'} — ${pass} passed, ${fail} failed`);
if(process.env.WRITE_GATE_SUMMARY==='1'){
  fs.writeFileSync(abs('test-artifacts/static-release-gate-summary.json'),JSON.stringify({
    run_date:new Date().toISOString(),
    command:'node tools/check-release.mjs',
    evidence_level:'STATIC VERIFIED',
    status:fail===0?'PASS':'FAIL',
    passed:pass,failed:fail,
    canonical_sha256:appSha,
    release_standard:'V4.1',
    details
  },null,2)+'\n');
}
process.exit(fail===0?0:1);
