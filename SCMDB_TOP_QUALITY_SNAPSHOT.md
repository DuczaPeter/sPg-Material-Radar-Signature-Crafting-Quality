# sPg SCMDB — legmagasabb képen jelzett nyersanyag-esélyek rendszerenként

## Forrás és cél

- Forrásarchívum: `5af19abc-ee45-418a-b599-7adeaf7f3c0b.zip`
- Forrás: 52 darab, 2026-08-24-én készült SCMDB képernyőkép a ZIP-ben.
- Cél: minden képen szereplő nyersanyagnál rendszerenként kizárólag azt a helyet vagy azokat a holtversenyes helyeket megtartani, ahol a **képen látható nagy, cián százalék** a legmagasabb az adott rendszerben.
- A `≤` jel pontosan megmarad ott, ahol a képen is szerepel. A Harvest kártyákon a százalék `≤` nélkül jelenik meg, ezért itt is úgy marad.
- Ez az MD **nem értelmezi át** a SCMDB százalék jelentését. A `Max. képi esély` mező egyszerűen a kártyán látható nagy cián százalékot jelenti.
- Ha több hely ugyanazt a legmagasabb százalékot kapta egy rendszeren belül, **mindegyik megmarad**.
- Ha egy rendszer nem szerepel egy anyagnál, az csak azt jelenti, hogy a feltöltött képen nem volt abból a rendszerből rekord. Ebből önmagában nem szabad azt állítani, hogy az anyag a játékban biztosan nem található ott.
- Külső webes adatot, API-t vagy becslést nem kevertem bele. A fájl kizárólag a képekből készült.

## AI handoff szabály

Ha ezt a fájlt később más AI vagy kód használja, akkor a táblák sorait tekintse **kurált, képalapú top-location snapshotnak**. Ne egészítse ki találgatással, ne dobja el a holtversenyes helyeket, és ne keverje más patch vagy más adatforrás százalékaival forrásjelölés nélkül.

**Kurátori Hurston-szabály:** Hurston nincs kizárva. Ha Stantonban Hurston egyedül áll a legmagasabb Quality-tieren, az első tier mellett a következő legjobb tier is megmarad, minden ottani holtversenyes hellyel. Ez ranking-tier szabály, nem önkényes két-helyes vágás.

## Rövid összesítés

- Anyagok száma: **52**
- Stanton: **41** anyaghoz van megtartott rendszer-szintű maximum.
- Pyro: **34** anyaghoz van megtartott rendszer-szintű maximum.
- Nyx: **9** anyaghoz van megtartott rendszer-szintű maximum.

## Stanton

