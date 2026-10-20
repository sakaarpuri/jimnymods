# that SUV Mod

Ideas and resources for modifying your Jimny, with a live 3D build studio, look inspiration, parts and India-focused sourcing.

## What works

- Original Blender-authored Jimny vehicle asset, exported as a compressed glTF model. Parts, paint, finishes, graphics and eight separate grilles change the scene in real time. A simpler procedural model remains available if the detailed asset fails to load.
- Photo-compared body shell with crowned side panels, rounded window apertures, narrower rear quarter glass, concealed side-door hinges, moulded arches, 195/80 R15 road tyres, concave split-spoke wheels, brake discs, dished headlamp reflectors and raised grille badges. Rack, snorkel, bumper and lighting mounts are modelled separately.
- Clear-coated gloss, satin, matte and textured lower-panel materials, with surface coordinates for their microtexture. Solid paint and metallic grey/blue/red have different base-coat responses. White and bluish-black paint previews are available alongside the existing colours.
- Orbit, zoom, five camera views including a cabin cutaway, stock comparison, night lighting and an expanded studio.
- Forty catalogue entries. Eight popular starting points; exterior, interior, sourcing, installation and saved filters.
- Internal sourcing results specific to the chosen part, look or package. External links require a separate action.
- Workshop directory with city/region filtering and nine Delhi NCR entries.
- Editable build lists, undo, local saved versions, share links, print and high-resolution 3D image export.
- Responsive workspace: desktop side-by-side studio; compact sticky preview when browsing parts on phones.
- Mobile previews allow page scrolling. Tap **Rotate / zoom** for touch orbit and pinch zoom in an expanded, portrait-safe studio. Camera, paint and preview-mode controls have 44px phone targets.

## Development and release

Requires Node 22. Run `npm ci` then `npm run build`. The release is generated in `dist/`; deploy only that directory. Netlify is configured by `netlify.toml`. For local work, `npm run dev` serves the repository at http://localhost:8080; rebuild after editing the 3D source.

Run `npm test` after a build to check the compressed asset, replaceable assemblies, PBR materials, native Blender source and model cache fingerprint. Tests use Node 22.15 or newer because the native Blender project is Zstandard-compressed. Build-image exports automatically fit the whole visible vehicle, even after a close-up inspection zoom.

Main files: `index.html` contains catalogue data and planner state, `design.css` defines the current design, and `src/viewer3d.js` connects the Blender asset, live accessories and rendering. `assets/viewer3d.js` is the bundled viewer. Fonts, Three.js, model decoder and the CC0 studio environment are served locally, with licences included under `assets/fonts` and `assets/licenses`.

The editable model is `modeling/jimny-lwb.blend`, and `modeling/build_jimny.py` reproduces it without paid assets or services. After rebuilding in Blender 5.2.2 LTS, run `npm run model:optimize` then `npm run build`. The optimisation retains all configurable assemblies and keeps the mobile transfer below 3 MB. See `modeling/ASSET_SOURCES.md` for source references and licences. Blender is only needed to edit/rebuild the asset, not to build or use the website.

Release HTML fingerprints the viewer and stylesheet URLs so returning visitors receive matching code and styles. The model's metre-scale proportions use the [official Suzuki dimensional reference](https://www.globalsuzuki.com/globalnews/2023/0112.html), including the 2,590mm wheelbase. It remains original planning geometry, not an imported manufacturer asset.

## Product boundaries

The 3D vehicle and accessories are approximate planning geometry, not Suzuki CAD or exact vendor product models. Interior accessories are schematic and easiest to inspect in Cabin view. Body colour is a preview choice, not an automatic paint-work quote. This tool cannot guarantee physical fitment, road legality or roof-load certification.

Listed prices and reference checks are dated July 2026, not a live inventory feed. Workshop listings are directory entries, not independently certified recommendations. Seller photo permissions are not recorded in this repository and need a separate rights register before wider commercial reuse. See `RELEASE_REVIEW.md` for verification and remaining limitations.
