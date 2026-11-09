// reCAPTCHA v3, loaded on the contact page
export {}

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void
      execute: (key: string, options: { action: string }) => Promise<string>
    }
  }
}
