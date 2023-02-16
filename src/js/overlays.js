// Esri Leaflet
import { dynamicMapLayer } from 'esri-leaflet';
import { setPopupMaxWidth } from './functions.js';
import { windowWidth } from './constants.js';
import { geoJson } from 'leaflet';

// hiking trail data file
const data = require('../data/trails.geojson');

// Hiking Trails
export const hikingTrails = geoJson(data, {
    style: function(feature) {
        return {
            color: '#FFFF00',
            weight: 4,
            dashArray: '4 4'
        }
    }
});

// USGS elevation contours
export const usgsContours = dynamicMapLayer({
    url: 'https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer',
    layers: [19]
});