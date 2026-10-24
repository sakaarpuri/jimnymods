import test from 'node:test';
import assert from 'node:assert/strict';
import {MOUNTAIN_STEPS,mountainStepHeight,mountainStoneMask} from '../src/trail/adventure-terrain.js';
const smooth=n=>{const t=Math.max(0,Math.min(1,n));return t*t*(3-2*t);};

test('wide mountain caps add genuine outboard rock without changing inner wheel articulation',()=>{
 for(const p of MOUNTAIN_STEPS){
  assert(p.halfWidth>=1.7&&p.halfWidth<=2.1);
  const c=Math.cos(p.yaw),s=Math.sin(p.yaw),oldWidth=.9+(p.halfWidth-1.7)/.4*.25;
  for(let u=-.2;u<=.2;u+=.1)for(let v=-p.halfDepth;v<=p.halfDepth;v+=.2){
   const x=p.x+u*c+v*s,z=p.z-u*s+v*c,width=u*p.side>=0?oldWidth:p.innerHalfWidth;
   const original=smooth(Math.min((width-Math.abs(u))/.33,(p.halfDepth-Math.abs(v))/.6,(width+p.halfDepth-p.chamfer-Math.abs(u)-Math.abs(v))/.7))*p.height;
   assert(Math.abs(mountainStepHeight(x,z,1,p.lane)-original)<1e-9,'wheel contact profile changed');
  }
  const outward=p.side*1.4,x=p.x+outward*c,z=p.z-outward*s;
  assert(mountainStepHeight(x,z,1,p.lane)>p.height*.75,'outboard shelf must be actual height, not only material');
  assert(mountainStoneMask(x,z,p.lane)>.9);
  for(let u=-p.halfWidth;u<=p.halfWidth;u+=.2)for(let v=-p.halfDepth;v<=p.halfDepth;v+=.2){
   const px=p.x+u*c+v*s,pz=p.z-u*s+v*c,h=mountainStepHeight(px,pz,1,p.lane);
   assert(h<=p.height+1e-9);if(h>0)assert(px>56&&px<74&&pz>108&&pz<181);
  }
 }
});
