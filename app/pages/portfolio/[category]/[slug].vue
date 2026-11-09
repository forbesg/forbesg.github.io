<script setup lang="ts">
const route = useRoute()
const path = contentPath(route.path)

const { data: project } = await useAsyncData(`project-${path}`, () =>
  queryCollection('projects').path(path).first(),
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

const category = PORTFOLIO_CATEGORIES[project.value.category]

usePageSeo({
  title: `${project.value.title} | ${category.single}`,
  description: project.value.description,
  image: project.value.image,
  imageAlt: project.value.imageAlt,
})
</script>

<template>
  <div v-if="project">
    <PageHeader
      :title="project.title"
      :subhead="project.subhead"
      :breadcrumbs="[
        { label: 'Portfolio', to: '/portfolio/' },
        { label: category.title, to: `/portfolio/${project.category}/` },
        { label: project.title },
      ]"
    />
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_320px]">
      <article>
        <ContentRenderer :value="project" class="prose prose-slate max-w-none" />
        <ImageGallery v-if="project.carousel?.length" :images="project.carousel" class="mt-10" />
      </article>
      <aside class="lg:sticky lg:top-6 lg:self-start">
        <NuxtImg :src="project.image" :alt="project.imageAlt" sizes="100vw lg:320px" class="w-full rounded-lg" />
        <h2 class="mt-6 text-lg font-bold text-brand-900">Technologies Used</h2>
        <ul class="mt-3 flex flex-wrap gap-1.5">
          <li v-for="tech in project.features" :key="tech" class="rounded bg-brand-50 px-2 py-0.5 text-sm text-brand-700">
            {{ tech }}
          </li>
        </ul>
        <div class="mt-6 flex flex-col gap-2">
          <a v-if="project.url" :href="project.url" target="_blank" rel="noopener" class="font-semibold text-brand-600 hover:underline">
            Visit {{ project.title }} &nearr;
          </a>
          <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener" class="font-semibold text-brand-600 hover:underline">
            View Git Repo &nearr;
          </a>
        </div>
      </aside>
    </div>
  </div>
</template>
