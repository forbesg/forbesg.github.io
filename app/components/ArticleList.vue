<script setup lang="ts">
defineProps<{
  articles: {
    path: string
    title: string
    description: string
    date: string | Date
    tags: string[]
  }[]
}>()
</script>

<template>
  <ul class="border-t border-line">
    <li v-for="article in articles" :key="article.path" class="grid gap-x-8 gap-y-3 border-b border-line py-10 md:grid-cols-[12rem_minmax(0,1fr)]">
      <time :datetime="new Date(article.date).toISOString()" class="font-mono text-sm text-muted">
        {{ formatDate(article.date) }}
      </time>
      <div>
        <h2 class="text-4xl leading-tight">
          <NuxtLink :to="withSlash(article.path)" class="hover:text-accent">{{ article.title }}</NuxtLink>
        </h2>
        <p class="mt-3 max-w-2xl text-muted">{{ article.description }}</p>
        <ul class="mt-4 flex flex-wrap gap-4 font-mono text-[0.8125rem]">
          <li v-for="tag in article.tags" :key="tag">
            <NuxtLink :to="`/blog/tags/${tag}/`" class="text-accent hover:underline">#{{ BLOG_TAGS[tag] ?? tag }}</NuxtLink>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
