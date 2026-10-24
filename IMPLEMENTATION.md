# Rally Workshop implementation and evidence

Approved scope, 21 October 2026. Existing uncommitted work is preserved. No deployment or purchase is implied.

## Compact paint, revised rims and adventure terrain — 21 October 2026

- User withdrew the exhaustive click-everything/play-everything audit. Per-change checks only; full unit tests do not imply a full manual journey audit.
- Generated course board first using the current renderer captures as style references. Final board, exact prompt, new actual captures and comparison: `modeling/verification/improvements-review.html`. Generated concrete diffuse material and its prompt are project-owned local assets; no AI car image replaces the model.
- Paint now shows all 28 colours as compact named/keyboard-accessible swatches. Selected state, custom hex, undo and mobile targets checked. Dark help text fixed to use the theme's readable secondary colour.
- Blender rims have hard-surface flange profiles, slimmer spokes, smaller flat caps and recessed dark barrels. Both bodies exported; explicit 3.15 MB ceiling replaces the older self-imposed 3 MB ceiling to preserve the added normals/geometry. Final stock/AT lowest points remain within 0.09 mm of ground zero.
- Fixed runtime finish masking: partial material bounds are not wheel-centre bounds. Full assembly centres (and centred driving pivots) now protect hubs/nuts/brakes. Actual-model and extracted-driving-wheel pixel-colour tests pass; colour clones restore and dispose correctly.
- Workshop architectural details plus original concrete material; narrow studio reflections, softer higher-resolution shadows, stronger underbody contact. Existing real daylight HDR now supplies world reflections as well as car paint. These are improvements, not photographic equivalence.
- Mountain: 3.8 m added graded approach, physical offset stone steps, wider signed western bypass and shoulder outcrops. Thar: deeper bowl/crest, lower saddle, side ridges, colliding rocks/shrub islands. Quarry: 4.6 m crest, mandatory summit stop and descent, shoulders/open exit. Shared coarse/fine terrain overlap fixed in visible ground and physics; texture vertex tint retained with slope rock shading.
- 42 targeted terrain tests passed in the terrain-agent pass. Actual Expert physics route runs passed mountain rock garden (91 s), extended quarry (75 s), Thar firm-line (125 s), Thar crest (115 s). These are feasibility checks, not subjective enjoyment certification or calibrated Jimny dynamics.
- Root targeted browser checks passed 12 assertions: palette count/no photo tiles, live colour/readout/custom hex/undo, 390px touch targets and no horizontal overflow, mobile repaint, AT fitting, three-door load, no page errors. Fresh screenshots saved as `refinement-*`. All 203 actual-model thumbnails regenerated after final wheel/material changes.
- Remaining visual gap: sparse/angular foliage, overly regular mountain steps, coarse quarry landforms, simplistic distant dunes, simplified car materials/detail. The local review explicitly separates concepts from actual results. No commit/push/deploy.
- Final integrated checkpoint: 224/224 automated tests, release build and whitespace checks pass. Fresh targeted browser checks pass after regeneration; all 203 thumbnails fingerprint the final models and renderer. This does not expand the scope into the withdrawn full manual audit.

## Image-led garage, tyres and challenge integrity — 21 October 2026

All ten garage categories now have actual-model selectable images. Replaced text-only grille/finish choices, abstract decal swatches and checkbox-led cabin/lamp selection with consistent image cards. Paint exposes eight initial renders, all 28 colours through expansion and retains custom colour. Added body-matching finish/decal/grille/paint renders; unsupported short-body lamps/cabin remain research-only. Fitting and supplier actions stay separate. Seat palettes support repeat-to-remove, and now tint the existing contoured woven inserts in both Garage and Drive instead of adding blocky overlay geometry. The frontend-design skill informed the common image-first selection language and cleaner selected-state hierarchy without changing the plain-JavaScript stack.

Blender road and AT tyres on both bodies now have recessed tread beds, staggered blocks and raised shoulder lugs, preserving rolling dimensions. Both assets remain under 3 MB. Showroom plates use uppercase JIMNY; the tailgate badge is untouched. Workshop architecture is no longer scaled 3×; human-scale service details, stochastic concrete, colour-managed albedo, separate roughness and restrained illumination replace the previous oversized/wavy presentation. Car labels start hidden and remain available on request. Lighting/glass reflections are restrained, not claimed photorealistic.

