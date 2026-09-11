# Roadmap — tervezett, még nem production funkciók

Ez a fájl szándékosan különválasztja a **már működő** és a **csak megtervezett** funkciókat.

A README és a `HOW_IT_WORKS.md` a jelenlegi production állapotot írja le. Ami itt szerepel, azt addig nem szabad kész funkcióként kommunikálni, amíg külön validáció nem igazolja.

## 1. Automatikus időszakos forrásfrissítés

**Állapot: TERVEZETT**

Cél:

- oldal megnyitásakor azonnali LIVE ellenőrzés;
- nyitva hagyott oldalnál kb. **4 óránként** könnyű forrásellenőrzés;
- ha a tab hosszabb ideig háttérben volt, visszatéréskor új ellenőrzés, ha az utolsó check már régi;
- hálózati hiba esetén ne vesszen el a legutóbbi működő adat.

Fontos: ne csak a buildszám változását figyelje, mert az SCMDB ugyanahhoz a buildhez is publikálhat javított exportot.

## 2. Last-known-good cache

**Állapot: TERVEZETT**

Tervezett prioritás:

1. frissen validált LIVE adat;
2. utolsó validált, böngészőben cache-elt LIVE adat;
3. beépített fallback.

A cache csak validált adatot menthet el.

## 3. Sémaváltozás-felismerés

**Állapot: TERVEZETT**

Ha a forrásban:

- egy mező átneveződik;
- új schema verzió jelenik meg;
- új locationType érkezik;
- eddig kötelező mező eltűnik;

akkor a program ne találgasson.

Tervezett jelzés például:

`Új SCMDB adatformátum észlelve – adapterfrissítés szükséges. Fallback aktív.`

A technikai panel kiírhatja a konkrét eltérést is.

## 4. Source-driven Felszín / Űr besorolás

**Állapot: TERVEZETT**

A jelenlegi név/pattern alapú besorolást fokozatosan a Krovax `locationType` és kapcsolódó location metadata váltsa fel.

Tervezett alaplogika:

- `planet`, `moon` → Felszín;
- `belt`, `lagrange`, `cluster` → Űr;
- Breaker Stations → Űr override;
- ringek → Űr;
- ismeretlen új típus → ne legyen automatikusan besorolva, hanem kérjen adapter-szabályt.

## 5. Új locationök automatikus felvétele

**Állapot: TERVEZETT**

Ha új, egyértelmű mining location kerül a LIVE forrásba, a program automatikusan tudja létrehozni a szükséges runtime registry bejegyzést.

Nem cél minden Star Citizen location automatikus listázása: csak az jelenjen meg, amelyhez tényleges mining adat tartozik.

## 6. Új materialok automatikus felvétele

**Állapot: TERVEZETT**

Hosszabb távon a fix `MATERIALS` lista helyett:

`beépített baseline + validált LIVE új materialok = runtime material lista`

Automatikusan csak akkor jöjjön létre új material sor, ha a forrásból megbízhatóan rendelkezésre áll a szükséges minimum adat.

Hiányzó Quality/crafting/refinery adatot nem szabad kitalálni.

## 7. Refinery és refinery bonus automatikus frissítés

**Állapot: TERVEZETT**

A jelenlegi UEX-alapú beágyazott refinery registry később élő frissítést kaphat.

Előbb auditálni kell, hogy a kiválasztott forrásból 1:1-ben előállítható-e a jelenlegi funkció:

- refinery neve;
- system;
- material bonus;
- pozitív top bonus;
- tie kezelés.

Ha egy adat csak UEX-ben érhető el, akkor maradhat forrásspecifikus adapter.

## 8. Csak szükséges fájlok letöltése

**Állapot: TERVEZÉSI ALAPELV**

A jövőbeni automata frissítő se töltsön le mindent.

Preferált:

- `latest.json` – mindig;
- `mining_data` – mining/radar/location;
- `crafting_blueprints` / `crafting_items` – csak amikor szükséges;
- refinery célfájl – csak refinery funkcióhoz.

Kerülendő, ha nincs rá szükség:

- teljes `merged`;
- mission history;
- delta fájlok;
- egyéb, a tool által nem használt adatok.

## 9. Frissítési diagnosztika

**Állapot: TERVEZETT**

Felhasználói státusz:

- `✓ LIVE adat friss · ellenőrizve HH:MM`
- `↻ Frissítés ellenőrzése…`
- `⚠ Forrás nem elérhető · utolsó jó adat használatban`
- `⚠ Új séma · fallback aktív`

Technikai részben opcionálisan:

- új material;
- új location;
- új locationType;
- hiányzó field;
- adapterfrissítést igénylő eltérés.

## 10. Release gate

Egy roadmap funkció csak akkor válhat productionné, ha:

1. a jelenlegi UI és működés nem romlik;
2. fallback megmarad;
3. az új adatforrás validációja külön tesztelt;
4. desktop és mobile regresszió nincs;
5. a két production HTML azonos;
6. a dokumentáció frissül;
7. a changelogban megjelenik.
