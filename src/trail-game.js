import {createVehicle,stepVehicle,shiftRange,shiftGear,toggleHdc,clamp} from './trail/physics.js';
import {COURSES,DIFFICULTIES,makeWorld,makeGates,gateReached,centerAt,resultFor,getMissions,getMission,checkpointStatus} from './trail/courses.js';
import {createTrailScene} from './trail/scene.js';
import {TrailReplay,sampleReplay,recapShot,playerProfile} from './trail/replay.js';
import {recordCanvas,videoFormat,exportSize,stampFrame,downloadBlob,canvasBlob} from './media-export.js';
import {VoiceCoach} from './trail/voice.js';
import {getVoiceCue} from './trail/voice-cues.js';
import {voiceReplaySegments,ReplayCoaching} from './trail/voice-replay.js';
import {Spotter,diagnose,WHEEL_NAMES,automaticWheelPreview} from './trail/spotter.js';
import {drivingInput,PEDAL} from './trail/controls.js';
import {TrailAudio,DEFAULT_MIX} from './trail/audio.js';
import {createRigidVehicle} from './trail/rigid-vehicle.js';
import {translateCode,canonicalPressedCodes,bindingLabel,mountKeyBindingsSettings} from './trail/key-bindings.js';
import {nearbyDiscoveries} from './trail/world-exploration.js';
import {newlyUnlocked} from './trail/badges.js';
import {mountBadges} from './trail/badge-ui.js';
import {gauntletEquipment,gauntletRecovery,GAUNTLET_STAGES} from './trail/gorge-gauntlet.js';

