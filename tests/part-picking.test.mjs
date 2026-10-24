import test from 'node:test';
import assert from 'node:assert/strict';
import {Group,Mesh,BoxGeometry,MeshStandardMaterial,Vector3,Plane} from 'three';
import {createTapTracker,describePartHit,visibleHit} from '../src/part-picking.js';
test('tap selects but orbit, long press, multi-touch and cancellation never do',()=>{
 const e=(x=0,y=0,timeStamp=0,pointerId=1)=>({clientX:x,clientY:y,timeStamp,pointerId,button:0});let t=createTapTracker();t.down(e());assert(t.up(e(2,2,200)));t.down(e());t.move(e(18));t.move(e());assert(!t.up(e(0,0,200)));t.down(e());assert(!t.up(e(0,0,900)));t.down(e());t.down(e(0,0,10,2));assert(!t.up(e(0,0,100,2)));assert(!t.up(e(0,0,200)));t.down(e());t.cancel(e());assert(!t.up(e(0,0,100)));
});
test('geometry target, material capabilities, hidden ancestors and clipping are respected',()=>{
 const root=new Group();root.name='StockWheels';const mesh=new Mesh(new BoxGeometry(),new MeshStandardMaterial({name:'TyreRubber'}));root.add(mesh);const hit={object:mesh,point:new Vector3(0,1,0)};
 assert.equal(describePartHit(hit).target,'wheels');assert.equal(describePartHit(hit).tyre,true);assert.equal(describePartHit(hit).colour,false);mesh.material.name='MachinedAlloy';assert.equal(describePartHit(hit).colour,true);assert(visibleHit(hit));root.visible=false;assert(!visibleHit(hit));root.visible=true;assert(!visibleHit(hit,[new Plane(new Vector3(0,-1,0),.5)]));
 root.userData.finishTarget='exea_cupholder';assert.equal(describePartHit(hit).target,'exea_cupholder');mesh.material.opacity=.12;assert.equal(describePartHit(hit),null);
});
