---
archived: true
title: Recipe Manager - React
description: Recipe Manager V2 - A re-write of my original Recipe Manager Application that is written in React with a Firebase backend.
subhead: Manage Your Recipes with React and Firebase
image: /images/projects/web-application/recipe-manager.jpg
imageAlt: My Recipe Manager - Recipe Web Application
url: https://my-recipe-manager.firebaseapp.com/
repo: https://github.com/forbesg/my-recipe-manager
category: web-application
features:
- HTML5
- CSS3
- React JS
- NodeJS
- Firebase
displayOrder: 5
featured: false
---

My Recipe Manager is a re-written version of my previous MEAN Recipe Manager.

The application is written using <a href="https://facebook.github.io/react/React">React JS</a>
making it very easy to build interactive components for the view and handle user
input. React also proved to work very well with
<a href="https://firebase.google.com/" target="blank">Firebase</a> which I
used for the database.

The Firebase real-time database meant that changes were shared across clients and
re-rendered using React.

In addition to using the Firebase real-time database, I also used Firebase Auth
to handle user authentication, Firebase Hosting to host the application over HTTPS,
and Firebase Cloud functions to trigger notifications when changes were made to
the database.

This was also my first step into using CSS Flexbox which enabled me to create
the responsive layout quickly and without the need for a CSS framework.
