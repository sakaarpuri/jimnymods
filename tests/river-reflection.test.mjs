import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {attachRiverReflection,riverReflectionAllowed} from '../src/trail/river-reflection.js';
import {sectionWaterMaterial} from '../src/trail/section-water.js';

test('reflection budget rejects mobile, cabin, distant, offscreen and recursive passes',()=>{
 const eligible={distance:12,elapsed:90};assert(riverReflectionAllowed(eligible));
 for(const key of ['mobile','cabin','offscreen','recursive'])assert(!riverReflectionAllowed({...eligible,[key]:true}));
 assert(!riverReflectionAllowed({...eligible,distance:60}));assert(!riverReflectionAllowed({...eligible,elapsed:80}));
});
test('local reflector uses bounded target, throttle, physical plane and complete disposal',()=>{
 const scene=new T.Scene(),water=new T.Mesh(new T.PlaneGeometry(20,20),sectionWaterMaterial()),camera=new T.PerspectiveCamera(55,1,.1,500);
 water.rotation.x=-Math.PI/2;scene.add(water);scene.updateMatrixWorld(true);camera.position.set(0,5,8);camera.lookAt(0,0,0);camera.updateMatrixWorld(true);
 let time=0,target=null,draws=0,offscreen=false,reflectionTarget;
 const renderer={getRenderTarget:()=>offscreen?{}:target,setRenderTarget:t=>{target=t;},xr:{enabled:true},shadowMap:{autoUpdate:true},state:{buffers:{depth:{setMask(){}}},viewport(){}},autoClear:true,render(s,c){draws++;reflectionTarget=target;assert.equal(s,scene);assert.equal(water.visible,false);assert.equal(this.shadowMap.autoUpdate,false);assert.notEqual(c,camera);assert.equal(target.width,512);assert.equal(target.height,512);assert.equal(target.samples,0);assert(c.position.y<0);}};
 const reflection=attachRiverReflection(water,{normal:new T.Vector3(0,0,1),mobile:()=>false,now:()=>time});
 const render=()=>water.onBeforeRender(renderer,scene,camera);
 render();assert.equal(draws,1);assert.equal(water.material.userData.localReflection.strength.value,1);assert.equal(renderer.xr.enabled,true);assert.equal(renderer.shadowMap.autoUpdate,true);assert.equal(target,null);assert.equal(water.visible,true);
 time=50;render();assert.equal(draws,1);time=100;render();assert.equal(draws,2);
 camera.userData.skipRiverReflection=true;time=200;render();assert.equal(draws,2);assert.equal(water.material.userData.localReflection.strength.value,0);
 camera.userData.skipRiverReflection=false;offscreen=true;render();assert.equal(draws,2);offscreen=false;
 let disposed=0;reflectionTarget.addEventListener('dispose',()=>disposed++);
 water.material.dispose();reflection.dispose();assert.equal(reflection.snapshot().enabled,false);assert.equal(water.material.userData.localReflection.map.value,null);assert.equal(disposed,1);
 water.geometry.dispose();
});
test('reflection failure falls back and restores render state without retries or late callbacks',()=>{
 const water=new T.Mesh(new T.PlaneGeometry(10,10),sectionWaterMaterial());water.rotation.x=-Math.PI/2;water.updateMatrixWorld(true);
 const camera=new T.PerspectiveCamera();camera.position.set(0,5,5);camera.lookAt(0,0,0);camera.updateMatrixWorld(true);let target=null;
 const renderer={getRenderTarget:()=>target,setRenderTarget:t=>{target=t;},xr:{enabled:true},shadowMap:{autoUpdate:true},state:{buffers:{depth:{setMask(){}}}},autoClear:true,render(){throw Error('context unavailable');}};
 const reflection=attachRiverReflection(water,{normal:new T.Vector3(0,0,1),mobile:()=>false}),warn=console.warn;console.warn=()=>{};
 try{water.onBeforeRender(renderer,new T.Scene(),camera);assert.equal(reflection.snapshot().enabled,false);assert.equal(target,null);assert.equal(water.visible,true);assert.equal(renderer.xr.enabled,true);assert.equal(renderer.shadowMap.autoUpdate,true);assert.equal(water.material.userData.localReflection.strength.value,0);}finally{console.warn=warn;water.material.dispose();water.geometry.dispose();}
});
