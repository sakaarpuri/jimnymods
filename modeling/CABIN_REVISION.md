# Cabin and badge revision, 21 October 2026

This is an original, reference-guided real-time asset. It is not manufacturer CAD, a scan, or evidence of photorealism. The user-selected generated concepts are the visual target; only actual rendered assets can establish whether that target has been reached.

## Implemented

- Closed 1.43 m passenger floor, full-width firewall, sealed sills and rear wheel tubs. Floor and firewall are tested with ray intersections in both exported bodies.
- Separate dashboard, carpet, seat insert and stitching materials, metre-space UVs, original deterministic weave/grain micro-surfaces in the web renderer.
- Floor mats/ribs, seat runners, woven inserts, upholstery seams, seat-belt releases, demister outlets and cup holders.
- Outlined slanted Jimny lettering for tailgate and display plates, outlined Suzuki tailgate lettering. These are original approximations of badge silhouettes, not a verified manufacturer vector master.
- 340 mm steering-wheel outer diameter with broad sculpted side spokes, inset black switch pods, satin edging and a genuinely open-V lower spoke. Thin rounded-square instrument-hood shells replace solid blocks. This is reference-guided geometry, not a measured factory component; the existing steering pivot and extraction envelope are preserved.
- Small central instrument LCD, dial numbering, state-driven needles/selector/transfer/parking lever and pedals. No oversized fictional gear/range training screen in the instrument cluster.
- Driver body and hands remain visible in first person; only the head is hidden. Anatomical CC0 MakeHuman-derived drivers preload asynchronously, use palm-centre steering IK and eye-bone camera positions. Feet are above the cabin floor. Clothing, skin and finger curl remain simplified; see DRIVER_SOURCES.md for source licence and exact workflow.
- Angle-limited bonnet bevel so the dense interior surface grid is not bevelled into reflected streaks.

## Integration

Final concept-focused cabin transfers: 2,999,260 bytes (five-door, `f435f50d89fb`) and 2,959,616 bytes (three-door, `741f15cf65f1`). Both stay within the existing 3 MB ceiling. The optimizer applies a second conservative cleanup after quantization reveals duplicate seams; always begin with a fresh export from the full-resolution Blender master. The second cleanup's relative error bound is 0.00027; border locks and quantization precision are unchanged. Only runtime-unused RoofPaint vertex colours are omitted. BodyPaint cavity shading is retained to preserve the standalone asset contract, along with cabin and tyre occlusion colours and the full-resolution editable master.

`applyCabinMaterials(cabin)` is shared by the configurator and game. Call once after material setup for each loaded Cabin group; dispose its returned textures/materials when discarding that model.

`updateDriver(driver, state, firstPerson)` updates steering hands and head visibility. The control-thumbnail camera uses `firstPerson=false`; restore the main view's setting afterward.

## References and limitations

Dimensions and handedness use the already documented India-market NEXA brochure and Suzuki exterior references in ASSET_SOURCES.md. The rear side reference is the attributed Ethan Llamas CC BY-SA 4.0 photograph linked there. No new third-party raster texture or vehicle mesh was embedded.

The actual browser capture `/tmp/revised-cabin-controls.png` was examined during iteration. It demonstrated improved dashboard and upholstery readability, but a too-small wheel and streaked bonnet shading; both triggered additional geometry changes. That earlier screenshot is not evidence of the final revision. Final screenshot comparison remains part of the parent integration check.

The stock orbit capture exposed a new regression: the sealed sill's outer edge at 0.7445 m pierced the lower door skin, which narrows to 0.740 m. The sill is now inset to 0.720 m and continues to overlap the floor edge at 0.715 m. A regression test raycasts the actual decoded GLBs from both exterior sides at three longitudinal positions and three heights. It failed on exposed MouldedPlastic before the correction and now hits BodyPaint at all 36 samples, across both bodies. Floor/firewall closure tests remain passing. The adjacent floor, door cards, wheel tubs and seats remain inside the body envelope.

The refreshed actual orbit and rear captures confirmed that the stray black door stripe disappeared. Comparison against the documented stock photo then identified undersized front turn indicators: 51.8 mm in the decoded GLB, versus approximately 35–38% of headlamp diameter in the photo. Amber lenses are now 80 mm with 90 mm seals, slightly inset to remain inside the grille perimeter. This is a reference-guided proportion, not a measured factory dimension. An actual-GLB diameter test failed before the change and passes for both bodies after export.