| Anyag | Mód | Max. képi esély | Csak a legjobb hely(ek) | Forráskép | Megjegyzés |
|---|---|---:|---|---|---|
| Agricium | Ship | ≤4.5% | Cellin; Daymar; Lagrange D (ARC-L3, CRU-L5, MIC-L4); Yela | `Képernyőkép 2026-08-24 183418.png` |  |
| Aluminum | Ship | ≤3.0% + következő tier ≤2.4% | Hurston; Magda; Ita | `Képernyőkép 2026-08-24 183434.png` | **Hurston-szabály:** Hurston az egyetlen első hely (≤3.0%); ezért a következő tier is megmarad: Magda és Ita (≤2.4%). |
| Aslarite | Ship | ≤1.9% | Ita; Lagrange B (ARC-L5, CRU-L4, MIC-L3) | `Képernyőkép 2026-08-24 183443.png` |  |
| Beryl | Ship | ≤2.1% | Aaron Halo; Lagrange D (ARC-L3, CRU-L5, MIC-L4); Wala | `Képernyőkép 2026-08-24 183452.png` |  |
| Bexalite | Ship | ≤2.1% | Lagrange E (CRU-L1, CRU-L2, HUR-L3) | `Képernyőkép 2026-08-24 183501.png` |  |
| Borase | Ship | ≤2.8% | Lagrange A (HUR-L1, HUR-L4) | `Képernyőkép 2026-08-24 183514.png` |  |
| Copper | Ship | ≤4.7% | Clio; Euterpe | `Képernyőkép 2026-08-24 183651.png` |  |
| Corundum | Ship | ≤26.8% | Aberdeen | `Képernyőkép 2026-08-24 183701.png` |  |
| Gold | Ship | ≤2.1% | Lagrange B (ARC-L5, CRU-L4, MIC-L3) | `Képernyőkép 2026-08-24 183710.png` |  |
| Hephaestanite | Ship | ≤2.2% | microTech; Calliope | `Képernyőkép 2026-08-24 183725.png` |  |
| Ice | Ship | ≤6.3% | Clio; Euterpe | `Képernyőkép 2026-08-24 183734.png` |  |
| Iron | Ship | ≤5.5% | Magda; Lyria | `Képernyőkép 2026-08-24 183745.png` |  |
| Laranite | Ship | ≤3.3% | Lagrange A (HUR-L1, HUR-L4); Wala; Lyria | `Képernyőkép 2026-08-24 183755.png` |  |
| Ouratite | Ship | ≤0.7% | Aberdeen; Arial; Hurston; Yela Asteroid Belt | `Képernyőkép 2026-08-24 183819.png` |  |
| Quantainium | Ship | ≤0.2% | Calliope; Aaron Halo; Aberdeen; Arial; Cellin; Clio; Daymar; Euterpe; Hurston; Ita; Magda; Wala; Yela; microTech; Lyria | `Képernyőkép 2026-08-24 183829.png` |  |
| Quartz | Ship | ≤4.1% | Daymar | `Képernyőkép 2026-08-24 183840.png` |  |
| Silicon | Ship | ≤4.1% | Daymar | `Képernyőkép 2026-08-24 183912.png` |  |
| Taranite | Ship | ≤2.1% | Cellin; Clio; Euterpe; Lagrange F (HUR-L2, ARC-L1, ARC-L2, ARC-L4); Yela | `Képernyőkép 2026-08-24 183932.png` |  |
| Tin | Ship | ≤6.9% + következő tier ≤5.5% | Hurston; Ita | `Képernyőkép 2026-08-24 183946.png` | **Hurston-szabály:** Hurston az egyetlen első hely; ezért a következő tier, Ita (≤5.5%), is megmarad. |
| Titanium | Ship | ≤4.5% | Aberdeen; Lagrange E (CRU-L1, CRU-L2, HUR-L3); Yela Asteroid Belt | `Képernyőkép 2026-08-24 183959.png` |  |
| Torite | Ship | ≤4.5% | Lagrange C (HUR-L5, MIC-L1, MIC-L2, MIC-L5, CRU-L3) | `Képernyőkép 2026-08-24 184011.png` |  |
| Tungsten | Ship | ≤4.5% | Lagrange F (HUR-L2, ARC-L1, ARC-L2, ARC-L4) | `Képernyőkép 2026-08-24 184021.png` |  |
| Beradom | ROC | ≤64.0% + következő tier ≤56.0% | Hurston; Cellin; Wala | `Képernyőkép 2026-08-24 184031.png` | **Hurston-szabály:** Hurston az egyetlen első hely; ezért a következő tier, Cellin és Wala (≤56.0%), is megmarad. |
| Carinite | ROC | ≤100.0% | Hathor Caves | `Képernyőkép 2026-08-24 184040.png` |  |
| Feynmaline | ROC | ≤64.0% | Aberdeen | `Képernyőkép 2026-08-24 184051.png` |  |
| Glacosite | ROC | ≤88.0% | Euterpe | `Képernyőkép 2026-08-24 184102.png` |  |
| Aphorite | FPS | ≤61.1% | Calliope; Clio; Euterpe; Lyria; Wala; microTech | `Képernyőkép 2026-08-24 184115.png` | A Nyx / Breaker Stations Interior 75.0% kártyán a forrás figyelmeztetése: „Based on personal guesstimate, not game data”. |
| Carinite Pure | FPS | ≤0.5% | Hathor Caves | `Képernyőkép 2026-08-24 184128.png` |  |
| Dolivine | FPS | ≤36.9% | Calliope; Clio; Euterpe; Lyria; Wala; microTech | `Képernyőkép 2026-08-24 184147.png` |  |
| Hadanite | FPS | ≤6.0% | Aberdeen; Arial; Cellin; Daymar; Hurston; Ita; Magda; Yela | `Képernyőkép 2026-08-24 184157.png` |  |
| Jaclium | FPS | ≤19.5% | Hathor Caves | `Képernyőkép 2026-08-24 184206.png` |  |
| Janalite | FPS | ≤2.0% | Calliope; Clio; Euterpe; Lyria; Wala; microTech | `Képernyőkép 2026-08-24 184218.png` |  |
| Saldynium | FPS | ≤15.8% | Hathor Caves | `Képernyőkép 2026-08-24 184233.png` |  |
| Degnous | Harvest | 12.2% | Hurston | `Képernyőkép 2026-08-24 184256.png` |  |
| Golden Medmon | Harvest | 24.7% | microTech | `Képernyőkép 2026-08-24 184316.png` |  |
| Heart of the Woods | Harvest | 24.7% | microTech | `Képernyőkép 2026-08-24 184324.png` |  |
| Pitambu | Harvest | 24.7% | microTech | `Képernyőkép 2026-08-24 184338.png` |  |
| Prota | Harvest | 100.0% | Arial | `Képernyőkép 2026-08-24 184345.png` |  |
| Revenant | Harvest | 100.0% | Daymar | `Képernyőkép 2026-08-24 184353.png` |  |
| Sunset Berry | Harvest | 24.7% | microTech | `Képernyőkép 2026-08-24 184359.png` |  |
| Comp Board | Harvest | 12.2% | Hurston | `Képernyőkép 2026-08-24 184414.png` |  |

