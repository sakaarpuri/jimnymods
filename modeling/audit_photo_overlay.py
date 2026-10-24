"""Brief 4 accuracy audit: render the shipped model through a camera solved from a
reference photo, and overlay the photo at 50% opacity. Reads a copy of the .glb only.

Run (Blender 5.2, headless):
  Blender --background --factory-startup --python modeling/audit_photo_overlay.py -- \
      <model.glb> <photo.jpg> <points.json> <out_prefix>

points.json gives the photo's focal length in pixels (or null to solve it) and picked
pixels for points whose 3D position follows from the published specification alone:
wheel centres, rim tops/bottoms and tyre contact points (website coordinates: x to the
car's left, y up, z forward, metres). Model geometry is never used to place the camera,
so the overlay tests the model rather than fitting to it.
"""
import bpy, json, sys, os, math
import numpy as np
from mathutils import Matrix, Vector

model, photo, points_file, out = sys.argv[sys.argv.index('--') + 1:][:4]
spec = json.load(open(points_file))

img = bpy.data.images.load(photo)
W, H = img.size
cx, cy = W / 2, H / 2
names = list(spec['points'])
# A world height of "r" is the loaded wheel-centre height, solved with the camera:
# a tyre under load sits 1-2 cm below its nominal radius, which would otherwise bias scale.
FREE_R = any(v[1] == 'r' for v in spec['world'].values())
R_ROWS = [i for i, n in enumerate(names) if spec['world'][n][1] == 'r']
P3 = np.array([[v[0], 0.3467 if v[1] == 'r' else v[1], v[2]] for v in (spec['world'][n] for n in names)], float)
p2 = np.array([spec['points'][n] for n in names], float)


def rotation(r):
    """Rodrigues vector to matrix."""
    theta = np.linalg.norm(r)
    if theta < 1e-12:
        return np.eye(3)
    k = r / theta
    K = np.array([[0, -k[2], k[1]], [k[2], 0, -k[0]], [-k[1], k[0], 0]])
    return np.eye(3) + math.sin(theta) * K + (1 - math.cos(theta)) * K @ K


def points_for(params):
    if not FREE_R:
        return P3
    X = P3.copy(); X[R_ROWS, 1] = params[-1]
    return X


def project(params, X):
    r, t = params[:3], params[3:6]
    f = spec['focal_px'] or params[6]
    Xc = (rotation(r) @ X.T).T + t       # camera looks down +Z, image y down
    return np.stack([cx + f * Xc[:, 0] / Xc[:, 2], cy + f * Xc[:, 1] / Xc[:, 2]], 1)


def residual(params):
    return (project(params, points_for(params)) - p2).ravel()


def solve(start):
    x = np.array(start, float)
    lam = 1e-3
    for _ in range(400):
        r0 = residual(x)
        J = np.zeros((r0.size, x.size))
        for i in range(x.size):
            d = np.zeros_like(x); d[i] = 1e-6 * max(1, abs(x[i]))
            J[:, i] = (residual(x + d) - r0) / d[i]
        A = J.T @ J; g = J.T @ r0
        step = np.linalg.solve(A + lam * np.diag(np.diag(A) + 1e-9), -g)
        if (residual(x + step) ** 2).sum() < (r0 ** 2).sum():
            x = x + step; lam *= 0.3
            if np.linalg.norm(step) < 1e-10:
                break
        else:
            lam *= 10
    return x, math.sqrt((residual(x) ** 2).mean())


# Multi-start over the camera's bearing around the car; the car is centred in view.
best = None
f0 = spec['focal_px'] or 3000
for az in range(0, 360, 15):
    for dist in (8, 15, 25, 40):
        a = math.radians(az)
        C = np.array([math.sin(a) * dist, 1.2, math.cos(a) * dist])
        fwd = -C / np.linalg.norm(C); up = np.array([0, 1, 0])
        right = np.cross(fwd, up); right /= np.linalg.norm(right)
        down = np.cross(fwd, right)
        R = np.stack([right, down, fwd])          # world -> camera rows
        # matrix -> Rodrigues
        angle = math.acos(max(-1, min(1, (np.trace(R) - 1) / 2)))
        rv = np.zeros(3) if angle < 1e-9 else angle / (2 * math.sin(angle)) * np.array([R[2, 1] - R[1, 2], R[0, 2] - R[2, 0], R[1, 0] - R[0, 1]])
        start = list(rv) + list(-R @ C) + ([] if spec['focal_px'] else [f0 * dist / 10]) + ([0.33] if FREE_R else [])
        x, rms = solve(start)
        # Reject mirror solutions: points in front of the camera, a plausible loaded radius.
        if (rotation(x[:3]) @ points_for(x).T + x[3:6, None])[2].min() > 0 and (not FREE_R or 0.28 < x[-1] < 0.36):
            if best is None or rms < best[1]:
                best = (x, rms)
