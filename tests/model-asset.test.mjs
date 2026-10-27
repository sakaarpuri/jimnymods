import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { zstdDecompressSync } from 'node:zlib';
import { Box3, Vector3, Raycaster, DoubleSide } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

const binary=readFileSync(new URL('../assets/models/jimny-lwb-blender.glb',import.meta.url));
const asset=JSON.parse(binary.subarray(20,20+binary.readUInt32LE(12)).toString('utf8'));
const assemblies=['BodyShell','RoofShell','OEMGrille','BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille','StockBumper','StockWheels','AllTerrainWheels','Cabin','SpareWheel'];

test('web model is a valid compressed glTF binary within its mobile transfer budget',()=>{
  assert.equal(binary.toString('ascii',0,4),'glTF');
  assert.equal(binary.readUInt32LE(4),2);
  assert.equal(binary.readUInt32LE(8),binary.length);
  assert.ok(asset.extensionsRequired.includes('EXT_meshopt_compression'));
  // The explicitly profiled wheel lips/barrels and split hard-surface normals
  // add ~156 KB versus the former rounded castings. Retain these visible
  // details plus the rebuilt cabin/optics within a 3.30 MB ceiling. The detail
  // pass is still compressed and batched; no photographic textures are added.
  assert.ok(binary.length<3_300_000,`Model grew to ${binary.length} bytes`);
});

test('every live configurator assembly is exported separately with geometry',()=>{
  assert.ok(asset.nodes.some(node=>node.name==='StockHeadlamps'),'Replacement lamps need independently removable factory lamps');
  for(const name of assemblies){const node=asset.nodes.find(node=>node.name===name);assert.ok(node,`Missing assembly: ${name}`);assert.ok(node.children?.length,`Empty assembly: ${name}`);}
  assert.ok(asset.meshes.length<100,'Material batching regressed');
});

test('all grille badges stay within the grille face, including cursive lettering',async()=>{
  const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(binary.buffer.slice(binary.byteOffset,binary.byteOffset+binary.byteLength),'');
  gltf.scene.updateMatrixWorld(true);
  for(const name of assemblies.filter(n=>n.endsWith('Grille'))){
    const bounds=new Box3().setFromObject(gltf.scene.getObjectByName(name));
    assert.ok(bounds.min.y>.77&&bounds.max.y<1.065&&bounds.max.y-bounds.min.y<.30,`${name} has stretched or misplaced badge geometry (${bounds.min.y}–${bounds.max.y})`);
  }
});

test('headlamp housings retain the corrected 221 mm diameter',async()=>{
  const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(binary.buffer.slice(binary.byteOffset,binary.byteOffset+binary.byteLength),'');
  gltf.scene.updateMatrixWorld(true);
  const b=new Box3().setFromObject(gltf.scene.getObjectByName('StockHeadlamps'));
  assert.ok(b.max.y-b.min.y>.215&&b.max.y-b.min.y<.228,`Lamp diameter drifted to ${b.max.y-b.min.y}`);
});

test('windscreen rake and rear glazing height survive model compression',async()=>{
  const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(binary.buffer.slice(binary.byteOffset,binary.byteOffset+binary.byteLength),'');
  gltf.scene.updateMatrixWorld(true);const front=[],rear=[],v=new Vector3();
  gltf.scene.getObjectByName('BodyShell').traverse(obj=>{
    if(!obj.isMesh||obj.material.name!=='WindowGlass')return;
    const p=obj.geometry.attributes.position;
    for(let i=0;i<p.count;i++){
      v.fromBufferAttribute(p,i).applyMatrix4(obj.matrixWorld);
      if(Math.abs(v.x)<.69&&v.z>.45&&v.z<.9&&v.y>1.15)front.push(v.clone());
      if(v.z<-1.65&&Math.abs(v.x)<.65&&v.y>1.10)rear.push(v.clone());
    }
  });
  assert.ok(front.length>10&&rear.length>10);
  const top=front.reduce((a,b)=>a.y>b.y?a:b),bottom=front.reduce((a,b)=>a.y<b.y?a:b);
  const lean=(bottom.z-top.z)/(top.y-bottom.y);
  assert.ok(lean>.38&&lean<.52,`Windscreen rake drifted: ${lean}`);
  const height=Math.max(...rear.map(p=>p.y))-Math.min(...rear.map(p=>p.y));
  assert.ok(height>.415&&height<.425,`Rear glazing must retain the revised 420 mm aperture: ${height}`);
});

test('paint, roof and transparent glazing retain separate PBR materials',()=>{
  const materials=Object.fromEntries(asset.materials.map(mat=>[mat.name,mat]));
  for(const name of ['BodyPaint','RoofPaint','WindowGlass','TyreRubber','BrightChrome','GrilleLettering'])assert.ok(materials[name],`Missing material ${name}`);
  assert.equal(materials.WindowGlass.alphaMode,'BLEND');
  assert.ok(materials.BodyPaint.extensions.KHR_materials_clearcoat.clearcoatFactor>0);
  assert.equal(asset.images?.length||0,0,'A reference photo should not become a vehicle texture');
});

