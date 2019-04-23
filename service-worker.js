importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

if (workbox) {
  workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "3b5774b6b7ca534ab6d5d195f0a2d362"
  },
  {
    "url": "about/index.html",
    "revision": "35158253ca860f24825c432fb34837c6"
  },
  {
    "url": "contact/index.html",
    "revision": "425dd5e55da2e691aabf00f213979634"
  },
  {
    "url": "css/styles.css",
    "revision": "0979cbe03d20487dce15981be6dae262"
  },
  {
    "url": "images/drawing.svg",
    "revision": "3091ac9a3d76a8f6b28021abf4ebf1fc"
  },
  {
    "url": "images/logo.svg",
    "revision": "97249bf451305d173025acad55dfc599"
  },
  {
    "url": "index.html",
    "revision": "1f28224adc40e170488aaaa4c2ae8374"
  },
  {
    "url": "js/script.js",
    "revision": "54e3e6e1779c8aebf0082b06c81471c3"
  },
  {
    "url": "js/script.min.js",
    "revision": "2bfc4da4ab24d02a7b9f8c247a8d7c33"
  },
  {
    "url": "portfolio/blackberry/love-is/index.html",
    "revision": "69671e0588be222c33a20dfeab1c456a"
  },
  {
    "url": "portfolio/blackberry/my-lists/index.html",
    "revision": "c78d7fe94388d5c36425e0ed1352f69e"
  },
  {
    "url": "portfolio/blackberry/star-wars-db/index.html",
    "revision": "8b370da7a8be8f4142e51fe326fb4d81"
  },
  {
    "url": "portfolio/index.html",
    "revision": "ddf9fa2b00e501c21d463509c7335ac3"
  },
  {
    "url": "portfolio/web/beauty-edinburgh/index.html",
    "revision": "00c4c289d620058eb426780a72d4c201"
  },
  {
    "url": "portfolio/web/fnbg-ltd/index.html",
    "revision": "50af5f99b01327178beffe2e1e9f3bb5"
  },
  {
    "url": "portfolio/web/moffat-museum-trust/index.html",
    "revision": "80093731e751a7a4580bcb08b4f61111"
  },
  {
    "url": "portfolio/web/the-star-at-cotton/index.html",
    "revision": "d316a3e262e997af701ea95b75210650"
  },
  {
    "url": "portfolio/webapps/cobble-garden-market/index.html",
    "revision": "9feeb36bee1749e9c4af3b7c8a4ff558"
  },
  {
    "url": "portfolio/webapps/duns-oral-history-project/index.html",
    "revision": "43a8d2383bc8a1f8c4e70d710c49e05d"
  },
  {
    "url": "portfolio/webapps/euro-2016-wallchart/index.html",
    "revision": "379d450007db87cd77578238fa5c747d"
  },
  {
    "url": "portfolio/webapps/recipe-manager-react/index.html",
    "revision": "d8a30d5f88ab519f84ca1ed687adfbad"
  },
  {
    "url": "portfolio/webapps/recipe-manager/index.html",
    "revision": "28c3888cf3ac606fa780d1938edc9316"
  },
  {
    "url": "portfolio/webapps/uk-telephone-codes/index.html",
    "revision": "5deced4cae6781045ecb4fd61a3089f7"
  },
  {
    "url": "portfolio/webapps/world-cup-wallchart-2014/index.html",
    "revision": "63d17b8a96c6429e8ee255425d21d5f8"
  },
  {
    "url": "service-worker.min.js",
    "revision": "0a7c489fc4f9ef199b2280e469d9de6f"
  }
])
  // workbox.routing.registerRoute(
  //   // Cache CSS files.
  //   /\.css$/,
  //   // Use cache but update in the background.
  //   new workbox.strategies.StaleWhileRevalidate({
  //     // Use a custom cache name.
  //     cacheName: 'css-cache',
  //   })
  // )
  // workbox.routing.registerRoute(
  //   // Cache CSS files.
  //   /\.js$/,
  //   // Use cache but update in the background.
  //   new workbox.strategies.StaleWhileRevalidate({
  //     // Use a custom cache name.
  //     cacheName: 'js-cache',
  //   })
  // )
  // workbox.routing.registerRoute(
  //   // Cache CSS files.
  //   /\.html$/,
  //   // Use cache but update in the background.
  //   new workbox.strategies.StaleWhileRevalidate({
  //     // Use a custom cache name.
  //     cacheName: 'html-cache',
  //   })
  // )
  workbox.routing.registerRoute(
    // Cache image files.
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    // Use the cache if it's available.
    new workbox.strategies.CacheFirst({
      // Use a custom cache name.
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache only 20 images.
          maxEntries: 20,
          // Cache for a maximum of a week.
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ],
    })
  )
} else {
  console.log('Boo! Workbox didn\'t load 😬')
}