## Pyro

| Anyag | Mód | Max. képi esély | Csak a legjobb hely(ek) | Forráskép | Megjegyzés |
|---|---|---:|---|---|---|
| Agricium | Ship | ≤2.2% | Pyro V-f (Vuur); Pyro VI (Terminus) | `Képernyőkép 2026-08-24 183418.png` |  |
| Aluminum | Ship | ≤1.0% | Pyro Deep Space Asteroids | `Képernyőkép 2026-08-24 183434.png` |  |
| Aslarite | Ship | ≤1.9% | Pyro V-e (Fuego) | `Képernyőkép 2026-08-24 183443.png` |  |
| Bexalite | Ship | ≤2.1% | Pyro V-f (Vuur) | `Képernyőkép 2026-08-24 183501.png` |  |
| Borase | Ship | ≤2.8% | Pyro IV; Pyro III (Bloom); Pyro V-c (Adir) | `Képernyőkép 2026-08-24 183514.png` |  |
| Copper | Ship | ≤3.8% | Pyro I | `Képernyőkép 2026-08-24 183651.png` |  |
| Corundum | Ship | ≤13.4% | Pyro Deep Space Asteroids | `Képernyőkép 2026-08-24 183701.png` |  |
| Gold | Ship | ≤2.1% | Pyro V-a (Ignis); Pyro V-b (Vatra); Pyro VI (Terminus) | `Képernyőkép 2026-08-24 183710.png` |  |
| Hephaestanite | Ship | ≤2.2% | Pyro II (Monox) | `Képernyőkép 2026-08-24 183725.png` |  |
| Ice | Ship | ≤3.3% | Pyro VI (Terminus) | `Képernyőkép 2026-08-24 183734.png` |  |
| Iron | Ship | ≤6.8% | Pyro V-c (Adir) | `Képernyőkép 2026-08-24 183745.png` |  |
| Laranite | Ship | ≤3.3% | Pyro IV | `Képernyőkép 2026-08-24 183755.png` |  |
| Ouratite | Ship | ≤0.7% | Terminus Ring | `Képernyőkép 2026-08-24 183819.png` |  |
| Quartz | Ship | ≤4.1% | Pyro III (Bloom) | `Képernyőkép 2026-08-24 183840.png` |  |
| Riccite | Ship | ≤1.6% | Pyro Deep Space Asteroids; Pyro III (Bloom); Pyro V-a (Ignis); Pyro V-b (Vatra); Pyro V-c (Adir); Pyro VI (Terminus) | `Képernyőkép 2026-08-24 183851.png` |  |
| Silicon | Ship | ≤4.2% | Pyro V-a (Ignis); Pyro V-b (Vatra) | `Képernyőkép 2026-08-24 183912.png` |  |
| Stileron | Ship | ≤0.3% | Pyro I; Pyro II (Monox); Pyro IV; Pyro Deep Space Asteroids; Pyro III (Bloom); Pyro VI (Terminus) | `Képernyőkép 2026-08-24 183921.png` |  |
| Tin | Ship | ≤5.7% | Pyro V-a (Ignis) | `Képernyőkép 2026-08-24 183946.png` |  |
| Titanium | Ship | ≤4.5% | Terminus Ring | `Képernyőkép 2026-08-24 183959.png` |  |
| Torite | Ship | ≤4.5% | Pyro Deep Space Asteroids | `Képernyőkép 2026-08-24 184011.png` |  |
| Tungsten | Ship | ≤4.5% | Pyro V-c (Adir); Pyro V-d (Fairo) | `Képernyőkép 2026-08-24 184021.png` |  |
| Beradom | ROC | ≤100.0% | Pyro I; Pyro III (Bloom); Pyro V-d (Fairo) | `Képernyőkép 2026-08-24 184031.png` |  |
| Feynmaline | ROC | ≤100.0% | Pyro IV; Pyro V-a (Ignis); Pyro V-e (Fuego); Pyro VI (Terminus) | `Képernyőkép 2026-08-24 184051.png` |  |
| Glacosite | ROC | ≤100.0% | Pyro II (Monox); Pyro V-c (Adir); Pyro V-f (Vuur) | `Képernyőkép 2026-08-24 184102.png` |  |
| Aphorite | FPS | ≤61.1% | Pyro III (Bloom); Pyro V-e (Fuego); Pyro VI (Terminus) | `Képernyőkép 2026-08-24 184115.png` | A Nyx / Breaker Stations Interior 75.0% kártyán a forrás figyelmeztetése: „Based on personal guesstimate, not game data”. |
| Dolivine | FPS | ≤36.9% | Pyro III (Bloom); Pyro V-e (Fuego); Pyro VI (Terminus) | `Képernyőkép 2026-08-24 184147.png` |  |
| Hadanite | FPS | ≤6.0% | Pyro I; Pyro II (Monox); Pyro IV; Pyro V-a (Ignis); Pyro V-b (Vatra); Pyro V-c (Adir); Pyro V-d (Fairo); Pyro V-f (Vuur) | `Képernyőkép 2026-08-24 184157.png` |  |
| Janalite | FPS | ≤2.0% | Pyro III (Bloom); Pyro V-e (Fuego); Pyro VI (Terminus) | `Képernyőkép 2026-08-24 184218.png` |  |
| Amiant | Harvest | 50.0% | Pyro IV | `Képernyőkép 2026-08-24 184241.png` |  |
| Decari | Harvest | 46.2% | Pyro I | `Képernyőkép 2026-08-24 184249.png` |  |
| Flareweed | Harvest | 50.0% | Pyro IV | `Képernyőkép 2026-08-24 184303.png` |  |
| Fotia | Harvest | 30.8% | Pyro I | `Képernyőkép 2026-08-24 184309.png` |  |
| Pingala | Harvest | 100.0% | Pyro II (Monox) | `Képernyőkép 2026-08-24 184331.png` |  |
| Wuotan | Harvest | 23.1% | Pyro I | `Képernyőkép 2026-08-24 184406.png` |  |

