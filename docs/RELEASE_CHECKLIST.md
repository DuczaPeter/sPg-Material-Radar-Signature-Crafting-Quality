# Release checklist — 2026-09-23

Release package: `2026.09.23-r3-v4.2-standard`  
Standard: `V4.2`  
Repository publication: `MANUAL BY USER`

| Gate | Required | Status | Evidence / reason |
|---|---:|---|---|
| Canonical baseline identified | YES | DONE | application baseline commit + SHA-256; repository baseline commit recorded |
| Main artifact identified | YES | DONE | `index.html` |
| Baseline byte parity | YES | DONE | SHA-256 and byte equality of 3 app copies |
| Static validation | YES | DONE | `tools/check-release.mjs` PASS |
| Credential / secret cleanliness | YES | DONE | static secret-shape scan PASS |
| Licence status resolved | YES | DONE | existing All Rights Reserved licence preserved |
| Version consistency | YES | DONE | VERSION / STATUS / manifest / docs aligned |
| Runtime fallback/browser | YES | DONE | existing Chromium desktop + mobile evidence bound to unchanged SHA-256 |
| Source/data-source validation | YES | DONE | dated source-verification summary |
| HU/EN core documentation parity | YES | DONE | core features/limitations represented in both |
| Visual documentation | YES | DONE | real UI screenshots + original technical assets |
| Visual validation | YES | DONE | dimensions/readability/legal origin checked |
| Third-party/legal documentation | YES | DONE | unknown upstream licences explicitly disclosed |
| External-data redistribution | YES | DONE | no full Krovax/scunpacked dataset bundled |
| Package cleanliness | YES | DONE | no temp/cache/credentials |
| Artifact consistency | YES | DONE | manifest/inventory/checksums |
| Inventory / checksum existence parity | YES | DONE | every listed file exists, dot-prefixed files included |
| Line-ending / .gitattributes policy | YES | DONE | LF default, `-text` for hash-bound files; checked on an autocrlf clone |
| Canonical V4.2 standard byte identity | YES | DONE | SHA-256 `f3b1358844a9f04da5ea8bfd6fe87b3051bd052e753bd8451991b39f894972b2` |
| Published repository parity | YES | BLOCKED | MANUAL BY USER — pending post-publish fresh-clone check |
| LIVE third-party browser E2E | NO | BLOCKED | optional; not executed in this packaging run |
| GitHub Pages pixel parity | NO | BLOCKED | optional; not executed in this packaging run |
| GitHub social preview actually configured | NO | BLOCKED | optional; asset supplied, repository setting is a manual GitHub step |

PACKAGE STATUS (all REQUIRED gates except published repository parity): **READY WITH LIMITATIONS**.  
PUBLISHED RELEASE STATUS: **BLOCKED** until the post-publish fresh-clone check passes.
