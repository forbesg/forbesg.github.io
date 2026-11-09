import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-11-09',
  devtools: { enabled: true },

  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/fonts', '@nuxtjs/sitemap'],

  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },

  // Used by the sitemap module and for canonical URLs
  site: {
    url: 'https://forbesg.github.io',
    name: 'Forbes Gray | Website Developer Edinburgh',
    trailingSlash: true,
  },

  content: {
    // Use Node's built-in SQLite (Node 22.5+) instead of better-sqlite3
    experimental: { sqliteConnector: 'native' },
  },

  fonts: {
    // Placeholder: the current site's fonts until the redesign picks new ones
    families: [
      { name: 'Catamaran', provider: 'google', weights: [400, 700] },
      { name: 'Montserrat', provider: 'google', weights: [700] },
    ],
  },

  image: {
    format: ['avif', 'webp'],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en-GB' },
      titleTemplate: '%s | Forbes Gray',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        { name: 'theme-color', content: '#147ba4' },
        { name: 'author', content: 'Forbes Gray' },
      ],
    },
  },

  nitro: {
    prerender: {
      // nuxt generate crawls every link from the home page; these make sure
      // pages that are only linked from the sitemap still get built
      crawlLinks: true,
      routes: ['/', '/blog/tags/'],
    },
  },
})
