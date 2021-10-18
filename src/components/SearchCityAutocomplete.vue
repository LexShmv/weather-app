<template>
  <ul class="container predict__container">
    <li class="predict__label">
      {{ labelString }}
    </li>
    <template v-if="loading">
      <li class="predict__loading">
        Loading...
      </li>
    </template>
    <template v-else-if="!cityList.length">
      <li class="predict__error">
        {{ errorMessage }}
      </li>
    </template>
    <template v-else>
      <li
        class="predict__item"
        v-for="(city, idx) of cityList"
        :key="idx"
        @click="chooseCity(city)"
      >
        <p>{{ city.name }}</p>
        <p>{{ city.country }}</p>
      </li>
    </template>
  </ul>
</template>

<script>
import { watch, ref, onMounted } from 'vue';
import axios from 'axios';
import { API_KEY } from '../api-key';

export default {
  name: 'SearchCityPredict',
  props: {
    query: {
      type: String,
    },
  },

  emits: ['search-city'],

  setup(props, { emit }) {
    const cityList = ref([]);
    const limitPrediction = 5;
    const loading = ref(true);
    const labelString = ref(
      'Please enter a city name or country/state code and choose one'
    );
    const errorMessage = ref(``);

    const searchCity = (cityName) => {
      return axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limitPrediction}&appid=${API_KEY}`
        )
        .then((r) => {
          loading.value = false;
          if (!r.data.length) {
            errorMessage.value = `Sorry, but we don't have a city with that name`;
          }
          return r.data;
        })
        .catch(() => {
          loading.value = false;
          cityList.value = [];
        });
    };

    onMounted(async () => {
      if (props.query.length < 3) {
        errorMessage.value =
          'City name or country/state code must be longer that 2';
        loading.value = false;
        cityList.value = [];
        return;
      }
      cityList.value = await searchCity(props.query);
    });

    watch(
      () => props.query,
      async () => {
        if (props.query.length < 3) {
          errorMessage.value =
            'City name or country/state code must be longer that 2';
          cityList.value = [];
          loading.value = false;
          return;
        }
        loading.value = true;
        cityList.value = await searchCity(props.query);
      }
    );

    const chooseCity = (city) => {
      emit('search-city', city);
      cityList.value = [];
    };

    return { cityList, chooseCity, labelString, loading, errorMessage };
  },
};
</script>

<style>
.predict__container {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 10;
  transform: translateY(100%);
  font-size: 1.3rem;
  padding: 1rem;
}

.predict__item {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
}
.predict__label {
  font-size: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  padding-bottom: 0.5rem;
  text-transform: capitalize;
}

.predict__loading {
  font-size: 1rem;
  padding-top: 1rem;
}

.predict__error {
  font-size: 1rem;
  color: rgb(248, 77, 77);
  padding-top: 1rem;
}

.predict__item:hover {
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
