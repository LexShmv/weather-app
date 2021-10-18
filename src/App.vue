<template>
  <AppContainer :temperature="absoluteCurrentTemp">
    <TheHeader>
      <template #logo>
        <Logo />
      </template>
      <template #search>
        <SearchCity :errorName="error" v-model="query" @search-city="callApi" />
      </template>
    </TheHeader>

    <div class="main__content">
      <Loader v-if="loading" />

      <ErrorWidget v-else-if="error" />

      <template v-else>
        <MetricSwitcher v-model="metric" />

        <MainWeatherWidget
          :weather="weather"
          :weatherDesc="weatherDesc"
          :temperature="absoluteCurrentTemp"
          :placeName="name"
          :feelsLikeTemp="feelsLikeAbsoluteTemp"
          :metric="metric"
        />

        <WidgetsGridLayout
          :wind="wind"
          :sun="sun"
          :humidity="humidity"
          :pressure="pressure"
        >
        </WidgetsGridLayout>

        <ForecastCharts
          v-if="forecast.length > 1"
          :metric="metric"
          :data="forecast"
        />
        <template v-if="coord">
          <WeatherMap :coord="coord" />
        </template>
      </template>
    </div>
    <TheFooter />
  </AppContainer>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import SearchCity from './components/SearchCity.vue';
import MainWeatherWidget from './components/MainWidget/MainWeatherWidget.vue';
import AppContainer from './components/AppContainer.vue';
import MetricSwitcher from './components/MetricSwitcher.vue';
import WidgetsGridLayout from './components/WidgetsGridLayout.vue';
import ForecastCharts from './components/ForecastCharts/ForecastCharts.vue';
import ErrorWidget from './components/ErrorWidget.vue';
import Loader from './components/Loader.vue';
import Logo from './components/Logo.vue';
import TheFooter from './components/TheFooter.vue';
import WeatherMap from './components/WeatherMap.vue';

import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';

import { API_KEY } from './api-key';

export default {
  name: 'App',
  components: {
    WeatherMap,
    TheHeader,
    TheFooter,
    Logo,
    SearchCity,
    MainWeatherWidget,
    AppContainer,
    MetricSwitcher,
    WidgetsGridLayout,
    ForecastCharts,
    ErrorWidget,
    Loader,
  },

  setup() {
    const metric = ref('celcius');
    const query = ref('MOSCOW');
    const loading = ref(false);
    const error = ref(false);

    const name = ref('');
    const coord = ref({});

    const absoluteCurrentTemp = ref(0);
    const feelsLikeAbsoluteTemp = ref(0);
    const weather = ref('');
    const weatherDesc = ref('');
    let wind = reactive({
      speed: 0,
      deg: 0,
      gust: 0,
    });
    let sun = reactive({
      sunrise: '',
      sunset: '',
    });
    const humidity = ref(0);
    const pressure = ref(0);

    let forecast = ref([]);

    onMounted(() => {
      mainApi(query.value, 'RU');
      forecastApi(query.value, 'RU');
    });

    const mainApi = (cityName, countryName) => {
      absoluteCurrentTemp.value = 0;
      loading.value = true;
      error.value = false;

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${API_KEY}`
        )
        .then((res) => {
          coord.value = res.data.coord;
          loading.value = false;
          absoluteCurrentTemp.value = res.data.main.temp;
          weather.value = res.data.weather[0].main;
          weatherDesc.value = res.data.weather[0].description;
          name.value = res.data.name + ', ' + res.data.sys.country;
          feelsLikeAbsoluteTemp.value = res.data.main.feels_like;
          wind.speed = res.data.wind.speed;
          wind.deg = res.data.wind.deg;
          wind.gust = res.data.wind.gust;
          pressure.value = res.data.main.pressure;
          humidity.value = res.data.main.humidity;
          sun.sunrise = new Date(
            res.data.sys.sunrise * 1000
          ).toLocaleTimeString();
          sun.sunset = new Date(
            res.data.sys.sunset * 1000
          ).toLocaleTimeString();
        })
        .catch(() => {
          error.value = true;
          loading.value = false;
        });
    };

    const forecastApi = (cityName, countryName) => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryName}&appid=${API_KEY}`
        )
        .then((res) => {
          forecast.value = res.data.list;
        })
        .catch(() => {
          error.value = true;
          loading.value = false;
        });
    };

    function callApi(searchOptions) {
      mainApi(searchOptions.name, searchOptions.country);
      forecastApi(searchOptions.name, searchOptions.country);
    }

    return {
      coord,
      name,
      query,
      loading,
      error,
      callApi,
      absoluteCurrentTemp,
      feelsLikeAbsoluteTemp,
      weather,
      weatherDesc,
      metric,
      wind,
      pressure,
      forecast,
      sun,
      humidity,
    };
  },
};
</script>

<style>
.container {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  font-family: 'Montserrat';
  color: #2d0086;
  animation: open 1s ease-in-out;
  transform-origin: left;
}

.main__content {
  min-height: calc(100vh - 59px - 16px - 48px);
  position: relative;
}

.container:nth-child(2n) {
  transform-origin: right;
}

@keyframes open {
  0% {
    transform: scaleX(0.3);
  }
  100% {
    transform: translateX(1);
  }
}
</style>
