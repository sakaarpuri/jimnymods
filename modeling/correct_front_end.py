"""Brief 4 Step 3: scripted front-end correction, applied to the opened master before export.

  Blender --background modeling/jimny-lwb.blend --python modeling/correct_front_end.py
  Blender --background modeling/jimny-swb.blend --python modeling/correct_front_end.py
  Options after "--": --no-correct (export the master unchanged), --samples <file.json>

The native .blend is never saved: the correction is a reproducible stage between the
editable master and the exported .glb. It is a smooth displacement field, measured
against Suzuki's drawings and studio photos (docs/brief-4/audit.md):

  * Front fascia band (bonnet front edge, grille, headlamps, bumper top) 115 mm lower;
    the bonnet falls from the unchanged windscreen cowl to the front edge.
  * Front bumper bottom 55 mm lower, so the bumper keeps a realistic depth.
  * Grille narrowed to 90% about the centreline and the round headlamps moved 55 mm
    inboard as rigid units, so they stay round.

The same field is implemented in src/front-end-correction.js for code-built parts
(bull bars, aftermarket lamps, snorkel, beam positions). The --samples file lets the
JavaScript test prove both implementations agree.
"""
import bpy, json, math, os, sys

ARGS = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHORT_BODY = os.path.basename(bpy.data.filepath).startswith('jimny-swb')
FRONT_AXLE_Z = 1.125 if SHORT_BODY else 1.295
# Parts that move as complete units with the front face; the body blends into them.
RIGID_FRONT = ('StockBumper', 'StockHeadlamps', 'OEMGrille', 'BlockGrille', 'RhinoGrille', 'ScriptGrille',
               'GlossGrille', 'DeleteGrille', 'ClassicGrille', 'MeshGrille')
UNCHANGED = ('StockWheels', 'AllTerrainWheels', 'SpareWheel')


def smoothstep(a, b, v):
    t = min(1.0, max(0.0, (v - a) / (b - a)))
    return t * t * (3 - 2 * t)


def correct(x, y, z, front_axle_z=FRONT_AXLE_Z, rigid=False):
    """Website coordinates (x left, y up, z forward, metres) -> corrected position."""
    zr = z - front_axle_z
    front = 1.0 if rigid else smoothstep(0.255, 0.455, zr)        # front face, ahead of the arch
    bonnet = smoothstep(-0.445, 0.455, zr)                          # cowl (unchanged) to front edge
    face_drop = 0.055 * smoothstep(0.30, 0.445, y) + 0.060 * smoothstep(0.445, 0.86, y)
    upper_drop = 0.115 * smoothstep(1.00, 1.15, y)                  # bonnet and wing tops behind the face
    dy = -(front * face_drop + (1 - front) * bonnet * upper_drop)
    u = abs(x)
    inboard = smoothstep(0.405, 0.44, u)
    shift = 0.10 * u * (1 - inboard) + 0.055 * inboard * (1 - smoothstep(0.68, 0.80, u))
    band = smoothstep(0.78, 0.84, y) * (1 - smoothstep(1.12, 1.17, y))
    depth = 1.0 if rigid else smoothstep(0.38, 0.50, zr)
    dx = -math.copysign(shift * band * depth, x) if x else 0.0
    return x + dx, y + dy, z


def apply():
    # Hidden alternatives (grille variants) have stale world matrices until the
    # scene is evaluated with them visible; the export script does the same.
    for obj in bpy.data.objects:
        obj.hide_viewport = False
        obj.hide_set(False)
    bpy.context.view_layer.update()
    moved = 0
    for obj in bpy.data.objects:
        if obj.type != 'MESH':
            continue
        top = obj
        while top.parent:
            top = top.parent
        if top.name in UNCHANGED:
            continue
        rigid = top.name in RIGID_FRONT
        mw = obj.matrix_world
        inv = mw.inverted()
        mesh = obj.data
        if mesh.users > 1:
            obj.data = mesh = mesh.copy()
        for v in mesh.vertices:
            w = mw @ v.co
            x, y, z = correct(w.x, w.z, -w.y, rigid=rigid)          # Blender (X, Y, Z) = (x, -z, y)
            if (x, y) != (w.x, w.z):
                w.x, w.z = x, y
                v.co = inv @ w
                moved += 1
        mesh.update()
    return moved


if '--samples' in ARGS:
    path = ARGS[ARGS.index('--samples') + 1]
    pts = [(x / 20, y / 20, z / 20) for x in range(-17, 18, 2) for y in range(4, 26, 2) for z in range(10, 42, 3)]
    json.dump({'front_axle_z': FRONT_AXLE_Z, 'samples': [[p, [round(c, 9) for c in correct(*p)], [round(c, 9) for c in correct(*p, rigid=True)]] for p in pts]}, open(path, 'w'))
    print('SAMPLES', len(pts))
else:
    if '--no-correct' not in ARGS:
        print('CORRECTED VERTICES', apply())
    exec(open(os.path.join(ROOT, 'modeling', 'export_jimny.py')).read())
