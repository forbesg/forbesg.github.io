<script setup lang="ts">
const { data } = await useAsyncData('services', async () => {
  const [page, services] = await Promise.all([
    queryCollection('pages').path('/services').first(),
    queryCollection('services')
      .select('path', 'shortTitle', 'summary', 'packages', 'icon', 'highlights', 'example')
      .order('path', 'ASC')
      .all(),
  ])
  const examplePaths = services.map(s => s.example).filter((p): p is string => !!p)
  const examples = examplePaths.length
    ? await queryCollection('projects')
      .where('path', 'IN', examplePaths)
      .select('path', 'title', 'image', 'mockup', 'imageAlt')
      .all()
    : []
  return { page, services, examples }
})

const page = computed(() => data.value?.page)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

const services = computed(() =>
  (data.value?.services ?? []).map((service, i) => ({
    ...service,
    num: String(i + 1).padStart(2, '0'),
    example: data.value?.examples.find(p => p.path === service.example),
  })),
)

// Line icons for the "also available" tiles (24×24, stroked)
const icons: Record<string, string> = {
  search: 'M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14zM20 20l-4.2-4.2',
  zap: 'M13 2 4 14h7l-1 8 9-12h-7z',
  brush: 'M18.4 2.6a2.1 2.1 0 0 1 3 3L12 15l-3-3zM9 12c-2.5 0-4 1.5-4 4 0 1.5-1 2.5-3 3 1 1.5 3 2 5 2 3 0 5-2 5-5',
  layout: 'M3 4h18v16H3zM3 9h18M9 9v11',
}

usePageSeo({
  title: 'Web Design & Development Services | Edinburgh',
  description: page.value.description,
  image: page.value.image,
  imageAlt: page.value.imageAlt,
})
</script>

<template>
  <div v-if="page">
    <PageHeader
      :title="page.title"
      :eyebrow="page.subhead"
      :breadcrumbs="[{ label: 'Services' }]"
    >
      <ContentRenderer :value="page" class="prose prose-site mt-6 max-w-2xl text-muted [&_p]:text-xl [&_p]:leading-relaxed" />
    </PageHeader>

    <!-- The three main services, each with a real project alongside -->
    <section class="mx-auto max-w-6xl px-6" aria-label="Services and prices">
      <article
        v-for="(service, i) in services"
        :key="service.path"
        class="grid gap-10 border-b border-line py-16 md:py-20 lg:grid-cols-2 lg:items-start lg:gap-16"
      >
        <NuxtLink
          v-if="service.example"
          :to="withSlash(service.example.path)"
          :class="i % 2 ? 'lg:order-2' : ''"
          class="group block max-w-2xl lg:max-w-none"
        >
          <NuxtImg
            :src="service.example.mockup ?? service.example.image"
            :alt="service.example.imageAlt"
            sizes="100vw md:50vw lg:560px"
            :loading="i === 0 ? 'eager' : 'lazy'"
            :fetchpriority="i === 0 ? 'high' : undefined"
            :class="service.example.mockup ? 'object-contain' : 'border border-line object-cover'"
            class="aspect-video w-full transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span class="mt-3 block font-mono text-xs tracking-[0.08em] text-muted uppercase group-hover:text-accent">
            Example: {{ service.example.title }} →
          </span>
        </NuxtLink>

        <div>
          <div class="flex items-center gap-4">
            <span
              v-if="service.icon"
              class="size-11 shrink-0 bg-accent"
              :style="{
                maskImage: `url(${service.icon.src})`,
                WebkitMaskImage: `url(${service.icon.src})`,
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
              }"
              aria-hidden="true"
            />
            <p class="font-mono text-sm text-accent">{{ service.num }}</p>
          </div>
          <h2 class="mt-5 text-5xl leading-[1.05]">{{ service.shortTitle }}</h2>
          <p class="mt-4 max-w-xl text-lg text-muted">{{ service.summary }}</p>
          <ul v-if="service.highlights.length" class="mt-6 space-y-2.5">
            <li v-for="point in service.highlights" :key="point" class="flex items-baseline gap-3">
              <span class="size-1.5 shrink-0 -translate-y-0.5 bg-accent" aria-hidden="true" />
              {{ point }}
            </li>
          </ul>
          <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <NuxtLink :to="withSlash(service.path)" class="btn-primary">See packages</NuxtLink>
            <span class="font-mono text-[0.9375rem]">{{ fromPrice(service.packages) }}</span>
          </div>
        </div>
      </article>
    </section>

    <!-- Smaller services -->
    <section v-if="page.extras" class="mt-20 bg-soft" aria-labelledby="extras-heading">
      <div class="mx-auto max-w-6xl px-6 py-24">
        <div class="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
          <h2 id="extras-heading" class="text-6xl leading-none">{{ page.extras.title }}</h2>
          <p v-if="page.extras.intro" class="max-w-xl text-muted">{{ page.extras.intro }}</p>
        </div>
        <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="item in page.extras.items" :key="item.title" class="border border-line bg-surface p-6">
            <svg class="text-accent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path :d="icons[item.icon]" />
            </svg>
            <h3 class="mt-4 text-[1.625rem] leading-tight">{{ item.title }}</h3>
            <p class="mt-2 text-[0.9375rem] text-muted">{{ item.text }}</p>
          </li>
        </ul>
        <NuxtLink to="/contact/" class="link-mono mt-10 inline-block">Ask for a quote →</NuxtLink>
      </div>
    </section>

    <ProcessSteps />

    <GetInTouch />
  </div>
</template>
