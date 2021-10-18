<template>
  <div class="widgets-grid">
    <WindWidget :wind="wind" />
    <SuntimeWidget :sun="sun" />
    <HumidityWidget :humidity="humidity" />
    <PressureWidget :pressure="pressure" />
  </div>
</template>

<script>
import WindWidget from './Widgets/WindWidget.vue';
import SuntimeWidget from './Widgets/SuntimeWidget.vue';
import HumidityWidget from './Widgets/HumidityWidget.vue';
import PressureWidget from './Widgets/PressureWidget.vue';

export default {
  name: 'WidgetsGridLayout',

  components: {
    WindWidget,
    SuntimeWidget,
    HumidityWidget,
    PressureWidget,
  },

  props: {
    loading: {
      type: Boolean,
    },
    wind: {
      type: Object,
    },
    sun: {
      type: Object,
    },
    humidity: {
      type: Number,
    },
    pressure: {
      type: Number,
    },
  },
};
</script>

<style>
.widgets-grid {
  margin: 0.5rem 0;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 0.5rem;
}

@media (min-width: 476px) {
  .widgets-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1200px) {
  .widgets-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
