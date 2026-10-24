import * as T from 'three';

// The ribbon follows the same graded road sampler as the collision heightfield.
// It is a surface finish, not a floating road or an independent driving plane.
export function mountainRoadGeometry(world,road,offset=0,width=road.width){
 const positions=[],uv=[],indices=[],columns=8;
 road.points.forEach((p,i)=>{
  const before=road.points[Math.max(0,i-1)],after=road.points[Math.min(road.points.length-1,i+1)];
  const heading=Math.atan2(after.x-before.x,after.z-before.z);
  for(let j=0;j<=columns;j++){
   const lateral=offset+(j/columns-.5)*width,x=Math.fround(p.x+Math.cos(heading)*lateral),z=Math.fround(p.z-Math.sin(heading)*lateral);
   positions.push(x,world.height(x,z)+.035,z);uv.push(lateral,p.s);
  }
  if(i)for(let j=0;j<columns;j++){const a=(i-1)*(columns+1)+j,b=i*(columns+1)+j;indices.push(a,b,a+1,a+1,b,b+1);}
 });
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();return g;
}

export function createMountainRoads(world,parent){
 if(!world.mountainExtension)return null;
 const group=new T.Group();group.name='Playable mountain roads';
 const asphalt=new T.MeshStandardMaterial({color:'#555b5c',roughness:.94,metalness:0});
 asphalt.onBeforeCompile=s=>{
  s.vertexShader='varying vec2 roadUv;\n'+s.vertexShader;
  s.vertexShader=s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nroadUv=uv;');
  s.fragmentShader='varying vec2 roadUv;\nfloat aggregateHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}\nfloat roadNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(aggregateHash(i),aggregateHash(i+vec2(1,0)),f.x),mix(aggregateHash(i+vec2(0,1)),aggregateHash(i+1.0),f.x),f.y);}\n'+s.fragmentShader;
  s.fragmentShader=s.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
   float fleck=aggregateHash(floor(roadUv*130.0));
   float weather=roadNoise(roadUv*.3);
   float microFade=1.0-smoothstep(9.0,55.0,length(vViewPosition));
   diffuseColor.rgb*=.87+weather*.12+(fleck-.5)*.3*microFade;
   float wheelPolish=exp(-pow((abs(roadUv.x)-.8)/.27,2.0));
   diffuseColor.rgb*=1.0-wheelPolish*.055;
  `);
 };
 asphalt.customProgramCacheKey=()=> 'mountain-asphalt-v2';
 for(const road of world.mountainExtension.roads){
  if(road.kind!=='asphalt')continue;
  // The first14m are a loose turnout: transfer selection happens before tarmac.
  const paved={...road,points:road.points.filter(p=>p.s>=14)};
  const mesh=new T.Mesh(mountainRoadGeometry(world,paved),asphalt);mesh.name='Ridge road asphalt';mesh.receiveShadow=true;group.add(mesh);
  const paint=new T.MeshStandardMaterial({color:'#c8c6b5',roughness:1});
  // Sparse weathered edge dashes leave this a narrow hill road, not a motorway.
  for(const side of [-1,1])for(let start=20;start<road.length-8;start+=18){
   const points=road.points.filter(p=>p.s>=start&&p.s<=start+6);if(points.length<2)continue;
   const dash=new T.Mesh(mountainRoadGeometry(world,{...road,points},side*(road.width/2-.25),.1),paint);
   dash.position.y=.012;dash.receiveShadow=true;group.add(dash);
  }
 }
 parent.add(group);return group;
}
