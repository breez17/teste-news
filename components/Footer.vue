<template>
  <footer class="c-footer">
    <router-link class="link" to="/">
      <h4 class="c-footer__logo headline-4">News</h4>
    </router-link>
    <p class="c-footer__logo body-2">- The best portal of last articles.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
.c-footer {
  width: 100%;
  background: var(--black);
  min-height: 75px;
  padding: 15px 10%;
  &__logo {
    color: var(--white);
  }
}
</style>
