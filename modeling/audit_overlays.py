"""Brief 4 accuracy audit: orthographic renders of the shipped model, overlaid on a
calibrated reference drawing at 50% opacity. Reads a copy of the .glb; never writes
to the model or to modeling/*.blend.

Run (Blender 5.2, headless):
  Blender --background --factory-startup --python modeling/audit_overlays.py -- \
      <model.glb> <drawing.png> <calibration.json> <out_dir>

The calibration file names, per view, the drawing crop, the reference dimension
(its two extension-line pixels and its millimetres), the ground row and the anchor
used to place the model. Reference drawings are not committed (see docs/brief-4).
"""
import bpy, json, sys, os
import numpy as np
from mathutils import Vector, Matrix

model, drawing, calibration, out = sys.argv[sys.argv.index('--') + 1:][:4]
# The drawing path may be "-" when every view is an official photo.
os.makedirs(out, exist_ok=True)
cal = json.load(open(calibration))

STOCK = {'BodyShell', 'RoofShell', 'OEMGrille', 'StockBumper', 'StockHeadlamps', 'StockWheels', 'SpareWheel'}

for obj in list(bpy.data.objects):
    bpy.data.objects.remove(obj, do_unlink=True)
bpy.ops.import_scene.gltf(filepath=model)


def descendants(obj):
    yield obj
    for child in obj.children:
        yield from descendants(child)


visible = []
for top in [o for o in bpy.data.objects if o.parent is None]:
    keep = top.name in STOCK
    for obj in descendants(top):
        obj.hide_render = not keep
        if keep and obj.type == 'MESH':
            visible.append(obj)


def world_points(objs):
    for obj in objs:
        mw = obj.matrix_world
        for v in obj.data.vertices:
            yield mw @ v.co


# Front axle from the stock tyre vertices (forward is -Y in Blender).
tyres = [o for o in visible if o.parent and o.parent.name == 'StockWheels' and o.active_material and o.active_material.name.startswith('TyreRubber')]
front = [p for p in world_points(tyres) if p.y < 0]
front_axle_y = (min(p.y for p in front) + max(p.y for p in front)) / 2
front_most_y = min(p.y for p in world_points(visible))

# Drawing as darkness 0..1, rows top-down.
if drawing != '-':
    img = bpy.data.images.load(drawing)
    dw, dh = img.size
    pix = np.array(img.pixels[:], dtype=np.float32).reshape(dh, dw, 4)[::-1]
    dark = np.clip((0.86 - pix[:, :, :3].mean(2)) / 0.6, 0, 1)
    binary = dark > 0.35


def refine_column(x, y0, y1, reach=10):
    """Exact x of a vertical extension line near x (most dark pixels in the band)."""
    band = binary[y0:y1, x - reach:x + reach + 1].sum(0)
    return x - reach + int(np.argmax(band))


def refine_row(y, x0, x1, reach=10):
    band = binary[y - reach:y + reach + 1, x0:x1].sum(1)
    return y - reach + int(np.argmax(band))


scene = bpy.context.scene
scene.render.engine = 'BLENDER_WORKBENCH'
scene.render.film_transparent = True
scene.render.image_settings.file_format = 'PNG'
scene.render.image_settings.color_mode = 'RGBA'
shading = scene.display.shading
shading.light = 'STUDIO'
shading.color_type = 'SINGLE'
shading.single_color = (0.80, 0.81, 0.82)
shading.show_object_outline = True
shading.object_outline_color = (0.10, 0.22, 0.45)
shading.show_cavity = True
shading.cavity_type = 'WORLD'
scene.view_settings.view_transform = 'Standard'

camera = bpy.data.objects.new('AuditCamera', bpy.data.cameras.new('AuditCamera'))
scene.collection.objects.link(camera)
scene.camera = camera
camera.data.type = 'ORTHO'
camera.data.clip_start = 0.01
camera.data.clip_end = 100

AXES = {  # view: (right, up, toward camera)
    'side': (Vector((0, 1, 0)), Vector((0, 0, 1)), Vector((1, 0, 0))),
    'front': (Vector((1, 0, 0)), Vector((0, 0, 1)), Vector((0, -1, 0))),
    'rear': (Vector((-1, 0, 0)), Vector((0, 0, 1)), Vector((0, 1, 0))),
    'top': (Vector((0, 1, 0)), Vector((-1, 0, 0)), Vector((0, 0, 1))),
}

