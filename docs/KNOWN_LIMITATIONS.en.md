# Known limitations

- `Surface / Space` classification is still partly name/pattern based; an unknown location name may fall through to Surface.
- Hard-coded Lagrange display mapping is not proof that each displayed ARC/CRU/HUR/MIC L-point has identical mining data.
- The topbar place filter does not independently filter Target Mining result locations.
- There is no four-hour periodic refresh loop yet.
- There is no last-known-good LIVE cache yet.
- Full schema-drift diagnostics and complete automatic discovery of new materials are not production features yet.
- The refinery-bonus registry is embedded UEX-derived data, not a LIVE UEX runtime feed.
- Ship-weapon blueprints use a pinned `scunpacked-data` commit and must not automatically be described as current LIVE.
- KrovaxCode/SCMDB_DATA and StarCitizenWiki/scunpacked-data currently expose no repository licence in GitHub metadata. Their full external datasets are not redistributed in this release.
- LIVE third-party browser E2E and public GitHub Pages pixel parity are NOT VERIFIED in this release run.
