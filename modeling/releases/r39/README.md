# R39: bonnet/wing seam correction and shared three-door front

Prepared 2 November 2026. Model package only; release is owned by the Expand exterior customization chat. Do not copy old site code or deploy from this workspace.

## Deliverables

Copy `jimny-lwb-blender.glb` + `.gz`, `jimny-swb-blender.glb` + `.gz` and the two corresponding `.blend` files. Exact SHA256 and bytes are in manifest.json. Do NOT copy the swb-before, outdated-native-backup, blend1 or editable-source GLB as website assets.

Five-door: removed 194 obsolete black gasket triangles in the optimized GLB (984 vertices in the editable native mesh), which protruded above the new wing landing and created the marked diagonal seam. Other meshes, coordinates and materials are exactly unchanged from R38. The actual narrow bonnet shut line and recessed return are retained. R37 shortened/tapered bonnet remains: nose Z1.748, rear Z.774, halfwidth .713 at nose/.758 rear. No camouflage or paint change.

Three-door: shared corrected front transplanted from five-door with Z−.170 m. Graft below Y1.21 and ahead of Z.48, using interpolated clipped triangles. Includes bonnet, wing landing, fixed front body, cowl/hinge housings, opaque engine-bay closure, indicators, eight grille variants, stock lamps and bumper. Unique short-body doors, glass, pillars, roof, rear, cabin and wheels are retained. Wheelbase remains2.250m. Original rear/roof/glass positions changed at most0.0272mm by quantization; cabin/roof/wheels/spare position checks were exact. No five-door rear window layout was copied.

The old SWB native file did not match the deployed model and would roll back its geometry. The deliverable SWB .blend is an editable reconstruction from the validated website asset, NOT the old procedural source. Source meshes/groups/material roles remain editable. Default visibility is stock; alternative grilles/wheels are retained but hidden. Blender-generated duplicate material suffixes have `site_material_role` custom properties for canonical role recovery when re-exporting.

## Source/reproduction

Run from `/Volumes/ThatSUVMod/jimnymods`:
1. `node work/releases/model-r39/remove-old-seam.mjs` derives LWB from exact R38 release.
2. `node work/releases/model-r39/transfer-front.mjs` derives SWB from exact deployed swb-before and corrected LWB.
3. `node work/releases/model-r39/optimize-swb.mjs` uses16bit positions,10bit normals,14bit UVs without simplification.
4. `node work/releases/model-r39/decode-native.mjs`; Blender `--background --python work/releases/model-r39/save-native.py -- swb` reconstructs editable source.
5. Native five-door correction source: `modeling/refine_site_r39_lwb.py`, applied once to a copy of R38 .blend. Do not apply twice. Save-native.py -- lwb sets stock visibility.

`export-native.py` exports editable native content, including hidden alternatives, to a separate `*-editable-export.glb` for further modeling. Such re-exports need canonical material-role restoration and optimization/reverification; they are not byte-identical release assets. The validated release pipeline above intentionally preserves previous exact surfaces wherever possible.

## Front attachment datums / integration

All coordinates are Three.js metres, +Z forward. Five-door front unchanged. New three-door front equals five-door minus0.170 on Z, with unchanged X/Y.

| Datum | New 5-door | New 3-door | Old 3-door |
|---|---:|---:|---:|
| Headlamp center Y | .95506 | .95506 | .91700 |
| Headlamp center Z |1.72239|1.55239|1.61989|
| Headlamp front Z |1.76513|1.59513|1.66340|
| Lamp outer diameter |.19867|.19867|.22132|
| Grille minimum Z |1.70093|1.53093|1.56292|
| Grille maximum Z |1.76953|1.59953|1.67998|
| Grille bottom/top Y |.77508/1.08011|.77508/1.08011|.77497/1.06003|
| Stock bumper front Z |1.89298|1.72298|1.82296|
| Stock bumper top Y |.83691|.83691|.73197|
| Bonnet nose/rear Z |1.748/.774|1.578/.604|older profile replaced|

All eight native grille groups already have correct transform; don't additionally move them. Stock headlamps/bumper already positioned. For generated accessories, apply the existing five-door front mount treatment to both bodies, then translate three-door Z−.170 exactly once. Headlamp builder already has−.170 so keep that and change3door XYscale .9→.85; use5door drop.022 and setback.130. Generic `show()` does not apply a body shift. Bumper/bull/winch/front lamp products, bonnet guard and pods require five-door alignment plus shortbody−.170. Bonnet guard uses5door no-extra-tilt setting. Use five-door beam/glow origin−.170 for3door; old hardcoded3door origins use inconsistent offsets. Stock bumper garnish/undertray products use5door alignment plus−.170. Do not move unchanged roof/rack/lightbar, snorkel/windscreen, wheel, sill or rear attachment coordinates. Five-door accessory mounts unchanged.

SWB now3,923,124 bytes (previous3.3MB budget too small for shared detailed front); proposed SWB limit4.1MB, LWB remains below4.7MB. This is a detail increase, not texture bloat. Integration owns cache version, previews and accessory tests.

## Verification

`node work/releases/model-r39/verify.mjs`:9 checks pass; `modeling/verification/site-r39/verify.log` and verification.json.
`JIMNY_TEST_MODEL=work/releases/model-r39/jimny-lwb-blender.glb node --test work/releases/model-r39/verify-fascia.mjs`:3 checks pass.
Same with SWB and `JIMNY_TEST_BODY=3door`:3 checks pass. Checks all8 grille returns, >200 lower-corner samples, headlamp apertures, amber visibility, original geometry preservation, old gasket absence on both sides and no cowl clipping spikes.

Visuals in `modeling/verification/site-r39/`: before/after corner, full/cowl/rear neutral diagnostic, plus actual site stock front/front-quarter/rear for both bodies with asset-request override. `capture-site.cjs` produced no browser errors. R39 renders show continuous rounded landing without the old diagonal black line. The remaining narrow dark bonnet edge is the intended panel shut line. Diagnostic view is not a product render.

Generated accessory fit needs integration verification after the new datums are applied. The rear wide-flare return is a separate integration-owned runtime fix; this package does not overwrite it. Production deployment not performed by this modeling chat.
