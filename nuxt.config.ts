// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-11-09',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'en-GB' },
      title: 'Forbes Gray | Freelance Web Developer, Edinburgh',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
})
