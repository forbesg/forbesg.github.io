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
</script>

<template>
  <div v-if="member">
    <div class="mx-auto max-w-6xl px-4 pt-10">
      <AppBreadcrumbs :items="[{ label: 'Meet The Team', to: '/meet-the-team/' }, { label: member.name }]" />
    </div>
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2">
      <NuxtImg
        :src="member.image"
        :alt="member.imageAlt"
        width="600"
        height="600"
        sizes="100vw md:50vw"
        class="aspect-square w-full rounded-lg object-cover"
        preload
      />
      <div>
        <h1 class="text-4xl font-bold text-brand-900">{{ member.name }}</h1>
        <p class="mt-2 text-lg text-brand-700">{{ member.position }}</p>
        <a
          v-if="member.twitter"
          :href="`https://twitter.com/${member.twitter.replace('@', '')}`"
          target="_blank"
          rel="noopener"
          class="mt-2 inline-block text-brand-600 hover:underline"
        >{{ member.twitter }}</a>
        <ContentRenderer :value="member" class="prose prose-slate mt-6 max-w-none" />
        <section v-if="member.favoriteFoods.length" class="mt-8">
          <h2 class="text-xl font-bold text-brand-900">Favourite Foods</h2>
          <ul class="mt-2 list-disc pl-5">
            <li v-for="food in member.favoriteFoods" :key="food">{{ food }}</li>
          </ul>
        </section>
        <section v-if="member.interests.length" class="mt-8">
          <h2 class="text-xl font-bold text-brand-900">Interests</h2>
          <ul class="mt-2 list-disc pl-5">
            <li v-for="interest in member.interests" :key="interest">{{ interest }}</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
