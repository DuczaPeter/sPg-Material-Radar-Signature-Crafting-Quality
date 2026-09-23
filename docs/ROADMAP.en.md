# Roadmap

Planned work only. These items must not be described as production features.

1. **Automatic source checks:** on open + roughly every four hours, with freshness check on tab return.
2. **Last-known-good cache:** fresh validated LIVE → last validated LIVE → embedded fallback.
3. **Schema-drift diagnostics:** detect renamed/new fields, new locationType values and missing required data.
4. **Source-driven Surface/Space:** `planet/moon → Surface`, `belt/lagrange/cluster → Space`, explicit Breaker/ring handling, unknown fail-closed.
5. **Automatic new mining locations** only when real mining data exist.
6. **Runtime discovery of new materials** only when required fields are validated.
7. **LIVE refinery refresh** after a dedicated source audit.
8. **Download only required source files**, avoiding the full `merged` payload where unnecessary.
9. **Refresh diagnostics** for user-facing and technical status.
10. **Target Mining + Surface/Space integration** with environment filtering before Quality ranking.
11. **Lagrange sub-point audit** so only source-backed L-points are displayed.
12. **Crafting component freshness audit** against current LIVE.

Every roadmap item requires a narrow scope, regression evidence and documentation update before becoming production.
