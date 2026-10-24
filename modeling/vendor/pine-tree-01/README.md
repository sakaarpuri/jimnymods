# Experimental authored pine assets — not shipped

Source: [Poly Haven pine_tree_01](https://polyhaven.com/a/pine_tree_01), authored by Rico Cilliers (modeling) and Rob Tuytel (photography), [CC0](https://polyhaven.com/license). Individual manifests record exact source URLs, master/texture checksums, processing and output hashes. The 570.7MB official Blender master is cached outside the repository at `/tmp/polyhaven-pine-source`; it is not a production dependency.

## Actual review results

- `pine-tree-b-lod.glb`: 15,246 triangles, 1.81MB. Rejected for live use: aggressive reduction leaves angular needles.
- `pine-tree-b-near.glb`: 40,295 triangles, 2.11MB. Better branch structure, but foliage still angular at close viewing distances. Also rejected as a near hero tree.
- `pine-tree-b-atlas.webp`: eight transparent views baked from the unreduced 267,343-triangle B LOD2. It preserves the actual mature-pine silhouette, with diffuse colour plus soft local ambient occlusion, not a baked directional sun.
- `pine-tree-b-atlas-normal.webp`: corresponding object-space normals (Y-up Three.js axes) for live illumination. This is **not** an ordinary tangent-space normal map. Texture must be loaded as non-colour, rotated by tree yaw, then transformed into view space.

The atlas is a candidate for medium/distant LOD, not a close-view substitute. Eight azimuths need adjacent-angle crossfade to avoid popping. Horizontal orthographic captures cannot reproduce steep overhead views. The source is an irregular olive-coloured mature pine; it does not exactly reproduce the concept's full, greener fir canopy.

`modeling/verification/pine-asset-review.html?mode=atlas` is a standalone actual-engine inspection page; `mode=near` shows the rejected near mesh. `mode=runtime` demonstrates the isolated instanced renderer with continuous adjacent-angle blending, correct normals and needle-only colour balancing. Actual screenshots are `modeling/verification/pine-authored-{atlas,near,runtime}-{front,side}.png`.

Only the two atlas maps and their provenance have been promoted to `assets/vegetation/authored-pine/` for an in-course candidate test. Neither rejected GLB nor the master is shipped. The isolated `src/trail/authored-pines.js` loader returns a safe null/fallback if assets fail. Its group exposes `userData.update(camera)` and idempotent `userData.dispose()`; callers must coordinate near/distant substitution and invoke disposal before generic world cleanup. It does not create new tree placements or colliders.

## Reproduction

1. Run `node scripts/prepare-pine-model-source.mjs --textures` (official pinned source).
2. Run Blender background with `--factory-startup --disable-autoexec --python modeling/bake_pine_lod.py`.
3. Run `node scripts/finalize-pine-atlas.mjs` and `node scripts/optimize-pine-lod.mjs --near`.
4. Start the existing local server, run `node scripts/capture-pine-study.mjs`, then `node --test tests/pine-lod-experimental.test.mjs`.

No paid generation, external runtime requests, human models, game code changes or automatic forest replacement.
