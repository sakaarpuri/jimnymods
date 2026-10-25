# jimnygami Brief 3: 3D realism (Opus 5.5)

Oct 24, 2026 · @sakaar puri

## Context and how to work

Make the 3D Garage look real: first by upgrading how the existing viewer lights and renders the car (code only), then, if the owner approves, by improving the model files in Blender.

jimnygami ([jimnylab.netlify.app](https://jimnylab.netlify.app)) shows a rotatable 3D Jimny in a modelled concrete garage (viewer code in viewer3d.js; model jimny-lwb-blender.glb, made with Blender). Rotation, part fitting, paint, decals and scenery already work. A review found it looks computer-made because of flat lighting, almost no reflections in the paint, low-detail tyres and wheels, simple garage textures and weak shadows under the car. Lighting and materials are expected to give most of the improvement.

**When to run it**

- After Brief 1 is merged (it compresses the 3D model; keep that compression in the pipeline).
- Never at the same time as Brief 2: both touch the 3D viewer. Either order works otherwise.

**How to work**

1. Read this brief, explore the repo, and report what renders the viewer (library and version), its current lights, materials, colour and tone settings, shadows and post-processing. Then propose a plan and wait for the owner's go-ahead.
2. Before changing anything, capture **baseline screenshots** at four fixed camera angles (front three-quarter, side, rear three-quarter, cabin) at 1440 × 900 and 375 × 812. Reuse the exact same angles for every comparison.
3. Work on a branch off the latest main (for example realism/phase-1), never directly on main, and open a pull request so Netlify builds a deploy preview. One change per commit, so each can be judged and reverted on its own; merge only after the owner approves the preview. Show before and after screenshots for each.
4. Phase 2 (Blender) does not start until the owner has seen Phase 1 and says yes.

## Phase 1: Viewer realism (code only)

- [ ] **Light the car with a real environment.** For each scenery option (Garage, Mountains, Urban, Desert), use a photographed 360° environment map (HDRI) as both the visible background and the light source, so the paint reflects it. Project its floor so the car sits on the ground, not floating in a sphere. Use only assets with a licence that allows commercial use (Poly Haven's CC0 HDRIs are one source) and record each source and licence in the repo. Prefer a real workshop or garage HDRI for the default scene.
  - Done when: rotating the car shows a real photographed garage, the paint shows its reflections, and the car's wheels sit on the floor at every angle.
- [ ] **Make the materials physical.** Body paint as a glossy clear-coated paint that still changes colour from the Paint panel; glass that reflects and is slightly see-through; tyres as matte rubber; chrome, plastic trim and wheels each with their own roughness and shine. Decals must stay visible on top of the paint.
  - Done when: paint, glass, rubber and metal are clearly different materials in the four baseline angles, and every paint and decal option still works.
- [ ] **Shadows and depth.** A soft contact shadow under the car, soft cast shadows, and ambient occlusion so panel gaps and wheel arches read as depth.
  - Done when: no angle shows the car floating, and wheel arches and the underside look shaded.
- [ ] **Colour and image quality.** A filmic tone mapping (ACES or AgX), correct colour space, physically based light intensities, and antialiasing so edges are clean.
  - Done when: highlights don't blow out to white, colours match the paint swatches, and edges don't shimmer while rotating.
- [ ] **Stay fast on phones.** Use lighter settings on phones and slower devices (smaller environment maps, cheaper shadows and occlusion), and lazy-load the non-default scenery maps.
  - Done when: rotation stays smooth on a mid-range phone (check with browser CPU throttling), and the default scene adds no more than about 2 MB to first load. Report the measured numbers.

## Phase 2: Blender model improvements (after approval)

Only start once the owner has reviewed Phase 1 and asked for it. This needs Blender installed on the owner's computer; drive it with Python scripts, run headless, and never overwrite the original file.

- [ ] **Find the source and work on a copy.** Locate the Blender source file (or import the current .glb), save a copy, and list its objects, materials and the names the website uses to attach parts, paint and decals.
- [ ] **Scripted clean-up.** Small rounded edges (bevels) on body panels, smooth shading with correct normals, separate materials for glass, rubber trim, lights and chrome, and tyre tread and wheel detail through normal maps where the mesh is too simple.
- [ ] **Bake shading into the garage.** If the modelled garage is kept for any scenery, bake its lighting and ambient occlusion into textures so it looks lit on the web without live lights.
- [ ] **Export and compress.** Re-export as .glb with Draco or Meshopt compression, keeping every object name, hierarchy and attachment point the site relies on.
  - Done when: every part, paint, decal and cabin view still works with the new file, the four baseline angles look clearly better, and the file is no larger than the Brief 1 compressed version.

**Stop and ask** before any hand-modelling of new detail (an accurate grille, interior, badges). If that level is wanted, recommend either a professionally made Jimny model with a commercial licence or a 3D artist, rather than attempting it with scripts.

## Guardrails and report

**Don't break**

- rotation, zoom and the Exterior / Cabin views
- fitting and removing parts, paint colours, decals and grilles
- scenery switching and the "Save image" export
- the driving game, which loads the same model and build
- the "approximate 3D, not exact product" wording: more realism must not make previews look like exact product photos

**Report back with**

1. The renderer findings and the plan you proposed.
2. Before and after screenshots at the four baseline angles, desktop and phone, for each change.
3. File sizes added, and the measured frame rate on a throttled phone.
4. Sources and licences of every environment map or asset added.
5. Your recommendation on whether Phase 2 is worth doing, based on the Phase 1 result.
