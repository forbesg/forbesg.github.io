<script setup lang="ts">
// Editorial card for projects, articles, services and team members:
// image, then serif title with a small mono label on the right.
defineProps<{
  to: string
  title: string
  image?: string
  imageAlt?: string
  label?: string
  description?: string
  aspect?: 'video' | 'square'
  /** Transparent mockups: no border, never cropped */
  frameless?: boolean
}>()
</script>

<template>
  <article class="group flex flex-col">
    <NuxtLink
      v-if="image"
      :to="to"
      tabindex="-1"
      aria-hidden="true"
      :class="frameless ? '' : 'border border-line'"
      class="block overflow-hidden"
    >
      <NuxtImg
        :src="image"
        :alt="imageAlt ?? ''"
        sizes="100vw sm:50vw lg:560px"
        loading="lazy"
        :class="[aspect === 'square' ? 'aspect-square' : 'aspect-video', frameless ? 'object-contain' : 'object-cover']"
        class="w-full transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </NuxtLink>
    <div class="mt-4 flex items-baseline justify-between gap-4">
      <h3 class="text-[1.875rem] leading-[1.1]">
        <NuxtLink :to="to" class="hover:text-accent">{{ title }}</NuxtLink>
      </h3>
      <span v-if="label" class="max-w-[45%] text-right font-mono text-xs tracking-[0.08em] text-muted uppercase">{{ label }}</span>
    </div>
    <p v-if="description" class="mt-2 text-muted">{{ description }}</p>
    <slot />
  </article>
</template>
