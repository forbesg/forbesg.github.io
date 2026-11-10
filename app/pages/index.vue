<script setup lang="ts">
const { data } = await useAsyncData('home', async () => {
  const [about, services, projects] = await Promise.all([
    queryCollection('pages').path('/home').first(),
    queryCollection('services').select('path', 'shortTitle', 'summary', 'packages').order('path', 'ASC').all(),
    queryCollection('projects').where('featured', '=', true).order('displayOrder', 'ASC').all(),
  ])
  return { about, services, projects }
})

const serviceRows = computed(() => [
  ...(data.value?.services ?? []).map((s, i) => ({
    num: String(i + 1).padStart(2, '0'),
    to: withSlash(s.path),
    title: s.shortTitle,
    summary: s.summary,
    price: fromPrice(s.packages),
  })),
  {
    num: String((data.value?.services.length ?? 0) + 1).padStart(2, '0'),
    to: '/contact/',
    title: 'Rescue & speed-ups',
    summary: 'Already have a site that’s slow, dated or hard to find on Google? I can fix it or move it somewhere better.',
    price: 'Ask for a quote',
  },
])

const steps = [
  { num: '01', label: 'Chat', title: 'A plain-English conversation', text: 'Tell me about your business and what the site needs to do. You talk to me, the person who’ll build it, not a salesperson.' },
  { num: '02', label: 'Build', title: 'A fixed quote, then the build', text: 'You see progress on a private preview link as it comes together, and say what to change.' },
  { num: '03', label: 'Launch', title: 'Live, fast and findable', text: 'Domain, hosting and search engine basics set up for you. I’m still here afterwards when you need a change.' },
]

usePageSeo({
  title: 'Freelance Web Developer Edinburgh',
  description: data.value?.about?.description,
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative isolate overflow-hidden">
      <div class="dot-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div class="mx-auto max-w-6xl px-6 pt-24 pb-24 md:pt-32 md:pb-28">
        <p class="eyebrow mb-8">Freelance web developer · Edinburgh</p>
        <h1 class="max-w-5xl text-[4rem] leading-[0.95] tracking-[-0.02em] sm:text-8xl lg:text-[7.5rem]">
          Websites that work as hard as <em class="text-accent">you do.</em>
        </h1>
        <p class="mt-10 max-w-2xl text-[1.375rem] leading-normal">
          Fast, good-looking websites for Scottish businesses,
          <em class="font-display text-[1.75rem] text-accent">without the agency price tag.</em>
        </p>
        <p class="mt-4 max-w-xl text-lg text-muted">Fixed prices from £895, free hosting, and no plugins to keep updating.</p>
        <div class="mt-10 flex flex-wrap gap-4">
          <NuxtLink to="/contact/" class="btn-primary">Start a project</NuxtLink>
          <NuxtLink to="/services/" class="btn-outline">See prices</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="border-t border-line" aria-labelledby="services-heading">
      <div class="mx-auto max-w-6xl px-6 py-24">
        <div class="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="services-heading" class="text-6xl leading-none">What I build</h2>
          <p class="font-mono text-[0.8125rem] text-muted">Fixed prices · No agency fees</p>
        </div>
        <ul class="border-t border-line">
          <li v-for="row in serviceRows" :key="row.to + row.num">
            <NuxtLink
              :to="row.to"
              class="group grid grid-cols-[3rem_minmax(0,1fr)] items-baseline gap-x-6 gap-y-2 border-b border-line py-8 md:grid-cols-[4.5rem_minmax(0,1fr)_12rem]"
            >
              <span class="font-mono text-sm text-accent">{{ row.num }}</span>
              <span>
                <span class="block font-display text-4xl leading-tight group-hover:text-accent">{{ row.title }}</span>
                <span class="mt-2 block max-w-2xl text-muted">{{ row.summary }}</span>
              </span>
              <span class="col-start-2 font-mono text-[0.9375rem] md:col-start-auto md:text-right">{{ row.price }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Work -->
    <section class="bg-soft" aria-labelledby="work-heading">
      <div class="mx-auto max-w-6xl px-6 py-24">
        <h2 id="work-heading" class="mb-12 text-6xl leading-none">Recent work</h2>
        <div class="grid gap-x-8 gap-y-12 md:grid-cols-2">
          <ContentCard
            v-for="project in data?.projects"
            :key="project.path"
            :to="withSlash(project.path)"
            :title="project.title"
            :label="PORTFOLIO_CATEGORIES[project.category].single"
            :image="project.mockup ?? project.image"
            :image-alt="project.imageAlt"
            :frameless="!!project.mockup"
          />
        </div>
        <NuxtLink to="/portfolio/" class="link-mono mt-12 inline-block">All projects →</NuxtLink>
      </div>
    </section>

    <!-- Process -->
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

    <!-- About -->
    <section v-if="data?.about" class="border-t border-line" aria-labelledby="about-heading">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center gap-16 px-6 py-24">
        <NuxtImg
          src="/images/forbes-up-arthurs-seat.jpg"
          alt="Forbes Gray at the top of Arthur's Seat, Edinburgh"
          width="440"
          height="440"
          sizes="100vw md:440px"
          loading="lazy"
          class="aspect-square w-full max-w-[27.5rem] flex-[1_1_20rem] object-cover"
        />
        <div class="min-w-0 flex-[999_1_26rem]">
          <p class="eyebrow mb-4">{{ data.about.subhead }}</p>
          <h2 id="about-heading" class="text-[3.5rem] leading-[1.05]">
            One developer. <em class="text-accent">No account managers.</em>
          </h2>
          <ContentRenderer :value="data.about" class="mt-6 space-y-4 text-muted" />
          <NuxtLink to="/about/" class="link-mono mt-6 inline-block">More about me →</NuxtLink>
        </div>
      </div>
    </section>

    <GetInTouch />
  </div>
</template>
