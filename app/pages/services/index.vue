<script setup lang="ts">
const { data } = await useAsyncData('services', async () => {
  const [page, services] = await Promise.all([
    queryCollection('pages').path('/services').first(),
    queryCollection('services').order('path', 'ASC').all(),
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
      :subhead="page.subhead"
      :image="page.image"
      :image-alt="page.imageAlt"
      :breadcrumbs="[{ label: 'Services' }]"
    />
    <article class="mx-auto max-w-3xl px-4 py-12">
      <ContentRenderer :value="page" class="prose prose-slate max-w-none" />
    </article>
    <section class="bg-slate-50">
      <div class="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-3">
        <ContentCard
          v-for="service in data?.services"
          :key="service.path"
          :to="withSlash(service.path)"
          :title="service.title"
          :subtitle="service.subtitle"
          :description="service.description"
          :link-text="service.title"
        />
      </div>
    </section>
    <GetInTouch />
  </div>
</template>
