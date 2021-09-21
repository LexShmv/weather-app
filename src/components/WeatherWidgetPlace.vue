<template>
  <div class="weather__place">
    <p>{{ placeName }}</p>
  </div>
</template>

<script>
export default {
  name: 'WeatherWidgetPlace',
  props: {
    placeName: {
      type: String,
    },
  },
};
</script>

<style>
.weather__place {
  text-align: center;
  font-size: 1.7rem;
  padding: 1rem;
}
</style>
