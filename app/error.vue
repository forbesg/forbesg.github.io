<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const notFound = computed(() => props.error.statusCode === 404)

useHead({ title: notFound.value ? 'Page Not Found' : 'Something went wrong' })
useSeoMeta({ robots: 'noindex' })
</script>

<template>
  <NuxtLayout>
    <div class="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 class="text-4xl font-bold text-brand-900">{{ notFound ? 'Page Not Found' : 'Something went wrong' }}</h1>
      <img v-if="notFound" src="/images/404-error-bro.svg" alt="" class="mx-auto mt-8 max-w-md">
      <p class="mt-6">
        <button type="button" class="font-semibold text-brand-600 hover:underline" @click="clearError({ redirect: '/' })">
          Back to the home page
        </button>
      </p>
      <p v-if="notFound" class="mt-8 text-sm text-slate-500">
        <a href="https://storyset.com/web">Web illustrations by Storyset</a>
      </p>
    </div>
  </NuxtLayout>
</template>
