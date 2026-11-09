<script setup lang="ts">
const { data: projects } = await useAsyncData('portfolio', () =>
  queryCollection('projects')
    .select('path', 'title', 'description', 'image', 'imageAlt', 'category', 'displayOrder')
    .order('displayOrder', 'ASC')
    .all(),
)

const categories = computed(() =>
  (Object.keys(PORTFOLIO_CATEGORIES) as PortfolioCategory[]).map(key => ({
    key,
    ...PORTFOLIO_CATEGORIES[key],
    projects: (projects.value ?? []).filter(p => p.category === key).slice(0, 3),
  })),
)

usePageSeo({
  title: 'Web Developer Portfolio | Freelance Web Developer Edinburgh',
  description: 'A small selection of recent projects, from simple static brochure websites to web-based mobile applications and web applications.',
})
</script>

<template>
  <div>
    <PageHeader
      title="Portfolio"
      subhead="A small selection of recent projects, from simple static brochure websites to web-based mobile applications and web applications."
      :breadcrumbs="[{ label: 'Portfolio' }]"
    />
    <section
      v-for="category in categories"
      :key="category.key"
      class="mx-auto max-w-6xl px-4 py-12"
    >
      <h2 class="text-3xl font-bold text-brand-900">{{ category.title }}</h2>
      <div class="mt-8 grid gap-6 md:grid-cols-3">
        <ContentCard
          v-for="project in category.projects"
          :key="project.path"
          :to="withSlash(project.path)"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :image-alt="project.imageAlt"
          link-text="View"
        />
      </div>
      <NuxtLink :to="`/portfolio/${category.key}/`" class="mt-6 inline-block font-semibold text-brand-600 hover:underline">
        View more {{ category.single }} Projects &rarr;
      </NuxtLink>
    </section>
    <GetInTouch />
  </div>
</template>
