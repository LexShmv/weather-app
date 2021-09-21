<template>
  <div class="weather">
    <Loader v-if="loading" />
    <WeatherWidgetGrid v-else>
      <template #icon><WeatherWidgetIcon :weather="weather"/></template>
      <template #description
        ><WeatherWidgetDescription :weatherDesc="weatherDesc"
      /></template>
      <template #date><WeatherWidgetDate /></template>
      <template #temperature
        ><WeatherWidgetTemperature :temperature="temperature"
      /></template>
      <template #place><WeatherWidgePlace :placeName="placeName"/></template>
    </WeatherWidgetGrid>
  </div>
</template>

<script>
import Loader from './Loader.vue';
import WeatherWidgetIcon from './WeatherWidgetIcon.vue';
import WeatherWidgetDate from './WeatherWidgetDate.vue';
import WeatherWidgetDescription from './WeatherWidgetDescription.vue';
import WeatherWidgetTemperature from './WeatherWidgetTemperature.vue';
import WeatherWidgePlace from './WeatherWidgetPlace.vue';
import WeatherWidgetGrid from './WeatherWidgetGrid.vue';

export default {
  name: 'WeatherWidget',
  components: {
    Loader,
    WeatherWidgetGrid,
    WeatherWidgetIcon,
    WeatherWidgetDate,
    WeatherWidgetDescription,
    WeatherWidgetTemperature,
    WeatherWidgePlace,
  },
  props: {
    temperature: {
      type: String,
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
    loading: {
      type: Boolean,
    },
  },
};
</script>

<style>
.weather {
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  max-width: 100%;
  border-radius: 1rem;
  font-family: 'Montserrat';
  max-width: 100%;
  color: #2d0086;
}
</style>
