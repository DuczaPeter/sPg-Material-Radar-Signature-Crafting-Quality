# sPg Material Radar Signature & Crafting Quality — AI / Developer Handoff

**Live site:** https://duczapeter.github.io/sPg-Material-Radar-Signature-Crafting-Quality/

---

# MAGYAR

## 1. Kötelező projektelv

A jelenlegi vizuális elrendezés és meglévő működés stabil alap. Új funkciót **a jelenlegi UI-ba kell beépíteni**, nem szabad redesignolni vagy lecserélni az egész oldalt.

Megőrzendő:

- radar layout és signature kapszulák;
- rarity színek;
- material kijelölés;
- részletpanel;
- Q500 / Q800 / Q900+ nézetek;
- component popover;
- responsive működés;
- a kompakt Quality-location blokk;
- a külön Refinery bonus oszlop.

## 2. Jelenlegi felépítés

A projekt fő fájlja: `index.html`.

A page tetején három kattintható adatforrás-link van:

- `BP · Star Citizen Wiki API`
- `Finomító · UEX`
- `Anyagminőség · SCMDB`

A felső címben nincs verziószám.

## 3. Material kártya jelenlegi sorrendje

Egy anyag megnyitásakor:

1. **Legjobb Quality lelőhelyek** — kompakt, keret nélküli blokk.
2. **Alacsony Quality · Q500 / Integrity**.
3. **Magas Quality · Q800 minimum / Q900+ funkcionális**.
4. **Radar**.
5. **Finomító bónusz**.

### Quality location megjelenítés

Rendszerenként egy sor:

`Stanton   ≤2.1%   Hely 1 · Hely 2 · Hely 3`

A helyek balról jobbra haladnak, nem egymás alatt.

Csak az a rendszer jelenik meg, amelyhez a snapshotban van adat.

### Refinery megjelenítés

Rendszerenként csak a **legmagasabb pozitív bonus** marad meg.

Ha több refinery ugyanazt a maximumot adja, mindegyik megmarad.

Negatív és alacsonyabb pozitív értékek nem jelennek meg.

Ha az anyagnak sehol nincs pozitív bonusza, a user-facing szöveg: `Nincs ismert bónusz.`

## 4. Adatstruktúrák

### `MATERIALS`

Material radar és crafting summary registry.

Fontos mezők:

- `name`
- `displayName`
- `q500`
- `qHigh`
- `rarity`
- `radarBase`
- `radarCount`
- `mining`
- `source`
- `order`

### `COMPONENT_REGISTRY`

Konkrét craftolható output komponensek.

Kapcsolati logika:

`material + component family + recipe slot -> exact output component`

### `QUALITY_LOCATION_REGISTRY`

A SCMDB screenshot snapshotból épített kurált registry.

Rendszerenként:

- `mode`
- `chance`
- `locations[]`
- `source`
- `note`

Aliasok:

- `Pressurized Ice -> Ice`
- `Quantanium -> Quantainium`
- `Saldynium (Ore) -> Saldynium`

### `REFINERY_BONUS_REGISTRY`

UEX exportból beágyazott refinery adatok.

A renderelő csak a rendszer legnagyobb pozitív bonuszát mutatja.

## 5. Quality szabály

TILOS material-név alapján globális Q500 / Q900 szabályt használni.

A döntés alapja mindig a konkrét blueprint slot modifierje.

- Integrity / HP-only slot: low/Q500 candidate.
- Functional modifier: high Quality, általában Q900+ cél.
- Exact minimum gate, például Q800: az exact minimumot meg kell őrizni, és nem szabad automatikusan Q900+-ként kezelni, ha a fölötte levő Quality nem ad extra hatást.

## 6. Ice szabály

User-facing név a radar/material sorban: **Ice**.

Internal crafting material: **Pressurized Ice**.

Ezt ne cseréld globálisan, mert a blueprint recipe matching Pressurized Ice névre támaszkodik.

## 7. Források

- BP / komponens: https://api.star-citizen.wiki/
- Refinery: https://uexcorp.space/
- Material Quality / locations: https://scmdb.net/?page=mine

Forrás- és jogi részletek: `LICENSE_NOTICE.md`.

## 8. SCMDB snapshot szabály

A Quality location registry a 2026-08-24-i képek alapján készült.

Minden materialnál rendszerenként csak:

- a legmagasabb látható százalék;
- és minden azonos maximumú hely

marad meg.

Ne adj hozzá alacsonyabb helyet csak azért, hogy több ajánlás legyen.

A `≤` jel maradjon meg, ha a forrásképen is szerepelt.

## 9. UEX refinery szabály

A rendszerben csak a legnagyobb pozitív yield bonusz látható.

Tie esetén minden max értékű refinery megmarad.

Ha egy rendszerben nincs pozitív bonusz, az a rendszer nem jelenik meg.

`Nincs ismert bónusz.` csak akkor jelenjen meg, ha az anyagnak egyik rendszerben sincs pozitív bonusza.

## 10. Jelenlegi ismert technikai tartozás

