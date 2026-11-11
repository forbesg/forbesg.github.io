<script setup lang="ts">
  const nav = [
    { to: "/services/", label: "Services" },
    { to: "/portfolio/", label: "Work" },
    { to: "/about/", label: "About" },
    { to: "/blog/", label: "Blog" },
    { to: "/meet-the-team/", label: "Meet the team" },
    { to: "/contact/", label: "Contact" },
  ];

  const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-line">
    <div class="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
      <div>
        <p class="font-display text-[1.75rem] leading-none">Forbes Gray</p>
        <p class="mt-3 text-muted text-base uppercase">
          Freelance web developer.<br /><span
            class="font-display italic text-accent text-lg"
            >W<span class="lowercase">ithout the agency price tag</span></span
          >.
        </p>
      </div>
      <nav aria-label="Footer">
        <h2 class="eyebrow mb-4">Pages</h2>
        <ul class="grid grid-cols-2 gap-x-6 gap-y-2">
          <li v-for="link in nav" :key="link.to">
            <NuxtLink :to="link.to" class="hover:text-accent">{{
              link.label
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div>
        <h2 class="eyebrow mb-4">Find me</h2>
        <address class="not-italic text-muted text-base/6">
          Newhaven, <br />Edinburgh. <br />EH6 4JX<br />
          <a
            :href="`tel:${PHONE.international}`"
            class="block mt-2 hover:text-accent"
            >t: {{ PHONE.display }}</a
          >
          <a :href="`mailto:${EMAIL}`" class="hover:text-accent"
            >e: {{ EMAIL }}</a
          >
        </address>
        <SocialLinks class="mt-4" />
      </div>
    </div>
    <div class="border-t border-line">
      <p
        class="mx-auto max-w-6xl px-6 py-6 font-mono text-[0.8125rem] text-muted"
      >
        &copy; {{ year }} Forbes Gray &middot; Edinburgh
      </p>
    </div>
  </footer>
</template>
