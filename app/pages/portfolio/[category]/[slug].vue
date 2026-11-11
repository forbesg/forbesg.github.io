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

// Archived work stays on the site but out of search results; links are still followed
if (project.value.archived || category.archived) {
  useRobotsRule('noindex, follow')
}
</script>

<template>
  <div v-if="project">
    <PageHeader
      :title="project.title"
      :eyebrow="project.subhead"
      :subhead="project.description"
      :image="project.mockup ?? project.image"
      :image-alt="project.imageAlt"
      :image-frameless="!!project.mockup"
      :breadcrumbs="[
        { label: 'Work', to: '/portfolio/' },
        { label: category.title, to: `/portfolio/${project.category}/` },
        { label: project.title },
      ]"
    />
    <div class="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <article class="min-w-0">
        <p v-if="category.archived" class="mb-10 border border-dashed border-line px-5 py-4 text-muted">
          <span class="eyebrow mr-2">Archived</span>
          An early project kept for the record. {{ category.note }}
        </p>
        <ContentRenderer :value="project" class="prose prose-site max-w-none" />
        <ImageGallery v-if="project.carousel?.length" :images="project.carousel" class="mt-12" />
      </article>
      <aside class="lg:sticky lg:top-24 lg:self-start">
        <h2 class="eyebrow mb-4">Built with</h2>
        <ul class="flex flex-wrap gap-2 font-mono text-[0.8125rem]">
          <li v-for="tech in project.features" :key="tech" class="border border-line px-2.5 py-1">{{ tech }}</li>
        </ul>
        <div class="mt-8 flex flex-col items-start gap-3">
          <a v-if="project.url" :href="project.url" target="_blank" rel="noopener" class="link-mono">
            Visit the site ↗
          </a>
          <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener" class="link-mono">
            View the code ↗
          </a>
        </div>
      </aside>
    </div>
    <TestimonialsSection :project="project.path" title="What the client says" />

    <GetInTouch title="Want something like this?" />
  </div>
</template>