const $=id=>document.getElementById(id),dialogs=['lobby','pause','help','results','shareRun','inspection','badges'];
$('cameraButton').options[0].textContent='Chase';$('cameraButton').options[1].textContent='Cockpit';
const pedalReadout=document.createElement('span');pedalReadout.id='pedalReadout';pedalReadout.textContent='Pedal 0%';$('rpm').after(pedalReadout);
// Reserve real canvas space for mobile coaching, including longer audio errors.
// This keeps the vehicle above the panel instead of merely covering the render.
const coachPanel=document.querySelector('.coach');
const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}};
const save=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}};
// Collapsed by default on phones and short screens, where the driving view is scarce.
let thumbnailCollapsed=read('thatsuvmod-thumbnail-collapsed',matchMedia('(max-width:700px), (max-height:600px)').matches)===true,wheelPreview=null;
const thumbnailToggle=document.createElement('button');thumbnailToggle.type='button';thumbnailToggle.id='thumbnailToggle';thumbnailToggle.setAttribute('aria-controls','cabinPreview');$('cabinPreview').after(thumbnailToggle);
thumbnailToggle.onclick=()=>{thumbnailCollapsed=!thumbnailCollapsed;save('thatsuvmod-thumbnail-collapsed',thumbnailCollapsed);syncThumbnail();};
// The thumbnail sits in a small card with its own close button; the old toggle becomes the "show" link.
const cabinCard=document.createElement('div');cabinCard.className='cabin-card';
const cabinHead=document.createElement('div');cabinHead.className='cabin-head';cabinHead.innerHTML='<span>Cabin view</span><button type="button" id="thumbnailClose" aria-label="Hide cabin view">&times;</button>';
$('cabinPreview').before(cabinCard);cabinCard.append(cabinHead,$('cabinPreview'));
$('thumbnailClose').onclick=()=>{thumbnailCollapsed=true;save('thatsuvmod-thumbnail-collapsed',true);syncThumbnail();thumbnailToggle.focus();};
const savedBuild=read('thatsuvmod-build',{}),build=savedBuild&&typeof savedBuild==='object'?savedBuild:{},progressKey='thatsuvmod-trail-progress-v2';
// New mission scores are not comparable with the old corridor courses.
if(!read(progressKey,null)&&read('thatsuvmod-trail-progress-v1',null))save('thatsuvmod-trail-progress-v1-archive',read('thatsuvmod-trail-progress-v1',{}));
const replayBuffer=new TrailReplay(),voiceEvents=[];const cueText=id=>getVoiceCue(id).text;let player={...playerProfile(read('thatsuvmod-player-v1',{})),driver:'none'},exportController=null,recapURL='',shareReturn='pause';
if(Object.hasOwn(build.design||{},'nameDecal'))player={...playerProfile({name:build.design.nameDecal||player.name,decal:!!build.design.nameDecal}),driver:'none'};
document.querySelector('.choices').insertAdjacentHTML('beforeend',`<fieldset class="player-setup"><legend>Your trail identity</legend><label>Player name <input id="playerName" maxlength="20" autocomplete="nickname" placeholder="Your trail name"></label><label class="check-label"><input id="playerDecal" type="checkbox"> Put my name on both front doors</label><p class="fine">Name and choices stay on this device; your name decal appears in exports. Human avatars are not shown.</p></fieldset>`);
$('playerName').value=player.name;$('playerDecal').checked=player.decal;
const playerOptions=document.createElement('details');playerOptions.className='player-options';playerOptions.open=matchMedia('(min-width:701px)').matches;const playerSummary=document.createElement('summary');playerSummary.textContent='Your name & decal · optional';playerOptions.append(playerSummary,document.querySelector('.player-setup'));document.querySelector('.lobby-grid>section').append(playerOptions);
function updatePlayer(){player=playerProfile({name:$('playerName').value,driver:'none',decal:$('playerDecal').checked});$('playerName').value=player.name;save('thatsuvmod-player-v1',player);if(build.vehicle==='jimny'){build.design={...build.design,nameDecal:player.decal?player.name:''};save('thatsuvmod-build',build);}if(view){view.setPlayer({...player,nameStyle:build.design||{}});view.render(state,gate,0);}}
for(const id of ['playerName','playerDecal'])$(id).addEventListener('change',updatePlayer);
let selected=COURSES[0],course=COURSES[0],difficulty='explorer',state=createVehicle(build.body),world=makeWorld(course),gates=makeGates(course),gate=0,started=false,running=false,loading=false,view,accumulator=0,last=0,uiTick=0,notice='',noticeUntil=0,helpReturn='lobby',lastCollision=0,frameCount=0,frameSeconds=0,fps=0;
let selectedMission=getMissions(selected)[0].id,mission=getMission(course,selectedMission),freeRoam=false,rigidVehicle=null;
let proAirborne=null;
const discovered=new Set();
const missionPicker=document.createElement('label');missionPicker.className='mission-picker';missionPicker.innerHTML='Choose your mission<select id="missionChoice"></select><span class="mission-description" id="missionDescription"></span>';document.querySelector('.briefing .choices').before(missionPicker);
const proPicker=document.createElement('nav');proPicker.className='pro-picker';proPicker.setAttribute('aria-label','Optional pro trials');proPicker.hidden=true;missionPicker.before(proPicker);
const expeditionPrep=document.createElement('section');expeditionPrep.className='expedition-prep';expeditionPrep.hidden=true;expeditionPrep.setAttribute('aria-label','Gauntlet preparation');expeditionPrep.innerHTML='<strong>Gorge gauntlet · four connected chapters</strong><ol><li>Gorge crossing · 4L / L, exposed edges</li><li>Ratchet climb · wheel placement and descent</li><li>Surge & stop · 4H / 2, then stop and select 4L / L</li><li>High reverse pocket · R positioning, then L exit</li></ol><p data-kit-status></p><p>Event rules require all-terrain or mud-terrain tyres and a raised intake for the fictional dust/spray environment. These are eligibility checks, not measured upgrades to grip, power or water capability. No water entry is allowed. A snorkel does not waterproof a Jimny.</p><p>Falling or entering the pool restarts the current chapter on dry ground. Previous chapters remain complete; each recovery costs eight score points.</p><a href="index.html#garage" data-prep-garage>Prepare your build in the garage →</a>';
missionPicker.after(expeditionPrep);expeditionPrep.querySelector('[data-prep-garage]').onclick=()=>save('thatsuvmod-trial-return',{mission:'pro-gorge-gauntlet',course:'urban'});
const roamLabel=document.createElement('label');roamLabel.className='check-label';roamLabel.innerHTML='<input type="checkbox" id="freeRoam"> Free roam · explore without checkpoints';missionPicker.after(roamLabel);
$('missionChoice').onchange=()=>{selectedMission=$('missionChoice').value;renderLobby();};
$('freeRoam').onchange=()=>{$('missionChoice').disabled=$('freeRoam').checked;renderLobby();};
// Learning has one home. Destination selection belongs only to exploration.
const modePicker=document.createElement('nav');modePicker.className='play-mode-picker';modePicker.setAttribute('aria-label','How would you like to drive?');
modePicker.innerHTML='<button type="button" data-play-mode="lessons">Lessons <small>Learn the controls & terrain</small></button><button type="button" data-play-mode="explore">Explore <small>Worlds & challenges</small></button>';
document.querySelector('.lobby-heading').after(modePicker);
const sceneryCredits=document.createElement('details');sceneryCredits.className='disclosure';
sceneryCredits.innerHTML='<summary>Scenery & data credits</summary><p>Distant Himachal terrain uses Mapzen Terrain Tiles. SRTM terrain data courtesy of the U.S. Geological Survey. The Manali-area elevation patch is resampled and uniformly scaled for scenery; this fictional course is not a geolocated route or navigation aid.</p><p>Photographed pine needles: Rico Cilliers / Rob Tuytel, <a href="https://polyhaven.com/a/pine_tree_01" target="_blank" rel="noopener">Poly Haven Pine Tree 01</a> (CC0). Scanned rock: Rico Cilliers / Poly Haven Boulder 01 (CC0). Source records and processing details are bundled with the local assets.</p>';
$('lobby').append(sceneryCredits);
const modeChoices={lessons:{course:COURSES[0],mission:selectedMission,difficulty:'explorer',roam:false},explore:{course:COURSES[1],mission:getMissions(COURSES[1])[0].id,difficulty:'explorer',roam:false}};
$('lobby').dataset.expeditionCount=String(COURSES.filter(c=>c.id!=='school').reduce((sum,c)=>sum+getMissions(c).length,0));
modePicker.addEventListener('click',event=>{const button=event.target.closest('[data-play-mode]');if(!button)return;const current=selected.id==='school'?'lessons':'explore',next=button.dataset.playMode;if(current===next)return;modeChoices[current]={course:selected,mission:selectedMission,difficulty:$('difficulty').value,roam:$('freeRoam').checked};const choice=modeChoices[next];selected=choice.course;selectedMission=choice.mission;$('difficulty').value=choice.difficulty;$('freeRoam').checked=choice.roam;renderLobby();});
const keys=new Set(),physicalKeys=new Set(),touch=new Set(),savedRecords=read(progressKey,{}),records=savedRecords&&typeof savedRecords==='object'&&!Array.isArray(savedRecords)?savedRecords:{};let sound=false,soundWanted=read('thatsuvmod-sound-enabled',true)!==false,previewDrawn=false;
const badgeCollection=mountBadges({getRecords:()=>records,getPlayer:()=>player,openDialog:showDialog,returnTo:showDialog});
const trailAudio=new TrailAudio({mix:read('thatsuvmod-audio-v1',{})});
const engineOption=document.createElement('label');engineOption.className='check-label sound-start';engineOption.innerHTML='<input id="soundEnabled" type="checkbox"> Engine & environment sound when driving';$('startButton').before(engineOption);$('soundEnabled').checked=soundWanted;$('soundEnabled').onchange=()=>{soundWanted=$('soundEnabled').checked;save('thatsuvmod-sound-enabled',soundWanted);};
const spotter=new Spotter(),coachPrefs=read('thatsuvmod-coach-v1',{});let inspectionReturn='drive',inspectionProblem=null,autoInspect=coachPrefs.autoInspect!==false,voiceWanted=coachPrefs.voice===true,lastSpokenCue='',voiceControlState='';
async function playLiveCoaching(cue,callbacks){
  let event=null;const finish=()=>{if(event&&event.end===undefined)event.end=state.elapsed;};
  callbacks.signal.addEventListener('abort',finish,{once:true});
  const handle=await trailAudio.playCoaching(cue,{...callbacks,onStart:()=>{
    if(running){event={time:state.elapsed,id:cue.id};voiceEvents.push(event);while(voiceEvents.length&&voiceEvents[0].time<state.elapsed-130)voiceEvents.shift();}
    callbacks.onStart();
  },onEnd:()=>{finish();callbacks.onEnd();},onError:error=>{finish();callbacks.onError(error);}});
  return {stop(){finish();handle.stop();callbacks.signal.removeEventListener('abort',finish);}};
}
const voice=new VoiceCoach({playRecorded:playLiveCoaching,onStatus:message=>{const error=/No local|could not|No audio/.test(message);$('spokenStatus').textContent=error?message:'';if($('inspectionVoiceStatus'))$('inspectionVoiceStatus').textContent=error?message:'';if($('voiceStatus'))$('voiceStatus').textContent=message;syncVoiceUI();}});voice.voiceURI=coachPrefs.voiceURI||'';
document.querySelector('.lobby-heading').insertAdjacentHTML('beforeend','<label class="check-label voice-start"><input id="voiceEnabled" type="checkbox"> Spoken coaching · hear the next control instruction</label>');
document.querySelector('.lobby-grid>section').insertAdjacentHTML('beforeend','<details class="player-options"><summary>Coaching & spotter settings</summary><label>Instructor<select id="coachMode"><option value="recorded">Cillian · natural recorded coaching</option><option value="device">Device voice only</option></select></label><label>Fallback English device voice<select id="coachVoiceChoice"></select></label><label class="check-label"><input id="autoSpotter" type="checkbox"> Automatically inspect persistent low-speed problems</label><p id="voiceStatus" class="fine">Recordings play locally. Additional instructions use your device voice. No microphone or runtime cloud speech request. Captions always remain available.</p></details>');
$('voiceEnabled').checked=voiceWanted;$('autoSpotter').checked=autoInspect;$('autoSpotter').nextSibling.textContent=' Show a live wheel close-up when progress stalls';
function syncVoiceUI(){$('coachVoice').textContent=voice.enabled?'Voice on':'Voice off';$('coachVoice').setAttribute('aria-pressed',String(voice.enabled));}
function saveCoachPrefs(){save('thatsuvmod-coach-v1',{voice:voiceWanted,autoInspect,voiceURI:voice.voiceURI,mode:voice.mode});}
voice.setMode(coachPrefs.mode);$('coachMode').value=voice.mode;$('coachMode').onchange=()=>{voice.setMode($('coachMode').value);saveCoachPrefs();};
function populateVoices(){const voices=voice.voices;$('coachVoiceChoice').replaceChildren(...voices.map(v=>{const o=document.createElement('option');o.value=v.voiceURI;o.textContent=v.name+' · '+v.lang;return o;}));if(!voices.length){const o=document.createElement('option');o.textContent='No local English voice available';$('coachVoiceChoice').append(o);}else{$('coachVoiceChoice').value=voices.some(v=>v.voiceURI===voice.voiceURI)?voice.voiceURI:voices.find(v=>v.lang==='en-GB')?.voiceURI||voices[0].voiceURI;voice.voiceURI=$('coachVoiceChoice').value;}}
populateVoices();globalThis.speechSynthesis?.addEventListener('voiceschanged',populateVoices);
function enableVoice(on){voiceWanted=on;const enabled=voice.setEnabled(on);$('voiceEnabled').checked=enabled;saveCoachPrefs();syncVoiceUI();return enabled;}
$('voiceEnabled').onchange=()=>{if(enableVoice($('voiceEnabled').checked))voice.sayCue('start-drive',{force:true});};
$('coachVoiceChoice').onchange=()=>{voice.voiceURI=$('coachVoiceChoice').value;saveCoachPrefs();if(voice.enabled)voice.say('This voice will guide your next control.','voice-test',{force:true});};
$('autoSpotter').onchange=()=>{autoInspect=$('autoSpotter').checked;saveCoachPrefs();};
$('coachVoice').onclick=()=>{if(enableVoice(!voice.enabled))voice.say(coaching(),'manual',{force:true});};
$('hearAgain').onclick=()=>{if(voice.enabled||enableVoice(true))voice.say(coaching(),'repeat',{force:true});};
function showDialog(id){running=false;clearInputs();voice.stop();if(voice.enabled&&$('voiceStatus'))$('voiceStatus').textContent='Spoken coaching paused · captions remain available.';for(const key of dialogs)if($(key).open)$(key).close();if(id==='lobby')showLobby();else $(id).showModal();trailAudio.pause();}
// The course lobby is the landing state, so it stays non-modal: the shared site header
// above it remains usable while the paused game behind it is made inert.
function showLobby(){const lobby=$('lobby');$('game').inert=true;document.body.classList.add('drive-lobby-open');lobby.show();lobby.focus({preventScroll:true});}
$('lobby').addEventListener('close',()=>{$('game').inert=false;document.body.classList.remove('drive-lobby-open');});
function closeDialogs(){for(const id of dialogs)if($(id).open)$(id).close();}
function clearInputs(){physicalKeys.clear();keys.clear();touch.clear();state.throttle=0;state.braking=0;document.querySelectorAll('[data-input]').forEach(b=>b.classList.remove('held'));}
function syncPressedKeys(){keys.clear();for(const code of canonicalPressedCodes(physicalKeys))keys.add(code);}
function announce(message,seconds=5){notice=message;noticeUntil=performance.now()+seconds*1000;updateHUD();if(running)voice.sayAutomatic(message,{immediate:true});}
function currentInput(){return drivingInput(keys,touch);}
function bindHold(button){
  const name=button.dataset.input;
  button.addEventListener('pointerdown',event=>{if(!running)return;event.preventDefault();button.setPointerCapture(event.pointerId);touch.add(name);button.classList.add('held');});
  const release=()=>{touch.delete(name);button.classList.remove('held');};button.addEventListener('pointerup',release);button.addEventListener('pointercancel',release);button.addEventListener('lostpointercapture',release);
  button.addEventListener('keydown',event=>{if(['Enter',' '].includes(event.key)&&running){event.preventDefault();event.stopPropagation();touch.add(name);button.classList.add('held');}});button.addEventListener('keyup',release);button.addEventListener('blur',release);
}
document.querySelectorAll('[data-input]').forEach(bindHold);
window.addEventListener('keydown',event=>{
  if(event.ctrlKey||event.metaKey||event.altKey){clearInputs();return;}
  const code=translateCode(event.code);if(!code)return;
  if(code==='Escape'){if(running){event.preventDefault();showDialog('pause');}return;}
  if(!running||/INPUT|TEXTAREA/.test(event.target.tagName)||event.target.isContentEditable)return;
  // A previously clicked selector must not swallow driving shortcuts. Native
  // select arrows keep their normal meaning only while that select has focus.
  if(event.target.tagName==='SELECT'&&event.code.startsWith('Arrow'))return;
  if(['KeyW','KeyA','KeyD','KeyF','KeyH','Space','ShiftLeft'].includes(code)){event.preventDefault();physicalKeys.add(event.code);syncPressedKeys();}
  if(!event.repeat&&['KeyQ','KeyE'].includes(code)){
    event.preventDefault();moveSelector(code==='KeyE'?1:-1);
  }
  if(!event.repeat&&/^Digit[123]$/.test(code)){event.preventDefault();document.querySelector(`[data-range="${{'Digit1':'2H','Digit2':'4H','Digit3':'4L'}[code]}"]`).click();}
  if(code==='KeyH'&&!event.repeat&&Math.abs(state.speed)<.1){state.parking=!state.parking;noticeUntil=0;updateHUD();}
  if(code==='KeyM'&&!event.repeat){event.preventDefault();$('map').classList.toggle('map-expanded');}
  if(code==='KeyC'&&!event.repeat){event.preventDefault();$('cameraButton').value=view.cycleCamera();updateCameraLabel();}
});
window.addEventListener('keyup',event=>{physicalKeys.delete(event.code);syncPressedKeys();});
window.addEventListener('blur',()=>{clearInputs();if(running)showDialog('pause');});
document.addEventListener('visibilitychange',()=>{if(document.hidden){voice.stop();if(running)showDialog('pause');}});
for(const id of dialogs)$(id).addEventListener('cancel',event=>{event.preventDefault();if(id==='badges')badgeCollection.close();else if(id==='inspection')closeInspection();else if(id==='shareRun'){if(exportController)exportController.abort();else closeShare();}else if(id==='help')showDialog(helpReturn);else if(id==='pause')resume();});

