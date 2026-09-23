# Release process

The persistent release authority is [`RELEASE_STANDARD.md`](RELEASE_STANDARD.md), currently pinned to **V4.1**. The current release-specific gate contract is [`RELEASE_CONTRACT.md`](RELEASE_CONTRACT.md).

## Release sequence

1. Record the Release Contract before modifying release-layer files.
2. Verify the canonical GitHub baseline and main artifact.
3. Preserve the application byte-for-byte when no application change is authorized.
4. Update only documentation, governance, visual evidence, test evidence and package metadata required by the release scope.
5. Run targeted static and browser/runtime validation.
6. Generate screenshots/visuals only from clearly identified sources; never call a mockup runtime evidence.
7. Regenerate inventory/manifest/checksums after final content settles.
8. Run `node tools/check-release.mjs` again against the final package.
9. Build the ZIP from repository-root contents with no outer nesting directory.
10. Hash the final ZIP separately.

## Current gate policy

See `docs/RELEASE_CONTRACT.md`. The current package requires baseline, artifact, static, secret, licence, version, byte-parity, runtime fallback, source-provenance, package, bilingual documentation and visual gates.

LIVE third-party browser end-to-end fetch and public-deployment pixel parity are optional validation in this package because the production HTML is unchanged and the release task only changes the repository/release layer. They remain explicit limitations and may not be represented as PASS.
