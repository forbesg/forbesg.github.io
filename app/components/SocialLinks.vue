<script setup lang="ts">
const links = [
  { href: 'https://github.com/forbesg', label: 'GitHub' },
  { href: 'https://uk.linkedin.com/in/forbesgray', label: 'LinkedIn' },
  { href: 'https://www.instagram.com/4beeeez', label: 'Instagram' },
  { href: 'https://x.com/4beez', label: 'X' },
]
</script>

<template>
  <ul class="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
    <li v-for="link in links" :key="link.href">
      <a :href="link.href" target="_blank" rel="noopener" class="hover:text-accent">{{ link.label }}</a>
    </li>
  </ul>
</template>
