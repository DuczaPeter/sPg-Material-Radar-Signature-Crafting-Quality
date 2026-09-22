# STATUS

**Package date:** 2026-09-22  
**Application versioning:** no user-facing semantic version in the production HTML  
**Release package ID:** `2026.09.22-r1-docs-gate`  
**Canonical app:** `index.html`

## Current baseline

- GitHub `main` commit: `47dcea643b11115ceac770bd8799d9f16c02fb0d`
- canonical Git blob: `6be14d6c299b8e9efc1dd48d183b2b0eebd9cb30`
- canonical SHA-256: `28be33eae5f2b53f375e52003a7af282ff8b97243fdb14ee0b28b531be9402f4`
- current GitHub Pages app bytes are preserved in this package.

## Validation state

- **SOURCE VERIFIED:** repository baseline and Krovax `latest.json` were checked during packaging.
- **STATIC VERIFIED:** package release gate PASS after manifest generation.
- **RUNTIME VERIFIED:** fallback/offline interaction harness PASS in Chromium on 1440×1000 and 390×844; external requests were intentionally blocked.
- **UNVERIFIED:** end-to-end third-party LIVE fetch in the packaged browser runtime.
- **UNVERIFIED:** pixel-level visual parity against the public deployment during this packaging run.

## Current observed Krovax LIVE manifest

Observed on 2026-09-22: `4.10.1-live.12660092`, generated `2026-09-16T19:58:26Z`.

This is an observation, not a hard-coded application requirement. The app discovers LIVE through `latest.json`.

## ATTENTION / known limitations

- place classification is still name/pattern based and unknown names can fall through to Surface;
- hard-coded Lagrange display mapping is not proof that every displayed ARC/CRU/HUR/MIC L-point has identical mining data;
- topbar Surface/Space filtering does not yet constrain Target Mining result locations;
- no four-hour automatic refresh loop yet;
- no last-known-good LIVE cache yet;
- refinery bonuses are embedded, not LIVE UEX;
- component/weapon datasets contain pinned/embedded 4.9/4.10.0 source-version markers while current mining LIVE may be newer.

## Next work

No new implementation task is authorized by this packaging step. Roadmap items require separate approval and should be handled one narrow feature at a time.
