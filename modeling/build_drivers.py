"""CC0 MakeHuman-derived seated drivers. No MakeHuman application is installed.

Blender --background --python modeling/build_drivers.py
The vendored assets are pinned and documented in DRIVER_SOURCES.md.
"""
import bpy, bmesh, json, math, os
from mathutils import Vector, Matrix

ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA=os.path.join(ROOT,'modeling','vendor','makehuman')
OUT=os.path.join(ROOT,'assets','models','drivers')
os.makedirs(OUT,exist_ok=True)

def material(name,color,roughness=.8):
    m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
    p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Roughness'].default_value=roughness
    return m

def read_obj():
    verts=[];uv=[];faces=[];group=''
    for line in open(os.path.join(DATA,'base.obj')):
        p=line.split()
        if not p:continue
        if p[0]=='v':verts.append(Vector(tuple(map(float,p[1:4]))))
        elif p[0]=='vt':uv.append(tuple(map(float,p[1:3])))
        elif p[0]=='g':group=p[1]
        elif p[0]=='f':
            bits=[x.split('/') for x in p[1:]]
            faces.append((group,[int(x[0])-1 for x in bits],[int(x[1])-1 for x in bits]))
    return verts,uv,faces

def build(kind):
    bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
    verts,uv,allfaces=read_obj()
    for line in open(os.path.join(DATA,'female.target' if kind=='woman' else 'male.target')):
        p=line.split()
        if p and not p[0].startswith('#'):verts[int(p[0])]+=Vector(tuple(map(float,p[1:4])))
    # MH uses decimetre-scale Y-up coordinates. Preserve anatomy, convert to
    # Blender Z-up and use a compact adult stature suitable for this cabin.
    body_ids={i for g,f,t in allfaces if g=='body' for i in f}
    height=max(verts[i].y for i in body_ids)-min(verts[i].y for i in body_ids)
    scale=(1.60 if kind=='man' else 1.58)/height
    verts=[Vector((p.x,-p.z,p.y))*scale for p in verts]
    spec=json.load(open(os.path.join(DATA,'default.mhskel')))
    weights=json.load(open(os.path.join(DATA,'default_weights.mhw')))['weights']
    def joint(key):return sum((verts[i] for i in spec['joints'][key]),Vector())/len(spec['joints'][key])
    joints={n:(joint(v['head']),joint(v['tail'])) for n,v in spec['bones'].items()}
    skin=material('DriverSkin',(1,1,1),.67)
    # Vertex colour survives glTF and supplies low-frequency skin variation;
    # pores/weave are added at runtime without external texture dependencies.
    color_node=skin.node_tree.nodes.new('ShaderNodeVertexColor');color_node.layer_name='SkinTone'
    skin.node_tree.links.new(color_node.outputs['Color'],skin.node_tree.nodes.get('Principled BSDF').inputs['Base Color'])
    shirt=material('DriverCotton',(.22,.235,.24) if kind=='man' else (.25,.205,.17),.91)
    pants=material('DriverDenim',(.045,.075,.105),.95)
    shoes=material('DriverShoes',(.026,.030,.034),.86)
    hair=material('DriverHair',(.025,.018,.014),.82)
    eye=material('DriverEye',(.58,.56,.51),.24);iris=material('DriverIris',(.055,.026,.011),.33)
    pupil=material('DriverPupil',(.004,.003,.002),.18)
    # Original clothing treatment on the anatomical base: loose long sleeves,
    # trousers and shoes, with a separately offset shell and cuff seams.
    skin_faces=[];head_faces=[];shirt_faces=[];pants_faces=[];shoe_faces=[]
    # The tights helper extends up the neck. Trim it into a crew neckline;
    # leaving the whole helper made a stiff collar rise almost to the jaw.
    neck_level=joints['neck01'][0].z+.004
    waist_level=joints['spine05'][1].z+.015
    wrists=[joints['wrist.'+s][0] for s in ['L','R']]
    ankle_level=sum(joints['foot.'+s][0].z for s in ['L','R'])/2+.025
    hand_weights={}
    for bone,entries in weights.items():
        if bone.startswith(('wrist.','finger','metacarpal')):
            for i,w in entries:hand_weights[i]=hand_weights.get(i,0)+w
    for group,face,t in allfaces:
        if group not in ['body','helper-tights']:continue
        center=sum((verts[i] for i in face),Vector())/len(face)
        data=(face,t)
        # Skin of hands is defined by the original rig's wrist/finger weights,
        # avoiding horizontal bands through an anatomically bent forearm.
        hand_weight=sum(hand_weights.get(i,0) for i in face)/len(face)
        if group=='body':
            # Extend the hidden upper-chest skin underneath the open crew neck
            # so small gaps around its curved boundary do not reveal empty space.
            if center.z>neck_level-.055:head_faces.append(data)
            elif hand_weight>.35:skin_faces.append(data)
        elif center.z<ankle_level:shoe_faces.append(data)
        elif center.z<waist_level:pants_faces.append(data)
        elif center.z<neck_level:shirt_faces.append(data)
    rig_data=bpy.data.armatures.new('MakeHumanDriverRig');rig=bpy.data.objects.new('DriverRig',rig_data);bpy.context.collection.objects.link(rig)
    bpy.context.view_layer.objects.active=rig;rig.select_set(True);bpy.ops.object.mode_set(mode='EDIT')
    for name,(head,tail) in joints.items():
        b=rig_data.edit_bones.new(name);b.head=head;b.tail=tail
        if (tail-head).length<.0001:b.tail.z+=.001
    for name,data in spec['bones'].items():
        if data.get('parent'):rig_data.edit_bones[name].parent=rig_data.edit_bones[data['parent']]
    bpy.ops.object.mode_set(mode='OBJECT')
    rig['asset_source']='MakeHuman CC0, a8bc2d54ff0ac92e78ff71431b1023eda42bf482'
    meshes=[]
    def mesh_part(name,items,mat,inflate=0):
        ids=sorted({i for f,t in items for i in f});mapping={old:i for i,old in enumerate(ids)}
        me=bpy.data.meshes.new(name);me.from_pydata([verts[i] for i in ids],[],[[mapping[i] for i in f] for f,t in items]);me.update()
        ob=bpy.data.objects.new(name,me);bpy.context.collection.objects.link(ob);me.materials.append(mat)
        layer=me.uv_layers.new(name='UVMap')
        for poly,(_,tex) in zip(me.polygons,items):
            poly.use_smooth=True
            for loop,tid in zip(poly.loop_indices,tex):layer.data[loop].uv=uv[tid]
        if mat==skin:
            colors=me.color_attributes.new(name='SkinTone',type='FLOAT_COLOR',domain='POINT')
            eye_z=sum(joints['eye.'+s][0].z for s in ['L','R'])/2
            eye_y=sum(joints['eye.'+s][0].y for s in ['L','R'])/2
            for v,col in zip(me.vertices,colors.data):
                x,y,z=v.co;front=max(0,min(1,(eye_y+.025-y)/.025))
                noise=(math.sin(x*181+y*113+z*157)+.45*math.sin(x*503-y*317+z*431))*.014
                base=Vector((.285,.151,.101) if kind=='man' else (.33,.18,.125))*(1+noise)
                # Broad rosy cheeks/ears and lip pigment, not painted facial features.
                if name=='DriverHead':
                    cheek=math.exp(-((abs(x)-.038)/.022)**2-((z-eye_z+.027)/.024)**2)*front
                    lips=math.exp(-(x/.022)**6-((z-eye_z+.061)/.0065)**2)*front
                    brow=math.exp(-((abs(x)-.031)/.019)**4-((z-eye_z-.015)/.0045)**2)*front
                    base=base.lerp(Vector((.36,.135,.105)),cheek*.35)
                    base=base.lerp(Vector((.22,.075,.055)),lips*.65)
                    base=base.lerp(Vector((.055,.028,.018)),brow*.8)
                else:
                    # Dorsal tendons / knuckles catch subtly warmer light.
                    tone=.035*math.sin(z*94+x*41)*math.sin(y*120)
                    base+=Vector((tone,tone*.46,tone*.28))
                col.color=(*base,1)
        if inflate:
            for v in me.vertices:v.co+=v.normal*inflate
        for bone,entries in weights.items():
            relevant=[(mapping[i],w) for i,w in entries if i in mapping and w>.0001]
            if relevant:
                group=ob.vertex_groups.new(name=bone)
                for i,w in relevant:group.add([i],w,'REPLACE')
        if name in ['DriverShirt','DriverSleeves','DriverTrousers','DriverFootwear','DriverHair']:
            bpy.context.view_layer.objects.active=ob
            smooth=ob.modifiers.new('Garment surface relaxation','SMOOTH');smooth.factor=.65;smooth.iterations=3
            bpy.ops.object.modifier_apply(modifier=smooth.name)
            subdiv=ob.modifiers.new('Soft garment surface','SUBSURF');subdiv.levels=1
            bpy.ops.object.modifier_apply(modifier=subdiv.name)
            # Shallow authored wrinkles around joints break the inflated helper
            # silhouette. Keep fingers/rig lengths untouched for steering IK.
            if name in ['DriverShirt','DriverSleeves','DriverTrousers']:
                me=ob.data
                centers=[joints[n+s][0] for s in ['L','R'] for n in (['lowerarm01.','wrist.'] if name!='DriverTrousers' else ['lowerleg01.'])]
                for v in me.vertices:
                    proximity=max(math.exp(-((v.co-c).length/.072)**2) for c in centers)
                    wave=math.sin(v.co.z*205+v.co.x*32)*.0017*proximity
                    v.co+=v.normal*wave
            if name=='DriverHair':
                for v in ob.data.vertices:
                    v.co+=v.normal*(.0008+.00065*math.sin(v.co.x*190+v.co.y*84)*math.sin(v.co.z*137))
        modifier=ob.modifiers.new('MakeHuman skinning','ARMATURE');modifier.object=rig
        ob.parent=rig;meshes.append(ob);return ob
    mesh_part('DriverHead',head_faces,skin)
    mesh_part('DriverHands',skin_faces,skin)
    shirt_ob=mesh_part('DriverShirt',shirt_faces,shirt,.012)
    # Finish open garment boundaries with an actual weighted folded hem.
    # Cuffs and crew neck otherwise look like raw, hollow cut-off tubes.
    def garment_hem(ob):
        me=ob.data;edge_counts={}
        for poly in me.polygons:
            for a,b in poly.edge_keys:
                key=tuple(sorted((a,b)));edge_counts[key]=edge_counts.get(key,0)+1
        edges=[e for e,count in edge_counts.items() if count==1]
        boundary={i for e in edges for i in e}
        # Copy actual surface faces along the boundary. A separately extruded
        # strip twists at a concave crew neck and produces metallic-looking
        # triangular facets; following the surface retains smooth normals.
        selected=[p for p in me.polygons if sum(i in boundary for i in p.vertices)>=2]
        original=sorted({i for p in selected for i in p.vertices});lookup={old:i for i,old in enumerate(original)}
        points=[me.vertices[i].co+me.vertices[i].normal*.0007 for i in original]
        faces=[tuple(lookup[i] for i in p.vertices) for p in selected]
        name=ob.name+'Hem';mesh=bpy.data.meshes.new(name);mesh.from_pydata(points,[],faces);mesh.update()
        hem=bpy.data.objects.new(name,mesh);bpy.context.collection.objects.link(hem);hem.parent=rig
        trim=material('DriverCottonHem',(.16,.17,.175) if kind=='man' else (.20,.16,.125),.94);mesh.materials.append(trim)
        for p in mesh.polygons:p.use_smooth=True
        for group in ob.vertex_groups:
            target=hem.vertex_groups.new(name=group.name)
            for dest,source in enumerate(original):
                try:w=group.weight(source)
                except RuntimeError:continue
                if w>.0001:target.add([dest],w,'REPLACE')
        mod=hem.modifiers.new('Skinning','ARMATURE');mod.object=rig;meshes.append(hem);return hem
    shirt_hem=garment_hem(shirt_ob)
    # Split AFTER smoothing/subdivision. Independently smoothing torso and
    # sleeve helpers shrinks their boundary vertices and tears the shoulder.
    # Bone weights define the separation; full-body geometry remains seamless.
    def split_sleeves(ob,name):
        sleeve=ob.copy();sleeve.data=ob.data.copy();sleeve.name=name;bpy.context.collection.objects.link(sleeve);meshes.append(sleeve)
        arm_groups={g.index for g in ob.vertex_groups if g.name.startswith(('upperarm','lowerarm','wrist.'))}
        normals={tuple(v.co):v.normal.copy() for v in ob.data.vertices}
        for part,keep_arm in [(ob,False),(sleeve,True)]:
            bm=bmesh.new();bm.from_mesh(part.data);layer=bm.verts.layers.deform.active
            remove=[]
            for face in bm.faces:
                influence=sum(sum(w for group,w in v[layer].items() if group in arm_groups) for v in face.verts)/len(face.verts)
                if (influence>.4)!=keep_arm:remove.append(face)
            bmesh.ops.delete(bm,geom=remove,context='FACES_ONLY')
            bmesh.ops.delete(bm,geom=[v for v in bm.verts if not v.link_faces],context='VERTS')
            bm.to_mesh(part.data);bm.free();part.data.update()
            part.data.normals_split_custom_set_from_vertices([normals.get(tuple(v.co),v.normal) for v in part.data.vertices])
        return sleeve
    sleeve_ob=split_sleeves(shirt_ob,'DriverSleeves')
    split_sleeves(shirt_hem,'DriverSleevesHem')
    def sleeve_caps(ob):
        me=ob.data;counts={};adj={}
        for poly in me.polygons:
            for edge in poly.edge_keys:
                key=tuple(sorted(edge));counts[key]=counts.get(key,0)+1
        for (a,b),count in counts.items():
            if count==1:adj.setdefault(a,[]).append(b);adj.setdefault(b,[]).append(a)
        seen=set();loops=[]
        for start in adj:
            if start in seen:continue
            loop=[];current=start;previous=None
            while current not in seen:
                seen.add(current);loop.append(current)
                nexts=[n for n in adj[current] if n!=previous]
                if not nexts:break
                previous,current=current,nexts[0]
            if len(loop)>2:loops.append(loop)
        # T-pose upper sleeve loops are above the wrist openings. Only cap the
        # two proximal shoulder cuts, never the cuffs where hands emerge.
        loops=sorted(loops,key=lambda ids:sum(me.vertices[i].co.z for i in ids)/len(ids),reverse=True)[:2]
        points=[];faces=[];influences=[]
        for loop in loops:
            start=len(points);center=sum((me.vertices[i].co for i in loop),Vector())/len(loop)
            points.append(center);mean={}
            for i in loop:
                for g in me.vertices[i].groups:mean[g.group]=mean.get(g.group,0)+g.weight/len(loop)
            influences.append(mean)
            for i in loop:
                points.append(me.vertices[i].co.copy());influences.append({g.group:g.weight for g in me.vertices[i].groups})
            for j in range(len(loop)):faces.append((start,start+1+j,start+1+(j+1)%len(loop)))
        mesh=bpy.data.meshes.new('DriverSleeveCaps');mesh.from_pydata(points,[],faces);mesh.update()
        cap=bpy.data.objects.new('DriverSleeveCaps',mesh);bpy.context.collection.objects.link(cap);cap.parent=rig;mesh.materials.append(shirt)
        for p in mesh.polygons:p.use_smooth=True
        uv_layer=mesh.uv_layers.new(name='UVMap')
        for poly in mesh.polygons:
            for li in poly.loop_indices:
                v=mesh.vertices[mesh.loops[li].vertex_index].co;uv_layer.data[li].uv=(.84+v.x*.03,.03+v.y*.03)
        for group in ob.vertex_groups:
            target=cap.vertex_groups.new(name=group.name)
            for i,weights_by_group in enumerate(influences):
                w=weights_by_group.get(group.index,0)
                if w>.0001:target.add([i],w,'REPLACE')
        mod=cap.modifiers.new('Skinning','ARMATURE');mod.object=rig;meshes.append(cap)
    sleeve_caps(sleeve_ob)
    mesh_part('DriverTrousers',pants_faces,pants,.012)
    mesh_part('DriverFootwear',shoe_faces,shoes,.014)
    # Add real eye spheres; the face contains sculpted lids, nose, ears and lips.
    def sphere(name,at,size,mat,bone):
        bpy.ops.mesh.primitive_uv_sphere_add(segments=24,ring_count=12,radius=1,location=at)
        ob=bpy.context.object;ob.name=name;ob.scale=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
        ob.data.materials.append(mat)
        for p in ob.data.polygons:p.use_smooth=True
        g=ob.vertex_groups.new(name=bone);g.add(list(range(len(ob.data.vertices))),1,'REPLACE')
        mod=ob.modifiers.new('Skinning','ARMATURE');mod.object=rig;ob.parent=rig;meshes.append(ob)
        return ob
    for side in ['L','R']:
        c=joints['eye.'+side][0];sphere('DriverEye.'+side,c,(.012,.012,.012),eye,'head')
        sphere('DriverIris.'+side,c+Vector((0,-.011,0)),(.0052,.002,.0052),iris,'head')
        sphere('DriverPupil.'+side,c+Vector((0,-.0128,0)),(.0023,.00055,.0023),pupil,'head')
    # Scalp geometry derived from the base's head, not a spherical cap.
    scalp=[]
    eye_z=sum(joints['eye.'+s][0].z for s in ['L','R'])/2
    for f,t in head_faces:
        c=sum((verts[i] for i in f),Vector())/len(f)
        if c.z>eye_z+.05 or (c.y>joints['head'][0].y and c.z>eye_z-.055):scalp.append((f,t))
    mesh_part('DriverHair',scalp,hair,.006)
    # Pose original weighted skeleton. Preserve its bone names so the web
    # renderer can steer the arms instead of stretching rigid capsules.
    bpy.context.view_layer.update()
    hip=Vector((0,.120,.855))
    root_delta=hip-joints['root'][0]
    for pb in rig.pose.bones:pb.rotation_mode='QUATERNION'
    rig.pose.bones['root'].location=rig.data.bones['root'].matrix_local.to_3x3().inverted()@root_delta
    bpy.context.view_layer.update()
    def aim(name,direction):
        pb=rig.pose.bones[name];m=pb.matrix.copy();current=m.to_3x3()@Vector((0,1,0));q=current.rotation_difference(Vector(direction).normalized())
        m=Matrix.Translation(pb.head)@q.to_matrix().to_4x4()@Matrix.Translation(-pb.head)@m
        pb.matrix=m;bpy.context.view_layer.update()
    for side,s in [('L',1),('R',-1)]:
        for n in ['upperleg01.','upperleg02.']:aim(n+side,(s*.025,-.96,.20))
        for n in ['lowerleg01.','lowerleg02.']:aim(n+side,(0,-.91,-.41))
        # Toes angled toward the pedals: keeps shoes inside the firewall rather
        # than extending horizontally through it.
        aim('foot.'+side,(0,-.6,.8))
        # Lowered elbows and forward hands reach the Jimny wheel.
        for n in ['upperarm01.','upperarm02.']:aim(n+side,(s*.24,-.34,-.91))
        for n in ['lowerarm01.','lowerarm02.']:aim(n+side,(-s*.32,-.86,.40))
        # At 9/3 o'clock the rim tangent is vertical: palms face inward and
        # fingers curl in the horizontal plane around it, not down toward lap.
        aim('wrist.'+side,(-s*.88,-.45,-.16))
        for finger in range(2,6):
            for segment,direction in [(1,(-s*.65,-.75,0)),(2,(-s*.2,.98,0)),(3,(s*.8,.6,0))]:
                name=f'finger{finger}-{segment}.{side}'
                if name in rig.pose.bones:aim(name,direction)
        for segment,direction in [(1,(s*.15,-.2,.97)),(2,(-s*.2,-.8,.56)),(3,(-s*.4,.8,.4))]:
            name=f'finger1-{segment}.{side}'
            if name in rig.pose.bones:aim(name,direction)
    # Export the seated rig as its rest pose: no dependency on playing a clip
    # before the first frame. Subsequent steering uses these posed bone names.
    for ob in meshes:
        bpy.context.view_layer.objects.active=ob
        for mod in list(ob.modifiers):
            if mod.type=='ARMATURE':bpy.ops.object.modifier_apply(modifier=mod.name)
    bpy.context.view_layer.objects.active=rig;bpy.ops.object.mode_set(mode='POSE');bpy.ops.pose.armature_apply(selected=False);bpy.ops.object.mode_set(mode='OBJECT')
    for ob in meshes:
        mod=ob.modifiers.new('Seated driver skinning','ARMATURE');mod.object=rig
    bpy.ops.object.select_all(action='DESELECT');rig.select_set(True)
    for ob in meshes:ob.select_set(True)
    bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,kind+'.glb'),export_format='GLB',use_selection=True,export_yup=True,export_animations=False,export_extras=True)
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'modeling','driver-'+kind+'.blend'),compress=True)
    # Actual authored-geometry render, not an AI concept image.
    world=bpy.data.worlds.new('DriverReview');bpy.context.scene.world=world;world.use_nodes=True;world.node_tree.nodes['Background'].inputs[0].default_value=(.65,.68,.7,1)
    for at,power,size in [((2,-3,3),700,3),((-2,-1,2),450,2)]:
        bpy.ops.object.light_add(type='AREA',location=at);bpy.context.object.data.energy=power;bpy.context.object.data.shape='DISK';bpy.context.object.data.size=size
        bpy.context.object.rotation_euler=(Vector((0,0,1.1))-bpy.context.object.location).to_track_quat('-Z','Y').to_euler()
    bpy.ops.object.camera_add(location=(2.2,-3.0,1.75));cam=bpy.context.object;cam.rotation_euler=(Vector((0,-.1,1.1))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=1.6
    scene=bpy.context.scene;scene.camera=cam;scene.render.engine='CYCLES';scene.cycles.samples=24;scene.render.resolution_x=800;scene.render.resolution_y=900;scene.render.resolution_percentage=100;scene.render.image_settings.file_format='PNG';scene.render.filepath='/tmp/driver-'+kind+'-review.png';bpy.ops.render.render(write_still=True)
    print('DRIVER',kind,os.path.getsize(os.path.join(OUT,kind+'.glb')))

if __name__=='__main__':
    for kind in ['man','woman']:build(kind)
