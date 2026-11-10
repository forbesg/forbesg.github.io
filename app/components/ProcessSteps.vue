<script setup lang="ts">
// "How it works": the three steps of a project, shared by the home and services pages
const steps = [
  {
    num: '01',
    label: 'Chat',
    title: 'A plain-English conversation',
    text: 'Tell me about your business and what the site needs to do. You talk to me, the person who’ll build it, not a salesperson.',
  },
  {
    num: '02',
    label: 'Build',
    title: 'A fixed quote, then the build',
    text: 'You see progress on a private preview link as it comes together, and say what to change.',
  },
  {
    num: '03',
    label: 'Launch',
    title: 'Live, fast and findable',
    text: 'Domain, hosting and search engine basics set up for you. I’m still here afterwards when you need a change.',
  },
]
</script>

<template>
  <section class="border-t border-line" aria-labelledby="process-heading">
    <div class="mx-auto max-w-6xl px-6 py-24">
      <h2 id="process-heading" class="mb-12 text-6xl leading-none">How it works</h2>
      <ol class="grid gap-10 md:grid-cols-3">
        <li v-for="step in steps" :key="step.num">
          <p class="font-mono text-sm text-accent">{{ step.num }} — {{ step.label }}</p>
          <h3 class="mt-3 mb-2 text-[1.875rem] leading-tight">{{ step.title }}</h3>
          <p class="text-muted">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
