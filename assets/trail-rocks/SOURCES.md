# Scanned obstacle rock

`scanned-boulder.glb` derives from **Boulder 01**, created by **Rico Cilliers** and published by Poly Haven under **CC0 1.0**. Primary sources, checked 21 October 2026:

- Asset: https://polyhaven.com/a/boulder_01
- Official file manifest: https://api.polyhaven.com/files/boulder_01
- License and redistribution permission: https://polyhaven.com/license

Only the downloadable CC0 model and its diffuse, OpenGL normal and packed AO/roughness maps are used. Poly Haven preview renders, logos and website artwork are not redistributed. Exact input URLs/checksums and output hash are recorded in `scanned-boulder.provenance.json`.

The reproducible pipeline is `scripts/prepare-scanned-rock.mjs` plus `scripts/decimate-scanned-rock.py`. Blender welds positional seams while preserving UV loops and reduces the scan to 3,000 triangles; the web package uses compressed 1k WebP maps and meshopt geometry. Geometry is centered and normalized inside the pre-existing radius-one, y[-0.5,0.5] obstacle envelope. Runtime enforces the envelope again after decoding, rotates the scan deterministically, and uses each physical obstacle's existing size/location. These are representative visuals, not new uncollidable terrain formations or a change to collision physics.

`rock_face_01` by Dario Barresi was evaluated first and **rejected**: it is an open cliff-surface patch with missing backs, unsuitable as a solid boulder. That model is not shipped. Its research provenance is retained outside the production assets in `modeling/verification/rejected-rock-face-01.provenance.json`.

The scanned source is a visible improvement over procedural noise, not proof of exact parity with the generated course concepts. Texture/shape repetition and the remaining terrain/vegetation treatment still affect the complete scene.
