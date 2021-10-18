import axios from 'axios';
import { API_KEY } from '../api-key';

export const getWeather = (northLat, eastLng, southLat, westLng, zoom) => {
  return axios(
    `http://api.openweathermap.org/data/2.5/box/city?bbox=${northLat},${eastLng},${southLat},${westLng},${zoom}&cluster=yes&format=json&appid=${API_KEY}`
  ).then((r) => r);
};
