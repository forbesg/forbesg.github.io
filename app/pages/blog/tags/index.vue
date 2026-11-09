<script setup lang="ts">
const { data: articles } = await useAsyncData('blog-tags', () =>
  queryCollection('blog').select('tags').all(),
)

const tags = computed(() => {
  const counts = new Map<string, number>()
  for (const article of articles.value ?? []) {
    for (const tag of article.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1)
  }
  return [...counts].map(([slug, count]) => ({ slug, count, title: BLOG_TAGS[slug] ?? slug }))
})

usePageSeo({
  title: 'Blog Tags',
  description: 'Browse articles by topic.',
})
</script>

<template>
  <div>
    <PageHeader title="Tags" :breadcrumbs="[{ label: 'Blog', to: '/blog/' }, { label: 'Tags' }]" />
    <ul class="mx-auto flex max-w-6xl flex-wrap gap-3 px-4 py-12">
      <li v-for="tag in tags" :key="tag.slug">
        <NuxtLink :to="`/blog/tags/${tag.slug}/`" class="inline-block rounded bg-brand-50 px-4 py-2 text-brand-700 hover:bg-brand-300">
          {{ tag.title }} ({{ tag.count }})
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
