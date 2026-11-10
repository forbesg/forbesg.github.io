<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const notFound = computed(() => props.error.statusCode === 404)

useHead({ title: notFound.value ? 'Page Not Found' : 'Something went wrong' })
useSeoMeta({ robots: 'noindex' })
</script>

<template>
  <NuxtLayout>
    <div class="mx-auto max-w-6xl px-6 py-28">
      <p class="eyebrow mb-6">Error {{ error.statusCode }}</p>
      <h1 class="text-7xl leading-none md:text-8xl">{{ notFound ? 'This page has wandered off.' : 'Something went wrong.' }}</h1>
      <p class="mt-8 max-w-xl text-lg text-muted">
        {{ notFound ? 'It may have moved when the site was rebuilt.' : 'Please try again in a moment.' }}
      </p>
      <div class="mt-10 flex flex-wrap gap-4">
        <button type="button" class="btn-primary cursor-pointer" @click="clearError({ redirect: '/' })">Back to the home page</button>
        <button type="button" class="btn-outline cursor-pointer" @click="clearError({ redirect: '/portfolio/' })">See my work</button>
      </div>
    </div>
  </NuxtLayout>
</template>
