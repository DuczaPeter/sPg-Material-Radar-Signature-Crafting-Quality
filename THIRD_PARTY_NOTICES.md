# Third-Party Notices

Verified/reviewed for this release package on **2026-09-22** unless stated otherwise.

## Cloud Imperium Games / Roberts Space Industries / Star Citizen

- Official site: https://robertsspaceindustries.com/
- Fan project guidance: https://support.robertsspaceindustries.com/hc/en-us/articles/360006895793-Star-Citizen-Fankit-and-Fandom-FAQ
- Use in this project: game names, locations, materials, component names and game-derived concepts/data references.
- Rights: retained by the relevant CIG/RSI entities and other rights holders.
- Project rule: remain clearly unofficial and provide an accessible link to the official site.

## KrovaxCode / SCMDB_DATA

- Repository: https://github.com/KrovaxCode/SCMDB_DATA
- Runtime manifest: https://raw.githubusercontent.com/KrovaxCode/SCMDB_DATA/main/data/latest.json
- Use: primary LIVE mining manifest and mining-data source.
- Packaging behaviour: the full third-party dataset is **not** bundled in this release package; the app requests targeted runtime files.
- Licence status observed on 2026-09-22: repository root exposed the `data/` directory and no root `LICENSE` file. The project therefore does not claim an open redistribution licence for the mirror data.

## SCMDB

- Site: https://scmdb.net/?page=mine
- Use: mining/Quality reference and historical curated fallback verification.
- Licence status: no explicit data redistribution licence is asserted by this project.
- Project rule: credit and link the source; do not imply ownership.

## Star Citizen Wiki API

- API: https://api.star-citizen.wiki/
- Source repository: https://github.com/StarCitizenWiki/API
- Use: component/blueprint verification and external item links.
- API application source licence: MIT, as reported by the upstream GitHub repository.
- Upstream developer guidance asks public projects to credit `api.star-citizen.wiki`.
- Important: the API software licence does not automatically relicense underlying Star Citizen game data.

## StarCitizenWiki / scunpacked-data

- Repository: https://github.com/StarCitizenWiki/scunpacked-data
- Use: runtime ship-weapon blueprint loading from a pinned commit.
- Pinned commit in the current application: `f6a2b29e77aaa2c824aa4fd1c0478c8058c69fca`
- Game-data version marker in the current application: `4.10.0-LIVE.12519617`
- Project rule: treat game-derived data rights separately from application-code licensing.

## UEX

- Site: https://uexcorp.space/
- Terms: https://uexcorp.space/about/terms
- Use: refinery bonus reference for the currently embedded registry.
- Current project behaviour: no LIVE UEX API request is performed by the production HTML for refinery bonuses.
- UEX terms describe website use as personal/non-commercial and data as informational/community-maintained; API terms are separate.

## CStone

- Aaron Halo helper: https://cstone.space/resources/knowledge-base/36-refinery-to-aaron-halo-mining-routes
- Use: external hyperlink only when Aaron Halo is displayed.
- The article is not bundled or copied into this project.

## Fonts and browser platform APIs

The current single-file HTML uses CSS font-family names and standard browser APIs. No font files are bundled in this release package.
