// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@vee-validate/nuxt'],
  devServer: {
    host: 'localhost'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
