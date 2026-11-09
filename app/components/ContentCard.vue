<script setup lang="ts">
// Shared card for projects, articles, services and team members
defineProps<{
  to: string
  title: string
  image?: string
  imageAlt?: string
  subtitle?: string
  description?: string
  tags?: string[]
  linkText?: string
}>()
</script>

<template>
  <article class="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white">
    <NuxtImg
      v-if="image"
      :src="image"
      :alt="imageAlt ?? ''"
      sizes="100vw sm:50vw lg:400px"
      loading="lazy"
      class="aspect-video w-full object-cover"
    />
    <div class="flex flex-1 flex-col gap-3 p-5">
      <h3 class="text-xl font-bold text-brand-900">
        <NuxtLink :to="to" class="hover:text-brand-600">{{ title }}</NuxtLink>
      </h3>
      <p v-if="subtitle" class="font-semibold text-brand-700">{{ subtitle }}</p>
      <ul v-if="tags?.length" class="flex flex-wrap gap-1.5">
        <li v-for="tag in tags" :key="tag" class="rounded bg-brand-50 px-2 py-0.5 text-xs text-brand-700">
          {{ tag }}
        </li>
      </ul>
      <p v-if="description" class="flex-1">{{ description }}</p>
      <slot />
      <NuxtLink v-if="linkText" :to="to" class="font-semibold text-brand-600 hover:underline" aria-hidden="true" tabindex="-1">
        {{ linkText }} &rarr;
      </NuxtLink>
    </div>
  </article>
</template>