203 actual-model thumbnails regenerated and fingerprinted. Detailed frames expose tyre tread, grille faces, bumpers, snorkels and seat inserts. Browser QA checks every garage part card's fit/remove, all ten image categories, grille/decal reset, colour/seat selection, undo/reload, both bodies, and 1440×1000 / 1100×800 / 390×844 / 844×390 layouts. Car remains visible while the tray scrolls. No observed page/console errors, broken category images or horizontal overflow. 214 tests pass; production build and whitespace check pass. Physical phones/Safari remain unverified.

Course testing identified and fixed a real bypass: a vehicle 2.1 m beside articulation obstacles could clear technical checkpoints. Technical gates now require whole-car clearance and low range, with progressively tighter openings. Stop checkpoints warn ahead, descent warnings match the scoring speed, and expanded-world/river wording is accurate. 18 affected body/difficulty route simulations pass. An actual browser-keyboard Expert urban articulation run finished without recovery with visible wheel lift; mountain/desert were not fully browser-completed this pass. Desert missions still need more distinct objectives/terrain. This is a design assessment, not a claim that automated tests prove fun.

Latest comparison: `modeling/verification/garage-review.html`. Visual parity remains open: fine exterior surfacing, glass, wheel/rim reflections and cabin detail are below the generated target. Human models and radio remain deliberately excluded. Local changes only; no commit, push or deployment.

## Progress badge collection — 21 October 2026

Five local game ranks are derived from valid completed v2 mission records, not a separate XP counter: First Track (one lesson); Trail Ready (all four lessons at 70+); Terrain Explorer (Trail Ready plus one 70+ mission in each expedition world); Line Finder (Trail Ready plus all 12 expedition missions at Trail/Expert with 70+); Summit Club (all 16 missions at Expert with 90+). Repeated missions, body variants and difficulty variants do not inflate counts. Free roam/custom yards do not award ranks. Existing eligible saves qualify immediately. New ranks appear on the results screen.

Your badges opens from the course lobby, pause and results. Locked ranks disclose requirements and cannot export. Earned ranks export original vector-derived square PNG (1080²), story PNG (1080×1920), or an A4 print page via the browser's Print/Save PDF. Names are escaped; no personal data uploads. Web Share receives a PNG file where supported, otherwise the action downloads it. Browser-local scores are not tamper-proof or independently verified, and clearing storage loses progress. Every export explicitly says game achievement, not driving certification.

198 automated tests pass including award thresholds, malformed/legacy records, duplicate protection, new-unlock detection and artwork escaping. Isolated browser fixtures verified empty/locked states, Escape return, saved-rank recovery, desktop/phone layouts, real PNG downloads, print-frame creation, generated A4 PDF, unsupported-share fallback and mocked supported-share payload. No real social post or physical printing was performed. `modeling/verification/badge-example-*` uses synthetic QA progress and the sample name Ridge Runner; it is not an award issued to the owner. The frontend-design skill informed the rally-patch styling and mobile export-first hierarchy while preserving the existing plain-JavaScript stack.

## Current scope revision — 21 October, custom terrain and expanded resources

This checkpoint supersedes earlier driver, catalogue-size and world-size descriptions below. It does **not** close the visual-realism goal or certify a production release.

Final integrated verification: **194/194 automated tests pass**, release build and whitespace checks pass; all **86** actual-model thumbnails regenerated with current renderer fingerprints. Garage browser checks cover wheel fit/remove, undo, reload, decal application, four viewport sizes and source-directory reading space, without console errors or horizontal overflow. The reference-led layout and actual close-up wheel renders are compared in `modeling/verification/garage-review.html`; six combinations reuse two modeled wheel assemblies, not six exact aftermarket products.

The Himachal river approach cliff was fixed with continuous graded approaches. Actual rigid-body crossing from the southern approach through the bridge to the northern bank passes, with measured approach slopes under 25%. Fresh browser capture `modeling/verification/expansion-river.png` verifies water, deck, weathering, markings and no grass through the bridge; no page/console/shader errors. This is a simplified guarded game crossing, not a natural-river realism or real-world wading sign-off. The older pending-river notes below are superseded by this integration result.

