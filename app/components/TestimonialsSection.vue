<script setup lang="ts">
// Client quotes from content/testimonials.yml. Renders nothing until there's
// at least one (or, with `project`, one linked to that portfolio project).
const props = withDefaults(defineProps<{ project?: string, title?: string }>(), {
  title: 'What clients say',
})

const { data } = await useAsyncData('testimonials', () => queryCollection('testimonials').first())

const quotes = computed(() => {
  const items = data.value?.items ?? []
  return props.project
    ? items.filter(t => t.project && contentPath(t.project) === contentPath(props.project!))
    : items
})
</script>

<template>
  <section v-if="quotes.length" class="border-t border-line" aria-labelledby="testimonials-heading">
    <div class="mx-auto max-w-6xl px-6 py-24">
      <h2 id="testimonials-heading" class="mb-12 text-6xl leading-none">{{ title }}</h2>
      <ul class="grid gap-6" :class="quotes.length > 1 && 'md:grid-cols-2'">
        <li v-for="t in quotes" :key="t.name + t.quote" class="flex flex-col border border-line bg-surface p-8">
          <blockquote class="flex-1 font-display text-[1.75rem] leading-snug">
            <p>“{{ t.quote }}”</p>
          </blockquote>
          <p class="mt-6">
            <span class="font-medium">{{ t.name }}</span><template v-if="t.business">, {{ t.business }}</template>
          </p>
          <p class="mt-1 flex flex-wrap gap-x-4 font-mono text-xs tracking-[0.08em] text-muted uppercase">
            <span v-if="t.source">{{ t.source }} review</span>
            <NuxtLink v-if="t.project && !project" :to="withSlash(t.project)" class="hover:text-accent">See the project →</NuxtLink>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
