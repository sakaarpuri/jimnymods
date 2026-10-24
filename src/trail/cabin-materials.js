import * as T from 'three';

const MATERIALS={
  CabinDashboard:{color:'#34393c',roughness:.83,scale:38,strength:.00024,type:'grain'},
  WovenCabinFabric:{color:'#353b40',roughness:.96,scale:17,strength:.00045,type:'weave'},
  CabinSeatInsert:{color:'#535c62',roughness:.98,scale:20,strength:.0005,type:'weave'},
  CabinCarpet:{color:'#252a2e',roughness:1,scale:24,strength:.0007,type:'grain'},
  BrightChrome:{color:'#b1b8bd',roughness:.31,metalness:.78,scale:45,strength:.00006,type:'grain'},
  WindowGlass:{color:'#10171b',roughness:.23,metalness:.12,scale:45,strength:0,type:'grain',opaque:true},
};

// Colour the existing contoured fabric inserts instead of adding box-shaped
// covers over the seats. Shared by the garage and driving scene.
export function applySeatCoverPalette(root,enabled,colour='#a38b69'){
  root?.traverse(object=>{
    if(!object.isMesh||Array.isArray(object.material)||object.material.name!=='CabinSeatInsert')return;
    object.material.color.set(enabled?colour:MATERIALS.CabinSeatInsert.color);
  });
}

// Original deterministic micro-surfaces, authored in metres by Blender UVs.
// No external photographs, network dependency or copyrighted texture source.
function microSurface(type,scale){
  const size=128,data=new Uint8Array(size*size*4);let seed=617;
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
    seed=(Math.imul(seed,1664525)+1013904223)>>>0;
    const thread=type==='weave'?(((x>>2)+(y>>2))%2?21:-21)+Math.sin(x*Math.PI/2)*12+Math.cos(y*Math.PI/2)*7:0;
    const value=Math.max(0,Math.min(255,128+thread+(seed/4294967296-.5)*42)),i=(y*size+x)*4;
    data[i]=data[i+1]=data[i+2]=value;data[i+3]=255;
  }
  const texture=new T.DataTexture(data,size,size,T.RGBAFormat);texture.wrapS=texture.wrapT=T.RepeatWrapping;
  texture.repeat.set(scale,scale);texture.magFilter=T.LinearFilter;texture.minFilter=T.LinearMipmapLinearFilter;texture.generateMipmaps=true;texture.needsUpdate=true;return texture;
}

export function applyCabinMaterials(root){
  const maps=new Map(),materials=new Map();
  root.traverse(object=>{
    if(!object.isMesh||Array.isArray(object.material))return;
    const spec=MATERIALS[object.material.name];if(!spec)return;
    let material=materials.get(object.material);
    if(!material){
      material=object.material.clone();material.color.set(spec.color);material.roughness=spec.roughness;material.metalness=spec.metalness||0;
      if(spec.opaque){material.transparent=false;material.opacity=1;material.depthWrite=true;}
      const key=spec.type+spec.scale;let texture=maps.get(key);if(!texture){texture=microSurface(spec.type,spec.scale);maps.set(key,texture);}
      material.bumpMap=texture;material.bumpScale=spec.strength;
      // Cloth colour also varies with the woven threads. Bump-only fabric was
      // uniformly grey at cabin distance, unlike the reference seat inserts.
      if(spec.type==='weave')material.map=texture;
      material.envMapIntensity=.45;material.needsUpdate=true;materials.set(object.material,material);
      material.addEventListener('dispose',()=>texture.dispose());
    }
    object.material=material;
    object.userData.disposableMaterial=true;
  });
  return {dispose(){for(const texture of maps.values())texture.dispose();for(const material of materials.values())material.dispose();},count:materials.size};
}
