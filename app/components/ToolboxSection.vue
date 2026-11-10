<script setup lang="ts">
// The toolbox: tool lists from content/toolbox.yml
const { data: toolbox } = await useAsyncData('toolbox', () => queryCollection('toolbox').first())

const icons: Record<string, string> = {
  layout: 'M3 4h18v16H3zM3 9h18M9 9v11',
  database: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  cart: 'M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L20 8H6.2M9 20.5h.01M17 20.5h.01',
  rocket: 'M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2M12 15l-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2zM9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5',
  archive: 'M3 4h18v4H3zM5 8v12h14V8M10 12h4',
}
</script>

<template>
  <section v-if="toolbox" id="toolbox" class="border-t border-line" aria-labelledby="toolbox-heading">
    <div class="mx-auto max-w-6xl px-6 py-24">
      <div class="mb-12 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
        <h2 id="toolbox-heading" class="text-6xl leading-none">{{ toolbox.title }}</h2>
        <p class="max-w-xl text-muted">{{ toolbox.intro }}</p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="group in toolbox.groups"
          :key="group.name"
          :class="group.retired ? 'border-dashed sm:col-span-2 lg:col-span-4' : 'bg-surface'"
          class="border border-line p-6"
        >
          <svg class="text-accent" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path :d="icons[group.icon]" />
          </svg>
          <h3 class="mt-4 text-[1.75rem] leading-tight">{{ group.name }}</h3>
          <p class="font-mono text-[0.8125rem] text-muted">{{ group.tagline }}</p>
          <ul
            :class="group.retired ? 'flex flex-wrap gap-x-6 gap-y-1.5' : 'space-y-1.5'"
            class="mt-5 text-[0.9375rem]"
          >
            <li v-for="tool in group.tools" :key="tool" class="flex items-center gap-2.5">
              <span class="size-1.5 shrink-0 bg-accent" aria-hidden="true" />
              {{ tool }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