function renderLobby(){
  const lessons=selected.id==='school',mode=lessons?'lessons':'explore';$('lobby').dataset.playMode=mode;$('lobby').dataset.terrain=selected.id;
  modePicker.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.playMode===mode)));
  roamLabel.hidden=lessons;if(lessons)$('freeRoam').checked=false;$('missionChoice').disabled=$('freeRoam').checked;
  $('courseList').hidden=lessons;
  $('courseList').replaceChildren(...COURSES.filter(c=>c.id!=='school').map(c=>{const b=document.createElement('button');b.type='button';b.dataset.course=c.id;b.setAttribute('aria-pressed',String(c.id===selected.id));const title=document.createElement('strong');title.textContent=c.name;const time=document.createElement('span');time.textContent=c.time;const note=document.createElement('small');note.textContent=c.place;b.append(title,time,note);b.onclick=()=>{selected=c;renderLobby();};return b;}));
  $('coursePlace').textContent=selected.place;$('briefTitle').textContent=selected.name;$('briefDescription').textContent=selected.description;$('lessonList').replaceChildren(...selected.lessons.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
  const missions=getMissions(selected);if(!missions.some(m=>m.id===selectedMission))selectedMission=(missions.find(m=>!m.expertTrial)||missions[0]).id;
  const trials=missions.filter(m=>m.expertTrial);proPicker.hidden=!trials.length;proPicker.replaceChildren();if(trials.length){const title=document.createElement('strong');title.textContent='PRO TRIALS / exposed edges';proPicker.append(title);for(const m of trials){const button=document.createElement('button');button.type='button';button.textContent=m.name.split(' / ')[1];button.setAttribute('aria-pressed',String(selectedMission===m.id&&!$('freeRoam').checked));button.onclick=()=>{selectedMission=m.id;$('freeRoam').checked=false;renderLobby();};proPicker.append(button);}}
  $('missionChoice').replaceChildren(...missions.map(m=>{const o=document.createElement('option');o.value=m.id;o.textContent=m.name;return o;}));$('missionChoice').value=selectedMission;
  const roamSize=Math.round(selected.size*(selected.id!=='school'?Math.sqrt(3):1));
  $('missionDescription').textContent=$('freeRoam').checked?`Explore the ${roamSize} × ${roamSize} m environment without checkpoints. Recover whenever you need to.${selected.id==='mountain'?' Use the guarded bridge; entering the river safety zone returns you to the start.':''}`:getMission(selected,selectedMission).summary;
  const record=records[`${selected.worldId}-${selectedMission}-${$('difficulty').value}-${$('bodyChoice').value}`];$('best').textContent=record?`Your best: ${record.score}/100 · ${record.medal}`:'No score yet. Take your time; there is no race timer.';
  $('buildNote').textContent='Saved paint, decals and supported visual parts carry over. Driving uses approximate stock mechanical settings, not claimed product performance.';
  const needsKit=!$('freeRoam').checked&&getMission(selected,selectedMission).equipmentRequired,kit=gauntletEquipment(build,window.JIMNY_MARKET_PRODUCTS||[]);expeditionPrep.hidden=!needsKit;
  expeditionPrep.querySelector('[data-kit-status]').textContent=kit.ready?'Saved build ready: off-road tyres + raised intake.':`Missing from your saved build: ${kit.missing.join(' + ')}.`;
  expeditionPrep.dataset.ready=String(kit.ready);$('startButton').disabled=loading||!!needsKit&&!kit.ready;
  $('resumeButton').hidden=!started||state.finished;
}
$('bodyChoice').value=build.body==='3door'?'3door':'5door';$('difficulty').onchange=renderLobby;$('bodyChoice').onchange=renderLobby;
function refreshSavedKit(){const current=read('thatsuvmod-build',{});if(current&&typeof current==='object'&&!Array.isArray(current)){for(const key of Object.keys(build))delete build[key];Object.assign(build,current);}if($('lobby').open)renderLobby();}
window.addEventListener('pageshow',refreshSavedKit);window.addEventListener('focus',refreshSavedKit);window.addEventListener('storage',event=>{if(event.key==='thatsuvmod-build')refreshSavedKit();});
function trainingRequirement(){
  if(freeRoam)return '';
  const target=gates[gate];if(!target)return '';
  const status=checkpointStatus(state,target,difficulty);if(status.reason)return status.reason;
  if(mission.expertTrial)return `${mission.chained?`Chapter ${target.chapter+1}/4 · ${GAUNTLET_STAGES[target.chapter].name}. `:''}Next: ${target.range} / ${target.gear}${target.reverse?' · reverse into the pocket':''}${target.stop?' · full stop':target.minSpeed?` · ${target.minSpeed}–${target.maxSpeed} km/h`:` · below ${target.maxSpeed} km/h`} · ${target.link?'follow the ground link to the next staging box.':'stay on the marked elevated line.'}`;
  if(target.reverse)return state.gear==='R'?cueText('reverse'):'Reverse bay ahead: stop, choose R, then back into the marked area.';
  if(target.range&&state.range!==target.range)return `In the loose-surface yard, prepare ${target.range}. Use 4H first; stop and choose N before 4L.`;
  if(target.precision&&Math.hypot(state.x-target.x,state.z-target.z)<14)return 'Wheel-placement gate: line the whole Jimny up between the posts and crawl over the steps. Passing beside them does not clear this checkpoint.';
  if(target.stop&&!target.final&&Math.hypot(state.x-target.x,state.z-target.z)<20)return 'Stop checkpoint ahead: brake early and come to a complete stop between the posts before continuing.';
  return '';
}
function coaching(){
  if(performance.now()<noticeUntil)return notice;
  if(mission.expertTrial&&!freeRoam&&state.parking){const target=gates[gate];if(state.range!==target.range)return `Keep the parking brake on and stop in N. ${target.range==='4L'&&state.range==='2H'?'Select 4H first, then 4L':`Select ${target.range}`} on this loose staging surface. Then choose ${target.gear}.`;if(state.gear!==target.gear)return `Hold the brake and choose ${target.gear} for this stage. Keep the parking brake on until you are ready.`;}
  if(state.parking&&['P','N'].includes(state.gear))return cueText('start-drive');
  if(state.parking)return cueText('release-parking');
  if(spotter.lowProgress>2.5&&Math.abs(state.speed)<.8)return cueText('low-progress');
  const requirement=trainingRequirement();if(requirement)return requirement;
  if(['N','P'].includes(state.gear))return state.gear==='N'?cueText('neutral'):'Park selected. Hold the brake and choose D to set off.';
  if(spotter.problem?.id==='low-progress')return cueText('low-progress');
  if(state.physics==='rigid-body'&&state.wheelContacts?.some(c=>!c))return cueText('wheel-airborne');
  if(world.surface(state.x,state.z)==='tarmac'&&state.range!=='2H')return cueText('dry-tarmac');
  if(gate===gates.length-1&&Math.hypot(state.x-gates[gate].x,state.z-gates[gate].z)<12)return cueText('finish-bay');
  if(state.slip>.18)return cueText('wheelspin');
  if(world.surface(state.x,state.z)==='soft-sand')return 'Soft shoulder sand. Ease the accelerator if the tyres spin; aim for the firmer marked line.';
  if(freeRoam)return cueText('free-roam');
  if(state.hdcActive)return cueText('hill-descent');
  if(state.hdc&&state.hdcSuspended)return 'Hill descent paused after excessive speed. Brake below 25 km/h to let it re-enable.';
  if(state.hdc&&state.throttle>.05)return 'Accelerator pressed: hill descent braking is overridden. Release it to let the assistance work downhill.';
  const surface=world.surface(state.x,state.z),loose=!['tarmac','wet-tarmac'].includes(surface);
  if(loose&&mission.mode==='4L'&&state.range!=='4L')return cueText('prepare-4l');
  if(loose&&mission.mode==='4H'&&state.range==='2H')return 'This is loose ground. Straighten the wheels and select 4H before continuing.';
  if(Math.abs(state.speed)*3.6>(mission.speedLimit||DIFFICULTIES[difficulty].speed))return cueText('slow-down');
  const feature=world.features.find(f=>{const dx=f.x-state.x,dz=f.z-state.z,direction=state.gear==='R'?-1:1;return Math.hypot(dx,dz)<22&&(dx*Math.sin(state.yaw)+dz*Math.cos(state.yaw))*direction>0;});if(feature&&DIFFICULTIES[difficulty].hint)return `${feature.name} ahead. ${feature.type==='ruts'?'Slow down and watch each wheel placement. Show me pauses the scene for a closer look.':feature.type==='soft'?'The paler bowls are softer. Look for the darker, firmer gravel shoulders.':feature.type==='descent'?'Stay in gear and control your speed before the slope.':'Brake before turning and use small steering inputs.'}`;
  if(!DIFFICULTIES[difficulty].hint)return `Gate ${gate+1} of ${gates.length}. Choose your own line; precision is the challenge.`;
  if(state.pitch>.05)return cueText('descent');
  if(Math.abs(state.roll)>.1)return 'Uneven ground: reduce speed, avoid abrupt steering and keep the car aligned with the track.';
  return course.theme==='urban'?(loose?cueText('articulation'):cueText('urban-line')):course.id==='sand'?cueText('sand-line'):cueText('mountain-line');
}
function drawMap(){
  const c=$('map').getContext('2d'),b=world.bounds,scale=156/world.size,x=v=>12+(b.maxX-v)*scale,z=v=>168-(v-b.minZ)*scale;c.clearRect(0,0,180,180);c.strokeStyle='#78878c';c.lineWidth=1;c.strokeRect(12,12,156,156);
  for(const place of world.discoveries||[]){c.fillStyle=discovered.has(place.id)?'#91b19b':'#efab74';c.beginPath();c.arc(x(place.x),z(place.z),3,0,Math.PI*2);c.fill();}
  if(!freeRoam){c.strokeStyle='#cc8b60';c.lineWidth=2;c.beginPath();gates.forEach((p,i)=>i?c.lineTo(x(p.x),z(p.z)):c.moveTo(x(p.x),z(p.z)));c.stroke();const goal=gates[gate];c.fillStyle='#f8c19c';c.beginPath();c.arc(x(goal.x),z(goal.z),4,0,Math.PI*2);c.fill();}
  c.save();c.translate(x(state.x),z(state.z));c.rotate(-state.yaw);c.fillStyle='#fff9df';c.beginPath();c.moveTo(0,-6);c.lineTo(4,5);c.lineTo(-4,5);c.closePath();c.fill();c.restore();
}
function updateHUD(){
  const controlState=`${state.gear}:${state.range}:${state.parking}`,controlsChanged=controlState!==voiceControlState;voiceControlState=controlState;
  if(controlsChanged)voice.stop();
  wheelPreview=autoInspect?automaticWheelPreview(state,spotter.problem,spotter.lowProgress):null;view?.setWheelPreview(wheelPreview);
  $('cabinState').textContent=wheelPreview===null?`${state.gear} · ${state.range} · ${state.parking?'Park brake on':state.hdcActive?'HDC active':state.hdc?'HDC ready':'Park brake off'}`:`${WHEEL_NAMES[wheelPreview]} · ${state.wheelContacts?.[wheelPreview]===false?'no ground contact':'inspect clearance & contact'}`;updateCameraLabel();
  $('speed').textContent=Math.round(Math.abs(state.speed)*3.6);$('driveState').textContent=`${state.range} · ${state.gear}${['D','2'].includes(state.gear)?state.autoGear:''}`;$('rpm').textContent=`${Math.round(state.rpm/50)*50} rpm`;
  const pedal=drivingInput(canonicalPressedCodes(physicalKeys),touch).throttle;pedalReadout.textContent=`${pedal===PEDAL.full?'Full pedal':pedal===PEDAL.gentle?'Gentle pedal':pedal>0?'Drive pedal':'Pedal'} ${Math.round(pedal*100)}%`;
  $('checkpointLabel').textContent=freeRoam?(world.discoveries?.length?`Free roam · ${discovered.size}/${world.discoveries.length} places found`:`Free roam · ${Math.round(world.size)} m yard`):`Checkpoint ${gate+1} / ${gates.length} · ${Math.round(Math.hypot(state.x-gates[gate].x,state.z-gates[gate].z))} m`;$('progress').hidden=freeRoam;$('progress').max=gates.length;$('progress').value=gate;$('courseLabel').textContent=freeRoam?course.name:mission.name;
  if(mission.chained&&!freeRoam)$('checkpointLabel').textContent=`Chapter ${gates[gate].chapter+1}/4 · ${GAUNTLET_STAGES[gates[gate].chapter].name} · ${gate+1}/${gates.length}`;
  const message=coaching();if($('coachText').textContent!==message)$('coachText').textContent=message;
  if(running&&message!==lastSpokenCue&&voice.sayAutomatic(message))lastSpokenCue=message;
  const focus=/parking brake is on/i.test(message)?'parking':/select N|choose D|choose Drive|driving gear|select L on/i.test(message)?'gear':/select 4|then 4|four high|four low|four-wheel|transfer lever/i.test(message)?'transfer':/hill descent/i.test(message)?'hdc':/brake|stop completely/i.test(message)?'brake':null;
  for(const id of ['parking','gear','transfer','hdc'])$(id).classList.toggle('coach-focus',id===focus);document.querySelector('[data-input="brake"]').classList.toggle('coach-focus',focus==='brake');
  $('showMe').textContent=['low-progress','wheelspin','contact','uneven'].includes(spotter.problem?.id)?'Inspect problem':'Show me';
  $('condition').textContent=`${state.range==='2H'?'Rear-wheel drive':state.range==='4L'?'Low range · stability control off':'Four-wheel drive'} · ${state.brakeLSD?'brake-traction assistance':state.slip>.18?'wheelspin':world.surface(state.x,state.z)==='tarmac'?'dry tarmac':world.surface(state.x,state.z)==='soft-sand'?'soft shoulder sand':world.surface(state.x,state.z)==='sand'?'sand':'loose ground'}`;
  $('gear').value=state.gear;document.querySelectorAll('[data-range]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.range===state.range)));
  $('parking').setAttribute('aria-pressed',String(state.parking));$('parking').textContent=`Parking brake ${state.parking?'ON':'OFF'}`;$('hdc').setAttribute('aria-pressed',String(state.hdc));$('hdc').textContent=`Hill descent ${state.hdcActive?'ACTIVE':state.hdc&&state.hdcSuspended?'PAUSED':state.hdc?'READY':'OFF'}`;drawMap();
}
function resume(){closeDialogs();voice.stop();clearInputs();running=true;last=performance.now();accumulator=0;trailAudio.resume();updateHUD();$('stage').querySelector('canvas')?.focus({preventScroll:true});}
async function start(){
  if(!$('freeRoam').checked&&getMission(selected,selectedMission).equipmentRequired&&!gauntletEquipment(build,window.JIMNY_MARKET_PRODUCTS||[]).ready){renderLobby();expeditionPrep.scrollIntoView({block:'nearest'});return;}
  if(loading||!view)return;loading=true;$('startButton').disabled=true;$('startButton').textContent='Preparing your Jimny…';
  // Resume audio directly inside the player's start gesture, before model loads.
  await setSound(soundWanted);
  voice.stop();voice.resetAutomatic();voiceEvents.length=0;voice.setEnabled(voiceWanted);lastSpokenCue='';spotter.reset();
  const nextBody=$('bodyChoice').value,nextCourse=selected,nextDifficulty=$('difficulty').value;
  proAirborne=null;
  try{await view.loadVehicle(nextBody,build);updatePlayer();course=nextCourse;difficulty=nextDifficulty;world=makeWorld(course,difficulty);mission=getMission(course,selectedMission);freeRoam=$('freeRoam').checked;gates=makeGates(course,difficulty,mission.id);state=createVehicle(nextBody);Object.assign(state,(!freeRoam&&mission.spawn)||world.spawn||{x:0,z:0,yaw:0});state.y=(world.supportHeight||world.height)(state.x,state.z);gate=0;lastCollision=0;discovered.clear();state.wheelHeights=[0,0,0,0];replayBuffer.reset();rigidVehicle?.dispose();rigidVehicle=null;rigidVehicle=await createRigidVehicle(world,state);view.setWorld(world,freeRoam?[]:gates);started=true;noticeUntil=0;for(const id of ['hud','quick','console'])$(id).hidden=false;updateHUD();resume();}
  catch(error){$('buildNote').textContent='The vehicle or driving world could not start. Your saved build is safe; please retry or reload.';console.error(error);}
  finally{loading=false;$('startButton').disabled=false;$('startButton').textContent='Drive this course';renderLobby();}
}
function recover(){
  proAirborne=null;
  spotter.reset();
  replayBuffer.cut();
  if(mission.chained&&!freeRoam){const restart=gauntletRecovery(gates,gate);gate=restart.gate;Object.assign(state,restart.spawn);state.y=(world.supportHeight||world.height)(state.x,state.z);state.vx=state.vz=state.speed=state.steer=state.slip=state.throttle=0;state.parking=true;state.gear='N';state.recoveries++;rigidVehicle?.reset(state);view.resetCamera();clearInputs();announce(`Chapter ${restart.chapter+1}/4 restarted: ${restart.name}. Earlier chapters kept. Eight score points used. Select the required range and gear; release the parking brake.`);return;}
  const point=!freeRoam&&gate?gates[gate-1]:((!freeRoam&&mission.spawn)||world.spawn||{x:0,z:0,yaw:0}),next=gates[gate];state.x=point.x;state.z=point.z;state.y=(world.supportHeight||world.height)(point.x,point.z);state.yaw=freeRoam?(point.yaw||0):mission.expertTrial?(point.heading??point.yaw??0):Math.atan2(next.x-point.x,next.z-point.z);state.vx=state.vz=state.speed=state.steer=state.slip=state.throttle=0;state.parking=true;state.gear='N';state.recoveries++;state.penalty+=0;rigidVehicle?.reset(state);view.resetCamera();clearInputs();announce(freeRoam?'Returned to the start. Choose D and release the parking brake.':'Recovered to your last checkpoint. Eight score points used. Select the required gear and release the parking brake.');
}
function mountainContinuation(courseId,missionId){
  if(courseId!=='mountain')return null;
  if(['rock-river-technical','rock-river-bypass'].includes(missionId))return {mission:'mountain-ascent',label:'Continue to high pass',advice:'Continue from this bridge exit onto the longer gravel ascent. Your next drive starts safely parked; select low range on loose ground before climbing.'};
  if(missionId==='mountain-ascent')return {mission:'mountain-tarmac',label:'Continue on ridge road',advice:'The ridge road begins at the gravel turnout. Use 2H before joining the dry paved road; stop in the turnout to change range if needed. Your next drive starts safely parked in 2H.'};
  return null;
}
function finish(){
  const previousRecords={...records};
  state.finished=true;state.vx=state.vz=state.speed=0;state.parking=true;running=false;const r=resultFor(state,course,difficulty,mission.id),key=`${course.worldId}-${mission.id}-${difficulty}-${state.body}`;
  if(!records[key]||r.score>records[key].score)records[key]=r;const persisted=save(progressKey,records);
  badgeCollection.announce(newlyUnlocked(previousRecords,records));
  $('resultTitle').textContent=r.medal+'.';$('resultText').textContent=`${course.name} · ${DIFFICULTIES[difficulty].name} · ${state.body==='3door'?'3-door':'5-door'} Jimny`;
  $('resultStats').replaceChildren(...[[`${r.score}/100`,'Control score'],[`${Math.floor(r.seconds/60)}:${String(r.seconds%60).padStart(2,'0')}`,'Time, not a ranking'],[String(r.recoveries),'Recoveries']].map(([n,label])=>{const d=document.createElement('div'),b=document.createElement('strong'),s=document.createElement('span');b.textContent=n;s.textContent=label;d.append(b,s);return d;}));
  const continuation=mountainContinuation(course.id,mission.id);
  $('resultAdvice').textContent=(continuation?.advice||(r.score>=90?'A controlled run. Try a tighter line on the next challenge.':'Try again with earlier braking, smaller steering inputs and less wheelspin.'))+(persisted?' Your best score is saved on this device.':' Browser storage is unavailable; this score could not be saved.');$('nextCourse').textContent=continuation?.label||(course.id==='school'?(getMissions(course).at(-1).id===mission.id?'Choose another lesson':'Next lesson'):'Choose the next trail');showDialog('results');voice.sayCue('mission-complete',{force:true});
}
function physicsTick(){
  const input=currentInput();state.braking=input.brake;rigidVehicle?rigidVehicle.step(input,1/60):stepVehicle(state,input,world);
  const hazard=world.recoveryReason?.(state);if(hazard){recover();announce(hazard+(mission.chained&&!freeRoam?` Chapter ${gates[gate].chapter+1}/4 restarted on dry ground; earlier chapters kept.`:''),7);return;}
  if(mission.expertTrial&&!freeRoam){
    if(state.wheelContacts.every(c=>!c)){proAirborne??={y:state.y,time:state.elapsed};}
    else if(proAirborne){const fall=proAirborne.y-state.y>1.8&&state.elapsed-proAirborne.time>.4;proAirborne=null;if(fall){recover();announce(mission.chained?`Fell from the structure. Chapter ${gates[gate].chapter+1}/4 restarted; earlier chapters kept. Eight score points used.`:'Fell from the structure. Eight score points used; recover your line and try again.',6);return;}}
  }else proAirborne=null;
  const found=nearbyDiscoveries(world,state,[...discovered]);if(found.length){found.forEach(place=>discovered.add(place.id));announce(`Discovered: ${found[0].name}. ${found[0].description}`,8);}
  if(!freeRoam)state.penalty+=(Math.abs(state.speed)*3.6>(mission.speedLimit||DIFFICULTIES[difficulty].speed)?.015:0);
  if(state.impact>.8&&state.elapsed-lastCollision>1){state.penalty+=6;lastCollision=state.elapsed;spotter.contact(state.elapsed);trailAudio.cue('impact');announce(cueText('contact'),3);}
  // Open worlds have physical perimeter barriers, not invisible corridor resets.
  if(!world.contains(state.x,state.z,4)&&performance.now()>noticeUntil)announce(cueText('world-edge'),3);
  if(!freeRoam){const status=checkpointStatus(state,gates[gate],difficulty);
    if(status.reached){if(gate===gates.length-1)finish();else{gate++;trailAudio.cue('checkpoint');announce(`Checkpoint ${gate} cleared. ${trainingRequirement()||'Choose your line to the next marker.'}`,3);}}
  }
  replayBuffer.add(state,gate);
  // A spotter close-up must not interrupt the main driving camera or pause play.
  spotter.update(state,input,world);
}
function frame(now){
  const elapsed=last?Math.max(0,(now-last)/1000):0,dt=Math.min(elapsed,.08);last=now;
  if(running){accumulator+=dt;let ticks=0;while(accumulator>=1/60&&ticks++<5&&running){physicsTick();accumulator-=1/60;}}
  if(view&&(!document.hidden)&&(running||(!started&&!previewDrawn))){view.render(state,gate,running?dt:.016);previewDrawn=true;frameCount++;frameSeconds+=elapsed;if(frameSeconds>2){fps=frameCount/frameSeconds;frameCount=frameSeconds=0;}}
  if(running&&(uiTick+=dt)>.1){updateHUD();uiTick=0;if(sound)trailAudio.update(state,{surface:world.surface(state.x,state.z),interior:['interior','dashboard','controls'].includes($('cameraButton').value),coaching:!!voice.active});}
  requestAnimationFrame(frame);
}
$('startButton').onclick=start;$('resumeButton').onclick=resume;$('continueButton').onclick=resume;$('pauseButton').onclick=()=>showDialog('pause');$('menuButton').onclick=()=>{renderLobby();showDialog('lobby');};$('changeCourse').onclick=()=>{renderLobby();showDialog('lobby');};
function help(){helpReturn=started&&!state.finished?'pause':'lobby';showDialog('help');}
$('helpButton').onclick=help;$('pausedHelp').onclick=help;$('closeHelp').onclick=()=>showDialog(helpReturn);
$('nextCourse').onclick=async()=>{
  if(loading)return;
  const continuation=mountainContinuation(course.id,mission.id);
  if(continuation){
    selected=course;selectedMission=continuation.mission;$('freeRoam').checked=false;$('difficulty').value=difficulty;$('bodyChoice').value=state.body;
    // Explicit player action only. start() builds fresh physical state at the
    // connected mission spawn, with Neutral and parking brake safely applied.
    renderLobby();$('nextCourse').disabled=true;try{await start();if(!running)showDialog('lobby');}finally{$('nextCourse').disabled=false;}return;
  }
  if(course.id==='school'){selected=course;const lessons=getMissions(course);selectedMission=lessons[(lessons.findIndex(m=>m.id===mission.id)+1)%lessons.length].id;}
  else{const destinations=COURSES.filter(c=>c.id!=='school');selected=destinations[(destinations.indexOf(course)+1)%destinations.length];selectedMission=getMissions(selected)[0].id;}
  $('difficulty').value=difficulty;renderLobby();showDialog('lobby');
};$('replay').onclick=()=>{selected=course;selectedMission=mission.id;$('freeRoam').checked=freeRoam;$('difficulty').value=difficulty;$('bodyChoice').value=state.body;start();};
$('resetButton').onclick=()=>{if(running)recover();};
function syncThumbnail(){const visible=!thumbnailCollapsed&&(wheelPreview!==null||$('cameraButton').value!=='interior');coachPanel.dataset.thumbnail=thumbnailCollapsed?'collapsed':'expanded';coachPanel.dataset.wheelPreview=String(wheelPreview!==null);$('cabinPreview').hidden=!visible;cabinCard.hidden=!visible;thumbnailToggle.hidden=!thumbnailCollapsed||(wheelPreview===null&&$('cameraButton').value==='interior');thumbnailToggle.textContent=wheelPreview!==null?'Show wheel close-up':'Show cabin view';thumbnailToggle.setAttribute('aria-expanded',String(visible));view?.setThumbnailVisible(visible&&(coachPanel.dataset.coaching!=='compact'||wheelPreview!==null));}
function updateCameraLabel(){const interior=$('cameraButton').value==='interior';$('game').dataset.camera=$('cameraButton').value;$('cabinPreview').setAttribute('aria-label',wheelPreview!==null?`${WHEEL_NAMES[wheelPreview]} live close-up. Open paused inspection.`:`Live cabin controls: ${state.gear}, ${state.range}. ${interior?'Switch to exterior':'Open cockpit'} view.`);$('cabinPreview').setAttribute('aria-pressed',String(interior));$('cabinPreview').querySelector('span').textContent=wheelPreview!==null?'Wheel close-up · inspect':interior?'Return to exterior':'Open cockpit';syncThumbnail();}
$('cameraButton').onchange=()=>{view.setCamera($('cameraButton').value);updateCameraLabel();$('cameraButton').blur();};
$('cabinPreview').onclick=()=>{if(wheelPreview!==null){openInspection('drive');return;}$('cameraButton').value=view.setCamera($('cameraButton').value==='interior'?'external':'interior');updateCameraLabel();$('cabinPreview').blur();};
$('parking').onclick=()=>{if(Math.abs(state.speed)>.1){announce('Stop before applying the parking brake in this practice game.');return;}state.parking=!state.parking;noticeUntil=0;updateHUD();};
$('gear').onchange=event=>{const error=shiftGear(state,event.target.value);if(error)announce(error);else noticeUntil=0;updateHUD();event.target.blur();};
document.querySelectorAll('[data-range]').forEach(b=>b.onclick=()=>{const error=shiftRange(state,b.dataset.range,world.surface(state.x,state.z));if(error)announce(error);else announce(cueText('range-'+state.range.toLowerCase()));});
$('hdc').onclick=()=>{const error=toggleHdc(state);if(error)announce(error);else announce(state.hdc?'Hill descent ready. Release the accelerator on a descent; remain ready to brake.':'Hill descent switched off.');};
async function setSound(on){try{sound=await trailAudio.enable(on);$('soundButton').textContent=sound?'Sound on':'Enable sound';$('soundButton').setAttribute('aria-pressed',String(sound));if(sound)trailAudio.update(state,{surface:world.surface(state.x,state.z)});}catch{sound=false;$('soundButton').textContent='Retry sound';$('soundButton').setAttribute('aria-pressed','false');announce('Audio could not start. Use Retry sound; driving remains available.');}}
$('soundButton').onclick=async()=>{soundWanted=!sound;$('soundEnabled').checked=soundWanted;save('thatsuvmod-sound-enabled',soundWanted);await setSound(soundWanted);};
function moveSelector(direction){if(!running)return;const gears=['P','R','N','D','2','L'],next=gears[Math.max(0,Math.min(5,gears.indexOf(state.gear)+direction))];const error=shiftGear(state,next);if(error)announce(error);else{noticeUntil=0;trailAudio.cue('shift');}updateHUD();}
const gearSteps=document.createElement('span');gearSteps.className='gear-steps';gearSteps.innerHTML='<button id="gearPrevious" type="button" aria-label="Previous automatic selector position"></button><button id="gearNext" type="button" aria-label="Next automatic selector position"></button>';$('gear').after(gearSteps);$('gearPrevious').onclick=()=>moveSelector(-1);$('gearNext').onclick=()=>moveSelector(1);
const gearSeg=document.createElement('span');gearSeg.className='gear-seg';$('gear').before(gearSeg);gearSeg.append($('gearPrevious'),$('gear'),$('gearNext'));gearSteps.remove();
const mixSettings=document.createElement('details');mixSettings.className='audio-settings';mixSettings.innerHTML='<summary>Sound mix</summary><p class="fine">Original procedural engine, contact and wind effects — not a recording of a real Jimny. Device speech volume is controlled separately by your system.</p>';
for(const [key,label] of [['master','Master'],['vehicle','Engine & tyres'],['environment','Wind & surroundings'],['coaching','Recorded instructor'],['ui','Control feedback']]){const item=document.createElement('label'),range=document.createElement('input');item.textContent=label;range.type='range';range.min='0';range.max='100';range.value=String((trailAudio.mix[key]??DEFAULT_MIX[key])*100);range.setAttribute('aria-label',label+' volume');range.oninput=()=>{trailAudio.setMix(key,Number(range.value)/100);save('thatsuvmod-audio-v1',trailAudio.mix);};item.append(range);mixSettings.append(item);}$('pause').append(mixSettings);
function syncKeyboardHints(){
  $('gearPrevious').textContent='‹';$('gearNext').textContent='›';$('gearPrevious').title=`Previous selector position (${bindingLabel('gearDown')})`;$('gearNext').title=`Next selector position (${bindingLabel('gearUp')})`;
  document.querySelectorAll('[data-range]').forEach(b=>{const keys=bindingLabel(b.dataset.range.toLowerCase());b.textContent=b.dataset.range;b.title=`${b.dataset.range}: ${keys}`;});
  for(const [input,action]of [['gas','throttle'],['brake','brake'],['left','left'],['right','right']])document.querySelector(`[data-input="${input}"] small`).textContent=bindingLabel(action);
  const hint=document.querySelector('.key-hint'),items=[['throttle','drive'],['full','full power'],['brake','brake'],['gentle','gentle'],['gearDown','selector down'],['gearUp','selector up'],['handbrake','handbrake'],['camera','camera'],['map','map'],['pause','pause']];
  hint.replaceChildren(...items.map(([action,text])=>{const item=document.createElement('span');for(const key of bindingLabel(action).split(' / ')){const cap=document.createElement('kbd');cap.textContent=key;item.append(cap);}item.append(text);return item;}));
  document.querySelector('#help>p').textContent=`4-speed automatic only. ${bindingLabel('throttle')} holds a brisk ${Math.round(PEDAL.normal*100)}% pedal; ${bindingLabel('brake')} brakes, not reverse. ${bindingLabel('left')} / ${bindingLabel('right')} steers. ${bindingLabel('gentle')} holds gentle ${Math.round(PEDAL.gentle*100)}% throttle; ${bindingLabel('full')} holds full 100% throttle, overriding gentle while held. F is full power for overtaking and open ground; traction, brakes and gearing still limit acceleration. 4H and 4L are slower than 2H but pull harder at low speed. ${bindingLabel('gearDown')} / ${bindingLabel('gearUp')} changes selector. ${bindingLabel('2h')}, ${bindingLabel('4h')}, ${bindingLabel('4l')} request 2H, 4H, 4L with the usual stop, brake and Neutral guards. ${bindingLabel('handbrake')} holds the handbrake while moving or toggles the parking brake while stopped. ${bindingLabel('camera')} changes camera, ${bindingLabel('map')} enlarges the map, ${bindingLabel('pause')} pauses. On-screen controls always work.`;
  $('stage').querySelector('canvas')?.setAttribute('aria-label',`Live 3D Jimny practice course. ${bindingLabel('throttle')} accelerate, ${bindingLabel('brake')} brake, ${bindingLabel('pause')} pause. Use Controls & help for all keys.`);
}
const keyboardSettings=document.createElement('details');keyboardSettings.className='audio-settings keyboard-settings';keyboardSettings.innerHTML='<summary>Customize keyboard controls</summary>';$('closeHelp').before(keyboardSettings);const keyboardContainer=document.createElement('div');keyboardSettings.append(keyboardContainer);mountKeyBindingsSettings(keyboardContainer,{onChange:()=>{clearInputs();syncKeyboardHints();}});
function renderInspection(shot,wheel=null){
  view.setInspection(wheel);view.render(state,gate,0,shot);const canvas=$('inspectionCanvas');canvas.getContext('2d').drawImage(view.canvas,0,0,canvas.width,canvas.height);
  document.querySelectorAll('[data-inspect-shot]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.inspectShot===shot)));
  $('inspectionMetric').textContent=wheel===null?'Compare the line and clearance. Select a wheel for a contact-height close-up.':`${WHEEL_NAMES[wheel]} highlighted · ground ${Math.round((state.wheelHeights[wheel]-Math.min(...state.wheelHeights))*100)} cm above the lowest wheel sample. Right/left are from the seated driver’s perspective.`;
}
function openInspection(from='drive'){
  if(!started||loading||exportController)return;inspectionReturn=from;inspectionProblem=spotter.problem||diagnose(state,world);showDialog('inspection');
  $('inspectionTitle').textContent=inspectionProblem.title;$('inspectionEvidence').textContent=inspectionProblem.evidence;$('inspectionAdvice').textContent=inspectionProblem.advice;$('closeInspection').textContent=from==='drive'?'Continue driving':'Back to pause menu';
  $('inspectionVoiceStatus').textContent='';view.beginCapture(1280,800);renderInspection(inspectionProblem.shot,inspectionProblem.wheel);voice.say(inspectionProblem.title+'. '+inspectionProblem.advice,'inspection',{force:true});
}
function closeInspection(){voice.stop();view.setInspection(null,false);view.endCapture();view.resetCamera();view.render(state,gate,0);if(inspectionReturn==='drive')resume();else showDialog('pause');}
$('showMe').onclick=()=>openInspection('drive');$('closeInspection').onclick=closeInspection;$('speakInspection').onclick=()=>{if(voice.enabled||enableVoice(true))voice.say(inspectionProblem.title+'. '+inspectionProblem.advice,'inspection-repeat',{force:true});};
document.querySelectorAll('[data-inspect-shot]').forEach(b=>b.onclick=()=>renderInspection(b.dataset.inspectShot,b.dataset.wheel===undefined?null:Number(b.dataset.wheel)));
const frontInspection=document.createElement('button');frontInspection.type='button';frontInspection.dataset.inspectShot='front';frontInspection.textContent='Front overview';frontInspection.onclick=()=>renderInspection('front');$('inspectionAngles').prepend(frontInspection);
const inspectionVoiceStatus=document.createElement('p');inspectionVoiceStatus.id='inspectionVoiceStatus';inspectionVoiceStatus.className='fine';inspectionVoiceStatus.setAttribute('role','status');$('inspectionAdvice').after(inspectionVoiceStatus);
const inspectPaused=document.createElement('button');inspectPaused.type='button';inspectPaused.textContent='Inspect car & ground';inspectPaused.onclick=()=>openInspection('pause');$('pause').append(inspectPaused);
for(const [id,label] of [['pause','Replay & share'],['results','Make a video recap']]){const button=document.createElement('button');button.type='button';button.textContent=label;button.dataset.shareRun='';button.onclick=()=>openShare(id);$(id).append(button);}
function clearRecap(){if(recapURL){URL.revokeObjectURL(recapURL);recapURL='';}$('recapVideo').pause();$('recapVideo').removeAttribute('src');$('recapVideo').load();$('recapVideo').hidden=true;$('downloadRecap').hidden=true;}
function openShare(from){shareReturn=from;showDialog('shareRun');clearRecap();$('recapCanvas').hidden=true;$('recapStatus').textContent='Choose a camera edit, then create your clip.';const duration=replayBuffer.duration;$('replayAvailable').textContent=duration<3?'Drive for at least 3 seconds to unlock a recap. You can save a still image now.':`${Math.floor(duration)} seconds of this run are available. The latest two minutes stay in memory until you start a new course.`;$('createRecap').disabled=duration<3||!videoFormat();$('recapCoaching').disabled=!voiceEvents.some(e=>e.end>e.time);$('recapCoachingNote').textContent=$('recapCoaching').disabled?'No recorded coaching in this run. Enable Spoken coaching before driving to include it.':'Replays only the recorded instructions you actually heard, including interruptions.';if(!videoFormat())$('recapStatus').textContent='Video export is unavailable in this browser. Save an image instead.';}
function closeShare(){clearRecap();$('recapCanvas').hidden=true;showDialog(shareReturn);}
function exportBusy(on){for(const id of ['createRecap','saveTrailImage','closeRecap','recapLength','recapStyle','recapFormat','recapAudio','recapCoaching'])$(id).disabled=on||id==='recapCoaching'&&!voiceEvents.some(e=>e.end>e.time);$('cancelRecap').hidden=!on;$('recapProgress').hidden=!on;}
const exportAudioLabel=document.createElement('label');exportAudioLabel.className='check-label';exportAudioLabel.innerHTML='<input id="recapAudio" type="checkbox" checked> Include engine, tyre and environment audio';document.querySelector('.share-options').after(exportAudioLabel);
const exportCoachLabel=document.createElement('label');exportCoachLabel.className='check-label';exportCoachLabel.innerHTML='<input id="recapCoaching" type="checkbox" checked> Include recorded instructor';exportAudioLabel.after(exportCoachLabel);const exportCoachNote=document.createElement('p');exportCoachNote.id='recapCoachingNote';exportCoachNote.className='fine';exportCoachLabel.after(exportCoachNote);
document.querySelector('#shareRun>.fine:last-child').textContent='Camera cuts replay your recorded motion. Optional game audio and recorded coaching follow the drive. MP4 or WebM depends on your browser. Keep this tab visible; nothing is uploaded. Device speech is not recorded.';
$('closeRecap').onclick=closeShare;$('cancelRecap').onclick=()=>exportController?.abort();
for(const id of ['recapLength','recapStyle','recapFormat','recapAudio','recapCoaching'])$(id).onchange=()=>{clearRecap();$('recapCanvas').hidden=true;$('recapStatus').textContent='Options changed. Create a new recap to preview this edit.';};
$('createRecap').onclick=async()=>{
  if(exportController)return;clearRecap();const frames=replayBuffer.clip(Number($('recapLength').value));if(frames.length<2)return;
  const duration=frames.at(-1).elapsed-frames[0].elapsed,[width,height]=exportSize($('recapFormat').value),style=$('recapStyle').value,canvas=$('recapCanvas'),ctx=canvas.getContext('2d');
  const segments=$('recapCoaching').checked?voiceReplaySegments(voiceEvents,frames[0].elapsed,frames.at(-1).elapsed):[],effects=$('recapAudio').checked;
  let narrationFailed=false;const narration=new ReplayCoaching(segments,(id,options)=>trailAudio.playCoaching(getVoiceCue(id),{...options,onError:()=>{narrationFailed=true;}}));
  canvas.width=width;canvas.height=height;canvas.hidden=false;exportController=new AbortController();exportBusy(true);view.beginCapture(width,height);exportController.signal.addEventListener('abort',()=>narration.stop(),{once:true});
  try{
    $('recapStatus').textContent='Preparing your replay and selected audio…';
    await Promise.all([...new Set(segments.map(e=>e.id))].map(id=>trailAudio.loadCoaching(getVoiceCue(id),{signal:exportController.signal})));
    if(exportController.signal.aborted)throw new DOMException('Aborted','AbortError');
    const audioStream=effects||segments.length?await trailAudio.beginRecording({effects}):undefined;const result=await recordCanvas({canvas,duration,audioStream,signal:exportController.signal,onProgress:p=>{$('recapProgress').value=p;$('recapStatus').textContent=`Creating your ${Math.round(duration)}-second recap · ${Math.round(p*100)}%. Keep this tab visible.`;},draw:t=>{const recorded=sampleReplay(frames,t);narration.tick(t);if(audioStream)trailAudio.update(recorded,{surface:world.surface(recorded.x,recorded.z),coaching:!!narration.active});view.render(recorded,recorded.gate,1/30,recapShot(style,t));ctx.drawImage(view.canvas,0,0,width,height);stampFrame(ctx,{width,height,title:`${player.name||'Trail driver'} / ${course.name}`,detail:`${Math.round(Math.abs(recorded.speed)*3.6)} km/h · ${recorded.range} · ${recorded.gear} · game replay / jimnygami`});}});
    recapURL=URL.createObjectURL(result.blob);$('recapVideo').src=recapURL;$('recapVideo').hidden=false;canvas.hidden=true;const link=$('downloadRecap');link.href=recapURL;link.download=`jimny-${course.id}-recap.${result.extension}`;link.textContent=`Download ${result.extension.toUpperCase()} · ${(result.blob.size/1048576).toFixed(1)} MB`;link.hidden=false;$('recapStatus').textContent=result.approximateFrameRate<15?'Your recap was recorded, but this browser rendered slowly and the video may look choppy. Preview it before sharing. A hardware-accelerated desktop browser or a still image may work better. Nothing was uploaded.':'Your recap is ready. Play it below, then download to share. No upload has occurred.';
    if(narrationFailed)$('recapStatus').textContent+=' A coaching clip could not play; preview the audio before sharing.';
  }catch(error){$('recapStatus').textContent=error.name==='AbortError'?'Export cancelled. Your drive is unchanged.':error.message;canvas.hidden=true;}
  finally{narration.stop();if(trailAudio.recording)trailAudio.endRecording();view.endCapture();view.render(state,gate,0);exportController=null;exportBusy(false);}
};
$('saveTrailImage').onclick=async()=>{try{const [width,height]=exportSize($('recapFormat').value),c=document.createElement('canvas');c.width=width;c.height=height;view.beginCapture(width,height);view.render(state,gate,0);const ctx=c.getContext('2d');ctx.drawImage(view.canvas,0,0);stampFrame(ctx,{width,height,title:`${player.name||'Trail driver'} / ${course.name}`,detail:'Drive · approximate game simulation / jimnygami'});downloadBlob(await canvasBlob(c),`jimny-${course.id}.jpg`);$('recapStatus').textContent='Trail image saved.';}catch(error){$('recapStatus').textContent=error.message;}finally{view.endCapture();view.render(state,gate,0);}};
// Read-only diagnostics for browser QA, never a public movement/score shortcut.
window.trailGame={snapshot:()=>({running,loading,course:course.id,mission:mission.id,freeRoam,physics:rigidVehicle?.snapshot(),difficulty,gate,totalGates:gates.length,state:{...state},player:{...player},camera:view?.cameraState(),replaySeconds:replayBuffer.duration,exporting:!!exportController,voice:{enabled:voice.enabled,speaking:!!voice.active,available:voice.voices.length,mode:voice.mode,cue:voice.active?.cueId,recordedEvents:voiceEvents.map(e=>({...e}))},spotter:{problem:spotter.problem?.id,lowProgress:spotter.lowProgress,inspection:$('inspection').open,automatic:autoInspect},fps:Math.round(fps),render:view?.info()})};
window.trailGame.audio=()=>trailAudio.snapshot();
const himachalReviewMissions={'#himachal':'rock-river-technical','#himachal-bypass':'rock-river-bypass','#himachal-ascent':'mountain-ascent','#himachal-road':'mountain-tarmac'};
if(himachalReviewMissions[location.hash]){selected=COURSES.find(c=>c.id==='mountain');selectedMission=himachalReviewMissions[location.hash];}
const obstacleReviewMissions={'#quarry':['urban','ramps'],'#thar':['sand','crest']};
for(const id of ['skyweave','staircase','surge','high-pocket','gorge-gauntlet'])obstacleReviewMissions[`#pro-${id}`]=['urban',`pro-${id}`];
if(obstacleReviewMissions[location.hash]){const [id,missionId]=obstacleReviewMissions[location.hash];selected=COURSES.find(c=>c.id===id);selectedMission=missionId;}
renderLobby();showDialog('lobby');
const disclaimer=document.createElement('p');disclaimer.className='fine';disclaimer.textContent='jimnygami is an independent platform and is not affiliated with, endorsed by, or sponsored by Suzuki Motor Corporation or Maruti Suzuki India Limited. Suzuki and Jimny are trademarks of their respective owners.';$('lobby').append(disclaimer);
try{view=createTrailScene($('stage'));view.setWorld(world,gates);await view.loadVehicle($('bodyChoice').value,build);view.setPlayer({...player,nameStyle:build.design||{}});syncKeyboardHints();$('loadStatus').hidden=true;$('stage').setAttribute('aria-busy','false');$('startButton').disabled=false;$('startButton').textContent='Drive this course';renderLobby();requestAnimationFrame(frame);}
catch(error){$('stage').setAttribute('aria-busy','false');$('loadStatus').textContent=view?'The Jimny model could not be downloaded. Check your connection and reload.':'3D could not start. Try enabling hardware acceleration, or use another browser.';$('buildNote').textContent=view?'The model download failed. Your saved build is safe. Reload to try again.':'The driving game needs WebGL. You can still explore and save modifications in the main site.';$('startButton').textContent='3D unavailable';const retry=document.createElement('button');retry.type='button';retry.textContent='Reload game';retry.onclick=()=>location.reload();$('startButton').after(retry);console.error(error);}
