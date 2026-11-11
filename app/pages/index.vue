<script setup lang="ts">
  const { data } = await useAsyncData("home", async () => {
    const [about, services, projects] = await Promise.all([
      queryCollection("pages").path("/home").first(),
      queryCollection("services")
        .select("path", "shortTitle", "summary", "packages")
        .order("path", "ASC")
        .all(),
      queryCollection("projects")
        .where("featured", "=", true)
        .order("displayOrder", "ASC")
        .all(),
    ]);
    return { about, services, projects };
  });

  const serviceRows = computed(() =>
    (data.value?.services ?? []).map((s, i) => ({
      num: String(i + 1).padStart(2, "0"),
      to: withSlash(s.path),
      title: s.shortTitle,
      summary: s.summary,
      price: s.packages ? fromPrice(s.packages) : "N/A",
    })),
  );

  usePageSeo({
    title: "Web Design Edinburgh | Freelance Website Developer",
    description: data.value?.about?.description,
  });
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative isolate overflow-hidden">
      <div class="dot-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div class="mx-auto max-w-6xl px-6 pt-24 pb-24 md:pt-32 md:pb-28">
        <!-- The small keyword line is part of the H1, so the heading says what
             and where, while the big strapline still does the selling -->
        <h1>
          <span class="eyebrow mb-8 block leading-normal"
            >Freelance web design · Edinburgh</span
          >
          <!-- keeps a space between the two lines in the heading's text -->
          {{ " " }}
          <span
            class="block max-w-5xl text-[4rem] leading-[0.95] tracking-[-0.02em] sm:text-8xl lg:text-[7.5rem]"
          >
            Websites that work as hard as <em class="text-accent">you do.</em>
          </span>
        </h1>
        <p class="mt-10 max-w-2xl text-[1.375rem] leading-normal">
          Fast, good-looking websites for Scottish businesses,
          <em class="font-display text-[1.75rem] text-accent"
            >without the agency price tag.</em
          >
        </p>
        <p class="mt-4 max-w-xl text-lg text-muted">
          Fixed prices from £895, a year's free hosting, and no plugins to keep updating.
        </p>
        <div class="mt-10 flex flex-wrap gap-4">
          <NuxtLink to="/contact/" class="btn-primary"
            >Start a project</NuxtLink
          >
          <NuxtLink to="/services/" class="btn-outline">See prices</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="border-t border-line" aria-labelledby="services-heading">
      <div class="mx-auto max-w-6xl px-6 py-24">
        <div class="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="services-heading" class="text-6xl leading-none">
            What I build
          </h2>
          <p class="font-mono text-[0.8125rem] text-muted">
            Fixed prices · No agency fees
          </p>
        </div>
        <ul class="border-t border-line">
          <li v-for="row in serviceRows" :key="row.to + row.num">
            <NuxtLink
              :to="row.to"
              class="group grid grid-cols-[3rem_minmax(0,1fr)] items-baseline gap-x-6 gap-y-2 border-b border-line py-8 md:grid-cols-[4.5rem_minmax(0,1fr)_12rem]"
            >
              <span class="font-mono text-sm text-accent">{{ row.num }}</span>
              <span>
                <span
                  class="block font-display text-4xl leading-tight group-hover:text-accent"
                  >{{ row.title }}</span
                >
                <span class="mt-2 block max-w-2xl text-muted">{{
                  row.summary
                }}</span>
              </span>
              <span
                class="col-start-2 font-mono text-[0.9375rem] md:col-start-auto md:text-right"
                >{{ row.price }}</span
              >
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Work -->
    <section class="bg-soft" aria-labelledby="work-heading">
      <div class="mx-auto max-w-6xl px-6 py-24">
        <h2 id="work-heading" class="mb-12 text-6xl leading-none">
          Recent work
        </h2>
        <div class="grid gap-x-8 gap-y-20 md:grid-cols-2 md:gap-y-12">
          <ContentCard
            v-for="project in data?.projects"
            :key="project.path"
            :to="withSlash(project.path)"
            :title="project.title"
            :label="PORTFOLIO_CATEGORIES[project.category].single"
            :image="project.mockup ?? project.image"
            :image-alt="project.imageAlt"
            :frameless="!!project.mockup"
          />
        </div>
        <NuxtLink to="/portfolio/" class="link-mono mt-12 inline-block"
          >All projects →</NuxtLink
        >
      </div>
    </section>

    <!-- Process -->
    <ProcessSteps />

    <!-- About -->
    <section
      v-if="data?.about"
      class="border-t border-line"
      aria-labelledby="about-heading"
    >
      <div
        class="mx-auto flex max-w-6xl flex-wrap items-center gap-16 px-6 py-24"
      >
        <NuxtImg
          src="/images/forbes-up-arthurs-seat.jpg"
          alt="Forbes Gray at the top of Arthur's Seat, Edinburgh"
          width="440"
          height="440"
          sizes="440px"
          loading="lazy"
          class="aspect-square w-full max-w-110 flex-[1_1_20rem] object-cover"
        />
        <div class="min-w-0 flex-[999_1_26rem]">
          <p class="eyebrow mb-4">{{ data.about.subhead }}</p>
          <h2 id="about-heading" class="text-[3.5rem] leading-[1.05]">
            One developer. <em class="text-accent">No account managers.</em>
          </h2>
          <ContentRenderer
            :value="data.about"
            class="mt-6 space-y-4 text-muted"
          />
          <NuxtLink to="/about/" class="link-mono mt-6 inline-block"
            >More about me →</NuxtLink
          >
        </div>
      </div>
    </section>

    <GetInTouch />
  </div>
</template>
