<template>
  <div class="c-articles-field">
    <Loader v-if="isLoading" />
    <div class="c-articles-field__wrapper">
      <template v-for="article of articles">
        <Article :article="article" :key="article.slug" />
      </template>
    </div>
    <div class="c-articles-field__show-more text-center mt-5 mb-5">
      <button @click="getPosts" class="btn btn-font c-articles-field__show-more_btn">
        Показать ещё
      </button>
    </div>
  </div>
</template>

<script>
import Article from "./Article.vue";
import { mapState, mapActions } from "vuex";
import Loader from "./Loader.vue";
export default {
  name: "ArticlesField",
  components: {
    Loader,
    Article
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapState('article', ['articles']),
  },
  methods: {
    ...mapActions('article', ['getArticles']),
    async getPosts() {
      this.isLoading = true;
      try {
        await this.getArticles();
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.$toasted.error(error.message, {
          duration: 5000,
        });
        this.isLoading = false;
      }
    },
  },
  async created() {
   await this.getPosts()
  }
}
</script>

<style lang="scss">
.c-articles-field {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;
  }

}
</style>
