<template>
  <AppContainer :temperature="absoluteCurrentTemp">
    <SearchCity
      :errorName="error"
      v-model="query"
      @submiting-search="callApi"
    />

    <WeatherWidget
      :weather="weather"
      :weatherDesc="weatherDesc"
      :temperature="weatherResultCelcius"
      :placeName="name"
      :loading="loading"
    />
  </AppContainer>
</template>

<script>
import SearchCity from './components/SearchCity.vue';
import WeatherWidget from './components/WeatherWidget.vue';
import AppContainer from './components/AppContainer.vue';

import axios from 'axios';
import { computed, onMounted, ref, watch } from 'vue';

import { toCelcius, toFahrenheit } from '@/composables/convertingTemps';
import { API_KEY } from './api-key';

export default {
  name: 'App',
  components: { SearchCity, WeatherWidget, AppContainer },

  setup() {
    const query = ref('MOSCOW');
    const loading = ref(false);
    const error = ref(false);

    const name = ref('');

    const absoluteCurrentTemp = ref('');
    const weather = ref('');
    const weatherDesc = ref('');

    onMounted(() => {
      callApi();
    });

    const callApi = async () => {
      absoluteCurrentTemp.value = '';
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
        })
        .catch(() => {
          error.value = true;
          loading.value = false;
        });
    };

    watch(query, () => (error.value = false));

    const weatherResultCelcius = computed(() =>
      toCelcius(absoluteCurrentTemp.value)
    );
    const weatherResultFahrenheit = computed(() =>
      toFahrenheit(absoluteCurrentTemp.value)
    );

    return {
      name,
      query,
      loading,
      error,
      callApi,
      absoluteCurrentTemp,
      weather,
      weatherResultCelcius,
      weatherResultFahrenheit,
      weatherDesc,
    };
  },
};
</script>

<style></style>
