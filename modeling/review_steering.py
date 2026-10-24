"""Render the actual saved cabin steering assembly, without changing the master.

Blender --background modeling/jimny-lwb.blend --python modeling/review_steering.py
"""
import bpy, math
from mathutils import Vector

wheel_objects=[]
for obj in list(bpy.context.scene.objects):
    obj.hide_render=True
    if obj.type!='MESH' or obj.parent is None or obj.parent.name!='Cabin':continue
    obj.data.calc_loop_triangles();vertices=[];faces=[]
    for tri in obj.data.loop_triangles:
        points=[obj.matrix_world@obj.data.vertices[i].co for i in tri.vertices]
        centre=sum(points,Vector())/3
        if math.hypot(centre.x+.38,centre.z-1.16)<.182 and .218 < -centre.y < .282:
            start=len(vertices);vertices.extend(points);faces.append((start,start+1,start+2))
    if not faces:continue
    mesh=bpy.data.meshes.new('Review steering');mesh.from_pydata(vertices,[],faces);mesh.update()
    copy=bpy.data.objects.new('Actual wheel '+obj.name,mesh);bpy.context.collection.objects.link(copy)
    copy.data.materials.append(obj.data.materials[0]);wheel_objects.append(copy)
    for p in mesh.polygons:p.use_smooth=True
for obj in bpy.context.scene.objects:
    if obj.type=='LIGHT':obj.hide_render=False
camera=bpy.context.scene.camera;camera.hide_render=False
camera.location=(-.38,.39,1.20);target=Vector((-.38,-.25,1.16))
camera.rotation_euler=(target-camera.location).to_track_quat('-Z','Y').to_euler();camera.data.lens=48
scene=bpy.context.scene;scene.render.resolution_x=800;scene.render.resolution_y=800;scene.render.resolution_percentage=100
scene.render.film_transparent=False;scene.cycles.samples=32
scene.render.filepath='/tmp/jimny-steering-authored-review.png';bpy.ops.render.render(write_still=True)
