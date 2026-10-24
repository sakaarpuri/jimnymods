// Caption text is the recording script, not a loosely matching paraphrase.
// Local audio is enabled only after the corresponding generated file is verified.
export const COACHING_VOICE={name:'Cillian',provider:'Higgsfield',model:'seed_audio',voiceId:'d8ba9f14-8a24-44db-932b-99e16c45bd32',voiceType:'preset'};
const scripts={
  'start-drive':'Hold the brake and choose Drive on the automatic selector. Keep the parking brake on until you are ready.',
  'release-parking':'The parking brake is on. Release it when you are ready, then accelerate gently.',
  'neutral':'Neutral selected. Stay stopped for a low range change. Choose Drive or Low before moving again.',
  'reverse':'Reverse selected. Check behind you, then ease back slowly. Stop completely before changing direction again.',
  'range-2h':'Two high selected. This is rear wheel drive, suitable for normal paved roads.',
  'range-4h':'Four high selected. Use it on loose or slippery ground, not dry tarmac. Keep your speed controlled.',
  'range-4l':'Four low selected. Choose a driving gear, then crawl with gentle accelerator and steering inputs.',
  'prepare-4l':'Prepare before the obstacle. Select four high, stop completely, hold the brake and select Neutral. Then choose four low and return to a driving gear.',
  'dry-tarmac':'Dry tarmac ahead. Stop safely and return to two high. Part time four wheel drive is not for this surface.',
  'wheelspin':'The tyres are spinning. Ease the accelerator. More power is not always more progress.',
  'low-progress':'You are making little progress. Ease off and choose Inspect problem. Check the ground, your wheel placement and a steadier line.',
  'contact':'Contact detected. Release the accelerator and inspect the ground and clearance. Stop fully before selecting Reverse. Recover is a game reset if you cannot continue.',
  'wheel-airborne':'A wheel has lost ground contact in the simulation. Ease off and inspect wheel and chassis clearance. Choose a more level line.',
  'world-edge':'You are near the practice area boundary. Check the map and turn back into the course. Recover is available if you cannot move.',
  'finish-bay':'Finish bay ahead. Ease off, brake and come to a complete stop between the final posts.',
  'mission-complete':'Mission complete. Review your drive, save a recap, or try another challenge. Smooth control matters more than speed.',
  'mountain-line':'Aim between the pale posts. Make small steering adjustments and ease off before rough ground. Inspect the next wheel placement before adding power.',
  'sand-line':'Use steady, gentle power and look for the firmer marked line. Ease off if the tyres spin. Avoid abrupt steering on the slope.',
  'urban-line':'Look through the bend, brake early and leave space around the posts. Stay in two high on the tarmac.',
  'articulation':'Offset ramps ahead. Slow down and watch each wheel placement. Show me pauses the scene so you can inspect the ground from another angle.',
  'descent':'Descending. Stay in gear and control your speed before the slope. Use a low gear and brake as needed. Do not coast in Neutral.',
  'free-roam':'Free roam. Choose your own line. The map shows the whole practice area. Recover is available if you get stuck.',
  'hill-descent':'Hill descent assistance is braking. Keep watching your line and be ready to brake yourself. Pressing the accelerator overrides the assistance.',
  'slow-down':'Slow before the next bend. Brake early, choose your line, then turn smoothly. This is not a race against the clock.'
};
// All 24 approved jobs completed. MP3 metadata, complete decode, browser decode,
// signal levels and exact submitted scripts checked; provenance in production.json.
const recordings=Object.fromEntries(Object.keys(scripts).map(id=>[id,`assets/audio/coaching/${id}.mp3`]));
export const COACHING_CUES=Object.freeze(Object.fromEntries(Object.entries(scripts).map(([id,text])=>[id,Object.freeze({id,text,src:recordings[id]||null})])));
export function getVoiceCue(id){return COACHING_CUES[id]||null;}
export function findVoiceCue(text,key){const cue=getVoiceCue(key);return cue?.text===text?cue:Object.values(COACHING_CUES).find(c=>c.text===text)||null;}
