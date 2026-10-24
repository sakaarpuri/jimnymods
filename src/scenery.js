export const SCENERIES = Object.freeze({
  studio: { label: 'Studio', description: 'Neutral studio background' },
  mountains: { label: 'Mountains', description: 'Himalayan mountains · generated scenery', url: 'assets/environments/india-mountains.webp', rotation: 1.7 },
  urban: { label: 'Urban', description: 'Jaipur-inspired city · generated scenery', url: 'assets/environments/india-urban.webp', rotation: .7 },
  desert: { label: 'Desert', description: 'Thar desert · generated scenery', url: 'assets/environments/india-desert.webp', rotation: 2.4 },
});
export function validScenery(value) {
  return Object.hasOwn(SCENERIES, value) ? value : 'studio';
}
export function sceneryMessage(id, { loading = false, failed = false, night = false } = {}) {
  if (loading) return `Loading ${SCENERIES[validScenery(id)].label.toLowerCase()} scenery…`;
  if (failed) return 'Scenery could not load. Studio is shown; choose a scene to retry.';
  if (night) return 'Night uses a neutral test ground. Scenery returns in daylight.';
  return SCENERIES[validScenery(id)].description;
}
