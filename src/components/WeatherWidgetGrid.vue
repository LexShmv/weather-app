<template>
  <div class="grid-container">
    <div class="IconAndDescriprion">
      <slot name="icon"></slot>
      <slot name="description"></slot>
    </div>
    <div class="Date">
      <slot name="date"></slot>
    </div>
    <div class="Temperature">
      <slot name="temperature"></slot>
    </div>
    <div class="Place">
      <slot name="place"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherWidgetGrid',
};
</script>

<style>
.grid-container {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr auto;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    'IconAndDescriprion Date Temperature'
    'Place Place Place';
}

.Place {
  grid-area: Place;
}

.IconAndDescriprion {
  grid-area: IconAndDescriprion;
}

.Date {
  grid-area: Date;
}

.Temperature {
  grid-area: Temperature;
}

.IconAndDescriprion {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
