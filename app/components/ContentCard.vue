<script setup lang="ts">
  // Editorial card for projects, articles, services and team members:
  // image, then serif title with a small mono label on the right.
  withDefaults(
    defineProps<{
      to: string;
      title: string;
      image?: string;
      imageAlt?: string;
      label?: string;
      description?: string;
      aspect?: "video" | "square";
      /** Transparent mockups: no border, never cropped */
      frameless?: boolean;
      /** Title heading level: 3 under an h2 section, 2 when the cards sit directly under the page h1 */
      headingLevel?: 2 | 3;
      /** Card is visible on first load: load its image straight away at high priority instead of lazily */
      eager?: boolean;
    }>(),
    { headingLevel: 3, eager: false },
  );
</script>

<template>
  <!-- One link per card: the title link stretches over the whole card (after:inset-0),
       so the image is clickable without a second, hidden duplicate link. -->
  <article class="group relative flex flex-col">
    <div
      v-if="image"
      :class="frameless ? '' : 'border border-line'"
      class="overflow-visible"
    >
      <NuxtImg
        :src="image"
        :alt="imageAlt ?? ''"
        sizes="sm:100vw md:50vw lg:536px"
        :loading="eager ? 'eager' : 'lazy'"
        :fetchpriority="eager ? 'high' : undefined"
        :class="[
          aspect === 'square' ? 'aspect-square' : 'aspect-video',
          frameless ? 'object-contain' : 'object-cover',
        ]"
        class="w-full transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>
    <div class="mt-4 flex items-baseline justify-between gap-4">
      <component :is="`h${headingLevel}`" class="text-[1.875rem] leading-[1.1]">
        <NuxtLink
          :to="to"
          class="after:absolute after:inset-0 after:content-[''] group-hover:text-accent focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-accent"
          >{{ title }}</NuxtLink
        >
      </component>
      <span
        v-if="label"
        class="max-w-[45%] text-right font-mono text-xs tracking-[0.08em] text-muted uppercase"
        >{{ label }}</span
      >
    </div>
    <p v-if="description" class="mt-2 text-muted">{{ description }}</p>
    <slot />
  </article>
</template>
