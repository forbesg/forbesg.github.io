<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => queryCollection('pages').path('/about').first())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

usePageSeo({
  title: 'About Me | Freelance Web Developer Edinburgh',
  description: page.value.description,
})

useSchemaOrg([defineWebPage({ '@type': 'AboutPage' })])
</script>

<template>
  <div v-if="page">
    <PageHeader :title="page.title" eyebrow="About" :breadcrumbs="[{ label: 'About' }]" />
    <div class="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-[18rem_minmax(0,1fr)]">
      <aside class="lg:sticky lg:top-24 lg:self-start">
        <NuxtImg
          src="/images/forbes-up-arthurs-seat.jpg"
          alt="Forbes Gray at the top of Arthur's Seat, Edinburgh"
          width="288"
          height="288"
          fetchpriority="high"
          class="aspect-square w-full max-w-72 border border-line object-cover"
        />
        <p class="mt-4 font-mono text-[0.8125rem] text-muted">Forbes Gray · Leith, Edinburgh</p>
        <div class="mt-4 flex flex-col items-start gap-2">
          <a href="#toolbox" class="link-mono">My toolbox ↓</a>
          <NuxtLink to="/meet-the-team/" class="link-mono">Meet the team →</NuxtLink>
        </div>
      </aside>
      <article class="min-w-0 max-w-3xl">
        <ContentRenderer :value="page" class="prose prose-site max-w-none" />
        <NuxtLink to="/portfolio/" class="link-mono mt-10 inline-block">See my work →</NuxtLink>
      </article>
    </div>
    <ToolboxSection />
    <GetInTouch />
  </div>
</template>
