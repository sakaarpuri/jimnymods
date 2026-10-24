# Brief 4 Step 1: model accuracy audit

24 October 2026 · branch `model/accuracy` · nothing in the model has changed.

## References (Suzuki only)

Following the owner's instruction, findings use Suzuki's own material. None of it is committed; the overlay images live in the review page only.

| Reference | What it gives | Reliability |
| --- | --- | --- |
| NEXA Jimny brochure (India), page 10, Technical specifications · https://www.nexaexperience.com/content/dam/msil/nexa/in/en/assets/cars/jimny/documents/NEXA-Jimny-Brochure.pdf | Official dimensions and angles for the India five-door | Authoritative numbers |
| Suzuki Australia Jimny brochure 4047.pdf (Feb 2026), page 6 · https://www.suzuki.com.au/wp-content/uploads/2026/02/4047.pdf | Bumper-to-bumper lengths; three-door figures; side, front, rear and top line drawings of both bodies | Numbers authoritative. Drawings: the side views agree with their own wheelbase, length and height labels within 1%; the front and rear views disagree with themselves by about 6% (height against width), so they are used for shape only |
| suzuki.co.jp Jimny Nomade colour picker, frames 01–13 (Sizzling Red, E5R) · https://www.suzuki.co.jp/car/jimny_nomade/ | Studio side, front, rear and three-quarter views of a stock car (Nomade is the Japanese name for the same India-built five-door) | Near-orthographic but not calibrated: horizontal scale from the wheelbase (3.244 mm/px) and vertical from the roof (3.346 mm/px) differ by 3%. Heights below use the wheel-plane scale; treat ±40 mm as the noise floor |

CC0 Wikimedia photos (modified cars: aftermarket tyres, an accessory spare cover) were used only as a cross-check of the camera-matching method; they agree in direction with the findings and are not otherwise cited.

## Dimensions (from model vertices, `node scripts/audit-model-proportions.mjs`)

Five-door (India Jimny / Jimny XL / Nomade):

| Dimension | Model | Official | Difference | Source |
| --- | --- | --- | --- | --- |
| Wheelbase | 2590.4 mm | 2590 mm | +0.4 mm (0.0%) | NEXA p10 |
| Front track | 1394.9 mm | 1395 mm | −0.1 mm (0.0%) | NEXA p10 |
| Rear track | 1405.3 mm | 1405 mm | +0.3 mm (0.0%) | NEXA p10 |
| Width (below beltline, no mirrors) | 1644.3 mm | 1645 mm | −0.7 mm (0.0%) | NEXA p10 |
| Height | 1723.7 mm | 1720 mm | +3.7 mm (+0.2%) | NEXA p10 |
| Length, bumper to bumper | 3820.8 mm | 3820 mm | +0.8 mm (0.0%) | Suzuki AU p6 |
| Length with spare cover | 3982.3 mm | 3985 mm | −2.7 mm (−0.1%) | NEXA p10 |
| Tyre diameter (195/80 R15) | 693.4 mm | 693 mm (from size) | +0.4 mm | NEXA p10 tyre size |
| Ground clearance, unladen | 212.2 mm | 210 mm | +2.2 mm (+1.0%) | NEXA p10 |
| Approach angle | 38.9° | 36° | +2.9° | NEXA p10 |
| Departure angle | 51.2° | 46° | +5.2° | NEXA p10 |
| Breakover angle | 23.9° | 24° | −0.1° | NEXA p10 |
| Front overhang (to bumper) | 697.8 mm | not published | – | – |
| Rear overhang (to bumper / spare) | 532.7 / 676.6 mm | not published | – | – |
| Width with mirrors | 1928.8 mm | not published | – | – |

Three-door (site option; Suzuki AU p6): wheelbase 2250 / 2250, tracks 1395.1 / 1395 and 1405.2 / 1405, height 1723.6 / 1720, bumper to bumper 3481 / 3485 (−4 mm), with spare cover 3642.4 / 3650 (−7.6 mm), clearance 212 / 210. Its off-road angles are not published there.

Every published envelope dimension is within 1%. The approach and departure angles are a few degrees steep, which points at the lower bumper corners, not the body size.

## Shape and detail

Feature heights from the ground, five-door. "Photo" is the Suzuki side frame at wheel-plane scale; "Drawing" is the Suzuki AU side drawing. Model values are from vertices.

