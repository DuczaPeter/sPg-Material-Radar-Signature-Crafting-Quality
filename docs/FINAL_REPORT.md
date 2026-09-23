# Final release report

## Identity

- **RELEASE VERSION:** `2026.09.23-r3-v4.2-standard`
- **STANDARD VERSION:** `V4.2` (SHA-256 `f3b1358844a9f04da5ea8bfd6fe87b3051bd052e753bd8451991b39f894972b2`)
- **CANONICAL BASELINE:** application baseline GitHub `main` commit `a364bfba7127f9e9e68d84d38ef0eba81a8b1063`; repository baseline `8f0611c921b6b7c1f14f45ef608a5960c6292958`
- **MAIN ARTIFACT:** `index.html`
- **CANONICAL SHA-256:** `28be33eae5f2b53f375e52003a7af282ff8b97243fdb14ee0b28b531be9402f4`
- **REPOSITORY PUBLICATION:** MANUAL BY USER

## Evidence

- **Source:** SOURCE VERIFIED
- **Static:** STATIC VERIFIED — see `test-artifacts/static-release-gate-summary.json`
- **Runtime:** RUNTIME VERIFIED for offline/fallback browser smoke (existing evidence bound to the unchanged application SHA-256)
- **Integration:** NOT VERIFIED for LIVE third-party browser E2E
- **Published repository parity:** NOT VERIFIED — post-publish check pending

## Test result summary

- **PASS:** canonical byte parity; JS parse; required DOM/invariants; credential/secret cleanliness; inventory/checksum existence parity; line-ending policy; canonical standard SHA-256; package consistency.
- **EMPTY:** 0
- **UNKNOWN:** optional LIVE browser integration and deployed pixel parity remain not verified rather than guessed.
- **ATTENTION:** documented upstream licence uncertainty for two external data repositories and known application limitations.
- **FAIL:** 0 required gates
- **ERROR:** 0 required gates

## Gate summary

- **REQUIRED DONE:** all gates in `docs/RELEASE_CONTRACT.md` except published repository parity
- **REQUIRED N/A:** build/backend/account items only where project nature makes them non-applicable; none of the fixed minimum release gates is N/A
- **REQUIRED BLOCKED:** published repository parity (MANUAL BY USER, post-publish check pending)
- **OPTIONAL DONE:** visual asset creation
- **OPTIONAL N/A:** 0
- **OPTIONAL BLOCKED:** LIVE third-party browser E2E; GitHub Pages pixel parity; GitHub social-preview setting

## Release status

- **PACKAGE STATUS:** **READY WITH LIMITATIONS**
- **PUBLISHED RELEASE STATUS:** **BLOCKED** — manual publication and post-publish verification pending

## Post-publish check

Publish with git or GitHub Desktop so dot-prefixed files are included, then run on a fresh clone:

```
git clone https://github.com/DuczaPeter/sPg-Material-Radar-Signature-Crafting-Quality.git radar-post-publish-check
cd radar-post-publish-check
node tools/check-release.mjs
```

The PUBLISHED RELEASE STATUS is recalculated after this check.

## Limitations

See `STATUS.md` and `docs/KNOWN_LIMITATIONS.hu.md`. Location classification is still partly name/pattern based, the place filter is not fully coupled to Target Mining, periodic refresh/LKG cache are not implemented, and LIVE third-party E2E was not executed in this package run.

## Deviations

None.

## Documentation

Hungarian primary README and English equivalent, user guide, architecture, data-source, testing, release, limitations, roadmap, legal, privacy/security, contribution and AI/Codex continuation documents.

## Visual artifacts

Real desktop/mobile browser screenshots (RUNTIME VERIFIED) plus original project-specific data-flow and social-preview graphics under `assets/`.

## Licence status

Own project code/documentation: existing **All Rights Reserved** state preserved. Third-party rights remain separate.

## Package/checksum

`CHECKSUMS.sha256`, `PACKAGE-MANIFEST.json` and `FILE-INVENTORY.json` cover final repository artifacts, dot-prefixed files included. The ZIP is hashed separately after packaging.
