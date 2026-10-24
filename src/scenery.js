// Photographed CC0 HDRIs from Poly Haven (sources in modeling/SCENERY_SOURCES.md),
// shipped as Ultra HDR JPEGs: an SDR JPEG plus a gain map that restores the HDR range.
// `height` is the panorama camera height in metres, used to project its floor.
// `sun` is the energy the 64x encoding cap removed from the sun disc, measured from
// the source .hdr in the panorama's own frame; a shadow-casting light restores it.
// `sunScale` balances that light against the photographed ground: the full measured
// disc lit the car several times brighter than the sunlit ground in the same photo.
// `exposure` was set so a lit door matches its Paint swatch under ACES filmic
// (door pixels vs swatch hex, side view); a door in garage shade stays a little darker.
// `reflectionBand` (Garage only) adds a thin ring of light just below the horizon to the
// reflections, not the backdrop, so the flat side panels carry a highlight line.
export const SCENERIES = Object.freeze({
  studio: { label: 'Garage', description: 'Photographed workshop · Poly Haven HDRI', file: 'autoshop-01', rotation: 0, height: 1.6, radius: 22, exposure: .88, shadow: .5, key: [-.30, .94, .19], reflectionBand: { elevation: [-9, -4], radiance: 1.8 } },
  mountains: { label: 'Mountains', description: 'Photographed mountain valley · Poly Haven HDRI', file: 'kiara-5-noon', rotation: 0, height: 1.7, radius: 70, exposure: 1.1, shadow: .78, sunScale: .3, sun: { direction: [.466, .779, .419], irradiance: [15.54, 15.59, 16.72] } },
  urban: { label: 'Urban', description: 'Photographed city square · Poly Haven HDRI', file: 'palermo-square', rotation: 0, height: 1.7, radius: 45, exposure: .95, shadow: .5, key: [0, 1, 0] },
  desert: { label: 'Desert', description: 'Photographed sand quarry · Poly Haven HDRI', file: 'quarry-02', rotation: 0, height: 1.7, radius: 70, exposure: 1.1, shadow: .74, sunScale: .3, sun: { direction: [.55, .734, .40], irradiance: [9.55, 7.99, 5.21] } },
});
export function validScenery(value) {
  return Object.hasOwn(SCENERIES, value) ? value : 'studio';
}
export function sceneryURL(id, resolution = '4k') {
  return `assets/environments/${SCENERIES[validScenery(id)].file}-${resolution}.jpg`;
}
export function sceneryMessage(id, { loading = false, failed = false, night = false } = {}) {
  if (loading) return `Loading ${SCENERIES[validScenery(id)].label.toLowerCase()} scenery…`;
  if (failed) return 'Scenery could not load. A plain backdrop is shown; choose a scene to retry.';
  if (night) return 'Night uses a neutral test ground. Scenery returns in daylight.';
  return SCENERIES[validScenery(id)].description;
}
