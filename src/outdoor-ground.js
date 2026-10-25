import * as THREE from 'three';

// Outdoor scenery: the 360° photo is only the distant backdrop (sky, mountains,
// buildings at the horizon, drawn at infinity so it never stretches). The ground near
// the car is a real textured surface (CC0 Poly Haven textures), tinted to match the
// photo's own ground, that fades out with distance so the photo's far ground shows
// through at the horizon. Nothing from the photo is projected onto the floor.
export const GROUND_FADE=Object.freeze({start:16,end:46,radius:50});

export function groundURL(name,map){return `assets/ground/${name}-${map}.webp`;}

export async function createOutdoorGround(renderer,{texture,size,tint},{start=GROUND_FADE.start,end=GROUND_FADE.end,radius=GROUND_FADE.radius}={}){
  const loader=new THREE.TextureLoader(),anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
  const [map,normalMap,roughnessMap]=await Promise.all(['color','normal','rough'].map(kind=>loader.loadAsync(groundURL(texture,kind))));
  for(const t of [map,normalMap,roughnessMap]){t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=anisotropy;t.repeat.set(1/size,1/size);}
  map.colorSpace=THREE.SRGBColorSpace;
  const material=new THREE.MeshStandardMaterial({map,normalMap,roughnessMap,roughness:1,metalness:0,color:new THREE.Color().setRGB(...tint,THREE.LinearSRGBColorSpace),transparent:true,depthWrite:false});
  material.onBeforeCompile=shader=>{
    Object.assign(shader.uniforms,{groundFade:{value:new THREE.Vector2(start,end)},groundTile:{value:size}});
    shader.vertexShader=shader.vertexShader
      .replace('#include <common>','#include <common>\nvarying vec2 vGroundXZ;')
      .replace('#include <worldpos_vertex>','#include <worldpos_vertex>\nvGroundXZ = ( modelMatrix * vec4( transformed, 1.0 ) ).xz;');
    shader.fragmentShader=shader.fragmentShader
      .replace('#include <common>','#include <common>\nvarying vec2 vGroundXZ;\nuniform vec2 groundFade;\nuniform float groundTile;')
      // Break up visible tiling: modulate brightness by the same texture sampled at a
      // large, rotated scale, so repeats read as natural patches rather than a grid.
      .replace('#include <map_fragment>',`#include <map_fragment>
  vec2 groundMacro = mat2( 0.8, -0.6, 0.6, 0.8 ) * vGroundXZ / ( groundTile * 7.3 );
  float groundPatch = dot( texture2D( map, groundMacro ).rgb, vec3( 0.333 ) ) / max( dot( texture2D( map, groundMacro, 6.0 ).rgb, vec3( 0.333 ) ), 0.02 );
  diffuseColor.rgb *= mix( 1.0, groundPatch, 0.35 );
  diffuseColor.a *= 1.0 - smoothstep( groundFade.x, groundFade.y, length( vGroundXZ ) );`);
  };
  material.customProgramCacheKey=()=>'outdoor-ground';
  // UVs in metres, so `size` is the real tile size of the photographed texture.
  const geometry=new THREE.CircleGeometry(radius,96).rotateX(-Math.PI/2);
  const uv=geometry.attributes.uv,position=geometry.attributes.position;
  for(let i=0;i<uv.count;i++)uv.setXY(i,position.getX(i),-position.getZ(i));
  const ground=new THREE.Mesh(geometry,material);
  ground.name='OutdoorGround';ground.position.y=-.002;ground.receiveShadow=true;ground.renderOrder=0;
  return ground;
}
