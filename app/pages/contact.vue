<script setup lang="ts">
  // Forminit (forminit.com) receives the form; it's the same form ID the site
  // used on getform.io. Its Turnstile secret key goes in the form's settings
  // (CAPTCHA → Cloudflare Turnstile), so it checks each token; a missing or
  // invalid one sends the submission to the spam folder.
  const FORMINIT_FORM_ID = "ce537464-4e11-4163-b480-35d3fd2b7305";
  // Cloudflare Turnstile widget (Cloudflare dashboard → Turnstile). Locally,
  // Cloudflare's test key always passes, so the form works on localhost.
  const TURNSTILE_SITE_KEY = import.meta.dev
    ? "1x00000000000000000000AA"
    : "0x4AAAAAAF88PwaVTFRMDQde";

  // Ad and campaign parameters passed through to Forminit
  const TRACKING_PARAMS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
    "msclkid",
  ];

  usePageSeo({
    title: "Contact | Web Design Edinburgh",
    description:
      "Get a fixed-price quote for your website from Forbes Gray, freelance web designer and developer in Edinburgh. Free first chat, prices from £895.",
  });

  // Turnstile's script is added once the page is interactive, and the widget
  // rendered when it has loaded. (Its ?onload= callback option can fire
  // before the page has hydrated and set the callback.)
  const TURNSTILE_SRC =
    "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

  useHead({
    link: [{ rel: "preconnect", href: "https://challenges.cloudflare.com" }],
  });

  function loadTurnstile() {
    if (window.turnstile) return Promise.resolve();
    return new Promise<void>((resolve, reject) => {
      let script = document.querySelector<HTMLScriptElement>(
        `script[src="${TURNSTILE_SRC}"]`,
      );
      if (!script) {
        script = document.createElement("script");
        script.src = TURNSTILE_SRC;
        script.async = true;
        document.head.appendChild(script);
      }
      script.addEventListener("load", () => resolve(), { once: true });
      script.addEventListener(
        "error",
        () => reject(new Error("Turnstile failed to load")),
        { once: true },
      );
    });
  }

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

  // Turnstile runs its check when the form is sent (execution: "execute"), so
  // the token is fresh, and only shows itself if the visitor needs to click.
  const turnstileEl = ref<HTMLElement>();
  let widgetId: string | undefined;
  let pending:
    | { resolve: (token: string) => void; reject: (e: Error) => void }
    | undefined;

  function renderTurnstile() {
    if (!window.turnstile || !turnstileEl.value || widgetId) return;
    widgetId = window.turnstile.render(turnstileEl.value, {
      sitekey: TURNSTILE_SITE_KEY,
      action: "contact",
      appearance: "interaction-only",
      execution: "execute",
      theme: "auto",
      callback: (token) => pending?.resolve(token),
      "error-callback": (code) =>
        pending?.reject(new Error(`Turnstile error ${code}`)),
      "timeout-callback": () =>
        pending?.reject(new Error("Turnstile timed out")),
    });
  }

  onMounted(() => {
    loadTurnstile().then(renderTurnstile, console.error);
  });

  onBeforeUnmount(() => {
    if (widgetId) window.turnstile?.remove(widgetId);
    widgetId = undefined;
  });

  function getToken() {
    return new Promise<string>((resolve, reject) => {
      if (!window.turnstile || !widgetId)
        return reject(new Error("Turnstile not loaded"));
      pending = { resolve, reject };
      window.turnstile.execute(widgetId);
    }).finally(() => (pending = undefined));
  }

  // After sending, bring the thank-you message to the middle of the screen
  // (the form it replaces is much taller, so it can end up out of view) and
  // move focus to it for keyboard and screen reader users
  const thanksEl = ref<HTMLElement>();
  async function showThanks() {
    await nextTick();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    thanksEl.value?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
    thanksEl.value?.focus({ preventScroll: true });
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
      // The form's existing field names (from its getform.io days), so new
      // submissions line up with the old ones in Forminit
      const body = new FormData();
      body.set("name", form.name.trim());
      body.set("email", form.email.trim());
      body.set("phone_number", form.phone_number.trim());
      body.set("message", form.message.trim());
      body.set("_gotcha", form._gotcha);

      // Campaign parameters, only when the visitor arrived with them
      const params = new URLSearchParams(window.location.search);
      for (const param of TRACKING_PARAMS) {
        const value = params.get(param);
        if (value) body.set(param, value);
      }

      body.set("cf-turnstile-response", await getToken());

      const response = await fetch(
        `https://forminit.com/f/${FORMINIT_FORM_ID}`,
        { method: "POST", body, headers: { Accept: "application/json" } },
      );
      // Forminit can report errors with a 200 status, so check `success`
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        // Forminit allows one submission every 5 seconds from each visitor
        if (response.status === 429 || result.code === 429) {
          status.value = "idle";
          error.value =
            "Please wait a few seconds before sending another message.";
          return;
        }
        throw new Error(
          `Forminit responded ${response.status} ${result.error ?? ""}`,
        );
      }
      // The form (and the widget inside it) is replaced by the thank-you message
      if (widgetId) window.turnstile?.remove(widgetId);
      widgetId = undefined;
      status.value = "sent";
      showThanks();
    } catch (e) {
      console.error(e);
      status.value = "idle";
      error.value = `There was a problem sending your message. Please try again, or email ${EMAIL}.`;
    } finally {
      // Tokens can only be used once: get a fresh one ready for another try
      if (status.value !== "sent" && widgetId)
        window.turnstile?.reset(widgetId);
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
          ref="thanksEl"
          role="status"
          tabindex="-1"
          class="border border-line bg-surface p-10 focus:outline-none"
        >
          <p class="font-display text-5xl leading-none">
            Thank you<span class="inline-block pl-1 text-accent font-bold"
              >.</span
            >
          </p>
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

          <!-- Turnstile: empty unless Cloudflare needs the visitor to click -->
          <div ref="turnstileEl" />

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
