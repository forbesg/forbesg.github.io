interface PageSeo {
  title: string
  description?: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
}

const DEFAULT_DESCRIPTION
  = 'Forbes Gray is a freelance website developer in Edinburgh, specialising in fast, responsive, SEO friendly websites and web applications.'
const DEFAULT_IMAGE = '/forbes-gray-web-developer.jpg'

/** Title, description, Open Graph tags and canonical URL for a page. */
export function usePageSeo(seo: MaybeRefOrGetter<PageSeo>) {
  const route = useRoute()
  const value = computed(() => toValue(seo))
  const canonical = computed(() => SITE_URL + withSlash(route.path))
  const image = computed(() => SITE_URL + (value.value.image ?? DEFAULT_IMAGE))

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