test('native editable source is a Blender project, not just a renamed export',()=>{
  const source=readFileSync(new URL('../modeling/jimny-lwb.blend',import.meta.url));
  const blend=source.readUInt32LE(0)===0xfd2fb528?zstdDecompressSync(source):source;
  assert.equal(blend.toString('ascii',0,7),'BLENDER');
});

test('build fingerprints the exact model for returning visitors',()=>{
  const hash=createHash('sha256').update(binary).digest('hex').slice(0,12);
  const viewer=readFileSync(new URL('../assets/viewer3d.js',import.meta.url),'utf8');
  assert.ok(viewer.includes(`assets/models/jimny-lwb-blender.glb?v=${hash}`),'Rebuild the viewer after changing the model');
});

test('compressed model decodes at vehicle scale with grounded tyres and usable surface coordinates',async()=>{
  const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  const gltf=await loader.parseAsync(binary.buffer.slice(binary.byteOffset,binary.byteOffset+binary.byteLength),'');
  gltf.scene.updateMatrixWorld(true);
  const wheels=gltf.scene.getObjectByName('StockWheels');
  const bounds=new Box3().setFromObject(wheels),size=bounds.getSize(new Vector3());
  assert.ok(Math.abs(bounds.min.y)<.004,'Stock tyres no longer meet the ground');
  assert.ok(Math.abs(size.y-.695)<.015,'195/80 R15 tyre diameter drifted');
  assert.ok(Math.abs(size.z-size.y-2.590)<.015,'Wheelbase drifted during compression');
  for(const name of ['BodyShell','RoofShell','StockWheels']){
    const group=gltf.scene.getObjectByName(name);
    let mapped=0;
    group.traverse(obj=>{if(obj.isMesh&&obj.geometry.attributes.uv)mapped++;});
    assert.ok(mapped>0,`${name} lost its surface coordinates`);
  }
});

test('body paint includes baked cavity shading and two-tone paint is confined to the roof',async()=>{
  const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  const gltf=await loader.parseAsync(binary.buffer.slice(binary.byteOffset,binary.byteOffset+binary.byteLength),'');
  let shadedBody=false;
  gltf.scene.getObjectByName('BodyShell').traverse(obj=>{
    if(!obj.isMesh)return;
    assert.notEqual(obj.material.name,'RoofPaint','Two-tone roof colour must not recolour window pillars');
    if(obj.material.name!=='BodyPaint')return;
    const color=obj.geometry.attributes.color;
    assert.ok(color,'Body cavity shading was lost during export');
    let min=1,max=0;
    for(let i=0;i<color.count;i++){min=Math.min(min,color.getX(i));max=Math.max(max,color.getX(i));}
    assert.ok(min<.85&&max>.95,'Cavity shading is missing or uniformly dark');
    shadedBody=true;
  });
  assert.ok(shadedBody);
});

test('every stock and AT wheel component remains inside its wheel envelope after re-export',async()=>{
  const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  const gltf=await loader.parseAsync(binary.buffer.slice(binary.byteOffset,binary.byteOffset+binary.byteLength),'');
  gltf.scene.updateMatrixWorld(true);
  // Envelope includes the protruding lug-nut faces, not only rubber width.
  for(const [name,radius,track,halfWidth] of [['StockWheels',.3465,.705,.115],['AllTerrainWheels',.368,.750,.134]]){
    const p=new Vector3();
    gltf.scene.getObjectByName(name).traverse(obj=>{
      if(!obj.isMesh)return;
      const positions=obj.geometry.attributes.position;
      for(let i=0;i<positions.count;i++){
        p.fromBufferAttribute(positions,i).applyMatrix4(obj.matrixWorld);
        assert.ok(Math.abs(Math.abs(p.x)-track)<halfWidth,`${name}/${obj.material.name}: loose axial component`);
        const wheelZ=p.z>=0?1.295:-1.295;
        assert.ok(Math.hypot(p.y-radius,p.z-wheelZ)<radius+.009,`${name}/${obj.material.name}: loose radial component`);
      }
    });
  }
});

test('all grille variants have real headlamp openings, not panels hiding the reflectors',async()=>{
  const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(binary.buffer.slice(binary.byteOffset,binary.byteOffset+binary.byteLength),'');
  gltf.scene.updateMatrixWorld(true);
  for(const name of ['BodyShell','StockHeadlamps',...assemblies.filter(n=>n.endsWith('Grille'))]){
    const panels=[];
    gltf.scene.getObjectByName(name).traverse(obj=>{if(obj.isMesh&&['BodyPaint','GrilleAnthracite','GlossBlackGrille','MouldedPlastic'].includes(obj.material.name)){obj.material.side=DoubleSide;panels.push(obj);}});
    for(const side of [-1,1])for(const angle of [0,Math.PI/2,Math.PI,Math.PI*1.5]){
      const origin=new Vector3(side*.550+Math.cos(angle)*.085,.917+Math.sin(angle)*.085,2.2);
      const hits=new Raycaster(origin,new Vector3(0,0,-1),0,.50).intersectObjects(panels,false);
      assert.equal(hits.length,0,`${name} blocks the headlamp reflector at ${origin.toArray()}`);
    }
  }
});
