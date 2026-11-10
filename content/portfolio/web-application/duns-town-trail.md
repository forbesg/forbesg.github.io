---
title: Duns Town Trail
description: A Progressive Web Application to help guide visitors around points of interest in the historic market town of Duns.
subhead: Guided Tour of the Town of Duns
image: /images/projects/web-application/duns-town-trail.jpg
imageAlt: Duns Town Trail - Progressive Web App
url: https://town-trail.aheartforduns.org/
features:
- HTML
- SCSS
- Vue JS
- Gridsome
- DatoCMS
- Progressive Web App
carousel:
- src: /images/projects/web-application/town-trail/trail-view.png
  alt: Town Trail
  width: 360
  height: 720
- src: /images/projects/web-application/town-trail/trail-map.png
  alt: Town Trail Map View
  width: 360
  height: 720
- src: /images/projects/web-application/town-trail/wojtek-trail-view.png
  alt: Wojtek Trail View
  width: 360
  height: 720
category: web-application
displayOrder: 3
featured: true
---

#### An Interactive Guided Tour of the town of Duns

I was commissioned by [A Heart for Duns](https://www.aheartforduns.org/) to create
an App that would allow visitors to the town to follow the Duns Town Trail, highlighting
points of interest and providing some historical context to the buildings and landmarks in the town.

The trail itself has existed for some time, however it was only available in a
printed version and discussions had been on-going about created a digital format
of the trail.

Designed specifically to be used on handheld devices as people walked around the
town, the site required to be clear, easy to follow and fast to load.

Using Gridsome, a JAMStack framework for VueJS, I was able to produce a performant
static Progressive Web App which could be installed on the users mobile phone for
quick and easy access, was secure, and **free to host**.

To allow the client to update the app themselves, I used the DatoCMS, a headless
content management system which is perfect for this type of project. From a user
friendly web-based GUI, the client is able to update the content of the app and
also add additional points of interest in the future.

Map interactivity within the app is provided using the MapBox JavaScript SDK,
and by obtaining the users location can display which points of interest are
around them and access information about them directly from the map.
