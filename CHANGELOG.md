# Changelog

The production HTML intentionally has no user-facing semantic version number. Release-layer entries are dated and tied to a verified application baseline.

## 2026-09-23 — r3: V4.2 release standard and published-repository repair

### Fixed

- the published r2 repository did not contain the dot-prefixed files listed in `FILE-INVENTORY.json` (`.github/` workflow and templates, `.gitignore`), so the r2 static gate failed on a fresh clone. Cause: the files were omitted by the web upload. The files are recreated in this package (the r2 originals were not available, so hashes differ from r2);
- `VISUAL VERIFIED` was used as an evidence level; real UI screenshots are now labelled `RUNTIME VERIFIED`.

### Added

- `.gitattributes` line-ending policy: LF for normalizable text, `-text` for hash-bound application and evidence files;
- gate checks for the `.gitattributes` policy, CRLF-free inventoried text files, dot-prefixed required files and the canonical V4.2 standard SHA-256.

### Changed

- `docs/RELEASE_STANDARD.md` replaced by the canonical V4.2 standard;
- Release Contract records `REPOSITORY PUBLICATION: MANUAL BY USER`; status is reported as PACKAGE STATUS and PUBLISHED RELEASE STATUS.

### Validation

- application SHA-256 unchanged: `28be33eae5f2b53f375e52003a7af282ff8b97243fdb14ee0b28b531be9402f4`;
- regression protection: the static gate verifies every inventoried file, including dot-prefixed files, so a repeat of the r2 omission fails the gate.

## 2026-09-23 — V4.1 professional release package (HISTORICAL)

### Added

- project-local `docs/RELEASE_STANDARD.md` pinned to Universal Professional GitHub Release Master Standard V4.1;
- `docs/RELEASE_CONTRACT.md` with gates fixed before release-layer work;
- real desktop and mobile UI screenshots from the packaged artifact under the documented offline/fallback runtime condition;
- project-specific data-flow/architecture SVG and social-preview artwork;
- stronger static gate including credential/secret cleanliness, standard-version checks, visual-assets checks and package consistency;
- final `CHECKSUMS.sha256` release checksum artifact;
- V4.1 release/gate evidence summaries.

### Changed

- `README.md` is now the full Hungarian primary landing page; English remains in `README.en.md`;
- `AGENTS.md` points to the project-local release standard without embedding the full standard;
- release metadata now uses the current GitHub `main` commit as the source baseline while preserving the same application blob and SHA-256.

### Validation

- production HTML bytes unchanged: SHA-256 `28be33eae5f2b53f375e52003a7af282ff8b97243fdb14ee0b28b531be9402f4`;
- canonical/standalone/release HTML byte parity PASS;
- static release gate PASS;
- credential/secret cleanliness PASS under the documented scanner rules;
- Chromium offline/fallback desktop and mobile smoke PASS;
- visual artifact validation PASS;
- LIVE third-party browser E2E remains NOT VERIFIED and is documented as an optional limitation.

### Not changed

No production business logic, UI logic, mining formula, source adapter, embedded dataset or storage behaviour was intentionally modified by this release-package migration.

## 2026-09-22 — professional GitHub release layer

- bilingual documentation, legal notices, release metadata, issue/PR templates, static gate, manifest and fallback browser evidence were added around the existing application.

## 2026-09-11 — current application behaviour baseline

- `Minden hely / Felszín / Űr` topbar filter;
- LIVE SCMDB/Krovax mining integration/status handling;
- Lagrange display labels;
- dynamic Best Quality location registry;
- corrected Best Quality percentage formula without `groupProbability` multiplier.
