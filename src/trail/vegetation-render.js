import * as T from 'three';
import {vegetationLayout,vegetationHash as hash} from './vegetation-layout.js';
import {riverCentre} from './world-exploration.js';
import {sectionWaterExclusion} from './himachal-section.js';
import {sectionShoulderDistance} from './himachal-dressing.js';
import {authoredPinesReady,createAuthoredPines,attachAuthoredPineNearFade} from './authored-pines.js';

let pineTextures=null,pineRequest=null,pineGeneration=0;
export function preloadVegetationAssets(){
 if(pineTextures)return Promise.resolve(true);
 if(typeof document==='undefined')return Promise.resolve(false);
 if(pineRequest)return pineRequest;
 const generation=pineGeneration;
 const request=Promise.allSettled(['diff','alpha','nor_gl'].map(suffix=>Promise.resolve().then(()=>new T.TextureLoader().loadAsync(`assets/vegetation/pine-twig-${suffix}.webp`)))).then(results=>{
  const textures=results.filter(r=>r.status==='fulfilled').map(r=>r.value);
  // A failed sibling must not leak already-loaded maps. A disposed scene must
  // not be resurrected by an older request finishing after the next scene.
  if(generation!==pineGeneration||textures.length!==3){textures.forEach(t=>t.dispose());return false;}
  textures[0].colorSpace=T.SRGBColorSpace;textures.forEach(t=>{t.anisotropy=4;t.wrapS=t.wrapT=T.ClampToEdgeWrapping;});pineTextures=textures;return true;
 }).finally(()=>{if(pineRequest===request)pineRequest=null;});
 pineRequest=request;return request;
}
export function disposeVegetationAssets(){pineGeneration++;pineTextures?.forEach(t=>t.dispose());pineTextures=null;pineRequest=null;}
export function vegetationAssetsReady(){return !!pineTextures;}

function photographedTwigGeometry(){
 // The verified atlas's upper-left island is a twig. Everything outside this
 // polygon includes opaque cone/bark UV padding: never apply the whole atlas.
 const outline=[[40,40],[224,40],[223,260],[144,332],[45,300]],positions=[],uv=[],indices=[],normals=[];
 for(const angle of [0,Math.PI/2]){
  const start=positions.length/3;
  for(const [px,py]of outline){const x=(px-139)/245,z=(332-py)/292;positions.push(x*Math.cos(angle),x*Math.sin(angle)-z*.12,z);uv.push(px/1024,1-py/1024);const n=new T.Vector3(0,1,.2).normalize();normals.push(n.x,n.y,n.z);}
  for(let i=1;i<outline.length-1;i++)indices.push(start,start+i,start+i+1);
 }
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geometry.setAttribute('normal',new T.Float32BufferAttribute(normals,3));geometry.setIndex(indices);return geometry;
}

