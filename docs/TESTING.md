# Testing and validation

## Evidence vocabulary

- **SOURCE VERIFIED:** verified against a named current source.
- **STATIC VERIFIED:** parsed/inspected without claiming execution semantics.
- **RUNTIME VERIFIED:** actually executed in a browser/runtime.
- **INTEGRATION VERIFIED:** external service path executed successfully end-to-end.
- **NOT VERIFIED:** not proven in this release run.

Test results use PASS / EMPTY / UNKNOWN / ATTENTION / FAIL / ERROR. Gate states use DONE / N/A / BLOCKED.

## Static release gate

Command:

`node tools/check-release.mjs`

It checks, among other things:

- required release files;
- application byte parity;
- canonical SHA-256;
- embedded JavaScript parse;
- duplicate DOM IDs;
- required UI IDs and critical source markers;
- V4.1 standard presence/version;
- release metadata consistency;
- credential/secret cleanliness heuristics;
- visual asset presence;
- package manifest/inventory hashes.

This is a **STATIC** gate and is never described as runtime validation.

## Browser/runtime smoke

`tools/runtime-smoke.py` uses Chromium through Playwright when available. It injects the packaged HTML into a browser page, mocks `localStorage` for the opaque test origin, deliberately blocks all external HTTP(S) requests and validates the fallback UI at:

- 1440×1000 desktop;
- 390×844 mobile.

The test verifies row rendering, place-filter operation, Target Mining panel open/close, language switch, zero horizontal page overflow and page JavaScript exceptions. It also produces real browser screenshots used in the documentation.

This proves the **offline/fallback interaction path only**. It does not prove LIVE source fetches.

## Source validation

Packaging source checks verify current repository metadata and the current Krovax `data/latest.json` manifest, plus legal/source metadata for named third parties. This is source evidence, not a browser integration test.

## Optional unverified integration

- LIVE SCMDB/Krovax fetch from the packaged browser: **NOT VERIFIED** in this run.
- Public GitHub Pages pixel parity: **NOT VERIFIED** in this run.

These optional items are why the final status is **READY WITH LIMITATIONS**, not READY.
