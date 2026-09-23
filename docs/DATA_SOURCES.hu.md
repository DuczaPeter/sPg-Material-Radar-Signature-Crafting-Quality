# Adatforrások

## Prioritás

### Mining / radar / Quality location

1. validált KrovaxCode / SCMDB_DATA LIVE `mining_data`;
2. beépített, korábban ellenőrzött fallback registry.

A LIVE adat rendszerszinten felülírhatja/kitöltheti a fallback helyadatot, de invalid payload nem írhatja felül a működő fallbackot.

## KrovaxCode / SCMDB_DATA

- Repository: https://github.com/KrovaxCode/SCMDB_DATA
- Manifest: https://raw.githubusercontent.com/KrovaxCode/SCMDB_DATA/main/data/latest.json
- Current observed LIVE on 2026-09-23: `4.10.1-live.12660092`
- Generated at: `2026-09-16T19:58:26Z`

Használt mezők/koncepciók: mineable elements, rarity, scan signature, Quality bands, compositions, locations, group/deposit weights és system/location metadata.

A program célzott fájlt tölt, nem a teljes `merged` adatállományt.

## SCMDB

- https://scmdb.net/?page=mine

Mining/Quality referencia és a régi curated fallback ellenőrzésének forrása. A projekt nem állít külön SCMDB adat-redistribution licencet.

## Star Citizen Wiki API

- https://api.star-citizen.wiki/
- https://github.com/StarCitizenWiki/API

Blueprint és komponens ellenőrzéshez, illetve item linkekhez használjuk. Az upstream API alkalmazáskód MIT-licencű; ez nem jelenti azt, hogy az alapul szolgáló játékadat MIT alá kerül.

## StarCitizenWiki / scunpacked-data

A current production app a ship-weapon blueprintokat pinned commitból tölti:

- commit: `f6a2b29e77aaa2c824aa4fd1c0478c8058c69fca`
- marker: `4.10.0-LIVE.12519617`

Ezért ez a rész nem nevezhető automatikusan a jelenlegi LIVE buildhez igazodó adatnak.

## UEX

- https://uexcorp.space/
- https://uexcorp.space/about/terms

A refinery bonus registry UEX-alapú, de a current production app ezt beágyazott adatként használja, nem LIVE API-ként.

## CStone

- https://cstone.space/resources/knowledge-base/36-refinery-to-aaron-halo-mining-routes

Csak külső Aaron Halo segédlink.

## Freshness és patch/build követés

A mining LIVE buildet `latest.json` fedezi fel oldalbetöltéskor. A dokumentációban szereplő konkrét build csak ellenőrzési snapshot, nem hard-coded követelmény.

A 4 órás automatikus újraellenőrzés, last-known-good cache és teljes schema-drift diagnosztika még nincs productionban.

## Új adatok dinamikus kezelése

Jelenleg a mining adapter tud meglévő materialok radar/rarity/location adatait frissíteni. A teljesen új material sorok, új source-driven helytípusok és LIVE refinery automatikus létrehozása roadmap.

Ismeretlen mezőt vagy locationType-ot jövőben sem szabad becsléssel kitölteni.
