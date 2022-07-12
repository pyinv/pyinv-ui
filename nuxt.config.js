export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PyInv',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'PyInv - Open Source Quartermaster System',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/',
    '~/components/assetevents/',
    '~/components/assetmodels/',
    '~/components/assets/',
    '~/components/manufacturers/',
    '~/components/nodes/',
    '~/components/settings/',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-buefy', '@nuxtjs/axios', '@nuxtjs/auth-next'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL || 'http://localhost:8000/api/v1',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access',
          maxAge: 1800,
          global: true,
        },
        refreshToken: {
          property: 'refresh',
          data: 'refresh',
          maxAge: 60 * 60 * 24 * 60,
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/auth/token/', method: 'post' },
          refresh: { url: '/auth/token/refresh/', method: 'post' },
          user: { url: '/accounts/profile/', method: 'get' },
          logout: false,
        },
        autoLogout: false,
        redirect: {
          login: '/login',
          logout: '/',
          home: '/',
        },
      },
    },
  },
}
