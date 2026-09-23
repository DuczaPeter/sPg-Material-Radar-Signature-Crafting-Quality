# Final release report

## Identity

- **RELEASE VERSION:** `2026.09.23-r2-v4.1-standard`
- **STANDARD VERSION:** `V4.1`
- **CANONICAL BASELINE:** GitHub `main` commit `a364bfba7127f9e9e68d84d38ef0eba81a8b1063`
- **MAIN ARTIFACT:** `index.html`
- **CANONICAL SHA-256:** `28be33eae5f2b53f375e52003a7af282ff8b97243fdb14ee0b28b531be9402f4`

## Evidence

- **Source:** SOURCE VERIFIED
- **Static:** STATIC VERIFIED
- **Runtime:** RUNTIME VERIFIED for offline/fallback browser smoke
- **Integration:** NOT VERIFIED for LIVE third-party browser E2E

## Test result summary

- **PASS:** canonical byte parity; JS parse; required DOM/invariants; credential/secret cleanliness; source/provenance checks; desktop/mobile fallback smoke; visual validation; package consistency.
- **EMPTY:** 0
- **UNKNOWN:** optional LIVE browser integration and deployed pixel parity remain not verified rather than guessed.
- **ATTENTION:** documented upstream licence uncertainty for two external data repositories and known application limitations.
- **FAIL:** 0 required gates
- **ERROR:** 0 required gates

## Gate summary

- **REQUIRED DONE:** all gates defined in `docs/RELEASE_CONTRACT.md`
- **REQUIRED N/A:** build/backend/account items only where project nature makes them non-applicable; none of the fixed minimum release gates is N/A
- **REQUIRED BLOCKED:** 0
- **OPTIONAL DONE:** visual asset creation
- **OPTIONAL N/A:** 0
- **OPTIONAL BLOCKED:** LIVE third-party browser E2E; GitHub Pages pixel parity; GitHub social-preview setting

## Release status

**READY WITH LIMITATIONS**

All REQUIRED gates are complete. Optional/unresolved limitations are explicitly documented and are not represented as PASS.

## Limitations

See `STATUS.md` and `docs/KNOWN_LIMITATIONS.hu.md`. Most importantly, location classification is still partly name/pattern based, the place filter is not fully coupled to Target Mining, periodic refresh/LKG cache are not implemented, and LIVE third-party E2E was not executed in this package run.

## Deviations

None.

## Documentation

Hungarian primary README and English equivalent are present, with user guide, architecture, data-source, testing, release, limitations, roadmap, legal, privacy/security, contribution and AI/Codex continuation documents.

## Visual artifacts

Real desktop/mobile browser screenshots plus original project-specific data-flow and social-preview graphics are included under `assets/`.

## Licence status

Own project code/documentation: existing **All Rights Reserved** state preserved. Third-party rights remain separate. Two external data repositories expose no repository licence in current GitHub metadata and are therefore not redistributed as full datasets.

## Package/checksum

`CHECKSUMS.sha256`, `PACKAGE-MANIFEST.json` and `FILE-INVENTORY.json` cover final repository artifacts. The ZIP itself is hashed separately after packaging.
