<template>
  <div class="weather__date">
    <p class="weather__current-time">{{ localazedTimeString }}</p>
    <p class="weather__current-weekday">{{ currentWeekDay }}</p>
    <p class="weather__current-date">{{ localazedDateString }}</p>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'WeatherDate',
  setup() {
    const currentDate = ref('');

    const updateDate = () => {
      currentDate.value = new Date();
    };

    const localazedDateString = computed(() =>
      currentDate.value ? currentDate.value.toLocaleDateString() : ''
    );

    const localazedTimeString = computed(() =>
      currentDate.value ? currentDate.value.toLocaleTimeString() : ''
    );

    const currentWeekDay = computed(() => {
      if (currentDate.value) {
        return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
          currentDate.value
        );
      }
      return '';
    });

    let timerID;

    onMounted(() => {
      updateDate();
      timerID = setInterval(() => {
        updateDate();
      }, 1000);
    });

    onBeforeUnmount(() => {
      clearInterval(timerID);
    });

    return {
      localazedDateString,
      localazedTimeString,
      currentWeekDay,
    };
  },
};
</script>

<style>
.weather__date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.weather__current-weekday {
  padding: 0.7rem 0;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
