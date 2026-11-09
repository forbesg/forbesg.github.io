<script setup lang="ts">
const route = useRoute()
const path = contentPath(route.path)

const { data } = await useAsyncData(`service-${path}`, async () => {
  const [service, all] = await Promise.all([
    queryCollection('services').path(path).first(),
    queryCollection('services').select('path', 'title', 'icon').order('path', 'ASC').all(),
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
</script>

<template>
  <div v-if="service">
    <PageHeader
      :title="service.title"
      :subhead="service.subtitle"
      :image="service.bannerImage.src"
      :image-alt="service.bannerImage.alt"
      :breadcrumbs="[{ label: 'Services', to: '/services/' }, { label: service.title }]"
    />

    <section class="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2">
      <ContentRenderer :value="service" class="prose prose-slate max-w-none" />
      <video
        v-if="service.intro?.video"
        :src="service.intro.video.src"
        class="w-full rounded-lg"
        autoplay
        loop
        muted
        playsinline
      />
    </section>

    <section v-if="service.featureColumns.length" class="bg-slate-50">
      <div class="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div v-for="item in service.featureColumns" :key="item.title" class="text-center">
          <img :src="item.image.src" :alt="item.image.alt" class="mx-auto h-24 w-24" loading="lazy">
          <h2 class="mt-4 text-xl font-bold text-brand-900">{{ item.title }}</h2>
          <p class="mt-2">{{ item.content }}</p>
        </div>
      </div>
    </section>

    <section v-if="service.pricing" class="mx-auto max-w-6xl px-4 py-12">
      <h2 class="text-3xl font-bold text-brand-900">{{ service.pricing.title }}</h2>
      <p v-if="service.pricing.introText" class="mt-3 max-w-3xl">{{ service.pricing.introText }}</p>
      <div class="mt-8 grid gap-6 md:grid-cols-3">
        <div v-for="pkg in service.packages" :key="pkg.name" class="rounded-lg border border-slate-200 p-6">
          <h3 class="text-lg font-bold text-brand-900">{{ pkg.name }}</h3>
          <p class="mt-2 text-2xl font-bold text-brand-600">
            <template v-if="pkg.price">{{ pkg.price }}</template>
            <template v-else-if="pkg.priceFrom">from {{ pkg.priceFrom }}</template>
          </p>
          <p class="mt-4 font-semibold">What's included:</p>
          <ul class="mt-2 list-disc space-y-1 pl-5">
            <li v-for="feature in pkg.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section v-if="service.featureWide" class="bg-brand-900 text-brand-50">
      <div class="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2">
        <NuxtImg
          :src="service.featureWide.image.src"
          :alt="service.featureWide.image.alt"
          sizes="100vw md:50vw"
          loading="lazy"
          class="w-full rounded-lg"
        />
        <div>
          <h2 class="text-3xl font-bold">{{ service.featureWide.text.title }}</h2>
          <p class="mt-4">{{ service.featureWide.text.body }}</p>
          <NuxtLink
            :to="service.featureWide.text.button.link"
            class="mt-6 inline-block rounded bg-white px-5 py-2.5 font-semibold text-brand-900"
          >
            {{ service.featureWide.text.button.text }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-12">
      <h2 class="text-2xl font-bold text-brand-900">More Services</h2>
      <ul class="mt-6 grid gap-4 sm:grid-cols-2">
        <li v-for="other in data?.others" :key="other.path">
          <NuxtLink :to="withSlash(other.path)" class="flex items-center gap-4 rounded-lg border border-slate-200 p-4 hover:border-brand-400">
            <img :src="other.icon.src" :alt="other.icon.alt" class="h-12 w-12" loading="lazy">
            <span class="font-semibold">{{ other.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>
