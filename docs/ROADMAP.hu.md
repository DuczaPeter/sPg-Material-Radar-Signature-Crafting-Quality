# Roadmap

Csak tervezett feladatok. Ezeket nem szabad production funkcióként kommunikálni.

1. **Automatikus forrásellenőrzés:** megnyitáskor + kb. 4 óránként, tab-visszatéréskor frissességellenőrzéssel.
2. **Last-known-good cache:** friss valid LIVE → utolsó validált LIVE → beépített fallback.
3. **Schema-drift diagnosztika:** új/átnevezett mező, új locationType, hiányzó kötelező adat jelzése.
4. **Source-driven Felszín/Űr:** `planet/moon → Felszín`, `belt/lagrange/cluster → Űr`, Breaker/ring explicit handling, unknown fail-closed.
5. **Új mining location automatikus felvétele** csak tényleges mining adattal.
6. **Új material runtime létrehozása** csak elegendő validált mező esetén.
7. **Refinery LIVE frissítés** külön forrásaudit után.
8. **Csak szükséges source fájlok letöltése**, a teljes `merged` kerülésével.
9. **Frissítési diagnosztika** felhasználói és technikai státusszal.
10. **Target Mining + Felszín/Űr integráció** úgy, hogy először environment szerint szűrjön, és csak utána rangsoroljon Quality alapján.
11. **Lagrange sub-point audit**, hogy csak ténylegesen source-backed L-pont szerepeljen.
12. **Crafting component freshness audit** current LIVE buildre.

Minden roadmap feature külön scope, regressziós teszt és dokumentációfrissítés után válhat productionné.
