<script setup lang="ts">
// Same getform.io endpoint and reCAPTCHA v3 key as the Gridsome site
const GETFORM_URL = 'https://getform.io/f/ce537464-4e11-4163-b480-35d3fd2b7305'
const RECAPTCHA_KEY = '6LfAtbQZAAAAALIFif4qLLmJc-Khmg4iKxMm6F6G'

usePageSeo({
  title: 'Contact | Website Developer Edinburgh',
  description: 'If you\'re looking for a freelance web developer in Scotland please do get in touch.',
})

useHead({
  script: [{ src: `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`, defer: true }],
})

const form = reactive({ name: '', email: '', phone_number: '', message: '', _gotcha: '' })
const status = ref<'idle' | 'sending' | 'sent'>('idle')
const error = ref('')
const touched = ref(false)

const missing = computed(() => ({
  name: !form.name.trim(),
  email: !form.email.trim(),
  message: !form.message.trim(),
}))

function getToken() {
  return new Promise<string>((resolve, reject) => {
    const grecaptcha = window.grecaptcha
    if (!grecaptcha) return reject(new Error('reCAPTCHA not loaded'))
    grecaptcha.ready(() => grecaptcha.execute(RECAPTCHA_KEY, { action: 'contact' }).then(resolve, reject))
  })
}

async function submit() {
  touched.value = true
  error.value = ''

  if (Object.values(missing.value).some(Boolean)) {
    error.value = 'Please complete all the required fields above.'
    return
  }
  if (/<a\s+href=/i.test(form.message)) {
    error.value = 'Your message must not contain any HTML links.'
    return
  }

  status.value = 'sending'
  try {
    const body = new FormData()
    for (const [key, value] of Object.entries(form)) body.append(key, value)
    body.append('g-recaptcha-response', await getToken())

    const response = await fetch(GETFORM_URL, { method: 'POST', body, headers: { Accept: 'application/json' } })
    if (!response.ok) throw new Error(`getform responded ${response.status}`)
    status.value = 'sent'
  }
  catch {
    status.value = 'idle'
    error.value = 'There was a problem sending your message. Please try again.'
  }
}

const inputClass = 'mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300'
</script>

<template>
  <div>
    <PageHeader title="Get in touch" :breadcrumbs="[{ label: 'Contact' }]" />
    <div class="mx-auto grid max-w-6xl gap-12 px-4 py-12 md:grid-cols-[280px_1fr]">
      <aside>
        <NuxtImg src="/images/me.jpg" alt="Forbes Gray" width="280" class="w-full rounded-lg" />
        <h2 class="mt-6 text-lg font-bold text-brand-900">Contact Information</h2>
        <address class="mt-2 not-italic">
          Forbes Gray<br>
          Edinburgh<br>
          EH6 4LB
        </address>
        <div class="mt-4">
          <SocialLinks />
        </div>
      </aside>

      <div>
        <div v-if="status === 'sent'" role="status" class="rounded-lg bg-brand-50 p-8">
          <p class="text-2xl font-bold text-brand-900">Thank you</p>
          <p class="mt-2 text-lg">Your message has been sent.</p>
          <p class="mt-2">I will be in touch shortly regarding your enquiry.</p>
        </div>

        <form v-else novalidate class="space-y-5" @submit.prevent="submit">
          <input v-model="form._gotcha" type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true">

          <div>
            <label for="name" class="font-semibold">Name <span class="text-red-700">*</span></label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              name="name"
              autocomplete="name"
              required
              :aria-invalid="touched && missing.name"
              :class="[inputClass, touched && missing.name && 'border-red-600']"
            >
          </div>
          <div>
            <label for="email" class="font-semibold">Email address <span class="text-red-700">*</span></label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              name="email"
              autocomplete="email"
              required
              :aria-invalid="touched && missing.email"
              :class="[inputClass, touched && missing.email && 'border-red-600']"
            >
          </div>
          <div>
            <label for="phone_number" class="font-semibold">Phone number</label>
            <input id="phone_number" v-model="form.phone_number" type="tel" name="phone_number" autocomplete="tel" :class="inputClass">
          </div>
          <div>
            <label for="message" class="font-semibold">Message <span class="text-red-700">*</span></label>
            <textarea
              id="message"
              v-model="form.message"
              name="message"
              rows="8"
              required
              :aria-invalid="touched && missing.message"
              :class="[inputClass, touched && missing.message && 'border-red-600']"
            />
          </div>

          <p v-if="error" role="alert" class="text-red-700">{{ error }}</p>

          <button
            type="submit"
            :disabled="status === 'sending'"
            class="rounded bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
          >
            {{ status === 'sending' ? 'Sending…' : 'Send' }}
          </button>
          <p class="text-sm text-slate-500">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" class="underline">Privacy Policy</a> and
            <a href="https://policies.google.com/terms" class="underline">Terms of Service</a> apply.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
