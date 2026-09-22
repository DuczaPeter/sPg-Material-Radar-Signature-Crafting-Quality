# Known Limitations

## ATTENTION

### Surface / Space classifier

Current production classification is name/pattern based. An unknown location can fall through to Surface. This is not a complete source-driven `locationType` implementation.

### Lagrange mapping

The `Lagrange A–F` presentation map can show several ARC/CRU/HUR/MIC L-points. This is a display mapping, not proof that every listed sub-point has identical ore distribution. It should be replaced/verified with source-driven mapping.

### Target Mining + place filter

The topbar `Surface / Space` filter does not directly filter Target Mining result locations.

### Refresh cadence

There is no four-hour periodic refresh yet. LIVE mining is checked on page load.

### Last-known-good cache

Not implemented. Source/network failure falls back to the embedded dataset.

### Refinery

Refinery bonuses are embedded, not a LIVE UEX API feed.

### Crafting/component freshness

Several component registry entries carry 4.9.0 or 4.10.0 `sourceVersion` markers. The ship-weapon runtime loader is also pinned to a 4.10.0 commit. Do not describe those data as automatically current 4.10.1 LIVE.

### New materials

The LIVE mining adapter does not create a complete new UI material row for every unknown source material. That requires explicit schema/UX/crafting/refinery handling.

## UNVERIFIED in this release run

- end-to-end LIVE browser fetch;
- current-LIVE correctness of every crafting recipe;
- ore availability of every displayed Lagrange sub-point;
- pixel-level public deployment parity.
