# sPg Material Radar Signature & Crafting Quality

Star Citizen bányászati és crafting segédoldal, amely egyetlen önálló HTML-fájlban működik.

**Élő oldal:** https://duczapeter.github.io/sPg-Material-Radar-Signature-Crafting-Quality/

Az oldal célja, hogy egy helyen lásd a nyersanyagok radar signature értékeit, a legjobb ismert Quality-lelőhelyeket, a craftingban betöltött szerepüket, a refinery bónuszokat és a több anyagra közös célzott bányászati helyeket.

## Mire használható?

- radarjel alapján nyersanyag azonosításra;
- Ship, ROC és FPS mineable anyagok áttekintésére;
- `Minden hely / Felszín / Űr` szűrésre;
- Stanton, Pyro és Nyx Best Quality helyek megjelenítésére;
- Q500 / Integrity és Q800–Q900+ crafting felhasználás elkülönítésére;
- konkrét komponenscsaládok és ellenőrzött komponensek megtekintésére;
- pozitív refinery bónuszok megjelenítésére;
- több kiválasztott anyag közös top helyeinek keresésére Target Mining módban;
- SCMDB/Krovax LIVE mining adat használatára, beépített fallback mellett.

## Gyors használat

1. Nyisd meg az `index.html`-t vagy az élő GitHub Pages oldalt.
2. Radar kereséshez hagyd a nézetet `Radar sorrend` állásban.
3. Válassz `Minden hely`, `Felszín` vagy `Űr` szűrőt.
4. Kattints egy anyagra a részletes Best Quality, crafting, radar és refinery adatokhoz.
5. Több anyaghoz nyisd meg a `Célzott bányászat` panelt, és jelöld ki a kívánt anyagokat.
6. A nyelvválasztóval válthatsz magyar és angol UI között.

Részletes használat: [`docs/USER_GUIDE.hu.md`](docs/USER_GUIDE.hu.md)

## Fő működés

### Radar Signature

A program az anyag alap radarértékéből és a rarityhez tartozó lehetséges találatszámból rajzolja ki a signature kapszulákat. A LIVE mining adapter a KrovaxCode `SCMDB_DATA` aktuális LIVE `mining_data` fájljából frissítheti a radarhoz szükséges mining adatokat. Ha a LIVE adat nem tölthető be vagy nem valid, a beépített fallback marad aktív.

### Best Quality Locations

A program a Krovax mining adatból saját Best Quality registryt tud építeni. A jelenlegi ellenőrzött százalék-képlet:

`depositShare × primary maxPercent`

A primary rész az a composition elem, ahol `qualityScale = 1.0`. A `groupProbability` nem szorzója a kijelzett material-százaléknak. Azonos top értéknél a holtversenyes helyek megmaradnak.

### Minden hely / Felszín / Űr

A szűrő a radarlistát és a kinyitott Best Quality helyeket is szűri. A jelenlegi production buildben a besorolás ismert nevekből és névmintákból készül. `Lagrange`, `Ring`, `Belt`, `Asteroid`, `Deep Space`, `Aaron Halo` és `Breaker Stations` Űr kategóriát kap. Bolygók, holdak és ismert barlang/felszíni nevek Felszín kategóriába kerülnek.

**ATTENTION:** ez még nem teljesen `locationType`-vezérelt. Ismeretlen név jelenleg Felszínként eshet át. A source-driven besorolás a roadmap része.

### Crafting Quality

A projekt nem egyetlen Quality-szabályt rendel egy teljes nyersanyaghoz. A besorolás recipe slot szerint történik. A Q500 / Integrity jellegű felhasználás külön jelenik meg a minimum Qualityt vagy funkcionális előnyt célzó magas Quality használattól.

### Target Mining

A panelben több anyag jelölhető ki. Legalább két anyag után a program közös Best Quality helyeket keres, rendszerszűréssel. A több kijelölt anyagot lefedő helyek előrébb kerülnek.

**ATTENTION:** a topbar `Felszín / Űr` szűrő jelenleg nem szűri külön a Target Mining eredménylistáját; csak a radarlistát és az anyag részletes location blokkját.

### Refinery

