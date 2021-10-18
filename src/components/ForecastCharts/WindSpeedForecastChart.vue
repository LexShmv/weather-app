<template>
  <div class="chart__container container">
    <p class="chart__name">Wind Speed</p>
    <BarChart v-bind="chartWindSpeedProps" />
  </div>
</template>

<script>
import { BarChart, useBarChart } from 'vue-chart-3';
import { computed, watchEffect, ref } from 'vue';
import { Chart, registerables } from 'chart.js';

import weekDays from '../../composables/weekDays';

Chart.register(...registerables);

export default {
  name: 'WindSpeedForecast',
  components: {
    BarChart,
  },

  props: {
    fiveDaysForecast: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const chartWindSpeedProps = ref();
    const windSpeedForecast = computed(() => {
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
            label: 'Wind Speed',
            data: props.fiveDaysForecast.map((el) => el.wind.speed),
            borderColor: 'rgb(45, 0, 134)',
            backgroundColor: 'rgba(45, 0, 134,0.6)',
            hoverBackgroundColor: 'rgb(45, 0, 134)',
            borderWidth: 1,
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
      const { barChartProps } = useBarChart({
        chartData: windSpeedForecast.value,
        options,
      });

      chartWindSpeedProps.value = barChartProps.value;
    });
    return {
      chartWindSpeedProps,
    };
  },
};
</script>

<style></style>
