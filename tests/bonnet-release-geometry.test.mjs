import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {DoubleSide,Raycaster,Vector3,Matrix3,Group,Box3} from 'three';
import {accessoryBuilder,accessoryMaterials} from '../src/accessories.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';

// Probe the revised five-door lamp centres, not the earlier model's datum.
for(const body of ['lwb','swb'])test(`${body}: revised headlamp apertures remain open in every grille`,async()=>{
  const bytes=await readFile(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url));
  const root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder)
    .parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'')).scene;
  root.updateMatrixWorld(true);
  // The fascia has an actual rounded side return. It must be visible from
  // either side, rather than wholly hidden behind the painted nose surround.
  for(const name of ['OEMGrille','BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille']){
    const grille=root.getObjectByName(name),offset=body==='swb'?.17:0;
    for(const side of [-1,1])for(const z of [1.764,1.770,1.775]){
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
      const origin=new Vector3(side*.55+Math.cos(angle)*.085,.917+Math.sin(angle)*.085,2.2-(body==='swb'?.17:0));
      assert.equal(new Raycaster(origin,new Vector3(0,0,-1),0,.5).intersectObjects(panels,false).length,0,`${name} covers the lamp`);
    }
  }
  // A position-only mesh simplifier caused visible ripples across this
  // shallow, continuous face. Track the normal field as well as apertures.
  const sheets=[];root.getObjectByName('OEMGrille').traverse(o=>{if(o.isMesh&&o.material.name==='GrilleAnthracite')sheets.push(o);});
  const normals=[-.25,-.08,.08,.25].map(x=>{
    const hit=new Raycaster(new Vector3(x,1.045,2.1-(body==='swb'?.17:0)),new Vector3(0,0,-1),0,.5).intersectObjects(sheets,false)[0];
    assert(hit,'Front sheet sample missing');return hit.normal.clone().applyNormalMatrix(new Matrix3().getNormalMatrix(hit.object.matrixWorld));
  });
  for(let i=1;i<normals.length;i++)assert(normals[i].angleTo(normals[i-1])<.045,'Simplification introduced a sharp reflection ripple in the grille');
  // The moulded face now has genuine crown/rolled edges. Keep its gradual
  // normal field, without reintroducing cut-out wall normals as a dark halo.
  for(const side of [-1,1])for(const radius of [.120,.125,.130])for(let i=1;i<8;i++){
    const angle=i*Math.PI/8,x=side*.55+radius*Math.cos(angle),y=.917+radius*Math.sin(angle);
    const hit=new Raycaster(new Vector3(x,y,2.1-(body==='swb'?.17:0)),new Vector3(0,0,-1),0,.5).intersectObjects(sheets,false)[0];
    assert(hit,'Grille sheet missing beside lamp');
    const normal=hit.normal.clone().applyNormalMatrix(new Matrix3().getNormalMatrix(hit.object.matrixWorld));
    assert(Math.abs(normal.y)<.42,`Grille front inherits aperture-wall shading: ${normal.y}`);
  }
  const surfaceAt=y=>new Raycaster(new Vector3(.40,y,2.1-(body==='swb'?.17:0)),new Vector3(0,0,-1),0,.5).intersectObjects(sheets,false)[0];
  const crown=surfaceAt(.925),rolledEdge=surfaceAt(1.052);
  assert(crown&&rolledEdge,'Factory moulded face probes missing');
  const relief=crown.point.z-rolledEdge.point.z;
  assert(relief>.005&&relief<.011,`Factory grille has lost its subtle moulded crown: ${relief}`);
  for(const sheet of sheets){
    assert(!sheet.geometry.attributes.color,'Do not bake patchy vertex occlusion into the smooth grille face');
    assert(Math.max(sheet.material.color.r,sheet.material.color.g,sheet.material.color.b)<.035,'Factory grille must remain dark satin');
  }
  const painted=[];root.getObjectByName('BodyShell').traverse(o=>{if(o.isMesh&&o.material.name==='BodyPaint')painted.push(o);});
  for(const x of [-.5,0,.5]){
    const offset=body==='swb'?.17:0;
    const hit=new Raycaster(new Vector3(x,1.070,2.2-offset),new Vector3(0,0,-1),0,.5).intersectObjects(painted,false)[0];
    const grilleFront=1.7815+.020*(1-(x/.755)**2)-offset;
    assert(hit&&hit.point.z>grilleFront&&hit.point.z<grilleFront+.010,'Painted rolled lip must frame the grille, not form a recessed channel behind it');
  }
  // The revised fog optics must stay inside the moulded circular pockets.
  for(const side of [-1,1]){
    const h=.412+(.667-.445)*(.320/.392),z=body==='swb'?-.17:0;
    const hits=new Raycaster(new Vector3(side*.607,h,2.1+z),new Vector3(0,0,-1),0,.4).intersectObject(root.getObjectByName('StockBumper'),true);
    assert(hits.some(hit=>['BrightChrome','LampLens','WheelGunmetal'].includes(hit.object.material.name)),'Fog optic missing at the revised pocket centre');
  }
});

test('replacement headlamps share the corrected stock lamp centre',()=>{
  for(const body of ['5door','3door']){
    const rig=new Group(),mats=accessoryMaterials();
    accessoryBuilder({accessoryRig:rig,mats,detailed:true,modelBody:body,colour:'#aaa',effectiveDesign:{},lampEmitters:{}})(new Set(['headlamps']),{});
    const bounds=new Box3().setFromObject(rig,true),centre=bounds.getCenter(new Vector3());
    assert(Math.abs(centre.y-.917)<.005);
    assert(centre.z>(body==='3door'?1.60:1.77)&&centre.z<(body==='3door'?1.70:1.87));
    rig.traverse(o=>o.geometry?.dispose());for(const m of Object.values(mats))m.dispose();
  }
});
