export const SITE_URL = 'https://forbesg.github.io'

interface PortfolioCategoryInfo {
  title: string
  single: string
  /** Lower-case plural for running text, e.g. "All 6 websites" */
  plural: string
  /** Older work kept for the record: labelled as archived wherever it's shown */
  archived?: boolean
  note?: string
}

export type PortfolioCategory = 'website' | 'ecommerce' | 'web-application' | 'blackberry'

export const PORTFOLIO_CATEGORIES: Record<PortfolioCategory, PortfolioCategoryInfo> = {
  'website': { title: 'Websites', single: 'Website', plural: 'websites' },
  'ecommerce': { title: 'Ecommerce', single: 'Ecommerce Website', plural: 'ecommerce sites' },
  'web-application': { title: 'Web Applications', single: 'Web Application', plural: 'web applications' },
  'blackberry': {
    title: 'BlackBerry Apps',
    single: 'BlackBerry App',
    plural: 'BlackBerry apps',
    archived: true,
    note: 'My first apps, built for BlackBerry 10 with WebWorks. The platform has long since been retired, but this is where it all started.',
  },
}

export function isPortfolioCategory(value: unknown): value is PortfolioCategory {
  return typeof value === 'string' && value in PORTFOLIO_CATEGORIES
}

export const BLOG_TAGS: Record<string, string> = {
  'jam-stack': 'JAMStack',
  'static-sites': 'Static Sites',
  'ecommerce-sites': 'Ecommerce Websites',
  'nuxt': 'Nuxt',
  'netlify': 'Netlify',
}

/** CSS aspect-ratio from an image's intrinsic size, so its space is reserved before it loads */
export function aspectStyle(width?: number, height?: number) {
  return width && height ? { aspectRatio: `${width} / ${height}` } : undefined
}

/** The live site's URLs all end in a slash; keep links consistent with that. */
export function withSlash(path: string) {
  return path.endsWith('/') ? path : `${path}/`
}

/** Nuxt Content stores paths without a trailing slash. */
export function contentPath(path: string) {
  return path.length > 1 ? path.replace(/\/+$/, '') : path
}

export function formatDate(value: string | Date) {
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export interface Crumb {
  label: string
  to?: string
}

/** "from £895": the lowest package price of a service */
export function fromPrice(packages: { price?: string, priceFrom?: string }[]) {
  const prices = packages
    .map(p => p.price ?? p.priceFrom)
    .filter((p): p is string => !!p)
    .map(p => ({ label: p, value: Number(p.replace(/[^\d.]/g, '')) }))
    .filter(p => !Number.isNaN(p.value))
    .sort((a, b) => a.value - b.value)
  return prices[0] ? `from ${prices[0].label}` : 'Ask for a quote'
}
