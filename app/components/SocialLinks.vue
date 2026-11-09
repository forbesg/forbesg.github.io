<script setup lang="ts">
// Twitter link kept as on the old site; review during the content refresh.
const links = [
  { href: 'https://github.com/forbesg', label: 'GitHub', handle: 'forbesg' },
  { href: 'https://uk.linkedin.com/in/forbesgray', label: 'LinkedIn', handle: 'forbesgray' },
  { href: 'https://twitter.com/4beez', label: 'Twitter', handle: '@4beez' },
  { href: 'https://www.instagram.com/4beeeez', label: 'Instagram', handle: '@4beeeez' },
]
</script>

<template>
  <ul class="space-y-1">
    <li v-for="link in links" :key="link.href">
      <a :href="link.href" target="_blank" rel="noopener" class="hover:underline">
        {{ link.label }}: {{ link.handle }}
      </a>
    </li>
  </ul>
</template>
