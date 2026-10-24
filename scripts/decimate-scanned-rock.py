"""Preserve photographic UV loops while welding/decimating the source scan."""
import bpy,bmesh,sys
args=sys.argv[sys.argv.index('--')+1:]
source,target=args
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
bpy.ops.import_scene.gltf(filepath=source)
meshes=[o for o in bpy.context.scene.objects if o.type=='MESH']
for obj in meshes:
    bpy.context.view_layer.objects.active=obj
    bm=bmesh.new();bm.from_mesh(obj.data)
    bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=.00001)
    bm.to_mesh(obj.data);bm.free();obj.data.update()
    triangles=sum(len(p.vertices)-2 for p in obj.data.polygons)
    mod=obj.modifiers.new('Web scanned-rock simplification','DECIMATE')
    mod.ratio=min(1,3000/max(1,triangles));mod.use_collapse_triangulate=True
    bpy.ops.object.modifier_apply(modifier=mod.name)
    for polygon in obj.data.polygons:polygon.use_smooth=True
bpy.ops.export_scene.gltf(filepath=target,export_format='GLB',export_yup=True,export_apply=True)
