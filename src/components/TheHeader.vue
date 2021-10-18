<template>
  <header class="header__container">
    <div class="container"><slot name="logo"></slot></div>

    <slot name="search"></slot>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style>
.header__container {
  display: flex;
  column-gap: 0.5rem;
  padding: 0 0 0.5rem 0;
}

@media (max-width: 450px) {
  .header__container {
    flex-direction: column;
    row-gap: 0.5rem;
  }
}
</style>
