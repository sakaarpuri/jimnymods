import test from 'node:test';
import assert from 'node:assert/strict';
import {BoxGeometry,Mesh,MeshBasicMaterial} from 'three';
import {assertSameWorldGeometry} from './helpers/world-geometry.mjs';
const mesh=()=>{const m=new Mesh(new BoxGeometry(.10,.08,.12),new MeshBasicMaterial());m.material.name='BodyPaint';m.updateMatrixWorld(true);return m;};
test('world comparison accepts a different vertex order and equivalent local scale',()=>{
 const expected=mesh(),actual=mesh();actual.geometry=actual.geometry.toNonIndexed();
 for(const name of ['position','normal']){const a=actual.geometry.attributes[name],copy=a.array.slice();for(let t=0;t<a.count/3;t++)for(let k=0;k<9;k++)a.array[t*9+k]=copy[(a.count/3-1-t)*9+k];}
 actual.geometry.scale(.5,.5,.5);actual.scale.setScalar(2);actual.updateMatrixWorld(true);assertSameWorldGeometry(actual,expected);
});
test('world comparison rejects a half-millimetre movement even when encoded arrays are unchanged',()=>{
 const expected=mesh(),actual=mesh();actual.position.x=.0005;actual.updateMatrixWorld(true);assert.throws(()=>assertSameWorldGeometry(actual,expected),/moved vertex or altered normal/);
});
test('world comparison rejects an altered normal field and a material-role change',()=>{
 const expected=mesh(),actual=mesh(),n=actual.geometry.attributes.normal;for(let i=0;i<n.count;i++)n.setXYZ(i,-n.getX(i),-n.getY(i),-n.getZ(i));assert.throws(()=>assertSameWorldGeometry(actual,expected),/moved vertex or altered normal/);
 const recoloured=mesh();recoloured.material.name='RoofPaint';assert.throws(()=>assertSameWorldGeometry(recoloured,expected),/material role changed/);
});
