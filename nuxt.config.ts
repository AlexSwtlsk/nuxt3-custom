const config = {
  devtools: { enabled: true },
  head: {
    title: 'Nuxt 3 custom install',
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

  plugins: [],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
      ignore: ['**/*.stories.ts'],
      extensions: ['vue'],
    },
  ],

  buildModules: [],

  modules: [],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {},
}
export default defineNuxtConfig(config)
