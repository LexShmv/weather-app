<template>
  <div class="weather__temp">
    <p class="truth-temperature">{{ temperature }}</p>
    <p class="feels-like-temperature">Feels like: {{ feelsLike }}</p>
  </div>
</template>

<script>
export default {
  name: 'WeatherWidgetTemperature',
  props: {
    temperature: {
      type: String,
    },
    feelsLike: {
      type: String,
    },
  },
};
</script>

<style>
.weather__temp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.truth-temperature {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}
.feels-like-temperature {
  font-size: 1rem;
}
</style>
