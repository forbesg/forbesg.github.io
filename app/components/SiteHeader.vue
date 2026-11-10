<script setup lang="ts">
const links = [
  { to: '/services/', label: 'Services' },
  { to: '/portfolio/', label: 'Work' },
  { to: '/about/', label: 'About' },
  { to: '/blog/', label: 'Blog' },
]

const open = ref(false)
const route = useRoute()
watch(() => route.path, () => (open.value = false))
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
      <NuxtLink to="/" class="font-display text-[1.75rem] leading-none hover:text-accent">
        Forbes Gray
      </NuxtLink>

      <div class="flex items-center gap-3 md:gap-7">
        <nav
          id="site-nav"
          aria-label="Main"
          :class="open ? 'block' : 'hidden'"
          class="absolute inset-x-0 top-full border-b border-line bg-bg px-6 py-4 md:static md:block md:border-0 md:p-0"
        >
          <ul class="flex flex-col gap-4 text-[0.9375rem] md:flex-row md:items-center md:gap-7">
            <li v-for="link in links" :key="link.to">
              <NuxtLink :to="link.to" class="hover:text-accent" active-class="text-accent">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <NuxtLink to="/contact/" class="btn-primary hidden px-5 py-2.5 text-[0.9375rem] sm:inline-flex">
          Hire me
        </NuxtLink>

        <ThemeToggle />

        <button
          type="button"
          class="grid size-11 place-items-center border border-line md:hidden"
          :aria-expanded="open"
          aria-controls="site-nav"
          aria-label="Menu"
          @click="open = !open"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
            <path v-if="open" d="M6 6l12 12M18 6 6 18" />
            <path v-else d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
