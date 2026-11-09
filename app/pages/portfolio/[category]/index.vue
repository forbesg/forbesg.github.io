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
    .select('path', 'title', 'description', 'image', 'imageAlt', 'displayOrder')
    .order('displayOrder', 'ASC')
    .all(),
)

usePageSeo({
  title: `${info.title} | Portfolio`,
  description: `${info.single} projects by Forbes Gray, freelance web developer in Edinburgh.`,
})
</script>

<template>
  <div>
    <PageHeader
      :title="info.title"
      :breadcrumbs="[{ label: 'Portfolio', to: '/portfolio/' }, { label: info.title }]"
    />
    <section class="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-3">
      <ContentCard
        v-for="project in projects"
        :key="project.path"
        :to="withSlash(project.path)"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :image-alt="project.imageAlt"
        link-text="View"
      />
    </section>
    <GetInTouch />
  </div>
</template>
