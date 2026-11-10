<script setup lang="ts">
import type { Crumb } from '~/utils/site'

const props = defineProps<{ items: Crumb[] }>()

const crumbs = computed<Crumb[]>(() => [{ label: 'Home', to: '/' }, ...props.items])

// Structured data: relative URLs are resolved against the site URL
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: crumbs.value.map(crumb => ({ name: crumb.label, item: crumb.to })),
  }),
])
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