x, rms = best
f = spec['focal_px'] or x[6]
R = rotation(x[:3]); t = x[3:6]
C = -R.T @ t
X3 = points_for(x)
reproj = project(x, X3)
print('SOLVE', json.dumps({'rms_px': round(rms, 2), 'focal_px': round(f, 1), 'loaded_radius_m': round(float(x[-1]), 4) if FREE_R else None, 'camera_world': [round(v, 3) for v in C],
                           'errors_px': {n: [round(v, 1) for v in (reproj[i] - p2[i])] for i, n in enumerate(names)}}))

# Scene: stock configuration only.
STOCK = {'BodyShell', 'RoofShell', 'OEMGrille', 'StockBumper', 'StockHeadlamps', 'StockWheels', 'SpareWheel'}
for obj in list(bpy.data.objects):
    bpy.data.objects.remove(obj, do_unlink=True)
bpy.ops.import_scene.gltf(filepath=model)


def descendants(obj):
    yield obj
    for child in obj.children:
        yield from descendants(child)


for top in [o for o in bpy.data.objects if o.parent is None]:
    for obj in descendants(top):
        obj.hide_render = top.name not in STOCK

scene = bpy.context.scene
scene.render.engine = 'BLENDER_WORKBENCH'
scene.render.film_transparent = True
scene.render.resolution_x, scene.render.resolution_y = W, H
scene.render.resolution_percentage = 100
shading = scene.display.shading
shading.light = 'STUDIO'; shading.color_type = 'SINGLE'; shading.single_color = (0.80, 0.81, 0.82)
shading.show_object_outline = True; shading.object_outline_color = (0.10, 0.22, 0.45)
shading.show_cavity = True; shading.cavity_type = 'WORLD'
scene.view_settings.view_transform = 'Standard'

cam = bpy.data.objects.new('AuditCamera', bpy.data.cameras.new('AuditCamera'))
scene.collection.objects.link(cam); scene.camera = cam
cam.data.sensor_fit = 'HORIZONTAL'; cam.data.sensor_width = 36
cam.data.lens = f * 36 / W
cam.data.clip_start = 0.05; cam.data.clip_end = 500


def to_blender(v):  # website (x, y up, z forward) -> Blender (x, -z, y)
    return Vector((v[0], -v[2], v[1]))


# Camera axes in world: right = R row 0, down = R row 1, forward = R row 2.
right, down, fwd = R[0], R[1], R[2]
bx, by, bz = to_blender(right), to_blender(-down), to_blender(-fwd)   # Blender camera: +X right, +Y up, looks -Z
loc = to_blender(C)
cam.matrix_world = Matrix(((bx.x, by.x, bz.x, loc.x), (bx.y, by.y, bz.y, loc.y), (bx.z, by.z, bz.z, loc.z), (0, 0, 0, 1)))

render_path = out + '-model.png'
scene.render.filepath = render_path
bpy.ops.render.render(write_still=True)

shot = bpy.data.images.load(render_path)
m = np.array(shot.pixels[:], dtype=np.float32).reshape(H, W, 4)
ph = np.array(img.pixels[:], dtype=np.float32).reshape(H, W, 4)[:, :, :3]
base = m[:, :, :3] * m[:, :, 3:4] + (1 - m[:, :, 3:4])
comp = base * 0.5 + ph * 0.5
# Spec points in red, reprojected.
for (u, v) in reproj:
    iu, iv = int(round(u)), int(round(H - 1 - v))
    comp[max(0, iv - 6):iv + 7, max(0, iu - 6):iu + 7] = (0.9, 0.05, 0.1)
out_img = bpy.data.images.new('overlay', W, H)
out_img.pixels[:] = np.concatenate([comp, np.ones((H, W, 1), np.float32)], 2).ravel()
out_img.filepath_raw = out + '-overlay.png'; out_img.file_format = 'PNG'; out_img.save()
json.dump({'rms_px': rms, 'focal_px': f, 'camera_world': list(C), 'rotvec': list(x[:3]), 'translation': list(x[3:6]), 'size': [W, H],
           'loaded_radius_m': float(x[-1]) if FREE_R else None}, open(out + '-camera.json', 'w'), indent=1)
