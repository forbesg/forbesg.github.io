interface PageSeo {
  title: string
  description?: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
}

const DEFAULT_DESCRIPTION
  = 'Forbes Gray is a freelance website developer in Edinburgh, specialising in fast, responsive, SEO friendly websites and web applications.'
const DEFAULT_IMAGE = '/forbes-gray-web-design-edinburgh.jpg'

/** Title, description, Open Graph tags and canonical URL for a page. */
export function usePageSeo(seo: MaybeRefOrGetter<PageSeo>) {
  const route = useRoute()
  const siteUrl = useSiteUrl()
  const value = computed(() => toValue(seo))
  const canonical = computed(() => siteUrl + withSlash(route.path))
  const image = computed(() => siteUrl + (value.value.image ?? DEFAULT_IMAGE))

  useSeoMeta({
    title: () => value.value.title,
    description: () => value.value.description ?? DEFAULT_DESCRIPTION,
    ogTitle: () => `${value.value.title} | Forbes Gray`,
    ogDescription: () => value.value.description ?? DEFAULT_DESCRIPTION,
    ogImage: () => image.value,
    ogImageAlt: () => value.value.imageAlt ?? 'Forbes Gray, Website Developer Edinburgh',
    ogUrl: () => canonical.value,
    ogType: () => value.value.type ?? 'website',
    ogSiteName: 'Forbes Gray | Website Developer Edinburgh',
    ogLocale: 'en_GB',
    twitterCard: 'summary_large_image',
  })

  useHead({
    link: computed(() => [{ rel: 'canonical', href: canonical.value }]),
  })
}

/** The site's address with no trailing slash, from `site.url` in nuxt.config (NUXT_SITE_URL) */
export function useSiteUrl() {
  return useSiteConfig().url.replace(/\/+$/, '')
}
