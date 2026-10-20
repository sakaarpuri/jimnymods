# that SUV Mod

Ideas and resources for modifying your Jimny, with a live 3D build studio, look inspiration, parts and India-focused sourcing.

## What works

- Original procedural Three.js vehicle geometry. Parts, paint, finishes, graphics and grilles change the scene in real time.
- Orbit, zoom, five camera views including a cabin cutaway, stock comparison, night lighting and an expanded studio.
- Forty catalogue entries. Eight popular starting points; exterior, interior, sourcing, installation and saved filters.
- Internal sourcing results specific to the chosen part, look or package. External links require a separate action.
- Workshop directory with city/region filtering and nine Delhi NCR entries.
- Editable build lists, undo, local saved versions, share links, print and high-resolution 3D image export.
- Responsive workspace: desktop side-by-side studio; compact sticky preview when browsing parts on phones.

## Development and release

Requires Node 22. Run `npm ci` then `npm run build`. The release is generated in `dist/`; deploy only that directory. Netlify is configured by `netlify.toml`. For local work, `npm run dev` serves the repository at http://localhost:8080; rebuild after editing the 3D source.

Main files: `index.html` contains catalogue data and planner state, `design.css` defines the current design, and `src/viewer3d.js` contains the original 3D geometry and rendering. `assets/viewer3d.js` is the bundled viewer. Fonts and Three.js are served locally, with licences included under `assets/fonts` and `assets/licenses`.

## Product boundaries

The 3D vehicle and accessories are approximate planning geometry, not Suzuki CAD or exact vendor product models. Interior accessories are schematic and easiest to inspect in Cabin view. Body colour is a preview choice, not an automatic paint-work quote. This tool cannot guarantee physical fitment, road legality or roof-load certification.

Listed prices and reference checks are dated July 2026, not a live inventory feed. Workshop listings are directory entries, not independently certified recommendations. Seller photo permissions are not recorded in this repository and need a separate rights register before wider commercial reuse. See `RELEASE_REVIEW.md` for verification and remaining limitations.
