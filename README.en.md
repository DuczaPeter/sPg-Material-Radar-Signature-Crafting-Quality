# sPg Material Radar Signature & Crafting Quality

A single-file Star Citizen mining and crafting helper.

**Live page:** https://duczapeter.github.io/sPg-Material-Radar-Signature-Crafting-Quality/

The tool combines radar signatures, best-known Quality locations, crafting material roles, refinery bonuses and multi-material Target Mining in one browser page.

## What can it do?

- identify mineable materials by radar signature;
- show Ship, ROC and FPS mineables;
- filter the radar by `All locations / Surface / Space`;
- display Best Quality locations across Stanton, Pyro and Nyx;
- separate Q500 / Integrity-oriented crafting from Q800–Q900+ high-Quality use;
- show verified component families and component matches;
- show positive refinery bonuses;
- search for common top locations for multiple selected materials;
- use SCMDB/Krovax LIVE mining data with an embedded fallback.

## Quick use

1. Open `index.html` or the live GitHub Pages site.
2. Keep `Radar order` selected when searching by signature.
3. Choose `All locations`, `Surface` or `Space`.
4. Click a material to expand Quality, crafting, radar and refinery details.
5. For several materials, open `Target Mining` and select the desired materials.
6. Switch between Hungarian and English with the language selector.

Detailed guide: [`docs/USER_GUIDE.en.md`](docs/USER_GUIDE.en.md)

## Main behaviour

### Radar Signature

The application renders possible signature capsules from the material's radar base value and rarity-derived hit count. The LIVE mining adapter can refresh relevant mining fields from the current KrovaxCode `SCMDB_DATA` LIVE `mining_data` file. If the LIVE payload is unavailable or invalid, the embedded fallback remains active.

### Best Quality Locations

The application builds its own Best Quality registry from Krovax mining data. The verified percentage formula is:

`depositShare × primary maxPercent`

Only the composition part with `qualityScale = 1.0` is treated as primary. `groupProbability` is not multiplied into the displayed material percentage. Equal top values preserve ties.

### All locations / Surface / Space

The filter affects both the radar list and expanded Best Quality locations. In the current production build, classification is based on known names and name patterns. `Lagrange`, `Ring`, `Belt`, `Asteroid`, `Deep Space`, `Aaron Halo` and `Breaker Stations` are treated as Space; known planets, moons, caves and surface names are treated as Surface.

**ATTENTION:** classification is not yet fully driven by source `locationType`. An unknown location name can currently fall through to Surface. Source-driven classification is a roadmap item.

### Crafting Quality

Quality is not treated as one global rule per raw material. The category is based on the blueprint recipe slot. Q500 / Integrity-oriented uses are separated from minimum-Quality or functionally high-Quality uses.

### Target Mining

Select at least two materials and the tool searches for common Best Quality locations, optionally by star system. Locations covering more selected materials rank first.

**ATTENTION:** the topbar `Surface / Space` filter does not currently filter the Target Mining result list itself; it filters the radar and expanded material location block.

### Refinery

Refinery bonuses currently come from an embedded UEX-derived registry. Only positive best-per-system bonuses are shown, preserving ties. The refinery section is not a LIVE UEX API integration in the current build.

## Data sources

- KrovaxCode / SCMDB_DATA – primary LIVE mining source;
- SCMDB – mining/Quality reference and fallback validation;
- Star Citizen Wiki API – blueprint/component verification;
- StarCitizenWiki `scunpacked-data` – pinned ship-weapon blueprint data;
- UEX – refinery bonus reference;
- CStone – external Aaron Halo route helper link.

Details: [`docs/DATA_SOURCES.en.md`](docs/DATA_SOURCES.en.md)

## Automatic refresh and cache

The current build checks the Krovax LIVE mining manifest on page load and requests the current mining file with `cache: no-store`. The ship-weapon registry also performs network requests against a pinned GitHub commit.

**Not yet production:** four-hour periodic refresh, last-known-good cache, schema-drift diagnostics, fully automatic new-material discovery and LIVE refinery refresh. These remain roadmap items.

## Privacy

The project has no first-party backend, account system or embedded analytics code. It stores the selected UI language in browser `localStorage`. Direct third-party data requests expose normal network metadata such as IP address and user agent to those external services.

See [`PRIVACY.md`](PRIVACY.md).

## Requirements

- a modern browser with JavaScript, Fetch API and current CSS support;
- an internet connection for LIVE data refresh;
- no build or installation step.

The embedded fallback keeps the main UI usable when external mining data fail, while parts of the runtime ship-weapon registry rely on network access.

## Validation state

For the 2026-09-22 packaging run:

- the canonical `index.html` was source-verified against the GitHub `main` baseline;
- JavaScript parse and release invariants are STATIC PASS;
- a Chromium offline/fallback interaction harness passed on desktop and 390×844 mobile;
- document-level horizontal overflow was 0 px in the tested fallback state;
- external LIVE network fetches were not end-to-end browser-runtime validated in this packaging run.

See [`docs/TESTING.md`](docs/TESTING.md).

## Current baseline

- repository: `DuczaPeter/sPg-Material-Radar-Signature-Crafting-Quality`
- branch: `main`
- baseline commit: `47dcea643b11115ceac770bd8799d9f16c02fb0d`
- canonical app blob: `6be14d6c299b8e9efc1dd48d183b2b0eebd9cb30`
- canonical app SHA-256: `28be33eae5f2b53f375e52003a7af282ff8b97243fdb14ee0b28b531be9402f4`
- the release package intentionally preserves the application bytes.

## Licence and legal status

No open-source licence has been selected for the project's original code. `LICENSE` therefore records an All Rights Reserved / no-permission state; it does not grant MIT/GPL/Apache-style rights.

Star Citizen and third-party data/service rights are handled separately. See:

- [`LICENSE`](LICENSE)
- [`NOTICE.md`](NOTICE.md)
- [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md)

## For developers / AI agents

- [`AGENTS.md`](AGENTS.md) – canonical baseline, invariants and test rules;
- [`STATUS.md`](STATUS.md) – short current state;
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) – architecture and data flow;
- [`docs/RELEASE.md`](docs/RELEASE.md) – release gate;
- [`CONTRIBUTING.md`](CONTRIBUTING.md) – change discipline.
