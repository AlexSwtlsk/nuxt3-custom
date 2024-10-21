const config = {
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  plugins: [],

  components: [
    {
      path: '@/components',
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
