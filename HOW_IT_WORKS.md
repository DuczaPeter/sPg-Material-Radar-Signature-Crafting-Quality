# Hogyan működik a program?

Ez a dokumentum a jelenlegi production működést írja le. A tervezett, még nem kész funkciókat külön a [ROADMAP.md](ROADMAP.md) tartalmazza.

## 1. Alapfelépítés

A projekt két azonos tartalmú production HTML fájlt tart fenn:

- `index.html`
- `sPg_Material_Radar_Signature_Crafting_Quality.html`

Mindkettő önálló single-file alkalmazás: a CSS és JavaScript a HTML-be van beépítve.

Nincs szükség build rendszerre, npm csomagokra vagy backend szerverre a használathoz.

## 2. Indulási folyamat

Oldalbetöltéskor:

1. betöltődnek a beépített fallback registryk;
2. a UI azonnal renderelhető;
3. megjelenik az SCMDB LIVE loading státusz;
4. a program lekéri a Krovax `latest.json` fájlt;
5. kiválasztja az aktuális LIVE mining fájlt;
6. validálja a verziót és a struktúrát;
7. előkészíti a LIVE radar patch-eket;
8. felépíti a dinamikus Quality-location registryt;
9. csak sikeres validáció után alkalmazza a LIVE adatot;
10. a UI újrarenderelődik.

Ha a folyamat bármelyik kritikus ponton elbukik, a beépített adatok maradnak aktívak.

## 3. Fő adatstruktúrák

### `MATERIALS`

A radarban megjelenő nyersanyagok fő registryje.

Többek között tartalmazza:

- belső nevet;
- display nevet;
- rarity kategóriát;
- radar base értéket;
- radar signal countot;
- mining kategóriát;
- Q500 / low Quality crafting usage listát;
- high Quality crafting usage listát.

A LIVE SCMDB adapter bizonyos 1:1 mining mezőket runtime felülírhat memóriában, de az eredeti beépített érték fallbackként megmarad.

### `QUALITY_LOCATION_REGISTRY`

A korábban ellenőrzött, beépített Best Quality fallback.

### `ACTIVE_QUALITY_LOCATION_REGISTRY`

A renderer ezt használja. Normál esetben a LIVE-ból épített registry és a fallback egyesített eredménye.

### `COMPONENT_REGISTRY`

A konkrét craftolható komponensek és recipe slotok registryje.

### `REFINERY_BONUS_REGISTRY`

A finomítói bónuszok beágyazott registryje.

## 4. SCMDB LIVE adapter

A runtime forrás:

`KrovaxCode/SCMDB_DATA/data/latest.json`

A program nem hardcode-olja az aktuális LIVE mining filename-t. A manifestből olvassa ki.

### Validációs lépések

- a LIVE descriptor létezzen;
- mining filename biztonságos mintára illeszkedjen;
- a `mining_data.version` egyezzen a manifest LIVE verziójával;
- legyen elég mineable element;
- legyen elég project-material match;
- a dinamikus location registry érjen el minimum elfogadott elemszámot.

A patch-eket csak a teljes előkészítés után alkalmazza, így félkész adat nem írja felül a fallbacket.

## 5. Material névnormalizálás

A forrás és a projekt nevei nem mindig azonosak.

A normalizáló réteg többek között kezeli:

- `Aluminium` ↔ `Aluminum`
- `Quantainium` ↔ `Quantanium`
- `Pressurized Ice` ↔ `Ice`
- `Beradon` ↔ `Beradom`
- `(Raw)` és `(Ore)` jelölések eltávolítását a matchhez.

A felhasználói UI-ban például az Ice továbbra is **Ice** néven jelenik meg.

## 6. Radar LIVE frissítés

A Krovax mineable element rekordjaiból a program a megfelelő materialhoz kapcsolja:

- `scanSignature` vagy a releváns ground signature;
- rarity;
- Quality band metadata.

A Ship Mining rarity a projekt radar signal count modelljére kerül leképezésre.

A ROC és FPS kategória saját projektkategória marad, hogy a meglévő vizuális elrendezés ne változzon meg.

## 7. Dinamikus Best Quality Location számítás

A `buildDynamicQualityLocationRegistryFromSCMDB()` a forrásból kapott:

- locations;
- mining groups;
- deposits;
- compositions;
- element metadata

alapján felépíti a projekt megszokott registry-formátumát.

### Primary-only szabály

Csak a composition azon része számít a Best Quality location százalékhoz, amelynél:

`qualityScale = 1.0`

A secondary részek, például `0.49` vagy `0.789`, ki vannak zárva.

### Képlet

