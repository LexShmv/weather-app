<template>
  <main class="app" :style="{ backgroundPositionX: mainBackgroundPosition }">
    <div class="app__container">
      <slot></slot>
    </div>
  </main>
</template>

<script>
import { toRefs, computed } from 'vue';

export default {
  name: 'AppContainer',
  props: {
    temperature: {
      type: Number,
    },
  },
  setup(props) {
    const { temperature } = toRefs(props);

    const mainBackgroundPosition = computed(() => {
      if (!temperature.value) {
        return '0%';
      }
      if (temperature.value - 273 <= 0) {
        return '0%';
      } else if (temperature.value - 273 > 0 && temperature.value - 273 <= 15) {
        return '50%';
      } else if (
        temperature.value - 273 > 15 &&
        temperature.value - 273 <= 25
      ) {
        return '100%';
      } else if (temperature.value - 273 > 25) {
        return '200%';
      }
      return '0%';
    });

    return { mainBackgroundPosition };
  },
};
</script>

<style>
.app {
  width: 100%;
  min-height: 100vh;

  background-color: #d9afd9;
  background-image: linear-gradient(270deg, #d9afd9 0%, #97d9e1 100%);

  background-size: 400% 100%;
  transition: background-position 3s linear;
}

.app__container {
  max-width: 95%;
  margin: 0 auto;
  position: relative;
  padding: 0.5rem 0;
}

@media (min-width: 768px) {
  .app__container {
    max-width: 60%;
  }
}

@media (min-width: 1600px) {
  .app__container {
    max-width: 50%;
  }
}
</style>
