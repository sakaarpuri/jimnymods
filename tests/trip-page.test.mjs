import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import vm from 'node:vm';
const read=file=>readFileSync(new URL('../'+file,import.meta.url),'utf8');
const context=vm.createContext({window:{}});vm.runInContext(read('assets/trip-planner.js'),context);vm.runInContext(read('assets/trip-destinations.js'),context);vm.runInContext(read('assets/trip-photos.js'),context);
const D=context.window.JIMNY_TRIP_DESTINATIONS,P=context.JIMNY_TRIP_PLANNER,photos=context.window.JIMNY_TRIP_PHOTOS;
test('all seven existing routes have geographic waypoints, sourced tips and licensed photos',()=>{
 assert.equal(Object.keys(D.routes).length,7);
 for(const r of P.routes){const d=D.routes[r.id],p=photos[r.id];assert(d);assert(d.points.length>=3);for(const [name,lat,lon] of d.points){assert(name);assert(lat>8&&lat<37);assert(lon>68&&lon<98);}
 assert(d.tips.length>=2);for(const tip of d.tips){assert.equal(tip.length,4);assert.equal(new URL(tip[3]).protocol,'https:');}
 assert(p.author&&p.licence&&p.page&&p.changes);assert.match(p.page,/commons.wikimedia.org/);assert(existsSync(new URL('../'+p.local,import.meta.url)));}
});
test('emergency contacts use primary public-service sources, community links are distinct',()=>{
 assert.equal(D.emergency.number,'112');assert.equal(D.emergency.url,'https://112.gov.in/');
 for(const d of Object.values(D.routes))for(const c of d.contacts){assert.match(new URL(c.url).hostname,/(\.gov\.in|\.nic\.in)$/);if(c.number)assert.match(c.dial,/^\+?[0-9]+$/);}
 assert.equal(D.routes.kutch.contacts[0].dial,'+9128321077');assert.equal(D.routes.tawang.contacts[0].dial,'+919233095070');
 assert.equal(D.routes.konkan.community,null);assert.match(D.routes.spiti.community.note,/Confirm/);
});
test('planner is a dedicated lightweight page rather than a modal',()=>{
 const html=read('trip-planner.html'),ui=read('assets/trip-planner-ui.js');assert.match(html,/id="tripPage"/);assert.doesNotMatch(html,/viewer3d\.js|trail-game\.js/);assert.doesNotMatch(ui,/showModal\(|createElement\('dialog'\)/);assert.match(ui,/location.href='trip-planner.html'/);assert.match(read('scripts/build.mjs'),/'trip-planner.html'/);
});
test('downloaded plan includes emergency information, reading and waypoint limitations',()=>{
 vm.runInContext(read('assets/trip-page.js'),context);const text=context.window.JimnyTripPage.exportNotes('spiti');assert.match(text,/112/);assert.match(text,/108/);assert.match(text,/not a navigation track/);assert.match(text,/NOT emergency services/);assert.match(text,/discoverwithdheeraj/);
});
test('garage directs clicks to geometry and exposes the existing bound background selector',()=>{
 assert.doesNotMatch(read('assets/on-car-editor.js'),/Select a part to edit|launch.onclick/);assert.match(read('assets/workbench-flow.js'),/Click a part on the car to edit/);assert.match(read('assets/workbench-flow.js'),/garage-backgrounds/);assert.match(read('assets/workbench-flow.css'),/scenery-picker.garage-backgrounds\{display:grid!important/);
});
