# Release Contract

Release package: `2026.09.23-r3-v4.2-standard`  
Release standard: `V4.2`  
Previous package: `2026.09.23-r2-v4.1-standard` — HISTORICAL  
Contract recorded before release-layer modification.

## Project identity

- **PROJECT TYPE:** public, single-file browser application / Star Citizen fan utility
- **PRIMARY LANGUAGE:** Hungarian; English user documentation is maintained in parallel
- **CANONICAL BASELINE:** application baseline GitHub `main` commit `a364bfba7127f9e9e68d84d38ef0eba81a8b1063` (app SHA-256 `28be33eae5f2b53f375e52003a7af282ff8b97243fdb14ee0b28b531be9402f4`); repository baseline for this package: published `main` commit `8f0611c921b6b7c1f14f45ef608a5960c6292958`
- **MAIN ARTIFACT:** `index.html`
- **TARGET VERSION:** application bytes unchanged; release package `2026.09.23-r3-v4.2-standard`
- **PUBLIC RELEASE:** YES
- **RUNTIME VALIDATION REQUIRED:** YES — UI, DOM, responsive layout and browser fallback behaviour are core product behaviour. Satisfied by the existing runtime evidence, which is bound to the unchanged application SHA-256; no application byte changes in this package.
- **PACKAGE / ZIP REQUIRED:** YES — explicitly requested
- **REPOSITORY PUBLICATION:** MANUAL BY USER
- **LICENSE STATUS:** RESOLVED — existing repository licence is preserved as All Rights Reserved / no open-source permission

## Scope of this package

The r2 package was validated as a package, but the published repository did not contain the dot-prefixed files listed in its `FILE-INVENTORY.json` (`.github/` workflow and templates, `.gitignore`). The r2 static gate therefore failed on a fresh clone of the published repository. This package:

- recreates `.github/` workflow, issue/PR templates and `.gitignore` (the r2 originals were not available, so these are new files with new hashes);
- adds a `.gitattributes` line-ending policy;
- replaces `docs/RELEASE_STANDARD.md` with the canonical V4.2 standard;
- corrects a non-standard evidence label (`VISUAL VERIFIED` is not a V4.2 Evidence Level);
- regenerates inventory, manifest and checksums.

## Required gates

1. Canonical baseline identified.
2. Main artifact identified.
3. Baseline byte parity for all three application copies.
4. Static validation and embedded JavaScript parse.
5. Credential / secret cleanliness.
6. Licence status resolved.
7. Version and documentation consistency.
8. Runtime fallback/browser smoke validation at desktop and mobile viewport (existing evidence bound to the unchanged artifact hash).
9. Data-source/source-provenance validation.
10. Package cleanliness and artifact consistency.
11. HU/EN user-documentation parity for core functionality and limitations.
12. Visual documentation and visual validation.
13. Third-party/legal documentation and external-data redistribution review.
14. Inventory / checksum existence parity, including dot-prefixed files (V4.2 §69).
15. Line-ending / `.gitattributes` policy (V4.2 §70–72).
16. Canonical V4.2 standard byte identity (SHA-256 `f3b1358844a9f04da5ea8bfd6fe87b3051bd052e753bd8451991b39f894972b2`).
17. Published repository parity (V4.2 §67). REPOSITORY PUBLICATION = MANUAL BY USER, therefore NOT VERIFIED + BLOCKED until the post-publish fresh-clone check.

## Optional gates

- End-to-end LIVE third-party browser fetch validation.
- Pixel-level parity against the deployed GitHub Pages instance.
- Actual GitHub repository social-preview setting in the GitHub UI.

## Relevant visual assets

- real desktop UI screenshot;
- real mobile UI screenshot;
- project-specific architecture/data-flow diagram;
- project-specific social-preview artwork without third-party game assets.

## N/A elements

- **Build system:** N/A — the accepted application architecture is a self-contained HTML file.
- **Backend deployment validation:** N/A — the project has no project-owned backend.
- **Account/login validation:** N/A — the application has no account/login system.

## Deviations

None. The application artifact is intentionally preserved byte-for-byte; this package changes only repository/release support files, documentation, evidence metadata and dot-prefixed repository files.
