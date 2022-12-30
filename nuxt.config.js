export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  router: {
    extendRoutes(routes, resolve) {
      return [
        {
          name: 'index',
          path: '/',
          component: resolve(__dirname, 'pages/index.vue'),
          chunkName: 'pages/index.vue'
        },
        {
          name: 'article-item',
          path: '/article-item/:id',
          component: resolve(__dirname, 'pages/article-item.vue'),
          chunkName: 'pages/article-item.vue'
        },
      ]
    }
  },
  head: {
    title: 'testNews',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    '@nuxtjs/moment'
  ],

  publicRuntimeConfig: {
    baseURL: process.env.VUE_APP_ROOT_API
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  toast: {
    position: 'bottom-right',
    register: [
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
          delay: 5000,
        }
      }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
