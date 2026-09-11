# sPg Material Radar Signature & Crafting Quality

Star Citizen bányászati és crafting segédoldal egyetlen HTML fájlban.

**Élő oldal:** https://duczapeter.github.io/sPg-Material-Radar-Signature-Crafting-Quality/

Az oldal célja, hogy egy helyen legyen látható:

- milyen nyersanyag tartozhat egy adott radar signature-höz;
- hol érdemes az adott anyagot keresni Stanton, Pyro és Nyx rendszerben;
- a legjobb Quality-lelőhelyek közül melyek vannak **Felszínen** és melyek **Űrben**;
- craftingnál mely felhasználásokhoz elég a Q500 / Integrity, és melyekhez érdemes Q800–Q900+ anyagot használni;
- milyen konkrét hajókomponensek használják az adott anyagot;
- mely finomítók adnak pozitív bónuszt;
- több kiválasztott anyaghoz hol található közös, jó bányászati hely.

> Ez egy nem hivatalos, közösségi Star Citizen fan tool. Nem áll kapcsolatban a Cloud Imperium Grouppal.

---

## Tartalom

- [Mit tud az oldal?](#mit-tud-az-oldal)
- [Gyors használat](#gyors-használat)
- [Minden hely / Felszín / Űr](#minden-hely--felszín--űr)
- [Radar Signature](#radar-signature)
- [Best Quality Locations](#best-quality-locations)
- [Crafting Quality](#crafting-quality)
- [Célzott bányászat](#célzott-bányászat)
- [Finomítói bónuszok](#finomítói-bónuszok)
- [LIVE SCMDB adat és fallback](#live-scmdb-adat-és-fallback)
- [Adatforrások](#adatforrások)
- [Fájlstruktúra](#fájlstruktúra)
- [Korlátok és fontos megjegyzések](#korlátok-és-fontos-megjegyzések)
- [További dokumentáció](#további-dokumentáció)
- [Licenc és jogi megjegyzések](#licenc-és-jogi-megjegyzések)

---

## Mit tud az oldal?

### Radar Signature lista

A nyersanyagokhoz tartozó lehetséges radar signature értékeket vizuális radarlistában mutatja. A radar nem csak crafting anyagokat mutat: a korábbi `Csak crafting anyagok` kapcsoló kikerült, így alapból minden ismert radaranyag látható.

### Három fő nézet

A felső legördülőből választható:

- **Radar sorrend** – minden radaranyag a megszokott sorrendben;
- **Alacsony Quality · Q500 / Integrity** – azok az anyagok, amelyeknek van alacsony Quality / Integrity jellegű crafting felhasználása;
- **Magas Quality · Q800 minimum / Q900+ funkcionális** – azok az anyagok, amelyek magas Qualityből profitáló vagy minimum Qualityt kérő crafting felhasználásban szerepelnek.

### Lelőhelyszűrés

A korábbi crafting-szűrő helyén három gomb található:

- **Minden hely**
- **Felszín**
- **Űr**

A kiválasztott szűrő nem csak a lelőhely-szöveget változtatja: a radarlistából is automatikusan eltűnnek azok az anyagok, amelyekhez a kiválasztott kategóriában nincs ismert Best Quality lelőhely.

### Részletes anyagkártya

Egy nyersanyagra kattintva megjelenik:

1. Best Quality Locations;
2. Low Quality / Q500 / Integrity crafting felhasználás;
3. High Quality / Q800–Q900+ funkcionális crafting felhasználás;
4. radaradat;
5. refinery bonus.

A komponenscsaládok kattinthatók, és ahol van ellenőrzött komponenslista, konkrét komponensek jelennek meg.

### HU / EN

A felület magyarul és angolul is használható. A választott nyelv a böngésző `localStorage` tárában megmarad.

---

## Gyors használat

1. Nyisd meg az élő oldalt.
2. Hagyd a nézetet **Radar sorrend** állásban, ha radarjel alapján keresel.
3. Válassz **Minden hely**, **Felszín** vagy **Űr** szűrőt.
4. Kattints egy nyersanyagra.
5. A lenyíló részben nézd meg a Best Quality lelőhelyeket, a crafting Quality-besorolást és a refinery bónuszt.
6. Ha több anyagot keresel egyszerre, nyisd meg a **Célzott bányászat** panelt, jelöld ki az anyagokat, majd nézd meg a közös top helyeket.

---

## Minden hely / Felszín / Űr

A szűrés célja, hogy ne ugyanabban a listában kelljen végignézni a bolygó/hold felszíni és az űrbeli ship-mining lehetőségeket.

### Felszín

Ide kerülnek a bolygókon, holdakon és ismert felszíni/barlangi helyeken szereplő lelőhelyek.

### Űr

Ide kerülnek többek között:

- Lagrange-területek;
- Aaron Halo;
- asteroid beltek és asteroid clusterek;
- Deep Space Asteroids;
- ringek, például Glaciem Ring és Terminus Ring;
- Breaker Stations helyek.

### Lagrange feliratok

A puszta `Lagrange A–F` név helyett a program a Star Citizenben használható konkrét L-pontokat is kiírja, például:

- `Lagrange A (HUR-L1, HUR-L4)`
- `Lagrange B (ARC-L5, CRU-L4, MIC-L3)`
- `Lagrange C (HUR-L5, MIC-L1, MIC-L2, MIC-L5, CRU-L3)`
- `Lagrange D (ARC-L3, CRU-L5, MIC-L4)`
- `Lagrange E (CRU-L1, CRU-L2, HUR-L3)`
- `Lagrange F (HUR-L2, ARC-L1, ARC-L2, ARC-L4)`

**Fontos:** a jelenlegi Felszín/Űr besorolás egy ismert location-nevekre és névmintákra épülő megjelenítési réteg. A forrás `locationType` mezőjére épülő teljesen automatikus besorolás a roadmap része.

---

## Radar Signature

A radaradat elsődleges LIVE forrása a KrovaxCode által fenntartott SCMDB public mirror aktuális `mining_data` fájlja.

A program az SCMDB LIVE adatokból jelenleg közvetlenül tudja frissíteni többek között:

- radar base signature;
- ship-mining rarity;
- Quality band metadata;
- ezekből a projekt meglévő radar-kiosztásához szükséges értékeket.

Ha a LIVE adat nem érhető el vagy nem megy át a validáción, a beépített fallback értékek maradnak használatban.

---

## Best Quality Locations

A Krovax mining adat nem kész, sPg-formátumú Best Quality listát ad. A program ezért futás közben építi fel a saját registryjét.

A Quality-location számítás lényege:

`depositShare × primary maxPercent`

ahol:

- `depositShare = deposit.relativeProbability / az adott mineable group teljes relativeProbability súlya`;
- csak a composition **primary**, `qualityScale = 1.0` része számít;
- a `qualityScale = 0.49` és `0.789` secondary részek nem kerülnek bele;
- a `groupProbability` nem szorzója a kijelzett material-százaléknak.

A top hely rendszerenként kerül kiválasztásra. Azonos értéknél minden holtversenyes hely megmarad.

### Ellenőrzött példa

Hurston esetén a LIVE adatból:

- Ouratite: `10 / 100 × 6.82 = 0.682%` → **≤0.7%**
- Quantainium: `2 / 100 × 11.7 = 0.234%` → **≤0.2%**

Ez egyezik a korábbi SCMDB screenshotból ellenőrzött fallback értékekkel.

### Saját, szándékos override-ok

A projekt megtart néhány saját szabályt:

- Aluminum / Stanton: egyedüli Hurston top esetén a következő tier is látszik;
- Tin / Stanton: ugyanez;
- Beradom / Stanton: ugyanez;
- Savrilium / Nyx: Target Mining miatt a második legjobb Nyx tier is megmarad;
- Aaron Halo kattintható útvonal-segéd linket kap;
- névaliasok: például Quantanium/Quantainium, Ice/Pressurized Ice, Aluminum/Aluminium.

---

## Crafting Quality

A projekt nem kezeli úgy a Qualityt, mintha az egész nyersanyagra egyetlen általános szabály lenne. A besorolás a blueprint recipe slot szerepétől függ.

### Alacsony Quality / Q500

Ide kerülnek az Integrity/HP jellegű vagy olyan recipe slotok, amelyeknél a projekt ellenőrzött adatai alapján a magasabb Quality nem a fő cél.

### Magas Quality

Ide kerülnek:

- minimum Qualityt kérő crafting felhasználások;
- funkcionális alkatrészek, amelyeknél a magasabb alapanyag-Quality a cél;
- a felületen ezeknél általában **Q900+ ajánlott** jelölés szerepel.

A projekt nem állít pontos stat-hatást olyan slothoz, ahol azt blueprint/stat preview vagy megbízható forrás nem igazolja.

---

## Célzott bányászat

A **Célzott bányászat** akkor hasznos, ha egyszerre több anyagot szeretnél keresni.

Működés:

1. nyisd meg a panelt;
2. jelöld ki a nyersanyagokat közvetlenül a radarlistában;
3. legalább két anyag szükséges a közös hely kereséséhez;
4. opcionálisan szűrj Stanton / Pyro / Nyx rendszerre;
5. a program megkeresi a közös top Quality helyeket;
6. előre sorolja a több kijelölt anyagot lefedő helyeket;
7. holtversenynél a Quality-esély segít a sorrendben.

A **Csak ezeket a radaron** funkció a kijelölt anyagokra szűkíti a radarlistát.

---

## Finomítói bónuszok

A refinery adatok UEX-forrásból összeállított, beágyazott registryből érkeznek.

Megjelenítési szabályok:

- csak pozitív bónusz jelenik meg;
- rendszerenként csak a legjobb pozitív bónusz látszik;
- azonos top értéknél a holtverseny megmarad;
- negatív bónusz nem jelenik meg;
- ha nincs ismert pozitív bonus, `Nincs ismert bónusz.` látszik.

A jelenlegi kiadásban a refinery rész **nem élő UEX API-frissítés**. Ennek automatizálása külön roadmap-tétel.

---

## LIVE SCMDB adat és fallback

A program elsődleges mining forrása:

`https://raw.githubusercontent.com/KrovaxCode/SCMDB_DATA/main/data/latest.json`

Betöltési folyamat:

1. az oldal először azonnal megjelenik a beépített adatokkal;
2. lekéri a Krovax `latest.json` fájlt;
3. ebből kiválasztja az aktuális `channels.live` mining fájlt;
4. betölti az aktuális `mining_data-<version>.json` fájlt;
5. verzió- és sémaellenőrzés fut;
6. csak sikeres validáció után frissülnek a LIVE radar- és location-adatok;
7. az oldal újrarendereli az érintett adatokat.

### Állapotjelző

Az `Adatforrások` résznél látható:

- `SCMDB LIVE adatok betöltése…`
- `Adatok betöltve ✓ · <build>`
- `LIVE részleges · helyek fallback · <build>`
- `Beégetett fallback adatok aktívak`

### Hibatűrés

A program több ellenőrzést használ:

- 8 másodperces fetch timeout;
- mining filename allow-list;
- a manifest és a mining file verziójának egyeznie kell;
- minimum elvárt mineable-element és registry-méret;
- részleges hiba esetén csak az érintett live rész esik vissza fallbackre;
- teljes LIVE hiba esetén a beépített adatokkal tovább működik.

### Jelenlegi frissítési gyakoriság

**Most:** LIVE ellenőrzés oldalbetöltéskor.

**Tervezett:** oldalnyitáskor + nyitva hagyott oldalnál időszakos automatikus ellenőrzés, last-known-good cache és sémaeltérés-jelzés. Ez még nincs bekapcsolva a jelenlegi kiadásban. Lásd: [ROADMAP.md](ROADMAP.md).

---

## Adatforrások

Részletes leírás: [DATA_SOURCES.md](DATA_SOURCES.md)

Fő források:

- **KrovaxCode / SCMDB_DATA** – LIVE mining data mirror;
- **SCMDB** – mining / Quality referencia;
- **Star Citizen Wiki API** – blueprint és komponens adatok;
- **UEX** – refinery adatok;
- **CStone** – Aaron Halo útvonal-segéd;
- **Cloud Imperium Games / RSI** – Star Citizen IP és hivatalos fan-site szabályok.

---

## Fájlstruktúra

### Gyökér

- `index.html` – GitHub Pages belépési pont;
- `sPg_Material_Radar_Signature_Crafting_Quality.html` – önállóan megnyitható, azonos HTML;
- `README.md` – ez a projektleírás;
- `DATA_SOURCES.md` – adatforrások és adatútvonalak;
- `HOW_IT_WORKS.md` – részletes technikai működés;
- `ROADMAP.md` – tervezett, még nem kész funkciók;
- `CHANGELOG.md` – fontosabb változások;
- `CONTRIBUTING.md` – hibajelzés és fejlesztési alapelvek;
- `LICENSE_NOTICE.md` – jogi, licenc- és attribúciós megjegyzések;
- `DISCORD_POST_HU.md` – rövid közösségi bemutató.

### `docs/`

A részletes audit- és validációs dokumentumok:

- SCMDB LIVE integráció;
- SCMDB location formula audit;
- Quantum Drive registry audit;
- mobile / Target Mining regressziós ellenőrzések.

---

## Korlátok és fontos megjegyzések

- Star Citizen folyamatosan változik; minden adat buildfüggő lehet.
- A LIVE SCMDB adat automatikusan felülírhatja a runtime mining adatot, ha átmegy a validáción.
- A refinery adat jelenleg beágyazott UEX snapshot/registry, nem live API.
- A Felszín/Űr osztályozás jelenleg ismert helynevekre és mintákra épül; a teljes source-driven `locationType` rendszer roadmap-tétel.
- A program nem talál ki hiányzó blueprint-, stat-, material- vagy location-adatot.
- Ismeretlen vagy új forrásséma esetén a biztonságos viselkedés a fallback használata, nem a találgatás.
- Ez a tool nem hivatalos CIG/RSI termék.

---

## További dokumentáció

- [Adatforrások](DATA_SOURCES.md)
- [Technikai működés](HOW_IT_WORKS.md)
- [Roadmap](ROADMAP.md)
- [Changelog](CHANGELOG.md)
- [Hibajelzés / hozzájárulás](CONTRIBUTING.md)
- [Licenc és attribúció](LICENSE_NOTICE.md)
- [SCMDB LIVE integráció](docs/SCMDB_LIVE_SOURCE_INTEGRATION.md)
- [SCMDB formula validáció](docs/VALIDATION_SCMDB_DYNAMIC_LOCATIONS.md)
- [Quantum Drive audit](docs/QUANTUM_DRIVE_AUDIT_4.10.md)

---

## Licenc és jogi megjegyzések

A repository saját kódjához jelenleg nincs külön open-source licenc kiválasztva. A repository nyilvános elérhetősége önmagában nem jelent automatikus újrafelhasználási engedélyt.

A Star Citizen, a harmadik fél adatforrásai és azok jogai külön kezelendők. Részletek:

[**LICENSE_NOTICE.md**](LICENSE_NOTICE.md)

---

## English summary

**sPg Material Radar Signature & Crafting Quality** is a single-file, unofficial Star Citizen mining and crafting helper. It combines radar signatures, best Quality locations, Surface/Space filtering, crafting Quality usage, component references, refinery bonuses and multi-material Target Mining. Mining data can be refreshed at runtime from the KrovaxCode SCMDB_DATA LIVE mirror, while embedded project data remain available as fallback.

Live page: https://duczapeter.github.io/sPg-Material-Radar-Signature-Crafting-Quality/