An earlier integration completed the fresh viewer build and all 80 actual-renderer thumbnails, with 98 tests passing at that checkpoint. Subsequent steering/cabin exports require new output fingerprints and thumbnail regeneration; these checks must not be loosened or deleted. `review_steering.py` can render the actual wheel extracted from the saved Blender master for close visual inspection.

The actual steering-detail render `/tmp/jimny-steering-authored-review.png` was inspected against the NEXA cabin reference: the horizontal controls now sit in broad black pods and the lower spoke has a visible open V. Fourteen focused model/driver/control regressions pass, including rays through the open lower spoke and onto the broad upper side plates, plus extraction/pivot checks for both body lengths. The wheel emblem and switch icon strokes remain approximate.

The final interior screenshot exposed mirror glass protruding as rectangular plates. The requested 25mm corner bevel was clamped by its 5mm cube depth; the strongly rounded housing also had a smaller rear flat surface than the glass. External and interior lenses now use true rounded 2D profiles extruded to 4mm, inside shaped housing recesses. Outer housings, lens width/height and reflective material remain unchanged. A regression fails on old rectangular glass and passes on new exports: centre rays see reflective glass, while the four bounding-box corners do not. Fifteen focused regressions pass after both final exports. Reflections remain static environment material, not rendered rearward camera feeds.

## Concept-focused cabin pass

The selected cabin target is generated image `exec-2fff4966-d7a1-40e4-b83d-0c800c1b4a54.png` in the user's generated-images project `019f4af9-fd92-72b3-a075-773eeb23bb82`. Compared with the actual dashboard capture, its rounded steering rim, crowned airbag, integrated fascia and tapered seat shoulders prompted this geometry pass. The external concept `exec-300b3b11-bd70-4d17-b0ae-35085a97d36c.png` remains the overall garage presentation target.

- Steering rim now has a smooth elliptical swept section, with unchanged 340mm outside diameter, wheel centre, extraction envelope and steering-hand targets. The centre airbag has a convex crown instead of a flat cylinder.
- Instrument hoods are 47mm deep rather than 88mm, integrated into a thin rounded fascia. The passenger fascia has a shaped insert and fine perimeter seam; climate-control rims are smaller satin finish instead of bright chrome.
- Front cushions, seat backs, inserts, side bolsters and head restraints use cross-section lofts with tapered shoulders and rounded corners instead of beveled cuboids. Seat bases and occupant placement remain unchanged.
- The new actual-GLB regression checks crown depth, rounded rim profile and shoulder taper in both exports. All 17 focused model/driver/control tests pass. Asset-fingerprint and thumbnail tests require the parent rebuild after these new exports.

The first optimization incorrectly omitted BodyPaint vertex colours as well as roof colours. Although current runtime paint replacements ignore these colours, the original asset regression requires cavity shading for standalone use. Body colours were restored without weakening the test. Final extended verification is 32/34 passing, with only the expected stale viewer fingerprint and three-door preview fingerprint failing before the parent rebuild; the body cavity-shading regression explicitly passes.

The old near-eye camera observes a vertical wheel steeply from above: its eye-to-wheel vector is only about 177mm forward versus 350mm downward. This projection is not corrected by rounded geometry. View framing is separately owned by the main integration task; this pass does not silently move steering controls or alter occupant ergonomics.

Integrated actual capture `/tmp/cockpit-newgeometry.png` was inspected alongside the selected cabin concept. The curved rim and hub read more softly and no new geometry intersection was apparent. It does **not** match the concept: the view still exposes much more dashboard top/bonnet, the fascia remains blockier and sparsely detailed, and the driver's sleeves/hand contact remain visibly simplified. Passenger seating is partly hidden by the coach overlay, so that capture does not verify every seat surface. Camera and driver improvements are being integrated separately.

Limitations: simplified dashboard switch legends, illustrative rather than measured interior dimensions and driver ergonomics, simplified driver skin/clothing, approximate finger curl and no full hand-over-hand skeletal animation. Geometry and unit tests do not establish concept-level or manufacturer-level rendering quality; the integrated game capture must be assessed separately.
