# sPg Material Radar Signature & Crafting Quality

> Magyar leírás lent, English section follows.

**Élő oldal / Live page:** https://duczapeter.github.io/sPg-Material-Radar-Signature-Crafting-Quality/

---

## Magyar

### Mi ez?

Az **sPg Material Radar Signature & Crafting Quality** egy Star Citizen rajongói segédoldal, amely egy helyen kapcsolja össze:

- a bányászható nyersanyagok radar signature értékeit;
- a crafting Quality használatot: Q500 / Integrity, Q800 minimum, illetve Q900+ funkcionális cél;
- a material → blueprint slot → konkrét craftolható komponens kapcsolatokat;
- a legjobb, képalapú Quality-lelőhelyeket rendszerenként;
- a legjobb pozitív refinery yield bónuszt rendszerenként.

Az oldal célja, hogy gyorsan megválaszolja ezt a három kérdést:

1. **Mit látok a radaron?**
2. **Milyen Quality kell ebből az anyagból craftinghoz?**
3. **Hol érdemes keresni és hol érdemes finomítani?**

### Használat

1. Kattints egy nyersanyagra a radarlistában.
2. A kinyíló részben először a **Legjobb Quality lelőhelyek** láthatók, rendszerenként csak a képeken bizonyított legmagasabb eséllyel és a holtversenyes helyekkel.
3. Alatta látható, mely crafting slotokhoz elég az alacsonyabb Quality, és mely funkcionális slotokhoz érdemes magas Qualityt használni.
4. A komponenscsalád nevére kattintva vagy rámutatva megjelennek a konkrét craftolható komponensek.
5. A **Radar** rész mutatja a signature értékeket.
6. A **Finomító bónusz** rész rendszerenként csak a legnagyobb pozitív bónuszt adó finomítót vagy azonos maximum esetén a holtversenyes finomítókat mutatja.

### Fontos Quality-szabály

A Quality nem material-szinten van globálisan besorolva. Ugyanaz az anyag különböző blueprint slotokban eltérő célt szolgálhat.

Példa: egy anyag **Shell** slotban csak Integrity / HP statot módosíthat, miközben ugyanaz az anyag egy **Field Array** vagy más funkcionális slotban tényleges teljesítményt módosít. A besorolás mindig a konkrét blueprint slot alapján történik.

### Ice névkezelés

A felhasználó a radar/material listában **Ice** nevet lát. A crafting recipe belső neve továbbra is **Pressurized Ice**, hogy a blueprint-kapcsolatok pontosak maradjanak.

### Adatforrások

- **Blueprint / komponens adatok:** https://api.star-citizen.wiki/
- **Refinery bónuszok:** https://uexcorp.space/
- **Anyagminőség / lelőhely snapshot:** https://scmdb.net/?page=mine

A weboldal tetején ezek kattintható adatforrás-linkként is megjelennek.

### Adatminőség

- A blueprint kapcsolatokhoz Star Citizen Wiki API / raw game-data alapú ellenőrzés készült.
- A refinery adatok a projektbe adott UEX exportból kerültek beágyazásra.
- A Quality-lelőhely lista a 2026-08-24-i SCMDB képernyőképekből készült kurált snapshot. Rendszerenként csak a képen látható legnagyobb százalékot és annak holtversenyes helyeit tartja meg.
- A SCMDB százalék jelentését a projekt nem értelmezi át; a képen látható értéket jeleníti meg.

### Jogi és forráskezelési megjegyzés

Ez egy **nem hivatalos Star Citizen rajongói projekt**, nem áll kapcsolatban és nincs jóváhagyva a Cloud Imperium Games / Roberts Space Industries által. A hivatalos oldal: https://robertsspaceindustries.com/

A Star Citizen Wiki API nyilvános projektben forrásmegjelölést kér. Az API szoftverkódja MIT licenc alatt érhető el, de az alatta használt Star Citizen game data külön jogi réteg, és a `scunpacked-data` repositoryhoz a jelenlegi ellenőrzés alapján nincs egyértelmű, általános újraterjesztési licenc megadva.

