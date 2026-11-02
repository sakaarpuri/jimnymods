import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {DoubleSide,Raycaster,Vector3,Matrix3,Group,Box3} from 'three';
import {accessoryBuilder,accessoryMaterials} from '../src/accessories.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';

// Both bodies share the R43 fascia; the short nose is 65.77mm rearward.
for(const body of ['lwb','swb'])test(`${body}: revised headlamp apertures remain open in every grille`,async()=>{
  const bytes=await readFile(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url));
  const root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder)
    .parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'')).scene;
  root.updateMatrixWorld(true);
  // The fascia has an actual rounded side return. It must be visible from
  // either side, rather than wholly hidden behind the painted nose surround.
  for(const name of ['OEMGrille','BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille']){
    const grille=root.getObjectByName(name),offset=body==='swb'?.065770106:0;
    for(const side of [-1,1])for(const z of [1.730,1.732,1.734]){
      const ray=new Raycaster(new Vector3(side*1,.93,z-offset),new Vector3(-side,0,0),0,.4);
      const hit=ray.intersectObjects([root.getObjectByName('BodyShell'),grille],true)[0];
      let assembly=hit?.object;
      while(assembly&&assembly!==grille)assembly=assembly.parent;
      assert(assembly===grille,`${name} side return is hidden by the painted surround`);
      assert(Math.abs(hit.point.x)<.762,'Side return must not become an oversized projecting wing');
    }
  }
  for(const name of ['BodyShell','StockHeadlamps','OEMGrille','BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille']){
    const panels=[];
    root.getObjectByName(name).traverse(obj=>{
      if(obj.isMesh&&['BodyPaint','GrilleAnthracite','GlossBlackGrille','MouldedPlastic'].includes(obj.material.name)){
        obj.material.side=DoubleSide;panels.push(obj);
      }
    });
    for(const side of [-1,1])for(const angle of [0,Math.PI/2,Math.PI,Math.PI*1.5]){
      const origin=new Vector3(side*.55+Math.cos(angle)*.075,.955+Math.sin(angle)*.075,2.2-(body==='swb'?.065770106:0));
      assert.equal(new Raycaster(origin,new Vector3(0,0,-1),0,.40).intersectObjects(panels,false).length,0,`${name} covers the lamp`);
    }
  }
  // A position-only mesh simplifier caused visible ripples across this
  // shallow, continuous face. Track the normal field as well as apertures.
  const sheets=[];root.getObjectByName('OEMGrille').traverse(o=>{if(o.isMesh&&o.material.name==='GrilleAnthracite')sheets.push(o);});
  const normals=[-.25,-.08,.08,.25].map(x=>{
    const hit=new Raycaster(new Vector3(x,1.045,2.1-(body==='swb'?.065770106:0)),new Vector3(0,0,-1),0,.5).intersectObjects(sheets,false)[0];
    assert(hit,'Front sheet sample missing');return hit.normal.clone().applyNormalMatrix(new Matrix3().getNormalMatrix(hit.object.matrixWorld));
  });
  for(let i=1;i<normals.length;i++)assert(normals[i].angleTo(normals[i-1])<.045,'Simplification introduced a sharp reflection ripple in the grille');
  // The moulded face now has genuine crown/rolled edges. Keep its gradual
  // normal field, without reintroducing cut-out wall normals as a dark halo.
  for(const side of [-1,1])for(const radius of [.105,.110])for(let i=1;i<8;i++){
    const angle=i*Math.PI/8,x=side*.55+radius*Math.cos(angle),y=.955+radius*Math.sin(angle);
    if(y>1.055)continue; // Above this height is the intentionally rolled upper edge.
    const hit=new Raycaster(new Vector3(x,y,2.1-(body==='swb'?.065770106:0)),new Vector3(0,0,-1),0,.5).intersectObjects(sheets,false)[0];
    assert(hit,'Grille sheet missing beside lamp');
    const normal=hit.normal.clone().applyNormalMatrix(new Matrix3().getNormalMatrix(hit.object.matrixWorld));
    assert(Math.abs(normal.y)<.42,`Grille front inherits aperture-wall shading: ${normal.y}`);
  }
  const surfaceAt=y=>new Raycaster(new Vector3(.40,y,2.1-(body==='swb'?.065770106:0)),new Vector3(0,0,-1),0,.5).intersectObjects(sheets,false)[0];
  const crown=surfaceAt(.925),rolledEdge=surfaceAt(1.052);
  assert(crown&&rolledEdge,'Factory moulded face probes missing');
  const relief=crown.point.z-rolledEdge.point.z;
  // The accepted R37 long-body fixture has 1.04mm relief here; R43 has
  // 1.44mm. Keep a shallow positive crown, rather than the old SWB 5–11mm.
  assert(relief>.0008&&relief<.003,`Factory grille has lost its subtle moulded crown: ${relief}`);
  for(const sheet of sheets){
    assert(!sheet.geometry.attributes.color,'Do not bake patchy vertex occlusion into the smooth grille face');
    assert(Math.max(sheet.material.color.r,sheet.material.color.g,sheet.material.color.b)<.035,'Factory grille must remain dark satin');
  }
  const painted=[];root.getObjectByName('BodyShell').traverse(o=>{if(o.isMesh&&o.material.name==='BodyPaint')painted.push(o);});
  for(const x of [-.5,0,.5]){
    const offset=body==='swb'?.065770106:0;
    const hit=new Raycaster(new Vector3(x,1.105,2.2-offset),new Vector3(0,0,-1),0,.5).intersectObjects(painted,false)[0];
    const grilleFront=new Box3().setFromObject(root.getObjectByName('OEMGrille'),true).max.z;
    assert(hit&&hit.point.z>grilleFront-.050&&hit.point.z<grilleFront+.004,'Fixed rolled nose must close above the grille without an overhanging shelf');
  }
  // The revised fog optics must stay inside the moulded circular pockets.
  for(const side of [-1,1]){
    const h=.412+(.667-.445)*(.320/.392),z=body==='swb'?-.065770106:0;
    const hits=new Raycaster(new Vector3(side*.607,h,2.1+z),new Vector3(0,0,-1),0,.4).intersectObject(root.getObjectByName('StockBumper'),true);
    assert(hits.some(hit=>['BrightChrome','LampLens','WheelGunmetal'].includes(hit.object.material.name)),'Fog optic missing at the revised pocket centre');
  }
});

