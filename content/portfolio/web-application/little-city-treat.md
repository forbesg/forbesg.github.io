---
title: Little City Treat
description: "A bespoke booking platform for Little City Treat in Edinburgh and Newcastle: marketing site, customer bookings, a beauty pro app, admin and advance bookings."
subhead: Bespoke Booking Platform
image: /images/projects/web-application/little-city-treat.jpg
mockup: /images/projects/web-application/little-city-treat-mockup.png
imageAlt: Little City Treat - Booking System Web Application
url: https://www.littlecitytreat.com
features:
  - HTML5
  - Tailwind CSS
  - Vue JS
  - Nuxt JS
  - DatoCMS
  - Firebase
  - Firestore
  - Cloud Functions
  - Netlify Functions
  - Progressive Web App
  - Flutter
  - Stripe
  - FreeAgent API
  - ECommerce
category: web-application
displayOrder: 1
featured: true
---

## A Booking Platform for Mobile Hair & Beauty

[Little City Treat](https://www.littlecitytreat.com) brings hair and beauty treatments to
customers' homes, offices and hotels in Edinburgh and Newcastle, delivered by a team of
self-employed beauty professionals. It started in 2020 with a bespoke booking system, and
has grown into a set of connected apps: one for each of the people who use it.

There are plenty of third-party booking systems available, but all of them were a little
too rigid for how Little City Treat works, and tend to feel as though they have been
shoehorned into a site. Building it bespoke meant every part could fit the business.

Everything runs on a shared [Firebase](https://firebase.google.com/) back end: the data
lives in Firestore, and the business logic in Cloud Functions, so each app sees the same
bookings, professionals and availability in real time.

## The Marketing Site

**[littlecitytreat.com](https://www.littlecitytreat.com)** · Nuxt JS, DatoCMS, Firebase Hosting

The public face of the business, built for visibility, discovery and brand awareness. Page
content is managed in [DatoCMS](https://www.datocms.com/), and the site includes dedicated
landing pages for Google Ads campaigns. Customers can also buy gift cards, paid through
[Stripe](https://stripe.com/), to use in the booking system.

## The Booking System

**[book.littlecitytreat.com](https://book.littlecitytreat.com)** · Nuxt JS, Firebase Hosting & Cloud Functions, Stripe

![Mobile Booking Application](/images/projects/web-application/booking-mobile.jpg)

Customers choose their treatments and book by either date or professional, seeing live
availability as they go. It was important that booking be easy to use, fast and secure.

Payment is authorised when the customer books, but only captured on the night of the
appointment, by a scheduled Cloud Function triggered through Pub/Sub. Payment goes
directly to the professional through Stripe, with an application fee taken for the
booking. As a Progressive Web App, the booking system gives customers a native app
experience, including notifications.

## The Pro App

**[pro.littlecitytreat.com](https://pro.littlecitytreat.com)** · Vue JS, Netlify Hosting & Functions

A Progressive Web App for the beauty professionals. They set their own availability, which
feeds straight into the booking system, and manage their calendar and earnings. The app
reads and writes to Firebase, while Netlify Functions handle the connection to Stripe.

Native Android and iOS versions are on the way: a [Flutter](https://flutter.dev/) app
with the same features as the PWA, working alongside it on the same back end.

## The Admin Site

**Vue JS, Netlify Hosting**

Not customer facing: the Little City Treat team's view of the whole system. It pulls in
all of the data from Firestore, so the business can be managed in one place.

## Advance Bookings

**Nuxt JS, Firebase Hosting & Cloud Functions, FreeAgent API** · launching soon

Bookings made well in advance, often for groups of guests, used to be handled entirely
by email, spreadsheets and manual invoices. The new advance booking site
brings the whole process online:

1. The client fills in the services, dates and location (a hotel or Airbnb, for example)
   and adds their guests' details.
2. The team picks up the enquiry, allocates professionals to the job, and adds timings and
   any additional fees.
3. The client is notified to revisit their booking, where they can add the names of their
   guests and upload inspiration photos for hair and makeup.
4. When they're happy, the client confirms on the site. This calls the
   [FreeAgent](https://www.freeagent.com/) accounting API, which creates a deposit invoice
   and sends it to the client, and schedules the final invoice to be sent 7 days before
   the appointment.
5. The admin pages sync with FreeAgent, so the team can see the live payment status of
   every invoice.
6. Once the booking is complete, the team can send the client a review request with one
   click.

Each booking also has its own chat, for simple messaging between the client and the team.

## Built to Grow

Each part is a fast, lightweight front end, with the business logic in serverless
functions rather than on a server to maintain. That has kept running costs low, and made
it straightforward to add new apps, like advance bookings, onto the same back end as the
business has grown.

Little City Treat launched in Edinburgh at the start of 2020 and has since expanded to
Newcastle.
