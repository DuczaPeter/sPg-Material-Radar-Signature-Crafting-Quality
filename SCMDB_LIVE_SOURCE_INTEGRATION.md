# SCMDB LIVE source integration — KrovaxCode public mirror

## Cél
A meglévő sPg Material Radar működése és UI-ja maradjon változatlan, miközben az SCMDB-hez kötődő bányászati adatok elsődleges forrása a KrovaxCode `SCMDB_DATA` public mirror LIVE adata lesz. A korábban beégetett projektadatok továbbra is teljes értékű fallbackként bent maradnak.

## Runtime folyamat
1. Betöltődik a `data/latest.json` a `KrovaxCode/SCMDB_DATA` mirrorból.
2. A program a `channels.live.version` és `channels.live.files.mining_data` mezőket használja.
3. Betöltődik pontosan az aktuális LIVE `mining_data-<version>.json`.
4. Verzió- és sémaellenőrzés fut.
5. A radar / rarity / Quality band adatok csak validálás után frissülnek memóriában.
6. A `buildDynamicQualityLocationRegistryFromSCMDB()` ugyanebből a LIVE `mining_data` fájlból felépíti a projekt meglévő Best Quality Location registry-formátumát.
7. A live location-registry rákerül a beégetett fallback registryre rendszer-szinten. Amihez nincs megbízható live eredmény, annál a régi beégetett bejegyzés marad.
8. A projekt saját override-szabályai ezután futnak le.
9. Bármilyen fetch- vagy validációs hiba esetén a beégetett adatok maradnak aktívak.

## Dinamikus Quality-location adapter
A Krovax mining adat nem a projekt kész `QUALITY_LOCATION_REGISTRY` formátumában érkezik, ezért a program futás közben adaptert épít.

A projekt által használt, SCMDB snapshotértékekkel visszaellenőrzött számítási réteg:
- a deposit `relativeProbability` aránya az adott mineable group teljes deposit-súlyához képest (`depositShare`)
- a composition adott nyersanyaghoz tartozó **primary**, `qualityScale = 1.0` része
- ennek `maxPercent` értéke
- képlet: `depositShare × primary maxPercent`

Fontos: a location `groupProbability` nem része a SCMDB kártyán megjelenített material-százalék képletének. Csak arra használjuk, hogy 0 / inaktív csoportot ne dolgozzunk fel. A `qualityScale = 0.49` és `0.789` secondary részek nem számítanak bele.

A kapott értékből készül az eddig is használt egy tizedes, `≤x.x%` formátum. A top helyek rendszerenként kerülnek kiválasztásra, az azonos top értékek tie-ként együtt maradnak.

### Ellenőrzött példa — Hurston
A 4.10.0-live.12572603 Krovax LIVE adatban a Hurston Ship Mining deposit poolban Ouratite súlya 10/100, Quantainium súlya 2/100.
- Ouratite primary maxPercent 6.82 → `0.10 × 6.82 = 0.682%` → `≤0.7%`
- Quantainium primary maxPercent 11.7 → `0.02 × 11.7 = 0.234%` → `≤0.2%`

Mindkét eredmény egyezik a korábbi, képernyőképből validált fallback SCMDB értékkel. Ez külön bizonyítja azt is, hogy a secondary ugyanazon-material részt nem szabad hozzáadni.

Ez a számítás az sPg adapter logikája a Krovax által publikált nyers mezőkből; a program nem írja át a forrás JSON-t.

## Megmaradó saját override-ok
- Aluminum / Stanton: ha Hurston az egyetlen top hely, a második legjobb tier is megmarad.
- Tin / Stanton: ugyanaz a Hurston-szabály.
- Beradom / Stanton: ugyanaz a Hurston-szabály.
- Savrilium / Nyx: a Célzott bányászat miatt a második legjobb tier is megmarad.
- Aaron Halo továbbra is a meglévő kattintható útvonal-segéd linket használja.
- A meglévő material aliasok továbbra is élnek, többek között Quantanium/Quantainium, Ice/Pressurized Ice, Aluminum/Aluminium, Saldynium.

## Fallback modell
A beégetett `QUALITY_LOCATION_REGISTRY` NINCS törölve.

Aktív sorrend:
1. SCMDB LIVE dinamikus location adat, ha valid.
2. Saját override-szabályok.
3. Beégetett `QUALITY_LOCATION_REGISTRY` fallback minden hiányzó vagy sikertelen részre.

A `MATERIALS`, `REFINERY_BONUS_REGISTRY`, komponens-registry és a teljes meglévő UI továbbra is be van építve az egyfájlos HTML-be.

## Betöltési visszajelzés
Az Adatforrások sorban új, kisméretű állapotjelző látható:
- `SCMDB LIVE adatok betöltése…`
- `Adatok betöltve ✓ · <LIVE build>`
- `LIVE részleges · helyek fallback · <LIVE build>`
- `Beégetett fallback adatok aktívak`

A visszajelzés HU/EN nyelvváltással együtt frissül, és `aria-live="polite"` státuszt használ.

## Safety gate-ek
- 8 másodperces fetch timeout.
- LIVE mining filename allow-list regex.
- `latest.json` LIVE verzió = `mining_data.version` kötelező.
- Legalább 20 mineable element szükséges.
- Radar live patch csak megfelelő project-material match count után aktiválódik.
- Dinamikus location-registry csak legalább 20 project material és legalább 25 material/system bejegyzés után aktiválódik.
- Location build hibája nem rontja el a radar live adatot: ilyenkor részleges LIVE + location fallback állapot lesz.
- Teljes live-source hiba esetén minden beégetett fallback marad aktív.

## Validáció
- `index.html` és `sPg_Material_Radar_Signature_Crafting_Quality.html`: byte-identikus.
- JavaScript syntax check: PASS.
- Dinamikus registry szintetikus fixture: PASS, 35/35 material.
- Aluminum Hurston második-tier override fixture: PASS.
- Savrilium Nyx második-tier override fixture: PASS.
- Vízszintes görgetés / mobil radar CSS logikához ez a módosítás nem nyúlt hozzá.
