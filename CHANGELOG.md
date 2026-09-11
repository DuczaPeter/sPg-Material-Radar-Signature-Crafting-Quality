# Changelog

A projekt jelenleg nem használ publikus szemantikus verziószámot a UI-ban. Ez a fájl a fontosabb funkcionális változásokat időrendben követi.

## 2026-09-11

### Helyszűrés

- A `Csak crafting anyagok` gomb és funkció eltávolítva.
- Radar módban alapból minden ismert radaranyag látható.
- Új topbar gombok:
  - `Minden hely`
  - `Felszín`
  - `Űr`
- A szűrés a radarlistára és a Best Quality location megjelenítésre is hat.
- Breaker Stations és ringek Űr kategóriába kerülnek.

### Lagrange megjelenítés

- Lagrange A–F helyekhez megjelenítési mapping került.
- Példa: `Lagrange D (ARC-L3, CRU-L5, MIC-L4)`.

### SCMDB LIVE / Krovax integráció

- KrovaxCode `SCMDB_DATA` LIVE manifest lett az elsődleges runtime mining forrás.
- Beépített fallback adatok megmaradtak.
- LIVE állapotjelző bekerült az Adatforrások részbe.
- Dinamikus Best Quality location registry készül a LIVE mining adatból.

### Quality location formula javítás

- A location percentage képletből kikerült a téves `groupProbability` szorzó.
- Csak a `qualityScale = 1.0` primary composition rész számít.
- Ouratite / Hurston: `≤0.7%` fixture PASS.
- Quantainium / Hurston: `≤0.2%` fixture PASS.

## 2026-08-30

- Mobil radar olvashatósági javítások.
- Target Mining mobil regressziós ellenőrzések.
- Desktop Target Mining collapsed chip méret megőrizve.
- Hosszú radar signature sorok mobilon kontrollált tömörítést kaptak.

## 2026-08-27 körüli audit

- Quantum Drive registry teljes 4.10 audit.
- 57 Quantum Drive rekord.
- Case / Injector Nozzles / Containment Matrix recipe-slot Quality besorolások pontosítva.
- Agni és több hiányzó/corrected material-slot kapcsolat javítva.