A Ship Weapon teljesítés még tartalmaz fejlesztési runtime fetch mechanizmust egy pinned StarCitizenWiki raw game-data commit felé.

GitHub Pages-en működik, de a korábban meghatározott strict release-gate szerint a végső offline release-ben ezt statikus, teljesen beágyazott registryre kell cserélni.

Ne állítsd késznek az offline release-t, amíg ez nincs lezárva.

## 11. Regresszió módosítás után

Mindig ellenőrizd:

- a radar elrendezését;
- több material egyidejű kijelölését;
- a Quality location blokk magasságát és sortörését;
- mobile/responsive viselkedést;
- Q500 / high filtereket;
- component popovert;
- refinery top bonus logikát;
- Ice alias működését;
- JS syntax hibákat;
- source linkeket;
- a címben ne jelenjen meg verzió.

---

# ENGLISH

## 1. Mandatory project principle

The current visual layout and working behavior are the stable baseline. New functionality must be **integrated into the existing UI**. Do not redesign or replace the application.

Preserve:

- radar layout and signature chips;
- rarity colors;
- material selection;
- detail panel;
- Q500 / Q800 / Q900+ views;
- component popover;
- responsive behavior;
- compact Quality-location block;
- separate Refinery bonus column.

## 2. Current structure

Main project file: `index.html`.

The header contains three clickable source links:

- `BP · Star Citizen Wiki API`
- `Finomító · UEX`
- `Anyagminőség · SCMDB`

No version number is shown in the main page title.

## 3. Current material-card order

When a material is expanded:

1. **Best Quality locations** — compact, no separate card border.
2. **Low Quality · Q500 / Integrity**.
3. **High Quality · Q800 minimum / Q900+ functional**.
4. **Radar**.
5. **Refinery bonus**.

### Quality-location rendering

One compact row per system:

`Stanton   ≤2.1%   Location 1 · Location 2 · Location 3`

Locations flow left-to-right, not vertically.

Only systems present in the curated snapshot are rendered.

### Refinery rendering

Per system, keep only the **highest positive bonus**.

If multiple refineries share that maximum, keep all tied refineries.

Negative and lower positive values are hidden.

If the material has no positive bonus anywhere, show `Nincs ismert bónusz.`

## 4. Data structures

### `MATERIALS`

Material radar and crafting summary registry.

Key fields:

- `name`
- `displayName`
- `q500`
- `qHigh`
- `rarity`
- `radarBase`
- `radarCount`
- `mining`
- `source`
- `order`

### `COMPONENT_REGISTRY`

Concrete craftable output components.

Relationship logic:

`material + component family + recipe slot -> exact output component`

### `QUALITY_LOCATION_REGISTRY`

Curated registry generated from the SCMDB screenshot snapshot.

Per system:

- `mode`
- `chance`
- `locations[]`
- `source`
- `note`

Aliases:

- `Pressurized Ice -> Ice`
- `Quantanium -> Quantainium`
- `Saldynium (Ore) -> Saldynium`

### `REFINERY_BONUS_REGISTRY`

Embedded refinery data built from the supplied UEX export.

The renderer exposes only the highest positive system bonus.

## 5. Quality rule

Do NOT apply a global Q500/Q900 rule based only on material name.

Classification must be based on the specific blueprint slot modifier.

- Integrity / HP-only slot: low/Q500 candidate.
- Functional modifier: high Quality, normally Q900+ target.
- Exact minimum gates such as Q800 must be preserved as exact gates and must not be relabeled Q900+ if Quality above the minimum provides no additional effect.

## 6. Ice rule

User-facing radar/material label: **Ice**.

Internal crafting material: **Pressurized Ice**.

Do not globally rename the internal material because blueprint recipe matching depends on Pressurized Ice.

## 7. Sources

- BP / components: https://api.star-citizen.wiki/
- Refinery: https://uexcorp.space/
- Material Quality / locations: https://scmdb.net/?page=mine

Source and legal details: `LICENSE_NOTICE.md`.

## 8. SCMDB snapshot rule

The Quality-location registry is derived from screenshots dated 2026-08-24.

For each material and system, retain only:

- the highest visible percentage;
- every location tied at that maximum.

Do not add lower-ranked locations merely to produce a longer recommendation list.

Preserve the `≤` symbol where it appears in the source snapshot.

## 9. UEX refinery rule

Only the highest positive yield bonus per system is user-facing.

Keep all ties at the maximum value.

Do not render a system with no positive bonus.

Show `Nincs ismert bónusz.` only when no positive bonus exists in any system for that material.

## 10. Known technical debt

Ship Weapon completion still contains a development runtime fetch against a pinned StarCitizenWiki raw game-data commit.

It works on GitHub Pages, but the established strict release gate requires a fully static embedded registry for a true offline single-file release.

Do not claim the offline release is complete until this is resolved.

## 11. Regression checklist

After every change verify:

- radar layout;
- multiple selected materials;
- Quality-location compact height and wrapping;
- mobile/responsive behavior;
- Q500 / high filters;
- component popover;
- refinery top-bonus logic;
- Ice alias behavior;
- JavaScript syntax;
- source links;
- no version number in the main title.