- Catalogue: **305 dated market listings plus 40 core part entries**. Three additional design-only records represent grille/paint/graphic controls, not extra products. The market data contains 266 research-only, 37 representative and 2 reference-guided listings at this checkpoint. More products do not mean 305 exact product models. Body-style evidence, dated stock observations and preview type remain separate; verify fitment, availability, shipping, approval and installation with the seller. See `modeling/MARKET_SOURCES.md`.
- **Ten regions**: India, Australia, Japan, South Africa, Mexico, Chile, United Kingdom, New Zealand, Indonesia and Brazil. Resource coverage remains uneven. Himachal service support is not represented as verified aftermarket fitting expertise. Region selection is explicit, without location tracking.
- Human avatars are **removed from this phase**. The game ignores saved man/woman selections and does not load human meshes. Player names and optional door-name decals remain. Existing avatar assets and historical development evidence may remain in the repository; they are not current gameplay features.
- Exploration worlds now have **three times their previous area**, not three times their width: approximately 1,039 m mountain, 1,386 m desert and 554 m proving-ground square extents. The 320 m lesson ground remains unchanged. Side-trail discoveries are integrated with map markers and notices. River/bridge integration is under its own verification gate; this note does not sign it off or imply a real-world wading capability.
- **Create** is a third lobby mode: a 320 m custom yard, six obstacle types, up to 24 placed elements, editable map/coordinates/heading, removal, undo, clear/starter layouts, local saving, JSON import/export and immediate free-roam testing. Bounds/spacing validation protects the start area and rejects invalid imports without replacing the current plan. Testing rebuilds the terrain and restarts the Jimny at the yard entrance. These are authored game obstacles, not civil-engineering or real driving safety plans.
- **Radio is deferred** at the user's request. No station player, external streams or borrowed credentials were added.

### Verification for this checkpoint

- Actual Chromium editor flow passed: place by map and coordinates, drag, edit, remove, undo, clear/undo, save/reload, reject malformed/unknown-element imports, download JSON, switch Lessons/Explore/Create without losing the in-memory plan, start `custom-test` in free roam and return through Pause → Edit my terrain. Names/decals survive while legacy avatar choice becomes `none`.
- Desktop 1440×900, portrait 390×844 and landscape 844×390 had no horizontal document/dialog overflow or page errors in these checked flows. Desktop Create shows the complete map beside Test my terrain. Short landscape uses the scrollable editor dialog; the entire editor is not claimed to fit without scrolling. These are desktop browser emulations, not physical-phone performance results. Screenshots: `modeling/verification/terrain-editor-*`.
- Ten targeted terrain/editor tests pass, covering placement mapping, validation, local-storage failures, rendered/physical terrain agreement and driveable obstacle lines. Full-release checks and updated preview fingerprints remain the integrator's gate; no stale global test total is asserted here.
- Audio source inspection confirms original Web Audio engine harmonics, tyre/scrub/wind noise and short oscillator effects. **No authentic Jimny engine recording or measured acoustic model is present.** The 24 prerecorded Cillian coaching clips are a separate, locally hosted subsystem; uncatalogued advice can use optional device speech. No microphone, runtime speech-generation request or client credential is required.
- An instrumented real game run started with zero audio contexts, then Sound on created a running context and a non-silent signal. Idle engine harmonic was 28.3 Hz at 850 rpm; during an actual accelerator input the simulation reached about 1,581 rpm and the smoothed harmonic reached 48.9 Hz. Pause and Sound off suspended the context. This verifies functioning, changing audio, not subjective timbre quality or Jimny acoustic fidelity. Zero human-model network requests and zero page errors were observed with a legacy woman profile. See `modeling/verification/audio-live-drive.png`.

### Generated-reference comparison remains open

`modeling/verification/course-review.html` preserves the exact generated Mountain/Urban/Desert targets separately from unretouched before/after engine captures at fixed vehicle positions and headings. Chase framing changed and is explicitly disclosed. Nine updated gameplay captures checked the three courses at desktop and both phone-sized orientations: no page/console/shader errors or horizontal overflow. The separate development preview's missing favicon is documented, not misreported as a shader fault.

