<script setup lang="ts">
const { data } = await useAsyncData('home', async () => {
  const [intro, services, projects] = await Promise.all([
    queryCollection('pages').path('/home').first(),
    queryCollection('services').order('path', 'ASC').all(),
    queryCollection('projects').where('featured', '=', true).order('displayOrder', 'ASC').all(),
  ])
  return { intro, services, projects }
})

usePageSeo({
  title: 'Freelance Web Developer Edinburgh',
  description: data.value?.intro?.description,
})
</script>

<template>
  <div>
    <section class="bg-brand-50">
      <div class="mx-auto max-w-6xl px-4 py-20">
        <h1 class="text-4xl font-bold text-brand-900 sm:text-5xl">
          Freelance Website Developer | <span class="text-brand-600">Edinburgh</span>
        </h1>
        <p class="mt-4 text-xl">Website &amp; Web Application, Design &amp; Development</p>
        <p class="mt-2 font-semibold text-brand-700">JAMStack | CMS | E-Commerce</p>
        <div class="mt-8 flex flex-wrap items-center gap-4">
          <NuxtLink to="/portfolio/" class="rounded bg-brand-600 px-5 py-2.5 font-semibold text-white hover:bg-brand-700">
            View My Work
          </NuxtLink>
          <NuxtLink to="/services/" class="font-semibold text-brand-600 hover:underline">View My Services &rarr;</NuxtLink>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-3xl font-bold text-brand-900">Website Design &amp; Development in Edinburgh</h2>
      <div class="mt-8 grid gap-6 md:grid-cols-3">
        <ContentCard
          v-for="service in data?.services"
          :key="service.path"
          :to="withSlash(service.path)"
          :title="service.title"
          :subtitle="service.subtitle"
          :description="service.description"
          :image="service.bannerImage.src"
          :image-alt="service.bannerImage.alt"
          :link-text="service.title"
        />
      </div>
    </section>

    <section class="bg-slate-50">
      <div class="mx-auto max-w-6xl px-4 py-16">
        <h2 class="text-3xl font-bold text-brand-900">Recent Website Development Projects</h2>
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <ContentCard
            v-for="project in data?.projects"
            :key="project.path"
            :to="withSlash(project.path)"
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :image-alt="project.imageAlt"
            :tags="project.features"
            :link-text="`More About ${project.title}`"
          />
        </div>
        <NuxtLink to="/portfolio/" class="mt-8 inline-block font-semibold text-brand-600 hover:underline">
          View My Portfolio &rarr;
        </NuxtLink>
      </div>
    </section>

    <section v-if="data?.intro" class="mx-auto max-w-3xl px-4 py-16">
      <h2 class="text-3xl font-bold text-brand-900">{{ data.intro.title }}</h2>
      <p v-if="data.intro.subhead" class="mt-2 text-lg text-brand-700">{{ data.intro.subhead }}</p>
      <ContentRenderer :value="data.intro" class="prose prose-slate mt-6 max-w-none" />
      <NuxtLink to="/about/" class="mt-6 inline-block font-semibold text-brand-600 hover:underline">
        A Little More About Me &rarr;
      </NuxtLink>
    </section>

    <section class="bg-slate-50">
      <div class="mx-auto max-w-3xl px-4 py-16">
        <h2 class="text-3xl font-bold text-brand-900">Digital Marketing &amp; Web Design Agencies</h2>
        <p class="mt-4">
          If you are an agency looking for an extra pair of hands to get your client's project over the
          line, I welcome freelance website development enquiries of all types.
        </p>
        <p class="mt-3">Feel free to send me a message to arrange a conversation about your requirements.</p>
        <NuxtLink to="/contact/" class="mt-6 inline-block font-semibold text-brand-600 hover:underline">
          Send me a message &rarr;
        </NuxtLink>
      </div>
    </section>

    <GetInTouch />
  </div>
</template>
