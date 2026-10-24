# Pine foliage

The three `pine-twig-*.webp` maps derive from the 1K twig diffuse, alpha and
OpenGL-normal maps of [Pine Tree 01](https://polyhaven.com/a/pine_tree_01),
photography by Rob Tuytel and modeling by Rico Cilliers.

Poly Haven publishes these assets under [CC0](https://polyhaven.com/license),
permitting commercial use, modification and redistribution. No website preview
render, logo, full tree model or third-party gallery image is included.

`pine-twig.provenance.json` records the exact official download URLs, source MD5
checksums verified against the official API, output SHA-256 hashes and sizes.
`scripts/prepare-pine-textures.mjs` reproduces the downloads and WebP conversion.
The three shipped maps total about624KB, rather than the570MB source Blender tree.

The local branchlet geometry uses only the upper-left needle island, with a
five-point UV outline inspected against both diffuse and alpha maps. The other
atlas regions contain bark and pine-cone padding and are deliberately excluded.
These textures are used on Himachal pines, with smaller crowns on the extended road. Procedural foliage stays
available if loading fails and for the other courses. Trunk collision layout and
route/bridge exclusions are unchanged by the texture substitution.

The nearby crown uses 40 irregular boughs with ten outer and three inner twig
clusters per bough. Medium-detail crowns use 24 boughs with three photographed
clusters each along the extended mountain drive. The mountain vegetation,
including shrubs and approximately 5,200 local grass clumps, is bounded to
1,500,000 triangles across at most seven instanced batches. This higher mountain-only
budget covers the added 1.47km playable road; other worlds retain their earlier budgets.
This is a geometry limit,
not a claim of a measured frame rate on every device.

`preloadVegetationAssets()` must finish before constructing the world. World
materials own cloned textures; `disposeVegetationAssets()` releases the cached
originals at scene teardown. Failed or canceled loads release successful sibling
maps and cannot repopulate a disposed scene. Tests cover this lifecycle, source
checksums, transfer size, atlas boundaries and collision clearances.
