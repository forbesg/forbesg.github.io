// Cloudflare Web Analytics beacon: cookie-free page views (also tracks client-side
// navigation). Only added to production builds, and only when a token is configured.
export default defineNuxtPlugin(() => {
  const token = useRuntimeConfig().public.cfAnalyticsToken
  if (import.meta.dev || !token) return

  useHead({
    script: [
      {
        key: 'cf-web-analytics',
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        defer: true,
        'data-cf-beacon': JSON.stringify({ token }),
      },
    ],
  })
})
