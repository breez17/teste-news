<template>
  <div class="l-main">
    <div>
      <Header />
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "default",
  components: {
    Footer,
    Header
  },
  computed: {},
  methods: {},
}
</script>

<style lang="scss">
@import "assets/variables";
@import "assets/global";

.l-main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
