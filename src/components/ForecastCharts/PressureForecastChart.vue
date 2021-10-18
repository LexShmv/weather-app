<template>
  <div class="chart__container container">
    <p class="chart__name">Pressure</p>
    <LineChart v-bind="chartPressureProps" />
  </div>
</template>

<script>
import { LineChart, useLineChart } from 'vue-chart-3';
import { computed, watchEffect, ref } from 'vue';
import { Chart, registerables } from 'chart.js';
import { toMM } from '../../utils/convertingPressureToMM';

import weekDays from '../../composables/weekDays';

Chart.register(...registerables);

export default {
  name: 'PressureForecast',
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
    const chartPressureProps = ref();
    const dataPressure = computed(() => {
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
            label: 'Pressure',
            data: props.fiveDaysForecast.map((el) => toMM(el.main.pressure)),
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
        chartData: dataPressure.value,
        options,
      });

      chartPressureProps.value = lineChartProps.value;
    });
    return {
      chartPressureProps,
    };
  },
};
</script>

<style></style>
