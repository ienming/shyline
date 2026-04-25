// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  ignore: [
    process.env.NODE_ENV === 'production' ? 'app/pages/landing.vue' : '',
  ],
  ssr: false,
  app: {
    baseURL: '/shyline/',
  },
  css: [
    'vue-color/style.css',
    '~/assets/css/main.css',
  ],
  modules: [
    '@vueuse/nuxt',
    'nuxt-lenis',
  ],
});
