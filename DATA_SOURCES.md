# Adatforrások és adatkezelés

Ez a dokumentum azt írja le, hogy az sPg Material Radar Signature & Crafting Quality mely külső forrásokat használja, pontosan mire használja őket, és mely adatok LIVE, illetve beágyazott fallback jellegűek.

> A források megjelölése nem jelenti azt, hogy a projekt tulajdonjogot vagy újraterjesztési jogot állít a harmadik fél adataira.

## 1. KrovaxCode / SCMDB_DATA

Repository:

https://github.com/KrovaxCode/SCMDB_DATA

Runtime manifest:

https://raw.githubusercontent.com/KrovaxCode/SCMDB_DATA/main/data/latest.json

### Mire használjuk?

Elsődleges LIVE mining forrásként.

A program a `latest.json` `channels.live` ágából kiválasztja az aktuális LIVE `mining_data` fájlt. Ebből használható többek között:

- mineable element név;
- materialName;
- rarity;
- scanSignature;
- groundScanSignature;
- qualityBands;
- compositions;
- locations;
- mining groupok;
- deposit `relativeProbability`;
- location/system metadata.

### Mit NEM töltünk le automatikusan?

A jelenlegi runtime adapter nem tölti le a teljes `merged` fájlt, mission historyt, deltákat vagy minden repository-fájlt. A célzott adatfájlokat használjuk.

### Licencállapot

2026-09-11-i ellenőrzéskor a repository gyökerében csak a `data/` könyvtár található; külön root `LICENSE` vagy `README` fájl nem volt látható. Emiatt a projekt **nem állít explicit újraterjesztési licencet** a Krovax mirror adataira.

A mirrorra runtime forrásként hivatkozunk, és forrásmegjelölést adunk.

## 2. SCMDB

Forrás:

https://scmdb.net/?page=mine

### Mire használjuk?

- mining / Quality referencia;
- a korábbi, 2026-08-24-i screenshotokból ellenőrzött Best Quality fallback registry alapja;
- a Krovax mirrorból számolt dinamikus Quality-location eredmények ellenőrzési referenciája.

### Fontos

A Krovax `mining_data` nem kész SCMDB-kártyákat ad vissza. Az sPg saját adaptere a nyers adatokból állítja elő a projekt formátumát.

A Quality-location képlet részletesen:

[docs/SCMDB_LIVE_SOURCE_INTEGRATION.md](docs/SCMDB_LIVE_SOURCE_INTEGRATION.md)

### Licencállapot

A jelenlegi projektellenőrzés során nem találtunk egyértelmű, nyilvános SCMDB adat-újraterjesztési licencet. A projekt ezért SCMDB-t forrásként nevezi meg, nem állít tulajdonjogot, és a korábbi snapshotot fallbackként kezeli.

## 3. Star Citizen Wiki API

API:

https://api.star-citizen.wiki/

Forráskód:

https://github.com/StarCitizenWiki/API

### Mire használjuk?

- blueprint adatok;
- komponensnevek;
- item / component metadata;
- crafting recipe auditok.

### Licenc

A Star Citizen Wiki API alkalmazáskódja MIT licenc alatt érhető el.

Ez **nem jelenti azt**, hogy az API által közvetített vagy `scunpacked-data` forrásból származó Star Citizen game data automatikusan ugyanilyen licenc alatt áll. A Star Citizen Wiki saját README-je is külön jelzi, hogy az ilyen közösségi/game-data források licencét kereskedelmi felhasználás előtt külön kell ellenőrizni.

## 4. UEX

Forrás:

https://uexcorp.space/

Terms:

https://uexcorp.space/about/terms

### Mire használjuk?

A jelenlegi projektben a refinery bonus registry alapja UEX-forrásból összeállított adat.

A megjelenítési logika:

- csak pozitív bonus;
- rendszerenként legjobb pozitív érték;
- tie esetén minden azonos top refinery;
- negatív bonus elrejtve.

### LIVE vagy snapshot?

A jelenlegi kiadásban a refinery rész **beágyazott registry**, nem runtime UEX API fetch.

A live refinery frissítés külön roadmap-tétel.

### Feltételek

A UEX Terms a weboldal használatát személyes, nem kereskedelmi célra engedi, az API-hoz pedig külön feltételeket ad. A projekt nem állít adatbázis-tulajdonjogot a UEX adataira.

## 5. CStone – Aaron Halo route helper

Forrás:

https://cstone.space/resources/knowledge-base/36-refinery-to-aaron-halo-mining-routes

### Mire használjuk?

Csak külső útvonal-segéd linkként. Ha a Best Quality listában `Aaron Halo` jelenik meg, a név kattintható.

A projekt nem másolja be a CStone oldal teljes tartalmát.

## 6. Cloud Imperium Games / Roberts Space Industries

Hivatalos oldal:

https://robertsspaceindustries.com/

Fan-site útmutató:

https://support.robertsspaceindustries.com/hc/en-us/articles/360006895793-Star-Citizen-Fankit-and-Fandom-FAQ

### Mire vonatkozik?

A Star Citizen név, világ, játékadatok, márkák és egyéb CIG/RSI szellemi tulajdonjogok a megfelelő jogosultak tulajdonát képezik.

Az oldal ezért jól láthatóan jelzi, hogy nem hivatalos fan tool, és linket ad a hivatalos Star Citizen oldalra.

## 7. Forrásprioritás a mining résznél

A jelenlegi logikai sorrend:

1. Krovax SCMDB_DATA LIVE mining adat, ha sikeresen betöltődik és valid;
2. sPg saját override-ok;
3. beégetett, ellenőrzött fallback registry.

A fallback **nem törlődik** attól, hogy a live forrás működik.

## 8. Frissítés és cache

Jelenlegi működés:

- oldalbetöltéskor ellenőrzi a Krovax LIVE forrást;
- sikeres validáció után runtime frissíti az adatokat;
- hiba esetén a fallback marad aktív.

Tervezett, de még nem aktivált működés:

- többórás időszakos újraellenőrzés;
- last-known-good cache;
- schema drift / új field / új locationType figyelmeztetés;
- automatikus új material / location / refinery felismerés, ahol a forrás ezt egyértelműen lehetővé teszi.

Részletes terv: [ROADMAP.md](ROADMAP.md)
