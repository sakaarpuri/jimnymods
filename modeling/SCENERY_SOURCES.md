# Garage scenery (Brief 3, updated 25 October 2026)

**Garage** (id `studio`, default) is the modelled jimnygami workshop (`src/workshop-stage.js`, `src/workshop-gear.js`, original concrete texture `assets/environments/workshop-concrete.webp`; see `modeling/ASSET_SOURCES.md`). It is real geometry, so it stays correct from every camera angle. Its reflections on the car are rendered from the room itself, with its own lights.

**Mountains, Urban and Desert** use a photographed 360° HDR environment map from Poly Haven as the distant backdrop (drawn at infinity) and as the light and reflections on the car. The ground near the car is a real textured surface that fades into the photo toward the horizon; nothing from the photo is projected onto the floor, so objects near the photographer can no longer stretch or smear. All assets below are CC0 1.0 Universal (public domain dedication), which allows commercial use without attribution; the authors are credited anyway. Licence: https://polyhaven.com/license and https://creativecommons.org/publicdomain/zero/1.0/

| Option | Backdrop HDRI | Author | Ground texture | Author | Files |
| --- | --- | --- | --- | --- | --- |
| Mountains | Kiara 5 Noon, https://polyhaven.com/a/kiara_5_noon | Greg Zaal | Dry Ground Rocks, https://polyhaven.com/a/dry_ground_rocks (4 m tile) | Rob Tuytel | `assets/environments/kiara-5-noon-{4k,2k}.jpg`, `assets/ground/dry-ground-rocks-{color,normal,rough}.webp` |
| Urban | Rotes Rathaus, https://polyhaven.com/a/rotes_rathaus | Alexander Scholten | Floor Pavement, https://polyhaven.com/a/floor_pavement (2 m tile) | Charlotte Baglioni (photography), Dario Barresi (processing) | `assets/environments/rotes-rathaus-{4k,2k}.jpg`, `assets/ground/floor-pavement-{color,normal,rough}.webp` |
| Desert | Quarry 02, https://polyhaven.com/a/quarry_02 | Sergej Majboroda | Aerial Sand, https://polyhaven.com/a/aerial_sand (8 m tile) | Rob Tuytel | `assets/environments/quarry-02-{4k,2k}.jpg`, `assets/ground/aerial-sand-{color,normal,rough}.webp` |

These are real places (a South African valley, a Berlin square and a sand quarry), not Indian locations; the previous India-inspired generated panoramas are no longer used by the Garage.

History: the first Brief 3 version used a photographed garage (Autoshop 01) and projected every photo's floor under the car. Objects near each photographer were flattened onto the ground and stretched (planters and a banner in the former Palermo Square Urban photo), and blurring the projection only softened it. Both were replaced on 25 October 2026 at the owner's request by the modelled garage and real outdoor ground.

How the files were made: the 4k and 2k Radiance `.hdr` downloads were converted to Ultra HDR JPEGs (an SDR JPEG with an embedded gain map, quality 0.86, gain map 0.8) with `@monogrid/gainmap-js` 3.1.0 in headless Chrome. Rotes Rathaus keeps its full range. Kiara 5 Noon and Quarry 02 are capped at 64× the SDR white so the gain map keeps precision; the energy removed from the sun disc was measured from the source `.hdr` (direction and irradiance in `src/scenery.js`) and is restored by the shadow-casting sun light. The viewer decodes them with three.js `UltraHDRLoader`. Ground textures are Poly Haven's 1k JPEG maps (diffuse, OpenGL normal, roughness) re-encoded as WebP with `cwebp` (quality 80, 88 and 75; roughness at 512 px). Each ground's colour tint was measured so that, under that scene's sky and sun, it matches the photo's own ground near the camera.

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