A UEX Terms személyes, nem kereskedelmi használatot ír elő, és jelzi, hogy az adatok közösségi eredetűek és nem garantáltak. A SCMDB esetében a jelenlegi ellenőrzés során nem találtunk egyértelmű, nyilvános újraterjesztési licencet; ezért az adatforrás mindig névvel és linkkel van feltüntetve, a projekt pedig nem kereskedelmi rajongói felhasználásra készült.

Részletesebb megjegyzés: [LICENSE_NOTICE.md](LICENSE_NOTICE.md)

### GitHub Pages

A repository gyökerében az `index.html` legyen a publikált oldal. GitHub Pages esetén a repo root vagy a megfelelő Pages branch mappa közvetlenül kiszolgálható.

### Jelenlegi technikai megjegyzés

A HTML egyetlen fájlban tartalmazza a teljes UI-t, CSS-t és a fő adatregistryket. A Ship Weapon részben jelenleg még van egy fejlesztési runtime fetch mechanizmus egy rögzített StarCitizenWiki game-data commit felé. Ez GitHub Pages-en működik, de **szigorú offline single-file release előtt statikusan be kell ágyazni a teljes validált Ship Weapon registryt**.

---

## English

### What is this?

**sPg Material Radar Signature & Crafting Quality** is an unofficial Star Citizen fan-made helper that connects, in one interface:

- mining material radar signature values;
- crafting Quality usage: Q500 / Integrity, Q800 minimum and Q900+ functional targets;
- material → blueprint slot → concrete craftable component mappings;
- best screenshot-verified Quality locations per star system;
- best positive refinery yield bonus per star system.

Its goal is to answer three practical questions quickly:

1. **What am I seeing on radar?**
2. **What Quality do I need for crafting?**
3. **Where should I mine and where should I refine it?**

### Usage

1. Click a material in the radar list.
2. The expanded panel starts with **Best Quality locations**. For each system, only the highest screenshot-visible chance and tied locations are retained.
3. Below that, crafting slots are split into low-Quality / Integrity use and high-Quality functional use.
4. Hover or click a component family name to see concrete craftable components.
5. The **Radar** section shows signature values.
6. The **Refinery bonus** section shows only the highest positive bonus refinery per system, keeping ties when multiple refineries share the same maximum.

### Important Quality rule

Quality is not classified globally by material name. The same material may be low-priority in one blueprint slot and high-priority in another. Classification is based on the **specific blueprint slot and its gameplay modifier**.

### Ice naming

The user-facing radar/material label is **Ice**. Internally, crafting recipes still use **Pressurized Ice** so blueprint matching remains accurate.

### Data sources

- **Blueprint / component data:** https://api.star-citizen.wiki/
- **Refinery bonuses:** https://uexcorp.space/
- **Material Quality / location snapshot:** https://scmdb.net/?page=mine

The page also exposes these as clickable source links in the header.

### Data provenance

- Blueprint relationships are based on Star Citizen Wiki API / extracted game-data verification.
- Refinery data is embedded from the UEX export supplied to the project.
- Quality-location data is a curated snapshot built from SCMDB screenshots dated 2026-08-24. For each material and system, only the highest screenshot-visible percentage and tied locations are retained.
- The project does not reinterpret the meaning of the SCMDB percentage; it displays the value shown by the source snapshot.

### Legal and attribution note

This is an **unofficial Star Citizen fan project** and is not affiliated with or endorsed by Cloud Imperium Games / Roberts Space Industries. Official site: https://robertsspaceindustries.com/

The Star Citizen Wiki API asks public projects to credit the API. Its application source code is MIT-licensed, while underlying extracted Star Citizen game data is subject to separate rights and the current `scunpacked-data` repository does not clearly publish a broad redistribution license.

UEX Terms restrict website use to personal, non-commercial purposes and describe its data as community-maintained without warranty. No clear public redistribution license for SCMDB was identified during the current review, so the project keeps visible attribution and links and is intended as a non-commercial fan tool.

See [LICENSE_NOTICE.md](LICENSE_NOTICE.md) for the detailed notice.

### GitHub Pages

Keep `index.html` at the repository root for GitHub Pages publishing.

### Current technical note

The HTML contains the UI, CSS and main data registries in one file. The Ship Weapon section still includes a development-time runtime fetch against a pinned StarCitizenWiki game-data commit. This works on GitHub Pages, but a strict offline single-file release still requires the complete validated Ship Weapon registry to be embedded statically.
