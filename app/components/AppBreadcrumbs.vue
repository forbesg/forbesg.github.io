<script setup lang="ts">
import type { Crumb } from '~/utils/site'

const props = defineProps<{ items: Crumb[] }>()

const crumbs = computed<Crumb[]>(() => [{ label: 'Home', to: '/' }, ...props.items])

// Structured data, as the Gridsome site had via microdata
useHead({
  script: computed(() => [
    {
      type: 'application/ld+json',
      key: 'breadcrumbs',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': crumbs.value.map((crumb, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'name': crumb.label,
          ...(crumb.to ? { item: SITE_URL + crumb.to } : {}),
        })),
      }),
    },
  ]),
})
</script>

<template>
  <nav aria-label="Breadcrumb" class="font-mono text-[0.8125rem] text-muted">
    <ol class="flex flex-wrap gap-2">
      <li v-for="(crumb, index) in crumbs" :key="crumb.label" class="flex gap-2">
        <span v-if="index > 0" aria-hidden="true">/</span>
        <NuxtLink v-if="crumb.to" :to="crumb.to" class="hover:text-accent">{{ crumb.label }}</NuxtLink>
        <span v-else aria-current="page" class="text-ink">{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>
