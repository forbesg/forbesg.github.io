// Cloudflare Turnstile, loaded on the contact page (explicit rendering)
export {}

interface TurnstileOptions {
  'sitekey': string
  'action'?: string
  'appearance'?: 'always' | 'execute' | 'interaction-only'
  'execution'?: 'render' | 'execute'
  'theme'?: 'auto' | 'light' | 'dark'
  'callback'?: (token: string) => void
  'error-callback'?: (code: string) => void
  'expired-callback'?: () => void
  'timeout-callback'?: () => void
}

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: TurnstileOptions) => string
      execute: (widgetId: string) => void
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
  }
}
