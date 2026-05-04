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
    head: {
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_name=search' 
        }
      ]
    }
  },
  css: [
    'vue-color/style.css',
    '~/assets/css/main.css',
  ],
  modules: ['@vueuse/nuxt', 'nuxt-lenis'],
});