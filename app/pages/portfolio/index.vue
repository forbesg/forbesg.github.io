<script setup lang="ts">
const { data: projects } = await useAsyncData('portfolio', () =>
  queryCollection('projects')
    .select('path', 'title', 'subhead', 'image', 'mockup', 'imageAlt', 'category', 'displayOrder')
    .order('displayOrder', 'ASC')
    .all(),
)

// Each section shows its first PER_SECTION projects (by displayOrder) as one
// row of cards; the rest are on the category page.
const PER_SECTION = 2

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
        <p v-if="category.archived" class="eyebrow mb-4">Archive · Where it all started</p>
        <div class="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h2 :id="`cat-${category.key}`" class="text-6xl leading-none">{{ category.title }}</h2>
          <NuxtLink
            v-if="category.projects.length > PER_SECTION"
            :to="`/portfolio/${category.key}/`"
            class="link-mono"
          >All {{ category.projects.length }} {{ category.plural }} →</NuxtLink>
        </div>
        <p v-if="category.note" class="-mt-6 mb-12 max-w-2xl text-muted">{{ category.note }}</p>
        <div class="grid gap-x-8 gap-y-12 md:grid-cols-2">
          <ContentCard
            v-for="(project, j) in category.projects.slice(0, PER_SECTION)"
            :key="project.path"
            :eager="i === 0 && j < 2"
            :to="withSlash(project.path)"
            :title="project.title"
            :label="project.subhead"
            :image="project.mockup ?? project.image"
            :image-alt="project.imageAlt"
            :frameless="!!project.mockup"
          />
        </div>
      </div>
    </section>
    <GetInTouch />
  </div>
</template>
