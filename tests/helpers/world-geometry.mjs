import assert from 'node:assert/strict';
import {Vector3,Matrix3} from 'three';
// Compare decoded world-space geometry, not quantized storage or vertex order.
// A 0.15mm bound covers 16-bit export rounding while rejecting visible movement.
export function assertSameWorldGeometry(actual,expected,{positionTolerance=.00015,normalAngleTolerance=.012,filter=()=>true,checkTriangles=true}={}){
 const records=o=>{const p=o.geometry.attributes.position,n=o.geometry.attributes.normal,nm=new Matrix3().getNormalMatrix(o.matrixWorld),v=new Vector3(),normal=new Vector3(),out=[];assert(n,'Missing normals on '+o.name);for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);if(!filter(v))continue;normal.fromBufferAttribute(n,i).applyMatrix3(nm).normalize();out.push({p:v.toArray(),n:normal.toArray()});}return out;};
 if(checkTriangles)assert.equal(actual.geometry.index?.count??actual.geometry.attributes.position.count,expected.geometry.index?.count??expected.geometry.attributes.position.count,actual.name+' triangle count changed');
 assert.equal(actual.material.name,expected.material.name,actual.name+' material role changed');
 const a=records(actual),b=records(expected);assert(a.length&&b.length,actual.name+' has no preserved samples');
 const step=positionTolerance*2,key=(x,y,z)=>`${x},${y},${z}`,cos=Math.cos(normalAngleTolerance);
 function direction(from,to){const bins=new Map();for(const r of to){const k=key(...r.p.map(v=>Math.floor(v/step)));if(!bins.has(k))bins.set(k,[]);bins.get(k).push(r);}for(const r of from){const cell=r.p.map(v=>Math.floor(v/step));let found=false,nearest=Infinity;for(let x=-1;x<=1&&!found;x++)for(let y=-1;y<=1&&!found;y++)for(let z=-1;z<=1&&!found;z++)for(const q of bins.get(key(cell[0]+x,cell[1]+y,cell[2]+z))||[]){const dist=Math.hypot(...r.p.map((v,i)=>v-q.p[i]));nearest=Math.min(nearest,dist);if(dist<=positionTolerance&&r.n.reduce((v,n,i)=>v+n*q.n[i],0)>=cos){found=true;break;}}assert(found,`${actual.name}: moved vertex or altered normal at ${r.p}; nearest position ${nearest}m`);}}
 direction(a,b);direction(b,a);return a.length;
}
