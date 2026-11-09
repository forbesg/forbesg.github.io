<script setup lang="ts">
const nav = [
  { to: '/', label: 'Home' },
  { to: '/services/', label: 'Services' },
  { to: '/about/', label: 'About' },
  { to: '/portfolio/', label: 'Portfolio' },
  { to: '/blog/', label: 'Blog' },
  { to: '/meet-the-team/', label: 'Meet The Team' },
  { to: '/contact/', label: 'Contact' },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-brand-900 text-brand-50">
    <div class="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
      <div>
        <h2 class="mb-3 text-lg font-bold">Navigation</h2>
        <ul class="space-y-1">
          <li v-for="link in nav" :key="link.to">
            <NuxtLink :to="link.to" class="hover:underline">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="mb-3 text-lg font-bold">Elsewhere</h2>
        <SocialLinks />
      </div>
      <div>
        <h2 class="mb-3 text-lg font-bold">Contact</h2>
        <address class="not-italic">
          5 Park Place,<br>
          Edinburgh.<br>
          EH6 4LB
        </address>
      </div>
    </div>
    <p class="pb-6 text-center text-sm">&copy; Forbes Gray {{ year }}</p>
  </footer>
</template>
