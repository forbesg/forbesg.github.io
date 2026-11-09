<script setup lang="ts">
defineProps<{
  articles: {
    path: string
    title: string
    description: string
    image: string
    imageAlt: string
    date: string | Date
    tags: string[]
  }[]
}>()
</script>

<template>
  <div class="grid gap-6 md:grid-cols-3">
    <ContentCard
      v-for="article in articles"
      :key="article.path"
      :to="withSlash(article.path)"
      :title="article.title"
      :subtitle="formatDate(article.date)"
      :description="article.description"
      :image="article.image"
      :image-alt="article.imageAlt"
      link-text="Read More"
    >
      <ul class="flex flex-wrap gap-2 text-sm">
        <li v-for="tag in article.tags" :key="tag">
          <NuxtLink :to="`/blog/tags/${tag}/`" class="text-brand-600 hover:underline">#{{ BLOG_TAGS[tag] ?? tag }}</NuxtLink>
        </li>
      </ul>
    </ContentCard>
  </div>
</template>
