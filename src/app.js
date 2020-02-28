import {GoogleMapLoader} from './map_loader.js';

// Set your Google Maps API key here or via environment variable
const GOOGLE_MAPS_API_KEY = process.env.GoogleMapsAPIKey || "";
(async function() {
  const map = await GoogleMapLoader.init(GOOGLE_MAPS_API_KEY);
  map.data.loadGeoJson('../data/counties.json');
}())

function addMarkers(){

}

function addMarkClusters(){

}

function addPolylines(){

}

function addPolygons(){

}
