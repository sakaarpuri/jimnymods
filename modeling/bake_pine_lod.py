"""Asset-only CC0 pine study: original-tree impostor views + a near mesh.
No game integration. Source is pinned by prepare-pine-model-source.mjs.
"""
import bpy, math, os, json
from mathutils import Vector
SOURCE='/tmp/polyhaven-pine-source'
OUT='/tmp/polyhaven-pine-atlas'
os.makedirs(OUT,exist_ok=True)
bpy.ops.wm.open_mainfile(filepath=SOURCE+'/pine_tree_01_1k.blend',load_ui=False,use_scripts=False)
tree=bpy.data.objects['pine_tree_01_b_LOD2']
for obj in list(bpy.data.objects):
    if obj!=tree:bpy.data.objects.remove(obj,do_unlink=True)
for collection in list(tree.users_collection):collection.objects.unlink(tree)
bpy.context.scene.collection.objects.link(tree)
tree.hide_set(False);tree.hide_render=False;tree.location=(0,0,.0867645442)

def material(name,family,alpha=False):
    mat=bpy.data.materials.new(name);mat.use_nodes=True
    nodes=mat.node_tree.nodes;links=mat.node_tree.links;nodes.clear()
    output=nodes.new('ShaderNodeOutputMaterial')
    texture=nodes.new('ShaderNodeTexImage')
    texture.image=bpy.data.images.load(SOURCE+'/textures/pine_tree_01_'+family+'_diff_1k.png',check_existing=True)
    texture.image.colorspace_settings.name='sRGB'
    emission=nodes.new('ShaderNodeEmission')
    # Local occlusion supplies crown depth without a frozen directional sun.
    ao=nodes.new('ShaderNodeAmbientOcclusion');ao.inputs['Distance'].default_value=.65
    mix=nodes.new('ShaderNodeMixRGB');mix.blend_type='MULTIPLY';mix.inputs[0].default_value=.40
    links.new(texture.outputs['Color'],mix.inputs[1]);links.new(ao.outputs['Color'],mix.inputs[2]);links.new(mix.outputs[0],emission.inputs['Color'])
    if alpha:
        a=nodes.new('ShaderNodeTexImage');a.image=bpy.data.images.load(SOURCE+'/textures/pine_tree_01_twig_alpha_1k.png',check_existing=True)
        a.image.colorspace_settings.name='Non-Color'
        transparent=nodes.new('ShaderNodeBsdfTransparent');shader=nodes.new('ShaderNodeMixShader')
        links.new(a.outputs['Color'],shader.inputs[0]);links.new(transparent.outputs[0],shader.inputs[1]);links.new(emission.outputs[0],shader.inputs[2]);links.new(shader.outputs[0],output.inputs[0])
    else:links.new(emission.outputs[0],output.inputs[0])
    return mat

families=[('Pine bark','bark',False),('Pine trunk','trunk_b',False),('Pine needles','twig',True),('Pine dry branches','twig',True)]
for index,args in enumerate(families):tree.data.materials[index]=material(*args)
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=16;scene.cycles.use_denoising=True
scene.cycles.transparent_max_bounces=16
scene.render.resolution_x=512;scene.render.resolution_y=1024;scene.render.resolution_percentage=100
scene.render.film_transparent=True;scene.render.image_settings.file_format='PNG';scene.render.image_settings.color_mode='RGBA'
scene.view_settings.view_transform='Standard';scene.view_settings.look='None';scene.view_settings.exposure=0;scene.view_settings.gamma=1
bpy.ops.object.camera_add();camera=bpy.context.object;camera.data.type='ORTHO';camera.data.ortho_scale=16.3;scene.camera=camera
views=[]
for i in range(8):
    azimuth=i*math.tau/8
    # Horizontal ortho views suit far trees viewed from the drivable landscape.
    camera.location=(25*math.sin(azimuth),-25*math.cos(azimuth),7.65)
    camera.rotation_euler=(Vector((0,0,7.65))-camera.location).to_track_quat('-Z','Y').to_euler()
    path=OUT+'/view-%02d.png'%i;scene.render.filepath=path
    bpy.ops.render.render(write_still=True)
    views.append({'index':i,'azimuthDegrees':i*45,'file':path})
    print('ATLAS_VIEW '+str(i),flush=True)

