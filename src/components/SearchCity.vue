<template>
  <form @submit.prevent class="search__container">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="showAutoComplete"
      @blur="closeAutoComplete"
      type="text"
      class="search__input container"
      :class="errorName ? 'pulse-red-text' : ''"
    />
    <SearchCityPredict
      @search-city="upSearch"
      v-if="isShowAutoComplete"
      :query="modelValue"
    />
  </form>
</template>

<script>
import SearchCityPredict from './SearchCityAutocomplete.vue';
import { ref } from 'vue';

export default {
  name: 'SearchCity',

  components: {
    SearchCityPredict,
  },

  props: ['modelValue', 'errorName'],
  emits: ['update:modelValue', 'search-city'],

  setup(props, { emit }) {
    const upSearch = (city) => {
      emit('search-city', city);
    };

    const isShowAutoComplete = ref(false);

    const showAutoComplete = () => {
      isShowAutoComplete.value = true;
    };

    const closeAutoComplete = () => {
      setTimeout(() => {
        isShowAutoComplete.value = false;
      }, 100);
    };

    return {
      upSearch,
      isShowAutoComplete,
      showAutoComplete,
      closeAutoComplete,
    };
  },
};
</script>

<style>
.search__container {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}

.search__input {
  width: 100%;
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  border: none;
}

.pulse-red-text {
  color: rgba(255, 82, 82, 0.7);
  animation: pulse-red 2s infinite;
}

@keyframes pulse-red {
  0% {
    transform: scale(0.98);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
  }

  100% {
    transform: scale(0.98);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
  }
}
</style>
