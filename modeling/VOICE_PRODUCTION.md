# Natural coaching production

21 October 2026. The user selected Cillian in the Higgsfield voice picker.

- Provider/model: Higgsfield / Seed Audio (`seed_audio`).
- Voice: `d8ba9f14-8a24-44db-932b-99e16c45bd32`, type `preset`.
- First sample cost preflight: 2.1 credits.
- Submitted job: `5e92ad45-48f9-4b3b-a950-2863c2adbe6e`.
- Status: completed. Result: https://d8j0ntlcm91z4.cloudfront.net/user_37vFb6Uj9Ah6AcGH1Xlj8BJwLku/hf_20261021_125823_5e92ad45-48f9-4b3b-a950-2863c2adbe6e.wav
- Destination preference: no automatic project; no destination created.
- This is a review sample, not yet integrated game narration. The game still uses optional device speech. Do not resubmit this job without checking its result.

Sample text:

> Welcome to the proving ground. Start gently and give yourself room to stop. Before selecting low range, stop completely, hold the brake, and shift the automatic transmission into neutral. Follow the on-screen instructions, and remember: this game is practice, not a substitute for supervised off-road training.

After reviewing delivery, generate individually keyed cues for accepted control changes and mission/spotter instructions; keep captions, cancellation, mute, and local fallback. Price the full set before generation. Include prerecorded cues in recap audio only after actual mix/export verification. Never expose provider credentials to the client.

## Event-cue production preflight

24 short cues are authored in `src/trail/voice-cues.js`. Their text is both the
generation script and the exact caption. Cost-only preflights on 21 October 2026
returned **19.4 credits total** for Seed Audio, selected Cillian preset,
MP3 at 24 kHz. No new generation was submitted by this preflight. The existing
sample was checked as completed and was not resubmitted.

| Cue | Credits | Cue | Credits |
| --- | ---: | --- | ---: |
| start-drive | 0.7 | release-parking | 0.6 |
| neutral | 0.7 | reverse | 0.8 |
| range-2h | 0.6 | range-4h | 0.7 |
| range-4l | 0.7 | prepare-4l | 1.0 |
| dry-tarmac | 0.7 | wheelspin | 0.6 |
| low-progress | 0.9 | contact | 1.1 |
| wheel-airborne | 0.9 | world-edge | 0.9 |
| finish-bay | 0.6 | mission-complete | 0.8 |
| mountain-line | 1.0 | sand-line | 0.9 |
| urban-line | 0.7 | articulation | 1.0 |
| descent | 0.9 | free-roam | 0.8 |
| hill-descent | 1.0 | slow-down | 0.8 |

The user approved the exact 19.4-credit set. All 24 unique jobs are completed;
their local MP3 files are registered in the catalogue. Two early batches hit a
provider concurrency limit: their explicitly rejected items had no jobs, and only
those rejected items were later submitted. No completed job was regenerated and
no additional script was generated.

`assets/audio/coaching/production.json` records each job ID, exact script, file,
duration, codec, sample rate, size, SHA-256 and decoded signal statistics. Total
duration is **218.64 seconds**. Each clip is 24 kHz stereo MP3, 6.408–17.328 seconds.
All files passed full ffmpeg decoding and actual Chrome WebAudio decoding. Peak
sample magnitude stays below 0.725; every recording has non-silent speech-level
signal. Exact submitted scripts were checked against completed job metadata.
These are technical/content-source checks, not an independent transcription or
an assertion that every pronunciation has received human listening approval.

## Playback integration contract

`VoiceCoach` remains opt-in and compatible with `say(text,key,{force})`.
`sayCue(id,{force})` uses the exact catalogue script. A matching key with different
text never plays a stale recording; it falls back to local English device speech.
`setMode('device')` opts out of prerecorded narration, while `setMode('recorded')`
prefers the verified recording and uses device speech for uncatalogued messages.

The optional constructor callback `playRecorded(cue, callbacks)` can also be
attached with `setRecordedPlayer(fn)`. It returns `{stop()}` or a promise of that
handle. `callbacks` contains `signal`, `onStart`, `onEnd`, `onError`. Route its
decoded audio through the game's coaching bus. The hook owns that bus gain;
VoiceCoach does not apply an additional volume multiplier to hooked audio.

- Respect AbortSignal during fetch, decode and playback. Stop a source promptly.
- Call onStart when audible playback begins, onEnd at natural completion, and
  onError on actual failure. Deliberate cancellation is not a failure.
- Pausing, disabling voice or force-replacing a cue cancels both pending work and
  playing sound. Late callback/handle results cannot resume canceled speech.
- `onCaption(exactText,{key,source,cueId})` runs at playback start. `source` is
  `recorded` or `device`; cueId is present for recordings. Use it to synchronize
  captions and record narration events for recap playback.
- Without a hook, same-origin HTMLAudio is supported. Load/autoplay failure falls
  back to local device speech. Captions and Show me remain available either way.
- No runtime generation, API keys, names, microphone data or provider calls exist
  in this playback code. Runtime assets must be local under assets/audio/coaching.

Tests: `node --test tests/trail-recorded-voice.test.mjs tests/trail-coaching.test.mjs tests/trail-coaching-assets.test.mjs`
passes 19 tests covering exact captions, mute, cancellation races, late handles,
failed recordings, local fallback, explicit device mode and asset provenance and
integrity. Actual game audio mix/export verification remains a separate
integration acceptance check.
