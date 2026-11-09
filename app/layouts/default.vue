<template>
  <div class="flex min-h-screen flex-col bg-white font-sans text-slate-800">
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:p-3">Skip to content</a>
    <SiteHeader />
    <main id="main" class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
