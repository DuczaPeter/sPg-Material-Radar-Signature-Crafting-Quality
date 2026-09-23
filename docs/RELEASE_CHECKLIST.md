# Release checklist — 2026-09-23

Release package: `2026.09.23-r2-v4.1-standard`  
Standard: `V4.1`  

| Gate | Required | Status | Evidence / reason |
|---|---:|---|---|
| Canonical baseline identified | YES | DONE | GitHub `main` commit + app blob recorded |
| Main artifact identified | YES | DONE | `index.html` |
| Baseline byte parity | YES | DONE | SHA-256 and byte equality of 3 app copies |
| Static validation | YES | DONE | `tools/check-release.mjs` PASS |
| Credential / secret cleanliness | YES | DONE | static secret-shape scan PASS |
| Licence status resolved | YES | DONE | existing All Rights Reserved licence preserved |
| Version consistency | YES | DONE | VERSION / STATUS / manifest / docs aligned |
| Runtime fallback/browser | YES | DONE | Chromium desktop + mobile PASS |
| Source/data-source validation | YES | DONE | dated source-verification summary |
| HU/EN core documentation parity | YES | DONE | core features/limitations represented in both |
| Visual documentation | YES | DONE | real UI screenshots + original technical assets |
| Visual validation | YES | DONE | dimensions/readability/legal origin checked |
| Third-party/legal documentation | YES | DONE | unknown upstream licences explicitly disclosed |
| External-data redistribution | YES | DONE | no full Krovax/scunpacked dataset bundled |
| Package cleanliness | YES | DONE | no temp/cache/credentials; final package audit |
| Artifact consistency | YES | DONE | manifest/inventory/checksums |
| LIVE third-party browser E2E | NO | BLOCKED | optional; not executed in this packaging run |
| GitHub Pages pixel parity | NO | BLOCKED | optional; not executed in this packaging run |
| GitHub social preview actually configured | NO | BLOCKED | optional; asset supplied, repository setting not changed |

Because all REQUIRED gates are DONE and optional limitations remain, the deterministic release status is **READY WITH LIMITATIONS**.