`depositShare × primary maxPercent`

A `groupProbability` csak azt jelzi, hogy az adott mining group aktív-e; nem szorozza tovább a kijelzett material százalékot.

### Tiers

A helyek rendszerenként Quality érték szerint csoportosulnak.

- top tier jelenik meg;
- tie esetén minden azonos top hely megmarad;
- külön override esetén második tier is megmaradhat.

## 8. Saját override-ok

A LIVE adat nem ír felül minden projektlogikát vakon.

Megmarad például:

- Hurston second-tier szabály Aluminum, Tin és Beradom esetén;
- Savrilium Nyx second-tier Target Mining szabály;
- Aaron Halo külső route helper;
- névaliasok;
- Lagrange megjelenítési mapping.

## 9. Lagrange mapping

A SCMDB `Lagrange A–F` jelölését a UI a játékban használható L-pontokkal egészíti ki.

Példa:

`Lagrange D (ARC-L3, CRU-L5, MIC-L4)`

Ez megjelenítési mapping. Nem azt jelenti, hogy minden elméletileg ugyanabba a Lagrange-családba tartozó L-pont külön SCMDB ore rekorddal rendelkezik.

## 10. Minden hely / Felszín / Űr

A helyszűrő a radarlista és a Best Quality Locations megjelenítésére is hat.

### `Minden hely`

Nincs location category szűrés.

### `Felszín`

Csak olyan anyag marad a radarlistában, amelyhez van ismert felszíni Best Quality location.

### `Űr`

Csak olyan anyag marad, amelyhez van ismert űrbeli Best Quality location.

Az aktuális implementation ismert location-nevekre és névmintákra épít. Például:

- Breaker Stations → Űr;
- Aaron Halo → Űr;
- Lagrange → Űr;
- Ring → Űr;
- Belt → Űr;
- Asteroid / Deep Space → Űr;
- ismert bolygó/hold/barlang → Felszín.

A Krovax `locationType` mezőre épített automatikusabb és szigorúbb besorolás a roadmap része.

## 11. Crafting módok

A felső `mode` selector három állapotot kezel:

- radar;
- Q500 / Integrity;
- high Quality.

A sor renderer az aktuális módhoz nem tartozó anyagokat elrejti.

A korábbi külön `Csak crafting anyagok` toggle el lett távolítva. Radar módban alapból minden radaranyag megjelenik, a Felszín/Űr szűrő pedig a lelőhely alapján szűkít.

## 12. Komponens popup

A crafting usage szövegben ismert komponenscsalád esetén kattintható elem jelenik meg.

A lookup:

1. parsingolja a usage familyt és recipe slotot;
2. szűri a `COMPONENT_REGISTRY` rekordokat;
3. material + family + slot alapján keres;
4. megjeleníti a találatokat size/class/grade/meta adatokkal;
5. csak ellenőrzött URL-t ad linkként.

Hiányzó exact item URL-t a program nem talál ki.

## 13. Target Mining

A Target Mining külön kiválasztási állapotot használ.

- a material checkboxok csak nyitott Target Mining panelnél jelennek meg;
- minimum két anyag kell a közös location kereséshez;
- rendszer szerint külön szűrhető;
- a common location algoritmus a kiválasztott anyagok top tierjeit hasonlítja össze;
- több lefedett anyag előrébb kerül;
- tie esetén az átlagos source százalék rendezési segédérték.

## 14. Refinery logika

A refinery registryből rendszerenként:

1. kiszűri a nem pozitív bonusokat;
2. megkeresi a legnagyobb pozitív értéket;
3. megtartja az összes azonos top refineryt;
4. csak ezt rendereli.

## 15. Nyelvváltás

A HU/EN nyelv:

- reload nélkül vált;
- `localStorage` alatt megmarad;
- UI label szinten fordít;
- Star Citizen proper name-ek és komponensnevek nem kerülnek erőltetett fordításra.

## 16. Mobil radar

A mobil layout külön radar-geometriát használ.

Cél:

- nincs horizontális scrollbar;
- rövid sorok nem ütköznek;
- hosszú sorok kontrolláltan sűrűsödnek;
- Common / ROC / FPS hosszú sorok két sorban törhetnek;
- desktop radar-layout ettől külön marad.

A kapcsolódó regressziós dokumentumok a `docs/` mappában találhatók.

## 17. Hibaállapotok

A fő SCMDB állapotok:

- loading;
- live ready;
- live partial / location fallback;
- full fallback.

A cél mindig az, hogy hibás vagy hiányos külső adat esetén a tool inkább régebbi, ellenőrzött fallbackkel működjön, mint hogy találgasson.
