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

### Kurátori szabály — Hurston nem maradhat egyedüli top ajánlás

- Hurston **nincs kizárva**.
- Alapesetben továbbra is csak a rendszeren belüli legmagasabb Quality-tier és annak összes holtversenyes helye jelenik meg.
- Speciális szabály: ha Stantonban **Hurston az egyetlen hely az első Quality-tieren**, akkor az első tier mellett a **következő legjobb Quality-tier is megjelenik**, és azon a tieren minden holtversenyes hely megmarad.
- Ez két ranking szintet jelent, nem két önkényesen kiválasztott helyet; így tie esetén nem dobunk el azonos értékű helyet.
- Jelenlegi képalapú példák: Aluminum: `Hurston ≤3.0%` + `Magda / Ita ≤2.4%`; Tin: `Hurston ≤6.9%` + `Ita ≤5.5%`; Beradom: `Hurston ≤64.0%` + `Cellin / Wala ≤56.0%`.
- Frissítéskor ezt a szabályt materialtól függetlenül alkalmazd a Stanton ajánlásra, ha a feltétel teljesül.

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

### Curated rule — Hurston must not remain the sole top recommendation

- Hurston is **not excluded**.
- By default, keep only the highest Quality tier per system and all locations tied on that tier.
- Special rule: if **Hurston is the only location on the top Stanton Quality tier**, also show the **next-best Quality tier**, preserving every tie on that second tier.
- This means two ranking tiers, not two arbitrarily selected locations; equal second-tier locations must not be dropped.
- Current screenshot-derived examples: Aluminum: `Hurston ≤3.0%` + `Magda / Ita ≤2.4%`; Tin: `Hurston ≤6.9%` + `Ita ≤5.5%`; Beradom: `Hurston ≤64.0%` + `Cellin / Wala ≤56.0%`.
- Apply this rule independently of material during future Stanton refreshes whenever the condition is met.

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


## Nyelvi működés

- Az oldal egyetlen HTML-ben tartalmazza a magyar és angol felületet.
- Alapértelmezett nyelv: magyar.
- A topbar `Magyar / English` választója azonnal vált, oldal-újratöltés nélkül.
- A választott nyelv `localStorage` alatt megmarad.
- Új user-facing funkciónál kötelező mind a magyar, mind az angol UI-szöveget hozzáadni az `I18N` registryhez.
- Star Citizen item-, material-, location-, blueprint family- és recipe-slotneveket nem kell erőltetetten lefordítani; canonical játéknevek maradnak.


## Language behavior

- The page contains both Hungarian and English UI in the same HTML file.
- Default language: Hungarian.
- The topbar `Magyar / English` selector switches instantly without a page reload.
- The selected language is persisted in `localStorage`.
- Every new user-facing feature must add both Hungarian and English UI strings to the `I18N` registry.
- Star Citizen item, material, location, blueprint-family, and recipe-slot names remain canonical game terms rather than being force-translated.


## Target Mining / Célzott bányászat

### HU
- Új, additív funkció; a meglévő V25 radar/layout nem lett áttervezve.
- A felhasználó a `Célzott bányászat` mód megnyitása után közvetlenül a nagy radarlistában, az anyagnév melletti checkboxszal jelöli ki vagy veszi ki az anyagokat. Nincs külön material picker/add workflow.
- Opcionálisan rendszert szűrhet: Stanton, Pyro, Nyx vagy minden rendszer.
- Forrás kizárólag a beágyazott `QUALITY_LOCATION_REGISTRY` / SCMDB snapshot.
- A közös helykereső csak olyan helyet listáz, ahol legalább 2 kiválasztott anyag szerepel a kurált top Quality helyek között.
- Rangsor: több lefedett kiválasztott anyag előrébb; azonos lefedettségnél a snapshot százalékok átlaga csak rendezési segédérték, nem új gameplay-metrika. A UI a valódi anyagonkénti százalékokat mutatja.
- A `tiers` mezőkkel rendelkező speciális Stanton/Hurston szabály (pl. Aluminum, Tin, Beradom) mindkét megtartott tiert figyelembe veszi.
- `Csak ezeket a radaron` esetén a radar a kiválasztott anyagokra szűkül, és ez felülírja a `Csak crafting anyagok` láthatósági szűrőt, hogy például Aluminum is megjelenhessen. Desktopon a becsukott Target Mining sorok radar-kapszulái ugyanazt a nagy méretet használják, mint a kinyitott/kijelölt sorok; mobilon külön kompakt méretezés marad az átfedések elkerülésére.
- A teljes radar ugyanazzal a gombbal állítható vissza.

