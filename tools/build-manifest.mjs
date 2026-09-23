import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const excluded = new Set([
  'FILE-INVENTORY.json',
  'PACKAGE-MANIFEST.json',
  'CHECKSUMS.sha256',
  'test-artifacts/static-release-gate-summary.json',
  'test-artifacts/package-validation-summary.json',
  'test-artifacts/static-release-gate.log'
]);
const skipDirs = new Set(['.git', 'node_modules', '__pycache__']);
const sha = b => crypto.createHash('sha256').update(b).digest('hex');

function walk(dir, rel='') {
  const out=[];
  for (const ent of fs.readdirSync(dir, {withFileTypes:true})) {
    if (skipDirs.has(ent.name)) continue;
    const r = rel ? `${rel}/${ent.name}` : ent.name;
    const a = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(a, r));
    else if (!excluded.has(r)) out.push(r.replaceAll('\\','/'));
  }
  return out;
}

const files = walk(root).sort();
const inventory = {
  generated_at: new Date().toISOString(),
  release_standard: 'V4.2',
  excluded_from_self_referential_inventory: [...excluded].sort(),
  files: files.map(p => {
    const b = fs.readFileSync(path.join(root,p));
    return {path:p, size:b.length, sha256:sha(b)};
  })
};
fs.writeFileSync(path.join(root,'FILE-INVENTORY.json'), JSON.stringify(inventory,null,2)+'\n');

const critical = [
  'index.html',
  'sPg_Material_Radar_Signature_Crafting_Quality.html',
  'release/sPg_Material_Radar_Signature_Crafting_Quality.html',
  'docs/RELEASE_STANDARD.md',
  'docs/RELEASE_CONTRACT.md',
  'VERSION.json',
  'STATUS.md',
  'test-artifacts/source-verification-summary.json',
  'test-artifacts/runtime-fallback-summary.json',
  'assets/ui-desktop.png',
  'assets/ui-mobile.png',
  'assets/data-flow.svg',
  'assets/social-preview.png'
];
const artifacts={};
for (const p of critical) {
  const abs=path.join(root,p);
  if (!fs.existsSync(abs)) continue;
  const b=fs.readFileSync(abs);
  artifacts[p]={size:b.length,sha256:sha(b)};
}
const manifest={
  project:'sPg Material Radar Signature & Crafting Quality',
  release_package_id:'2026.09.23-r3-v4.2-standard',
  release_standard:'V4.2',
  generated_at:new Date().toISOString(),
  canonical_artifact:'index.html',
  canonical_sha256:'28be33eae5f2b53f375e52003a7af282ff8b97243fdb14ee0b28b531be9402f4',
  source_repository:'DuczaPeter/sPg-Material-Radar-Signature-Crafting-Quality',
  source_commit:'a364bfba7127f9e9e68d84d38ef0eba81a8b1063',
  artifacts
};
fs.writeFileSync(path.join(root,'PACKAGE-MANIFEST.json'), JSON.stringify(manifest,null,2)+'\n');
console.log(`manifested ${files.length} files, ${Object.keys(artifacts).length} critical artifacts`);
