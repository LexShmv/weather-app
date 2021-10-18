<template>
  <div class="metcric__container container">
    <div class="metric__item">
      <input
        class="metric__swither"
        type="radio"
        id="celcius"
        value="celcius"
        v-model="value"
      />
      <label class="metric__desc" for="celcius">℃</label>
    </div>
    <div class="metric__item">
      <input
        class="metric__swither"
        type="radio"
        id="fahrenheit"
        value="fahrenheit"
        v-model="value"
      />
      <label class="metric__desc" for="fahrenheit">℉</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MetricSwitcher',
  props: ['modelValue'],
  emits: ['update:modelValue'],

  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

<style>
.metcric__container {
  min-width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  overflow: hidden;
}

.metric__item {
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.metric__swither {
  display: none;
}

.metric__desc {
  padding: 0.3rem;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: 0.6s ease all;
}
.metric__item + .metric__item {
  border-left: 1px solid #2d0086;
}

.metric__swither:checked + .metric__desc {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
