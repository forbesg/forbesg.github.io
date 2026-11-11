<script setup lang="ts">
const route = useRoute()
const path = contentPath(route.path)

const { data: member } = await useAsyncData(`team-${path}`, () =>
  queryCollection('team').path(path).first(),
)

if (!member.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

usePageSeo({
  title: `${member.value.name} | Meet The Team`,
  description: member.value.description,
  image: member.value.image,
  imageAlt: member.value.imageAlt,
})

// Own @id, otherwise it merges into the site's business identity
const siteUrl = useSiteUrl()
const personId = `${siteUrl}${withSlash(member.value.path)}#person`

useSchemaOrg([
  defineWebPage({ '@type': 'ProfilePage', 'mainEntity': { '@id': personId } }),
  definePerson({
    '@id': personId,
    'name': member.value.name,
    'jobTitle': member.value.position,
    'image': member.value.image,
    'url': withSlash(member.value.path),
    'sameAs': member.value.links,
    'worksFor': { '@id': `${siteUrl}/#identity` },
  }),
])
</script>

<template>
  <div v-if="member">
    <div class="mx-auto max-w-6xl px-6 pt-10">
      <AppBreadcrumbs :items="[{ label: 'Meet the team', to: '/meet-the-team/' }, { label: member.name }]" />
    </div>
    <div class="mx-auto grid max-w-6xl gap-16 px-6 py-16 md:grid-cols-2">
      <NuxtImg
        :src="member.image"
        :alt="member.imageAlt"
        width="600"
        height="600"
        sizes="sm:100vw md:50vw lg:520px"
        class="aspect-square w-full border border-line object-cover"
        preload
        fetchpriority="high"
      />
      <div>
        <p class="eyebrow mb-4">{{ member.position }}</p>
        <h1 class="text-7xl leading-none">{{ member.name }}</h1>
        <ContentRenderer :value="member" class="prose prose-site mt-8 max-w-none" />
        <div class="mt-10 grid gap-8 sm:grid-cols-2">
          <section v-if="member.favoriteFoods.length">
            <h2 class="eyebrow mb-3">Favourite foods</h2>
            <ul class="space-y-1">
              <li v-for="food in member.favoriteFoods" :key="food">{{ food }}</li>
            </ul>
          </section>
          <section v-if="member.interests.length">
            <h2 class="eyebrow mb-3">Interests</h2>
            <ul class="space-y-1">
              <li v-for="interest in member.interests" :key="interest">{{ interest }}</li>
            </ul>
          </section>
        </div>
        <a
          v-if="member.x"
          :href="`https://x.com/${member.x.replace('@', '')}`"
          target="_blank"
          rel="noopener"
          class="link-mono mt-10 inline-block"
        >{{ member.x }} on X ↗</a>
      </div>
    </div>
  </div>
</template>
