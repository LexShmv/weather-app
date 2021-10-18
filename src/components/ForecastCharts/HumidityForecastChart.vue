<template>
  <div class="chart__container container">
    <p class="chart__name">Humidity</p>

    <LineChart v-bind="chartHumidityProps" />
  </div>
</template>

<script>
import { LineChart, useLineChart } from 'vue-chart-3';
import { computed, watchEffect, ref } from 'vue';
import { Chart, registerables } from 'chart.js';

import weekDays from '../../composables/weekDays';

Chart.register(...registerables);

export default {
  name: 'HumidityForecast',
  components: {
    LineChart,
  },

  props: {
    fiveDaysForecast: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const chartHumidityProps = ref();
    const dataHumidity = computed(() => {
      return {
        labels: props.fiveDaysForecast.map((el) => {
          if (new Date(el.dt * 1000).getDay() === new Date().getDay()) {
            return 'Today';
          } else {
            return weekDays[new Date(el.dt * 1000).getDay()];
          }
        }),
        datasets: [
          {
            label: 'Humidity',
            data: props.fiveDaysForecast.map((el) => el.main.humidity),
            borderColor: 'rgb(45, 0, 134)',
            tension: 0.3,
          },
        ],
      };
    });

    const options = {
      aspectRatio: 0.6,
      plugins: {
        legend: {
          display: false,
        },
      },
    };

    watchEffect(() => {
      const { lineChartProps } = useLineChart({
        chartData: dataHumidity.value,
        options,
      });

      chartHumidityProps.value = lineChartProps.value;
    });
    return {
      chartHumidityProps,
    };
  },
};
</script>

<style></style>
