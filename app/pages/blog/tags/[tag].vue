<script setup lang="ts">
const route = useRoute()
const tag = String(route.params.tag)

const { data: all } = await useAsyncData(`blog-tag-${tag}`, () =>
  queryCollection('blog')
    .select('path', 'title', 'description', 'image', 'imageAlt', 'date', 'tags')
    .order('date', 'DESC')
    .all(),
)

// Tags are a JSON array column, so filter here rather than in SQL
const articles = computed(() => (all.value ?? []).filter(a => a.tags.includes(tag)))

if (!articles.value.length) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

const title = BLOG_TAGS[tag] ?? tag

usePageSeo({
  title: `${title} Articles`,
  description: `Articles about ${title} from Forbes Gray, freelance web developer in Edinburgh.`,
})
</script>

<template>
  <div>
    <PageHeader
      :title="title"
      :breadcrumbs="[{ label: 'Blog', to: '/blog/' }, { label: 'Tags', to: '/blog/tags/' }, { label: title }]"
    />
    <section class="mx-auto max-w-6xl px-4 py-12">
      <ArticleList :articles="articles" />
    </section>
  </div>
</template>
