# Jimny asset sources and rebuild instructions

## Practical cabin additions — 23 October 2026

`src/practical-accessories.js` now authors seven additional original metre-scale assemblies at runtime, shared by garage and game. Records, mounting dependencies, body/transmission scope and primary source URLs are in `assets/practical-accessories-data.js`; these are representative geometry, not manufacturer CAD or claimed exact replicas. No product photographs were copied into the site.

References: [Suzuki SelectPlus / EXEA](https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html) (cup/phone cradle, window-switch extensions, 610 mm utility bars and separate overhead net); [EXEA range](https://www.seikosangyo.co.jp/exea/english/sp/special1.html) (EE-213 dedicated phone clamp, conservatively previewed on three-door only); [ARMORO](https://armoro.com/products/jimny-center-console-organizer) (AT-only canvas/mesh console pockets); [Maruti genuine accessories](https://www.marutisuzuki.com/genuine-accessories/jimny-accessories) (separate AT/MT floor-mat references; our front-tray preview is five-door AT only). Source pages checked on 23 October 2026. Dimensions not published in these records remain inferred, not invented manufacturer specifications.

The new cards are unenhanced renders of the actual configurable model. Cabin checks corrected the switch row position, moved floor trays ahead of the cushions, kept console pockets outside the transfer-lever centre and used soft curved textile panels. This is a visual planning aid, not a clearance, restraint, airbag or pedal-safety validation. The overhead net requires its mounting bars, uses visible open mesh and is for light soft objects only. Shared material overrides preserve tyres, fabrics, lamp optics, mirrors and instrument artwork.

## Generated workshop material and course concepts, 21 October 2026

`assets/environments/workshop-concrete.webp` is an original synthetic diffuse concrete texture created with the built-in image-generation tool, then encoded as WebP. It is not a third-party photograph, vehicle image or supplier product picture. The 3D stage supplies perspective, geometry, lighting and shadows; procedural surface maps remain separate. Exact prompt: `modeling/verification/workshop-texture-prompt.md`.

`modeling/verification/course-concepts-buildable-v2.png` is a generated three-course design board using current engine captures as style references. It is explicitly labelled NOT GAMEPLAY and is never presented as achieved in-game visuals. Exact prompt: `modeling/verification/course-concepts-v2-prompt.md`. Actual comparison images use the `refinement-` prefix and are unenhanced browser captures.

## Original vehicle asset

### Three-door wide-body variant, 20 October 2026

The `--three-door` authoring option exports `jimny-swb.blend` / `jimny-swb-blender.glb` without overwriting the five-door master. Reference: [Suzuki global three-door exterior](https://www.globalsuzuki.com/automobile/lineup/jimny/) and [Suzuki Australia Jimny](https://www.suzuki.com.au/vehicles/4x4/jimny/). Official photographs are viewed for comparison only, not redistributed in the site. A separate one-door-per-side cabin aperture arrangement, longer front doors, continuous rear quarter glazing and removal of rear door handles/dividers distinguish the JB74. A 340 mm central platform section is removed between the wheel arches; tyres, arches and front/rear assemblies retain their scale, producing a tested 2,250 mm wheelbase. This is not a globally scaled mesh. Native source contains a labelled five-door reference photograph from the earlier work, not a purported three-door photograph.

The web asset is 2,936,524 bytes. Tests validate wheelbase, tyre diameter, lamp housing size, front translation and roof length. Comparison still shows simplified optics, some trim and cabin forms; it is an original planning model, not a manufacturer-quality asset or exact SKU model. Three-door renders deliberately omit long-wheelbase accessories. Its paint/graphics/grille presets are separately rendered from its own model.

`build_jimny.py` authors the vehicle in Blender. It is not a downloaded seller model, a manufacturer CAD file, or a photograph projected onto a box. The mesh uses metre-scale dimensions and separate replaceable assemblies. `jimny-lwb.blend` is the editable source and `assets/models/jimny-lwb-blender.glb` is the web export.

Rebuild from the repository root:

```sh
"$HOME/Applications/Blender.app/Contents/MacOS/Blender" --background --python modeling/build_jimny.py
npm run model:optimize
npm run build
```

The script can also be opened and run in Blender's Scripting workspace. A native Blender preview is rendered to `modeling/jimny-blender-preview.png`. Preview images and `.blend1` backup files are not deployment assets.

After editing the saved project by hand, export it with:

```sh
"$HOME/Applications/Blender.app/Contents/MacOS/Blender" --background modeling/jimny-lwb.blend --python modeling/export_jimny.py
npm run model:optimize
npm run build
npm test
```

The export helper temporarily unhides and evaluates every alternative assembly, exports only the vehicle, and restores visibility without saving the project. Exporting the saved file directly with alternatives disabled can lose evaluated transforms on their small components. Regression tests check every vertex in both wheel sets against its wheel envelope.

The web export includes all wheel/grille alternatives; runtime visibility chooses one of each. In the editable Blender project, alternate assemblies and their child meshes are hidden by default to keep the first render stock. Unhide a desired assembly's children and hide the stock assembly's children when editing alternatives.

Dimensions: [Suzuki's 12 January 2023 model announcement](https://www.globalsuzuki.com/globalnews/2023/0112.html), including the 2,590mm wheelbase and 3,985 × 1,645 × 1,720mm published overall size. Geometry and accessory representations remain approximate, not a physical-fitment guarantee.

### Photo comparison, 20 October 2026

The second revision was compared with the reference photograph below, [Suzuki's exterior photographs](https://www.globalsuzuki.com/automobile/lineup/jimny5door/) and [official 360-degree viewer](https://www.globalsuzuki.com/automobile/lineup/jimny5door/viewer/large/main.html). In particular, the wheel close-up, side profile and front grille were inspected. Those official images were viewed for reference only, not copied into the site or model.

Corrections include the narrow rear quarter window, continuous cabin sheet metal with rounded window apertures, concealed door hinges, lower sill, taller moulded arches, contoured bonnet returns and bumper, 195/80 R15 road tyres, concave split-spoke wheels, dished optical reflectors, open chrome grille slots, and the photographed broad block-letter/honeycomb replacement grille. Accessories are still representative rather than scans of individual sellers' products.

### Third revision: local candidate, realism review not passed

The India-market [NEXA brochure](https://www.nexaexperience.com/content/dam/msil/nexa/in/en/assets/cars/jimny/documents/NEXA-Jimny-Brochure.pdf) was also checked. Revisions include a crowned/rolled bonnet, finer door swage, rounded arch transitions, true recessed bumper apertures, segmented lamp reflectors, correctly shaped S emblem, brighter factory alloys, rear drum brakes, inner door cards, headliner, fuel flap and antenna. Two-tone colour is now confined to the roof, not the window pillars.

Short-range geometry-derived cavity shading is baked into vertex colours and exported explicitly as `COLOR_0`. Paint remains live-colourable; this is not a baked photograph. Chrome and glazing do not use the diffuse cavity multiplier in the web renderer. The editable project includes the licensed reference photograph as a separate, non-rendering image empty; it is added after web export and is not shipped to browsers.

The web optimisation now welds vertices and removes redundant subdivisions with locked borders and a maximum simplifier error of 0.0003 times mesh radius, then applies meshopt compression. The full-resolution editable Blender master is preserved. Rebuild the master before rerunning the optimisation when regenerating a release.

Visual comparison still identifies simplified fascia/bumper volumes, insufficient optical headlamp detail and generic accessory geometry. This revision is not a claim of photorealism or exact dimensional correspondence.

`scripts/optimize-model.mjs` uses glTF Transform and Meshoptimizer at build time. It retains the named switching groups and material boundaries, and compresses 16-bit positions without altering the native editable Blender project. It does not run in the browser. The browser uses the existing locally bundled Three.js decoder. Surface coordinates are authored for paint, plastic and rubber; material maps are no longer attached to meshes lacking UVs.

## Freely reusable reference photograph

File: `references/jimny-stock-reference.jpg`

- Title: Suzuki Jimny 4x4 GL 5-Door 2025 (6)
- Photographer: Captainmorlypogi1959
- Source: https://commons.wikimedia.org/wiki/File:Suzuki_Jimny_4x4_GL_5-Door_2025_(6).jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/5/5a/Suzuki_Jimny_4x4_GL_5-Door_2025_%286%29.jpg
- Licence: Creative Commons Attribution-ShareAlike 4.0, https://creativecommons.org/licenses/by-sa/4.0/
- Downloaded 20 October 2026, unmodified. Used for modelling reference only, not embedded as a texture or published in the live site.

This photo's licence applies to the photo, not to the website source code. Suzuki/Jimny trademarks remain their owners' property.

## Studio environment

Blender reference environment (not fetched by the current web viewer): `assets/environments/rostock-laage-airport-1k.hdr`

- Asset: Rostock-Laage Airport, Greg Zaal / Poly Haven
- Source: https://polyhaven.com/a/rostock_laage_airport
- Metadata: https://api.polyhaven.com/files/rostock_laage_airport
- Licence: CC0, https://polyhaven.com/license
- Original MD5: `ca1f40ff9dd4ca2c2b74b31c7fe7f6f6`
- Local lighting/reflection asset only, no remote runtime dependency.

Previous studio environment, retained for reproducibility:

File: `assets/environments/studio-small-09-1k.hdr`

- Asset: Studio Small 09, Poly Haven
- Source: https://polyhaven.com/a/studio_small_09
- Download metadata: https://api.polyhaven.com/files/studio_small_09
- Licence: CC0, https://polyhaven.com/license
- Original MD5: `d5d7eb9d26d341d6aa4d11c1a54fd97c`
- Used locally for lighting and reflections; no remote runtime dependency.

## Free-model search

Free listings were checked before authoring the model. Search-cache licences were not assumed current. NEYCER's model currently has no download control and displays a NoAI restriction; it was not downloaded or used as modelling input. The ShreyanshChaurasia_12 model displays CC BY 4.0 but is marked unfinished and the available session did not expose a usable download. Neither third-party mesh is included. Other results included wrong-generation and three-door vehicles.

No paid model, subscription, API generation or cloud-rendering service was purchased.

## Grille outline lettering

- Broad block badge lettering is original polygon geometry shaped against the listed product photographs. Small tyre-size markings use the existing Manrope font, with its OFL licence already under `assets/fonts/`.
- Script lettering uses Yellowtail by Brian J. Bonislawsky / Astigmatic, from https://github.com/google/fonts/tree/main/apache/yellowtail . The unmodified font and Apache 2.0 licence are in `modeling/fonts/`.
- Fonts are converted into extruded mesh outlines in Blender. No extra web font request is required. The script badge is a styling approximation, not a scan of a particular seller's badge.
- Eight grille assemblies separately represent OEM S emblem, block wordmark, hex wordmark, script, gloss black, logo delete, clean five-slot and unbadged mesh options.

## Factory S emblem

The third revision samples the geometric S outline (`path3213`) from [Suzuki Motor Corporation logo.svg](https://commons.wikimedia.org/wiki/File:Suzuki_Motor_Corporation_logo.svg), attributed to Suzuki Motor Corporation and marked public-domain simple geometric logo on Commons. The outline is scaled, extruded and bevelled into a chrome badge on the depicted vehicle. It is not used as this site's identity. Trademark restrictions still apply; the independence disclaimer remains in the footer.

## Revision four: front optics and model-based presets

The bonnet shoulders are softened and the stock bumper is a closed, smoothly shaded quad loft rather than a non-planar front ngon. The painted front panel and all eight grilles have actual headlamp/indicator openings. Factory headlamps are a separately switchable `StockHeadlamps` assembly: open rubber gasket, retaining bezel, segmented chrome reflector and convex projector optics. Previously both solid grille panels and a solid gasket concealed the optics. Cursive lettering is scaled in local font coordinates before rotation; its former scale used the extrusion depth as the text height.

The current export is 2,998,364 bytes. Regression tests cover wheel envelopes, badge envelopes, unobstructed lamp rays, separate lamps and the 3 MB transfer cap. `-- --skip-render` can be appended to the Blender generation command to save/export without producing a Cycles still. The saved native project and web model are updated; an older `jimny-blender-preview.png` is not evidence of the latest web rendering.

`assets/previews/preset-*.webp` are 800×600 renders from the actual web configurator using `window.jimny3D.renderPreset(payload)`, Studio lighting and the exact payloads returned by `window.getJimnyPresets()`. There are no AI look photographs in this preset flow. `manifest.json` records the source model hash, and tests reject stale renders after a model change. To regenerate, wait for `getState().detailedReady` and `studioEnvironmentReady`, render each preset, save its returned WebP data, and update the manifest. Preview images must be regenerated whenever visible geometry, materials or preset payloads change. The renderer restores the previous scene after each capture.

Five vinyl designs in `src/decals.js` are original canvas artwork projected onto body geometry with `DecalGeometry`, not copied seller images. They are representative design directions, not branded decal-kit artwork. Opening a preset shares the one live renderer; the site does not start 15 additional WebGL contexts.

## Revision five: reference fidelity and cabin

Reduced outer headlamp housings to approximately 221 mm by visual comparison, not a factory measurement. Rear bumper/lamp/plate geometry, tailgate details, centred spare and India-market interior handedness were corrected. Dashboard and door controls are original geometry; display graphics and twelve vinyl styles are original canvas artwork. Forty part thumbnails join the fifteen preset renders as actual live-renderer output. `part-model-audit.json` records which shapes are generic, stowed or incomplete; none are verified manufacturer CAD.

The final web asset is 2,962,500 bytes. Simplification uses a 0.0004 relative error bound, locked borders and a 0.60 target ratio while preserving the full-resolution Blender master. Reference sources additionally inspected: [Porsche's 911 configurator](https://configurator.porsche.com/en-GB/mode/model/9921B2), [NEXA's Jimny interior](https://www.nexaexperience.com/jimny) and [the V1 bumper listing](https://jimny4x4product.com/product/maruti-suzuki-jimny-front-metal-bumper-with-winch-plate-v1/). No source photographs or manufacturer assets were downloaded into the release for these changes.

## Revision six: stock foundation and a smaller reference-guided mod set

Compared stock front, side and rear views with [Suzuki's 360 viewer](https://www.globalsuzuki.com/automobile/lineup/jimny5door/viewer/large/main.html), its [stock alloy close-up](https://www.globalsuzuki.com/automobile/lineup/jimny5door/img/ex_img05.jpg), the attributed showroom photograph above and [this actual side/rear photograph](https://commons.wikimedia.org/wiki/File:Suzuki_Jimny_1.5_GLX_5-Door_2024_(2).jpg). Manufacturer 360 images are rendered references, not photographs. Global-market equipment and trim can differ from Indian variants.

Changes: approximately 24-degree windscreen rake; single-surface glazing; taller rear/side glazing and rear-door quarter-light divisions; rolled rear corners; revised mirror proportions; five broad Y-spoke factory wheels with larger hubs and separate nuts; deeper projector optics; recessed fog pockets; corrected door-handle proportions. The 2590 mm wheelbase and 195/80 R15 stock tyre envelope remain tested. Shape adjustments are photo-guided, not factory measurements or CAD certification.

The web studio now uses an original six-softbox reflection environment, with no HDR download. Paint uses continuous lacquer reflections without the noisy vertex-occlusion bake; the bake remains available in the native asset and on tyres/plastics. Supersampled previews reduce broken sub-pixel edges. Final compressed model: 2,982,364 bytes; simplification ratio 0.55, error bound 0.0004, locked borders. The native Blender master is retained at full resolution.

Three refined accessory families in `src/refined-parts.js`:

- Front Runner Slimline II standard/tall: 1345 × 1964 mm tray, ten cross-slats, eight gutter mounts, T-slot detailing and wind deflector. Reference: [Dometic KRSJ008T](https://www.dometic.com/en-ca/product/suzuki-jimny-5-door-roofrack-slimline-ii-tall-krsj008t) and its product renders. Tray dimensions are published; mounting heights, hardware and smaller profiles are estimated. Neither variant is manufacturer CAD.
- Four contoured window visors follow the corrected door frames; generic tooling, not a verified supplier SKU.
- Moulded spare-wheel centre cover leaves the tyre exposed, with a raised Suzuki emblem. Its curvature is reference-guided rather than measured. A normalized-coordinate decoding bug that hid reused factory emblems was fixed and regression-tested.

The all-terrain wheel remains a generic second set. Lighting remains illustrative, not measured photometry. Optical internals, moulded trim and cabin detail are not manufacturer-level replicas. Do not describe this release as factory-photorealistic or exact fitment proof. Reference images are not shipped in the configurator or used as vehicle textures.

## Wheel hard-surface revision — 21 October 2026

Original authored rim profiles now include a recessed drop-centre barrel, narrow machined flange, slimmer tapered cast spokes, flat-faced smaller hub/cap, five-bolt spacing and annular front brake rotors. Explicit surface breaks replace the former smoothing across lip/cap corners that made highlights appear inflated. The inner barrel has a separate fixed dark material; visible `MachinedAlloy` and `WheelGunmetal` finish masks remain compatible. Rubber is matte, and existing tread geometry, tyre envelopes and rolling radii are preserved. No purchased mesh or external wheel texture was introduced; this remains representative geometry, not a specific wheel manufacturer's CAD.

Final compressed assets are **3,100,148 bytes (five-door)** and **3,026,192 bytes (three-door)**. The transfer ceiling is explicitly revised from 3 MB to **3.15 MB** for both bodies: approximately 156 KB / 124 KB over the preceding exports buys visible hard-surface geometry and correct surface normals. Hidden barrel subdivisions and unused alloy/barrel vertex-occlusion data were reduced first; body, tyre and cabin cavity data are retained. All other geometry assertions remain unchanged. Native Blender files retain editable full-resolution geometry. This narrow quality/size trade-off is not evidence that the generated visual target has been reached.

## Jimny tailgate wordmark — 22 October 2026

Replaced the hand-drawn tailgate glyphs with the six polygon outlines in Suzuki's [official Jimny wordmark SVG](https://www.suzuki.co.jp/car/jimny/special/common/image/logo_jimny.svg), recorded with provenance in assets/models/jimny-wordmark.json. The raised chrome emblem retains its italic letter shapes, separate i dot and original aspect ratio, scaled to the existing 184 mm badge width. Its silhouette was also visually checked against a [genuine Suzuki badge sold by a Suzuki dealer](https://www.simssuzukiparts.co.uk/products/new-genuine-suzuki-jimny-chrome-badge-rear-tailgate-boot-emblem-77832-81a11-0pg). Reference product photography is not shipped.

Both native Blender masters and compressed browser models include the independent emblem. The build script uses the same outlines, and modeling/update_jimny_wordmark.py supports a narrow patch of existing masters without rebuilding unrelated geometry. Compressed exports are now 3,106,424 bytes (five-door) and 3,031,360 bytes (three-door). Geometry tests sample the actual decoded emblem against the source silhouette, including negative spaces and orientation.

Suzuki/Jimny artwork remains the respective trademark owner's property. Its appearance on the depicted vehicle is not a claim of ownership, endorsement or a licence for unrelated reuse. The site's own jimny mods identity is separately typeset, not the official vehicle badge.

## Coordinated vehicle accuracy revision — 22 October 2026

`build_jimny.py` now runs the original, reproducible `accuracy_revision.py` before modifier evaluation, body shortening, material batching and export. Both native masters and compressed models receive the pass. No supplier mesh, third-party vehicle texture or manufacturer CAD is introduced.

Reference set: [Suzuki five-door front](https://www.globalsuzuki.com/automobile/lineup/jimny5door/img/ex_img03.jpg), [stock wheel](https://www.globalsuzuki.com/automobile/lineup/jimny5door/img/ex_img05.jpg), [seating](https://www.globalsuzuki.com/automobile/lineup/jimny5door/img/in_img01.jpg), [shared dashboard details](https://www.globalsuzuki.com/automobile/lineup/jimny/img/in_img02.jpg) and [India NEXA brochure](https://www.nexaexperience.com/content/dam/msil/nexa/in/en/assets/cars/jimny/documents/NEXA-Jimny-Brochure.pdf). The selected cabin target is Indian RHD Alpha automatic, with a representative nine-inch screen. LHD and other-market photos support shared detail only. Original runtime screen/instrument artwork is generated locally; it is not Suzuki software or a remote map service.

Reconciled [India launch dimensions](https://www.globalsuzuki.com/globalnews/2023/0112.html), the [official dealer bumper-length drawing](https://www.suzukinajeebauto.com/static/media/Jimny-5-Doors.a789c8c95520c79adc1d.pdf) and [Suzuki Australia length definitions](https://www.suzuki.com.au/wp-content/uploads/2026/02/4047.pdf). Bumper-only, bare-spare and covered-spare dimensions must not be mixed. Track follows [Suzuki Australia specifications](https://www.suzuki.com.au/vehicles/4x4/jimny/specifications/). Regional covered length differs by several millimetres, and mirror width has not been verified.

The pass changes slot proportions/returns and honeycomb, optical bowls/projectors/fogs, bonnet lip, rear closure and spare depth, rear bumper/lens recesses and hinges, mirror reach, stock casting/cap/nut details and front/rear track. The cabin gains a stepped stack, separate vent/climate/switch detail, shared analog/LCD/selector rendering, seat hardware and contoured rear seats, open door bins and inner seals/hinges. Visible underbody links, dampers, differential casing and prop/transfer shapes remain representative; hidden engineering and safety are not certified. Existing touring/storage/trim variants remain approximations requiring a physical fitter check.

The mobile transfer ceiling is narrowly revised to 3.30 MB for the added cabin/optics/casting detail, with compression, material batching and genuine tread channels retained. Runtime cabin detail is fingerprinted alongside the other preview dependencies. The local review at `verification/jimny-accuracy-review.html` retains before/after evidence and the remaining limitations. This pass does not claim manufacturer-level photorealism.

## Jimnygami identity and front frame — 23 October 2026

`assets/jimnygami-logo-original.png` is the user's supplied artwork, copied unchanged. HTML/CSS crops its surrounding whitespace; the workshop displays the same artwork as a matte physical sign. It is not the Suzuki/Jimny vehicle trademark. The small folded-j favicon is a code-native companion, not a substituted main wordmark. No additional licence or ownership claim is made for supplied artwork.

Outfit variable type is downloaded from the official [Google Fonts source](https://github.com/google/fonts/tree/main/ofl/outfit). Its SIL Open Font License is retained beside `assets/fonts/outfit.ttf`. Main logo lettering stays in the supplied image, not a font approximation.

The factory grille silhouette is guided by the [Suzuki five-door front photograph](https://www.globalsuzuki.com/automobile/lineup/jimny5door/img/ex_img03.jpg): clipped shoulders, bowed lower lip, cut-corner 132 × 178 mm slot surrounds and a smaller raised S. All eight interchangeable face panels share the mounting outline. The windscreen, A-pillars, leading side-window edges and front roof/gutter now use a coherent approximately 24-degree rake. This angle is an authoring choice from photographic comparison, not a manufacturer measurement. The rear closure transform applies consistently at all heights. Photographs remain external references, not shipped textures or traced product meshes.

### Compound windscreen and shared visual release — 23 October 2026

Follow-up rear comparison also uses Suzuki's own 36-angle [five-door configurator](https://www.globalsuzuki.com/automobile/lineup/jimny5door/viewer/large/main.html), especially side angle 10 and rear angle 19 for the stock GLX. These are external reference renders, not an imported mesh or textures. The revised rear glass is 490 mm authored height instead of 430 mm, retaining its upper edge; surrounding paint, seal and wiper are coordinated. The upper closure taper is 70 mm over the authoring transition, not a published Suzuki engineering angle. The painted quarter ends at the bumper shoulder and its horizontal pressings use shared height rows. A second actual render review prompted the taller aperture. These are original photo/reference-guided approximations. Both front and rear registration faces are blank, while the sourced vehicle wordmark remains a separate tailgate badge.

Current compressed assets after this follow-up: 3,246,932 bytes (five-door) and 3,168,332 bytes (three-door), within the 3.30 MB ceiling. Dimensions are checked from decoded vertices; matching the envelope does not certify every panel curvature. All current garage and course-card images were regenerated again to remove the old plate lettering and keep the rear consistent across uses.

The [official bonnet/windscreen photograph](https://www.globalsuzuki.com/automobile/lineup/jimny5door/img/ex_img04.jpg) guides a stronger but restrained compound bow: 32 mm at the glass centre, tapering across the width, with a following rubber surround and 18 radial subdivisions. The existing frame rake is retained. The bow is an original authoring approximation, not a measured Suzuki glass radius. Both Blender masters and both compressed GLBs include it; decoded geometry tests verify curvature and pillar alignment. Final compressed sizes are 3,247,248 bytes (five-door) and 3,174,104 bytes (three-door).

The workshop uses its existing daylight opening as the dominant source, supplemented by two unequal high-bay battens and one weaker workbench light, all aligned to visible architectural fixtures. Direct lighting and reflection-source positions share one layout; low ambient bounce preserves a darker shaded side. This is real-time approximate lighting, not path-traced or calibrated photometry. Existing original workshop geometry and neutral materials are retained.

All 251 garage thumbnails and three course cards were rendered from current shared assets, not generated replacement photographs. Legacy exterior galleries and the non-interactive fallback now use the same model-derived set. Preview/model identities are fingerprinted and browser-cache revisioned; normal release builds reject stale model previews. Supplier photos remain separate reference material, not evidence that an accessory model is exact CAD.


## Catalogue product photography — 23 October 2026

assets/product-photos.json records 341 locally hosted product or maker-range photographs against existing catalogue IDs, with original image URL, source product page, supplier credit, acquisition method, check date and unverified rights status. assets/product-photo-overrides.json records manual corrections where broad page metadata showed the wrong asset. The maintenance collector reads existing records only; it never adds a product listing. Generated WebP images live in assets/products/ (about 15 MB in aggregate), loaded lazily in the catalogue. Generic upgrade illustrations remain original approximate model renders, not actual SKU photos.

**Publication permission is not established.** Supplier attribution, public availability and a product-page link do not grant reproduction rights. This set is for the local implementation/review; obtain supplier approval or permission-cleared replacements before public deployment. These images are not used as textures on the 3D vehicle and do not certify accessory geometry or compatibility. The two STEDI listings use a labelled manufacturer-range photograph rather than claiming exact spot/flood-pattern lens photos. Two unverifiable/stale source records remain archived without substituted or invented imagery.
