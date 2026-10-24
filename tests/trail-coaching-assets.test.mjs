import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {COACHING_CUES,COACHING_VOICE} from '../src/trail/voice-cues.js';
const root=new URL('../',import.meta.url),manifest=JSON.parse(readFileSync(new URL('assets/audio/coaching/production.json',root),'utf8'));
test('the approved 24 recordings match exact scripts, voice identity and completed provenance',()=>{
 assert.equal(manifest.approvedCredits,19.4);assert.equal(manifest.voiceId,COACHING_VOICE.voiceId);assert.equal(manifest.status,'completed');assert.equal(manifest.clips.length,24);assert.equal(new Set(manifest.clips.map(c=>c.jobId)).size,24);
 for(const clip of manifest.clips){const cue=COACHING_CUES[clip.id];assert(cue,clip.id);assert.equal(cue.text,clip.text);assert.equal(cue.src,clip.file);assert.equal(clip.status,'completed');assert.equal(clip.codec,'mp3');assert.equal(clip.sampleRate,24000);assert(clip.durationSeconds>2&&clip.durationSeconds<25);assert(clip.rms>.01);assert(clip.peak>.1&&clip.peak<1);}
});
test('all registered audio assets exist, have nonempty payloads and verified hashes',()=>{
 const hashes=new Set();for(const cue of Object.values(COACHING_CUES)){const clip=manifest.clips.find(c=>c.id===cue.id),bytes=readFileSync(new URL(cue.src,root));assert(bytes.length>10000,cue.id);assert.equal(bytes.length,clip.bytes);const hash=createHash('sha256').update(bytes).digest('hex');assert.equal(hash,clip.sha256);hashes.add(hash);}assert.equal(hashes.size,24,'no accidentally duplicated media');
});
