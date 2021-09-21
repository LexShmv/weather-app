<template>
  <form @submit.prevent="$emit('submiting-search')" class="search">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
      class="search__input"
      :class="errorName ? 'pulse-red-text' : ''"
    />
  </form>
</template>

<script>
export default {
  name: 'SearchCity',
  props: ['modelValue', 'errorName'],
  emits: ['update:modelValue', 'submiting-search'],
};
</script>

<style scoped>
.search {
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.search__input {
  width: 100%;
  color: #2d0086;
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: 1rem;
  border: none;
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
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