## Nyx

| Anyag | Mód | Max. képi esély | Csak a legjobb hely(ek) | Forráskép | Megjegyzés |
|---|---|---:|---|---|---|
| Aluminum | Ship | ≤1.4% | Keeger Belt | `Képernyőkép 2026-08-24 183434.png` |  |
| Bexalite | Ship | ≤2.1% | Glaciem Ring; Keeger Belt | `Képernyőkép 2026-08-24 183501.png` |  |
| Ice | Ship | ≤3.3% | Glaciem Ring; Keeger Belt | `Képernyőkép 2026-08-24 183734.png` |  |
| Iron | Ship | ≤3.3% | Glaciem Ring | `Képernyőkép 2026-08-24 183745.png` |  |
| Lindinium | Ship | ≤1.6% | Glaciem Ring; Keeger Belt | `Képernyőkép 2026-08-24 183807.png` |  |
| Savrilium | Ship | ≤6.8% | Breaker Stations Large Geode | `Képernyőkép 2026-08-24 183900.png` | A forráskártya típusa Event. |
| Torite | Ship | ≤4.5% | Glaciem Ring; Keeger Belt | `Képernyőkép 2026-08-24 184011.png` |  |
| Aphorite | FPS | ≤75.0% | Breaker Stations Interior | `Képernyőkép 2026-08-24 184115.png` | A Nyx / Breaker Stations Interior 75.0% kártyán a forrás figyelmeztetése: „Based on personal guesstimate, not game data”. |
| Sadaryx | FPS | ≤25.0% | Breaker Stations Interior | `Képernyőkép 2026-08-24 184226.png` | A forrás figyelmeztetése: „Based on personal guesstimate, not game data”. |

