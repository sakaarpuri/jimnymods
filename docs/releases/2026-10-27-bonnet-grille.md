# Bonnet and grille release, 27 October 2026

The shared five-door and three-door assets now include the approved bonnet,
scuttle and fascia refinements. Blender masters are not overwritten; rebuild
with `modeling/export-web-model.py`, optimize, and remove unused UV streams.

## Final grille follow-up

- The painted grille surround has a wider, explicitly sampled roundover,
  including its upper corners. The bonnet/wing landing remains unchanged.
- The factory grille has a subtle moulded crown, rolled perimeter and shallow
  headlamp seats. This is actual geometry, not a painted shadow.
- Surface normals follow that geometry independently of the Boolean aperture
  walls. Patchy baked vertex occlusion is not applied to the smooth face.
- Factory plastic stays dark, non-metallic and satin, with enough sheen to
  reveal the contour. Workshop lighting and the other finishes are unchanged.
- Unused lettering and gunmetal UV streams were removed. Chrome UVs are
  retained because cabin metal uses a grain texture. No tyre or body detail
  was reduced to accommodate this follow-up.

## Bonnet taper and grille side visibility follow-up

- The bonnet becomes progressively thinner toward its nose, retaining the
  thicker hinge end, rounded turnover and unchanged fixed wing landing.
- The painted surround no longer hides the grille's existing side return.
  This is a local overlap correction, not extra trim or moved headlights.
- Both body versions and all eight modelled grille assemblies are covered by
  geometry checks. Workshop lighting, reflections, material settings and
  phone quality tiers are unchanged.

Final models are 3,250,676 bytes (five-door) and 3,199,840 bytes (three-door),
both below the existing 3,300,000-byte ceiling. All 264 model-derived preview
images and three course cards were regenerated from these assets.

## Verification before publication

- Normal release build and all 556 automated tests pass.
- A new shape assertion fails on the former flat grille and passes on both
  final assets; lamp apertures and replacement-light alignment remain checked.
- Final compressed-model close-up and raised three-quarter renders inspected.
- Desktop 1440 x 1000 and phone-emulated 390 x 844 checks load and rotate both
  bodies without script errors or horizontal page overflow.
- Drive starts and its cabin camera renders without script errors.

This is not physical-phone certification or an exact manufacturer-CAD claim.
The earlier desktop antialiasing change reduces fine-detail shimmer; it does
not eliminate it under every angle and lighting condition.
