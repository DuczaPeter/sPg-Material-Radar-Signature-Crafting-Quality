# sPg Material Radar – Mobile / Target Mining regression validation

## HU
A javítás kizárólag a mobil radar-kapszula méretezést és a `layoutRadar()` geometriát érinti. A korábbi Target Mining Large Collapsed buildhöz képest a fő adat-registryk változatlanok.

### Ellenőrzések
- required_symbols_present: **PASS**
- target_checkbox_present: **PASS**
- target_common_search_present: **PASS**
- quality_locations_present: **PASS**
- refinery_present: **PASS**
- language_switch_present: **PASS**
- aaron_halo_present: **PASS**
- quantum_drive_registry_57: **PASS**
- mobile_safe_override: **PASS**
- desktop_target_large_preserved: **PASS**
- expanded_details_preserved: **PASS**
- mobile_geometry_no_overlap: **PASS**
- duplicate_html_identical: **PASS**
- data_registries_unchanged_vs_previous: **PASS**
- Quantum Drive registry rekordok: **57**
- Adat-registry hash egyezés: `{'MATERIALS': True, 'COMPONENT_REGISTRY': True, 'QUALITY_LOCATION_REGISTRY': True, 'REFINERY_BONUS_REGISTRY': True}`

### Mobil geometria
| Viewport | Track approx. | Oszloptáv | Renderelt kapszula | Szabad rés |
|---:|---:|---:|---:|---:|
| 360px | 256.0px | 28.4px | 22.8px | 5.7px |
| 390px | 286.0px | 31.8px | 25.4px | 6.4px |
| 430px | 326.0px | 36.2px | 29.0px | 7.2px |
| 560px | 447.2px | 49.7px | 31.0px | 18.7px |
| 768px | 618.0px | 68.7px | 35.7px | 33.0px |
| 900px | 772.0px | 85.8px | 42.0px | 43.8px |
| 1024px | 881.1px | 97.9px | 54.8px | 43.1px |
| 1440px | 1247.2px | 138.6px | 77.6px | 61.0px |
| 1920px | 1690.0px | 187.8px | 92.0px | 95.8px |

A pozitív `Szabad rés` azt jelenti, hogy a kapszulaszélesség kisebb az egymást követő fix radaroszlopok közti távolságnál.

## EN
The fix is restricted to mobile radar-capsule sizing and `layoutRadar()` geometry. Core data registries are unchanged versus the previous Target Mining Large Collapsed build.

All PASS checks above are the release regression gate for this patch.