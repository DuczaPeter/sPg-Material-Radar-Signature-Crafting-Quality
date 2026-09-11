# Technikai dokumentáció

Ez a mappa a fő README-nél részletesebb audit- és validációs anyagokat tartalmazza.

## Aktuális dokumentumok

### `SCMDB_LIVE_SOURCE_INTEGRATION.md`

A KrovaxCode `SCMDB_DATA` runtime mining integrációja:

- `latest.json` bootstrap;
- aktuális LIVE `mining_data` kiválasztása;
- dinamikus Best Quality registry;
- primary-only Quality formula;
- fallback és safety gate-ek.

### `VALIDATION_SCMDB_DYNAMIC_LOCATIONS.md`

A dinamikus location formula validációja, külön Ouratite / Quantainium audit példával.

### `QUANTUM_DRIVE_AUDIT_4.10.md`

A Star Citizen 4.10 Quantum Drive crafting registry auditja és a recipe slot → material mapping.

### `VALIDATION_MOBILE_TARGET_FIX.md`

Korábbi mobile / Target Mining regressziós ellenőrzés. A dokumentum a hozzá tartozó patch validációját őrzi; a jelenlegi production kód későbbi változásokat is tartalmazhat.

## Fontos

A root `README.md`, `HOW_IT_WORKS.md` és `CHANGELOG.md` írja le a jelenlegi felhasználói állapotot. Ha egy régebbi validációs dokumentum és a root dokumentáció között eltérés van, a jelenlegi production HTML és a frissebb root dokumentáció az irányadó.
