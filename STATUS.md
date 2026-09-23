# STATUS

**Date:** 2026-09-23  
**Release package:** `2026.09.23-r3-v4.2-standard`  
**Release standard:** `V4.2`  
**Canonical app:** `index.html`  
**Repository publication:** MANUAL BY USER  
**PACKAGE STATUS:** **READY WITH LIMITATIONS**  
**PUBLISHED RELEASE STATUS:** **BLOCKED** — post-publish fresh-clone verification pending

## Canonical baseline

- GitHub `main`: `a364bfba7127f9e9e68d84d38ef0eba81a8b1063`
- app Git blob: `6be14d6c299b8e9efc1dd48d183b2b0eebd9cb30`
- app SHA-256: `28be33eae5f2b53f375e52003a7af282ff8b97243fdb14ee0b28b531be9402f4`
- packaged application copies are byte-identical to the canonical baseline.

## Latest validation

- **SOURCE VERIFIED:** current GitHub baseline, Krovax SCMDB_DATA repository and `data/latest.json`, StarCitizenWiki API repository, StarCitizenWiki `scunpacked-data`, RSI fan-site guidance and UEX Terms were rechecked for this package.
- **STATIC VERIFIED:** release gate and embedded JavaScript parse PASS.
- **RUNTIME VERIFIED:** offline/fallback Chromium smoke tests PASS at 1440×1000 and 390×844.
- **RUNTIME VERIFIED (screenshots):** package screenshots are real browser captures of the packaged artifact under the documented offline/fallback test condition; generated diagrams are labelled technical graphics, not runtime evidence.
- **INTEGRATION NOT VERIFIED:** end-to-end browser fetch against LIVE third-party services was not executed in this packaging run.

## Current observed SCMDB LIVE manifest

Observed during packaging: `4.10.1-live.12660092`, generated `2026-09-16T19:58:26Z`.

This is an observation only. The application discovers the current LIVE mining file through `latest.json`.

## Known ATTENTION / limitations

- location classification is still partly name/pattern based; unknown names can fall through to Surface;
- hard-coded Lagrange display labels do not prove that every displayed ARC/CRU/HUR/MIC L-point has identical mining data;
- topbar Surface/Space filtering does not yet constrain Target Mining result locations;
- no four-hour periodic refresh loop yet;
- no last-known-good LIVE cache yet;
- refinery bonuses are embedded, not LIVE UEX;
- component/weapon data includes pinned/embedded source-version markers while current mining LIVE may be newer;
- KrovaxCode/SCMDB_DATA and StarCitizenWiki/scunpacked-data expose no repository licence in GitHub metadata; their full datasets are therefore not bundled in this release;
- LIVE third-party browser integration and public-deployment pixel parity remain NOT VERIFIED for this packaging run.

## Published repository parity

`REPOSITORY PUBLICATION = MANUAL BY USER`. The published repository is validated only after this check passes on a fresh clone of the published `main` branch:

```
git clone https://github.com/DuczaPeter/sPg-Material-Radar-Signature-Crafting-Quality.git radar-post-publish-check
cd radar-post-publish-check
node tools/check-release.mjs
```

Upload the package with git or GitHub Desktop so that dot-prefixed files (`.github/`, `.gitignore`, `.gitattributes`) are included. The r2 web upload silently omitted them.

## Next task

No new application implementation is authorized by this release-packaging task. Roadmap items require separate scope and approval.
