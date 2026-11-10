---
title: Server-Rendered Nuxt Websites on Netlify Functions
subhead: Fast pages, live content and no server to manage
description: How a server-side rendered Nuxt website runs on Netlify Functions, when it beats a purely static site, and how caching keeps it fast. With examples from the FNBG and GSD Trade websites.
tags:
- nuxt
- netlify
- ecommerce-sites
image: /images/projects/web-application/gsd-trade-mockup.png
imageAlt: The GSD Trade website, a server-rendered Nuxt site running on Netlify
imageWidth: 1920
imageHeight: 1080
date: 2026-11-10T12:00:00
author: forbes-gray
---

For a long time my answer to "how should we build this website?" was simple: build it
as a fast static site. Every page is generated ahead of time, uploaded to a global
network of servers, and delivered to visitors almost instantly. For a brochure website
that changes once a month, that is still hard to beat.

But not every website is a brochure. Some need to show stock levels that change hourly,
content that depends on who is logged in, or pages that the business wants to publish
the moment they hit save. For those, I now build server-side rendered (SSR) Nuxt
websites that run on Netlify Functions. Two recent projects,
[FNBG Business Telecoms](/portfolio/website/fnbg-ltd/) and the
[GSD Trade](/portfolio/ecommerce/gsd-trade/) wholesale platform, work exactly this way.

## Static vs Server-Rendered, in Plain English

A **static site** is like a printed brochure. Every page is produced in advance, and
everyone gets the same copy. To change anything, you reprint (rebuild) the whole thing.

A **server-rendered site** is more like a member of staff answering the phone. Each
time a page is requested, the server puts it together there and then, using the latest
content and, if needed, details about the person asking.

The difference for visitors is that a server-rendered page is always up to date. The
difference for search engines is nothing at all: both approaches send complete,
ready-to-read HTML, which is exactly what Google wants.

## Where Netlify Functions Come In

Traditionally, server rendering meant renting a server, keeping it patched and secure,
and paying for it around the clock whether anyone visited or not. That overhead is the
main reason small businesses were steered towards static sites in the first place.

Netlify Functions remove that overhead. They are small pieces of server code that only
run when a request comes in, then switch off again. There is no server to look after,
they scale automatically if a page suddenly gets busy, and for most small business
websites the usage sits comfortably within Netlify's free or entry-level plans.

Nuxt makes this almost effortless. Its server engine, Nitro, detects when a site is
being built on Netlify and packages the server-rendering code as a Netlify Function
automatically. Images, scripts and styles are still served straight from Netlify's
global CDN, and only the page rendering itself runs in the function.

## The Best of Both: Hybrid Rendering

The real strength of Nuxt is that you don't have to choose one approach for the whole
site. Each route can be rendered in the way that suits it best:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  routeRules: {
    // Rarely changes: build it once, serve it statically
    '/about/': { prerender: true },
    // Content from the CMS: render on the server, then cache it for an hour
    '/services/**': { isr: 3600 },
    // Personal to each customer: always render fresh, never cache
    '/account/**': { ssr: true, headers: { 'cache-control': 'no-store' } },
  },
})
```

That `isr` rule is the one that makes server rendering feel as fast as a static site.
The first visitor to a page triggers the function, Netlify keeps the result in its
cache, and everyone after that gets the cached copy straight from the CDN until it
expires. It's the same speed as a static site, but content updates appear without
a full rebuild.

## Real Examples

### FNBG Business Telecoms

The [FNBG website](https://www.fnbg.co.uk) is built with Nuxt, Tailwind and DatoCMS.
Pages are rendered on the server from the content in the CMS and then held in
Netlify's cache, so almost every visitor is served a cached page from the CDN rather
than waiting for it to be built. Because the pages are rendered from the CMS rather
than baked into a build, content changes don't depend on rebuilding the whole site.

### GSD Trade

[GSD Trade](https://www.gsdtrade.co.uk) is a trade-only ecommerce platform where
customers log in to an account to shop. Much of what a logged-in customer sees, such as
their account and orders, is specific to them, so it can't be generated once and given
to everyone. Server rendering on Netlify Functions lets those pages be built per
request, talking to the ElasticPath commerce API and DatoCMS behind the scenes, while
public pages like the homepage and product information can still be cached for speed.

## Is It Right for Your Website?

Server rendering on Netlify Functions is a great fit when:

- Your content changes often and you want updates to appear straight away
- Customers log in and see information specific to them
- You have prices, stock or other data that a static build would quickly get out of
  step with
- You have a large catalogue where rebuilding every page for each change becomes slow

A fully static site is still the better choice when:

- The site is small and rarely changes
- You want the absolute simplest setup with the fewest moving parts
- Every visitor sees exactly the same content

There are a couple of trade-offs to be aware of. A function that hasn't run for a while
can take a moment longer to respond the first time (a "cold start"), which is why
caching matters so much. Functions also have a time limit per request, so anything slow,
like generating large reports, is better handled in the background.

## Summary

Server-rendered Nuxt on Netlify Functions gives you the things that used to need a
dedicated server, like live content, logged-in areas and dynamic pricing, without the
cost or upkeep of running one. Combined with sensible caching, the result is a website
that is as fast as a static site, always up to date, and still cheap to host.

If you are weighing up whether your next website should be static or server-rendered,
[get in touch](/contact/) and I'll happily talk through which approach suits your
business.
