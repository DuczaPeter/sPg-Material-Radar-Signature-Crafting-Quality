# Data Sources

## Precedence

### Mining / radar / Quality locations

1. validated KrovaxCode / SCMDB_DATA LIVE `mining_data`;
2. embedded previously verified fallback registry.

Invalid LIVE payloads must not replace working fallback data.

## KrovaxCode / SCMDB_DATA

- Repository: https://github.com/KrovaxCode/SCMDB_DATA
- Manifest: https://raw.githubusercontent.com/KrovaxCode/SCMDB_DATA/main/data/latest.json
- Current observed LIVE on 2026-09-22: `4.10.1-live.12660092`
- Generated at: `2026-09-16T19:58:26Z`

Used concepts include mineable elements, rarity, scan signatures, Quality bands, compositions, locations, group/deposit weights and system/location metadata.

The app requests targeted source files rather than the entire `merged` dataset.

## SCMDB

- https://scmdb.net/?page=mine

Mining/Quality reference and historical curated-fallback validation source. The project does not assert a separate SCMDB data redistribution licence.

## Star Citizen Wiki API

- https://api.star-citizen.wiki/
- https://github.com/StarCitizenWiki/API

Used for component/blueprint verification and item links. The upstream API application code is MIT-licensed; that software licence does not automatically relicense underlying game data.

## StarCitizenWiki / scunpacked-data

Current production ship-weapon blueprints are loaded from a pinned commit:

- commit: `f6a2b29e77aaa2c824aa4fd1c0478c8058c69fca`
- version marker: `4.10.0-LIVE.12519617`

That subsystem therefore must not be described as automatically tracking the current LIVE game build.

## UEX

- https://uexcorp.space/
- https://uexcorp.space/about/terms

The refinery bonus registry is UEX-derived but embedded in the current production HTML; it is not a LIVE UEX API feed.

## CStone

- https://cstone.space/resources/knowledge-base/36-refinery-to-aaron-halo-mining-routes

External Aaron Halo route-helper link only.

## Freshness and build tracking

Mining LIVE is discovered from `latest.json` on page load. Specific build numbers in documentation are verification snapshots, not application pins.

Four-hour refresh, last-known-good caching and full schema-drift diagnostics are not yet production features.

## Dynamic discovery

The current mining adapter can refresh radar/rarity/location data for known project materials. Fully automatic new-material rows, new source-driven location classes and LIVE refinery discovery remain roadmap work.

Unknown fields/location types must not be guessed.
