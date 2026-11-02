import * as T from 'three';
import {FRONT_GUARD_SURFACE as fit} from './jimnyworx-front-surface.js';
import {FRONT_GUARD_TREAD} from './jimnyworx-front-tread.js';
const backingGap=.0025,sheetThickness=.0018;
// Interpolate the same fitted surface for skins and raised tread. The guard's
// lower edge stays inside the painted boundary rather than spanning the arch.
export function frontGuardSample(side,u,y,lift=0){
 const data=fit.sets.find(s=>s.side===side),c=Math.max(0,Math.min(fit.cols-1e-9,u/fit.width*fit.cols)),i=Math.floor(c),t=c-i;
 const bottom=data.bottom[i]*(1-t)+data.bottom[i+1]*t;
 const r=Math.max(0,Math.min(fit.rows-1e-9,(y-bottom)/(fit.top-bottom)*fit.rows)),j=Math.floor(r),v=r-j;
 const a=data.samples[i*(fit.rows+1)+j],b=data.samples[(i+1)*(fit.rows+1)+j],d=data.samples[i*(fit.rows+1)+j+1],e=data.samples[(i+1)*(fit.rows+1)+j+1];
 const val=k=>(a[k]*(1-t)+b[k]*t)*(1-v)+(d[k]*(1-t)+e[k]*t)*v;
 const normal=new T.Vector3(val(3),val(4),val(5)).normalize(),position=new T.Vector3(val(0),val(1),val(2)).addScaledVector(normal,lift);
 return{position,normal,bottom};
}
export function addFittedFrontCornerGuards(group,material){
 for(const data of fit.sets){const side=data.side,positions=[],indices=[],stride=fit.rows+1,layer=(fit.cols+1)*stride;
  for(const lift of[backingGap+sheetThickness,backingGap])for(const s of data.samples)positions.push(s[0]+s[3]*lift,s[1]+s[4]*lift,s[2]+s[5]*lift);
  const quad=(a,b,c,d)=>indices.push(a,b,c,a,c,d);
  for(let c=0;c<fit.cols;c++)for(let r=0;r<fit.rows;r++){const a=c*stride+r,b=a+stride;quad(a,b,b+1,a+1);quad(a+layer,a+1+layer,b+1+layer,b+layer);}
  for(let c=0;c<fit.cols;c++){let a=c*stride,b=a+stride;quad(a,a+layer,b+layer,b);a+=fit.rows;b+=fit.rows;quad(a,b,b+layer,a+layer);}
  for(let r=0;r<fit.rows;r++){let a=r;quad(a,a+1,a+1+layer,a+layer);a=fit.cols*stride+r;quad(a,a+layer,a+1+layer,a+1);}
  if(side>0)for(let i=0;i<indices.length;i+=3)[indices[i+1],indices[i+2]]=[indices[i+2],indices[i+1]];
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.setIndex(indices);geo.computeVertexNormals();
  const skin=new T.Mesh(geo,material);skin.name='Front formed corner guard';skin.castShadow=skin.receiveShadow=true;skin.userData.cornerGuard={side,end:1,height:fit.top-Math.min(...data.bottom),continuousReturn:true,fittedRevision:43,backingGap,sheetThickness};group.add(skin);
  const tread=FRONT_GUARD_TREAD.find(t=>t.side===side),stamps=tread.stamps;
  const shape=new T.Shape();shape.moveTo(0,.010);shape.quadraticCurveTo(.004,.004,.004,0);shape.quadraticCurveTo(.004,-.004,0,-.010);shape.quadraticCurveTo(-.004,-.004,-.004,0);shape.quadraticCurveTo(-.004,.004,0,.010);
  const emboss=new T.ExtrudeGeometry(shape,{depth:.001,bevelEnabled:true,bevelSize:.0008,bevelThickness:.0007,bevelSegments:2,curveSegments:4}),inst=new T.InstancedMesh(emboss,material,stamps.length);
  const matrix=new T.Matrix4();
  for(let i=0;i<stamps.length;i++)inst.setMatrixAt(i,matrix.fromArray(tread.matrices,i*16));
  inst.name='Front raised diamond tread';inst.castShadow=inst.receiveShadow=true;inst.userData.fittedRevision=43;inst.userData.stamps=stamps;inst.userData.side=side;group.add(inst);
 }
}
