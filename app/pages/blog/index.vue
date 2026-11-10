<script setup lang="ts">
const { data: articles } = await useAsyncData('blog', () =>
  queryCollection('blog')
    .select('path', 'title', 'description', 'date', 'tags')
    .order('date', 'DESC')
    .all(),
)

usePageSeo({
  title: 'Blog | Freelance Web Developer',
  description: 'Articles on fast websites, static sites and ecommerce from Forbes Gray, freelance web developer in Edinburgh.',
})
</script>

<template>
  <div>
    <PageHeader title="Notes on building for the web" eyebrow="Blog" :breadcrumbs="[{ label: 'Blog' }]" />
    <section class="mx-auto max-w-6xl px-6 py-20">
      <ArticleList :articles="articles ?? []" />
      <NuxtLink to="/blog/tags/" class="link-mono mt-10 inline-block">Browse by tag →</NuxtLink>
    </section>
  </div>
</template>
