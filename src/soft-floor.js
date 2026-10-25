// A 360° photo is taken from one spot. GroundedSkybox lays its lower half flat on the
// ground so the car can stand on it, which also flattens anything standing near the
// photographer (planters, signs, parked cars) into a stretched smear. Blur the projected
// floor progressively with distance from the car: the ground the car sits on stays sharp,
// and flattened objects further out melt into the paving instead of reading as stickers.
export const SOFT_FLOOR=Object.freeze({near:3.5,far:13,blur:4.5});

// `near`/`far` are metres from the car where blurring starts and reaches full strength;
// `blur` is the extra mip level (each level halves the detail) at full strength.
export function softenGroundedSkybox(skybox,height,{near=SOFT_FLOOR.near,far=SOFT_FLOOR.far,blur=SOFT_FLOOR.blur}={}){
  const material=skybox.material;
  material.onBeforeCompile=shader=>{
    Object.assign(shader.uniforms,{skyHeight:{value:height},skyNear:{value:near},skyFar:{value:far},skyBlur:{value:blur}});
    shader.vertexShader=shader.vertexShader
      .replace('#include <common>','#include <common>\nvarying vec3 vSkyLocal;')
      .replace('#include <begin_vertex>','#include <begin_vertex>\nvSkyLocal = position;');
    shader.fragmentShader=shader.fragmentShader
      .replace('#include <common>','#include <common>\nvarying vec3 vSkyLocal;\nuniform float skyHeight, skyNear, skyFar, skyBlur;')
      .replace('#include <map_fragment>',`#ifdef USE_MAP
  // 1 on the flat projected floor, 0 on the dome above it.
  float skyFloor = 1.0 - smoothstep( -skyHeight, -0.7 * skyHeight, vSkyLocal.y );
  float skyBias = skyFloor * smoothstep( skyNear, skyFar, length( vSkyLocal.xz ) ) * skyBlur;
  diffuseColor *= texture2D( map, vMapUv, skyBias );
#endif`);
  };
  material.customProgramCacheKey=()=>'soft-floor';
  material.needsUpdate=true;
  return skybox;
}
