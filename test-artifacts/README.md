# Test Artifacts

This directory stores release evidence, not application source.

- `source-verification-summary.json` — source/repository facts checked during packaging.
- `runtime-fallback-summary.json` — Chromium fallback/offline interaction run with external network requests intentionally blocked.
- `static-release-gate-summary.json` — generated after the final static gate run.

A summary does not replace future raw logs when a more complex runtime/regression suite is introduced.
