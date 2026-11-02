# R37 combined release, not yet published

This worktree reconciles the R37 five-door model and its accessory mounts with
the later modelled workshop, twenty looks, verified-price policy, catalogue,
short-body model, faster game loading, game wheel-pose corrections and an
optional personal-best time trial (a 70+ control score is required). It also
contains the 18 reference-guided exterior accessories. The five-door native and
GLB came from `work/releases/model-r37` in the model workspace; do not run the
older procedural builder over the hand-edited Blender master.

Five-door GLB SHA-256: `2717c1159068452a002259b119e2b3a04fb5c83c52500607c8187b2e05d41151`.
Three-door GLB SHA-256: `6b2a831d62416e25312ee1728b672666f888c427408eb17ea5998289d002ad4e`.
329 Garage and three course previews were regenerated against these assets.

The focused integration tests pass, and actual browser checks fitted and
removed exterior parts and drove both bodies onto an incline. The complete
historical suite still has five-door geometry assertions that do not agree
with the replacement model. The model audit identified genuine dimensional
differences in roof height, covered length and indicator diameter, alongside
tests using superseded geometry/material names and probe positions. Alternative
grille side returns require additional visual review. Do not present the model
as dimensionally certified or publish this integration without resolving the
release gate. Existing workspaces and the live release remain intact.
