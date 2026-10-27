# Brief 5: Drive (game.html) fixes

Branch `perf/game`. Shared 3D car model and Garage viewer code are untouched.

## 1. Speed and power

Normal pedal (W / Up / Accelerate) moved from 50% to 65%; Shift stays 22%, F stays 100%.
Engine force per unit torque is now 2.0 (2H), 1.15 (4H), 0.82 (4L, unchanged). Was 0.82 everywhere.
4H and 4L are held to the lower two automatic gears. The rev limiter now fades out between 5850
and 6100 rpm (it used to leave a quarter of the force on).

Measured with the real rigid-body vehicle, 5-door, flat ground, from a standstill in D:

| | Old normal (50%) | New normal (65%) | Old F | New F |
|---|---|---|---|---|
| 2H tarmac, 0-40 km/h | never reached | 3.4 s | 4.3 s | 3.0 s |
| 2H tarmac, speed at 10 s | 33 | 69 | 59 | 92 |
| 2H tarmac, top speed | 40 | 88 | 69 | 108 |
| 2H loose, speed at 10 s | 32 | 65 | 56 | 74 |
| 4H loose, top speed | 35 | 71 | 69 | 86 |
| 4L loose, top speed | 46 | 44 | 73 | 44 |

2H on loose ground is traction limited until about 8 s, so F pulls clear after that.
Hill and sand lessons (and steps, controls) complete with the normal pedal in the right range
(`tests/trail-throttle.test.mjs`).

## 2. Top-view camera

Metres behind / beside / above the car, and how far ahead it looks:

| | Old | New landscape | New portrait |
|---|---|---|---|
| back | 17 | 8 | 9 |
| side | 14 | 3 | 1.5 |
| height | 15 | 9 | 14 |
| look ahead | 5 (2 portrait) | 3 | 2.5 |

## 3. Controls UI

`assets/drive-controls.css` (new). Driving view and control dock are separate bands; text is 14px or
larger and every control is 44px or larger (checked at 1440x900, 375x812 and 812x375).
The cabin thumbnail is a 132px card with a 44px close button, collapsed by default on phones and
remembered; a "Show cabin view" link brings it back.

## Also fixed

- Himachal start took about 37 s because every height lookup scanned every route segment. The scan now skips
  distant segments (same results at 36,000 sampled points) and the call is memoised: about 4 s.
- Garage prefetches the game bundle.
- "Create / build your own terrain" mode and the pause-menu "Edit my terrain" button are removed.

Screenshots: `before-*` and `after-*` in this folder.
