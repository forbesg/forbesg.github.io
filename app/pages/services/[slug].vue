<script setup lang="ts">
const route = useRoute()
const path = contentPath(route.path)

const { data } = await useAsyncData(`service-${path}`, async () => {
  const [service, all] = await Promise.all([
    queryCollection('services').path(path).first(),
    queryCollection('services').select('path', 'shortTitle', 'summary').order('path', 'ASC').all(),
  ])
  return { service, others: all.filter(s => s.path !== path) }
})

const service = computed(() => data.value?.service)

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

usePageSeo({
  title: `${service.value.title} | Edinburgh`,
  description: service.value.description,
  image: service.value.bannerImage.src,
  imageAlt: service.value.bannerImage.alt,
})

// "£1,495" -> "1495"
const amount = (price: string) => price.replace(/[^\d.]/g, '')

useSchemaOrg([
  defineService({
    name: service.value.title,
    description: service.value.description,
    serviceType: service.value.shortTitle,
    areaServed: ['Edinburgh', 'Scotland', 'United Kingdom'],
    offers: service.value.packages.map(pkg => ({
      '@type': 'Offer',
      'name': pkg.name,
      'price': amount(pkg.price ?? pkg.priceFrom ?? ''),
      'priceCurrency': 'GBP',
      'description': pkg.features.join(', '),
    })),
  }),
])
</script>

<template>
  <div v-if="service">
    <PageHeader
      :title="service.title"
      :eyebrow="fromPrice(service.packages)"
      :subhead="service.subtitle"
      :breadcrumbs="[{ label: 'Services', to: '/services/' }, { label: service.shortTitle }]"
    >
      <div class="mt-10 flex flex-wrap gap-4">
        <NuxtLink to="/contact/" class="btn-primary">Get a fixed quote</NuxtLink>
        <a v-if="service.packages.length" href="#pricing" class="btn-outline">See packages</a>
      </div>
    </PageHeader>

    <section class="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
      <ContentRenderer :value="service" class="prose prose-site max-w-none" />
      <video
        v-if="service.intro?.video"
        :src="service.intro.video.src"
        :width="service.intro.video.width"
        :height="service.intro.video.height"
        class="h-auto w-full border border-line"
        autoplay
        loop
        muted
        playsinline
        aria-hidden="true"
      />
      <NuxtImg
        v-else
        :src="service.bannerImage.src"
        :alt="service.bannerImage.alt"
        sizes="sm:100vw md:50vw lg:528px"
        :style="aspectStyle(service.bannerImage.width, service.bannerImage.height)"
        class="w-full border border-line object-cover"
      />
    </section>

    <section v-if="service.featureColumns.length" class="bg-soft">
      <div class="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
        <div v-for="(item, i) in service.featureColumns" :key="item.title">
          <p class="font-mono text-sm text-accent">{{ String(i + 1).padStart(2, '0') }}</p>
          <h2 class="mt-3 mb-2 text-[1.875rem] leading-tight">{{ item.title }}</h2>
          <p class="text-muted">{{ item.content }}</p>
        </div>
      </div>
    </section>

    <section v-if="service.pricing" id="pricing" class="border-t border-line">
      <div class="mx-auto max-w-6xl px-6 py-20">
        <h2 class="text-6xl leading-none">{{ service.pricing.title }}</h2>
        <p v-if="service.pricing.introText" class="mt-4 max-w-3xl text-muted">{{ service.pricing.introText }}</p>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article v-for="pkg in service.packages" :key="pkg.name" class="flex flex-col border border-line bg-surface p-8">
            <h3 class="text-[1.75rem] leading-tight">{{ pkg.name }}</h3>
            <p class="mt-4 font-mono text-3xl text-accent">
              <template v-if="pkg.price">{{ pkg.price }}</template>
              <template v-else-if="pkg.priceFrom"><span class="text-base text-muted">from</span> {{ pkg.priceFrom }}</template>
            </p>
            <ul class="mt-6 flex-1 space-y-2">
              <li v-for="feature in pkg.features" :key="feature" class="flex gap-3">
                <svg class="mt-1.5 shrink-0 text-accent" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                {{ feature }}
              </li>
            </ul>
            <NuxtLink to="/contact/" class="btn-outline mt-8">Ask about this</NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section v-if="service.featureWide" class="border-t border-line">
      <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <NuxtImg
          :src="service.featureWide.image.src"
          :alt="service.featureWide.image.alt"
          sizes="sm:100vw md:50vw lg:528px"
          loading="lazy"
          :style="aspectStyle(service.featureWide.image.width, service.featureWide.image.height)"
          class="w-full border border-line object-cover"
        />
        <div>
          <h2 class="text-5xl leading-[1.05]">{{ service.featureWide.text.title }}</h2>
          <p class="mt-4 text-muted">{{ service.featureWide.text.body }}</p>
          <NuxtLink :to="service.featureWide.text.button.link" class="btn-primary mt-8">
            {{ service.featureWide.text.button.text }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="border-t border-line">
      <div class="mx-auto max-w-6xl px-6 py-20">
        <p class="eyebrow mb-6">More services</p>
        <ul class="border-t border-line">
          <li v-for="other in data?.others" :key="other.path">
            <NuxtLink :to="withSlash(other.path)" class="group flex flex-wrap items-baseline justify-between gap-4 border-b border-line py-6">
              <span class="font-display text-3xl group-hover:text-accent">{{ other.shortTitle }}</span>
              <span class="font-mono text-sm text-muted">View →</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <GetInTouch />
  </div>
</template>