### EN
- Additive feature; the existing V25 radar/layout was not redesigned.
- After opening `Target Mining`, users select or deselect materials directly in the main radar list with the checkbox next to each material name. There is no separate material picker/add workflow.
- Users can optionally restrict the search to Stanton, Pyro, Nyx, or all systems.
- The only source is the embedded `QUALITY_LOCATION_REGISTRY` / SCMDB snapshot.
- Common-location search only lists places where at least 2 selected materials occur among the curated top-Quality locations.
- Ranking: higher selected-material coverage first; on ties, the average snapshot percentage is used only as a sorting helper, not as a new gameplay metric. The UI displays the actual per-material percentages.
- Special Stanton/Hurston `tiers` entries (for example Aluminum, Tin, Beradom) contribute all preserved tiers.
- `Show only these on radar` filters the radar to the selected materials and intentionally overrides the `Crafting materials only` visibility filter so materials such as Aluminum can remain visible. On desktop, collapsed Target Mining rows use the same large radar-capsule sizing as expanded/selected rows; mobile keeps a separate compact size to avoid overlap.
- The same button restores the full radar.


## Aaron Halo route helper / Aaron Halo útvonal-segéd

HU: A user-facing `Aaron Halo` helynév kattintható, ha a Quality-location vagy Target Mining eredményekben jelenik meg. A link konstansa: `AARON_HALO_ROUTE_URL`, cél: `https://cstone.space/resources/knowledge-base/36-refinery-to-aaron-halo-mining-routes`. Új ablakban nyíljon (`target="_blank"`, `rel="noopener noreferrer"`). Ezt a helper funkciót későbbi refaktor során meg kell őrizni.

EN: The user-facing `Aaron Halo` location name is clickable when shown in Quality-location or Target Mining results. The link constant is `AARON_HALO_ROUTE_URL`, targeting `https://cstone.space/resources/knowledge-base/36-refinery-to-aaron-halo-mining-routes`. Open it in a new tab (`target="_blank"`, `rel="noopener noreferrer"`). Preserve this helper during later refactors.

<!-- QDRIVE_AUDIT_410 -->
## HU — Quantum Drive registry állapot

- Auditált LIVE dataset: `4.10.0-LIVE.12519617` / `f6a2b29e77aaa2c824aa4fd1c0478c8058c69fca`.
- A Quantum Drive registry **57 creation blueprint** rekordot tartalmaz S1–S4 méretben.
- A korábbi 9 rekordos részleges registry **nem használható többé forrásként**.
- Kötelező regression példa: `Agricium → Quantum Drive → Case` alatt az **Agni** is meg kell jelenjen.
- Javított material-slot coverage: `Corundum → Quantum Drive → Containment Matrix`, `Titanium → Quantum Drive → Case`.
- Quality szabály: Case = Integrity / Q500; Injector Nozzles = Quantum Speed / magas Q; Containment Matrix = Quantum Fuel Burn / magas Q.
- S4 különleges rekordok: Allegro (890 Jump) és Frontline (Idris); mindkettő creation blueprint, jelenlegi LIVE reward pool üres.
- Teljes rekordlista: `QUANTUM_DRIVE_AUDIT_4.10.md`.

## EN — Quantum Drive registry status

- Audited LIVE dataset: `4.10.0-LIVE.12519617` / `f6a2b29e77aaa2c824aa4fd1c0478c8058c69fca`.
- The Quantum Drive registry contains **57 creation-blueprint records** covering S1–S4.
- The previous partial 9-record registry must **not** be reused as an authoritative source.
- Mandatory regression example: **Agni** must appear under `Agricium → Quantum Drive → Case`.
- Fixed material-slot coverage: `Corundum → Quantum Drive → Containment Matrix`, `Titanium → Quantum Drive → Case`.
- Quality rule: Case = Integrity / Q500; Injector Nozzles = Quantum Speed / high Q; Containment Matrix = Quantum Fuel Burn / high Q.
- S4 special records: Allegro (890 Jump) and Frontline (Idris); both are creation blueprints with empty reward pools in the current LIVE dataset.
- Full record list: `QUANTUM_DRIVE_AUDIT_4.10.md`.
