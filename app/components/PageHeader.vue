<script setup lang="ts">
import type { Crumb } from '~/utils/site'

defineProps<{
  title: string
  eyebrow?: string
  subhead?: string
  breadcrumbs?: Crumb[]
  image?: string
  imageAlt?: string
  /** Transparent mockups: no border, shown whole */
  imageFrameless?: boolean
}>()
</script>

<template>
  <header class="border-b border-line">
    <div class="relative isolate overflow-hidden">
      <div class="dot-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div class="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pb-20">
        <AppBreadcrumbs v-if="breadcrumbs" :items="breadcrumbs" class="mb-12 md:mb-16" />
        <p v-if="eyebrow" class="eyebrow mb-5">{{ eyebrow }}</p>
        <h1 class="max-w-4xl text-5xl leading-[1.02] tracking-[-0.02em] md:text-7xl">{{ title }}</h1>
        <p v-if="subhead" class="mt-6 max-w-2xl text-xl text-muted">{{ subhead }}</p>
        <slot />
      </div>
    </div>
    <div v-if="image" class="mx-auto max-w-6xl px-6 pb-16">
      <NuxtImg
        :src="image"
        :alt="imageAlt ?? ''"
        sizes="sm:100vw md:100vw lg:1104px"
        fetchpriority="high"
        :class="imageFrameless ? 'mx-auto aspect-video w-full max-w-[64rem] object-contain' : 'aspect-[21/9] w-full border border-line object-cover'"
        preload
      />
    </div>
  </header>
</template>
