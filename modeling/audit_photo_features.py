"""Brief 4 accuracy audit: measure where model features land against the same
features picked in a reference photo, through the camera solved from wheel points.

Run (Blender 5.2, headless):
  Blender --background --factory-startup --python modeling/audit_photo_features.py -- \
      <model.glb> <points.json> <features.json> <out.json>

The wheel points are re-solved 40 times with +/-8 px noise to show how far the
camera's own uncertainty could move each projected feature. Offsets are converted
to millimetres at the feature's depth; horizontal image offsets mix the car's
length and width directions, vertical offsets are close to pure height.
"""
import bpy, json, sys, math
import numpy as np

model, points_file, features_file, out = sys.argv[sys.argv.index('--') + 1:][:4]
spec = json.load(open(points_file)); feats = json.load(open(features_file))
W, H = feats['size']; cx, cy = W / 2, H / 2
names = list(spec['points'])
FREE = [i for i, n in enumerate(names) if spec['world'][n][1] == 'r']
P3 = np.array([[v[0], 0.33 if v[1] == 'r' else v[1], v[2]] for v in (spec['world'][n] for n in names)], float)
p2 = np.array([spec['points'][n] for n in names], float)
f = spec['focal_px']


def rot(r):
    t = np.linalg.norm(r)
    if t < 1e-12: return np.eye(3)
    k = r / t; K = np.array([[0, -k[2], k[1]], [k[2], 0, -k[0]], [-k[1], k[0], 0]])
    return np.eye(3) + math.sin(t) * K + (1 - math.cos(t)) * K @ K


def proj(x, X):
    Xc = (rot(x[:3]) @ X.T).T + x[3:6]
    return np.stack([cx + f * Xc[:, 0] / Xc[:, 2], cy + f * Xc[:, 1] / Xc[:, 2]], 1), Xc[:, 2]


def pts(x):
    X = P3.copy()
    if FREE: X[FREE, 1] = x[6]
    return X


def solve(x, target):
    lam = 1e-3
    res = lambda x: (proj(x, pts(x))[0] - target).ravel()
    for _ in range(200):
        r0 = res(x); J = np.zeros((r0.size, x.size))
        for i in range(x.size):
            d = np.zeros_like(x); d[i] = 1e-6 * max(1, abs(x[i])); J[:, i] = (res(x + d) - r0) / d[i]
        A = J.T @ J; step = np.linalg.solve(A + lam * np.diag(np.diag(A) + 1e-9), -J.T @ r0)
        if (res(x + step) ** 2).sum() < (r0 ** 2).sum(): x = x + step; lam *= .3
        else: lam *= 10
    return x


cam = json.load(open(feats['camera']))
x0 = np.array(cam['rotvec'] + cam['translation'] + ([cam['loaded_radius_m']] if FREE else []), float)
x0 = solve(x0, p2)

# Model features (website coordinates: x left, y up, z forward).
STOCK = {'BodyShell', 'RoofShell', 'OEMGrille', 'StockBumper', 'StockHeadlamps', 'StockWheels', 'SpareWheel'}
for o in list(bpy.data.objects): bpy.data.objects.remove(o, do_unlink=True)
bpy.ops.import_scene.gltf(filepath=model)


def verts(group, cond=lambda p: True):
    out = []
    for o in bpy.data.objects:
        top = o
        while top.parent: top = top.parent
        if o.type != 'MESH' or top.name != group: continue
        mw = o.matrix_world
        for v in o.data.vertices:
            b = mw @ v.co; p = (b.x, b.z, -b.y)
            if cond(p): out.append(p)
    return np.array(out)


def centre(a): return (a.min(0) + a.max(0)) / 2


lamps = verts('StockHeadlamps')
allstock = np.concatenate([verts(g) for g in STOCK if g != 'StockWheels'])
roof = verts('RoofShell')
upper = allstock[allstock[:, 1] > 0.95]
model_pts = {
    'headlamp_left': centre(lamps[lamps[:, 0] > 0]), 'headlamp_right': centre(lamps[lamps[:, 0] < 0]),
    'grille_badge': centre(verts('OEMGrille', lambda p: abs(p[0]) < .09)),
    'mirror_tip_left': upper[upper[:, 0].argmax()], 'mirror_tip_right': upper[upper[:, 0].argmin()],
    'roof_front_left': roof[np.lexsort((-roof[:, 1], -(roof[:, 2] + .3 * roof[:, 0])))[0]],
    'roof_front_right': roof[np.lexsort((-roof[:, 1], -(roof[:, 2] - .3 * roof[:, 0])))[0]],
    'spare_centre': centre(verts('SpareWheel')),
    'rear_lamp_left': centre(verts('BodyShell', lambda p: p[2] < -1.7 and p[0] > .45 and .45 < p[1] < .75)),
    'rear_lamp_right': centre(verts('BodyShell', lambda p: p[2] < -1.7 and p[0] < -.45 and .45 < p[1] < .75)),
    'roof_rear_left': roof[np.lexsort((-roof[:, 1], (roof[:, 2] - .3 * roof[:, 0])))[0]],
    'roof_rear_right': roof[np.lexsort((-roof[:, 1], (roof[:, 2] + .3 * roof[:, 0])))[0]],
}
model_pts = {k: v for k, v in model_pts.items() if k in feats['points']}

rng = np.random.default_rng(4)
samples = {k: [] for k in feats['points']}
for _ in range(40):
    xj = solve(x0.copy(), p2 + rng.normal(0, 8, p2.shape))
    for k in feats['points']:
        samples[k].append(proj(xj, model_pts[k][None])[0][0])

report = {}
for k, picked in feats['points'].items():
    uv, depth = proj(x0, model_pts[k][None]); uv = uv[0]; depth = depth[0]
    mm = 1000 * depth / f
    spread = np.std(np.array(samples[k]), 0)
    d = uv - np.array(picked)
    report[k] = {'model_xyz_mm': [round(v * 1000) for v in model_pts[k]], 'image_offset_px': [round(v, 1) for v in d],
                 'offset_mm': {'horizontal': round(d[0] * mm), 'vertical_up': round(-d[1] * mm)},
                 'camera_uncertainty_mm': {'horizontal': round(spread[0] * mm), 'vertical': round(spread[1] * mm)}}
json.dump(report, open(out, 'w'), indent=1)
print('FEATURES', json.dumps(report))
