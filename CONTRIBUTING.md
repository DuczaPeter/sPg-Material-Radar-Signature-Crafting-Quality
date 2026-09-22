# Contributing

Keep changes narrow, evidence-based and reversible.

## Before changing code

1. Read `AGENTS.md`, `STATUS.md` and the relevant docs.
2. Identify the exact requested scope.
3. Preserve the canonical single-file artifact model.
4. Do not refactor unrelated working code.
5. Do not change data formulas, Quality semantics, UI layout or source precedence without explicit scope and evidence.

## Application changes

When `index.html` changes:

- update the standalone root copy and `release/` artifact intentionally;
- keep intended copies byte-identical;
- update documentation affected by the change;
- add/extend a regression check for the changed behaviour;
- run `node tools/check-release.mjs`;
- run a browser test when UI/DOM/interaction behaviour changed;
- record evidence in `test-artifacts/`.

## Documentation-only changes

Do not rewrite the working application. Verify the canonical app hash remains unchanged.

## Data/source changes

- preserve source attribution and source version where available;
- do not infer missing values;
- mark unknown data as UNKNOWN / UNVERIFIED / ATTENTION / NO DATA;
- do not silently replace a proven formula with a different interpretation;
- do not bundle third-party datasets unless redistribution rights are clear.

## Pull requests

A PR should state scope, changed files, evidence, tests, known unknowns and whether the production artifact bytes changed. Avoid unrelated cleanup in the same PR.
