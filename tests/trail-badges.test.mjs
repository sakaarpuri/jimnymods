import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSES,getMissions} from '../src/trail/courses.js';
import {BADGE_LEVELS,badgeProgress,newlyUnlocked,badgeArtwork,badgeName} from '../src/trail/badges.js';
const recordsFor=(courses=COURSES,difficulty='explorer',score=75,body='5door')=>Object.fromEntries(courses.flatMap(c=>getMissions(c).map(m=>[`${c.worldId}-${m.id}-${difficulty}-${body}`,{version:2,course:c.id,mission:m.id,difficulty,score,seconds:85,recoveries:0,date:'2026-10-21T12:00:00Z'}])));
test('empty, corrupt and unrecognised records never grant badges',()=>{for(const value of [null,{},[],{fake:{score:100}}])assert(badgeProgress(value).every(b=>!b.unlocked));const valid=recordsFor();for(const mutation of [{version:1},{score:NaN},{score:101},{score:-1},{score:'95'},{seconds:-1},{recoveries:1.5},{mission:'fake'},{course:'custom'},{difficulty:'fake'}]){const bad=Object.fromEntries(Object.entries(valid).map(([key,r])=>[key,{...r,...mutation}]));assert(badgeProgress(bad).every(b=>!b.unlocked),JSON.stringify(mutation));}});
test('five progressive ranks use distinct missions and explicit score/difficulty thresholds',()=>{
 const school=recordsFor([COURSES[0]]),one=Object.fromEntries(Object.entries(school).slice(0,1));
 assert.deepEqual(badgeProgress(one).map(b=>b.unlocked),[true,false,false,false,false]);
 assert.deepEqual(badgeProgress(school).map(b=>b.unlocked),[true,true,false,false,false]);
 assert.deepEqual(badgeProgress(recordsFor()).map(b=>b.unlocked),[true,true,true,false,false]);
 assert.deepEqual(badgeProgress(recordsFor(COURSES,'driver',70)).map(b=>b.unlocked),[true,true,true,true,false]);
 assert.deepEqual(badgeProgress(recordsFor(COURSES,'expert',90)).map(b=>b.unlocked),[true,true,true,true,true]);
 assert(!badgeProgress(recordsFor(COURSES,'expert',89))[4].unlocked);
 const combined={...one,...recordsFor([COURSES[0]],'driver',75,'3door')};assert.equal(badgeProgress(combined)[1].current,4);
 const noLessons=recordsFor(COURSES.slice(1),'expert',100);assert(!badgeProgress(noLessons)[2].unlocked);assert(!badgeProgress(noLessons)[3].unlocked);
});
test('only newly earned ranks are announced and replay never re-awards',()=>{const first=recordsFor([COURSES[0]]);assert.deepEqual(newlyUnlocked({},first).map(b=>b.id),['first-track','trail-ready']);assert.equal(newlyUnlocked(first,first).length,0);assert.equal(newlyUnlocked(first,recordsFor(COURSES,'expert',100)).length,3);});
test('additional expeditions cannot relock ranks, while Expert still requires every lesson',()=>{
 const expanded=recordsFor(COURSES,'expert',95),original=Object.fromEntries(Object.entries(expanded).filter(([key])=>!key.includes('rock-river-')&&!key.includes('-pro-')));
 assert(!Object.values(original).some(r=>r.mission.startsWith('pro-')),'baseline includes no optional pro completions');
 assert(badgeProgress(original).every(b=>b.unlocked));assert(badgeProgress(expanded).every(b=>b.unlocked));assert.equal(newlyUnlocked(original,expanded).length,0);
 const missingLesson={...expanded};delete missingLesson[`${COURSES[0].worldId}-${getMissions(COURSES[0])[0].id}-expert-5door`];
 assert(Object.keys(missingLesson).length>=16);assert(!badgeProgress(missingLesson)[4].unlocked);
 assert(badgeProgress(expanded).every(b=>b.current<=b.total));
});
test('exports are correctly sized, XML escaped, explicitly game-only, and locked ranks cannot export',()=>{
 const badge=badgeProgress(recordsFor())[0];for(const [format,w,h]of [['square',1080,1080],['story',1080,1920],['print',1240,1754]]){const art=badgeArtwork(badge,'A <script> & "B"',format);assert.equal(art.width,w);assert.equal(art.height,h);assert(art.svg.includes('&lt;script&gt;'));assert(!art.svg.includes('<script>'));assert(art.svg.includes('Not real-world driving training or certification.'));assert(art.svg.includes('locally saved progress'));}
 assert.throws(()=>badgeArtwork({...BADGE_LEVELS[4],unlocked:false},'Driver'));
 assert.equal(badgeName(' \n\t '),'Trail driver');assert.equal(Array.from(badgeName('a'.repeat(100))).length,32);
});
