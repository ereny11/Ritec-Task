export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/ui',
    "@nuxtjs/tailwindcss",
  ],
  components: true,
  vite: {
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  },
  

})