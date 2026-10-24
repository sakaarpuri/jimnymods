# Authored pine distant-LOD candidate

These two maps are baked from the original geometry of [Poly Haven Pine Tree 01](https://polyhaven.com/a/pine_tree_01), variant B LOD2. Authors: Rico Cilliers (modeling), Rob Tuytel (photography). License: [CC0-1.0](https://polyhaven.com/license), permitting commercial reuse and modification.

The official 570.7MB Blender master remains outside the repository. Rejected reduced GLBs remain under `modeling/vendor/pine-tree-01/`, outside production assets. Only the following runtime candidates are included here:

- `pine-tree-b-atlas.webp`: 1,274,372 bytes, 2048×2048 RGBA, eight azimuths, four columns and two rows. Each 512×1024 tile covers an 8.15m×16.3m quad centred 7.65m above ground for the original 14.880114m tree. Alpha margins preserve the full crown.
- `pine-tree-b-atlas-normal.webp`: 1,538,640 bytes. Matching raw object-space normals, encoded from −1..1 to 0..1, with Three.js Y-up coordinates. This is not a tangent-space normal map and must not be loaded in sRGB.

Colour is original diffuse albedo plus soft local occlusion, with no fixed directional sunlight. The isolated renderer applies scene light to the normals, rotates them by each tree's yaw, and optionally balances living needles greener without recolouring the trunk. Alpha-tested depth/shadow materials use the same billboard orientation and adjacent-angle interpolation.

Exact source URL, master MD5, output SHA-256 and atlas geometry are recorded in `pine-tree-b-atlas.provenance.json`. Reproduce with `modeling/bake_pine_lod.py` followed by `node scripts/finalize-pine-atlas.mjs --promote`.

This is a medium/distant-tree candidate, not a photoreal close-up model. It preserves natural branching but only one mature-pine variant, and does not exactly match the concept's fuller fir crown. Near trees need actual geometry. In-course acceptance is separate from the standalone shader/asset checks.
