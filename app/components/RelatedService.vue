<script setup lang="ts">
// End-of-article link from a blog post to the service it relates to,
// picked from the post's tags
const props = defineProps<{ tags: string[] }>()

// null: no matching service page (web applications are quoted per project)
const servicePath = computed(() => {
  if (props.tags.includes('web-applications')) return null
  if (props.tags.some(t => ['local-seo', 'website-speed'].includes(t))) return '/services/website-rescue'
  if (props.tags.includes('wordpress')) return '/services/cms-websites'
  if (props.tags.includes('ecommerce-sites')) return '/services/ecommerce-website-design'
  if (props.tags.some(t => ['static-sites', 'jam-stack', 'website-costs', 'planning'].includes(t))) return '/services/brochure-websites'
  return '/services/cms-websites'
})

const { data: service } = await useAsyncData(
  () => `related-service-${servicePath.value}`,
  () => servicePath.value
    ? queryCollection('services')
        .path(servicePath.value)
        .select('path', 'shortTitle', 'summary', 'packages')
        .first()
    : Promise.resolve(null),
)
</script>

<template>
  <aside v-if="service" class="mt-12 border border-line bg-surface p-8" aria-label="Related service">
    <p class="eyebrow">Need one of these?</p>
    <p class="mt-3 font-display text-[2rem] leading-tight">{{ service.shortTitle }}</p>
    <p class="mt-2 text-muted">{{ service.summary }}</p>
    <div class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
      <NuxtLink :to="withSlash(service.path)" class="btn-primary">See packages</NuxtLink>
      <span class="font-mono text-[0.9375rem]">{{ fromPrice(service.packages) }}</span>
    </div>
  </aside>
</template>
