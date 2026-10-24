"""Replace only the tailgate wordmark in either saved Blender master.

Run Blender --background modeling/jimny-lwb.blend --python this_file.py.
Preserves all other authored geometry, hidden alternatives and material data.
"""
import bpy
import bmesh
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
with open(os.path.join(ROOT, 'assets/models/jimny-wordmark.json')) as source:
    WORDMARK = json.load(source)
body = bpy.data.objects['BodyShell']
short = body.get('body_style', '').startswith('3-door') or 'swb' in bpy.data.filepath
offset = .17 if short else 0
removed = 0
existing = bpy.data.objects.get('JimnyTailgateWordmark')
bpy.context.view_layer.update()
for obj in list(body.children_recursive):
    if obj == existing:
        continue
    if obj.type != 'MESH' or not any(m and m.name == 'BrightChrome' for m in obj.data.materials):
        continue
    world = obj.matrix_world
    bm = bmesh.new()
    bm.from_mesh(obj.data)
    faces = []
    for face in bm.faces:
        points = [world @ vertex.co for vertex in face.verts]
        if all(-.655 < p.x < -.405 and .764 < p.z < .833 and -1.815 < -p.y-offset < -1.811 for p in points):
            faces.append(face)
    if faces:
        removed += len(faces)
        bmesh.ops.delete(bm, geom=faces, context='FACES')
        bmesh.ops.delete(bm, geom=[v for v in bm.verts if not v.link_faces], context='VERTS')
        bm.to_mesh(obj.data)
    bm.free()
if not removed and not existing:
    raise RuntimeError('No existing Jimny badge faces found; preserve the source and inspect the bounds.')
if existing:
    bpy.data.objects.remove(existing, do_unlink=True)

# Back-facing X reversal and SVG Y inversion retain the official proportions.
scale = .184 / WORDMARK['width']
vertices, faces = [], []
for polygon in WORDMARK['polygons']:
    start, count = len(vertices), len(polygon)
    for depth in [0, .0015]:
        for x, y in polygon:
            vertices.append((-.53-(x-WORDMARK['width']/2)*scale, 1.8122-offset+depth, .826-y*scale))
    faces.extend([tuple(start+i for i in reversed(range(count))), tuple(start+count+i for i in range(count))])
    faces.extend((start+i,start+(i+1)%count,start+(i+1)%count+count,start+i+count) for i in range(count))
mesh = bpy.data.meshes.new('Suzuki Jimny official wordmark geometry')
mesh.from_pydata(vertices, [], faces)
mesh.materials.append(bpy.data.materials['BrightChrome'])
bm = bmesh.new(); bm.from_mesh(mesh); bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces)); bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new('JimnyTailgateWordmark', mesh)
bpy.context.collection.objects.link(obj); obj.parent = body
obj['source_url'] = WORDMARK['source']; obj['badge_width_m'] = .184
bevel = obj.modifiers.new('Fine raised emblem edges', 'BEVEL'); bevel.width = .00012; bevel.segments = 2
bevel.affect = 'EDGES'
bpy.context.view_layer.update()
bpy.ops.wm.save_as_mainfile(filepath=bpy.data.filepath)
print('Updated official-outline badge; removed', removed, 'old faces', flush=True)
exec(compile(open(os.path.join(ROOT, 'modeling/export_jimny.py')).read(), 'export_jimny.py', 'exec'))
