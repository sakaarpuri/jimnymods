import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSES,makeWorld,DIFFICULTIES} from '../src/trail/courses.js';
import {sectionShoulderRelief,sectionGeologyPlan} from '../src/trail/himachal-dressing.js';

test('sculpted shoulders leave protected driving corridors and all other sections unchanged',()=>{
 for(let x=20;x<125;x+=2)for(let z=80;z<215;z+=2){
  assert.equal(sectionShoulderRelief(x,z,4.9),0);
  const h=sectionShoulderRelief(x,z,20);assert(Number.isFinite(h)&&h>=0&&h<6);
 }
 for(const [x,z]of [[0,0],[65,250],[-190,550],[130,150]])assert.equal(sectionShoulderRelief(x,z,20),0);
 assert(sectionShoulderRelief(85,145,20)>1);
 for(const c of COURSES.filter(c=>c.id!=='mountain'))assert.deepEqual(sectionGeologyPlan(makeWorld(c)),[]);
});

test('section bedrock is solid, embedded and leaves technical wheel corridor clear in every difficulty',()=>{
 for(const difficulty of Object.keys(DIFFICULTIES)){
  const world=makeWorld(COURSES.find(c=>c.id==='mountain'),difficulty),rocks=world.obstacles.filter(r=>r.id.startsWith('section-geology-')||r.id.startsWith('section-step-wing-'));
  assert(rocks.length>=24&&rocks.length<=45);
  for(const rock of rocks){
   assert.equal(rock.type,'rock');assert(rock.y<=world.height(rock.x,rock.z));assert(rock.height>0&&rock.height<10);
   if(rock.id.startsWith('section-step-wing-')){
    assert(Math.abs(rock.x-world.activeStoneLane)-rock.radius>3,'low shelves stay outside the full six-metre technical corridor');
   }else{
    assert(world.routeDistance(rock.x,rock.z)-rock.radius>=2.5);
    assert(rock.height<=rock.radius*.62+1e-9,'cross-slope bedrock must not become a tall scan stack');
   }
  }
  const shelf=rocks.filter(r=>r.formation==='section-2');
  assert(shelf.length>=3);
  assert(Math.max(...shelf.map(r=>r.x))-Math.min(...shelf.map(r=>r.x))>6,'the main ledge stretches across the hillside');
 }
});