# Matching object-space normals let distant impostors retain volume under the
# live sun instead of behaving like a single dark, camera-facing sheet.
for index,(_,_,alpha) in enumerate(families):
    mat=tree.data.materials[index];nodes=mat.node_tree.nodes;links=mat.node_tree.links
    emission=next(node for node in nodes if node.type=='EMISSION')
    geometry=nodes.new('ShaderNodeNewGeometry');split=nodes.new('ShaderNodeSeparateXYZ');links.new(geometry.outputs['Normal'],split.inputs[0])
    combine=nodes.new('ShaderNodeCombineXYZ')
    for target,source,scale in [('X','X',.5),('Y','Z',.5),('Z','Y',-.5)]:
        remap=nodes.new('ShaderNodeMath');remap.operation='MULTIPLY_ADD';remap.inputs[1].default_value=scale;remap.inputs[2].default_value=.5
        links.new(split.outputs[source],remap.inputs[0]);links.new(remap.outputs[0],combine.inputs[target])
    links.new(combine.outputs[0],emission.inputs['Color'])
scene.view_settings.view_transform='Raw'
scene.cycles.use_denoising=False
for i in range(8):
    azimuth=i*math.tau/8;camera.location=(25*math.sin(azimuth),-25*math.cos(azimuth),7.65)
    camera.rotation_euler=(Vector((0,0,7.65))-camera.location).to_track_quat('-Z','Y').to_euler()
    scene.render.filepath=OUT+'/normal-%02d.png'%i;bpy.ops.render.render(write_still=True)
    print('ATLAS_NORMAL '+str(i),flush=True)

# Preserve the high-resolution source in the atlas; near mesh remains a separate
# experiment. Restore PBR material graphs before decimating/exporting.
for index,(name,family,alpha) in enumerate(families):
    mat=tree.data.materials[index];nodes=mat.node_tree.nodes;links=mat.node_tree.links;nodes.clear()
    output=nodes.new('ShaderNodeOutputMaterial');p=nodes.new('ShaderNodeBsdfPrincipled');p.inputs['Roughness'].default_value=.94
    tex=nodes.new('ShaderNodeTexImage');tex.image=bpy.data.images.load(SOURCE+'/textures/pine_tree_01_'+family+'_diff_1k.png',check_existing=True);tex.image.colorspace_settings.name='sRGB';links.new(tex.outputs['Color'],p.inputs['Base Color'])
    normal=nodes.new('ShaderNodeTexImage');normal.image=bpy.data.images.load(SOURCE+'/textures/pine_tree_01_'+family+'_nor_gl_1k.png',check_existing=True);normal.image.colorspace_settings.name='Non-Color'
    n=nodes.new('ShaderNodeNormalMap');n.inputs['Strength'].default_value=.65;links.new(normal.outputs['Color'],n.inputs['Color']);links.new(n.outputs['Normal'],p.inputs['Normal'])
    if alpha:
        a=nodes.new('ShaderNodeTexImage');a.image=bpy.data.images.load(SOURCE+'/textures/pine_tree_01_twig_alpha_1k.png',check_existing=True);a.image.colorspace_settings.name='Non-Color';links.new(a.outputs['Color'],p.inputs['Alpha']);mat.surface_render_method='DITHERED'
    links.new(p.outputs[0],output.inputs[0])
bpy.ops.object.select_all(action='DESELECT');tree.select_set(True);bpy.context.view_layer.objects.active=tree
bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.mesh.separate(type='MATERIAL');bpy.ops.object.mode_set(mode='OBJECT')
parts=list(bpy.context.selected_objects);stats=[]
budgets={'Pine bark':15000,'Pine trunk':2000,'Pine needles':35000,'Pine dry branches':250}
for obj in parts:
    bpy.context.view_layer.objects.active=obj;obj.data.calc_loop_triangles();before=len(obj.data.loop_triangles);name=obj.data.materials[0].name
    mod=obj.modifiers.new('Near-only study reduction','DECIMATE');mod.ratio=min(1,budgets[name]/before);mod.use_collapse_triangulate=True
    bpy.ops.object.modifier_apply(modifier=mod.name);obj.data.calc_loop_triangles();obj.name=name
    stats.append({'material':name,'before':before,'after':len(obj.data.loop_triangles)})
bpy.ops.export_scene.gltf(filepath=OUT+'/pine-tree-b-near.glb',export_format='GLB',use_selection=True,export_apply=True,export_image_format='AUTO',export_materials='EXPORT')
with open(OUT+'/bake.json','w')as f:json.dump({'views':views,'tile':[512,1024],'orthoHeight':16.3,'treeHeight':14.880114,'treeGroundOffset':.0867645442,'cameraTargetHeight':7.65,'nearParts':stats,'lighting':'diffuse + 40% local ambient occlusion, no directional light'},f,indent=2)
print('PINE_STUDY_COMPLETE',flush=True)
