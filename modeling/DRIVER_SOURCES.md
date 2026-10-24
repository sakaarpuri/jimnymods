# Anatomical driver assets

These are original seated, clothed derivatives of MakeHuman's CC0 graphical assets. They replace the geometric capsule fallback when loaded. They are not scans, likenesses of real people, or manufacturer-quality digital humans.

## Exact upstream source

Repository: https://github.com/makehumancommunity/makehuman

Pinned commit: `a8bc2d54ff0ac92e78ff71431b1023eda42bf482`

Only the following graphical data was downloaded to `modeling/vendor/makehuman/`; the MakeHuman application was not installed and no application code is incorporated:

- `makehuman/data/3dobjs/base.obj` (anatomical mesh and clothing helper surface)
- `makehuman/data/rigs/default.mhskel` (joint definitions)
- `makehuman/data/rigs/default_weights.mhw` (skinning weights)
- `makehuman/data/targets/macrodetails/asian-male-young.target` → `male.target`
- `makehuman/data/targets/macrodetails/asian-female-young.target` → `female.target`
- `LICENSE.ASSETS.md`

Raw URLs follow `https://raw.githubusercontent.com/makehumancommunity/makehuman/a8bc2d54ff0ac92e78ff71431b1023eda42bf482/` plus the exact path above.

## Licence evidence

The official repository's [licence statement](https://github.com/makehumancommunity/makehuman/blob/a8bc2d54ff0ac92e78ff71431b1023eda42bf482/LICENSE.md) explicitly distinguishes AGPL application code from CC0 graphical assets, including the base mesh, targets, textures and clothes. The downloaded OBJ and target headers explicitly state their September 2020 release under CC0; the skeleton/weights JSON also declares CC0. The complete CC0 text is retained locally. The [official FAQ](https://static.makehumancommunity.org/makehuman/faq/are_makehuman_files_free.html) explicitly permits use in closed-source games and reuse of core mesh and target assets.

Upstream attribution, retained voluntarily: Data Collection AB, Joel Palmius, Jonas Hauquier, original morph work by Manuel Bastioni and the MakeHuman team.

No third-party user-contributed clothes, skins or hair were downloaded. Their individual licences may differ from the core-assets licence.

## Authored changes and workflow

`modeling/build_drivers.py` directly reads the pinned graphical data, applies adult morphs, converts coordinates into the Jimny scene, separates the head/hair/eyes from the clothed body, adds original eye/pupil geometry and skin vertex-colour variation, and poses the original weighted skeleton for the driving position. Clothing uses the upstream garment helper topology rather than painting the anatomical body. Shallow joint creases, surface-following neckline/cuff hems and a slightly varied short-hair silhouette are original additions. `scripts/optimize-drivers.mjs` compresses freshly exported GLBs while retaining the skeleton.

The GLBs use a seated rest pose. The browser clones complete skeletons and solves the two arm chains for actual palm-centre steering contact. First-person view hides the head/hair/eyes and upper torso only; separate sleeves, hands, trousers and shoes remain visible. Sleeves are separated by upper/lower-arm rig weights **after** smoothing, preserving matching seam positions in the complete third-person figure. `preloadDriverAssets()` should complete before the game creates its driver. A failed load retains the existing simple fallback. `getDriverViewpoint(driver)` returns a world-space eye position from the anatomical eye bones; a composed game camera may offset this, but must not intersect the visible sleeves. Test actual GLB floor/head/firewall bounds, rig presence, palm contact, camera clearance and first-person visibility using `tests/driver-assets.test.mjs`. Update `driverVersions` to the first 12 SHA-256 characters after rebuilding/compressing; a regression test verifies those cache keys.

Current compressed transfer sizes: 557,160 bytes (man), 552,016 bytes (woman). Full editable Blender sources are retained separately. The clothing helper's excessively tall neck is trimmed into a crew neckline; underlying neck skin closes the opening. First-person-only weighted caps close the proximal sleeve openings; they are hidden on the complete third-person figure. Wrist/finger rest directions curl across the vertical 9/3-o'clock rim tangent with opposing raised thumbs rather than letting fingers droop toward the lap.

`src/trail/driver-materials.js` authors deterministic 256×256 knit, denim, pore and short-hair surface maps at runtime. These are original procedural reflectance/bump patterns, not downloaded photographs or AI images. Their tiling accounts for the small garment islands in the MakeHuman UV atlas; each cloned material owns/disposes its maps. Both colour and bump maps use mip filtering. Skin also has low-frequency authored cheek/lip/brow/hand colour variation in the GLB. The Blender inspection renders show geometry and vertex colour; the runtime material maps must be evaluated in actual browser captures, not those Blender images.

Actual Blender previews: `/tmp/driver-man-review.png` and `/tmp/driver-woman-review.png`. These are authored-geometry renders, not generated concept imagery. Integrated browser captures `/tmp/driver-eye-corrected-interior.png` and `/tmp/driver-palm-corrected-controls.png` were inspected: the revised eye position removes the shirt obstruction and palm-centre IK reaches the steering rim. Camera framing was then adjusted separately in the scene. Woman/short-wheelbase final interior and controls captures were also inspected against `/tmp/jimny-reference-cabin.png`: no torso occlusion or exploded rig geometry; the excessively tall collar was corrected afterward. Both driver/body combinations have geometry and rotated-vehicle tests.

## Concept comparison, 21 October 2026

The visual benchmark for this revision is the user's prior generated cabin concept `exec-2fff4966-d7a1-40e4-b83d-0c800c1b4a54.png`, not new reference photography. Actual integrated captures `/tmp/driver-man-textured-interior.png`, `/tmp/driver-man-textured-controls.png`, `/tmp/driver-woman-textured-interior.png` and `/tmp/driver-woman-textured-controls.png` are produced with the actual game source, exported drivers and runtime textures in an isolated browser. No generated mockup is substituted for the game.

Progress toward that concept: gray knit sleeves and blue denim instead of plain teal/plastic clothing, visible hands/forearms in composed first-person framing, more varied skin and eye materials. Remaining gaps: hands still use approximate finger curls rather than individual collision-conforming grip; sleeves are smoother and less naturally folded than the concept; hair is short mesh hair rather than strand simulation; skin is procedural rather than scanned and has no subsurface scattering or facial animation. No full hand-over-hand animation. This is an incremental actual-game improvement, **not parity with the generated concept or photorealistic digital humans**.
