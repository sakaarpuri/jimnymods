// Physical surface values for the photographed-HDRI garage. The HDRI supplies real
// reflections, so these differ by roughness and metalness, not by dimmed reflections.
// Keys are the material names authored in the Blender model.
export const MATERIAL_PROFILES=Object.freeze({
  BrightChrome:{metalness:1,roughness:.07},
  GrilleLettering:{metalness:.9,roughness:.18},
  MachinedAlloy:{metalness:.9,roughness:.3},
  WheelGunmetal:{metalness:.8,roughness:.38},
  WheelBarrelDark:{metalness:.55,roughness:.55},
  BrakeSteel:{metalness:.9,roughness:.42},
  CaliperMetal:{metalness:.6,roughness:.45},
  // Grained black bumper and arch plastic: dull, but still a dielectric sheen.
  MouldedPlastic:{metalness:0,roughness:.62},
  GrilleAnthracite:{metalness:.2,roughness:.4},
  GlossBlackGrille:{metalness:0,roughness:.12,clearcoat:1,clearcoatRoughness:.04},
  TyreRubber:{metalness:0,roughness:.9},
});
// Body paint per finish: a base coat under a clear lacquer. Matte has no lacquer.
export const PAINT_FINISHES=Object.freeze({
  gloss:{roughness:.45,clearcoat:.60,clearcoatRoughness:.30},
  satin:{roughness:.52,clearcoat:.35,clearcoatRoughness:.40},
  matte:{roughness:.72,clearcoat:0,clearcoatRoughness:.6},
});
export function paintFinish(finish){return PAINT_FINISHES[finish]||PAINT_FINISHES.gloss;}
export function applyMaterialProfile(material){
  const profile=MATERIAL_PROFILES[material?.name];if(!profile)return false;
  for(const [key,value] of Object.entries(profile))if(key in material)material[key]=value;
  material.envMapIntensity=1;return true;
}
