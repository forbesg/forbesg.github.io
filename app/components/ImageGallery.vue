<script setup lang="ts">
// A simple scroll-snap strip of screenshots; no JavaScript needed
defineProps<{ images: { src: string, alt: string }[] }>()
</script>

<template>
  <ul class="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4" aria-label="Screenshots">
    <li v-for="image in images" :key="image.src" class="w-4/5 shrink-0 snap-start sm:w-1/2">
      <NuxtImg :src="image.src" :alt="image.alt" sizes="80vw sm:50vw lg:400px" loading="lazy" class="w-full border border-line" />
    </li>
  </ul>
</template>
