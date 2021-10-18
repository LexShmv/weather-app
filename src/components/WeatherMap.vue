<template>
  <div ref="googleMap" class="map__container"></div>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { initializeMap } from '../composables/initializeMap';

export default {
  name: 'MapWeather',

  props: {
    coord: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const googleMap = ref(null);

    const mapConfig = ref({});

    watchEffect(() => {
      if (props.coord.lat && props.coord.lon) {
        mapConfig.value = {
          zoom: 10,
          minZoom: 7,
          maxZoom: 14,
          center: { lat: props.coord.lat, lng: props.coord.lon },
          mapId: '3ec7768c9bbb4c7d',
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        };

        initializeMap(googleMap.value, mapConfig.value);
      }
    });

    return { googleMap };
  },
};
</script>

<style>
.map__container {
  width: 100%;
  height: 50vh;
  margin-bottom: 0.5rem;

  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
}

.window__content {
  font-family: 'Montserrat';
  color: #2d0086;
  font-size: 1rem;
}
</style>
