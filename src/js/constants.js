import { setInitialMapZoom } from './functions.js';

// viewport
export const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// Map & Controls
export const homeCoords = [40.63189, -79.16747];
export const initZoom = setInitialMapZoom(windowWidth);
// esri api key
export const esriKey = 'AAPK56c13fae1a6d4407a5d392981b9b50d2kwxUZMYHbCl1MyifP-JufC7lrC9K2TvvL93oR25h20j0cjvoAro30x-p0O27jPwS';