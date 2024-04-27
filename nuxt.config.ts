export default defineNuxtConfig({
  devtools: { enabled: true },
  css:['@/assets/css/global.css'],
  components:[{pathPrefix:false}],
  modules: [
    "@nuxtjs/tailwindcss",
    ["@nuxtjs/i18n",{i18n: {vueI18n: './i18n/i18n.config.ts' }}],
    '@pinia/nuxt',
    'nuxt-icon',
    "@nuxt/image",
    "@nuxt/ui"
  ]
})