<template>
  <WidgetContainer>
    <template #icon>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 554.625 554.625"
        fill="currentColor"
      >
        <polygon
          points="293.772,554.625 280.222,258.188 265.486,258.188 253.925,554.625 	"
        />
        <g class="wind__animation">
          <path
            d="M282.383,172.125c7.114,0,12.89-7.564,12.89-14.678L282.67,15.577C282.67,8.463,282.623,0,275.508,0h-1.722
    c-7.114,0-7.736,8.463-7.736,15.577l-12.029,141.87c0,7.114,5.766,14.678,12.891,14.678H282.383z"
          />
          <path
            d="M434.924,322.008c5.995,3.834,13.148,8.348,16.982,2.353l0.928-1.444c3.835-5.996-2.964-11.073-8.97-14.898
    l-113.096-86.493c-5.995-3.834-15.481-3.041-19.307,2.964l-8.319,13.034c-3.834,5.996-0.564,14.927,5.441,18.762L434.924,322.008z"
          />
          <path
            d="M119.697,322.008l126.349-65.742c5.996-3.835,9.267-12.766,5.432-18.762l-8.319-13.034
    c-3.834-5.996-13.311-6.79-19.306-2.964l-113.096,86.502c-5.996,3.835-12.795,8.903-8.97,14.898l0.928,1.444
    C106.548,330.355,113.701,325.842,119.697,322.008z"
          />
          <circle cx="273.853" cy="212.766" r="25" />
        </g>
      </svg>
    </template>

    <template #name>Wind</template>

    <template #info>
      <p>
        <span class="info__data">{{ wind.speed }}</span> m/s
      </p>
      <div class="wind-direction">
        <svg
          :style="{ transform: `rotate(${wind.deg + 'deg'})` }"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          heigth="100%"
          viewBox="0 0 330 330"
          style="enable-background:new 0 0 330 330;"
          xml:space="preserve"
          fill="currentColor"
        >
          <path
            id="XMLID_29_"
            d="M100.606,100.606L150,51.212V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15V51.212l49.394,49.394
	C232.322,103.535,236.161,105,240,105c3.839,0,7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213l-75-75
	c-5.857-5.858-15.355-5.858-21.213,0l-75,75c-5.858,5.857-5.858,15.355,0,21.213C85.251,106.463,94.749,106.463,100.606,100.606z"
          />
        </svg>
      </div>
    </template>
  </WidgetContainer>
</template>

<script>
import WidgetContainer from './WidgetContainer.vue';

export default {
  name: 'WindWidget',
  components: {
    WidgetContainer,
  },

  props: {
    wind: {
      type: Object,
    },
  },
};
</script>

<style>
.wind__animation {
  transform-origin: 50% 38.05%;
  animation: spin 4s linear infinite;
}

.wind-direction {
  width: 1.3rem;
  height: 1.3rem;
  color: #2d0086b7;
  margin-top: 0.5rem;
}
</style>
