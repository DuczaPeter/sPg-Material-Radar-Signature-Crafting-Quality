# Source, attribution and license notice / Forrás-, attribúciós és licenc-megjegyzés

> This file is an attribution and project-use notice. It is not legal advice and it does not grant rights to third-party content.
>
> Ez a fájl forrás-, attribúciós és projektfelhasználási megjegyzés. Nem jogi tanács, és nem ad engedélyt harmadik fél tartalmának felhasználására.

**Utolsó ellenőrzés / Last reviewed:** 2026-09-11

---

# Magyar

## 1. A projekt státusza

Az **sPg Material Radar Signature & Crafting Quality** egy nem hivatalos Star Citizen rajongói segédoldal.

Nem áll kapcsolatban a Cloud Imperium Grouppal, Roberts Space Industries-szal vagy azok társult vállalataival, és nem állít hivatalos jóváhagyást, támogatást vagy partnerséget.

A projekt jelenleg **nem rendelkezik külön open-source LICENSE fájllal**. Ez azt jelenti, hogy a repository nyilvános elérhetősége önmagában nem jelent automatikus engedélyt a saját projektkód másolására, módosítására vagy újraterjesztésére.

Ha később külön licenc kerül a projekt saját kódjára, az nem írhatja felül a Star Citizen IP-re vagy a harmadik fél adatforrásaira vonatkozó külön feltételeket.

## 2. Star Citizen / Cloud Imperium Games / Roberts Space Industries

Hivatalos oldal:

https://robertsspaceindustries.com/

Fan-site / fandom útmutató:

https://support.robertsspaceindustries.com/hc/en-us/articles/360006895793-Star-Citizen-Fankit-and-Fandom-FAQ

A CIG/RSI 2026-09-02-án frissített Fankit and Fandom FAQ oldala külön fan-site iránymutatást tartalmaz. A fan site-nak egyértelműen jeleznie kell, hogy nem hivatalos és nem kapcsolódik a Cloud Imperium cégcsoporthoz, valamint elérhető linket kell biztosítania a hivatalos oldalra.

A publikus sPg oldal ezért látható unofficial fan-tool megjegyzést és hivatalos RSI-linket tartalmaz.

A Star Citizen®, Roberts Space Industries®, Cloud Imperium®, valamint a játékból származó nevek, helyek, hajók, komponensek, adatok, képi elemek és egyéb IP a megfelelő jogosultak tulajdonát képezik.

## 3. KrovaxCode / SCMDB_DATA

Repository:

https://github.com/KrovaxCode/SCMDB_DATA

A projekt ezt a public SCMDB mirrort használja elsődleges runtime mining adatforrásként.

A program nem csomagolja be a teljes repositoryt. A futó oldal a szükséges célfájlokat kéri le, elsősorban:

- `data/latest.json`
- a manifest által kijelölt aktuális LIVE `mining_data-<version>.json`

2026-09-11-i ellenőrzéskor a repository gyökerében csak a `data/` könyvtár volt látható, és nem volt külön root `LICENSE` vagy `README` fájl. Emiatt a projekt **nem állít explicit újraterjesztési licencet** a Krovax mirror adataira.

A public hozzáférhetőség önmagában nem azonos egy nyílt licenccel. A projekt ezért forrásként hivatkozik a mirrorra, és nem állít tulajdonjogot az ott publikált adatokra.

## 4. SCMDB

Forrás:

https://scmdb.net/?page=mine

Az SCMDB a mining / Quality adatok egyik referenciaforrása.

A projekt:

- korábban SCMDB képernyőképekből készített ellenőrzött fallback snapshotot;
- jelenleg Krovax SCMDB_DATA LIVE mining adatból dinamikus location registryt is épít;
- a korábbi snapshotot hibatűrő fallbackként megtartja.

A projektellenőrzés során nem találtunk egyértelmű, nyilvános SCMDB adat-újraterjesztési licencet. Ezért a projekt az SCMDB-t névvel és kattintható linkkel jelöli, nem állít tulajdonjogot, és nem állít általános adat-újraterjesztési engedélyt.

## 5. Star Citizen Wiki API

API:

https://api.star-citizen.wiki/

Forráskód:

https://github.com/StarCitizenWiki/API

A projekt blueprint- és komponensadatok ellenőrzésére használja.

A Star Citizen Wiki API alkalmazáskódja MIT License alatt érhető el. A Star Citizen Wiki saját README-je ugyanakkor külön jelzi, hogy a közösségi és game-data források – például `scunpacked-data` – licencét külön kell ellenőrizni, különösen kereskedelmi felhasználás előtt.

Ezért az sPg projekt **nem állítja**, hogy minden Star Citizenből származó adat automatikusan MIT licenc alatt áll csak azért, mert az API szoftverkódja MIT licencű.

## 6. UEX

Forrás:

https://uexcorp.space/

Terms:

https://uexcorp.space/about/terms

A jelenlegi projekt refinery bonus registryje UEX-forrásból összeállított adatot használ.

A UEX Terms szerint a weboldal adatai információs célúak, közösségi frissítésűek, pontosságuk nem garantált, és a weboldal használata személyes, nem kereskedelmi célra engedélyezett. A UEX API-ra külön feltételek vonatkoznak.

