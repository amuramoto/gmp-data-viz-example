import { Loader } from '@googlemaps/loader';

export class GoogleMapLoader {

    constructor () {        
    }

    static async init (key) {
        const loader = new Loader({
            apiKey: key,
            version: "weekly",
            libraries: ["places", "drawing", "geometry"]
        });
        
        const mapOptions = {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 4,
            styles: [
                {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                    "visibility": "off"
                    }
                ]
                },
                {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                    "visibility": "off"
                    }
                ]
                },
                {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                    "visibility": "off"
                    }
                ]
                },
                {
                "elementType": "geometry",
                "stylers": [
                    {
                    "color": "#242f3e"
                    }
                ]
                },
                {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#746855"
                    }
                ]
                },
                {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                    "color": "#242f3e"
                    }
                ]
                },
                {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#d59563"
                    }
                ]
                },
                {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#d59563"
                    }
                ]
                },
                {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                    "color": "#263c3f"
                    }
                ]
                },
                {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#6b9a76"
                    }
                ]
                },
                {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                    "color": "#38414e"
                    }
                ]
                },
                {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                    "color": "#212a37"
                    }
                ]
                },
                {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#9ca5b3"
                    }
                ]
                },
                {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                    "color": "#746855"
                    }
                ]
                },
                {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                    "color": "#1f2835"
                    }
                ]
                },
                {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#f3d19c"
                    }
                ]
                },
                {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                    "color": "#2f3948"
                    }
                ]
                },
                {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#d59563"
                    }
                ]
                },
                {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                    "color": "#17263c"
                    }
                ]
                },
                {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                    "color": "#515c6d"
                    }
                ]
                },
                {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                    "color": "#17263c"
                    }
                ]
                }
            ]    
        };

        await loader.load();
        return new google.maps.Map(document.getElementById("map"), mapOptions);        
    }
}