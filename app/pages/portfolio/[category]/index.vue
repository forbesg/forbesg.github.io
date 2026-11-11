<script setup lang="ts">
const route = useRoute()
const category = route.params.category

if (!isPortfolioCategory(category)) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

const info = PORTFOLIO_CATEGORIES[category]

const { data: projects } = await useAsyncData(`portfolio-${category}`, () =>
  queryCollection('projects')
    .where('category', '=', category)
    .select('path', 'title', 'subhead', 'description', 'image', 'mockup', 'imageAlt', 'displayOrder')
    .order('displayOrder', 'ASC')
    .all(),
)

usePageSeo({
  title: `${info.title} | Portfolio`,
  description: `${info.single} projects by Forbes Gray, freelance web developer in Edinburgh.`,
})

if (info.archived) {
  useRobotsRule('noindex, follow')
}
</script>

<template>
  <div>
    <PageHeader
      :title="info.title"
      :eyebrow="info.archived ? 'Portfolio · Archive' : 'Portfolio'"
      :subhead="info.note"
      :breadcrumbs="[{ label: 'Work', to: '/portfolio/' }, { label: info.title }]"
    />
    <section class="mx-auto grid max-w-6xl gap-x-8 gap-y-14 px-6 py-20 md:grid-cols-2">
      <ContentCard
        :heading-level="2"
        v-for="(project, j) in projects"
        :key="project.path"
        :eager="j < 2"
        :to="withSlash(project.path)"
        :title="project.title"
        :label="project.subhead"
        :description="project.description"
        :image="project.mockup ?? project.image"
        :image-alt="project.imageAlt"
        :frameless="!!project.mockup"
      />
    </section>
    <GetInTouch />
  </div>
</template>
