<template>
    <header class="c-header">
      <router-link class="link" to="/">
        <h4 class="c-header__logo headline-4">News</h4>
      </router-link>
    </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss">
.c-header {
  max-height: 75px;
  padding: 15px 10%;
  width: 100%;
  background: var(--lightBlue);
  &__logo {
    color: var(--white);
  }
}
</style>
