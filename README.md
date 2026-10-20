# that SUV Mod

Ideas and resources for modifying your Jimny, with a live 3D build studio, look inspiration, parts and India-focused sourcing.

## What works

- Original procedural Three.js vehicle geometry. Parts, paint, finishes, graphics and grilles change the scene in real time.
- Detailed body shell with open wheel wells, tapered glazing, door seams and hinges, moulded arches, rounded tyre profiles, twin-spoke wheels, brake discs, reflector/lens headlamps and a raised Suzuki-style emblem. Rack, snorkel, bumper and lighting mounts are modelled separately.
- Clear-coated gloss, satin, matte and textured lower-panel materials. The last preserves the painted upper body rather than making the whole vehicle rough.
- Orbit, zoom, five camera views including a cabin cutaway, stock comparison, night lighting and an expanded studio.
- Forty catalogue entries. Eight popular starting points; exterior, interior, sourcing, installation and saved filters.
- Internal sourcing results specific to the chosen part, look or package. External links require a separate action.
- Workshop directory with city/region filtering and nine Delhi NCR entries.
- Editable build lists, undo, local saved versions, share links, print and high-resolution 3D image export.
- Responsive workspace: desktop side-by-side studio; compact sticky preview when browsing parts on phones.
- Mobile previews allow page scrolling. Tap **Rotate / zoom** for touch orbit and pinch zoom in an expanded, portrait-safe studio. Camera, paint and preview-mode controls have 44px phone targets.

## Development and release

Requires Node 22. Run `npm ci` then `npm run build`. The release is generated in `dist/`; deploy only that directory. Netlify is configured by `netlify.toml`. For local work, `npm run dev` serves the repository at http://localhost:8080; rebuild after editing the 3D source.

Main files: `index.html` contains catalogue data and planner state, `design.css` defines the current design, and `src/viewer3d.js` contains the original 3D geometry and rendering. `assets/viewer3d.js` is the bundled viewer. Fonts and Three.js are served locally, with licences included under `assets/fonts` and `assets/licenses`.

Release HTML fingerprints the viewer and stylesheet URLs so returning visitors receive matching code and styles. The model's metre-scale proportions use the [official Suzuki dimensional reference](https://www.globalsuzuki.com/globalnews/2023/0112.html), including the 2,590mm wheelbase. It remains original planning geometry, not an imported manufacturer asset.

## Product boundaries

The 3D vehicle and accessories are approximate planning geometry, not Suzuki CAD or exact vendor product models. Interior accessories are schematic and easiest to inspect in Cabin view. Body colour is a preview choice, not an automatic paint-work quote. This tool cannot guarantee physical fitment, road legality or roof-load certification.

Listed prices and reference checks are dated July 2026, not a live inventory feed. Workshop listings are directory entries, not independently certified recommendations. Seller photo permissions are not recorded in this repository and need a separate rights register before wider commercial reuse. See `RELEASE_REVIEW.md` for verification and remaining limitations.
