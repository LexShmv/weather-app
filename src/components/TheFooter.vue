<template>
  <footer class="footer__container container">
    <Logo />
    <p class="footer__desc">
      copyright © {{ currentYear }} all rights reserved.
    </p>
  </footer>
</template>

<script>
import Logo from './Logo.vue';
export default {
  name: 'TheFooter',
  components: {
    Logo,
  },
  setup() {
    const currentYear = new Date().getFullYear();

    return { currentYear };
  },
};
</script>

<style>
.footer__container {
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
}
.footer__desc {
  font-size: 1rem;
  padding: 0.5rem 0;
  text-transform: capitalize;
}

@media (max-width: 768px) {
  .footer__desc {
    font-size: 0.7rem;
  }
}
</style>
