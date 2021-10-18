<template>
  <div class="weather__container container">
    <MainWeatherWidgetGrid>
      <template #icon><MainWeatherWidgetIcon :weather="weather"/></template>
      <template #description
        ><MainWeatherWidgetDescription :weatherDesc="weatherDesc"
      /></template>
      <template #date><MainWeatherWidgetDate /></template>
      <template #temperature
        ><MainWeatherWidgetTemperature
          :feelsLike="feelsLikeTemp"
          :temperature="temperature"
          :metric="metric"
      /></template>
      <template #place
        ><MainWeatherWidgePlace :placeName="placeName"
      /></template>
    </MainWeatherWidgetGrid>
  </div>
</template>

<script>
import MainWeatherWidgetIcon from './MainWeatherWidgetIcon.vue';
import MainWeatherWidgetDate from './MainWeatherWidgetDate.vue';
import MainWeatherWidgetDescription from './MainWeatherWidgetDescription.vue';
import MainWeatherWidgetTemperature from './MainWeatherWidgetTemperature.vue';
import MainWeatherWidgePlace from './MainWeatherWidgetPlace.vue';
import MainWeatherWidgetGrid from './MainWeatherWidgetGrid.vue';

export default {
  name: 'WeatherWidget',
  components: {
    MainWeatherWidgetGrid,
    MainWeatherWidgetIcon,
    MainWeatherWidgetDate,
    MainWeatherWidgetDescription,
    MainWeatherWidgetTemperature,
    MainWeatherWidgePlace,
  },
  props: {
    feelsLikeTemp: {
      type: Number,
    },
    temperature: {
      type: Number,
    },
    weather: {
      type: String,
    },
    weatherDesc: {
      type: String,
    },
    placeName: {
      type: String,
    },
    metric: {
      type: String,
    },
  },
};
</script>

<style>
.weather__container {
  min-width: 100%;
  padding: 1rem;
}
</style>
