# Testing and Validation

## Validation vocabulary

- **SOURCE VERIFIED** — checked directly against the identified source/repository.
- **STATIC VERIFIED** — syntax/invariant/release checks passed without claiming browser behaviour.
- **RUNTIME VERIFIED** — an actual browser execution was performed for the stated scenario.
- **UNVERIFIED / UNKNOWN** — not tested or not provable in the stated run.
- **ATTENTION** — known limitation or mismatch requiring care, not silently hidden.

## Static release gate

Command:

```bash
node tools/check-release.mjs
```

The gate checks, at minimum:

- required repository files;
- JSON parse validity;
- `index.html` existence;
- JavaScript syntax parse for embedded scripts;
- duplicate DOM IDs;
- required location-filter IDs;
- absence of the removed `craftOnly` control;
- required source/fallback markers;
- byte equality between canonical and release HTML copies;
- canonical SHA-256 against `VERSION.json`;
- key manifest hashes.

## Packaging-time runtime evidence

A Chromium harness executed the canonical HTML with external HTTP(S) requests intentionally blocked so fallback behaviour could be isolated.

Tested viewports:

- 1440×1000 desktop;
- 390×844 mobile.

Verified in that harness:

- 35 fallback radar rows initially rendered;
- old `#craftOnly` control absent;
- three place-filter buttons present;
- Surface filter active state and filtered row list;
- Space filter active state and filtered row list;
- All locations restores initial row count;
- Target Mining panel opens;
- HU→EN UI language switch works;
- document-level horizontal overflow = 0 px;
- no page-level JavaScript exceptions.

Expected network resource errors were produced because external requests were deliberately aborted. Those are not counted as application exceptions in this fallback harness.

Evidence: `test-artifacts/runtime-fallback-summary.json`.

## What this run did NOT prove

- successful browser fetch of the current Krovax LIVE files;
- successful browser fetch of every pinned ship-weapon blueprint;
- public GitHub Pages network/CORS behaviour;
- pixel-level screenshot parity;
- correctness of every embedded component recipe against current 4.10.1 LIVE;
- future schema compatibility.

These remain UNVERIFIED for this packaging run unless a separate evidence artifact is added.

## Regression policy

Every important bugfix/feature should add a targeted check. If a future change affects UI, DOM, responsive layout or interaction, static checks alone are insufficient; browser evidence is required.
