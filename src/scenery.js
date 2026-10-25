// Garage is the modelled jimnygami workshop (src/workshop-stage.js): real geometry, so
// it stays correct from every angle, and its own reflections light the car.
// Outdoor scenes use a photographed CC0 Poly Haven HDRI (sources in
// modeling/SCENERY_SOURCES.md) only as the distant backdrop and the light, shipped as
// Ultra HDR JPEGs (an SDR JPEG plus a gain map that restores the HDR range). The ground
// near the car is a real textured surface (src/outdoor-ground.js); nothing from the photo
// is projected onto the floor, so nearby objects in the photo cannot stretch.
// `sun` is the energy the 64x encoding cap removed from the sun disc, measured from
// the source .hdr in the panorama's own frame; a shadow-casting light restores it.
// `sunScale` balances that light against the photographed ground: the full measured
// disc lit the car several times brighter than the sunlit ground in the same photo.
// `exposure` was set so a lit door matches its Paint swatch under ACES filmic.
// `ground.size` is the texture's real tile size in metres; `ground.tint` scales its
// colour so, under this scene's sky and sun, it matches the photo's ground near the
// camera (photo radiance x pi / irradiance, divided by the texture's mean colour).
export const SCENERIES = Object.freeze({
  studio: { label: 'Garage', description: 'Modelled jimnygami workshop' },
  mountains: { label: 'Mountains', description: 'Photographed mountain valley · Poly Haven HDRI', file: 'kiara-5-noon', rotation: 0, exposure: 1.1, sunScale: .3, sun: { direction: [.466, .779, .419], irradiance: [15.54, 15.59, 16.72] }, ground: { texture: 'dry-ground-rocks', size: 4, tint: [.711, .898, .969] } },
  urban: { label: 'Urban', description: 'Photographed city square · Poly Haven HDRI', file: 'rotes-rathaus', rotation: 0, exposure: .95, key: [0, 1, 0], ground: { texture: 'floor-pavement', size: 2, tint: [.920, .964, .989] } },
  desert: { label: 'Desert', description: 'Photographed sand quarry · Poly Haven HDRI', file: 'quarry-02', rotation: 0, exposure: 1.1, sunScale: .3, sun: { direction: [.55, .734, .40], irradiance: [9.55, 7.99, 5.21] }, ground: { texture: 'aerial-sand', size: 8, tint: [1.505, 1.860, 2.030] } },
});
export function validScenery(value) {
  return Object.hasOwn(SCENERIES, value) ? value : 'studio';
}
export function sceneryURL(id, resolution = '4k') {
  return `assets/environments/${SCENERIES[validScenery(id)].file}-${resolution}.jpg`;
}
export function sceneryMessage(id, { loading = false, failed = false, night = false } = {}) {
  if (loading) return `Loading ${SCENERIES[validScenery(id)].label.toLowerCase()} scenery…`;
  if (failed) return 'Scenery could not load. The garage is shown; choose a scene to retry.';
  if (night) return 'Night uses a neutral test ground. Scenery returns in daylight.';
  return SCENERIES[validScenery(id)].description;
}
