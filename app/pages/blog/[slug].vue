<script setup lang="ts">
const route = useRoute()
const path = contentPath(route.path)

const { data } = await useAsyncData(`article-${path}`, async () => {
  const article = await queryCollection('blog').path(path).first()
  const author = article
    ? await queryCollection('team').path(`/meet-the-team/${article.author}`).first()
    : null
  return { article, author }
})

const article = computed(() => data.value?.article)
const author = computed(() => data.value?.author)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

usePageSeo({
  title: article.value.title,
  description: article.value.description,
  image: article.value.image,
  imageAlt: article.value.imageAlt,
  type: 'article',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      key: 'article',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': article.value.title,
        'description': article.value.description,
        'image': [SITE_URL + article.value.image],
        'datePublished': new Date(article.value.date).toISOString(),
        'author': author.value
          ? [{
              '@type': 'Person',
              'name': author.value.name,
              'url': SITE_URL + withSlash(author.value.path),
              'sameAs': author.value.links,
            }]
          : undefined,
      }),
    },
  ],
})
</script>

<template>
  <div v-if="article">
    <PageHeader
      :title="article.title"
      :subhead="article.subhead"
      :breadcrumbs="[{ label: 'Blog', to: '/blog/' }, { label: article.title }]"
    >
      <p class="mt-8 font-mono text-sm text-muted">
        <NuxtLink v-if="author" :to="withSlash(author.path)" class="text-ink hover:text-accent">{{ author.name }}</NuxtLink>
        <span v-if="author"> &middot; </span>
        <time :datetime="new Date(article.date).toISOString()">{{ formatDate(article.date) }}</time>
      </p>
    </PageHeader>
    <article class="mx-auto max-w-3xl px-6 py-16">
      <NuxtImg :src="article.image" :alt="article.imageAlt" sizes="100vw md:768px" class="mb-12 w-full border border-line" preload />
      <ContentRenderer :value="article" class="prose prose-site max-w-none" />
      <ul class="mt-12 flex flex-wrap gap-3 border-t border-line pt-8 font-mono text-sm">
        <li v-for="tag in article.tags" :key="tag">
          <NuxtLink :to="`/blog/tags/${tag}/`" class="text-accent hover:underline">#{{ BLOG_TAGS[tag] ?? tag }}</NuxtLink>
        </li>
      </ul>
    </article>
    <GetInTouch />
  </div>
</template>
