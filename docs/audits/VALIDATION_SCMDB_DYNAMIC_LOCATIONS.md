# Validation — SCMDB dynamic Best Quality Locations

## Scope
Csak az SCMDB LIVE adatforrásból történő Quality-location registry felépítés, fallback/override lánc és a betöltési állapot-visszajelzés tartozik ide.

## 2026-09-11 — Ouratite / Quantainium képlet-audit
A felhasználói ellenőrzés jogos hibát talált a dinamikus location-számításban.

Az előző adapter tévesen megszorozta a SCMDB location-kártyához számolt százalékot a location `groupProbability` értékével is.

A projektben használt, a korábbi SCMDB snapshot értékeivel visszaellenőrzött képlet most:

`depositShare × primaryMaxPercent`

ahol:
- `depositShare = deposit.relativeProbability / az adott mineable group relativeProbability összege`
- csak a composition `qualityScale = 1.0` része számít primary előfordulásnak
- a `qualityScale = 0.49` és `0.789` részek nem kerülnek bele a location százalékba
- a `groupProbability` csak azt ellenőrzi, hogy a csoport aktív-e; a kijelzett százalékot nem szorozza tovább

### Krovax LIVE Hurston fixture — 4.10.0-live.12572603
A Hurston `SpaceShip_Mineables` deposit súlyok:
- 44
- 44
- Ouratite: 10
- Quantainium: 2

Összesen: 100.

Ouratite primary composition:
- primary: maxPercent 6.82, qualityScale 1.0
- secondary ugyanazon materialból: maxPercent 83.18, qualityScale 0.49 — KIZÁRVA
- Agricium secondary: qualityScale 0.789 — KIZÁRVA

Számítás: `10 / 100 × 6.82 = 0.682%` → kijelzés: `≤0.7%`.
Ez egyezik a korábbi validált SCMDB snapshot Hurston értékével.

Quantainium primary composition:
- primary: maxPercent 11.7, qualityScale 1.0
- secondary ugyanazon materialból: maxPercent 78.3, qualityScale 0.49 — KIZÁRVA
- Beryl secondary: qualityScale 0.789 — KIZÁRVA

Számítás: `2 / 100 × 11.7 = 0.234%` → kijelzés: `≤0.2%`.
Ez egyezik a korábbi validált SCMDB snapshot Hurston értékével.

Ha tévesen a secondary részeket is számolnánk, Hurston esetén Ouratite 9.0%, Quantainium 1.8% lenne. A production kód ezt NEM teszi.

## PASS
- JavaScript syntax: PASS (`node --check`).
- A két production HTML byte-identikus: PASS.
- Production CSS a képletjavítás előtt/után byte-azonos: PASS.
- `COMPONENT_REGISTRY`: változatlan: PASS.
- `QUALITY_LOCATION_REGISTRY` fallback: változatlan: PASS.
- `REFINERY_BONUS_REGISTRY`: változatlan: PASS.
- `MATERIALS`: változatlan: PASS.
- Secondary composition filter (`qualityScale === 1.0` primary-only): PASS.
- Ouratite Hurston fixture: 0.682% → `≤0.7%`: PASS.
- Quantainium Hurston fixture: 0.234% → `≤0.2%`: PASS.
- Fallback registry megmaradt a HTML-ben: PASS.
- Quality renderer és Target Mining lookup az aktív registryt használja: PASS.
- Loading / ready / partial / fallback állapotjelző megmaradt: PASS.
- Desktop/mobile radar layout kód nem lett módosítva ebben a képletjavításban.

## Runtime forrás
Primary:
`https://raw.githubusercontent.com/KrovaxCode/SCMDB_DATA/main/data/latest.json`

A `latest.json` által kijelölt aktuális LIVE `mining_data` fájl kerül betöltésre.

## Fallback
Ha a network, verzió, séma vagy location build validáció elbukik, a korábban beégetett `QUALITY_LOCATION_REGISTRY` marad használatban.