A refinery bónuszok jelenleg beágyazott, UEX-alapú registryből jönnek. Csak pozitív, rendszerenként legjobb bónusz jelenik meg; holtverseny megmarad. A refinery rész jelenleg nem LIVE UEX API.

## Adatforrások

- KrovaxCode / SCMDB_DATA – elsődleges LIVE mining forrás;
- SCMDB – mining/Quality referencia és fallback ellenőrzés;
- Star Citizen Wiki API – blueprint és komponens ellenőrzés;
- StarCitizenWiki `scunpacked-data` – pinned ship-weapon blueprint adat;
- UEX – refinery bonus referencia;
- CStone – Aaron Halo útvonal-segéd link.

Részletes forrásszabályok: [`docs/DATA_SOURCES.hu.md`](docs/DATA_SOURCES.hu.md)

## Automatikus frissítés és cache

A jelenlegi build oldalbetöltéskor ellenőrzi a Krovax LIVE mining manifestet, és `cache: no-store` mellett lekéri az aktuális mining fájlt. A ship weapon blueprint készlet egy pinned GitHub commitból is hálózati kéréseket indít.

**Még nincs productionban:** 4 órás időszakos frissítés, last-known-good cache, automatikus schema-drift diagnosztika, új materialok teljes automatikus felvétele és LIVE refinery frissítés. Ezek a roadmap részei.

## Adatvédelem

A projektnek nincs saját backendje, account rendszere vagy beépített analytics kódja. A böngésző `localStorage`-ban a választott UI-nyelvet tárolja. Külső adatforrások lekérésekor a böngésző közvetlenül kapcsolódik harmadik fél szolgáltatásaihoz, ezért azok a normál hálózati metaadatokat (például IP-cím, user agent) láthatják.

Részletek: [`PRIVACY.md`](PRIVACY.md)

## Követelmények

- modern JavaScriptet, Fetch API-t és CSS-t támogató böngésző;
- LIVE adatfrissítéshez internetkapcsolat;
- telepítés és build nem szükséges.

Fallback adatokkal a fő UI külső forrás kiesésekor is használható marad, de a runtime ship-weapon registry egyes részei hálózati forrást használnak.

## Tesztállapot

A 2026-09-22-i release-csomagolás során:

- a canonical `index.html` GitHub `main` baseline-ja forrásból ellenőrzött;
- a JavaScript syntax/parse és release invariánsok STATIC PASS állapotúak;
- Chromium fallback/offline interakciós teszt desktop és 390×844 mobil viewporton PASS;
- horizontális dokumentum-overflow 0 px volt a tesztelt fallback állapotban;
- a külső LIVE hálózati fetch útvonal nem kapott end-to-end browser runtime validációt ebben a csomagolási körben.

Részletek: [`docs/TESTING.md`](docs/TESTING.md)

## Aktuális baseline

- GitHub repository: `DuczaPeter/sPg-Material-Radar-Signature-Crafting-Quality`
- branch: `main`
- baseline commit: `47dcea643b11115ceac770bd8799d9f16c02fb0d`
- canonical app blob: `6be14d6c299b8e9efc1dd48d183b2b0eebd9cb30`
- canonical app SHA-256: `28be33eae5f2b53f375e52003a7af282ff8b97243fdb14ee0b28b531be9402f4`
- a release-csomag nem változtatja meg az alkalmazás byte-jait.

## Licenc és jogi állapot

A projekt saját kódjára jelenleg nincs nyílt forráskódú licenc megadva. A `LICENSE` fájl ezért All Rights Reserved / no-permission állapotot rögzít, és nem ad MIT/GPL/Apache jellegű felhasználási engedélyt.

A Star Citizen, CIG/RSI és a harmadik fél adatforrások jogai külön kezelendők. Lásd:

- [`LICENSE`](LICENSE)
- [`NOTICE.md`](NOTICE.md)
- [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md)

## Fejlesztőknek / AI-nak

- [`AGENTS.md`](AGENTS.md) – canonical baseline, invariánsok, tiltott változtatások, tesztkövetelmények;
- [`STATUS.md`](STATUS.md) – rövid aktuális állapot;
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) – architektúra és adatfolyam;
- [`docs/RELEASE.md`](docs/RELEASE.md) – release gate;
- [`CONTRIBUTING.md`](CONTRIBUTING.md) – módosítási szabályok.
