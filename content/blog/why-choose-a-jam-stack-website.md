---
title: Why Choose A JAMStack Website?
subhead: What are the benefits of a static website
description: We look at how JAMStack websites differ from more traditional CMS based technologies like Drupal, Joomla and WordPress Websites
tags:
- jam-stack
- static-sites
image: /images/articles/html-development.jpg
imageAlt: Static Website written in HTML
imageWidth: 1920
imageHeight: 1278
date: 2021-11-09T12:00:00
author: forbes-gray
---

## The Initial State of the Web

Before the rise in popularity of content management systems like WordPress, Drupal and Joomla, most sites on the web were simple static pages of HTML markup and CSS. Over a slow connection, these text documents could be served and rendered in the browser relatively quickly.

As network speeds and browser technology improved, the size of the web grew, as did the size of websites. With larger-scale sites, maintenance and updates of the websites became increasingly more challenging. Server-side code and content management systems came to the rescue by dynamically generating HTML pages on the server, using languages like PHP and frameworks like ASP.NET, before serving them to the browser.

### The Content Management System

The principle behind a content management system is quite straightforward. A request is made by the browser to view a page and the server uses the request to access the database and retrieve the information required to construct the requested page. The server-side code then uses this data to generate an HTML page which is then returned to the browser.

Working in this way meant that content creators and managers were able to create and update content in a user-friendly interface without having any coding knowledge.

Adding a new page or blog article was as simple as editing and saving a word document, and CMS' became the go-to technology for building a new website.

### So Why Do We Need Static Sites?

As a site grows in size and complexity, the resources required to run it grow too. A server running a content management system is having to work hard every time it receives a request. This means that it needs time to complete these computations, delaying the load time of a page, and also incurs additional hosting costs to be able to run effectively.

Returning to a static site model of simply serving pre-built HTML pages not only increases the speed that your page is returned, and displayed, to the user but also requires fewer resources from the server as it is not doing any computations when a page is requested, it simply returns a file.

### Static Site Generators and The JAMStack

Static Site Generators started gaining traction in the mid to late 2010s and have exploded in popularity since then. With the release of more API driven resources, the JAMStack was born allowing Static Sites to become a very real alternative to a traditional CMS.

#### So a static site is fast and cheap, but what about creating and updating content?

The headless CMS solved this particular problem by decoupling the content itself from the front-end display layer. A CMS needs to store data somewhere, but rather than have the database and the website running in the same environment, the site could simply make requests to a headless CMS at build time and generate the pages which could be served as static files when needed.

This presented much more flexibility, as the data could be used by a website, mobile app or any connected device able to make an API request. This flexibility has resulted in many of the traditional CMS' offering headless options.

### Updating Your Static Website

A headless CMS gives the user a familiar interface to create, add and update new content. Someone coming from a traditional CMS would feel very at home working with a headless CMS.

When new content has been added to the CMS, a static site needs to be rebuilt to show any updated content. The beauty of this is that the build only needs to happen once to update the static files on the hosting server and then all future requests will get the latest static file for that particular page/request.

This is the reason that the hosting costs of a static website are a fraction of a content management system and in many cases completely free.

There are many different ways to accomplish this kind of architecture and many awesome products that slot seamlessly into it.

### Other Benefits Of A Static Website

There are many reasons to consider a static site for your next project. I have already mentioned the speed and reduced hosting costs, but that's not the end of the list.

#### Security

I feel that this is one of the main benefits of a static site. Traditional CMS' interact directly with a database on every request, and if you're storing any kind of sensitive data you'll need to make sure that it is secure. We all hear of data breaches of some of the worlds largest sites, but popular CMS' are also a common target for hackers looking for a "way in".

A static site contains only text files and, once created, do not have to interact with or even have access to a database, so in a sense, there's nothing to hack.

Another common source of CMS attacks is through third-party plug-ins, often used to add functionality to a site. You have little knowledge of the code that the plug-in contains and vulnerabilities, intentional or not, are often discovered putting all the sites that use them at risk.

#### Flexibility

I have talked a lot about using a headless CMS, but that is not the only way. As a static site generator builds a website it doesn't care where the data itself is coming from. It could be a CMS, but it could also simply be text files, markdown or even a Google Sheet.

The decoupled nature of the JAMStack also means that you have total freedom of the tools used to create the site. If you wished to change this in the future you do not have to migrate the database, you simply create a new static site to consume the data that you already have. This is perfect for creating something truly unique now and making future changes to ensure that you can stay on-brand.e that the plug-in contains and vulnerabilities, intentional or not, are often discovered putting all the sites that use them at risk.

### Conclusion

The choice is up to you. Whether you are considering updating an existing website or starting from scratch with a new project, certainly give a Static JAMStack website a closer look.

If you would like to discuss any projects that may be able to take advantage of a static site please do [get in touch](/contact/).