Visible gains include readable sky/horizon, workshop/container/tyre-stack landmarks, mountain boulder/tree/shelter clusters and warmer rippled sand. The result remains substantially simpler than the targets: broad empty slopes, repetitive/angular vegetation, shallow-looking ramps, sparse ground clutter and limited distant scene depth. The fixed desert comparison does not show the concept's camp/rock islands. The Cabin/Garage target remains in `modeling/verification/concept-review.html`; neither comparison is a claim of concept parity, manufacturer realism or task-wide completion.

## Single-ground lessons revision, 21 October

- Lessons now has one 320 m training ground, separate from Explore & challenges. No destination selector or free-roam checkbox is shown in Lessons. Switching modes remembers each mode's course, mission, level and exploration choice.
- Four lessons: controls and guarded range changes; alternating wheel steps; low-range climb, crest stop and descent; soft-sand traction. All 4WD checkpoints and their subsequent authored lines stay on loose or sandy surfaces. The hill and wheel steps use the physical heightfield, not decorative meshes. The steps have a matching fine-resolution collision bed and visual mesh.
- Training-ground map is a labelled schematic, not a rendered preview. It is expandable and starts collapsed on phones so lesson choices appear immediately. Daylight/Rally contrast verified. Finishing a lesson offers the next lesson in the same ground; lessons remain unlocked for direct selection.
- Verification: 140 automated tests pass. All 24 new lesson feasibility runs pass (four lessons × three levels × two bodies), plus 24 existing proving-ground mission runs after the ramp-contact refinement. These are actual rigid-body simulation runs, not proof of real Jimny dynamics or human enjoyment.
- Browser checks: all four lessons start with their correct checkpoint sequences and rigid-body physics; mode switching restores selections; all three exploration destinations remain available; no page errors. Desktop 1440×900 and 1366×768, phone-emulated 390×844 and landscape 844×390 checked without horizontal overflow. Inspected actual hill/step/sand renders and a mobile driving view. This does not replace physical-device testing or close the earlier realism quality gate.
- Local bundle and `dist/` rebuilt. No commit, push or deployment in this revision.

## Quality gate

Latest user direction, 21 October: compare actual game captures with the generated reference concepts, not real photographs. Those concepts are the visual target, NOT proof of attained in-engine fidelity. Preserve the model's established dimensions and controls, but judge this pass against the exact cabin/Garage concepts. No completion claim based only on passing tests or generated imagery.

## Work and acceptance

- [ ] Stock exterior: proportions, rear panel contours, authentic-shaped badges, glass, wheels and lamps; front/rear/side/three-quarter comparisons.
- [ ] Cabin: closed floor/firewall, textured materials, accurate shaped controls and seats, no invented large display; steering/selector/pedal animation. Human avatars are excluded from the current phase.
- [x] Garage: car and popular previewable options visible immediately; one-click fit/remove, categories and projected on-car shortcuts, undo/stock comparison, selected chips, separate sourcing; bounded mobile preview and independent tray; no clipped navigation in tested viewports.
- [x] Three open environments, now approximately 1,039 m / 1,386 m / 554 m wide after the 3× area expansion; four missions each; Learn/Trail/Expert different routes/requirements; free roam without corridor reset. Visual quality remains a separate open gate.
- [x] Rigid-body vehicle and wheel contacts: collision, suspension, surface grip, low range; input guards, no claim of certified OEM physics.
- [x] Keyboard and touch: WASD/arrows, Space brake, Shift gentle, F full throttle, Q/E selector, 1/2/3 transfer, H parking/handbrake, C camera, M map, Esc pause; clear held controls on blur; no interference with typing. Fifteen actions can be remapped in Controls & help, with duplicate/reserved-key rejection, persistent labels and restore defaults.
- [x] Original companion SUVs, parked initially, with separate glazing, doors, wheels and fittings. No traffic simulation or licensed competitor fidelity claimed.
- [x] Twenty-four local Cillian instructor recordings, exact-script captions, repeat/mute, device fallback and stale-instruction cancellation; generated only after explicit approval of the 19.4-credit quote. No credentials in client. Independent subjective pronunciation/listening approval remains separate from technical playback checks.
- [x] Engine/load/surface/environment audio, interior/exterior mix, independent levels and mute, coaching ducking; source/rights recorded honestly. Original synthesis, NOT recorded Jimny acoustics; device coaching volume still uses system controls.
- [x] Selected body/paint/decals/supported parts/name persist into game. Saved human-avatar choices are ignored in the current phase. Shared accessory builder, tyre/visual-lift corrections; representative stock mechanics retained. Saved state migrated; old scores archived.
- [x] Image export and multi-angle recap with synchronized game audio and optional recorded narration. Narration follows actual heard instructions and interruptions; trims at replay boundaries. Narration-only export supported. Actual renderer thumbnails. Device speech is explicitly excluded from recordings.
- [ ] Mac browser and mobile layout checks, sustained performance/export check, measured fps. Explicit physical-phone testing limitation if no device.

