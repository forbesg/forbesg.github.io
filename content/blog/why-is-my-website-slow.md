---
title: Why Is My Website Slow? (And How to Fix It)
subhead: The usual culprits, how to test your site, and what to do about it
description: "Why is your business website slow? How to test it for free, the most common causes, from oversized images to plugins, and how to fix them. Advice from an Edinburgh web developer."
tags:
- website-speed
image: /images/articles/slow-website-speed.jpg
imageAlt: A laptop with a loading bar stuck at 20 percent
imageWidth: 1600
imageHeight: 1067
date: 2026-11-20T00:00:00
author: forbes-gray
---

A slow website costs you customers. Most people looking for a local business are on a
phone, often on the move, and if your page takes too long to appear they'll go back to
Google and tap the next result. Speed also feeds into how Google ranks your pages.

The good news is that most slow sites are slow for the same handful of reasons, and
most of them can be fixed.

## First, measure it

Don't go by how the site feels on your office broadband. Test it the way your customers
see it, on a phone.

Google's free [PageSpeed Insights](https://pagespeed.web.dev/) tool tests any page and
gives it a score out of 100 for mobile and desktop. Underneath the score, it lists what's
slowing the page down. It also reports three measurements Google calls Core Web Vitals:

- **Largest Contentful Paint (LCP):** how long the main content takes to appear. Google
  counts 2.5 seconds or less as good.
- **Interaction to Next Paint (INP):** how quickly the page responds when someone taps
  or clicks. 200 milliseconds or less is good.
- **Cumulative Layout Shift (CLS):** how much the page jumps around as it loads, like a
  button moving just as you go to tap it. 0.1 or less is good.

Test your home page and one or two of your most important pages, such as your main
service page. Write the scores down, so you can see whether your changes help.

## The usual culprits

### Oversized images

This is the most common cause I see. A photo straight off a phone or camera can be
several megabytes, and if it's uploaded as-is, every visitor downloads all of it, even
to see it at the size of a postage stamp.

Images should be resized to the size they're shown at, saved in a modern format like
WebP or AVIF, and loaded only when they're about to scroll into view.

### Too many plugins

On WordPress especially, every plugin can add its own code to every page, whether that
page needs it or not. Over the years, plugins pile up: a slider here, a social feed
there, a form builder, a page builder. Each one adds a little weight.

Go through your plugins and remove anything you don't use. Often a few lines of code can
replace a whole plugin.

### Third-party scripts

Chat widgets, social media feeds, embedded videos, booking widgets, tracking and
advertising tags all load code from other companies' servers. Each one adds to the
download and can hold up the rest of the page.

Ask whether each one earns its place. Some can be loaded only when they're needed, such
as a video that only loads when someone presses play.

### Heavy themes and page builders

Themes that can do everything usually load everything, on every page. Page builders
make editing easy, but they often add far more code than the page needs.

### Web fonts

Custom fonts make a site look distinctive, but loading several weights and styles adds
up. Stick to the fonts and weights you really use, and load them so text appears
straight away rather than waiting for the font.

### Slow or overloaded hosting

If your server takes a long time to respond, everything else waits for it. Cheap shared
hosting, no caching, and sites that build every page from a database on every visit can
all add to the delay before anything appears at all.

## What you can fix yourself

- **Resize and compress your images** before you upload them.
- **Remove plugins and widgets** you don't use.
- **Turn on caching**, if your platform offers it.
- **Check your hosting plan**, and whether your site has outgrown it.

## When it's time for help

If you've done the easy things and your scores are still low, the problem is usually
deeper: the theme, the way the site is built, or the platform itself. That's when it's
worth getting a developer to look.

Sometimes a tune-up is all you need. Other times, the honest answer is that the platform
is the problem, and moving to a [static website](/blog/wordpress-vs-a-static-website-for-a-small-business/)
will make a bigger difference than any amount of tweaking. Static sites are built in
advance and served as ready-made pages, so they're fast almost by default.
[Jeffrey Decoration](/portfolio/website/jeffrey-decoration/), a painter and decorator in
East Lothian, is one example: you can see its Lighthouse results in the case study.

## Let me test your site

My [Speed Tune-up](/services/website-rescue/) starts with a full Lighthouse and Core Web
Vitals report, then deals with the images, fonts, scripts and plugins that are slowing
you down, with before and after results so you can see the difference.

I work with businesses across Edinburgh, Leith and the Lothians.
[Send me your web address](/contact/) and I'll tell you what I'd fix.
