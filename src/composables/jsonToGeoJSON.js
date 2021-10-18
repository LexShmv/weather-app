export let jsonToGeoJson = function(google, map, weatherItem) {
  let feature = {
    type: 'Feature',
    properties: {
      city: weatherItem.name,
      weather: weatherItem.weather[0].main,
      temperature: weatherItem.main.temp,
      min: weatherItem.main.temp_min,
      max: weatherItem.main.temp_max,
      humidity: weatherItem.main.humidity,
      pressure: weatherItem.main.pressure,
      windSpeed: weatherItem.wind.speed,
      windDegrees: weatherItem.wind.deg,
      windGust: weatherItem.wind.gust,
      icon:
        'http://openweathermap.org/img/w/' +
        weatherItem.weather[0].icon +
        '.png',
      coordinates: [weatherItem.coord.Lon, weatherItem.coord.Lat],
    },
    geometry: {
      type: 'Point',
      coordinates: [weatherItem.coord.Lon, weatherItem.coord.Lat],
    },
  };

  map.data.setStyle(function(feature) {
    return {
      icon: {
        url: feature.getProperty('icon'),
        anchor: new google.maps.Point(30, 30),
      },
    };
  });

  // returns object
  return feature;
};