## Not included

Deformable mud, crash deformation, multiplayer, live traffic, exact manufacturer physics, paid assets without approval.

## Baseline

Existing game: four centre-line courses; automatic recovery 32m from route; local speech only; single triangle engine oscillator; cabin driver hidden per render. Existing model badges use Manrope text. Existing tests do not establish visual realism or meaningful course challenge.

## Evidence log

21 October integration pass:

- 99 automated tests pass after final model export and 80 actual-renderer thumbnail regeneration. Both final compressed bodies are under 3 MB.
- 72/72 real rigid-body mission runs pass: twelve missions × three difficulties × both wheelbases. Steering/throttle/brake/guarded shifts are used, not teleports. This proves feasibility, not enjoyable human play.
- Photo comparison exposed an interior sill piercing the lower doors and undersized front amber indicators. Both were corrected, exported and protected by actual-GLB regressions. Front/rear/orbit/cabin captures were inspected. Exterior is improved but not manufacturer-CAD/photographic fidelity. Cabin and avatars remain visibly simplified; these quality gates stay open.
- Garage real-browser checks: fit/remove/repeat, undo, colour/decals, internal sources, stable car position while tray scrolls, body switch and saved build into Drive. No hotspots or separately selectable alternate UI yet.
- Game actual-browser checks: selector-focused Q/E, H/F, steering, touch accelerator/release, cameras, map, pause; no page errors. Mobile 390×844 and 844×390 layouts rechecked. Landscape console clipping and portrait coach overlap fixed.
- Export validation found and fixed an MP4 single-video-frame failure. Current visible hardware-browser WebM: 306 decoded VP9 frames over approximately 10.1 seconds, Opus audio through 10.12 seconds, 1280×720, 5,248,173 bytes. Actual motion and wheel close-up inspected. Cancel tests prove cloned audio/video tracks stop without stopping the live audio destination.
- Hardware-browser sample: Apple M4 / ANGLE Metal, 1440×900, 151 frames in 5.03 seconds (~30 fps). This is not a 60 fps claim or physical-phone benchmark. A separate concurrent software-rendered headless run was much slower; low-end device performance remains an open gate.
- Higgsfield plugin lists Meshy models but lacks `generate_3d` in this session. After explicit user permission, read-only signed-in Safari inspection confirmed scene GLB export, not a compatible priced direct-text Meshy workflow. No generation job or paid asset was submitted. Rig-export details and license for a generated human are not yet verified.
- Natural prerecorded coaching remains pending provider voice selection/generation. No secret credentials borrowed from other projects, no client-side keys, no fictional completed audio upgrade.

## Remaining acceptance work

1. Visual goal remains open: dashboard/seat proportions and ergonomic reach are illustrative, skin/hair/finger contact are simplified. Mirrors now use live rear-facing cameras (approximate, not exact optical reflections). Scenery still needs an artist-level pass. Do not equate current renderer with the generated concept imagery.
2. Measured/lawfully sourced engine recordings if authentic acoustics are required. Current engine sound is original synthesis, not a Jimny recording. Cillian coaching and recorded-narration exports are now implemented; see modeling/VOICE_PRODUCTION.md.
3. Physical iOS/Android and Safari export/performance verification; additional human challenge/playtesting. Desktop Chrome mobile emulation is not a physical-phone benchmark.
4. Product-specific CAD and fitment verification. Many accessory previews are explicitly representative; three-door compatibility is intentionally more restricted. International vendor coverage is uneven.

