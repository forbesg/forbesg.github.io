<script setup lang="ts">
const { theme, toggle } = useTheme()

// The icons swap with CSS (dark: variant) so the static HTML is right before
// hydration; the label only needs the theme once it's known.
const label = computed(() =>
  theme.value === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
)
</script>

<template>
  <button
    type="button"
    class="grid size-11 cursor-pointer place-items-center border border-line text-ink transition-colors hover:border-accent hover:text-accent"
    :aria-label="label"
    @click="toggle"
  >
    <!-- Moon: shown in light mode -->
    <svg class="dark:hidden" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
    <!-- Sun: shown in dark mode -->
    <svg class="hidden dark:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  </button>
</template>
