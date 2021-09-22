<template>
  <AppContainer :temperature="absoluteCurrentTemp">
    <SearchCity
      :errorName="error"
      v-model="query"
      @submiting-search="callApi"
    />

    <MetricSwitcher v-model="metric" />

    <WeatherWidget
      :weather="weather"
      :weatherDesc="weatherDesc"
      :temperature="temperature"
      :placeName="name"
      :loading="loading"
      :feelsLikeTemp="feelsLikeTemp"
    />
  </AppContainer>
</template>

<script>
import SearchCity from './components/SearchCity.vue';
import WeatherWidget from './components/WeatherWidget.vue';
import AppContainer from './components/AppContainer.vue';
import MetricSwitcher from './components/MetricSwitcher.vue';

import axios from 'axios';
import { computed, onMounted, ref, watch } from 'vue';

import { toCelcius, toFahrenheit } from '@/composables/convertingTemps';
import { API_KEY } from './api-key';

export default {
  name: 'App',
  components: { SearchCity, WeatherWidget, AppContainer, MetricSwitcher },

  setup() {
    const metric = ref('celcius');
    const query = ref('MOSCOW');
    const loading = ref(false);
    const error = ref(false);

    const name = ref('');

    const absoluteCurrentTemp = ref(0);
    const feelsLikeAbsoluteTemp = ref(0);
    const weather = ref('');
    const weatherDesc = ref('');

    onMounted(() => {
      callApi();
    });

    const callApi = async () => {
      absoluteCurrentTemp.value = 0;
      loading.value = true;
      error.value = false;

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query.value}&appid=${API_KEY}`
        )
        .then((res) => {
          console.log(res);
          loading.value = false;
          absoluteCurrentTemp.value = res.data.main.temp;
          weather.value = res.data.weather[0].main;
          weatherDesc.value = res.data.weather[0].description;
          name.value = res.data.name + ', ' + res.data.sys.country;
          feelsLikeAbsoluteTemp.value = res.data.main.feels_like;
        })
        .catch(() => {
          error.value = true;
          loading.value = false;
        });
    };

    watch(query, () => (error.value = false));

    const weatherResultCelcius = computed(() =>
      absoluteCurrentTemp.value ? toCelcius(absoluteCurrentTemp.value) : ''
    );
    const weatherResultFahrenheit = computed(() =>
      absoluteCurrentTemp.value ? toFahrenheit(absoluteCurrentTemp.value) : ''
    );
    const feelsLikeCelciusTemp = computed(() =>
      feelsLikeAbsoluteTemp.value ? toCelcius(feelsLikeAbsoluteTemp.value) : ''
    );
    const feelsLikeFahrenheitTemp = computed(() =>
      feelsLikeAbsoluteTemp.value
        ? toFahrenheit(feelsLikeAbsoluteTemp.value)
        : ''
    );

    const temperature = computed(() =>
      metric.value === 'celcius'
        ? weatherResultCelcius.value
        : weatherResultFahrenheit.value
    );

    const feelsLikeTemp = computed(() =>
      metric.value === 'celcius'
        ? feelsLikeCelciusTemp.value
        : feelsLikeFahrenheitTemp.value
    );

    return {
      name,
      query,
      loading,
      error,
      callApi,
      absoluteCurrentTemp,
      weather,
      weatherDesc,
      metric,
      temperature,
      feelsLikeTemp,
    };
  },
};
</script>

<style></style>
