import * as THREE from 'three';
import { HorizontalBlurShader } from 'three/addons/shaders/HorizontalBlurShader.js';
import { VerticalBlurShader } from 'three/addons/shaders/VerticalBlurShader.js';

// Soft contact shadow: the car's underside seen from the floor, darker where it is
// closer to the ground, blurred and laid on the floor. It is re-rendered only when
// the build changes, so fitted lifts, tyres and bumpers move it with them.
export function createContactShadow(renderer,{width=3.1,depth=5.4,height=.62,resolution=512,blur=2.6,darkness=1.25,opacity=.9}={}){
  const target=new THREE.WebGLRenderTarget(resolution,resolution),blurTarget=new THREE.WebGLRenderTarget(resolution,resolution);
  target.texture.generateMipmaps=blurTarget.texture.generateMipmaps=false;
  const material=new THREE.MeshBasicMaterial({map:target.texture,transparent:true,depthWrite:false,opacity});
  // The texture is rendered looking up, so the plane is mirrored front to back.
  const plane=new THREE.Mesh(new THREE.PlaneGeometry(width,depth).rotateX(Math.PI/2),material);
  plane.name='ContactShadow';plane.scale.y=-1;plane.position.y=.0015;plane.renderOrder=1;
  const camera=new THREE.OrthographicCamera(-width/2,width/2,depth/2,-depth/2,0,height);camera.rotation.x=Math.PI/2;
  const depthMaterial=new THREE.MeshDepthMaterial({depthTest:false,depthWrite:false});
  depthMaterial.userData.darkness={value:darkness};
  depthMaterial.onBeforeCompile=shader=>{
    shader.uniforms.darkness=depthMaterial.userData.darkness;
    shader.fragmentShader=`uniform float darkness;\n${shader.fragmentShader.replace('gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );','gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );')}`;
  };
  const blurPlane=new THREE.Mesh(new THREE.PlaneGeometry(width,depth).rotateX(Math.PI/2));
  const horizontal=new THREE.ShaderMaterial(HorizontalBlurShader),vertical=new THREE.ShaderMaterial(VerticalBlurShader);
  horizontal.depthTest=vertical.depthTest=false;
  function blurOnce(amount){
    blurPlane.visible=true;
    blurPlane.material=horizontal;horizontal.uniforms.tDiffuse.value=target.texture;horizontal.uniforms.h.value=amount/256;
    renderer.setRenderTarget(blurTarget);renderer.render(blurPlane,camera);
    blurPlane.material=vertical;vertical.uniforms.tDiffuse.value=blurTarget.texture;vertical.uniforms.v.value=amount/256;
    renderer.setRenderTarget(target);renderer.render(blurPlane,camera);
    blurPlane.visible=false;
  }
  // Renders `root` (the car) only; its world placement is used as it stands.
  function update(root){
    plane.getWorldPosition(camera.position);camera.position.y=0;camera.updateMatrixWorld();
    const previous={target:renderer.getRenderTarget(),clear:renderer.getClearAlpha(),shadow:renderer.shadowMap.autoUpdate};
    const scene=new THREE.Scene();scene.overrideMaterial=depthMaterial;scene.matrixWorldAutoUpdate=false;
    root.updateMatrixWorld(true);scene.children.push(root);
    renderer.setClearAlpha(0);renderer.shadowMap.autoUpdate=false;
    renderer.setRenderTarget(target);renderer.clear();renderer.render(scene,camera);
    scene.children.length=0;
    blurOnce(blur);blurOnce(blur*.4);
    renderer.setRenderTarget(previous.target);renderer.setClearAlpha(previous.clear);renderer.shadowMap.autoUpdate=previous.shadow;
  }
  function dispose(){target.dispose();blurTarget.dispose();material.dispose();plane.geometry.dispose();blurPlane.geometry.dispose();horizontal.dispose();vertical.dispose();depthMaterial.dispose();}
  return {plane,update,dispose,material};
}
