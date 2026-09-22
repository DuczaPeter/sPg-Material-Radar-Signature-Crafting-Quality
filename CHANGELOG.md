# Changelog

The production HTML does not currently expose a semantic version number. Entries are therefore dated and tied to verified source state.

## 2026-09-22 — professional GitHub release layer

### Added

- bilingual root documentation (`README.hu.md`, `README.en.md`);
- `AGENTS.md`, `STATUS.md`, `VERSION.json`;
- `LICENSE`, `NOTICE.md`, `THIRD_PARTY_NOTICES.md`;
- `PRIVACY.md`, `SECURITY.md`;
- architecture, testing, release, source, limitation, roadmap and release-note documentation;
- GitHub issue and pull-request templates;
- static release gate and manifest generator;
- file inventory, package manifest and SHA-256 evidence;
- fallback/offline Chromium runtime evidence.

### Validation

- production `index.html` byte content preserved from GitHub `main` baseline;
- standalone and release HTML copies are byte-identical;
- STATIC release gate PASS;
- offline/fallback browser interaction harness PASS on desktop and mobile.

### Not changed

No business logic, radar formula, UI behaviour, data adapter or embedded application dataset was intentionally modified by this packaging release.

## 2026-09-11 — current application baseline

### Added / Changed

- `Minden hely / Felszín / Űr` topbar filtering replaced the old crafting-only toggle;
- LIVE SCMDB/Krovax mining integration and status handling;
- Lagrange display labels;
- dynamic Best Quality location registry.

### Fixed

- Best Quality percentage formula no longer multiplies by `groupProbability`;
- primary composition (`qualityScale = 1.0`) drives the verified location percentage calculation.

## 2026-08-30

- mobile radar readability and no-horizontal-scroll work;
- Target Mining mobile/desktop presentation regression work.

## 2026-08-27 audit line

- Quantum Drive crafting registry audit for the then-current 4.10 dataset;
- 57 Quantum Drive records and recipe-slot classification corrections.
