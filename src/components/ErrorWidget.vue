<template>
  <div class="error__container">
    <h2 class="error__title">Error</h2>
    <div class="error__body">
      <div class="error__logo">
        <svg
          viewBox="0 0 24 24"
          width="100%"
          heigth="100%"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path
            d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586 9.414 16H5V4h14v12z"
          />
          <path d="M11 6h2v6h-2zm0 7h2v2h-2z" />
        </svg>
      </div>
      <div class="error__description">
        <p>Something doing wrong...</p>
        <p>Please check name of the place</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorWidget',
};
</script>

<style>
.error__container {
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  border-radius: 1rem;
  font-family: 'Montserrat';

  color: rgba(255, 82, 82, 0.7);
}

.error__title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem 0;
}

.error__body {
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
}
.error__logo {
  width: 6rem;
  height: 6rem;
}

.error__description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  padding: 0 2rem;
}
</style>
