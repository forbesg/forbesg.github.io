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
    <PageHeader title="Meet The Team" :breadcrumbs="[{ label: 'Meet The Team' }]" />
    <section class="mx-auto grid max-w-4xl gap-6 px-4 py-12 sm:grid-cols-2">
      <ContentCard
        v-for="member in team"
        :key="member.path"
        :to="withSlash(member.path)"
        :title="member.name"
        :description="member.position"
        :image="member.image"
        :image-alt="member.imageAlt"
        :link-text="`View ${member.name}`"
      />
    </section>
    <GetInTouch />
  </div>
</template>
