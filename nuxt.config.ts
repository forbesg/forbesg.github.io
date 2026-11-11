import tailwindcss from "@tailwindcss/vite";
import { EMAIL, PHONE } from "./app/utils/site";

// The live site's address, used for the canonical URLs, sitemap, robots.txt and
// structured data. NUXT_SITE_URL overrides it (no trailing slash).
const siteUrl = (process.env.NUXT_SITE_URL || "https://forbesgray.co.uk").replace(/\/+$/, "");

// Cloudflare Pages sets CF_PAGES=1 during its builds, and Nitro then uses its
// cloudflare_pages_static preset, which writes routeRules redirects and headers
// to real _redirects and _headers files.
const onCloudflare = !!process.env.CF_PAGES || process.env.NITRO_PRESET?.startsWith("cloudflare");

const week = 60 * 60 * 24 * 7;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-11-09",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "nuxt-schema-org",
  ],

  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    // Bundle the site's own pages, layouts and components into one client
    // chunk. Split per page they were ~30 files under 1 KB, each a separate
    // round trip on GitHub Pages, which slowed first visits to each page.
    $client: {
      build: {
        rolldownOptions: {
          output: {
            codeSplitting: {
              groups: [
                {
                  name: "site",
                  // our pages/layouts/components, plus Nuxt Content's prose components
                  // (one tiny file per markdown element type otherwise)
                  test: /[\\/]app[\\/](pages|layouts|components)[\\/]|[\\/]components[\\/]prose[\\/]/,
                },
              ],
            },
          },
        },
      },
    },
  },

  // Shared by the sitemap, robots and schema.org modules, and canonical URLs
  site: {
    url: siteUrl,
    name: "Forbes Gray | Website Developer Edinburgh",
    description:
      "Freelance website developer in Edinburgh building fast, SEO friendly websites, online shops and web applications.",
    defaultLocale: "en-GB",
    trailingSlash: true,
  },
  sitemap: {
    xsl: false,
  },

  // The business behind the site. Every page's structured data links back to
  // this, so keep the name and address identical to the Google Business Profile.
  schemaOrg: {
    identity: {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      name: "Forbes Gray",
      alternateName: "Forbes Gray, Freelance Web Developer",
      description:
        "Freelance website developer in Edinburgh building fast, SEO friendly websites, online shops and web applications.",
      url: siteUrl,
      logo: "/logo.png",
      image: "/forbes-gray-web-developer.jpg",
      address: {
        addressLocality: "Edinburgh",
        addressRegion: "Scotland",
        postalCode: "EH6 4JX",
        addressCountry: "GB",
      },
      // Centre of the EH6 4JX postcode (postcodes.io), not a street address
      geo: { "@type": "GeoCoordinates", latitude: 55.9786, longitude: -3.1927 },
      hasMap: "https://www.google.com/search?kgmid=/g/11jk5m8bw8",
      areaServed: ["Edinburgh", "Lothians", "Scotland", "United Kingdom"],
      telephone: PHONE.international,
      email: EMAIL,
      priceRange: "££",
      sameAs: [
        // Google Business Profile (its Knowledge Graph ID, which doesn't change)
        "https://www.google.com/search?kgmid=/g/11jk5m8bw8",
        "https://github.com/forbesg",
        "https://uk.linkedin.com/in/forbesgray",
        "https://www.instagram.com/4beeeez",
        "https://x.com/4beez",
      ],
    },
  },

  content: {
    // Use Node's built-in SQLite (Node 22.5+) instead of better-sqlite3
    experimental: { sqliteConnector: "native" },
  },

  fonts: {
    families: [
      {
        name: "Instrument Serif",
        provider: "google",
        weights: [400],
        styles: ["normal", "italic"],
      },
      { name: "Inter", provider: "google", weights: [400, 500, 600] },
      { name: "JetBrains Mono", provider: "google", weights: [400, 500] },
    ],
  },

  // Every <NuxtImg> is resized by IPX (sharp) at build time; these defaults
  // also convert it to WebP, keeping transparency on the PNG mockups.
  image: {
    quality: 80,
    ipx: {
      // Keep the default /_ipx path: Nuxt Image's static prerender only picks
      // up image URLs containing "/_ipx/", so a custom baseURL breaks images.
      modifiers: { format: "webp" },
    },
  },

  app: {
    // Where the hashed JS/CSS bundles are served from (default /_nuxt/)
    buildAssetsDir: "/_forbes/",
    head: {
      htmlAttrs: { lang: "en-GB" },
      titleTemplate: "%s | Forbes Gray",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        {
          name: "theme-color",
          content: "#f4f2ee",
          media: "(prefers-color-scheme: light)",
        },
        {
          name: "theme-color",
          content: "#0d1114",
          media: "(prefers-color-scheme: dark)",
        },
        { name: "author", content: "Forbes Gray" },
      ],
      script: [
        {
          // Set the colour theme before the page paints, so there's no flash of
          // the wrong theme: the visitor's saved choice, else their device setting.
          tagPosition: "head",
          innerHTML: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`,
        },
      ],
    },
  },

  // Moved pages. On Cloudflare Pages these become real 301s in _redirects
  // (which win over any file at the same path). GitHub Pages can't send
  // redirects, so each one is also prerendered (see nitro.prerender.routes) as
  // a tiny page that forwards with a meta refresh. Add new moves to both lists.
  routeRules: {
    ...movedPages({
      "/portfolio/web-application/granite-setts-direct/":
        "/portfolio/ecommerce/granite-setts-direct/",
    }),

    // Response headers, written to _headers on Cloudflare Pages (ignored by
    // GitHub Pages, which can't set headers).
    "/**": {
      headers: {
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "X-Frame-Options": "DENY",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      },
    },
    // (Nuxt itself adds a year-long immutable cache for the hashed JS, CSS
    // and fonts under /_forbes/.)
    // Resized images and media: names don't change with content, so cache
    // for a week and refresh in the background after that
    ...Object.fromEntries(
      ["/_ipx/**", "/images/**", "/icons/**", "/videos/**"].map((path) => [
        path,
        {
          headers: {
            "Cache-Control": `public, max-age=${week}, stale-while-revalidate=${week}`,
          },
        },
      ]),
    ),
  },

  nitro: {
    prerender: {
      // nuxt generate crawls every link from the home page; these make sure
      // pages that are only linked from the sitemap still get built
      crawlLinks: true,
      routes: [
        "/",
        "/blog/tags/",
        "/portfolio/web-application/granite-setts-direct/",
      ],
    },
  },
});

/**
 * routeRules for moved pages: a 301 from each old path. Cloudflare matches
 * _redirects paths exactly, so there the path without its trailing slash is
 * added too.
 */
function movedPages(moves: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(moves).flatMap(([from, to]) => {
      const rule = { redirect: { to, statusCode: 301 as const } };
      const bare = from.replace(/\/+$/, "");
      // Without a trailing slash GitHub Pages would make the prerendered stub a
      // file rather than a folder, so only add the bare path on Cloudflare
      return onCloudflare ? [[from, rule], [bare, rule]] : [[from, rule]];
    }),
  );
}
