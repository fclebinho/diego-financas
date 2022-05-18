export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'finanças one',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/dayjs',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/guide/setup/
    '@nuxtjs/auth-next',
    // https://i18n.nuxtjs.org/setup
    '@nuxtjs/i18n',
  ],

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true
    },
    locales: ['en', 'pt-BR'],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'pt-BR',
      messages: {
        en: {
          welcome: 'Welcome',
          get_started: "Get started",
          transactions: "Transactions",
          categories: "Categories",
          email: 'E-mail',
          username: 'User name',
          password: 'Password',
          login: 'Log in'
        },
        'pt-BR': {
          welcome: 'Bem vindo',
          get_started: "Vamos lá",
          transactions: "Transações",
          categories: "Categorias",
          email: 'E-mail',
          username: 'Usuário',
          password: 'Senha',
          login: 'Entrar',
        },
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_API_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    middleware: ['auth'],
    linkExactActiveClass: "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
  },

  auth: {
    redirect: {
      callback: "/login",
      logout: "/",
      home: "/dashboard",
      login: "/login"
    },
    strategies: {
      local: {
        token: {
          property: 'accessToken',
          maxAge: 1800,
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: 'identity/login', method: 'post' },
          refresh: { url: '/api/auth/refresh-token', method: 'post' },
          logout: { url: 'identity/logout', method: 'post' },
          user: false
        },
      },
    },
    watchLoggedIn: true,
  },
}
