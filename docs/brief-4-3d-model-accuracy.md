# jimnygami Brief 4: 3D model accuracy (Opus 5.5)

Oct 24, 2026 · @sakaar puri

## Context and how to work

Measure how closely the 3D Jimny matches the real car in shape, proportions, angles and details, then correct what matters most, without breaking the parts, paint and decals built on the model.

jimnygami ([jimnylab.netlify.app](https://jimnylab.netlify.app)) uses one model, jimny-lwb-blender.glb (made with Blender with AI help), for the Garage, the parts previews and the driving game. Its accuracy against a real Jimny has never been checked.

**When to run it**

- After Brief 3 Phase 1 (lighting and materials), which makes shape errors easier to see.
- Ideally before Brief 3 Phase 2 (Blender clean-up), so the model isn't polished and then reshaped. If Phase 2 is already done, run this after it.
- Never at the same time as another brief that changes the model or the 3D viewer.

**What's needed**

- The free Blender already installed on the owner's Mac (usually /Applications/Blender.app/Contents/MacOS/Blender; confirm the path), run headless with Python scripts on a copy of the model. \*\*No paid tools, models or services:\*\* everything in this brief must be done with free Blender and code.
- Reference material: the official specifications of the India-spec 5-door Jimny (the brochure already linked on the site), and clear photos of a real car from the front, side, rear, top-down if possible, and front three-quarter, taken from a distance with the car level. The owner's own photos of a real car are best; any other photos are for comparison only and must not be committed to the repo unless licensed.
- If the site also offers a 3-door body, the same checks for it using its own specifications.

**How to work**

1. Read this brief, inspect the model (units, scale, object names, attachment points used by parts, paint and decals), and propose an audit plan. Wait for the go-ahead.
2. Work on a branch off the latest main (for example model/accuracy), never directly on main; open a pull request so Netlify builds a deploy preview.
3. Change nothing in the model until the owner has seen the audit and chosen fix routes in Step 2.

## Step 1: Accuracy audit

- [ ] **Dimensions.** Set the model to real-world metres and measure overall length, width (without mirrors), height, wheelbase, front and rear track, ground clearance, front and rear overhang, and wheel diameter. Compare each with the official specification and report the difference in millimetres and percent. Note the source page for every official figure; leave any figure you can't confirm blank rather than estimating it.
- [ ] **Overlays.** Render the model orthographically (front, side, rear, top) and in a front three-quarter perspective that matches the reference photo's camera as closely as possible. Scale each reference to the measured dimensions and overlay it at about 50% opacity on the render.
- [ ] **Shape and details.** From the overlays, check: roof and bonnet lines, windscreen and pillar angles, door and window outlines, wheel-arch shape and flares, front and rear bumper shape, grille slots, round headlamps and indicators, mirrors, tail lamps, spare wheel position, and stance (ride height, wheel position in the arches).
- [ ] **Discrepancy table.** One row per issue: area, what's wrong, how far off (mm, degrees or a short description), how visible it is to a visitor (high / medium / low), and the likely fix route (scripted proportion correction, scripted rebuild of the part, or leave as is). Sort by visibility.
  - Done when: the owner has the dimensions comparison, the overlay images and the sorted discrepancy table.

## Step 2: Owner chooses the fix route

The owner reviews the audit and picks a route for each discrepancy. Code does not start fixing until this is decided. All routes are free: Blender scripts only.

| Route | Best for | Trade-off |
| --- | --- | --- |
| Scripted proportion correction | Wheelbase, length, height, overhangs, ride height, wheel size and position | Reliable; doesn't add new detail |
| Scripted rebuild of a part | Simple, boxy or round shapes: grille slots, round headlamps and indicators, bumper blocks, arch flares, mirrors, tail lamps | Slower; quality varies, so each part is shown for approval before moving on |
| Leave as is | Small or rarely seen differences | No change |

Curved, sculpted surfaces (for example a complex interior) are hard to script well. Flag them as "leave as is" unless the owner asks to try.

## Step 3: Fixes

- [ ] **Scripted proportion corrections.** Fix the chosen proportion issues with Blender scripts on a copy of the model, keeping every object name, hierarchy and attachment point. After each change, re-check that wheels sit in the arches and that racks, bumpers, snorkels and other parts still line up with the body.
  - Done when: the re-measured dimensions are within about 1% of the specification (or the owner's agreed tolerance), and the overlays show the corrected areas matching.
- [ ] **Scripted part rebuilds.** One part at a time, in order of visibility: rebuild it with scripted modelling (primitives, bevels, booleans, arrays), matched to the overlays and measurements. Keep the original object's name and pivot so paint, decals and fitted parts still attach. Show a before and after overlay for each part and wait for approval before the next.
  - Done when: each approved part matches its reference overlay and every paint, decal and part option still works.
- [ ] **Export and compress.** Re-export as .glb with the same compression as Brief 1, and keep the file within the current size budget unless the owner agrees otherwise.

## Guardrails and report

**Don't break**

- fitting and removing every part, paint colours, decals and grilles
- Exterior and Cabin views, scenery, "Save image"
- the driving game, which uses the same model
- the original model file: always work on a copy

**Don't add** manufacturer logos or badges beyond what the model already shows, and keep the site's "not affiliated with Suzuki" and "approximate 3D" wording.

**Report back with**

1. The dimensions comparison with sources.
2. Overlay images and the sorted discrepancy table.
3. After fixes: the same overlays and measurements again, side by side with the originals.
4. Before and after screenshots at the Brief 3 baseline angles, desktop and phone.
5. File size before and after.
