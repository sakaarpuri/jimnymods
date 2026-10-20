# Jimny asset sources and rebuild instructions

## Original vehicle asset

`build_jimny.py` authors the vehicle in Blender. It is not a downloaded seller model, a manufacturer CAD file, or a photograph projected onto a box. The mesh uses metre-scale dimensions and separate replaceable assemblies. `jimny-lwb.blend` is the editable source and `assets/models/jimny-lwb-blender.glb` is the web export.

Rebuild from the repository root:

```sh
"$HOME/Applications/Blender.app/Contents/MacOS/Blender" --background --python modeling/build_jimny.py
npm run build
```

The script can also be opened and run in Blender's Scripting workspace. A native Blender preview is rendered to `modeling/jimny-blender-preview.png`. Preview images and `.blend1` backup files are not deployment assets.

The web export includes all wheel/grille alternatives; runtime visibility chooses one of each. In the editable Blender project, alternate assemblies and their child meshes are hidden by default to keep the first render stock. Unhide a desired assembly's children and hide the stock assembly's children when editing alternatives.

Dimensions: [Suzuki's 12 January 2023 model announcement](https://www.globalsuzuki.com/globalnews/2023/0112.html), including the 2,590mm wheelbase and 3,985 × 1,645 × 1,720mm published overall size. Geometry and accessory representations remain approximate, not a physical-fitment guarantee.

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

- Block lettering uses the existing Manrope font, with its OFL licence already under `assets/fonts/`.
- Script lettering uses Yellowtail by Brian J. Bonislawsky / Astigmatic, from https://github.com/google/fonts/tree/main/apache/yellowtail . The unmodified font and Apache 2.0 licence are in `modeling/fonts/`.
- Fonts are converted into extruded mesh outlines in Blender. No extra web font request is required. The script badge is a styling approximation, not a scan of a particular seller's badge.
- Eight grille assemblies separately represent OEM S emblem, block wordmark, hex wordmark, script, gloss black, logo delete, clean five-slot and unbadged mesh options.
