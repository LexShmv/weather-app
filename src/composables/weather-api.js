import { ref } from 'vue';

export function useApi(getWeather) {
  let query = ref('');
  let loading = ref(true);
  let error = ref(true);
  let weatherResult = ref('');

  const callApi = async () => {
    loading.value = false;
    error.value = false;

    try {
      weatherResult.value = await getWeather(query.value);
    } catch (error) {
      error.value = true;
    } finally {
      loading.value = false;
    }
  };

  return { query, loading, error, weatherResult, callApi };
}
