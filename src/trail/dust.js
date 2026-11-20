import * as T from 'three';

// Cosmetic wheel dust for loose ground and sand. It reads the solver's wheel
// positions and aggregate slip but never feeds anything back into the physics.
const COUNT=240,WHEEL_RADIUS=.3465;
const RATE={sand:30,'soft-sand':42,loose:20,water:46},TINT={sand:'#c2a070','soft-sand':'#caa97a',loose:'#9c8d73',water:'#e3ecec'};
// Particles per second for one wheel. Paved surfaces raise none.
export function dustRate(surface,speed=0,slip=0,handbrake=false){
  const base=RATE[surface]||0,v=Math.abs(speed);
  if(!base||(v<.8&&slip<.2))return 0;
  const rolling=Math.min(1,v/12);
  return base*Math.min(1.6,rolling*rolling+Math.min(1,slip*2.2)+(handbrake&&v>3?.5:0));
}
export function createDust(scene){
  const position=new Float32Array(COUNT*3),size=new Float32Array(COUNT),alpha=new Float32Array(COUNT),velocity=new Float32Array(COUNT*3),age=new Float32Array(COUNT).fill(1),life=new Float32Array(COUNT).fill(1),grow=new Float32Array(COUNT),strength=new Float32Array(COUNT),carry=[0,0,0,0];
  const geometry=new T.BufferGeometry();
  geometry.setAttribute('position',new T.BufferAttribute(position,3));geometry.setAttribute('aSize',new T.BufferAttribute(size,1));geometry.setAttribute('aAlpha',new T.BufferAttribute(alpha,1));
  const material=new T.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{uColor:{value:new T.Color(TINT.loose)},uScale:{value:600}},
    vertexShader:'attribute float aSize;attribute float aAlpha;uniform float uScale;varying float vAlpha;void main(){vAlpha=aAlpha;vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=min(280.,aSize*uScale/max(.1,-mv.z));gl_Position=projectionMatrix*mv;}',
    fragmentShader:'uniform vec3 uColor;varying float vAlpha;void main(){float a=vAlpha*smoothstep(.5,.08,length(gl_PointCoord-.5));if(a<.004)discard;gl_FragColor=vec4(uColor,a);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n}'});
  const points=new T.Points(geometry,material);points.frustumCulled=false;points.renderOrder=4;points.visible=false;points.name='Wheel dust';scene.add(points);
  let cursor=0;
  function spawn(x,y,z,vx,vy,vz,power){
    const i=cursor;cursor=(cursor+1)%COUNT;position[i*3]=x;position[i*3+1]=y;position[i*3+2]=z;velocity[i*3]=vx;velocity[i*3+1]=vy;velocity[i*3+2]=vz;
    age[i]=0;life[i]=.9+Math.random()*.9;grow[i]=.5+Math.random()*.5+power*.5;strength[i]=.15+power*.17;
  }
  function update(state,world,dt,camera,viewportHeight){
    if(!(dt>0))return;
    material.uniforms.uScale.value=viewportHeight*.5/Math.tan(camera.fov*Math.PI/360);
    const centres=state.wheelCenters,speed=state.speed||0,v=Math.abs(speed);
    if(centres&&world?.surface){
      const sin=Math.sin(state.yaw),cos=Math.cos(state.yaw),direction=Math.sign(speed)||1;
      for(let i=0;i<4;i++){
        const p=centres[i];if(!p||state.wheelContacts?.[i]===false){carry[i]=0;continue;}
        const surface=(state.wading||0)>.08?'water':world.surface(p.x,p.z),driven=i>=2||state.range!=='2H',slip=driven?state.slip||0:0,rate=dustRate(surface,speed,slip,!!state.handbrake&&i>=2)*(i>=2?1:.5);
        if(!rate){carry[i]=0;continue;}
        if(i>=2)material.uniforms.uColor.value.set(TINT[surface]);
        carry[i]=Math.min(6,carry[i]+rate*dt);const power=Math.min(1,slip*2+v/22);
        while(carry[i]>=1){
          carry[i]--;const along=speed*.18-direction*(.3+power*2.5+Math.random()*.6),across=(Math.random()-.5)*1.1;
          spawn(p.x+(Math.random()-.5)*.25,p.y-WHEEL_RADIUS+.06,p.z+(Math.random()-.5)*.25,sin*along+cos*across,.5+Math.random()*.9+power*.8,cos*along-sin*across,power);
        }
      }
    }
    let visible=false;const drag=Math.max(0,1-dt*1.6);
    for(let i=0;i<COUNT;i++){
      if(age[i]>=life[i]){alpha[i]=0;size[i]=0;continue;}
      age[i]+=dt;const t=Math.min(1,age[i]/life[i]);
      velocity[i*3]*=drag;velocity[i*3+1]=velocity[i*3+1]*drag+dt*.25;velocity[i*3+2]*=drag;
      position[i*3]+=velocity[i*3]*dt;position[i*3+1]+=velocity[i*3+1]*dt;position[i*3+2]+=velocity[i*3+2]*dt;
      size[i]=.35+grow[i]*t*2.4;alpha[i]=strength[i]*Math.min(1,t*8)*(1-t)*(1-t);visible=true;
    }
    for(const name of ['position','aSize','aAlpha'])geometry.attributes[name].needsUpdate=true;
    points.visible=visible;
  }
  return {update,get active(){return points.visible;},dispose(){scene.remove(points);geometry.dispose();material.dispose();}};
}
