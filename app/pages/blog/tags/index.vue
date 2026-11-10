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
    <PageHeader title="Topics" eyebrow="Blog" :breadcrumbs="[{ label: 'Blog', to: '/blog/' }, { label: 'Tags' }]" />
    <ul class="mx-auto max-w-6xl px-6 py-20">
      <li v-for="tag in tags" :key="tag.slug">
        <NuxtLink :to="`/blog/tags/${tag.slug}/`" class="group flex items-baseline justify-between gap-4 border-b border-line py-6">
          <span class="font-display text-4xl group-hover:text-accent">{{ tag.title }}</span>
          <span class="font-mono text-sm text-muted">{{ tag.count }} {{ tag.count === 1 ? 'article' : 'articles' }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
