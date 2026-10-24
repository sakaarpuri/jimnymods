"""Prepare an experimental web LOD from the pinned CC0 Poly Haven master.
Run only after scripts/prepare-pine-model-source.mjs --textures.
Does not change game renderer or existing vegetation assets.
"""
import bpy,json,os,math
from mathutils import Vector
SOURCE='/tmp/polyhaven-pine-source'
OUT='/tmp/polyhaven-pine-prepared'
os.makedirs(OUT,exist_ok=True)
bpy.ops.wm.open_mainfile(filepath=SOURCE+'/pine_tree_01_1k.blend',load_ui=False,use_scripts=False)
tree=bpy.data.objects['pine_tree_01_b_LOD2']
for o in list(bpy.data.objects):
 if o!=tree:bpy.data.objects.remove(o,do_unlink=True)
# Re-link into the visible root, independent of the source LOD collection hides.
for c in list(tree.users_collection):c.objects.unlink(tree)
bpy.context.scene.collection.objects.link(tree)
tree.hide_set(False);tree.hide_render=False;tree.location=(0,0,.0867645442)

def material(name,family,alpha=False):
 m=bpy.data.materials.new(name);m.use_nodes=True
 n=m.node_tree.nodes;l=m.node_tree.links;p=n.get('Principled BSDF')
 p.inputs['Roughness'].default_value=.94;p.inputs['Metallic'].default_value=0
 image=bpy.data.images.load(SOURCE+'/textures/pine_tree_01_'+family+'_diff_1k.png',check_existing=True)
 image.colorspace_settings.name='sRGB';tex=n.new('ShaderNodeTexImage');tex.image=image;l.new(tex.outputs['Color'],p.inputs['Base Color'])
 norm=n.new('ShaderNodeTexImage');norm.image=bpy.data.images.load(SOURCE+'/textures/pine_tree_01_'+family+'_nor_gl_1k.png',check_existing=True);norm.image.colorspace_settings.name='Non-Color'
 normal=n.new('ShaderNodeNormalMap');normal.inputs['Strength'].default_value=.65;l.new(norm.outputs['Color'],normal.inputs['Color']);l.new(normal.outputs['Normal'],p.inputs['Normal'])
 if alpha:
  a=n.new('ShaderNodeTexImage');a.image=bpy.data.images.load(SOURCE+'/textures/pine_tree_01_twig_alpha_1k.png',check_existing=True);a.image.colorspace_settings.name='Non-Color';l.new(a.outputs['Color'],p.inputs['Alpha'])
  m.surface_render_method='DITHERED'
 m.use_backface_culling=False
 return m
materials=[material('Pine bark','bark'),material('Pine trunk','trunk_b'),material('Pine needles','twig',True),material('Pine dry branches','twig',True)]
for i,m in enumerate(materials):tree.data.materials[i]=m
reference=tree.copy();reference.data=tree.data.copy();reference.name='Original source LOD2';bpy.context.scene.collection.objects.link(reference)
bpy.ops.object.select_all(action='DESELECT');tree.select_set(True);bpy.context.view_layer.objects.active=tree
bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.mesh.separate(type='MATERIAL');bpy.ops.object.mode_set(mode='OBJECT')
parts=list(bpy.context.selected_objects);stats=[]
budgets={'Pine bark':15000,'Pine trunk':1100,'Pine needles':11000,'Pine dry branches':100}
for o in parts:
 bpy.context.view_layer.objects.active=o;o.data.calc_loop_triangles();before=len(o.data.loop_triangles);name=o.data.materials[0].name
 mod=o.modifiers.new('Web LOD reduction','DECIMATE');mod.ratio=min(1,budgets[name]/before);mod.use_collapse_triangulate=True
 bpy.ops.object.modifier_apply(modifier=mod.name);o.data.calc_loop_triangles();stats.append({'material':name,'before':before,'after':len(o.data.loop_triangles)})
 o.name=name
# Actual source and reduced geometry side-by-side, same materials and lighting.
reference.location.x=-5
for o in parts:o.location.x=5
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=16;scene.cycles.use_denoising=True
scene.render.resolution_x=1280;scene.render.resolution_y=850;scene.render.resolution_percentage=100
scene.world=bpy.data.worlds.new('Pine review world');scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs['Color'].default_value=(.32,.36,.40,1);scene.world.node_tree.nodes['Background'].inputs['Strength'].default_value=.7
bpy.ops.object.light_add(type='AREA',location=(2,-8,17));light=bpy.context.object;light.data.energy=2200;light.data.shape='DISK';light.data.size=10;light.rotation_euler=(Vector((0,0,7))-light.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(12,-34,13));camera=bpy.context.object;camera.data.type='ORTHO';camera.data.ortho_scale=23;camera.rotation_euler=(Vector((0,0,7.5))-camera.location).to_track_quat('-Z','Y').to_euler();scene.camera=camera
scene.view_settings.view_transform='AgX';scene.render.image_settings.file_format='PNG';scene.render.filepath=OUT+'/source-versus-web-lod.png'
print('LOD_STATS '+json.dumps(stats),flush=True)
bpy.ops.render.render(write_still=True)
for o in parts:o.location.x=0
bpy.ops.object.select_all(action='DESELECT')
for o in parts:o.select_set(True)
bpy.context.view_layer.objects.active=parts[0]
bpy.ops.export_scene.gltf(filepath=OUT+'/pine-tree-b-web.glb',export_format='GLB',use_selection=True,export_apply=True,export_image_format='AUTO',export_materials='EXPORT')
with open(OUT+'/stats.json','w') as f:json.dump({'source':'pine_tree_01_b_LOD2','materials':stats,'triangles':sum(s['after']for s in stats)},f,indent=2)