No commit, push or deployment was performed in this implementation pass.

## Resumed implementation, 21 October

The earlier incomplete checkpoint is superseded: CC0 MakeHuman-derived man/woman meshes now load into the runtime with deforming skeletons and steering arm IK. Head-only first-person hiding, floor clearance, camera/collar clearance and palm-to-rim contact are regression-tested. Both driver files are below 0.5 MB. The older procedural shapes are only a load-failure fallback, not the primary models. See modeling/DRIVER_SOURCES.md.

Actual NEXA cabin-photo comparison drove the broad passenger grab rail and shelf, circular airbag hub, sculpted steering spokes/switch pods/open lower V, hazard insert, climate-knob detailing and stronger woven-seat microtexture. Driver neckline was corrected after actual screenshots exposed an oversized collar. Interior road view uses the anatomical eye location; a separate look-down view reveals hands and controls without moving the eye behind the head.

Daylight / Rally dark is now a selectable, persisted theme in both Garage and Trail. Terrain cards use wider actual-engine captures. Phone coaching collapses by default: at 390×844 the driving stage is 397 px tall, versus approximately 270 px before; at 844×390 the compact stage spans the full width. All pedals remain visible.

Browser testing caught and fixed short-landscape Garage clipping and the Clubs tab incorrectly retaining the fitter list. Verified fit/remove, all nine lamp mappings, paint/decal, preset dismiss/apply/undo, stock compare, internal sourcing, India/Himachal/Australia filtering and three-door compatibility/restoration. No external purchase or contact was made.

Actual narration-only recap: 1280×720 VP9 + Opus, 654 decoded video frames, about 10.95 seconds, 6,222,650 bytes; audio mean -26.2 dB and peak -8.9 dB. A real touch-event run at 390×844 accelerated and released correctly without page errors. Custom-key browser test remapped throttle W→T, rejected the old W binding, restored defaults and preserved acceleration when one of two held aliases was released.

These completed features and checks do not close the visual-realism quality gate. The current renderer is recognisably a Jimny game asset, not a manufacturer configurator or a photo-real cabin. Final actual captures and the latest verification count are recorded in RELEASE_REVIEW.md.

## Concept-target pass, 21 October (supersedes earlier camera/driver details)

The user explicitly selected the previously generated images, not real photographs, as the visual comparison target. Exact copies and unretouched actual captures are paired in `modeling/verification/concept-review.html`.

- Both Blender bodies: rounded-section wheel/crowned hub, shallower instrument hoods, inset fascia and contoured seats. Final body cavity colors preserved; only unused roof color attribute removed. Both GLBs remain below 3 MB.
- Driver meshes: knit/denim micro-surfaces, skin variation, pupils, hair and garment detail; corrected wrist/finger orientation. First-person hides head and torso, retains sleeves/hands/legs. Third-person retains complete driver. Assets are approximately 0.56 MB each, not the earlier sub-0.5 MB.
- Interior · cockpit is a composed view, not a calibrated anatomical eye point. It shows road, wheel and hands together. The look-down view retains the anatomical eye. Fixed the empty-driver fallback which previously intersected the seat. A first-person near plane trims proximal sleeves without clipping the wheel/grips in regression checks.
- Three small live mirror targets, staggered updates, feedback prevention, renderer-state restoration and disposal tests. Actual movement/steering check showed changing reflected scene content. These are approximate rear-facing views, not exact planar optics.
- Dark factory infotainment screen seated in its housing with side keys; continuous instrument faces replace isolated number plaques, with marks/needles sharing their angular mapping. Local CC0 daylight HDR for paint reflections and clearer glazing in cabin views. Compact desktop coaching removes the redundant cabin thumbnail when already inside the cabin.
- 153 automated tests pass; 80 previews regenerated and fingerprinted. Final browser captures cover five-door/man, three-door/woman and both no-driver mobile orientations, no page errors or document overflow. All six camera modes and moving mirrors checked. Physical-phone/Safari performance and the full visual target remain open.

