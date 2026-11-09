<script setup lang="ts">
const { data: articles } = await useAsyncData('blog', () =>
  queryCollection('blog')
    .select('path', 'title', 'description', 'image', 'imageAlt', 'date', 'tags')
    .order('date', 'DESC')
    .all(),
)

usePageSeo({
  title: 'Blog | Freelance Web Developer',
  description: 'Articles on static websites, JAMStack and ecommerce from Forbes Gray, freelance web developer in Edinburgh.',
})
</script>

<template>
  <div>
    <PageHeader title="Blog" :breadcrumbs="[{ label: 'Blog' }]" />
    <section class="mx-auto max-w-6xl px-4 py-12">
      <ArticleList :articles="articles ?? []" />
      <NuxtLink to="/blog/tags/" class="mt-8 inline-block font-semibold text-brand-600 hover:underline">
        Browse by tag &rarr;
      </NuxtLink>
    </section>
  </div>
</template>
