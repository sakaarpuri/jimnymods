# Garage scenery: photographed HDRIs (Brief 3, 24 October 2026)

The 3D Garage's four scenery options are photographed 360° HDR environment maps from Poly Haven. Each one is both the visible background and the light and reflections on the car, with its floor projected under the wheels. All four are CC0 1.0 Universal (public domain dedication), which allows commercial use without attribution; the authors are credited here anyway. Licence: https://polyhaven.com/license and https://creativecommons.org/publicdomain/zero/1.0/

| Option | Asset | Source | Author | Files |
| --- | --- | --- | --- | --- |
| Garage (id `studio`, default) | Autoshop 01 | https://polyhaven.com/a/autoshop_01 | Oliksiy Yakovlyev | `assets/environments/autoshop-01-4k.jpg`, `autoshop-01-2k.jpg` |
| Mountains | Kiara 5 Noon | https://polyhaven.com/a/kiara_5_noon | Greg Zaal | `assets/environments/kiara-5-noon-4k.jpg`, `kiara-5-noon-2k.jpg` |
| Urban | Rotes Rathaus | https://polyhaven.com/a/rotes_rathaus | Alexander Scholten | `assets/environments/rotes-rathaus-4k.jpg`, `rotes-rathaus-2k.jpg` |
| Desert | Quarry 02 | https://polyhaven.com/a/quarry_02 | Sergej Majboroda | `assets/environments/quarry-02-4k.jpg`, `quarry-02-2k.jpg` |

These are real places (a South African valley, a Berlin square, a sand quarry and an auto workshop), not Indian locations; the previous India-inspired generated panoramas are no longer used by the Garage.

25 October 2026: Urban changed from Palermo Square to Rotes Rathaus, whose foreground is open paving. Planters and a banner a few metres from the Palermo camera were flattened onto the projected floor and looked stretched. The viewer also blurs the projected floor with distance from the car (`src/soft-floor.js`), so anything standing near any photographer softens into the ground.

How the files were made: the 4k and 2k Radiance `.hdr` downloads were converted to Ultra HDR JPEGs (an SDR JPEG with an embedded gain map, quality 0.86, gain map 0.8) with `@monogrid/gainmap-js` 3.1.0 in headless Chrome. Autoshop 01 and Rotes Rathaus keep their full range. Kiara 5 Noon and Quarry 02 are capped at 64× the SDR white so the gain map keeps precision; the energy removed from the sun disc was measured from the source `.hdr` (direction and irradiance in `src/scenery.js`) and is restored by the shadow-casting sun light. The viewer decodes them with three.js `UltraHDRLoader`.

# Driving game scenery previews

Created with the built-in OpenAI image-generation tool for this project. These are generated India-inspired environments, not photographs or surveyed representations of actual locations. No third-party photography is reused.

Since Brief 3 these panoramas are used only by the driving game. The native-resolution 1774 × 887 WebP panoramas are loaded on demand. Night lighting uses a neutral test surface so a daylight image does not misrepresent actual lamp illumination. The viewer adjusts the vertical panorama composition for a readable horizon. These are artistic environments, not calibrated lighting or geometry captures.

21 October game reuse: these same generated panoramas supply distant sky/background scenery behind the playable 3D terrain and filtered environmental reflections on the car. They are not calibrated HDR lighting, navigable mountains or buildings, and do not turn the fictional courses into mapped Indian locations. The game compresses the panorama's vertical composition to keep the horizon above its real terrain. Actual engine screenshots, without AI post-processing, are used for the three terrain-selection cards. Close-range terrain, obstacles and wheel contacts remain 3D; distant backdrop parallax and resolution are limited. A later screenshot exposed faceted, floating boulders: shared normals and normalized obstacle height now make them smoother and ground their bases. Collision hulls remain simpler than rock geometry.

## mountains

Asset: `assets/environments/india-mountains.webp`

Final generation prompt:

Use case: photorealistic-natural. Asset: seamless 360-degree equirectangular environment panorama for a web vehicle configurator. Generate a 2:1 wide image, full 360 horizontal by 180 vertical spherical projection, horizon exactly halfway up. Camera at 1.8m above a broad flat empty parking area, all near ground flat for 20 metres around camera. Lower half is ground with realistic fine surface detail and correct spherical distortion at nadir. Upper half clear natural sky and surroundings. Photographic realism, restrained natural colour, soft late-afternoon daylight. No vehicle, no people, no lettering, no watermarks, no collage, no borders. Seamless left-right edges. India-inspired Himalayan landscape near Ladakh: rugged layered brown mountains with distant snow peaks, pale blue sky, broad flat compacted gravel turnout filling foreground, sparse high-altitude vegetation. Mountains start beyond the empty parking area.

## urban

Asset: `assets/environments/india-urban.webp`

Final generation prompt:

Use case: photorealistic-natural. Asset: seamless 360-degree equirectangular environment panorama for a web vehicle configurator. Generate a 2:1 wide image, full 360 horizontal by 180 vertical spherical projection, horizon exactly halfway up. Camera at 1.8m above a broad flat empty parking area, all near ground flat for 20 metres around camera. Lower half is ground with realistic fine surface detail and correct spherical distortion at nadir. Upper half clear natural sky and surroundings. Photographic realism, restrained natural colour, soft late-afternoon daylight. No vehicle, no people, no lettering, no watermarks, no collage, no borders. Seamless left-right edges. India-inspired urban Jaipur setting: a broad empty asphalt parking forecourt, subtle wear and gravel, distant warm pink sandstone Indian city buildings with restrained arched facades and modern storefront architecture, trees at edge, buildings at least 35 metres away. No signs or text, no parked vehicles, no people. Wide open sky.

## desert

Asset: `assets/environments/india-desert.webp`

Final generation prompt:

Use case: photorealistic-natural. Asset: seamless 360-degree equirectangular environment panorama for a web vehicle configurator. Generate a 2:1 wide image, full 360 horizontal by 180 vertical spherical projection, horizon exactly halfway up. Camera at 1.8m above a broad flat empty parking area, all near ground flat for 20 metres around camera. Lower half is ground with realistic fine surface detail and correct spherical distortion at nadir. Upper half clear natural sky and surroundings. Photographic realism, restrained natural colour, soft late-afternoon daylight. No vehicle, no people, no lettering, no watermarks, no collage, no borders. Seamless left-right edges. India-inspired Rajasthan Thar desert: broad flat firm sandy-gravel clearing surrounded by low golden dunes at least 30 metres away, sparse hardy desert shrubs at distance, pale blue sky and a soft warm afternoon sun. Not orange fantasy dunes, natural believable western India desert textures.

