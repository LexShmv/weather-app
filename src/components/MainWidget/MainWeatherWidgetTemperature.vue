<template>
  <div class="weather__temp">
    <p class="truth-temperature">{{ computedTemperature }}</p>
    <p class="feels-like-temperature">Feels like: {{ computedFeelsLike }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { toCelcius } from '../../utils/convertingTempToCelcius';
import { toFahrenheit } from '../../utils/convertingTempToFahrenheit';

export default {
  name: 'WeatherWidgetTemperature',
  props: {
    temperature: {
      type: Number,
    },
    feelsLike: {
      type: Number,
    },
    metric: {
      type: String,
    },
  },

  setup(props) {
    const computedTemperature = computed(() => {
      return props.metric === 'celcius'
        ? toCelcius(props.temperature) + ' ℃'
        : toFahrenheit(props.temperature) + ' ℉';
    });

    const computedFeelsLike = computed(() => {
      return props.metric === 'celcius'
        ? toCelcius(props.feelsLike) + ' ℃'
        : toFahrenheit(props.feelsLike) + ' ℉';
    });

    return { computedTemperature, computedFeelsLike };
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