def render_photo_view(name, view):
    photo = bpy.data.images.load(view['photo'])
    W, H = photo.size
    sh, sv = view['mm_per_px']
    s = sv / 1000
    Wr = int(round(W * sh / sv)) + 1
    right, up, back = AXES[view['kind']]
    px, py = view['anchor_px']
    world = Vector((0, front_axle_y, 0)) if view['anchor'] == 'front-axle-ground' else Vector((0, 0, 0))
    u, v = px * sh / sv, py
    centre = world - (u - Wr / 2) * s * right + (v - H / 2) * s * up + back * 20
    camera.matrix_world = Matrix(((right.x, up.x, back.x, centre.x), (right.y, up.y, back.y, centre.y), (right.z, up.z, back.z, centre.z), (0, 0, 0, 1)))
    camera.data.ortho_scale = max(Wr, H) * s
    scene.render.resolution_x, scene.render.resolution_y = Wr, H
    path = os.path.join(out, f'{name}-model.png'); scene.render.filepath = path
    bpy.ops.render.render(write_still=True)
    shot = bpy.data.images.load(path)
    m = np.array(shot.pixels[:], dtype=np.float32).reshape(H, Wr, 4)
    cols = np.clip((np.arange(W) * sh / sv).round().astype(int), 0, Wr - 1)
    m = m[:, cols]
    base = m[:, :, :3] * m[:, :, 3:4] + (1 - m[:, :, 3:4])
    ph4 = np.array(photo.pixels[:], dtype=np.float32).reshape(H, W, 4)
    ph = ph4[:, :, :3] * ph4[:, :, 3:4] + (1 - ph4[:, :, 3:4])  # transparent studio background to white
    comp = base * 0.5 + ph * 0.5
    result = bpy.data.images.new(f'{name}-overlay', W, H)
    result.pixels[:] = np.concatenate([comp, np.ones((H, W, 1), np.float32)], 2).ravel()
    result.filepath_raw = os.path.join(out, f'{name}-overlay.png'); result.file_format = 'PNG'; result.save()
    report[name] = {'mm_per_px': [sh, sv], 'anchor_px': [px, py], 'photo': True}


report = {}
for name, view in cal['views'].items():
    if view.get('photo'):
        # An official photo with fixed calibration: separate horizontal and vertical
        # mm per pixel (marketing frames are not always square-pixel to the spec),
        # anchored on a picked pixel. Rendered at the vertical scale, then stretched.
        render_photo_view(name, view)
        continue
    x0, y0, x1, y1 = view['crop']
    W, H = x1 - x0, y1 - y0
    ref = view['reference']
    if ref['axis'] == 'x':
        a = refine_column(ref['pixels'][0], *ref['band'])
        b = refine_column(ref['pixels'][1], *ref['band'])
    else:
        a = refine_row(ref['pixels'][0], *ref['band'])
        b = refine_row(ref['pixels'][1], *ref['band'])
    mm_per_px = ref['mm'] / abs(b - a)
    s = mm_per_px / 1000
    right, up, back = AXES[view['kind']]

    # Anchor: a world point and the drawing pixel it must land on.
    anchor = view['anchor']
    if anchor == 'front-axle-ground':
        ground = refine_row(view['ground'], *view['ground_band'])
        px, py = (a if view.get('axle_end', 'a') == 'a' else b), ground
        world = Vector((0, front_axle_y, 0))
    elif anchor == 'centre-ground':
        ground = refine_row(view['ground'], *view['ground_band'])
        px, py = (a + b) / 2, ground
        world = Vector((0, 0, 0))
    else:  # top view: lateral centre between width lines, front-most point
        rows = binary[y0:y1, x0:x0 + W]
        cols = np.where(rows[int((a + b) / 2) - y0 - 150:int((a + b) / 2) - y0 + 150].any(0))[0]
        px, py = x0 + int(cols.min()), (a + b) / 2
        world = Vector((0, front_most_y, 0))
    u, v = px - x0, py - y0
    centre = world - (u - W / 2) * s * right + (v - H / 2) * s * up + back * 20
    camera.matrix_world = Matrix((
        (right.x, up.x, back.x, centre.x),
        (right.y, up.y, back.y, centre.y),
        (right.z, up.z, back.z, centre.z),
        (0, 0, 0, 1)))
    camera.data.ortho_scale = max(W, H) * s
    scene.render.resolution_x, scene.render.resolution_y = W, H
    scene.render.resolution_percentage = 100
    render_path = os.path.join(out, f'{name}-model.png')
    scene.render.filepath = render_path
    bpy.ops.render.render(write_still=True)

    shot = bpy.data.images.load(render_path)
    m = np.array(shot.pixels[:], dtype=np.float32).reshape(H, W, 4)[::-1]
    base = m[:, :, :3] * m[:, :, 3:4] + (1 - m[:, :, 3:4])  # over white
    d = dark[y0:y1, x0:x1][:, :, None] * 0.5
    red = np.array([0.86, 0.08, 0.12], dtype=np.float32)
    comp = base * (1 - d) + red * d
    rgba = np.concatenate([comp, np.ones((H, W, 1), np.float32)], 2)[::-1]
    result = bpy.data.images.new(f'{name}-overlay', W, H)
    result.pixels[:] = rgba.ravel()
    result.filepath_raw = os.path.join(out, f'{name}-overlay.png')
    result.file_format = 'PNG'
    result.save()
    report[name] = {'mm_per_px': round(mm_per_px, 4), 'reference_px': [a, b], 'anchor_px': [round(px, 1), round(py, 1)]}

json.dump(report, open(os.path.join(out, 'calibration-result.json'), 'w'), indent=1)
print('AUDIT', json.dumps(report))
