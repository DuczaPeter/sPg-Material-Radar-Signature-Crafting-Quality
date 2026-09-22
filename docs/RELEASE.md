# Release Process

## Release model

The application is a single-file web app. Packaging must not introduce a build system solely for appearance or release management.

Canonical entrypoint: `index.html`.

Standalone copies:

- `sPg_Material_Radar_Signature_Crafting_Quality.html`
- `release/sPg_Material_Radar_Signature_Crafting_Quality.html`

All three are expected to be byte-identical in this package.

## Release steps

1. Confirm the intended baseline and repository state.
2. Preserve WIP/dirty work; do not reset unrelated changes.
3. Make only the requested application changes.
4. Update affected documentation and changelog/release notes.
5. Run targeted tests.
6. Run `node tools/build-manifest.mjs`.
7. Run `node tools/check-release.mjs`.
8. If UI changed, run browser tests and store evidence.
9. Review `STATUS.md` for every ATTENTION/UNKNOWN item.
10. Package the repository without temp/cache/backup/secret files.

## PASS conditions

- canonical application clearly identified;
- release copies byte-identical where expected;
- syntax/static gate PASS;
- no hidden FAIL;
- known UNKNOWN/ATTENTION documented;
- source/legal docs current enough for the release;
- manifest hashes current;
- required runtime evidence present for behaviour actually claimed as runtime-verified.

## Release blockers

- JavaScript parse failure;
- canonical/release byte mismatch;
- stale hashes;
- missing legal/source files;
- undocumented source licence assumptions;
- claimed LIVE/runtime PASS without actual evidence;
- accidental business-logic/UI change during documentation-only packaging.

## Current packaging note

The 2026-09-22 professional package is a **documentation/release-control layer** around the existing application baseline. The production HTML bytes were intentionally preserved.
