<template>
  <div class="chart__container container">
    <p class="chart__name">Temperature forecast</p>
    <BarChart v-bind="chartWeatherProps" />
  </div>
</template>

<script>
import { BarChart, useBarChart } from 'vue-chart-3';
import { computed, watchEffect, ref } from 'vue';
import { Chart, registerables } from 'chart.js';
import { toCelcius } from '../../utils/convertingTempToCelcius';
import { toFahrenheit } from '../../utils/convertingTempToFahrenheit';

import weekDays from '../../composables/weekDays';

Chart.register(...registerables);

export default {
  name: 'TemperatureForecast',
  components: {
    BarChart,
  },

  props: {
    fiveDaysForecast: {
      type: Object,
      required: true,
    },
    metric: {
      type: String,
    },
  },

  setup(props) {
    const chartWeatherProps = ref();
    const dataForecast = computed(() => {
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
            label:
              'Temperature ' +
              (props.metric === 'celcius' ? 'Celcius' : 'Fahrenheit'),
            data:
              props.metric === 'celcius'
                ? props.fiveDaysForecast.map((el) => toCelcius(el.main.temp))
                : props.fiveDaysForecast.map((el) =>
                    toFahrenheit(el.main.temp)
                  ),

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
        chartData: dataForecast.value,
        options,
      });

      chartWeatherProps.value = barChartProps.value;
    });
    return {
      chartWeatherProps,
    };
  },
};
</script>

<style></style>
