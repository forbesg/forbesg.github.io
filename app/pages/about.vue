<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => queryCollection('pages').path('/about').first())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

usePageSeo({
  title: 'About Me | Freelance Web Developer Edinburgh',
  description: page.value.description,
})
</script>

<template>
  <div v-if="page">
    <PageHeader :title="page.title" :breadcrumbs="[{ label: 'About' }]" />
    <article class="mx-auto max-w-3xl px-4 py-12">
      <ContentRenderer :value="page" class="prose prose-slate max-w-none" />
      <NuxtLink to="/portfolio/" class="mt-8 inline-block font-semibold text-brand-600 hover:underline">
        View My Portfolio &rarr;
      </NuxtLink>
    </article>
  </div>
</template>
