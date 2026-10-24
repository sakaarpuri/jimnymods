import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {createVehicleMirrors,extractMirrorLenses} from '../src/trail/mirrors.js';
async function vehicle(body){const bytes=await readFile(new URL(`../assets/models/jimny-${body==='3door'?'swb':'lwb'}-blender.glb`,import.meta.url));return (await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'')).scene;}
test('actual GLBs yield three rounded live mirror lenses without rectangular corners',async()=>{
  for(const body of ['5door','3door']){
    const root=await vehicle(body),lenses=extractMirrorLenses(root,body);assert.equal(lenses.length,3);
    for(const lens of lenses){
      const mesh=new T.Mesh(lens.geometry,new T.MeshBasicMaterial({side:T.DoubleSide}));mesh.updateMatrixWorld(true);
      const ray=(dx,dy)=>new T.Raycaster(new T.Vector3(lens.x+dx,lens.y+dy,lens.z-.03),new T.Vector3(0,0,1),0,.06).intersectObject(mesh);
      assert(ray(0,0).length,`${body}/${lens.id} centre`);
      for(const x of [-1,1])for(const y of [-1,1])assert.equal(ray(x*(lens.w/2-.0015),y*(lens.h/2-.0015)).length,0,`${body}/${lens.id} rounded corner`);
      const uv=lens.geometry.attributes.uv;for(let i=0;i<uv.count;i++)assert(uv.getX(i)>=-.01&&uv.getX(i)<=1.01&&uv.getY(i)>=-.01&&uv.getY(i)<=1.01);
      lens.geometry.dispose();mesh.material.dispose();
    }
  }
});
function mockRenderer(){return {target:{name:'main'},viewport:new T.Vector4(2,3,800,600),scissor:new T.Vector4(4,5,700,500),scissorTest:true,autoClear:false,shadowMap:{autoUpdate:true},xr:{enabled:true},renders:0,getRenderTarget(){return this.target;},getViewport(v){return v.copy(this.viewport);},getScissor(v){return v.copy(this.scissor);},getScissorTest(){return this.scissorTest;},setRenderTarget(v){this.target=v;},setViewport(v){this.viewport.copy(v);},setScissor(v){this.scissor.copy(v);},setScissorTest(v){this.scissorTest=v;},clear(){},render(){this.renders++;}};}
test('live mirrors stagger bounded work, follow rotated vehicle, restore renderer state and dispose',async()=>{
  const root=await vehicle('5door'),scene=new T.Scene();scene.add(root);root.position.set(6,2,-5);root.rotation.y=Math.PI/2;
  const renderer=mockRenderer(),initial=renderer.target,mirrors=createVehicleMirrors({renderer,scene,vehicleRoot:root});
  const camera=new T.PerspectiveCamera();
  for(let i=0;i<60;i++)mirrors.update(camera,1/60);
  assert(renderer.renders<=25&&renderer.renders>=18);assert(mirrors.snapshot().every(m=>m.ready));
  const right=mirrors.snapshot().find(m=>m.id==='right');assert(Math.abs(right.cameraPosition[0]-6.524)<.002);assert(Math.abs(right.cameraPosition[2]-(-4.137))<.002);
  assert.equal(renderer.target,initial);assert.deepEqual(renderer.viewport.toArray(),[2,3,800,600]);assert.deepEqual(renderer.scissor.toArray(),[4,5,700,500]);assert(renderer.scissorTest);assert(renderer.shadowMap.autoUpdate);assert(renderer.xr.enabled);assert.equal(renderer.autoClear,false);
  mirrors.setEnabled(false);const count=renderer.renders;mirrors.update(camera,1);assert.equal(renderer.renders,count);
  mirrors.dispose();mirrors.dispose();assert.equal(root.getObjectByName('LiveMirror-right'),undefined);
});
test('mirror renderer restores state even when rendering throws',async()=>{
  const root=await vehicle('3door'),renderer=mockRenderer(),target=renderer.target;
  renderer.render=()=>{throw new Error('test draw failure');};
  const mirrors=createVehicleMirrors({renderer,scene:new T.Scene(),vehicleRoot:root,body:'3door'});
  assert.throws(()=>mirrors.update(new T.PerspectiveCamera(),1),/test draw failure/);
  assert.equal(renderer.target,target);assert(renderer.xr.enabled);assert(renderer.shadowMap.autoUpdate);assert(renderer.scissorTest);assert.equal(renderer.autoClear,false);mirrors.dispose();
});
