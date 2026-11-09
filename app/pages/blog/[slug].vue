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
      :image="article.image"
      :image-alt="article.imageAlt"
      :breadcrumbs="[{ label: 'Blog', to: '/blog/' }, { label: article.title }]"
    />
    <article class="mx-auto max-w-3xl px-4 py-12">
      <p class="text-sm text-slate-500">
        <NuxtLink v-if="author" :to="withSlash(author.path)" class="text-brand-600 hover:underline">{{ author.name }}</NuxtLink>
        <span v-if="author"> &middot; </span>
        <time :datetime="new Date(article.date).toISOString()">{{ formatDate(article.date) }}</time>
      </p>
      <ContentRenderer :value="article" class="prose prose-slate mt-6 max-w-none" />
      <ul class="mt-10 flex flex-wrap gap-2">
        <li v-for="tag in article.tags" :key="tag">
          <NuxtLink :to="`/blog/tags/${tag}/`" class="rounded bg-brand-50 px-3 py-1 text-sm text-brand-700 hover:bg-brand-300">
            {{ BLOG_TAGS[tag] ?? tag }}
          </NuxtLink>
        </li>
      </ul>
    </article>
  </div>
</template>
