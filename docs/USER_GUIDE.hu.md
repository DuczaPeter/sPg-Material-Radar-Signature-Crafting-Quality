# Felhasználói útmutató

## 1. Indítás

A program telepítés nélkül fut. Nyisd meg az `index.html` fájlt modern böngészőben, vagy használd a GitHub Pages oldalt.

A teljes alkalmazás CSS-e, HTML-je, JavaScriptje és fallback adatainak lényegi része egy fájlban van. LIVE adatokhoz internetkapcsolat szükséges.

## 2. Felső vezérlők

### Nézet

- `Radar sorrend`: teljes radarlista a projekt sorrendjében.
- `Alacsony Quality · Q500 / Integrity`: csak olyan sorok, ahol alacsony Quality / Integrity jellegű crafting felhasználás van.
- `Magas Quality · Q800 minimum / Q900+ funkcionális`: magas Quality szempontból releváns felhasználások.

### Helyszűrő

- `Minden hely`: nincs helytípus-szűrés.
- `Felszín`: olyan anyagok és Best Quality helyek, amelyeket a jelenlegi classifier Felszínnek sorol.
- `Űr`: űrbeli mining helyek, például Lagrange, ring, belt, asteroid, Aaron Halo, Breaker Stations.

A szűrő a radar sorait is eltávolítja, ha az anyagnak nincs megjeleníthető Best Quality helye az adott kategóriában.

### Kiemelés törlése

Bezárja/törli az anyagsorok kijelölt állapotát.

### Célzott bányászat

Megnyitja a többanyagú keresőpanelt.

### Nyelv

Magyar/English. A választás a böngésző localStorage tárában megmarad.

## 3. Radarlista olvasása

Bal oldalon az anyagnév, jobb oldalon a lehetséges radar signature kapszulák látszanak. A kapszulák száma és színe a projekt rarity/mining logikájához igazodik.

Mobilon a hosszú Common/ROC/FPS sorok tömörített/többsoros megjelenítést használhatnak; a cél a vízszintes oldalgörgetés elkerülése.

## 4. Anyag részletei

Kattints egy sorra. A kibontott blokk tartalmazhatja:

- Best Quality Locations;
- Low Quality / Q500 / Integrity crafting felhasználás;
- High Quality / Q800–Q900+ crafting felhasználás;
- radar összegzés;
- refinery bónusz.

A crafting családnév egyes esetekben kattintható, és komponens-popover jelenik meg.

## 5. Best Quality Locations

Rendszerenként Stanton, Pyro és Nyx sorok jelenhetnek meg. A kijelzett százalék a forrásadatból számolt/megőrzött top Quality esély.

Azonos top értéknél több hely is megmarad. Bizonyos, korábban eldöntött kivételeknél második tier is látszik.

Aaron Halo kattintható külső route-helper link.

## 6. Target Mining workflow

1. Nyisd meg a `Célzott bányászat` panelt.
2. Jelölj ki legalább két anyagot a radarlistában.
3. Opcionálisan válassz Stanton/Pyro/Nyx rendszert.
4. Nézd meg a közös top helyeket.
5. A `Csak ezeket a radaron` funkcióval szűkítsd a radarlistát a kiválasztott anyagokra.

A rangsor elsődlegesen a lefedett kiválasztott anyagok számát nézi, majd az összesített Quality-esély segít a sorrendben.

**Jelenlegi korlát:** a topbar `Felszín / Űr` választás még nem szűri közvetlenül a Target Mining eredményhelyeit.

## 7. LIVE és fallback állapot

A forrásállapot jelző lehet LIVE/partial/fallback jellegű. Ha a Krovax manifest vagy mining adat nem valid, a beépített fallback marad aktív.

A jelenlegi build oldalmegnyitáskor frissít; a 4 órás automatikus újraellenőrzés még roadmap.

## 8. Tipikus hibák

### Nem jelenik meg LIVE verzió

Lehetséges ok: hálózat, CORS, GitHub elérhetőség, sémaeltérés. A fallback ettől még működhet.

### Egy location rossz helytípusban jelenik meg

A jelenlegi classifier név/pattern alapú. Írd fel a teljes location nevet és a forrás `locationType` értékét, ha ismert; ez adapterjavításhoz kell.

### Egy komponens vagy recipe eltér a játéktól

Add meg a komponens nevét, játék buildet és lehetőleg blueprint/stat preview bizonyítékot. Ne javítsunk becslésből.
