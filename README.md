sPg Material Radar Signature & Crafting Quality

Egy egyfájlos, böngészőből azonnal használható Star Citizen segédlet, amely egy helyen mutatja a craftinghoz szükséges alapanyagokat, azok Radar Signature értékeit, rarity színét és azt, hogy milyen hajókomponens mely alkatrészéhez használhatók.

A fő célja, hogy crafting közben gyorsan eldönthető legyen, melyik anyagból érdemes megtartani a magas Qualityt, és melyikhez elég a gyengébb készlet.

A jelenlegi szabály:

Q500 – HP / Integrity
Ha az adott alkatrész csak HP vagy Integrity értéket ad, a Q500 körüli anyag használható rá.

Q900+ – Funkcionális alkatrészek
Minden olyan alkatrészhez, amely nem kizárólag HP / Integrity értéket módosít, Q900+ alapanyagot érdemes használni.

A lista jelenleg Power Plant, Shield Generator, Cooler, Quantum Drive, Radar és Ship Weapon alkatrészeket kezel. Ugyanaz az anyag mindkét Quality csoportban szerepelhet, ha például egy Shellhez Q500-ban is használható, de egy másik funkcionális alkatrészhez Q900+ szükséges.

A Radar Signature nézet a bányászati radarlistához hasonló elrendezést használ. Az anyagok rarity szerint színkódoltak, a hozzájuk tartozó scan értékek pedig egy vízszintes radarvonalon jelennek meg.

Fő funkciók:

Q500 HP / Integrity és Q900+ funkcionális nézet.
Radar Signature értékek és rarity színek.
Radar sorrend szerinti megjelenítés.
Craftinghoz használt vagy teljes radaranyag-lista.
Egy anyagra kattintva nagyított részletes nézet.
Egyszerre több anyag is kiemelhető.
Megmutatja a komponens fajtáját és az alkatrészcsoportot.
Egyetlen önálló HTML fájl.
Nincs szükség telepítésre, szerverre vagy külső helyi fájlokra.
GitHub Pagesről közvetlenül futtatható.

A projekt célja nem az, hogy automatikusan azt mondja egy anyagról, hogy „jó” vagy „rossz”. A szükséges Qualityt mindig az dönti el, milyen alkatrészhez használjuk fel.

GitHub Description – English
sPg Material Radar Signature & Crafting Quality

A standalone single-file Star Citizen crafting reference that combines crafting material usage, Radar Signature values, rarity colors, component types, and component-part requirements in one interface.

Its main purpose is to quickly show which materials are worth keeping at high Quality and where lower-Quality stock can safely be used.

Current rule:

Q500 – HP / Integrity
If a component part only affects HP or Integrity, approximately Q500 material is considered sufficient.

Q900+ – Functional parts
Any component part that affects something other than HP / Integrity is treated as a high-quality requirement and should use Q900+ material.

The current dataset covers Power Plants, Shield Generators, Coolers, Quantum Drives, Radars and Ship Weapons. The same material can appear in both Quality groups when it is used for both structural and functional component parts.

The Radar Signature view follows the layout of the in-game mining radar reference. Materials are color-coded by rarity and their possible scan-signature values are displayed along a horizontal radar line.

Main features include Q500 and Q900+ crafting views, Radar Signature values, rarity-based colors, radar-order sorting, expandable material details, multi-selection highlighting, component type and part-group information, and a completely standalone HTML design.

No installation, build process or local dependencies are required. The file can be hosted directly through GitHub Pages.

The important principle behind the tool is simple: material Quality is not determined by the material name itself. It depends on the component part where that material will be used.
