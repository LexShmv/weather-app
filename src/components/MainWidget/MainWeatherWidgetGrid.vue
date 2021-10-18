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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem 0.5rem;
  grid-template-areas:
    'Temperature IconAndDescriprion'
    'Place Date';
  grid-auto-flow: row;
}
@media (min-width: 490px) {
  .grid-container {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr auto;

    grid-template-areas:
      'IconAndDescriprion Date Temperature'
      'Place Place Place';
  }
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
