<template>
  <TemperatureForecastChart
    :fiveDaysForecast="fiveDaysForecast"
    :metric="metric"
  />
  <PressureForecastChart :fiveDaysForecast="fiveDaysForecast" />
  <HumidityForecastChart :fiveDaysForecast="fiveDaysForecast" />
  <WindSpeedForecastChart :fiveDaysForecast="fiveDaysForecast" />
</template>

<script>
import TemperatureForecastChart from './TemperatureForecastChart.vue';
import PressureForecastChart from './PressureForecastChart.vue';

import { computed } from 'vue';
import HumidityForecastChart from './HumidityForecastChart.vue';
import WindSpeedForecastChart from './WindSpeedForecastChart.vue';

export default {
  name: 'ForecastChart',
  components: {
    TemperatureForecastChart,
    PressureForecastChart,
    HumidityForecastChart,
    WindSpeedForecastChart,
  },
  props: {
    data: {
      type: Array,
    },
    metric: {
      type: String,
    },
  },
  setup(props) {
    const fiveDaysForecast = computed(() => [
      props.data[0],
      ...props.data.filter(
        (el) =>
          el.dt_txt.includes('12:00') &&
          !el.dt_txt.includes(new Date().toISOString().slice(0, 10))
      ),
    ]);

    return {
      fiveDaysForecast,
    };
  },
};
</script>

<style>
.chart__container {
  margin: 0.5rem 0;
  padding: 0.5rem;
  min-width: 100%;
}

@media (min-width: 476px) {
  .chart__container {
    margin: 0.5rem 0;
    padding: 1rem;
    min-width: 100%;
  }
}
.chart__name {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}

.chart__item {
  position: relative;
  min-height: 20vh;
  width: 100%;
}
</style>
