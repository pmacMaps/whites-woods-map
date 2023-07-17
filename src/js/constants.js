import { setInitialMapZoom } from './functions.js';

// viewport
export const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// Map & Controls
export const homeCoords = [40.63189, -79.16747];
export const initZoom = setInitialMapZoom(windowWidth);
