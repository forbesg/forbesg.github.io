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

if (!article.value || !isPublished(article.value.date)) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

const siteUrl = useSiteUrl()

usePageSeo({
  title: article.value.title,
  description: article.value.description,
  image: article.value.image,
  imageAlt: article.value.imageAlt,
  type: 'article',
})

useSchemaOrg([
  defineArticle({
    '@type': 'BlogPosting',
    'headline': article.value.title,
    'description': article.value.description,
    'image': article.value.image,
    'datePublished': new Date(article.value.date).toISOString(),
    'dateModified': article.value.updated ? new Date(article.value.updated).toISOString() : undefined,
    'author': author.value
      ? definePerson({
          '@id': `${siteUrl}${withSlash(author.value.path)}#person`,
          'name': author.value.name,
          'url': withSlash(author.value.path),
          'sameAs': author.value.links,
        })
      : undefined,
  }),
])
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
        <template v-if="article.updated">
          &middot; Updated <time :datetime="new Date(article.updated).toISOString()">{{ formatDate(article.updated) }}</time>
        </template>
      </p>
    </PageHeader>
    <article class="mx-auto max-w-3xl px-6 py-16">
      <NuxtImg :src="article.image" :alt="article.imageAlt" sizes="sm:100vw md:720px" :style="aspectStyle(article.imageWidth, article.imageHeight)" class="mb-12 w-full border border-line object-cover" preload fetchpriority="high" />
      <ContentRenderer :value="article" class="prose prose-site max-w-none" />
      <ul class="mt-12 flex flex-wrap gap-3 border-t border-line pt-8 font-mono text-sm">
        <li v-for="tag in article.tags" :key="tag">
          <NuxtLink :to="`/blog/tags/${tag}/`" class="text-accent hover:underline">#{{ BLOG_TAGS[tag] ?? tag }}</NuxtLink>
        </li>
      </ul>
      <RelatedService :tags="article.tags" />
    </article>
    <GetInTouch />
  </div>
</template>
