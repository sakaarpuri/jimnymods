import {COACHING_CUES} from './voice-cues.js';
export function spokenText(text){return String(text).replace(/4H/g,'four high').replace(/4L/g,'four low').replace(/2H/g,'two high').replace(/\bN\b/g,'Neutral').replace(/\bD\b/g,'Drive').replace(/\bL\b/g,'Low').replace(/\bR\b/g,'Reverse').replace(/km\/h/g,'kilometres per hour').replace(/·/g,'.');}
export function englishVoices(synth){return (synth?.getVoices()||[]).filter(v=>v.localService&&/^en[-_]/i.test(v.lang));}
// Playback is entirely local/same-origin. No runtime cloud request, microphone,
// name submission or provider credentials. Unrecorded messages use device speech.
export class VoiceCoach{
  constructor({synth=globalThis.speechSynthesis,Utterance=globalThis.SpeechSynthesisUtterance,Audio=globalThis.Audio,cues=COACHING_CUES,playRecorded=null,onStatus=()=>{},onCaption=()=>{},now=()=>performance.now()}={}){
    Object.assign(this,{synth,Utterance,Audio,cues,playRecorded,onStatus,onCaption,now});this.enabled=false;this.voiceURI='';this.mode='recorded';this.last=new Map();this.lastAt=-Infinity;this.active=null;this.generation=0;this.timer=null;this.abort=null;this.playback=null;this.autoHeard=new Set();this.autoCandidate=null;
  }
  get voices(){return englishVoices(this.synth);}
  get recordedAvailable(){return !!(this.playRecorded||this.Audio)&&Object.values(this.cues).some(c=>c.src);}
  get status(){return this.mode==='recorded'&&this.recordedAvailable?'Spoken coaching on · Cillian recorded voice.':'Spoken coaching on · local device voice.';}
  setMode(mode){this.mode=mode==='device'?'device':'recorded';this.stop();if(this.enabled)this.setEnabled(true);}
  setRecordedPlayer(player){this.playRecorded=player;}
  setEnabled(on){this.enabled=!!on;if(!on){this.stop();this.onStatus('Spoken coaching off. Captions stay on.');return false;}if(!(this.mode==='recorded'&&this.recordedAvailable)&&(!this.Utterance||!this.voices.length)){this.enabled=false;this.onStatus('No local English voice is available in this browser. Captions and Show me still work.');return false;}this.onStatus(this.status);return true;}
  stop(){this.generation++;clearTimeout(this.timer);this.timer=null;this.abort?.abort();this.abort=null;const playback=this.playback;this.playback=null;try{playback?.stop?.();}catch{}this.active=null;this.synth?.cancel();}
  sayCue(id,options={}){const cue=this.cues[id];return cue?this.say(cue.text,id,options):false;}
  resetAutomatic(){this.autoHeard.clear();this.autoCandidate=null;this.last.clear();this.lastAt=-Infinity;}
  sayAutomatic(text,{immediate=false}={}){
    if(!this.enabled||!text||/^Gate \d+ of \d+\./.test(text))return false;
    const key=String(text).trim().replace(/\s+/g,' '),now=this.now();
    // Automatic narration is event advice, not a spoken copy of the live HUD.
    // Stable text must persist, transient wheel contacts must not start clips,
    // and gear changes/pause cannot erase advice already heard this run.
    if(this.autoCandidate?.key!==key)this.autoCandidate={key,since:now};
    if(this.autoHeard.has(key))return false;
    if(!immediate&&now-this.autoCandidate.since<1800)return false;
    if(this.say(text,key)){this.autoHeard.add(key);return true;}
    return false;
  }
  say(text,key=text,{force=false}={}){
    if(!this.enabled)return false;const now=this.now();if(!force&&(this.active||now-this.lastAt<7000||now-(this.last.get(key)??-Infinity)<35000))return false;
    // Never play a clip merely because its key looks similar. Changed captions
    // must use fallback speech until the new exact script has been recorded.
    const keyed=this.cues[key],cue=keyed?.text===text?keyed:Object.values(this.cues).find(c=>c.text===text);
    const recorded=this.mode==='recorded'&&cue?.src&&(this.playRecorded||this.Audio);
    if(!recorded&&(!this.Utterance||!this.voices.length)){this.onStatus('No local voice for this instruction. Captions and Show me still work.');return false;}
    this.stop();this.last.set(key,now);this.lastAt=now;this.autoHeard.add(String(text).trim().replace(/\s+/g,' '));
    return recorded?this.speakRecorded(cue,key):this.speakLocal(text,key,this.generation);
  }
  speakRecorded(cue,key){
    const token=this.generation,controller=new AbortController();this.abort=controller;this.active={kind:'recorded',cueId:cue.id,text:cue.text};
    const current=()=>token===this.generation&&!controller.signal.aborted;
    const onStart=()=>{if(!current())return;clearTimeout(this.timer);this.timer=null;this.onCaption(cue.text,{key,source:'recorded',cueId:cue.id});this.onStatus('Speaking · '+cue.text);};
    const onEnd=()=>{if(!current())return;clearTimeout(this.timer);this.timer=null;this.active=null;this.playback=null;this.abort=null;controller.abort();this.onStatus(this.status);};
    let failed=false;
    const onError=()=>{if(!current()||failed)return;failed=true;clearTimeout(this.timer);controller.abort();const playback=this.playback;this.playback=null;try{playback?.stop?.();}catch{}this.active=null;this.abort=null;this.speakLocal(cue.text,key,token);};
    this.timer=setTimeout(onError,12000);
    try{
      let handle;
      if(this.playRecorded)handle=this.playRecorded(cue,{signal:controller.signal,onStart,onEnd,onError});
      else{
        const audio=new this.Audio(cue.src);audio.preload='auto';audio.volume=.9;audio.onplaying=onStart;audio.onended=onEnd;audio.onerror=onError;
        handle={stop(){audio.onplaying=audio.onended=audio.onerror=null;audio.pause();try{audio.currentTime=0;}catch{}}};this.playback=handle;
        const playing=audio.play();playing?.catch(onError);
      }
      if(handle?.then)handle.then(value=>{if(current())this.playback=value;else value?.stop?.();},onError);
      else if(current())this.playback=handle;else handle?.stop?.();
    }catch{onError();}
    return true;
  }
  speakLocal(text,key,token){
    if(token!==this.generation||!this.enabled)return false;
    const voices=this.voices,voice=voices.find(v=>v.voiceURI===this.voiceURI)||voices.find(v=>v.lang==='en-GB')||voices[0];if(!voice){this.onStatus('Audio could not play and no local voice is available. Captions and Show me still work.');return false;}
    if(!this.Utterance){this.onStatus('Audio could not play. Captions remain available.');return false;}
    const u=new this.Utterance(spokenText(text));u.voice=voice;u.lang=voice.lang;u.rate=.92;u.volume=.9;this.active=u;
    u.onstart=()=>{if(token!==this.generation)return;clearTimeout(this.timer);this.onCaption(text,{key,source:'device'});this.onStatus('Speaking · '+text);};
    u.onend=()=>{if(token!==this.generation)return;this.active=null;clearTimeout(this.timer);this.onStatus(this.status);};
    u.onerror=()=>{if(token!==this.generation)return;this.active=null;clearTimeout(this.timer);this.onStatus('Audio could not play. Try Hear again; captions remain available.');};
    this.timer=setTimeout(()=>{if(token===this.generation&&this.active){this.stop();this.onStatus('No audio response. Try Hear again, check system volume, or use captions.');}},5000);
    try{this.synth.speak(u);return true;}catch{u.onerror();return false;}
  }
}
