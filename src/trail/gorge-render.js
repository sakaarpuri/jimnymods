import * as T from 'three';
import {gorgeDepth} from './gorge-gauntlet.js';
import {sectionWaterMaterial} from './section-water.js';
import {createScannedRock} from './scanned-rocks.js';

// The cut bed and cliffs below are shared with Rapier. Water and spray are
// non-solid effects inside the explicit no-driving zone, never a ford.
export function createGorge(world,parent){
 if(!world.gorgeSolids?.length)return;
 const group=new T.Group();group.name='Closed-course gorge / physical fall zone';parent.add(group);
 const scan=createScannedRock('gorge-cliff','urban'),rock=scan?.material||new T.MeshStandardMaterial({color:'#655e51',roughness:.97});scan?.geometry.dispose();
 for(const key of ['map','normalMap','roughnessMap','aoMap'])if(rock[key]){rock[key]=rock[key].clone();rock[key].wrapS=rock[key].wrapT=T.RepeatWrapping;rock[key].needsUpdate=true;}
 rock.color.set('#c4c0b5');
 rock.onBeforeCompile=s=>{
  s.vertexShader='varying vec3 gorgeP;\n'+s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ngorgeP=(modelMatrix*vec4(transformed,1.)).xyz;');
  s.fragmentShader='varying vec3 gorgeP;\n'+s.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
   float strata=sin(gorgeP.y*1.7+sin(gorgeP.z*.61)*.5+sin(gorgeP.x*.4));
   float fine=fract(sin(dot(floor(gorgeP*42.),vec3(12.9,78.2,37.7)))*43758.5);
   float seams=smoothstep(.78,.96,abs(strata));
   diffuseColor.rgb*=.77+.14*sin(gorgeP.z*.48+gorgeP.y*.29)+fine*.15;
   diffuseColor.rgb*=1.-seams*.09;
  `);
 };rock.customProgramCacheKey=()=> 'gorge-strata-v1';
 for(const o of world.gorgeSolids){let geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(o.vertices,3));geometry.setIndex(o.indices);const indexed=geometry;geometry=geometry.toNonIndexed();indexed.dispose();geometry.computeVertexNormals();const p=geometry.attributes.position,n=geometry.attributes.normal,uv=[];for(let i=0;i<p.count;i++){if(Math.abs(n.getY(i))>.65)uv.push(p.getX(i)*.13,p.getZ(i)*.13);else if(Math.abs(n.getX(i))>Math.abs(n.getZ(i)))uv.push(p.getZ(i)*.13,p.getY(i)*.13);else uv.push(p.getX(i)*.13,p.getY(i)*.13);}geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));const mesh=new T.Mesh(geometry,rock);mesh.position.set(o.x,o.y+o.height/2,o.z);mesh.castShadow=mesh.receiveShadow=true;mesh.userData.obstacleId=o.id;group.add(mesh);}
 // Sample the same carved bank: no water extends onto dry ground.
 const pos=[],uv=[],idx=[];for(let z=-75;z<=-18;z+=.5){let left=NaN,right=NaN;for(let x=124;x<=155;x+=.25)if(gorgeDepth(x,z)>1.16){if(!Number.isFinite(left))left=x;right=x;}if(!Number.isFinite(left))continue;const n=pos.length/3;pos.push(left,-1.12,z,right,-1.12,z);uv.push(0,z/10,1,z/10);if(n)idx.push(n-2,n,n-1,n-1,n,n+1);}
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(pos,3));geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geometry.setIndex(idx);geometry.computeVertexNormals();
 const water=sectionWaterMaterial([{x:151,z:-45,radius:3}]),pool=new T.Mesh(geometry,water);pool.name='Forbidden gorge pool';pool.onBeforeRender=()=>water.userData.flowTime.value=performance.now()/1000;pool.receiveShadow=true;group.add(pool);
 // A thin turbulent sheet down the solid east-bank face, not a turquoise wall.
 const fallMat=new T.MeshStandardMaterial({color:'#d6ded6',transparent:true,opacity:.78,roughness:.42,side:T.DoubleSide,depthWrite:false});
 const time={value:0};fallMat.onBeforeCompile=s=>{s.uniforms.fallTime=time;s.vertexShader='varying vec2 fallUv;\n'+s.vertexShader.replace('#include <uv_vertex>','#include <uv_vertex>\nfallUv=uv;');s.fragmentShader=`varying vec2 fallUv;uniform float fallTime;
 float fallHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float fallNoise(vec2 p){vec2 a=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(fallHash(a),fallHash(a+vec2(1,0)),f.x),mix(fallHash(a+vec2(0,1)),fallHash(a+vec2(1,1)),f.x),f.y);}
 `+s.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
  vec2 flow=vec2(fallUv.x*16.,fallUv.y*7.+fallTime*2.7);
  float broad=fallNoise(flow*.6),ribbons=fallNoise(flow*vec2(2.3,.8)+broad*.7),spray=fallNoise(flow*vec2(4.1,3.7));
  float edgeShift=(fallNoise(vec2(fallUv.y*3.+fallTime*.3,2.7))-.5)*.10;
  float edge=smoothstep(0.,.18,fallUv.x+edgeShift)*smoothstep(0.,.18,1.-fallUv.x+edgeShift);
  diffuseColor.rgb*=.8+.2*spray;
  diffuseColor.a*=edge*(.2+broad*.35+ribbons*.45)*(1.-smoothstep(.88,1.,fallUv.y));
 `);};fallMat.customProgramCacheKey=()=> 'gorge-fall-v1';
 // Drape the sheet over the actual fractured face. A flat rectangle floating
 // in front of the cliff loses both depth cues and the source of the water.
 group.updateMatrixWorld(true);const walls=group.children.filter(o=>o.userData.obstacleId),ray=new T.Raycaster(),fallPos=[],fallUv=[],fallIndices=[],rows=36,cols=18,sourceHeights=[];
 for(let col=0;col<=cols;col++){const z=-47.35+col/cols*4.7;let top=8;for(let y=13;y>7;y-=.12){ray.set(new T.Vector3(146,y,z),new T.Vector3(1,0,0));const hit=ray.intersectObjects(walls,false)[0];if(hit&&hit.point.x<155.8){top=y-.15;break;}}sourceHeights.push(top);}
 for(let row=0;row<=rows;row++)for(let col=0;col<=cols;col++){const v=row/rows,u=col/cols,y=-1.10+v*(sourceHeights[col]+1.10),z=-47.35+u*4.7;ray.set(new T.Vector3(146,y,z),new T.Vector3(1,0,0));const hit=ray.intersectObjects(walls,false)[0];fallPos.push((hit?.point.x??154)-.065,y,z);fallUv.push(u,v);}
 for(let row=0;row<rows;row++)for(let col=0;col<cols;col++){const a=row*(cols+1)+col,b=a+cols+1;fallIndices.push(a,a+1,b,a+1,b+1,b);}
 const fallGeometry=new T.BufferGeometry();fallGeometry.setAttribute('position',new T.Float32BufferAttribute(fallPos,3));fallGeometry.setAttribute('uv',new T.Float32BufferAttribute(fallUv,2));fallGeometry.setIndex(fallIndices);fallGeometry.computeVertexNormals();
 const fall=new T.Mesh(fallGeometry,fallMat);fall.onBeforeRender=()=>time.value=performance.now()/1000;group.add(fall);
 const foamMat=new T.MeshBasicMaterial({color:'#d6ded6',transparent:true,opacity:.26,depthWrite:false,side:T.DoubleSide});
 foamMat.onBeforeCompile=s=>{s.vertexShader='varying vec2 foamUv;\n'+s.vertexShader.replace('#include <uv_vertex>','#include <uv_vertex>\nfoamUv=uv;');s.fragmentShader='varying vec2 foamUv;\n'+s.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\ndiffuseColor.a*=1.-smoothstep(.05,.5,length(foamUv-.5));');};foamMat.customProgramCacheKey=()=> 'gorge-soft-spray-v1';
 for(let i=0;i<5;i++){const foam=new T.Mesh(new T.CircleGeometry(1.3+i*.26,18),foamMat);foam.rotation.x=-Math.PI/2;foam.scale.y=.6;foam.position.set(152.2-i*.6,-1.105+i*.001,-45+Math.sin(i)*.6);group.add(foam);}
 return group;
}
