# Himachal distant-terrain elevation

This is a real elevation grid east of Manali, in the Hamta area of Himachal Pradesh, India. It is a distant-scene geometry source, **not an image background**, and must not alter the playable course physics.

## Source and reuse

- [AWS Open Data Terrain Tiles registry](https://registry.opendata.aws/terrain-tiles/) provides public, no-account access and links to the provider's attribution terms.
- [Tilezen/Joerd attribution](https://github.com/tilezen/joerd/blob/master/docs/attribution.md) identifies SRTM as public-domain US government data and requests USGS credit.
- [Provider source documentation](https://github.com/tilezen/joerd/blob/master/docs/data-sources.md) explains tile source headers. The actual downloaded object's `x-amz-meta-x-imagery-sources` header is `srtm/N32E077.tif`. This is not the separately licensed DLR X-SAR or CGIAR-derived SRTM product.
- [NASA scientific-data licensing guidance](https://science.data.nasa.gov/about/license) describes unrestricted NASA-led mission data as CC0 unless marked otherwise. Do not generalize this guidance to other Mapzen regional datasets.

Include this credit in the game's scenery/data credits: **Mapzen Terrain Tiles. SRTM terrain data courtesy of the U.S. Geological Survey.** Identify our resampling/rounding and any subsequent display scaling; do not imply USGS endorsement. Data are supplied without a suitability warranty and are not for navigation.

The accompanying provenance JSON records exact source URL, source-header evidence, geographic pixel-centre bounds, elevation range, byte sizes and SHA-256 checksums. The original 61 KB Terrarium PNG is preserved for reproducibility. Its colours encode height; it is not a photograph.

## Processing and integration

`scripts/prepare-himachal-elevation.mjs` downloads one 256×256 Terrarium tile and decodes metres as `R×256 + G + B/256 − 32768`. **Decoding happens before resizing**, to avoid RGB channel-carry interpolation artifacts. Heights are bilinearly resampled to 128×128 and rounded to metres, without synthetic peaks or smoothing.

`src/trail/himachal-elevation.js` exports:

- `himachalElevationMeters(x,z)` — bilinear raw elevation in metres.
- `himachalElevationNormalized(x,z)` — bilinear elevation normalized to the grid's actual minimum/maximum, from 0 to 1.
- `HIMACHAL_ELEVATION` — grid size, range and credit.

Coordinates are normalized: west→east is x −1→+1; north→south is z −1→+1. Inputs clamp at edges, never tile/repeat. To preserve the landscape's proportions, use the metadata's approximately 8.3 km width with the actual elevation range, rather than arbitrary vertical amplification. Repositioning or scaling this distant scenery does not make the fictional driving course a geolocated route.
