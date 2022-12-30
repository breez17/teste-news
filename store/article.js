const article = {
  namespaced: true,
  state: () => ({
    articles: [],
    page: 1,
    totalPages: 0,
  }),
  getters: {},
  mutations: {
    CHANGE_PAGE_SETTINGS(state, payload) {
      ++state.page;
      state.totalPages = payload
    },
    SET_ARTICLES(state, payload) {
      state.articles.push(...payload);
    }
  },

  actions: {
    async getArticles({ state, commit }) {
        const response = await this.$axios.$get(`${this.app.$config.baseURL}news?page=${state.page}`);
        await commit("CHANGE_PAGE_SETTINGS", response.data.pageCount);
        await commit("SET_ARTICLES", response.data.news);
        return response.data.news;
    },
    async getArticleByID({ state, commit }, id) {
      const response = await this.$axios.$get(`${this.app.$config.baseURL}news/${id}`);
      return response.data.news;
    }
  }
}

export default article;

