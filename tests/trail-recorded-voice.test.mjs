import test from 'node:test';
import assert from 'node:assert/strict';
import {VoiceCoach} from '../src/trail/voice.js';
import {COACHING_CUES,getVoiceCue,findVoiceCue} from '../src/trail/voice-cues.js';
const text='Hold the brake and choose Drive.',cues={drive:{id:'drive',text,src:'assets/audio/coaching/drive.mp3'}};
const flush=()=>new Promise(resolve=>setImmediate(resolve));
function rig(options={}){let now=0;const events=[],clips=[],spoken=[];const synth={getVoices:()=>[{lang:'en-GB',localService:true,voiceURI:'local'}],cancel(){},speak(u){spoken.push(u);u.onstart();}};const coach=new VoiceCoach({cues,synth,Utterance:class{constructor(text){this.text=text;}},now:()=>now,onCaption:(...args)=>events.push(args),playRecorded:(cue,callbacks)=>{const clip={cue,...callbacks,stopped:0,stop(){this.stopped++;}};clips.push(clip);return clip;},...options});return{coach,events,clips,spoken,time:n=>now=n};}
test('event catalogue is finite and caption lookup never substitutes another script',()=>{assert.equal(Object.keys(COACHING_CUES).length,24);assert.equal(getVoiceCue('not-a-cue'),null);const cue=getVoiceCue('start-drive');assert.equal(findVoiceCue(cue.text,'start-drive'),cue);assert.equal(findVoiceCue('different caption','start-drive'),null);for(const c of Object.values(COACHING_CUES)){assert(c.id&&c.text);assert(!c.src||c.src.startsWith('assets/audio/coaching/'));}});
test('recorded playback is opt-in and emits the exact recording caption at playback start',()=>{const r=rig();assert.equal(r.coach.sayCue('drive'),false);r.coach.setEnabled(true);assert.equal(r.coach.sayCue('drive'),true);assert.equal(r.events.length,0);r.clips[0].onStart();assert.deepEqual(r.events[0],[text,{key:'drive',source:'recorded',cueId:'drive'}]);assert.equal(r.spoken.length,0);r.clips[0].onEnd();assert.equal(r.coach.active,null);assert.equal(r.coach.sayCue('drive'),false);r.coach.stop();});
test('force replacement stops a prior clip and ignores stale callbacks',()=>{const r=rig();r.coach.setEnabled(true);r.coach.sayCue('drive');const first=r.clips[0];r.coach.sayCue('drive',{force:true});assert(first.signal.aborted);assert.equal(first.stopped,1);first.onStart();first.onEnd();assert.equal(r.events.length,0);assert(r.coach.active);r.clips[1].onStart();assert.equal(r.events.length,1);r.coach.stop();});
test('mute aborts in-flight fetch and stops a handle that resolves after cancellation',async()=>{let resolve,signal,stops=0;const r=rig({playRecorded:(_,c)=>{signal=c.signal;return new Promise(done=>resolve=done);}});r.coach.setEnabled(true);r.coach.sayCue('drive');r.coach.setEnabled(false);assert(signal.aborted);resolve({stop:()=>stops++});await flush();assert.equal(stops,1);assert.equal(r.coach.active,null);assert.equal(r.coach.sayCue('drive',{force:true}),false);});
test('recording failure falls back once to matching device speech',()=>{const r=rig();r.coach.setEnabled(true);r.coach.sayCue('drive');r.clips[0].onError();r.clips[0].onError();assert.equal(r.spoken.length,1);assert.equal(r.spoken[0].text,text);assert.equal(r.events[0][1].source,'device');r.coach.stop();});
test('mismatched or unrecorded text uses device speech rather than a wrong recording',()=>{const r=rig();r.coach.setEnabled(true);r.coach.say('Select N while stopped.','drive');assert.equal(r.clips.length,0);assert.equal(r.spoken[0].text,'Select Neutral while stopped.');r.coach.stop();});
test('recorded cues work without any installed device voice',()=>{const statuses=[],r=rig({synth:{getVoices:()=>[],cancel(){}},Utterance:undefined,onStatus:s=>statuses.push(s)});assert.equal(r.coach.setEnabled(true),true);assert.equal(r.coach.sayCue('drive'),true);r.clips[0].onError();assert.match(statuses.at(-1),/Captions/);assert.equal(r.coach.active,null);r.coach.stop();});
test('HTMLAudio fallback can be cancelled and rejected autoplay uses local speech',async()=>{const audios=[];class Audio{constructor(src){this.src=src;audios.push(this);}play(){return Promise.reject(new Error('blocked'));}pause(){this.paused=true;}}const r=rig({playRecorded:null,Audio});r.coach.setEnabled(true);r.coach.sayCue('drive');await flush();assert.equal(r.spoken.length,1);assert(audios[0].paused);r.coach.stop();});
test('explicit device mode bypasses recording and honors selected local voice',()=>{const r=rig();r.coach.setMode('device');r.coach.setEnabled(true);r.coach.sayCue('drive');assert.equal(r.clips.length,0);assert.equal(r.spoken[0].voice.voiceURI,'local');r.coach.stop();});

test('automatic advice needs stable context and is spoken once per run, not once per cooldown',()=>{
 const r=rig();r.coach.setEnabled(true);
 assert.equal(r.coach.sayAutomatic(text),false);r.time(1799);assert.equal(r.coach.sayAutomatic(text),false);
 r.time(1800);assert.equal(r.coach.sayAutomatic(text),true);r.clips[0].onEnd();
 r.time(90000);assert.equal(r.coach.sayAutomatic(text),false);
 r.coach.stop();assert.equal(r.coach.sayAutomatic(text,{immediate:true}),false,'pause/resume cannot forget advice');
 r.coach.resetAutomatic();assert.equal(r.coach.sayAutomatic(text,{immediate:true}),true);r.coach.stop();
});
test('transient contact alternation cannot retain an old dwell timestamp',()=>{
 const r=rig();r.coach.setEnabled(true);r.coach.say(text,'manual',{force:true});r.clips[0].onEnd();
 r.time(10000);assert.equal(r.coach.sayAutomatic('Wheel temporarily airborne.'),false);
 r.time(11000);assert.equal(r.coach.sayAutomatic(text),false);
 r.time(15000);assert.equal(r.coach.sayAutomatic('Wheel temporarily airborne.'),false);
 r.time(16000);assert.equal(r.coach.sayAutomatic(text),false);assert.equal(r.spoken.length,0);r.coach.stop();
});
test('manual Hear again still works without enabling automatic repeats or gate-count chatter',()=>{
 const r=rig();r.coach.setEnabled(true);r.coach.say(text,'manual',{force:true});r.clips[0].onEnd();
 r.time(50000);assert.equal(r.coach.sayAutomatic(text,{immediate:true}),false);
 assert.equal(r.coach.sayAutomatic('Gate 3 of 8. Choose your own line; precision is the challenge.',{immediate:true}),false);
 assert.equal(r.coach.say(text,'repeat',{force:true}),true);assert.equal(r.clips.length,2);r.coach.stop();
});
