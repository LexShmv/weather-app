<template>
  <div class="widget__container container">
    <h3 class="widget__name">
      <slot name="name"></slot>
    </h3>

    <div class="widget__icon">
      <slot name="icon"></slot>
    </div>

    <div class="widget__info">
      <slot name="info"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetContainer',
};
</script>

<style>
.widget__container {
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr;
  grid-template-areas:
    'Name Name'
    'Info Icon';
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.5rem 1rem;
}

.widget__icon {
  padding: 0.5rem;
  grid-area: Icon;
  color: #2d0086b7;
  min-height: 5rem;
  display: flex;
  align-items: center;
}

.widget__info {
  grid-area: Info;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.widget__name {
  grid-area: Name;
  color: #2d0086af;
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
  position: relative;
  padding-bottom: 0.2rem;
}
.widget__name::before {
  content: '';
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(9, 9, 121, 0.4) 90%,
    rgba(45, 0, 134, 0.7) 100%
  );
}
.info__data {
  font-weight: bold;
}

.widget__info p {
  margin-bottom: 0.2rem;
}
</style>
