# Ismert korlátok

- A `Felszín / Űr` besorolás jelenleg részben név- és pattern-alapú; ismeretlen helynév Felszínként eshet át.
- A hard-coded Lagrange display mapping nem bizonyítja, hogy minden felsorolt ARC/CRU/HUR/MIC L-pont külön mining adata azonos.
- A topbar helyszűrő nem szűri külön a Target Mining eredménylistáját.
- Nincs még 4 óránként ismétlődő automatikus frissítés.
- Nincs last-known-good LIVE cache.
- Nincs teljes schema-drift diagnosztika és teljesen automatikus új-material felvétel.
- A refinery bonus registry beágyazott UEX-alapú adat; nem LIVE UEX runtime feed.
- A ship-weapon blueprint forrás pinned `scunpacked-data` commit; nem nevezhető aktuális LIVE-nak automatikusan.
- KrovaxCode/SCMDB_DATA és StarCitizenWiki/scunpacked-data GitHub metadata jelenleg nem deklarál repository licence-et. A teljes külső dataset nincs a release-be újracsomagolva.
- LIVE third-party browser E2E és a publikus GitHub Pages pixel-paritás ebben a release futásban NOT VERIFIED.
