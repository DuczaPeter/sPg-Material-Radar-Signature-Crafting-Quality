# Release Contract

Release package: `2026.09.23-r2-v4.1-standard`  
Release standard: `V4.1`  
Contract recorded before release-layer modification.

## Project identity

- **PROJECT TYPE:** public, single-file browser application / Star Citizen fan utility
- **PRIMARY LANGUAGE:** Hungarian; English user documentation is maintained in parallel
- **CANONICAL BASELINE:** GitHub `main` commit `a364bfba7127f9e9e68d84d38ef0eba81a8b1063`
- **MAIN ARTIFACT:** `index.html`
- **TARGET VERSION:** application bytes unchanged; release package `2026.09.23-r2-v4.1-standard`
- **PUBLIC RELEASE:** YES
- **RUNTIME VALIDATION REQUIRED:** YES — UI, DOM, responsive layout and browser fallback behaviour are core product behaviour
- **PACKAGE / ZIP REQUIRED:** YES — explicitly requested
- **LICENSE STATUS:** RESOLVED — existing repository licence is preserved as All Rights Reserved / no open-source permission

## Required gates

1. Canonical baseline identified.
2. Main artifact identified.
3. Baseline byte parity for all three application copies.
4. Static validation and embedded JavaScript parse.
5. Credential / secret cleanliness.
6. Licence status resolved.
7. Version and documentation consistency.
8. Runtime fallback/browser smoke validation at desktop and mobile viewport.
9. Data-source/source-provenance validation.
10. Package cleanliness and artifact consistency.
11. HU/EN user-documentation parity for core functionality and limitations.
12. Visual documentation and visual validation.
13. Third-party/legal documentation and external-data redistribution review.

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

None. The application artifact is intentionally preserved byte-for-byte; this release changes only repository/release support files, documentation, evidence and visual assets.
