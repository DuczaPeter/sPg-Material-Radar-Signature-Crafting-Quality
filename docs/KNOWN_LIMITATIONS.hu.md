# Ismert korlátok

## ATTENTION

### Felszín / Űr classifier

A current production build név/pattern alapján osztályoz. Ismeretlen location név végül Felszínként kerülhet kezelésre. Ez nem teljes source-driven `locationType` logika.

### Lagrange mapping

A `Lagrange A–F` megjelenítési mapping több konkrét ARC/CRU/HUR/MIC L-pontot írhat ki. Ez megjelenítési mapping, nem önmagában bizonyíték arra, hogy minden felsorolt L-ponton azonos ore distribution van. Ezt source-driven mappinggel kell kiváltani/ellenőrizni.

### Target Mining + helyszűrő

A topbar `Felszín / Űr` szűrő nem szűri közvetlenül a Target Mining eredményhelyeit.

### Frissítési ciklus

Nincs 4 órás automatikus újraellenőrzés. A mining LIVE ellenőrzés oldalbetöltéskor történik.

### Last-known-good cache

Nincs megvalósítva. Hálózati/source hiba esetén a beépített fallback marad.

### Refinery

A refinery bonus registry beágyazott; nem LIVE UEX API.

### Crafting/component freshness

A komponensregistryben több `sourceVersion` 4.9.0 vagy 4.10.0. A ship-weapon runtime loader is pinned 4.10.0 commitot használ. Ezeket nem szabad automatikusan current 4.10.1 LIVE-nak nevezni.

### Új materialok

A LIVE mining adapter nem hoz létre teljesen új UI material sort minden ismeretlen source materialból. Ehhez külön schema/UX/crafting/refinery szabály kell.

## UNVERIFIED ebben a release körben

- end-to-end LIVE browser fetch;
- minden crafting recipe current LIVE egyezése;
- minden Lagrange-alpont ore elérhetősége;
- pixel-level public deployment parity.
