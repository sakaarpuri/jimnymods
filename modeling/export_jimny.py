"""Re-export the saved editable project without dropping hidden alternatives.

Blender --background modeling/jimny-lwb.blend --python modeling/export_jimny.py
The native project is not modified or saved by this script.
"""
import bpy
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_STEM = 'jimny-swb' if bpy.data.objects.get('BodyShell', {}).get('body_style', '').startswith('3-door') or os.path.basename(bpy.data.filepath).startswith('jimny-swb') else 'jimny-lwb'
ASSEMBLIES = (
    'BodyShell', 'RoofShell', 'OEMGrille', 'BlockGrille', 'RhinoGrille',
    'ScriptGrille', 'GlossGrille', 'DeleteGrille', 'ClassicGrille', 'MeshGrille',
    'StockBumper', 'StockHeadlamps', 'StockWheels', 'AllTerrainWheels', 'Cabin', 'SpareWheel',
)
objects = []
for name in ASSEMBLIES:
    root = bpy.data.objects.get(name)
    if root is None:
        raise RuntimeError('Missing vehicle assembly: ' + name)
    objects.extend([root, *root.children_recursive])

previous = [(obj, obj.hide_viewport, obj.hide_render, obj.hide_get(), obj.select_get()) for obj in objects]
try:
    bpy.ops.object.select_all(action='DESELECT')
    for obj in objects:
        obj.hide_viewport = False
        obj.hide_render = False
        obj.hide_set(False)
        obj.select_set(True)
    # Hidden objects do not necessarily have evaluated transforms after opening
    # a .blend. Evaluate them BEFORE handing the scene to the glTF exporter.
    bpy.context.view_layer.update()
    bpy.ops.export_scene.gltf(
        filepath=os.path.join(ROOT, 'assets', 'models', MODEL_STEM+'-blender.glb'),
        export_format='GLB', export_yup=True, export_apply=True, export_extras=True,
        export_cameras=False, export_lights=False, use_selection=True,
        export_vertex_color='ACTIVE', export_all_vertex_colors=False,
        export_meshopt_compression_enable=True, export_meshopt_extension='EXT_meshopt_compression',
    )
finally:
    for obj, viewport, render, hidden, selected in previous:
        obj.hide_viewport = viewport
        obj.hide_render = render
        obj.hide_set(hidden)
        obj.select_set(selected)
