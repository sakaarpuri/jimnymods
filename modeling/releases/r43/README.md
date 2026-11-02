# R43 model handoff

Verified candidate models for integration review; these files have not been deployed by the modeling chat. Supersedes the rejected R39 shelf and intermediate R40–R42 experiments. Asset hashes and compressed sizes are in `manifest.json`.

## Geometry

The fixed upper wing and grille surround now follow the narrowed bonnet. A continuous curved pressing replaces the broad horizontal landing and separate raised rim. The bonnet retains its shortened nose and smooth crown. The upper pressing extends back to the cowl without deleting adjoining rear triangles; recessed folded returns close the opening beneath both hinge housings. Higher position precision reduces jagged bonnet edges. A narrow bonnet shut line remains because the bonnet is a separate opening panel.

The three-door receives the revised bonnet, fixed front pressing, hinge/cowl treatment, permanent engine-bay closure, lamps, indicators, all eight grille assemblies and stock bumper. The nose is fitted to the short body's wheelbase and reference length instead of blindly translating the entire long-body front. The isolated mirrored spare-wheel S is corrected.

The three-door retains its own long side doors, quarter glass, roof/ribs, pillars, rear body and tailgate, cabin, mirrors, wheels and rear bumper. Its original pre-Kimi Jimny/ALLGRIP lettering and restored-quality cabin/wheel details were already present and are preserved. The five-door's rear pillar/tailgate reconstruction was not copied over the different three-door rear shell. This is a selective transfer of relevant improvements, not a wholesale replacement of every rear/roof/interior part.

## Integration mounting coordinates

Coordinates are site-world metres, Y up and Z forward. Five-door rigid grille, lamp and bumper positions are unchanged. All eight native three-door grilles are already positioned correctly; do not offset them again.

| Datum | Five-door | Three-door |
|---|---:|---:|
| Rigid front offset relative to five-door | 0 | -0.065770106 |
| Cowl, wheel-arch and windscreen offset | 0 | -0.170000000 |
| Headlamp centre Y | 0.95506 | 0.95506 |
| Headlamp centre Z | 1.72239 | 1.65662 |
| Headlamp front Z | 1.76513 | 1.69936 |
| Grille front Z | 1.76953 | 1.70376 |
| Stock bumper front Z | 1.892976 | 1.827206 |
| Stock bumper rear Z | 1.53228 | 1.46651 |
| Bonnet front Z | 1.74800 | 1.68223 |
| Bonnet rear Z | 0.77400 | 0.60400 |

Runtime front bumpers, bull bars, winches, pods, front lamps, beam/glow origins and front bumper garnishes must use the five-door fitted position minus 0.065770106m for the three-door. Replace the earlier provisional -0.170 rigid-front offset; do not stack both offsets. The existing accessory-headlamp builder already applies -0.170, so account for that explicitly. Use the five-door lamp fit (XY scale 0.85, drop 0.022, setback 0.130) before the new body offset. A bonnet guard follows the new front datum without the old additional 3.5-degree tilt; verify depth against the fitted bonnet. Keep variant-specific roof, snorkel, sill, rear and wheel mounting positions. Preserve the integration chat's wide-flare inner returns and roof-light feet fixes.

## Verification and remaining integration work

`modeling/verification/site-r43/verification.json` records 11 passing checks: preserved short-body assemblies and rear/glass, naming/metadata, byte budgets, no broad bonnet landing, opaque cowl returns on both sides of both bodies, independent engine-bay closure, spare-emblem orientation and reference dimensions. The separate fascia tests pass for both bodies, including eight grille contours, lower-corner coverage and clear lamp/indicator apertures.

The three-door measures 2250.1mm wheelbase, 3485.0mm between bumpers and 3645.4mm with the optional spare cover. Its original retained body/glass positions differ by at most 0.028mm after compression. The longitudinal mapping's minimum sampled Jacobian is 0.8925, with no sampled folds. Five-door accepted dimensions are retained; these are visual reference models rather than certified factory CAD.

Actual workshop captures are in `modeling/verification/site-r43/`: front, quarter, rear, top, corner and both cowl close-ups for each body. The capture script intercepts both GLB and gzip GLB and records exact candidate SHA256 values in `site-requests.json`; browser errors were empty. Earlier R39/R42 site overrides missed gzip and are not valid final evidence. Current R43 captures are verified against these exact files.

These captures use stock parts. Runtime accessory fit, all site presets, preview regeneration, full application checks and publication belong to the integration chat. Small local creases at the formed cowl housing and the retained three-door A-pillar base remain visible in extreme close-ups; the former long open slit is closed. Review the close-ups rather than treating geometric tests as proof of factory-perfect surfacing.

## Editable sources and reproduction

`jimny-lwb.blend` contains the native revised mesh; `jimny-swb.blend` is an editable reconstruction from the verified final GLB because the older procedural short-body native file was stale. Both open in stock visibility with alternate grilles/wheels hidden. Material custom property `site_material_role` preserves the canonical site role when Blender adds numeric suffixes. Native exports require material-role restoration, optimization and renewed verification; do not assume a native export is byte-identical to the release GLB.

Generation sequence: `modeling/refine_site_r42.py`, R42 replacement, `modeling/refine_site_r43.py`, R43 `replace.mjs`, `optimize.mjs lwb`, `transfer-front.mjs`, `fix-swb-spare-badge.mjs` once, then `optimize.mjs swb`. Do not run the spare badge reflection twice on the same model. The final optimization uses 16-bit positions and 12-bit normals without mesh simplification.

Do not ship `inspection-viewer.js`; it is a camera-only diagnostic bundle. Deploy only the final GLB/gzip assets after integration checks. Keep all unrelated phased-launch, customization, cabin and game changes in the integration worktree.