test('replacement headlamps share the stock aperture and the separate rigid front datum',async()=>{
  const centres=[];
  for(const body of ['5door','3door']){
    const rig=new Group(),mats=accessoryMaterials();
    accessoryBuilder({accessoryRig:rig,mats,detailed:true,modelBody:body,colour:'#aaa',effectiveDesign:{},lampEmitters:{}})(new Set(['headlamps']),{});
    const bounds=new Box3().setFromObject(rig,true),centre=bounds.getCenter(new Vector3());
    const bytes=await readFile(new URL(`../assets/models/jimny-${body==='3door'?'swb':'lwb'}-blender.glb`,import.meta.url));
    const stock=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'')).scene;
    stock.updateMatrixWorld(true);const factory=new Box3().setFromObject(stock.getObjectByName('StockHeadlamps'),true);
    for(const axis of ['x','y'])for(const edge of ['min','max'])assert(Math.abs(bounds[edge][axis]-factory[edge][axis])<.001,`Replacement lamp misses stock ${axis} aperture`);
    assert(Math.abs(centre.y-.955)<.001);
    // Projector lamps have a deeper front lens than stock. Require substantial
    // housing overlap and cap the projection instead of equating depth centres.
    assert(bounds.clone().intersect(factory).getSize(new Vector3()).z>.060,'Replacement housing must overlap the stock lamp pocket');
    assert(bounds.max.z-factory.max.z>=0&&bounds.max.z-factory.max.z<.025,'Replacement lens projects too far from the stock face');
    centres.push(centre);
    rig.traverse(o=>o.geometry?.dispose());for(const m of Object.values(mats))m.dispose();
  }
  assert(Math.abs(centres[0].z-centres[1].z-.065770106)<.001,'Replacement lamps must follow the rigid nose, not the cowl offset');
});