function photographedTwigMaterial(){
 const textures=pineTextures.map(t=>t.clone());textures.forEach(t=>t.needsUpdate=true);
 const material=new T.MeshStandardMaterial({name:'CC0 photographed pine needles',map:textures[0],alphaMap:textures[1],normalMap:textures[2],normalScale:new T.Vector2(.32,.32),roughness:1,metalness:0,envMapIntensity:.12,alphaTest:.30,side:T.DoubleSide,shadowSide:T.DoubleSide});
 // Balance living green needles only; preserve the photograph's brown twig
 // stems. This modifies albedo, not lighting/emission, so shadows stay honest.
 material.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
  float livingNeedle = smoothstep(.004,.035,diffuseColor.g-diffuseColor.b);
  diffuseColor.rgb = mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.68,1.05,.70),livingNeedle);
 `);};
 material.customProgramCacheKey=()=> 'pine-living-needle-balance-v2';
 material.userData.terrainTextures=textures;return material;
}

// Keep this equivalent to environment.clearRiverSurface: in particular the
// long graded bridge approaches must not become a patch of decorative grass.
export function vegetationClearsRiver(world,x,z){
 const r=world.river;
 if(world.himachalSection&&sectionWaterExclusion(x,z))return true;
 return !!r&&((x>r.minX-2&&x<r.maxX+2&&Math.abs(z-riverCentre(x))<r.width/2+7)||(Math.abs(x-r.bridgeX)<r.bridgeWidth/2+1&&Math.abs(z-r.bridgeZ)<220));
}

// Original deterministic cutouts, created without DOM/canvas or downloaded
// artwork. Small opaque needles/leaves have real negative space between them.
// Alpha testing + depth writes avoids the sorting artifacts of translucent
// tree billboards; three intersecting planes give each branch real volume.
function cutoutTexture(kind,size=256){
 const pixels=new Uint8Array(size*size*4);
 function dot(x,y,r,light){
  for(let py=Math.max(0,Math.floor(y-r-1));py<=Math.min(size-1,Math.ceil(y+r+1));py++)for(let px=Math.max(0,Math.floor(x-r-1));px<=Math.min(size-1,Math.ceil(x+r+1));px++){
   const coverage=T.MathUtils.clamp(r+.65-Math.hypot(px-x,py-y),0,1),i=(py*size+px)*4;
   if(coverage*255<pixels[i+3])continue;
   pixels[i]=light;pixels[i+1]=Math.min(255,light+8);pixels[i+2]=light-10;pixels[i+3]=Math.round(coverage*255);
  }
 }
 function line(x0,y0,x1,y1,r,light){const steps=Math.ceil(Math.hypot(x1-x0,y1-y0)*1.7);for(let i=0;i<=steps;i++){const f=i/Math.max(1,steps);dot(x0+(x1-x0)*f,y0+(y1-y0)*f,r,light);}}
 if(kind==='fine-needles'){
  // A single small branchlet, not an entire fern-shaped canopy on a card.
  // Unequal paired needle bundles leave broad holes even after mip filtering.
  line(128,12,119,240,2.3,112);
  for(let i=0;i<17;i++){
   const y=24+i*12.0,cx=128-i*.48,span=(1-i/22)*(65+hash(i,61)*38);
   for(const side of [-1,1]){
    line(cx,y,cx+side*span*.75,y+18,3.8,155+Math.floor(hash(i,side)*35));
    for(let j=0;j<9;j++){
    const baseY=y+(hash(i*11+j,side)-.5)*7,reach=span*(.6+hash(j,i)*.4);
    line(cx,baseY,cx+side*reach,baseY+13+hash(j+17,i)*15,1.2,158+Math.floor(hash(j,i+4)*61));
    }
   }
  }
 }else if(kind==='needles'){
  line(128,13,128,239,1.5,132);
  for(let i=0;i<23;i++){
   const y=27+i*8.8,t=i/23,width=(1-t*.78)*(72+hash(i,3)*26);
   for(const side of [-1,1]){
    const ex=128+side*width,ey=y+19+hash(i,side)*16;
    line(128,y,ex,ey,.8,143);
    for(let j=0;j<15;j++){
     const f=(j+.4)/15,x=128+(ex-128)*f,cy=y+(ey-y)*f,len=11+hash(i+j*3,side)*12;
     line(x,cy,x+side*len*.45,cy+len,.95,150+Math.floor(hash(i,j)*49));
     line(x,cy,x+side*len*.8,cy-len*.35,.85,145+Math.floor(hash(j,i)*48));
    }
   }
  }
 }else if(kind==='leaves'){
  for(let b=0;b<9;b++){
   const ex=28+hash(b,7)*200,ey=118+hash(b,19)*115;
   line(128,10,ex,ey,1.2,126);
   for(let j=2;j<18;j++){
    const f=j/18,x=128+(ex-128)*f,y=10+(ey-10)*f;
    const side=j%2?1:-1,dx=side*(5+hash(b,j)*12),dy=3+hash(j,b)*10;
    line(x,y,x+dx,y+dy,.65,145);
    dot(x+dx,y+dy,3.2+hash(j,b+3)*2.5,164+Math.floor(hash(b,j+9)*64));
   }
  }
 }else{
  for(let i=0;i<19;i++){
   const bx=80+hash(i,2)*96,ex=14+hash(i,5)*228,top=95+hash(i,9)*145;
   let px=bx,py=5;
   for(let k=1;k<=15;k++){const f=k/15,x=bx+(ex-bx)*f*f,y=5+(top-5)*f;line(px,py,x,y,2.2*(1-f)+.35,145+Math.floor(hash(i,k)*77));px=x;py=y;}
  }
 }
 const texture=new T.DataTexture(pixels,size,size);texture.colorSpace=T.SRGBColorSpace;texture.generateMipmaps=true;texture.minFilter=T.LinearMipmapLinearFilter;texture.magFilter=T.LinearFilter;texture.needsUpdate=true;texture.name=`Original ${kind} cutout`;return texture;
}

function barkTexture(){
 const width=128,height=256,data=new Uint8Array(width*height*4);
 for(let y=0;y<height;y++)for(let x=0;x<width;x++){
  const groove=hash(Math.floor((x+Math.sin(y*.035)*2)/4),Math.floor(y/25)),grain=hash(x,y),v=58+groove*48+grain*21,i=(y*width+x)*4;
  data[i]=v+8;data[i+1]=v;data[i+2]=v-10;data[i+3]=255;
 }
 const texture=new T.DataTexture(data,width,height);texture.colorSpace=T.SRGBColorSpace;texture.wrapS=texture.wrapT=T.RepeatWrapping;texture.repeat.set(2,3);texture.generateMipmaps=true;texture.minFilter=T.LinearMipmapLinearFilter;texture.needsUpdate=true;texture.name='Original bark fissures';return texture;
}

function crossedSpray(horizontal=false,single=false){
 const positions=[],uv=[],indices=[],normals=[];
 for(const angle of single===2?[0,Math.PI/2]:single?[0]:[0,Math.PI/3,-Math.PI/3]){
  const start=positions.length/3;
  for(const [x,y,v]of [[-.5,0,0],[.5,0,0],[-.5,1,1],[.5,1,1]]){
   // Vertical clusters for shrubs; branch sprays run outwards with an uneven
   // cross-section, rather than presenting one flat horizontal star silhouette.
   if(horizontal)positions.push(x*Math.cos(angle),x*Math.sin(angle)-y*.12,y);
   else positions.push(x*Math.cos(angle),y,x*Math.sin(angle));
   // Bent foliage normals describe a rounded needle bundle instead of the
   // three invisible support cards. This removes hard triangular light bands.
   const normal=horizontal?new T.Vector3(x*.3,.96,(y-.5)*.2):new T.Vector3(Math.sin(angle)*.65,.76,Math.cos(angle)*.65);
   normal.normalize();normals.push(normal.x,normal.y,normal.z);
   uv.push(x+.5,v);
  }
  indices.push(start,start+1,start+2,start+2,start+1,start+3);
 }
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setAttribute('normal',new T.Float32BufferAttribute(normals,3));g.setIndex(indices);return g;
}

function foliageMaterial(kind){
 // Matte diffuse needles avoid the artificial white specular rims produced by
 // intersecting PBR cards. Coverage remains a hard depth-tested cutout, not a
 // bright MSAA fringe blended against the sky.
 const texture=cutoutTexture(kind),material=new T.MeshLambertMaterial({name:`${kind} vegetation`,map:texture,alphaTest:kind==='fine-needles'?.32:.38,side:T.DoubleSide,shadowSide:T.DoubleSide});
 if(kind==='fine-needles')texture.anisotropy=4;
 // The existing scene disposer explicitly owns these textures on world reload.
 material.userData.terrainTextures=[texture];return material;
}

function populate(parent,name,geometry,material,items,shadow=true){
 if(!items.length){geometry.dispose();material.userData.terrainTextures?.forEach(t=>t.dispose());material.dispose();return null;}
 const mesh=new T.InstancedMesh(geometry,material,items.length),dummy=new T.Object3D();mesh.name=name;
 items.forEach((p,i)=>{dummy.position.set(...p.position);dummy.rotation.set(...(p.rotation||[0,0,0]));if(p.quaternion)dummy.quaternion.copy(p.quaternion);dummy.scale.set(...p.scale);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);if(p.colour)mesh.setColorAt(i,new T.Color(p.colour));});
 mesh.castShadow=shadow;mesh.receiveShadow=true;mesh.computeBoundingBox();mesh.computeBoundingSphere();parent.add(mesh);
 if(parent.userData.authoredPines&&items.every(p=>p.lodRoot))parent.userData.pineFadeDisposers.push(attachAuthoredPineNearFade(mesh,items.map(p=>p.lodRoot),parent.userData.authoredPines));
 return mesh;
}

function safeCover(world,x,z){
 if(world.routeDistance(x,z)<world.course.width*.5+1.3||Math.hypot(x,z)<18||vegetationClearsRiver(world,x,z))return false;
 if(world.terrainElements?.some(e=>Math.hypot(x-e.x,z-e.z)<24))return false;
 if(world.obstacles?.some(o=>Math.hypot(x-o.x,z-o.z)<(o.radius||Math.hypot(o.width||0,o.depth||0)/2)+1.1))return false;
 if(world.landmarks?.some(l=>l.parts.some(p=>p.solid&&Math.hypot(x-p.x,z-p.z)<Math.hypot(p.width,p.depth)/2+1.1)))return false;
 return true;
}

export function buildVegetationGeometry(world,parent){
 const root=new T.Group();root.name='Layered vegetation';parent.add(root);
 const sand=world.course.theme==='sand',urban=world.course.theme==='urban',trees=vegetationLayout(world),trunks=[],needles=[],fineNeedles=[],boughs=[],crowns=[],shrubs=[],grass=[],sectionGrass=[];
 const authored=world.mountainExtension&&authoredPinesReady()?createAuthoredPines(trees,{fadeStart:55,fadeEnd:70}):null;
 if(authored){
  root.userData.authoredPines=authored;root.userData.pineFadeDisposers=[];root.add(authored);
  root.userData.update=camera=>authored.userData.update(camera);
  let disposed=false;root.userData.dispose=()=>{if(disposed)return;disposed=true;root.userData.pineFadeDisposers.forEach(dispose=>dispose());authored.userData.dispose();};
 }
 const treeBatches=[trunks,needles,fineNeedles,boughs,crowns];
 for(const t of trees){
  const starts=treeBatches.map(batch=>batch.length);
  // Root centre, height and radius remain exactly shared with trunk collisions.
  trunks.push({position:[t.x,t.y+t.height*.5,t.z],scale:[t.radius,t.height,t.radius],rotation:[0,t.seed*Math.PI*2,0]});
  if(t.species==='acacia'){
   for(let k=0;k<11;k++){
    const a=k*2.4+t.seed*6.28,r=t.height*(.15+hash(k,t.seed)*.25),w=t.height*(.38+hash(k,7)*.18);
    crowns.push({position:[t.x+Math.sin(a)*r,t.y+t.height*(.65+hash(k,2)*.13),t.z+Math.cos(a)*r],scale:[w,w*.55,w],rotation:[.12,a,0],colour:k%2?'#829063':'#697e52'});
   }
  }else if(world.himachalSection&&t.x>world.himachalSection.bounds.minX-25&&t.x<world.himachalSection.bounds.maxX+25&&t.z>world.himachalSection.bounds.minZ-25&&t.z<world.himachalSection.bounds.maxZ+25){
   // Nearby pines have real tapered limbs with small, separated branchlets.
   // Single irregularly rolled cutouts are only twig-sized, avoiding enormous
   // intersecting sheets. Distant trees and other courses keep the old budget.
   for(let b=0;b<40;b++){
    const f=(b+hash(b,t.seed)*.75)/40,a=b*2.39996+t.seed*6.28;
    const length=t.height*(.23+hash(b,31)*.065)*Math.pow(1-f,.72);
    const y=t.y+t.height*(.21+f*.72),droop=length*(.10+hash(b,t.seed+7)*.14);
    const start=new T.Vector3(t.x,y,t.z),end=new T.Vector3(t.x+Math.sin(a)*length,y-droop,t.z+Math.cos(a)*length);
    const vector=end.clone().sub(start),r=.016+(1-f)*.025;
    boughs.push({position:start.clone().add(end).multiplyScalar(.5).toArray(),scale:[r,vector.length(),r],quaternion:new T.Quaternion().setFromUnitVectors(new T.Vector3(0,1,0),vector.normalize())});
    for(let k=0;k<10;k++){
     const along=.06+k*.099,side=k%2?1:-1,offset=length*(.035+hash(k,b)*.115)*side,tip=.70+length*.31;
     fineNeedles.push({position:[t.x+Math.sin(a)*length*along+Math.cos(a)*offset,y-droop*along+(hash(b,k)-.5)*.15,t.z+Math.cos(a)*length*along-Math.sin(a)*offset],scale:[tip,tip,tip],rotation:[.08+hash(k,b)*.44,a+side*(.35+hash(k,t.seed)*.5),(hash(b,k+3)-.5)*1.8],colour:b%3===0?'#7d925b':b%3===1?'#596f43':'#6a804d'});
    }
    // Short interior shoots fill the natural crown core instead of exposing a
    // bare pole through every tier. They share the same instanced draw call.
    for(let k=0;k<3;k++){
     const along=.025+k*.10,tip=(.70+length*.31)*(.78+hash(k,b)*.12);
     fineNeedles.push({position:[t.x+Math.sin(a)*length*along,y-droop*along+.08,t.z+Math.cos(a)*length*along],scale:[tip,tip,tip],rotation:[-.28+hash(k,b)*.6,a+(k-1)*1.05,(hash(k,b+7)-.5)*1.4],colour:'#71864f'});
    }
   }
  }else if(world.mountainExtension&&pineTextures){
   // The extended drive passes trees that were formerly only distant scenery.
   // A lower-density version of the SAME photographed crown avoids switching
   // from fine needles to enormous opaque fern silhouettes along that road.
   for(let b=0;b<22;b++){
    const f=(b+hash(b,t.seed)*.7)/22,a=b*2.39996+t.seed*6.28;
    const length=t.height*(.25+hash(b,31)*.05)*Math.pow(1-f,.72),y=t.y+t.height*(.22+f*.75);
    for(let k=0;k<3;k++){
     const along=.18+k*.30,tip=.60+length*.43;
     fineNeedles.push({position:[t.x+Math.sin(a)*length*along,y-length*.16*along,t.z+Math.cos(a)*length*along],scale:[tip,tip,tip],rotation:[.12,a+(k-1)*.47,(hash(b,k)-.5)*1.2],colour:'#ffffff'});
    }
   }
  }else{
   // Every limb has a different height and angle. Radial rings at common
   // heights read as flat shelves even with good alpha masks, especially far
   // away; a golden-angle spiral produces an irregular, overlapping crown.
   for(let b=0;b<62;b++){
    const f=(b+hash(b,t.seed)*.7)/62,spread=t.height*.28*(1-f*.89),a=b*2.39996+t.seed*6.28,jitter=.82+hash(b,t.seed+11)*.36;
    needles.push({position:[t.x+Math.sin(a)*spread*.12,t.y+t.height*(.20+f*.74)+(hash(b,t.seed+2)-.5)*spread*.19,t.z+Math.cos(a)*spread*.12],scale:[spread*1.12*jitter,spread*.95,spread*1.03*jitter],rotation:[.19+hash(b,t.seed+3)*.34,a,(hash(b,9)-.5)*.4],colour:b%3===0?'#879561':b%3===1?'#6b8456':'#7e925e'});
   }
   needles.push({position:[t.x,t.y+t.height*.88,t.z],scale:[t.height*.11,t.height*.07,t.height*.14],rotation:[-Math.PI/2,t.seed*6.28,0],colour:'#8b9d66'});
  }
  if(world.mountainExtension&&pineTextures&&t.species==='pine'){
   // Upright living leader and its surrounding shoots cover the tapering tip.
   // They replace six medium-bough sprays, not seven giant extra canopy cards.
   for(let k=0;k<7;k++){
    const ring=k<3?0:k<6?1:2,a=k*2.39996+t.seed*6.28,spread=ring===2?0:t.height*(ring===0?.025:.012),tip=t.height*(ring===0?.060:ring===1?.049:.038);
    fineNeedles.push({position:[t.x+Math.sin(a)*spread,t.y+t.height*(ring===0?.91:ring===1?.95:.972),t.z+Math.cos(a)*spread],scale:[tip*.78,tip*.78,tip],rotation:[-1.15-ring*.18,a,(hash(k,t.seed)-.5)*.45],colour:'#ffffff'});
   }
  }
  if(authored)for(let batch=0;batch<treeBatches.length;batch++)for(let i=starts[batch];i<treeBatches[batch].length;i++)treeBatches[batch][i].lodRoot=[t.x,t.y,t.z];
 }
 const bark=barkTexture(),barkMaterial=new T.MeshStandardMaterial({name:'Fissured bark',map:bark,roughness:1,envMapIntensity:.1});barkMaterial.userData.terrainTextures=[bark];
 const trunk=populate(root,'Shared collision trunks',new T.CylinderGeometry((world.mountainExtension&&pineTextures) ? .06 : .42,1,1,9),barkMaterial,trunks);if(trunk)trunk.userData.trunkIds=trees.map(t=>t.id);
 populate(root,'Layered evergreen sprays',crossedSpray(true),foliageMaterial('needles'),needles);
 if(world.himachalSection){
  // Photographed needles already carry their green albedo. Applying the old
  // procedural green tint a second time made the crown read as black twigs.
  if(pineTextures)fineNeedles.forEach((p,i)=>p.colour=['#ffffff','#f4f6ef','#fafbf7'][i%3]);
  populate(root,'Himachal fine needle branchlets',pineTextures?photographedTwigGeometry():crossedSpray(true,2),pineTextures?photographedTwigMaterial():foliageMaterial('fine-needles'),fineNeedles);
  populate(root,'Himachal tapered boughs',new T.CylinderGeometry(.16,1,1,3,1,true),new T.MeshStandardMaterial({color:'#544737',roughness:1,envMapIntensity:.08}),boughs,false);
 }
 populate(root,'Acacia crown sprays',crossedSpray(),foliageMaterial('leaves'),crowns);
 if(!urban){
  const step=sand?13:8;
  for(let gx=world.bounds.minX+3;gx<world.bounds.maxX-3;gx+=step)for(let gz=world.bounds.minZ+3;gz<world.bounds.maxZ-3;gz+=step){
   const n=hash(gx,gz),x=gx+(n-.5)*step*.8,z=gz+(hash(gz,gx)-.5)*step*.8;
   // A broad probability field creates uneven patches, not a visible grid of
   // equally sized tufts. Keep everything decorative below about a metre.
   const patch=hash(Math.floor(gx/32),Math.floor(gz/32)),distance=world.routeDistance(x,z);
   if(n>(sand?.17:distance<65?.72:.24)*(patch>.35?1:.3)||!safeCover(world,x,z))continue;
   const h=sand?.32+n*.6:.32+n*.56;
   if(n>.12)shrubs.push({position:[x,world.height(x,z),z],scale:[h*(sand?1.7:1.4),h,h*1.4],rotation:[0,n*6.28,0],colour:sand?'#9a9764':n>.45?'#89905c':'#697c48'});
   for(let k=0;k<(sand?3:5);k++){
    const a=k*2.4+n*6.28,r=.35+hash(gx+k,gz)*1.3,px=x+Math.sin(a)*r,pz=z+Math.cos(a)*r;
    if(!safeCover(world,px,pz))continue;
    const g=.22+hash(k,gx)*.38;grass.push({position:[px,world.height(px,pz),pz],scale:[g*1.35,g,g*1.35],rotation:[0,a,0],colour:sand?'#b3a774':k%2?'#9b9c66':'#7c8c54'});
   }
  }
  // The extended road needs a living verge as well as a dirt ribbon. Short,
  // uneven grass stands follow its actual shoulders, not an unrelated grid.
  for(const road of world.mountainExtension?.roads||[])for(let i=0;i<road.points.length;i+=2){
   const p=road.points[i],q=road.points[Math.min(road.points.length-1,i+1)],a=Math.atan2(q.x-p.x,q.z-p.z);
   for(const side of [-1,1])for(let k=0;k<4;k++){
    if(hash(i,k+41)<.24)continue;
    const distance=road.width/2+3.2+k*1.8+hash(i+4,k)*1.7;
    const x=p.x+Math.cos(a)*side*distance,z=p.z-Math.sin(a)*side*distance;
    if(!safeCover(world,x,z))continue;
    const h=.24+hash(i,k+63)*.30;
    grass.push({position:[x,world.height(x,z),z],scale:[h*1.65,h,h*1.65],rotation:[0,hash(i,k)*6.28,0],colour:k%2?'#8e985f':'#687e45'});
   }
  }
  // Rock shoulders collect plants in sheltered pockets. These supplemental
  // patches use the actual obstacle footprint, not invented visual boulders,
  // and still leave every route/river/landmark clearance untouched.
  for(const [i,rock]of (world.obstacles||[]).filter(o=>o.type==='rock').slice(0,600).entries()){
   const radius=rock.radius||Math.hypot(rock.width||0,rock.depth||0)/2;
   for(let k=0;k<3;k++){
    const a=i*2.4+k*2.1,x=rock.x+Math.sin(a)*(radius+1.5),z=rock.z+Math.cos(a)*(radius+1.5);
    if(!safeCover(world,x,z))continue;
    const h=.3+hash(i,k)*.34;shrubs.push({position:[x,world.height(x,z),z],scale:[h*1.35,h,h*1.35],rotation:[0,a,0],colour:sand?'#9b976b':'#798c50'});
   }
  }
  // Ankle-high broken groundcover between the section's actual wheel lines.
  // Never fill the technical bed, bypass, descent or bridge approach. This
  // deliberately does not relax the safety rule for trees or tall shrubs.
  if(world.himachalSection){const b=world.himachalSection.bounds;
   for(let x=b.minX+1;x<b.maxX;x+=4.2)for(let z=b.minZ+1;z<b.maxZ;z+=4.2){
    const n=hash(x+73,z+21),cx=x+(n-.5)*2.4,cz=z+(hash(z,x)-.5)*2.4;
    // Broad connected patches, not evenly scattered isolated plugs. Local
    // centers stay irregular while the slower density field leaves soil gaps.
    const patch=(1+Math.sin(x*.13+Math.cos(z*.07))*Math.sin(z*.09))/2;
    if(n>.35+patch*.6)continue;
    for(let k=0;k<17;k++){
     const angle=k*2.39996+n*6.28,r=.18+Math.pow(hash(x+k,z),.65)*1.8,px=cx+Math.sin(angle)*r,pz=cz+Math.cos(angle)*r,shoulder=sectionShoulderDistance(world,px,pz);
     if(shoulder===null||shoulder<1.8||vegetationClearsRiver(world,px,pz))continue;
     if(world.obstacles?.some(o=>Math.hypot(px-o.x,pz-o.z)<(o.radius||Math.hypot(o.width||0,o.depth||0)/2)+.8))continue;
     if(world.landmarks?.some(l=>l.parts.some(p=>p.solid&&Math.hypot(px-p.x,pz-p.z)<Math.hypot(p.width,p.depth)/2+1.5)))continue;
     const safe=safeCover(world,px,pz),h=safe?.30+hash(k,x)*.35:.20+hash(k,x)*.15;sectionGrass.push({position:[px,world.height(px,pz),pz],scale:[.85+hash(k,z)*.5,h,.85+hash(k,z)*.5],rotation:[0,angle,0],colour:k%3?'#7f8e48':'#a49d5d'});
     if(k===0&&safeCover(world,px,pz)){
      const sh=.48+n*.38;shrubs.push({position:[px,world.height(px,pz),pz],scale:[1.35,sh,1.35],rotation:[0,angle,0],colour:'#6f8348'});
     }
    }
   }
  }
 }
 populate(root,'Clustered shrubs',crossedSpray(),foliageMaterial('leaves'),shrubs,false);
 const grassMaterial=foliageMaterial('grass');
 // A small diffuse fill keeps the back sides of cutout blades from appearing
 // as black scraps in the very bright Himachal ground plane. No extra light.
 if(world.himachalSection){grassMaterial.emissive.set('#394527');grassMaterial.emissiveIntensity=.3;}
 populate(root,'Clustered groundcover',crossedSpray(),grassMaterial,grass,false);
 if(world.himachalSection)populate(root,'Himachal grass tussocks',grassTussockGeometry(),new T.MeshLambertMaterial({color:'#ffffff',side:T.DoubleSide,vertexColors:true}),sectionGrass,false);
 root.userData.vegetation={trees:trees.length,branches:needles.length+fineNeedles.length+crowns.length,shrubs:shrubs.length,grass:grass.length+sectionGrass.length};
 return root;
}

function grassTussockGeometry(){
 const positions=[],indices=[],colours=[];
 for(let blade=0;blade<12;blade++){
  const a=blade*2.39996,r=hash(blade,13)*.28,x=Math.sin(a)*r,z=Math.cos(a)*r,h=.5+hash(blade,8)*.5,width=.009+hash(blade,21)*.008,lean=.2+hash(blade,4)*.35,start=positions.length/3;
  for(let level=0;level<3;level++){
   const f=level/2,w=width*(1-f*.96),cx=x+Math.sin(a)*lean*f*f,cz=z+Math.cos(a)*lean*f*f;
   for(const side of [-1,1]){positions.push(cx+Math.cos(a)*w*side,h*f,cz-Math.sin(a)*w*side);colours.push(.55+f*.4,.59+f*.4,.46+f*.36);}
  }
  for(let level=0;level<2;level++){const i=start+level*2;indices.push(i,i+1,i+2,i+2,i+1,i+3);}
 }
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new T.Float32BufferAttribute(colours,3));geometry.setIndex(indices);geometry.computeVertexNormals();return geometry;
}
