<script setup lang="ts">
const { data: projects } = await useAsyncData('portfolio', () =>
  queryCollection('projects')
    .select('path', 'title', 'subhead', 'image', 'imageAlt', 'category', 'displayOrder')
    .order('displayOrder', 'ASC')
    .all(),
)

const categories = computed(() =>
  (Object.keys(PORTFOLIO_CATEGORIES) as PortfolioCategory[]).map(key => ({
    key,
    ...PORTFOLIO_CATEGORIES[key],
    projects: (projects.value ?? []).filter(p => p.category === key),
  })),
)

usePageSeo({
  title: 'Web Developer Portfolio | Freelance Web Developer Edinburgh',
  description: 'A selection of recent projects, from simple static brochure websites to online shops, booking systems and web applications.',
})
</script>

<template>
  <div>
    <PageHeader
      title="Recent work"
      eyebrow="Portfolio"
      subhead="Websites, online shops and web apps for businesses across Edinburgh and beyond."
      :breadcrumbs="[{ label: 'Work' }]"
    />
    <section
      v-for="(category, i) in categories"
      :key="category.key"
      :class="i % 2 ? 'bg-soft' : ''"
      :aria-labelledby="`cat-${category.key}`"
    >
      <div class="mx-auto max-w-6xl px-6 py-20">
        <div class="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h2 :id="`cat-${category.key}`" class="text-6xl leading-none">{{ category.title }}</h2>
          <NuxtLink :to="`/portfolio/${category.key}/`" class="link-mono">All {{ category.title.toLowerCase() }} →</NuxtLink>
        </div>
        <div class="grid gap-x-8 gap-y-12 md:grid-cols-2">
          <ContentCard
            v-for="project in category.projects.slice(0, 4)"
            :key="project.path"
            :to="withSlash(project.path)"
            :title="project.title"
            :label="project.subhead"
            :image="project.image"
            :image-alt="project.imageAlt"
          />
        </div>
      </div>
    </section>
    <GetInTouch />
  </div>
</template>
