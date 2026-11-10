<script setup lang="ts">
const { data } = await useAsyncData('services', async () => {
  const [page, services] = await Promise.all([
    queryCollection('pages').path('/services').first(),
    queryCollection('services').select('path', 'shortTitle', 'summary', 'packages').order('path', 'ASC').all(),
  ])
  return { page, services }
})

const page = computed(() => data.value?.page)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

usePageSeo({
  title: 'Web Design & Development Services | Edinburgh',
  description: page.value.description,
  image: page.value.image,
  imageAlt: page.value.imageAlt,
})
</script>

<template>
  <div v-if="page">
    <PageHeader
      :title="page.title"
      :eyebrow="page.subhead"
      :breadcrumbs="[{ label: 'Services' }]"
    />

    <section class="mx-auto max-w-6xl px-6 py-20" aria-label="Services and prices">
      <ul class="border-t border-line">
        <li v-for="(service, i) in data?.services" :key="service.path">
          <NuxtLink
            :to="withSlash(service.path)"
            class="group grid grid-cols-[3rem_minmax(0,1fr)] items-baseline gap-x-6 gap-y-2 border-b border-line py-8 md:grid-cols-[4.5rem_minmax(0,1fr)_12rem]"
          >
            <span class="font-mono text-sm text-accent">{{ String(i + 1).padStart(2, '0') }}</span>
            <span>
              <span class="block font-display text-4xl leading-tight group-hover:text-accent">{{ service.shortTitle }}</span>
              <span class="mt-2 block max-w-2xl text-muted">{{ service.summary }}</span>
            </span>
            <span class="col-start-2 font-mono text-[0.9375rem] md:col-start-auto md:text-right">{{ fromPrice(service.packages) }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="border-t border-line">
      <div class="mx-auto max-w-3xl px-6 py-20">
        <ContentRenderer :value="page" class="prose prose-site max-w-none" />
      </div>
    </section>

    <GetInTouch />
  </div>
</template>
