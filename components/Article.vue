<template>
  <div class="c-article">
    <router-link :to="`/article-item/${article.slug}`"  class="c-article__image" :class="{'c-article__image--empty-image': !article.image}">
        <img
            v-if="!article.image"
            class="c-article__image-empty"
            src="~/assets/svg/no-image.svg"
            alt="article-view"
            draggable="false"
        />
        <img
            v-else
            class="c-article__image-item"
            :src="article.image"
            alt="article-view"
            draggable="false"
        />
    </router-link>
    <div class="c-article__info">
      <div class="c-article__info-time">
        <span class="c-article__info-time-data caption-2">
          {{ _getHumanDate }}
        </span>
      </div>
      <div class="c-article__info-title">
        <router-link :to="`/article-item/${article.slug}`" class="c-article__info-title_text sublime-1 link">
          {{ article.title }}
        </router-link>
      </div>
      <div class="c-article__info-description">
        <p class="c-article__info-description_text caption-1">
          {{ article.shortText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Article",
  props: {
    article: {
      type: Object,
      dtoProperties: {
        title: String,
        shortText: String,
        datePublish: String | Date,
        image: String,
        slug: String
      },
      required: true,
    }
  },
  computed: {
    _getHumanDate() {
      return moment(this.article.datePublish).format('DD MMM YYYY');
    }
  }
}
</script>

<style lang="scss">
.c-article {
  display: flex;
  align-items: flex-start;
  gap: 0 10px;
  &__image {
    width: 200px;
    min-width: 200px;
    height: 200px;
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
  &__info-title {
    &_text {
      color: var(--blue);
    }
  }
}
</style>
