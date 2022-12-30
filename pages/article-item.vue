<template>
  <div class="v-article-item mb-2">
    <Loader v-if="isLoading"/>
    <div class="container">
      <div class="v-article-item__title">
        <h5 class="v-article-item__title-text headline-5 mt-3 mb-3">{{ article.title }}</h5>
      </div>
      <div class="v-article-item__holder">
        <div class="v-article-item__holder-image" :class="{'v-article-item__holder-image--empty-image': !article.image}">
          <img
              v-if="!article.image"
              class="v-article-item__image-empty"
              src="~/assets/svg/no-image.svg"
              alt="article-view"
          />
          <img
              v-else
              class="v-article-item__image-item"
              :src="article.image"
              alt="article-view"
          />
        </div>
        <div class="v-article-item__holder-info">
          <p class="sublime-2" v-html="article.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Loader from "@/components/Loader.vue";
export default {
  name: "article-item",
  components: {Loader},
  data() {
    return {
      id: "",
      isLoading: false,
      article: {},
    }
  },
  methods: {
    ...mapActions('article', ['getArticleByID']),
    async getCurrentPost() {
      this.isLoading = true;
      try {
        this.article = await this.getArticleByID(this.$route.params.id);
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.$toasted.error(error.message, {
          duration: 5000,
        });
        this.isLoading = false;
      }
    }
  },
  async created() {
   await this.getCurrentPost();
  }
}
</script>

<style lang="scss">
.v-article-item {
  &__title {
    &-text {}
  }
  &__holder {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    &-image {
      width: 284px;
      min-width: 284px;
      height: 284px;
      border-radius: 10px;
      overflow: hidden;
      &--empty-image {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--black);
      }
      &-item {
        width: 100%;
        height: 100%;
      }
    }
    &-info {

    }
  }
}
</style>
