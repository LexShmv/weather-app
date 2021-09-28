<template>
  <div class="widget-container">
    <div class="widget__icon">
      <slot name="icon"></slot>
    </div>

    <div class="widget__info">
      <h3 class="widget__name">
        <slot name="name"></slot>
      </h3>
      <slot name="info"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WidgetContainer",
};
</script>

<style>
.widget-container {
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  font-family: "Montserrat";
  color: #2d0086;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
}

.widget__icon {
  color: #2d0086;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.widget__info {
  display:flex;
  flex-direction: column;
  align-items: center;
}
.widget__name {
  flex: 0 0 33%;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}
.info__data {
  font-weight: bold;
}

.widget__info p{
  margin-bottom: .2rem;
}
</style>
