<script setup lang="ts">
const links = [
  { to: '/', label: 'Home' },
  { to: '/services/', label: 'Services' },
  { to: '/portfolio/', label: 'Portfolio' },
  { to: '/blog/', label: 'Blog' },
]

const open = ref(false)
const route = useRoute()
watch(() => route.path, () => (open.value = false))
</script>

<template>
  <header class="relative border-b border-slate-200">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
      <NuxtLink to="/" class="font-display text-xl font-bold lowercase">
        forbes<span class="text-brand-600">Gray</span>
      </NuxtLink>

      <button
        type="button"
        class="md:hidden"
        :aria-expanded="open"
        aria-controls="site-nav"
        @click="open = !open"
      >
        Menu
      </button>

      <nav
        id="site-nav"
        aria-label="Main"
        :class="open ? 'block' : 'hidden'"
        class="absolute inset-x-0 top-16 bg-white p-4 shadow md:static md:block md:p-0 md:shadow-none"
      >
        <ul class="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="hover:text-brand-600"
              exact-active-class="text-brand-600"
              :active-class="link.to === '/' ? '' : 'text-brand-600'"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact/" class="rounded bg-brand-600 px-4 py-2 text-white hover:bg-brand-700">
              Hire Me
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
