# AGENTS.md

## Project goal

Maintain the **sPg Material Radar Signature & Crafting Quality** Star Citizen helper as a trustworthy, single-file browser application with clear source provenance, fault-tolerant mining data and regression-safe UI behaviour.

## Canonical baseline

- Repository: `DuczaPeter/sPg-Material-Radar-Signature-Crafting-Quality`
- Branch: `main`
- Source-verified baseline commit: `47dcea643b11115ceac770bd8799d9f16c02fb0d`
- Canonical application: `index.html`
- Baseline Git blob SHA: `6be14d6c299b8e9efc1dd48d183b2b0eebd9cb30`
- Baseline SHA-256: `28be33eae5f2b53f375e52003a7af282ff8b97243fdb14ee0b28b531be9402f4`
- Root standalone copy and `release/sPg_Material_Radar_Signature_Crafting_Quality.html` are release copies of the canonical app.

## Authoritative files

- `index.html` — production application source/artifact.
- `VERSION.json` — package/baseline identity.
- `STATUS.md` — current short project state.
- `docs/ARCHITECTURE.md` — architecture and data flow.
- `docs/DATA_SOURCES.hu.md` / `.en.md` — source precedence and freshness.
- `docs/TESTING.md` / `docs/RELEASE.md` — validation and release gates.
- `THIRD_PARTY_NOTICES.md` — third-party attribution/licence status.

## Critical invariants

1. The app remains a self-contained single HTML file; do not introduce a build system merely for packaging.
2. Never invent Star Citizen data, source licences, Quality effects, locations or validation results.
3. Preserve embedded fallback behaviour when changing LIVE source adapters.
4. The verified Best Quality formula is `depositShare × primary maxPercent`; `groupProbability` is not a display multiplier.
5. Secondary composition parts (`qualityScale != 1.0`) must not be treated as primary for the verified Best Quality formula.
6. `Ice` remains the user-facing mining material name even where crafting internals use `Pressurized Ice`.
7. Quantanium/Quantainium and other documented aliases must remain deliberate.
8. Mobile radar must not reintroduce horizontal page scrolling.
9. Do not silently change desktop layout while fixing mobile-only behaviour.
10. The current `Minden hely / Felszín / Űr` implementation is name/pattern based; do not present it as fully source-driven until implemented and tested.
11. Breaker Stations and rings are intended as Space in the project model.
12. Target Mining and the topbar place filter are currently not fully coupled; do not claim otherwise.
13. Refinery bonuses are currently embedded UEX-derived data, not a LIVE UEX runtime feed.
14. Ship-weapon blueprints are loaded from a pinned `scunpacked-data` commit; do not call that current LIVE unless the pin is explicitly updated and verified.

## No destructive workflow

- No reset, overwrite, mass-format or broad refactor without explicit evidence and scope.
- Preserve dirty/WIP state when working in an existing checkout.
- Do not reopen previously proven decisions without new evidence.
- Do not replace current data with older snapshots merely because they are easier to use.

## Minimum tests after application changes

Run:

```bash
node tools/check-release.mjs
```

For UI/DOM/interaction changes, add or run an actual browser test. Record exact viewport(s), network conditions and PASS/FAIL/UNKNOWN in `test-artifacts/`.

For source-adapter changes, verify source schema/version and at least one known fixture before changing the fallback registry.

## Documentation coupling

Update the relevant README, data-source docs, known limitations, changelog/release notes and status when behaviour changes. Do not document planned features as production.

## Release gate

A release is blocked by:

- app/release byte mismatch;
- JavaScript parse failure;
- duplicate DOM IDs;
- missing required legal/source docs;
- stale manifest/hash evidence;
- undocumented FAIL/ATTENTION state;
- a claimed runtime PASS without actual runtime evidence.
