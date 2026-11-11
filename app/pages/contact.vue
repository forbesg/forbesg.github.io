<script setup lang="ts">
  // Same getform.io endpoint and reCAPTCHA v3 key as the Gridsome site
  const GETFORM_URL =
    "https://getform.io/f/ce537464-4e11-4163-b480-35d3fd2b7305";
  const RECAPTCHA_KEY = "6LfAtbQZAAAAALIFif4qLLmJc-Khmg4iKxMm6F6G";

  usePageSeo({
    title: "Contact | Web Design Edinburgh",
    description:
      "Get a fixed-price quote for your website from Forbes Gray, freelance web designer and developer in Edinburgh. Free first chat, prices from £895.",
  });

  useHead({
    script: [
      {
        src: `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`,
        defer: true,
      },
    ],
  });

  const form = reactive({
    name: "",
    email: "",
    phone_number: "",
    message: "",
    _gotcha: "",
  });
  const status = ref<"idle" | "sending" | "sent">("idle");
  const error = ref("");
  const touched = ref(false);

  const missing = computed(() => ({
    name: !form.name.trim(),
    email: !form.email.trim(),
    message: !form.message.trim(),
  }));

  function getToken() {
    return new Promise<string>((resolve, reject) => {
      const grecaptcha = window.grecaptcha;
      if (!grecaptcha) return reject(new Error("reCAPTCHA not loaded"));
      grecaptcha.ready(() =>
        grecaptcha
          .execute(RECAPTCHA_KEY, { action: "contact" })
          .then(resolve, reject),
      );
    });
  }

  async function submit() {
    touched.value = true;
    error.value = "";

    if (Object.values(missing.value).some(Boolean)) {
      error.value = "Please complete all the required fields above.";
      return;
    }
    if (/<a\s+href=/i.test(form.message)) {
      error.value = "Your message must not contain any HTML links.";
      return;
    }

    status.value = "sending";
    try {
      const body = new FormData();
      for (const [key, value] of Object.entries(form)) body.append(key, value);
      body.append("g-recaptcha-response", await getToken());

      const response = await fetch(GETFORM_URL, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`getform responded ${response.status}`);
      status.value = "sent";
    } catch {
      status.value = "idle";
      error.value =
        "There was a problem sending your message. Please try again.";
    }
  }

  const inputClass =
    "mt-2 w-full border border-line bg-surface px-4 py-3 text-ink focus:border-accent focus:outline-none";
</script>

<template>
  <div>
    <PageHeader
      title="Got a project in mind?"
      eyebrow="Contact"
      subhead="Tell me what you need and I'll come back with honest advice and a fixed price. No agency fees, no hard sell."
      :breadcrumbs="[{ label: 'Contact' }]"
    />
    <div
      class="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[minmax(0,1fr)_18rem]"
    >
      <div>
        <div
          v-if="status === 'sent'"
          role="status"
          class="border border-line bg-surface p-10"
        >
          <p class="font-display text-5xl leading-none">Thank you.</p>
          <p class="mt-4 text-lg">Your message has been sent.</p>
          <p class="mt-2 text-muted">
            I'll be in touch shortly about your enquiry.
          </p>
        </div>

        <form v-else novalidate class="space-y-6" @submit.prevent="submit">
          <input
            v-model="form._gotcha"
            type="text"
            name="_gotcha"
            tabindex="-1"
            autocomplete="off"
            class="hidden"
            aria-hidden="true"
          />

          <div class="grid gap-6 sm:grid-cols-2">
            <div>
              <label for="name" class="font-medium"
                >Name
                <span class="text-accent" aria-hidden="true">*</span></label
              >
              <input
                id="name"
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                required
                :aria-invalid="touched && missing.name"
                :class="[
                  inputClass,
                  touched && missing.name && 'border-red-600',
                ]"
              />
            </div>
            <div>
              <label for="email" class="font-medium"
                >Email address
                <span class="text-accent" aria-hidden="true">*</span></label
              >
              <input
                id="email"
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                required
                :aria-invalid="touched && missing.email"
                :class="[
                  inputClass,
                  touched && missing.email && 'border-red-600',
                ]"
              />
            </div>
          </div>
          <div>
            <label for="phone_number" class="font-medium"
              >Phone number <span class="text-muted">(optional)</span></label
            >
            <input
              id="phone_number"
              v-model="form.phone_number"
              type="tel"
              name="phone_number"
              autocomplete="tel"
              :class="inputClass"
            />
          </div>
          <div>
            <label for="message" class="font-medium"
              >What do you need?
              <span class="text-accent" aria-hidden="true">*</span></label
            >
            <textarea
              id="message"
              v-model="form.message"
              name="message"
              rows="8"
              required
              :aria-invalid="touched && missing.message"
              :class="[
                inputClass,
                touched && missing.message && 'border-red-600',
              ]"
            />
          </div>

          <p
            v-if="error"
            role="alert"
            class="font-medium text-red-700 dark:text-red-400"
          >
            {{ error }}
          </p>

          <button
            type="submit"
            :disabled="status === 'sending'"
            class="btn-primary cursor-pointer disabled:opacity-60"
          >
            {{ status === "sending" ? "Sending…" : "Send message" }}
          </button>
          <p class="text-sm text-muted">
            This site is protected by reCAPTCHA and the Google
            <a
              href="https://policies.google.com/privacy"
              class="underline hover:text-accent"
              >Privacy Policy</a
            >
            and
            <a
              href="https://policies.google.com/terms"
              class="underline hover:text-accent"
              >Terms of Service</a
            >
            apply.
          </p>
        </form>
      </div>

      <aside>
        <NuxtImg
          src="/images/profile.jpg"
          alt="Forbes Gray"
          width="288"
          height="288"
          fetchpriority="high"
          preload
          class="aspect-square w-full max-w-72 border border-line object-cover"
        />
        <p class="mt-4 font-display text-3xl">Forbes Gray</p>
        <p class="text-muted uppercase text-xs tracking-widest">
          Freelance web developer
        </p>
        <address class="mt-6 not-italic text-muted text-base">
          Newhaven,<br />Edinburgh. <br />EH6 4JX<br />
          <a
            :href="`tel:${PHONE.international}`"
            class="mt-2 inline-block hover:text-accent"
            >t: {{ PHONE.display }}</a
          ><br />
          <a :href="`mailto:${EMAIL}`" class="break-all hover:text-accent"
            >e: {{ EMAIL }}</a
          >
        </address>
        <SocialLinks class="mt-6" />
      </aside>
    </div>
  </div>
</template>
