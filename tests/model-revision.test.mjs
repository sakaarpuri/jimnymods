import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Raycaster,Vector3} from 'three';
import {createDriver,updateDriver} from '../src/trail/player.js';
import {applyCabinMaterials} from '../src/trail/cabin-materials.js';

async function cabin(body){
  const bytes=await readFile(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url));
  const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
  gltf.scene.updateMatrixWorld(true);return gltf.scene.getObjectByName('Cabin');
}
test('both passenger tubs close the outer footwell gap and firewall with authored geometry',async()=>{
  for(const body of ['lwb','swb']){
    const root=await cabin(body),offset=body==='swb'?-.17:0;
    for(const x of [-.68,-.37,.37,.68]){
      const ray=new Raycaster(new Vector3(x,.92,.38+offset),new Vector3(0,-1,0),0,.4);
      assert(ray.intersectObject(root,true).length,`${body} floor at ${x}`);
    }
    const firewall=new Raycaster(new Vector3(-.37,.82,.5+offset),new Vector3(0,0,1),0,.45);
    assert(firewall.intersectObject(root,true).length,`${body} firewall encloses footwell`);
    const materials=new Set();root.traverse(o=>{if(o.isMesh)materials.add(o.material.name);});
    for(const name of ['CabinDashboard','CabinCarpet','CabinSeatInsert'])assert(materials.has(name),`${body} ${name}`);
    const result=applyCabinMaterials(root);assert(result.count>=4);result.dispose();
  }
});
test('first-person driver keeps body and steering hands and hides only the head',()=>{
  for(const kind of ['man','woman'])for(const body of ['3door','5door']){
    const driver=createDriver(kind,body),head=driver.getObjectByName('DriverHead');assert(head);
    updateDriver(driver,{steer:0},true);assert(driver.visible);assert.equal(head.visible,false);
    const original=driver.userData.arms[0].palm.position.clone();
    updateDriver(driver,{steer:.15},true);assert(driver.userData.arms[0].palm.position.distanceTo(original)>.05);
    assert(driver.userData.arms.every(a=>a.forearm.visible&&a.palm.visible));
    updateDriver(driver,{steer:0},false);assert(head.visible);
  }
});
test('interior sill does not protrude through the painted stock doors',async()=>{
  for(const body of ['lwb','swb']){
    const cabinRoot=await cabin(body),vehicle=cabinRoot.parent;
    for(const side of [-1,1])for(const z of [-.55,0,.35])for(const y of [.714,.73,.75]){
      const ray=new Raycaster(new Vector3(side*1.2,y,z),new Vector3(-side,0,0),0,.6);
      const hit=ray.intersectObject(vehicle,true)[0];
      assert(hit,`${body} side panel ray`);
      assert.equal(hit.object.material.name,'BodyPaint',`${body} exterior at side=${side}, y=${y}, z=${z} must conceal cabin trim`);
    }
  }
});
test('front amber lenses retain reference-guided 80 mm diameter in both bodies',async()=>{
  for(const body of ['lwb','swb']){
    const root=(await cabin(body)).parent,point=new Vector3(),heights=[];
    root.traverse(object=>{
      if(!object.isMesh||object.material.name!=='IndicatorAmber')return;
      const position=object.geometry.attributes.position;
      for(let i=0;i<position.count;i++){
        point.fromBufferAttribute(position,i).applyMatrix4(object.matrixWorld);
        if(point.z>(body==='swb'?1.65:1.8))heights.push(point.y);
      }
    });
    assert(heights.length>20,`${body} front amber lenses exist`);
    const diameter=Math.max(...heights)-Math.min(...heights);
    assert(diameter>.075&&diameter<.085,`${body} front amber lens diameter ${diameter}`);
  }
});
test('model badges use outlined geometry and instrument cluster has no training billboard',async()=>{
  const source=await readFile(new URL('../modeling/build_jimny.py',import.meta.url),'utf8');
  assert(source.includes("geometry('JimnyTailgateWordmark'"));
  assert(source.includes("assets/models/jimny-wordmark.json"));
  assert(!source.includes("vehicle_lettering('Jimny tailgate badge'"));
  const controls=await readFile(new URL('../src/trail/cabin.js',import.meta.url),'utf8');
  assert(!controls.includes('GEAR / RANGE / km/h'));assert(controls.includes("label('',.044,.047"));
});
test('both steering wheels retain broad switch spokes and a genuinely open lower V',async()=>{
  for(const body of ['lwb','swb']){
    const root=await cabin(body),offset=body==='swb'?-.17:0;
    const openV=new Raycaster(new Vector3(-.38,1.052,.20+offset),new Vector3(0,0,1),0,.08);
    assert.equal(openV.intersectObject(root,true).length,0,`${body} lower spoke aperture must remain open`);
    for(const side of [-1,1]){
      const broadSpoke=new Raycaster(new Vector3(-.38+side*.105,1.181,.20+offset),new Vector3(0,0,1),0,.08);
      assert(broadSpoke.intersectObject(root,true).length,`${body} side spoke has a sculpted plate, not a narrow tube`);
    }
    const materials=new Set();root.traverse(o=>{if(o.isMesh)materials.add(o.material.name);});
    assert(materials.has('CabinSteeringSatin'));
  }
});
test('mirror lenses have real rounded silhouettes and sit in visible housing recesses',async()=>{
  for(const body of ['lwb','swb']){
    const root=(await cabin(body)).parent,offset=body==='swb'?-.17:0;
    const lenses=[[-.863,1.285,.175,.117,.49],[.863,1.285,.175,.117,.49],[0,1.522,.18,.055,.51]];
    for(const [x,y,w,h,z] of lenses){
      const hitAt=(dx,dy)=>new Raycaster(new Vector3(x+dx,y+dy,z+offset),new Vector3(0,0,1),0,.075).intersectObject(root,true);
      assert.equal(hitAt(0,0)[0]?.object.material.name,'BrightChrome',`${body} mirror centre must be visible, not buried behind housing`);
      for(const sx of [-1,1])for(const sy of [-1,1]){
        const hits=hitAt(sx*(w/2-.0015),sy*(h/2-.0015));
        assert(!hits.some(hit=>hit.object.material.name==='BrightChrome'),`${body} mirror bounding-box corner must not contain rectangular glass`);
      }
    }
  }
});
test('cabin concept geometry uses a rounded wheel section, crowned hub and tapered seat shoulders',async()=>{
  for(const body of ['lwb','swb']){
    const root=await cabin(body),offset=body==='swb'?-.17:0;
    const front=(x,y)=>new Raycaster(new Vector3(x,y,.218+offset),new Vector3(0,0,1),0,.065).intersectObject(root,true)[0];
    const crown=front(-.38,1.13),nearRimEdge=front(-.38,1.328);
    assert(crown&&crown.point.z-offset<.232,`${body} airbag face must be gently crowned forward, not a flat cylinder`);
    assert(nearRimEdge&&nearRimEdge.point.z-offset>.2495,`${body} grip must round away at its outer edge, not retain a flat rectangular section`);
    const seatRay=x=>new Raycaster(new Vector3(x,1.225,.05+offset),new Vector3(0,0,-1),0,.30).intersectObject(root,true);
    assert(seatRay(.37).length,`${body} shoulder-height seat back exists`);
    assert(!seatRay(.58).length,`${body} upper seat shoulder tapers inward instead of retaining box width`);
  }
});
