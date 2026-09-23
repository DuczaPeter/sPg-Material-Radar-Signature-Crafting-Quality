# Security Policy

## Reporting

For non-sensitive security problems, open a GitHub issue in the project repository and mark it clearly as a security-related report.

Do **not** paste passwords, API keys, tokens, cookies, personal data or exploit secrets into a public issue. If a report requires sensitive proof, open a minimal issue without the sensitive payload and request a private contact path from the repository owner.

Repository: https://github.com/DuczaPeter/sPg-Material-Radar-Signature-Crafting-Quality

## Security-relevant areas

- external JSON fetched from GitHub-hosted third-party repositories;
- DOM rendering of external/source-derived names and values;
- external links and target navigation;
- localStorage handling;
- future schema adapters and caches;
- release-package integrity.

## Current constraints

The app is client-side and intentionally contains no secrets. Never add API secrets to `index.html`, repository files, GitHub Pages or issue attachments.

External source data must be validated before replacing fallback registries. Unknown schema/content should fail closed to fallback/UNKNOWN rather than be guessed.

The release gate is a static integrity gate; it is not a substitute for browser security review or third-party availability monitoring.
