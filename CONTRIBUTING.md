# Hibajelzés és hozzájárulás

A projekt Star Citizen game data alapú, ezért egy jó hibajelzésnél a bizonyíték fontosabb, mint a feltételezés.

## Hibajelzéshez kérjük

Lehetőleg add meg:

- Star Citizen build / patch;
- érintett material vagy komponens neve;
- melyik funkció hibás: Radar / Quality / Location / Crafting / Refinery / Target Mining / Mobile;
- mit mutat most;
- mit kellene mutatnia;
- screenshot, ha van;
- forráslink, ha van: SCMDB / Krovax / Star Citizen Wiki API / UEX / egyéb megbízható forrás.

## Jó bug report példa

**Anyag:** Ouratite  
**Patch:** 4.10 LIVE  
**Funkció:** Best Quality Location  
**Hiba:** Hurston százalék túl magas  
**Elvárt:** SCMDB szerint ≤0.7%  
**Bizonyíték:** screenshot + Krovax mining_data rekord

## Fejlesztési alapelvek

- Ne találjunk ki hiányzó Star Citizen adatot.
- Új adatforrást csak validáció után kapcsoljunk productionre.
- A beépített fallbacket ne töröljük indok nélkül.
- A single-file HTML jelleg maradjon meg.
- Desktop javítás ne rontsa a mobile layoutot és fordítva.
- A két production HTML tartalma maradjon azonos.
- Meglévő, működő UI-t ne tervezzünk újra egy adatjavítás kedvéért.
- Új location/material schema esetén adapter készüljön, ne hardcoded találgatás.

## Pull request / kódmódosítás ellenőrzőlista

- JavaScript syntax check PASS.
- Nincs véletlen horizontális mobile scroll.
- Radar layout desktopon változatlan, ha nem UI-scope a módosítás.
- Fallback útvonal működik.
- LIVE adat csak validáció után kerül alkalmazásra.
- Dokumentáció frissítve.
- `CHANGELOG.md` frissítve, ha felhasználó számára látható változás történt.
