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
@media (max-width: 476px) {
  .weather__desc {
    margin-top: 1rem;
  }
}
</style>