A projekt nem állít tulajdonjogot vagy önálló adatbázis-licencet a UEX adatokra.

## 7. CStone Aaron Halo route helper

Forrás:

https://cstone.space/resources/knowledge-base/36-refinery-to-aaron-halo-mining-routes

A projekt ezt csak külső, kattintható útvonal-segédként linkeli az Aaron Halo bejegyzéshez. A CStone oldal teljes tartalma nincs beágyazva vagy újraközölve.

## 8. Saját kód felhasználása

Jelenleg nincs külön projektlicenc kiválasztva.

Ez gyakorlatban azt jelenti:

- a kód megtekinthető a publikus repositoryban;
- a szerzői jogi alapértelmezett szabályok érvényesek;
- a publikus GitHub repository önmagában nem egyenlő MIT/GPL/Apache vagy más nyílt licenccel.

Ha a jövőben nyílt forrású licenc kerül kiválasztásra, érdemes azt külön `LICENSE` fájlban rögzíteni, miközben ezt a `LICENSE_NOTICE.md` harmadik félre vonatkozó megjegyzést továbbra is meg kell tartani.

---

# English

## 1. Project status

**sPg Material Radar Signature & Crafting Quality** is an unofficial Star Citizen fan-made helper.

It is not affiliated with, endorsed by, sponsored by, or officially connected to Cloud Imperium Group, Roberts Space Industries, or their affiliates.

The project currently has **no standalone open-source LICENSE file**. Public visibility of the repository does not, by itself, grant permission to copy, modify, or redistribute the project's original code.

Any future license covering the project's own code cannot override third-party IP, data rights, or source-specific terms.

## 2. Star Citizen / Cloud Imperium Games / Roberts Space Industries

Official site:

https://robertsspaceindustries.com/

Fan-site / fandom guidance:

https://support.robertsspaceindustries.com/hc/en-us/articles/360006895793-Star-Citizen-Fankit-and-Fandom-FAQ

The RSI Fankit and Fandom FAQ, updated 2026-09-02, includes specific fan-site guidance. Fan sites must clearly distinguish themselves from official CIG/RSI properties and provide an accessible link to the official site.

The published sPg page therefore includes a visible unofficial fan-tool notice and an official RSI link.

Star Citizen®, Roberts Space Industries®, Cloud Imperium®, and game-derived names, locations, ships, components, data, images and other IP remain the property of their respective rights holders.

## 3. KrovaxCode / SCMDB_DATA

Repository:

https://github.com/KrovaxCode/SCMDB_DATA

This public SCMDB mirror is used as the primary runtime mining-data source.

The project does not bundle the full repository. The web app requests only the required target files, primarily:

- `data/latest.json`
- the current LIVE `mining_data-<version>.json` selected by the manifest.

As reviewed on 2026-09-11, the repository root exposed only the `data/` directory and no standalone root `LICENSE` or `README` file. The project therefore **does not claim an explicit redistribution license** for the mirror data.

Public accessibility is not equivalent to an open license. The mirror is credited as a source and ownership is not claimed.

## 4. SCMDB

Source:

https://scmdb.net/?page=mine

SCMDB is used as a mining / Quality reference.

The project:

- previously built a curated fallback snapshot from SCMDB screenshots;
- now also builds a dynamic location registry from Krovax SCMDB_DATA LIVE mining data;
- retains the prior curated snapshot as a fault-tolerant fallback.

No clear public SCMDB data redistribution license was identified during project review. SCMDB is therefore visibly credited and linked, and no ownership or broad redistribution rights are claimed.

## 5. Star Citizen Wiki API

API:

https://api.star-citizen.wiki/

Source code:

https://github.com/StarCitizenWiki/API

The project uses it to verify blueprint and component data.

The Star Citizen Wiki API application source code is MIT-licensed. Its own README separately notes that community and game-data sources such as `scunpacked-data` should have their licensing verified independently, especially for commercial use.

The sPg project therefore does **not** claim that all game-derived data are MIT-licensed merely because the API application code uses MIT.

## 6. UEX

Source:

https://uexcorp.space/

Terms:

https://uexcorp.space/about/terms

The current refinery bonus registry is based on UEX-sourced data.

UEX Terms describe the website data as informational and community-maintained, without guaranteed accuracy, and limit website use to personal, non-commercial purposes. Separate terms apply to the UEX API.

This project does not claim ownership of or an independent database license over UEX data.

## 7. CStone Aaron Halo route helper

Source:

https://cstone.space/resources/knowledge-base/36-refinery-to-aaron-halo-mining-routes

The project only links to this external route helper when Aaron Halo is shown. The full CStone article is not copied or embedded.

## 8. Use of the project's original code

No standalone project license has been selected at this time.

In practical terms:

- the code can be viewed in the public repository;
- default copyright rules apply;
- a public GitHub repository is not automatically an MIT, GPL, Apache, or other open-source grant.

If an open-source license is selected later, it should be added as a separate `LICENSE` file while retaining this notice for third-party sources and IP.
