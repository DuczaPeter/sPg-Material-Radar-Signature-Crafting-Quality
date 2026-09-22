# User Guide

## 1. Start

No installation is required. Open `index.html` in a modern browser or use the GitHub Pages deployment.

The core HTML, CSS, JavaScript and fallback data are packaged in a single file. Internet access is required for LIVE source refreshes.

## 2. Top controls

### View

- `Radar order`: full radar list in project order.
- `Low Quality · Q500 / Integrity`: materials with low-Quality / Integrity-oriented crafting uses.
- `High Quality · Q800 minimum / Q900+ functional`: high-Quality-relevant crafting uses.

### Location filter

- `All locations`: no place-type filter.
- `Surface`: materials and Best Quality locations classified as Surface by the current classifier.
- `Space`: Lagrange/ring/belt/asteroid/Aaron Halo/Breaker Station style mining locations.

The filter also removes radar rows that have no displayable Best Quality location in the selected category.

### Clear highlights

Clears expanded/selected material state.

### Target Mining

Opens the multi-material search panel.

### Language

Hungarian/English. The preference is stored in browser localStorage.

## 3. Reading the radar list

Material names are on the left and possible signature capsules on the right. Capsule count and styling follow the project's mining/rarity model.

On mobile, long Common/ROC/FPS rows can use compressed or multi-row presentation to avoid horizontal page scrolling.

## 4. Material details

Click a row to expand:

- Best Quality Locations;
- Low Quality / Q500 / Integrity crafting use;
- High Quality / Q800–Q900+ use;
- radar summary;
- refinery bonus.

Some crafting family names open a component popover.

## 5. Best Quality Locations

Rows can appear for Stanton, Pyro and Nyx. Equal top values preserve ties. A few explicitly documented project exceptions retain a second tier.

Aaron Halo is linked to an external route helper.

## 6. Target Mining workflow

1. Open `Target Mining`.
2. Select at least two materials in the radar list.
3. Optionally filter Stanton/Pyro/Nyx.
4. Review common top locations.
5. Use `Show only these on radar` to focus the main radar list.

Ranking prioritizes the number of selected materials covered, then uses aggregated Quality chance as a tie aid.

**Current limitation:** the topbar `Surface / Space` selection does not directly filter Target Mining result locations yet.

## 7. LIVE and fallback state

If the Krovax manifest or mining payload is unavailable/invalid, the embedded fallback remains available. The current production build refreshes on page load; four-hour periodic refresh is still a roadmap item.

## 8. Troubleshooting

### LIVE version does not appear

Possible causes include network/CORS/GitHub availability/schema changes. Fallback operation can still continue.

### A location appears under the wrong place type

The current classifier is name/pattern based. Report the full location name and source `locationType` when possible so the adapter can be corrected from evidence.

### Component/recipe differs from game data

Report the component name, game build and preferably blueprint/stat-preview evidence. Do not patch from guesswork.
