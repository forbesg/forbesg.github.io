export const SITE_URL = 'https://forbesg.github.io'

export const PORTFOLIO_CATEGORIES = {
  'website': { title: 'Websites', single: 'Website' },
  'web-application': { title: 'Web Applications', single: 'Web Application' },
  'blackberry': { title: 'BlackBerry Apps', single: 'BlackBerry App' },
} as const

export type PortfolioCategory = keyof typeof PORTFOLIO_CATEGORIES

export function isPortfolioCategory(value: unknown): value is PortfolioCategory {
  return typeof value === 'string' && value in PORTFOLIO_CATEGORIES
}

export const BLOG_TAGS: Record<string, string> = {
  'jam-stack': 'JAMStack',
  'static-sites': 'Static Sites',
  'ecommerce-sites': 'Ecommerce Websites',
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