## Forráscsoportok és rövidítések a képekről

- `Aaron Halo`: a képen „All Mining Base Locations”.
- `Pyro Deep Space Asteroids`: a képen „All Cluster, RAB and RMB Locations”.
- `Lagrange A`: HUR-L1, HUR-L4.
- `Lagrange B`: ARC-L5, CRU-L4, MIC-L3.
- `Lagrange C`: HUR-L5, MIC-L1, MIC-L2, MIC-L5, CRU-L3.
- `Lagrange D`: ARC-L3, CRU-L5, MIC-L4.
- `Lagrange E`: CRU-L1, CRU-L2, HUR-L3.
- `Lagrange F`: HUR-L2, ARC-L1, ARC-L2, ARC-L4.
- `Breaker Stations Interior`: Event hely. Aphorite és Sadaryx esetén a képen külön figyelmeztetés szerepel, hogy az érték személyes becslés, nem game data.
- `Breaker Stations Large Geode`: Event hely a Savrilium képen.
- `Hathor Caves`: Cave.
- `Terminus Ring`: a képen megjegyzés jelzi, hogy összetételt oszt a Yela Asteroid Belt (Stanton) helyszínnel.

## Anyag → forráskép index

| Anyag | Mód | Forráskép |
|---|---|---|
| Agricium | Ship | `Képernyőkép 2026-08-24 183418.png` |
| Aluminum | Ship | `Képernyőkép 2026-08-24 183434.png` |
| Aslarite | Ship | `Képernyőkép 2026-08-24 183443.png` |
| Beryl | Ship | `Képernyőkép 2026-08-24 183452.png` |
| Bexalite | Ship | `Képernyőkép 2026-08-24 183501.png` |
| Borase | Ship | `Képernyőkép 2026-08-24 183514.png` |
| Copper | Ship | `Képernyőkép 2026-08-24 183651.png` |
| Corundum | Ship | `Képernyőkép 2026-08-24 183701.png` |
| Gold | Ship | `Képernyőkép 2026-08-24 183710.png` |
| Hephaestanite | Ship | `Képernyőkép 2026-08-24 183725.png` |
| Ice | Ship | `Képernyőkép 2026-08-24 183734.png` |
| Iron | Ship | `Képernyőkép 2026-08-24 183745.png` |
| Laranite | Ship | `Képernyőkép 2026-08-24 183755.png` |
| Lindinium | Ship | `Képernyőkép 2026-08-24 183807.png` |
| Ouratite | Ship | `Képernyőkép 2026-08-24 183819.png` |
| Quantainium | Ship | `Képernyőkép 2026-08-24 183829.png` |
| Quartz | Ship | `Képernyőkép 2026-08-24 183840.png` |
| Riccite | Ship | `Képernyőkép 2026-08-24 183851.png` |
| Savrilium | Ship | `Képernyőkép 2026-08-24 183900.png` |
| Silicon | Ship | `Képernyőkép 2026-08-24 183912.png` |
| Stileron | Ship | `Képernyőkép 2026-08-24 183921.png` |
| Taranite | Ship | `Képernyőkép 2026-08-24 183932.png` |
| Tin | Ship | `Képernyőkép 2026-08-24 183946.png` |
| Titanium | Ship | `Képernyőkép 2026-08-24 183959.png` |
| Torite | Ship | `Képernyőkép 2026-08-24 184011.png` |
| Tungsten | Ship | `Képernyőkép 2026-08-24 184021.png` |
| Beradom | ROC | `Képernyőkép 2026-08-24 184031.png` |
| Carinite | ROC | `Képernyőkép 2026-08-24 184040.png` |
| Feynmaline | ROC | `Képernyőkép 2026-08-24 184051.png` |
| Glacosite | ROC | `Képernyőkép 2026-08-24 184102.png` |
| Aphorite | FPS | `Képernyőkép 2026-08-24 184115.png` |
| Carinite Pure | FPS | `Képernyőkép 2026-08-24 184128.png` |
| Dolivine | FPS | `Képernyőkép 2026-08-24 184147.png` |
| Hadanite | FPS | `Képernyőkép 2026-08-24 184157.png` |
| Jaclium | FPS | `Képernyőkép 2026-08-24 184206.png` |
| Janalite | FPS | `Képernyőkép 2026-08-24 184218.png` |
| Sadaryx | FPS | `Képernyőkép 2026-08-24 184226.png` |
| Saldynium | FPS | `Képernyőkép 2026-08-24 184233.png` |
| Amiant | Harvest | `Képernyőkép 2026-08-24 184241.png` |
| Decari | Harvest | `Képernyőkép 2026-08-24 184249.png` |
| Degnous | Harvest | `Képernyőkép 2026-08-24 184256.png` |
| Flareweed | Harvest | `Képernyőkép 2026-08-24 184303.png` |
| Fotia | Harvest | `Képernyőkép 2026-08-24 184309.png` |
| Golden Medmon | Harvest | `Képernyőkép 2026-08-24 184316.png` |
| Heart of the Woods | Harvest | `Képernyőkép 2026-08-24 184324.png` |
| Pingala | Harvest | `Képernyőkép 2026-08-24 184331.png` |
| Pitambu | Harvest | `Képernyőkép 2026-08-24 184338.png` |
| Prota | Harvest | `Képernyőkép 2026-08-24 184345.png` |
| Revenant | Harvest | `Képernyőkép 2026-08-24 184353.png` |
| Sunset Berry | Harvest | `Képernyőkép 2026-08-24 184359.png` |
| Wuotan | Harvest | `Képernyőkép 2026-08-24 184406.png` |
| Comp Board | Harvest | `Képernyőkép 2026-08-24 184414.png` |

## Adatintegritási megjegyzés

A nyersanyag-nevek és helynevek a képeken látható alakot követik. Például a forrásképen `Quantainium` szerepel; ezt itt nem javítottam át más írásmódra, hogy a snapshot visszakereshető maradjon.