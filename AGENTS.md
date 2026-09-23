# AGENTS.md

## Project goal

Maintain **sPg Material Radar Signature & Crafting Quality** as a trustworthy Star Citizen mining/crafting helper while preserving the accepted single-file application architecture.

## Canonical baseline

- Repository: `DuczaPeter/sPg-Material-Radar-Signature-Crafting-Quality`
- Branch: `main`
- Source-verified repository commit: `a364bfba7127f9e9e68d84d38ef0eba81a8b1063`
- Canonical application: `index.html`
- Canonical Git blob: `6be14d6c299b8e9efc1dd48d183b2b0eebd9cb30`
- Canonical SHA-256: `28be33eae5f2b53f375e52003a7af282ff8b97243fdb14ee0b28b531be9402f4`

## Authoritative files

- `index.html` — production application and source of truth for application behaviour.
- `VERSION.json` — package/baseline identity.
- `STATUS.md` — current concise state.
- `docs/ARCHITECTURE.md` — architecture/data flow.
- `docs/DATA_SOURCES.hu.md` / `.en.md` — source precedence and freshness.
- `docs/TESTING.md` — validation model.
- `docs/RELEASE_CONTRACT.md` — current release gate contract.
- `THIRD_PARTY_NOTICES.md` — third-party source/legal status.

## Critical invariants

1. Keep the application self-contained in one HTML file; do not introduce a build system merely for presentation.
2. Never invent Star Citizen data, locations, Quality effects, source licences or validation results.
3. Preserve embedded fallback behaviour when changing LIVE source adapters.
4. Best Quality percentage rule: `depositShare × primary maxPercent`; `groupProbability` is not a display multiplier.
5. Primary composition means `qualityScale = 1.0`; secondary parts must not be treated as primary in that calculation.
6. `Ice` remains the user-facing mining name where crafting internals may use `Pressurized Ice`.
7. Preserve documented aliases such as Quantanium/Quantainium.
8. Mobile radar must not regain horizontal page scrolling.
9. Mobile-only fixes must not silently redesign desktop behaviour.
10. `Minden hely / Felszín / Űr` is currently partly name/pattern based; do not describe it as fully source-driven.
11. Breaker Stations and ring locations are treated as Space by project rule.
12. Target Mining and the topbar place filter are not yet fully coupled.
13. Refinery bonus data is currently embedded UEX-derived data, not a LIVE UEX runtime feed.
14. Ship-weapon blueprints use a pinned `scunpacked-data` commit; do not call that current LIVE without an explicit verified update.

## Development workflow

- Preserve dirty/WIP state.
- No reset, force overwrite, mass-format or unrelated refactor without explicit scope and evidence.
- Do not reopen accepted decisions without new evidence.
- Use targeted tests appropriate to the changed scope.
- UI/DOM/interaction/responsive changes require a browser test.
- Source-adapter changes require source-schema/version verification and a known fixture.
- Update documentation and regression checks together with behaviour changes.

## Release work

For full GitHub release or release-package work, use:

`docs/RELEASE_STANDARD.md`

Do not load or apply the full release workflow during ordinary development tasks. The project-local standard is the persistent authority unless the user's current explicit instruction overrides it.
