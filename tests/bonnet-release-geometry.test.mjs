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