Remaining visible gap: dashboard/selector modeling, anatomical hand/cloth close-ups, body reflection continuity, tyre/rim finish and terrain art. No claim of concept parity, manufacturer realism or task-wide completion. No commit/push/deploy in this pass.

## Goal-versus-result audit and fixes, 21 October

The product-audit skill was used for a scoped acceptance review against the user's plan, not an unrelated full security/legal audit. The current goal matrix, evidence, gaps and prioritized next steps are in `modeling/verification/concept-review.html`.

- Fixed category scroll/focus race using bounded layout-frame resets and no implicit smooth tray scrolling; heading/Undo remain visible after editing vinyl then switching categories. Fixed Online sellers active-tab state, Rally toast/Undo/status contrast, and short desktop workspace overflow.
- Rally becomes the first-visit default, retaining saved Daylight. Added original low-poly workshop architecture and concrete material; walls remain beyond the 11 m orbit envelope. Daylight/scenery switching does not alter a saved build. All 80 thumbnails regenerated from this stage/model and fingerprints updated.
- Game paint highlight intensity/roughness revised after read-only actual-GLB normal checks did not substantiate a body-mesh defect. No speculative new model export. Cockpit lowered and narrowed on landscape displays to show larger wheel/fascia and less bonnet. Portrait keeps the wider field of view.
- Fixed exposed sleeve interiors at the root: first-person shoulder origins move down, retaining exact steering hand targets; full anatomy restores in third person. Near plane restored to .025 to retain cuffs at full steering lock. Both drivers/body variants checked. Refined selector knob shape, recessed dark tracks and reduced oversized legends.
- 158 tests pass, build and whitespace checks pass. Current actual screenshots cover main views, both bodies/drivers and no-driver mobile states. Browser category sequence and selected-part/scenery/theme state checks performed; no page errors in captured flows. The workshop initially occluded a side preview, which the preview-size regression exposed; fixed before final capture. Physical-device/Safari performance remains open.

The acceptance goal is still incomplete. Visual fidelity and exact supplier geometry are not established by the functional test suite. No commit/push/deploy.

## Course concept gap pass — 21 October 2026

Latest comparison: modeling/verification/improvements-review.html; actual captures concept-target-{mountain,sand,urban}.png. The generated board remains the target, not evidence of gameplay. Exact concept parity is not achieved: broad protected corridors, procedural foliage, distant geology, river placement and overall composition remain visibly different.

Implemented 30 varied mountain step footprints shared by visible/physical surfaces, terraced mountain/quarry shoulders, five asymmetric off-route dune ridges and connected solid outcrops (53 mountain, 63 quarry, 30 desert rocks). Clustered pine stands retain exact shared trunk collisions. New original alpha-cutout foliage/bark/groundcover use bounded instancing and explicit texture ownership. Slope shading uses smooth normals instead of per-triangle colour seams; scanned gravel and rock textures, distance-limited normal detail, neutral rock colouring and broader terrain shadows improve material/grounding.

Large boulders now use locally bundled CC0 Poly Haven Boulder 01 by Rico Cilliers, reduced in Blender to 3,000 triangles / 780,160 bytes with photographic textures. Source checksums/license and processing are retained in assets/trail-rocks/SOURCES.md and its provenance JSON. Geometry is closed, normalized to the existing collider envelope, asynchronously preloaded with procedural fallback, and disposed explicitly. The rejected open cliff scan is not shipped. Scans improve material detail but do not establish exact geological collision or concept matching.

Fixed a pre-existing Expert momentum-route stall through an eastern-shoulder checkpoint, without boosting grip/torque. Both body versions complete Expert; existing Learn/Trail routes remain unchanged. 243 tests pass, build and whitespace checks pass. Fresh actual scene captures report no shader/page errors. Built game starts with scanned assets and Rapier at 1440px and390px without overflow. Warm 390px Mac-browser samples57–60fps; startup measurements were transient, not physical-device certification. No exhaustive audit, commit, push or deployment.
