# sPg Material Radar Signature & Crafting Quality

**Magyar főoldal** · [English documentation](README.en.md)

Star Citizen bányászati és crafting segédoldal, amely egyetlen önálló HTML-fájlban működik.

**Élő oldal:** https://duczapeter.github.io/sPg-Material-Radar-Signature-Crafting-Quality/  
**Fő artifact:** [`index.html`](index.html)  
**Release artifact:** [`release/sPg_Material_Radar_Signature_Crafting_Quality.html`](release/sPg_Material_Radar_Signature_Crafting_Quality.html)

![Valódi desktop UI screenshot](assets/ui-desktop.png)

## Mire való?

Az oldal egy helyen mutatja a radar signature értékeket, a legjobb ismert Quality-lelőhelyeket, a crafting felhasználást, a refinery bónuszokat és a több anyagra közös Target Mining helyeket.

### Fő funkciók

- Ship, ROC és FPS mineable radar signature áttekintés;
- `Minden hely / Felszín / Űr` helyszűrés;
- Stanton, Pyro és Nyx Best Quality locationök;
- Q500 / Integrity és Q800–Q900+ crafting felhasználás szétválasztása;
- komponenscsalád és ellenőrzött komponens találatok;
- pozitív refinery bónuszok;
- több anyag közös lelőhelyének keresése Target Mining módban;
- KrovaxCode/SCMDB_DATA LIVE mining-adat betöltése beépített fallback mellett;
- magyar/angol UI.

## Gyors használat

1. Nyisd meg az `index.html`-t vagy az élő GitHub Pages oldalt.
2. Radar kereséshez maradj `Radar sorrend` nézetben.
3. Válassz `Minden hely`, `Felszín` vagy `Űr` szűrőt.
4. Kattints egy anyagra a részletes Quality, crafting, radar és refinery adatokhoz.
5. Több anyagnál nyisd meg a `Célzott bányászat` panelt.
6. A nyelvválasztóval válthatsz magyar és angol között.

Részletes útmutató: [`docs/USER_GUIDE.hu.md`](docs/USER_GUIDE.hu.md)

## Hogyan működik röviden?

A production HTML azonnal a beépített fallback adatokból renderel, majd megpróbálja betölteni a Krovax `latest.json` manifestet és az aktuális LIVE mining fájlt. A LIVE adat csak validáció után írhatja felül az érintett runtime registryket. Ha a külső forrás hibás vagy nem érhető el, a fallback marad aktív.

A Best Quality számítás ellenőrzött projektképlete:

`depositShare × primary maxPercent`

ahol a primary composition-rész `qualityScale = 1.0`. A `groupProbability` nem kijelzett material-százalék szorzó.

![Adatfolyam](assets/data-flow.svg)

## Adatforrások

- **KrovaxCode / SCMDB_DATA:** LIVE mining manifest és mining adatok;
- **SCMDB:** mining/Quality referencia;
- **Star Citizen Wiki API:** blueprint/komponens ellenőrzések;
- **StarCitizenWiki/scunpacked-data:** pinned ship-weapon blueprint forrás;
- **UEX:** a jelenleg beágyazott refinery bonus registry referenciája;
- **CStone:** Aaron Halo útvonal-segéd külső link.

Részletes precedence, freshness, fallback és licence/terms állapot: [`docs/DATA_SOURCES.hu.md`](docs/DATA_SOURCES.hu.md) és [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md).

## Automatikus frissítés és cache

A jelenlegi production build **oldalbetöltéskor** ellenőrzi a Krovax LIVE manifestet és `cache: no-store` mellett tölti le az aktuális mining fájlt. A korábban tervezett 4 órás automatikus ismétlés, last-known-good cache, teljes schema-drift diagnosztika, új materialok automatikus felvétele és LIVE refinery frissítés **még nincs productionban**.

## Követelmények

- modern JavaScript/Fetch/CSS támogatású böngésző;
- LIVE adatfrissítéshez internetkapcsolat;
- telepítés és build nem szükséges.

## Adatvédelem

Nincs saját backend, account/login vagy beépített analytics. A program a választott UI-nyelvet `localStorage`-ban tárolja. Külső runtime adatlekéréskor a böngésző közvetlenül harmadik fél szolgáltatásaihoz kapcsolódik. Részletek: [`PRIVACY.md`](PRIVACY.md).

## Validációs állapot

| Terület | Állapot |
|---|---|
| Canonical GitHub baseline | **SOURCE VERIFIED** |
| Static release gate | **STATIC VERIFIED · PASS** |
| Offline/fallback browser smoke | **RUNTIME VERIFIED · PASS** |
| Desktop/mobile real UI screenshot | **RUNTIME VERIFIED · PASS** — valódi böngésző-screenshot a dokumentált fallback környezetben |
| LIVE third-party browser E2E | **NOT VERIFIED** ebben a csomagolási körben |
| GitHub Pages pixel-paritás | **NOT VERIFIED** ebben a csomagolási körben |

A csomag státusza (PACKAGE STATUS) ezért **READY WITH LIMITATIONS**. A publikált repository helyességét a feltöltés utáni friss klónos ellenőrzés igazolja (lásd `STATUS.md`). Részletek: [`STATUS.md`](STATUS.md), [`docs/TESTING.md`](docs/TESTING.md), [`docs/RELEASE_CONTRACT.md`](docs/RELEASE_CONTRACT.md).

## Ismert korlátok

A legfontosabbak: a Felszín/Űr besorolás még részben név/pattern alapú; a helyszűrő és Target Mining nincs teljesen összekötve; nincs 4 órás refresh és last-known-good cache; a refinery bonus nem LIVE UEX feed. Teljes lista: [`docs/KNOWN_LIMITATIONS.hu.md`](docs/KNOWN_LIMITATIONS.hu.md).

## Licenc és third-party jogok

A repository meglévő saját kódlicenc-állapota megmarad: **All Rights Reserved / nincs nyílt forráskódú felhasználási engedély**. Ez csak a projekt saját kódjára és saját dokumentációjára vonatkozik. Star Citizen/CIG/RSI és minden külső adatforrás külön jogi feltételek alatt marad.

- [`LICENSE`](LICENSE)
- [`NOTICE.md`](NOTICE.md)
- [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md)

Ez egy **unofficial Star Citizen fan site/tool**, nem áll kapcsolatban a Cloud Imperium Group vállalataival. A hivatalos oldal: https://robertsspaceindustries.com/

## Fejlesztés és folytathatóság

- [`AGENTS.md`](AGENTS.md) — canonical baseline, invariánsok, tesztpolitika;
- [`STATUS.md`](STATUS.md) — rövid aktuális állapot;
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — rendszerfelépítés;
- [`docs/RELEASE_STANDARD.md`](docs/RELEASE_STANDARD.md) — projektlokális release-szabvány, V4.2;
- [`docs/RELEASE_CONTRACT.md`](docs/RELEASE_CONTRACT.md) — ehhez a release-hez rögzített gate-ek;
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — módosítási és PR szabályok;
- [`CHANGELOG.md`](CHANGELOG.md) — változástörténet.
