# sPg Material Radar Signature & Crafting Quality

**Language / Nyelv:** [Magyar](README.hu.md) · [English](README.en.md)

Single-file Star Citizen mining and crafting helper focused on radar signatures, Quality-aware locations, crafting material roles, refinery bonuses and multi-material target mining.

**Live page:** https://duczapeter.github.io/sPg-Material-Radar-Signature-Crafting-Quality/

**Main artifact:** [`index.html`](index.html)  
**Standalone release artifact:** [`release/sPg_Material_Radar_Signature_Crafting_Quality.html`](release/sPg_Material_Radar_Signature_Crafting_Quality.html)

The application remains a single self-contained HTML file. No build system is required. This repository package adds documentation, validation, release metadata and GitHub workflow files around the existing production artifact; the application bytes are intentionally preserved from the verified repository baseline.

## Validation snapshot

| Area | State |
|---|---|
| Production HTML baseline | **SOURCE VERIFIED** against GitHub `main` commit `47dcea643b11115ceac770bd8799d9f16c02fb0d` |
| Static release gate | **STATIC VERIFIED** |
| Offline/fallback interaction harness | **RUNTIME VERIFIED** on Chromium for desktop and 390×844 mobile |
| Live third-party network fetch from the packaged app | **UNVERIFIED in this packaging run** |
| Exact visual parity on the public GitHub Pages deployment | **UNVERIFIED in this packaging run** |

See [`STATUS.md`](STATUS.md) and [`docs/TESTING.md`](docs/TESTING.md) for the precise scope.

## Important

This is an unofficial Star Citizen fan tool and is not affiliated with Cloud Imperium Group. Third-party game data and services remain subject to their own rights, terms and licences. See [`NOTICE.md`](NOTICE.md), [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) and [`LICENSE`](LICENSE).
