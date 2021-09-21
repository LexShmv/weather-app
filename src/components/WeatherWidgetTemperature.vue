<template>
  <div class="weather__temp">
    {{ temperature }}
  </div>
</template>

<script>
export default {
  name: 'WeatherWidgetTemperature',
  props: {
    temperature: {
      type: String,
    },
  },
};
</script>

<style>
.weather__temp {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}
</style>
