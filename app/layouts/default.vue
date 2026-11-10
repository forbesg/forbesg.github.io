<template>
  <div class="flex min-h-screen flex-col bg-bg text-ink transition-colors duration-300">
    <a href="#main" class="btn-primary sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50">Skip to content</a>
    <SiteHeader />
    <main id="main" class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
