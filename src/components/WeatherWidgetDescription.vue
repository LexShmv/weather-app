<template>
  <div class="weather__desc">
    <p>{{ weatherDesc }}</p>
  </div>
</template>

<script>
export default {
  name: 'WeatherWidgetDescription',
  props: {
    weatherDesc: {
      type: String,
    },
  },
};
</script>

<style>
.weather__desc {
  font-size: 1.2rem;
  text-align: center;
  text-transform: capitalize;
}
</style>