| Feature | Model | Photo | Drawing | Model − references |
| --- | --- | --- | --- | --- |
| Bonnet top at its front edge | 1187 | 1067 | 1067 | +120 |
| Bonnet top at the windscreen cowl | 1197 | 1194 | 1176 | +3 to +21 |
| Bonnet fall from cowl to front | 10 | 127 | 109 | about 110 mm of slope missing |
| Headlamp centre | 977 | 869 | 864 | +108 to +113 |
| Headlamp spacing, centre to centre | 1100 | ≈ 997 (front frame) | ≈ 979 (front drawing) | +100 to +120 (each lamp 50–60 mm too far out) |
| Front bumper top | 837 | 749 | 729 | +88 to +108 |
| Front bumper bottom | ≈ 385 | 386 | 382 | ≈ 0 |
| Front-door glass bottom (beltline) | 1167 | 1096 | 1132 | +35 to +71 |
| Front-door glass top | 1620 | ≈ 1495 | 1539 | +80 to +125 |
| Door mirror centre | 1285 | 1135 | 1195 | +90 to +150 |
| Front flare top | ≈ 929 | 886 | 905 | +24 to +43 |
| Roof | 1724 | – | 1720 (label) | +4 |

The three-door side overlay shows the same pattern (high, flat bonnet front; high mirror and side glass).

## Discrepancy table (sorted by visibility)

| # | Area | What's wrong | How far off | Visibility | Likely fix route |
| --- | --- | --- | --- | --- | --- |
| 1 | Bonnet and front face | The whole front fascia band (bonnet front edge, grille, headlamps, bumper top) sits too high, and the bonnet is nearly flat instead of falling toward the front | +90 to +120 mm; ≈110 mm of bonnet fall missing | High: every exterior view, and the first thing in the Garage's default angle | Scripted proportion correction: lower the front 0.5 m of bonnet and fascia with a blend to the cowl. Touches the eight grille variants, headlamps, front bumpers, bull bars, winch, light pods and the headlight beam positions in code |
| 2 | Headlamp spacing | Round headlamps sit too far apart | each ≈50–60 mm too far outboard | High: front views and thumbnails | Scripted rebuild of the lamp and grille fascia layout, best done together with #1 |
| 3 | Side glazing and beltline | Side windows start and end too high; the frame above the glass is too thin | glass bottom +35 to +70 mm, glass top +80 to +125 mm | Medium-high: side and three-quarter views | Scripted rebuild of the side glass and door frames. Affects cabin views (seat eye height against the sill), tint, and side decal areas |
| 4 | Door mirrors | Mirrors mounted too high | +90 to +150 mm | Medium: front and three-quarter views | Scripted move of the mirror assemblies; small part. The driving game's mirror cameras follow |
| 5 | Front bumper | Bumper top too high (bottom is right), so the bumper reads too tall | +90 to +110 mm at the top | Medium | Part of #1 (scripted proportion correction) |
| 6 | Door panel surfaces | Side panels are slightly wavy; visible as a wobbling reflection line since Brief 3 | qualitative | Medium in the Garage, low elsewhere | Brief 3 Phase 2 (smooth shading and normals), not a shape fix |
| 7 | Front overhang | Suzuki's side frame and drawing both show the front end 80–150 mm shorter, but the model matches the published 3820 mm bumper-to-bumper length and its rear overhang matches the frame | unresolved | Medium if real | Leave until measured on a real car (a tape measure from the front wheel centre to the bumper face settles it) |
| 8 | Approach and departure angles | Lower front and rear bumper corners are a little high or short | +2.9° and +5.2° | Low (only in the driving game's numbers) | Scripted correction of the lower bumper edges, or leave |
| 9 | Front flares | Arch flare tops slightly high | +24 to +43 mm | Low | Leave |
| 10 | Windscreen rake | Matches the drawing (≈26°); the Suzuki photo suggests up to 32°, probably perspective | uncertain | Low | Leave |
| 11 | Grille slot mesh and wheel spokes | Fine detail flickers while rotating outdoors (Brief 3 measurement) | detail | Low | Brief 3 Phase 2 (normal maps for fine detail) |
| 12 | Rear lamps, spare wheel, roof, tracks, wheelbase, width, height | Within ≈40 mm or within 1% | – | – | Leave as is |

Order of attack if all are approved: #1 with #2 and #5 together (one front-end correction), then #3, then #4. Each is shown as before-and-after overlays for approval before the next.

## Method and limits

- Orthographic overlays: `modeling/audit_overlays.py` renders a copy of the shipped .glb (stock parts only) in Blender 5.2 headless and composites a calibrated reference at 50%. Line drawings are calibrated from their own dimension lines; photos from the wheelbase and roof height.
- Camera matching for perspective photos: `modeling/audit_photo_overlay.py` solves the camera from wheel centres and tyre contacts only (positions fixed by the published wheelbase and track), so the model never places its own camera. `modeling/audit_photo_features.py` measures feature offsets through that camera.
- What the audit cannot establish: exact surfaces (no manufacturer CAD), the front overhang (see #7), and anything hidden in the references. Suzuki's own images are marketing material and not calibrated; where they disagree with the published numbers, the numbers win.
- Model files: `jimny-lwb-blender.glb` 3,168,596 bytes, `jimny-swb-blender.glb` 3,108,080 bytes (the size budget for Step 3).
