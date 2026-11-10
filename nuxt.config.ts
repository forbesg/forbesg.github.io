import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-11-09',
  devtools: { enabled: true },

  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/fonts', '@nuxtjs/sitemap', '@nuxtjs/robots', 'nuxt-schema-org'],

  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },

  // Shared by the sitemap, robots and schema.org modules, and canonical URLs
  site: {
    url: 'https://forbesg.github.io',
    name: 'Forbes Gray | Website Developer Edinburgh',
    description: 'Freelance website developer in Edinburgh building fast, SEO friendly websites, online shops and web applications.',
    defaultLocale: 'en-GB',
    trailingSlash: true,
  },

  // The business behind the site. Every page's structured data links back to
  // this, so keep the name and address identical to the Google Business Profile.
  schemaOrg: {
    identity: {
      '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
      'name': 'Forbes Gray',
      'alternateName': 'Forbes Gray, Freelance Web Developer',
      'description': 'Freelance website developer in Edinburgh building fast, SEO friendly websites, online shops and web applications.',
      'url': 'https://forbesg.github.io',
      'logo': '/logo.png',
      'image': '/forbes-gray-web-developer.jpg',
      'address': {
        addressLocality: 'Edinburgh',
        addressRegion: 'Scotland',
        postalCode: 'EH6 4JX',
        addressCountry: 'GB',
      },
      'areaServed': ['Edinburgh', 'Lothians', 'Scotland', 'United Kingdom'],
      'priceRange': '££',
      'sameAs': [
        'https://github.com/forbesg',
        'https://uk.linkedin.com/in/forbesgray',
        'https://www.instagram.com/4beeeez',
        'https://x.com/4beez',
      ],
    },
  },

  robots: {
    // Old app path from a previous version of the site
    disallow: ['/Euro-2016-WallChart/'],
  },

  content: {
    // Use Node's built-in SQLite (Node 22.5+) instead of better-sqlite3
    experimental: { sqliteConnector: 'native' },
  },

  fonts: {
    families: [
      { name: 'Instrument Serif', provider: 'google', weights: [400], styles: ['normal', 'italic'] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] },
    ],
  },

  // Every <NuxtImg> is resized by IPX (sharp) at build time; these defaults
  // also convert it to WebP, keeping transparency on the PNG mockups.
  image: {
    quality: 80,
    ipx: {
      // Keep the default /_ipx path: Nuxt Image's static prerender only picks
      // up image URLs containing "/_ipx/", so a custom baseURL breaks images.
      modifiers: { format: 'webp' },
    },
  },

  app: {
    // Where the hashed JS/CSS bundles are served from (default /_nuxt/)
    buildAssetsDir: '/_forbes/',
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
        { name: 'theme-color', content: '#f4f2ee', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#0d1114', media: '(prefers-color-scheme: dark)' },
        { name: 'author', content: 'Forbes Gray' },
      ],
      script: [
        {
          // Set the colour theme before the page paints, so there's no flash of
          // the wrong theme: the visitor's saved choice, else their device setting.
          tagPosition: 'head',
          innerHTML: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`,
        },
      ],
    },
  },

  // Moved pages. GitHub Pages can't send real redirects, so each of these is
  // prerendered (see nitro.prerender.routes) as a tiny page that forwards
  // instantly with a meta refresh. Add new moves to both lists.
  routeRules: {
    '/portfolio/web-application/granite-setts-direct/': {
      redirect: { to: '/portfolio/ecommerce/granite-setts-direct/', statusCode: 301 },
    },
  },

  nitro: {
    prerender: {
      // nuxt generate crawls every link from the home page; these make sure
      // pages that are only linked from the sitemap still get built
      crawlLinks: true,
      routes: ['/', '/blog/tags/', '/portfolio/web-application/granite-setts-direct/'],
    },
  },
})
