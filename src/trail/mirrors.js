import * as T from 'three';

// Small, staggered rear-view cameras, not a ray-traced/physically planar mirror.
// Keep the authored rounded glass silhouette instead of covering it with a quad.
export function extractMirrorLenses(vehicleRoot, body='5door') {
  vehicleRoot.updateWorldMatrix(true,true);
  const inverse=vehicleRoot.matrixWorld.clone().invert(),offset=body==='3door'?-.17:0;
  const specs=[
    {id:'right',x:-.863,y:1.285,z:.542+offset,w:.175,h:.117},
    {id:'left',x:.863,y:1.285,z:.542+offset,w:.175,h:.117},
    {id:'centre',x:0,y:1.522,z:.481+offset,w:.18,h:.055},
  ].map(s=>({...s,vertices:[]}));
  const points=[new T.Vector3(),new T.Vector3(),new T.Vector3()];
  vehicleRoot.traverse(object=>{
    if(!object.isMesh||object.material?.name!=='BrightChrome')return;
    const geometry=object.geometry,positions=geometry.attributes.position,index=geometry.index;
    const transform=new T.Matrix4().multiplyMatrices(inverse,object.matrixWorld);
    for(let i=0;i<(index?.count??positions.count);i+=3){
      for(let j=0;j<3;j++)points[j].fromBufferAttribute(positions,index?index.getX(i+j):i+j).applyMatrix4(transform);
      for(const spec of specs){
        if(points.every(p=>Math.abs(p.x-spec.x)<spec.w/2+.001&&Math.abs(p.y-spec.y)<spec.h/2+.001&&Math.abs(p.z-spec.z)<.0035)){
          for(const p of points)spec.vertices.push(p.x,p.y,p.z-.0006);
          break;
        }
      }
    }
  });
  return specs.filter(s=>s.vertices.length).map(spec=>{
    const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(spec.vertices,3));
    const uv=[];for(let i=0;i<spec.vertices.length;i+=3)uv.push((spec.vertices[i]-spec.x)/spec.w+.5,(spec.vertices[i+1]-spec.y)/spec.h+.5);
    geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geometry.computeVertexNormals();
    const {vertices,...dimensions}=spec;return {...dimensions,geometry};
  });
}

export function createVehicleMirrors({renderer,scene,vehicleRoot,body='5door',updatesPerSecond=24}) {
  const lenses=extractMirrorLenses(vehicleRoot,body),mirrors=lenses.map(lens=>{
    const target=new T.WebGLRenderTarget(lens.id==='centre'?256:128,lens.id==='centre'?80:86,{depthBuffer:true,stencilBuffer:false});
    target.texture.colorSpace=T.SRGBColorSpace;target.texture.generateMipmaps=false;
    const material=new T.MeshBasicMaterial({map:target.texture,side:T.DoubleSide,toneMapped:false});
    material.name=`LiveMirror-${lens.id}`;
    const mesh=new T.Mesh(lens.geometry,material);mesh.name=`LiveMirror-${lens.id}`;mesh.visible=false;mesh.renderOrder=1;vehicleRoot.add(mesh);
    const camera=new T.PerspectiveCamera(lens.id==='centre'?34:55,target.width/target.height,.025,650);
    return {...lens,target,mesh,camera,ready:false};
  });
  let enabled=true,disposed=false,busy=false,elapsed=1,next=0;
  const direction=new T.Vector3(),position=new T.Vector3(),up=new T.Vector3(),rotation=new T.Quaternion();
  const interval=1/Math.max(3,Math.min(30,updatesPerSecond));
  return {
    // Caller enables only for cabin views (including the control thumbnail).
    // At most one 128/256 px scene render per call, 8 Hz per lens at default.
    update(_viewCamera,dt=0){
      if(disposed||busy||!enabled||!mirrors.length)return false;
      elapsed+=Number.isFinite(dt)?Math.max(0,dt):0;
      if(elapsed<interval)return false;
      elapsed=0;const mirror=mirrors[next];next=(next+1)%mirrors.length;
      vehicleRoot.updateWorldMatrix(true,true);vehicleRoot.getWorldQuaternion(rotation);
      position.set(mirror.x,mirror.y,mirror.z-.018).applyMatrix4(vehicleRoot.matrixWorld);
      // Side mirrors look mostly rearward, with a sliver of their own flank.
      direction.set(mirror.id==='centre'?0:-Math.sign(mirror.x)*.10,mirror.id==='centre'?-.025:-.10,-1).normalize().applyQuaternion(rotation);
      up.set(0,1,0).applyQuaternion(rotation);mirror.camera.position.copy(position);mirror.camera.up.copy(up);mirror.camera.lookAt(position.clone().add(direction));mirror.camera.updateMatrixWorld(true);
      const target=renderer.getRenderTarget(),face=renderer.getActiveCubeFace?.()??0,mip=renderer.getActiveMipmapLevel?.()??0;
      const viewport=renderer.getViewport(new T.Vector4()),scissor=renderer.getScissor(new T.Vector4()),scissorTest=renderer.getScissorTest();
      const autoClear=renderer.autoClear,autoShadow=renderer.shadowMap.autoUpdate,xr=renderer.xr?.enabled;
      const visibility=mirrors.map(m=>m.mesh.visible);busy=true;
      try{
        mirrors.forEach(m=>m.mesh.visible=false); // no feedback/recursive mirrors
        if(renderer.xr)renderer.xr.enabled=false;
        renderer.shadowMap.autoUpdate=false;renderer.autoClear=true;
        renderer.setRenderTarget(mirror.target);renderer.setScissorTest(false);renderer.clear();renderer.render(scene,mirror.camera);mirror.ready=true;
      }finally{
        renderer.setRenderTarget(target,face,mip);renderer.setViewport(viewport);renderer.setScissor(scissor);renderer.setScissorTest(scissorTest);
        renderer.autoClear=autoClear;renderer.shadowMap.autoUpdate=autoShadow;if(renderer.xr)renderer.xr.enabled=xr;
        mirrors.forEach((m,i)=>m.mesh.visible=m===mirror?m.ready:visibility[i]);busy=false;
      }
      return true;
    },
    setEnabled(value){value=!!value;if(enabled===value)return;enabled=value;mirrors.forEach(m=>m.mesh.visible=enabled&&m.ready);if(enabled)elapsed=1;},
    snapshot:()=>mirrors.map(m=>({id:m.id,ready:m.ready,width:m.target.width,height:m.target.height,cameraPosition:m.camera.position.toArray()})),
    dispose(){if(disposed)return;disposed=true;for(const mirror of mirrors){vehicleRoot.remove(mirror.mesh);mirror.geometry.dispose();mirror.mesh.material.dispose();mirror.target.dispose();}},
  };
}
