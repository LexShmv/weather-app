import { MAPS_API_KEY } from '../google-map-api-key';
import { Loader } from '@googlemaps/js-api-loader';
import { getWeather } from '../composables/getWeatherMap';
import { jsonToGeoJson } from '../composables/jsonToGeoJSON';

const loader = new Loader({
  apiKey: MAPS_API_KEY,
  version: 'weekly',
  libraries: ['places'],
});

export function initializeMap(divRef, mapConfig) {
  return loader
    .load()
    .then((google) => {
      const map = new google.maps.Map(divRef, mapConfig);
      return { google, map };
    })
    .then(async ({ google, map }) => {
      const infowindow = new google.maps.InfoWindow();
      let geoJSON = {};

      google.maps.event.addListener(map, 'idle', async () => {
        const coords = {
          NE: () => map.getBounds().getNorthEast(),
          SW: () => map.getBounds().getSouthWest(),
          zoom: () => map.getZoom(),
        };

        const resetData = () => {
          geoJSON = {
            type: 'FeatureCollection',
            features: [],
          };
          map.data.forEach(function(feature) {
            map.data.remove(feature);
          });
        };

        const req = await getWeather(
          coords.NE().lng(),
          coords.NE().lat(),
          coords.SW().lng(),
          coords.SW().lat(),
          coords.zoom()
        );

        resetData();

        req.data.list.forEach((el) =>
          geoJSON.features.push(jsonToGeoJson(google, map, el))
        );

        map.data.addGeoJson(geoJSON);

        map.data.addListener('click', function(event) {
          infowindow.setContent(
            '<div class="window__content">' +
              '<img src=' +
              event.feature.getProperty('icon') +
              '>' +
              '<br /><strong>' +
              event.feature.getProperty('city') +
              '</strong>' +
              '<br />' +
              event.feature.getProperty('temperature') +
              '&deg;C' +
              '<br />' +
              event.feature.getProperty('weather') +
              '</div>'
          );

          infowindow.setOptions({
            position: {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
            },
            pixelOffset: {
              width: 0,
              height: -15,
            },
          });

          infowindow.open(map);
        });
      });
    })
    .catch((e) => console.log(e));
}
