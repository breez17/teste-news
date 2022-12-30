<template>
  <div class="v-main mb-5">
    <div class="container">
      <h5 class="headline-5 mt-2 v-main__title">Новости</h5>
      <articles-field class="mt-3" />
    </div>
  </div>
</template>

<script>
import ArticlesField from "@/components/ArticlesField.vue";
export default {
  name: 'IndexPage',
  components: {
    ArticlesField
  },
  layout: "default",
}
</script>

<style lang="scss">
.v-main {
  &__title {
    color: var(--text-color);
    border-bottom: 1px solid var(--lightGrey);
    padding-bottom: 20px;
  }
}
</style>
