"""Build an editable, approximate looped Suzuki script mesh for the preview.

The letterforms use Allura (SIL OFL 1.1; see modeling/fonts/LICENSE-Allura.txt).
The result is a stylised representation, not a scan or exact supplier badge.
"""
import bpy
import math
import os

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
curve = bpy.data.curves.new('Classic looped Suzuki lettering', 'FONT')
curve.body = 'Suzuki'
curve.font = bpy.data.fonts.load(os.path.join(root, 'modeling/fonts/Allura-Regular.ttf'))
curve.align_x = 'CENTER'
curve.align_y = 'CENTER'
curve.size = 1
curve.extrude = .025
curve.bevel_depth = .004
curve.bevel_resolution = 2
curve.resolution_u = 8
obj = bpy.data.objects.new('Classic looped Suzuki lettering', curve)
bpy.context.collection.objects.link(obj)
obj.rotation_euler.x = math.pi / 2
bpy.context.view_layer.objects.active = obj
obj.select_set(True)
bpy.ops.object.convert(target='MESH')
modifier = obj.modifiers.new('Lightweight preview lettering', 'DECIMATE')
modifier.ratio = .18
bpy.ops.object.modifier_apply(modifier=modifier.name)
bpy.ops.export_scene.gltf(filepath='/tmp/jimny-classic-looped-script.glb', export_format='GLB', use_selection=True, export_apply=True)
