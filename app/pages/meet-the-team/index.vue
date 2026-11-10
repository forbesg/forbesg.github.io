<script setup lang="ts">
const { data: team } = await useAsyncData('team', () =>
  queryCollection('team')
    .select('path', 'name', 'position', 'image', 'imageAlt')
    .order('name', 'ASC')
    .all(),
)

usePageSeo({
  title: 'Meet The Team | Web Developer Edinburgh',
  description: 'The (small) team behind Forbes Gray, freelance web developer in Edinburgh.',
})
</script>

<template>
  <div>
    <PageHeader title="Meet the team (all two of us)" eyebrow="About" :breadcrumbs="[{ label: 'Meet the team' }]" />
    <section class="mx-auto grid max-w-6xl gap-x-8 gap-y-14 px-6 py-20 md:grid-cols-2">
      <ContentCard
        v-for="member in team"
        :key="member.path"
        :to="withSlash(member.path)"
        :title="member.name"
        :label="member.position"
        :image="member.image"
        :image-alt="member.imageAlt"
        aspect="square"
      />
    </section>
    <GetInTouch />
  </div>
</template>
