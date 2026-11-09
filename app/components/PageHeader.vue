<script setup lang="ts">
import type { Crumb } from '~/utils/site'

defineProps<{
  title: string
  subhead?: string
  breadcrumbs?: Crumb[]
  image?: string
  imageAlt?: string
}>()
</script>

<template>
  <header class="bg-brand-50">
    <div class="mx-auto max-w-6xl px-4 py-10">
      <AppBreadcrumbs v-if="breadcrumbs" :items="breadcrumbs" class="mb-6" />
      <h1 class="text-3xl font-bold text-brand-900 sm:text-4xl">{{ title }}</h1>
      <p v-if="subhead" class="mt-2 text-xl text-brand-700">{{ subhead }}</p>
    </div>
    <NuxtImg
      v-if="image"
      :src="image"
      :alt="imageAlt ?? ''"
      sizes="100vw lg:1152px"
      class="mx-auto max-h-96 w-full max-w-6xl object-cover"
      preload
    />
  </header>
</template>
