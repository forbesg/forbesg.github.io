<script setup lang="ts">
withDefaults(defineProps<{ title?: string }>(), { title: 'Got a project in mind?' })
</script>

<template>
  <section class="bg-accent text-accent-ink">
    <div class="mx-auto max-w-6xl px-6 py-24 md:py-28">
      <h2 class="max-w-4xl text-6xl leading-none md:text-8xl">{{ title }}</h2>
      <p class="mt-6 max-w-xl text-xl">
        Tell me what you need and I'll come back with honest advice and a fixed price. No agency fees, no hard sell.
      </p>
      <NuxtLink to="/contact/" class="btn mt-10 bg-accent-ink text-accent hover:opacity-90">
        Send a message
      </NuxtLink>
    </div>
  </section>
</template>
