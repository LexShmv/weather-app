<template>
  <div class="app" :style="{ backgroundImage: mainBackground }">
    <div class="container">
      <slot></slot>
    </div>
  </div>
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

    const mainBackground = computed(() => {
      if (!temperature.value) {
        return 'linear-gradient(180deg, #6284FF 0%, #6284FF 50%, #FF0000 100%)';
      }
      if (temperature.value - 273 <= 0) {
        return 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)';
      } else if (temperature.value - 273 > 0 && temperature.value - 273 <= 15) {
        return ' linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)';
      } else if (
        temperature.value - 273 > 15 &&
        temperature.value - 273 <= 25
      ) {
        return 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)';
      } else if (temperature.value - 273 > 25) {
        return 'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)';
      }
      return '';
    });

    return { mainBackground };
  },
};
</script>

<style>
.app {
  width: 100%;
  min-height: 100vh;
}

.container {
  max-width: 95%;
  margin: 0 auto;
  position: relative;
}

@media (min-width: 768px) {
  .container {
    max-width: 60%;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 40%;
  }
}
</style>
