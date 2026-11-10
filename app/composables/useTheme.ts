export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

/**
 * Light/dark theme. The initial theme is set on <html data-theme> by the inline
 * script in nuxt.config.ts before the page paints; this composable reads it
 * after mount and lets the visitor switch.
 */
export function useTheme() {
  // null until mounted: the static HTML doesn't know the visitor's theme
  const theme = useState<Theme | null>('theme', () => null)

  onMounted(() => {
    theme.value = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
  })

  function setTheme(value: Theme) {
    theme.value = value
    document.documentElement.dataset.theme = value
    try {
      localStorage.setItem(STORAGE_KEY, value)
    }
    catch {
      // Private browsing or storage disabled: the switch still works for this page view
    }
  }

  function toggle() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return { theme: readonly(theme), setTheme, toggle }
}
