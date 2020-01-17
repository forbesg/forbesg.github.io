importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

if (workbox) {
  workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "93b191a88067fec7c62fbfdea916553c"
  },
  {
    "url": "about/index.html",
    "revision": "5002f7437235fc79f64d58a4a968b01a"
  },
  {
    "url": "contact/index.html",
    "revision": "b3e83cc53c91417864c15fefe63d03ad"
  },
  {
    "url": "css/styles.css",
    "revision": "05d3550777c976ac1d70faebdff80d1b"
  },
  {
    "url": "fonts/lato-v15-latin/lato-v15-latin-300.svg",
    "revision": "54d3cfe0cec734925a21cebfe378a12e"
  },
  {
    "url": "fonts/lato-v15-latin/lato-v15-latin-regular.svg",
    "revision": "9087e4a6aceecc9b2914823044951a3a"
  },
  {
    "url": "fonts/quattrocento-v10-latin/quattrocento-v10-latin-regular.svg",
    "revision": "5e9a52097e90c7c92818913fbe09e328"
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
    "revision": "72cfb4a059b479a507238e2c8d937061"
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
    "url": "portfolio/blackberryfeatured/love-is/index.html",
    "revision": "503a7e2429a3a16311af80d469c725f1"
  },
  {
    "url": "portfolio/blackberryfeatured/my-lists/index.html",
    "revision": "e1b5efa31a7fc160a591aa52cebc1253"
  },
  {
    "url": "portfolio/blackberryfeatured/star-wars-db/index.html",
    "revision": "ebe8f60bc5e61ca772dad1c95e26728d"
  },
  {
    "url": "portfolio/featuredweb/beauty-edinburgh/index.html",
    "revision": "95ac798784896e497f89d27b3a50b95e"
  },
  {
    "url": "portfolio/featuredweb/fish-landscapes/index.html",
    "revision": "5a10d98eeb724629e72ed4dd34ec5e1d"
  },
  {
    "url": "portfolio/featuredweb/fnbg-ltd/index.html",
    "revision": "d62182a009ce21421d04839028a5312e"
  },
  {
    "url": "portfolio/featuredweb/moffat-museum-trust/index.html",
    "revision": "480d1774804ca00dec3f0bbf7bc52493"
  },
  {
    "url": "portfolio/featuredweb/the-star-at-cotton/index.html",
    "revision": "743b0d81564e2f8c487a504e2cba7ac3"
  },
  {
    "url": "portfolio/featuredwebapps/cobble-garden-market/index.html",
    "revision": "9bae70a9351ea2b934f24a902129bcc0"
  },
  {
    "url": "portfolio/featuredwebapps/duns-oral-history-project/index.html",
    "revision": "e884960f87802a643f40847f8be6ec81"
  },
  {
    "url": "portfolio/featuredwebapps/euro-2016-wallchart/index.html",
    "revision": "22c16b5dc1aa082472b25ad7b9272502"
  },
  {
    "url": "portfolio/featuredwebapps/little-city-treat/index.html",
    "revision": "c7e2c0b6b95d9a2e663f3ed265190532"
  },
  {
    "url": "portfolio/featuredwebapps/recipe-manager-react/index.html",
    "revision": "0325b012f87252e11118033098ed85e7"
  },
  {
    "url": "portfolio/featuredwebapps/recipe-manager/index.html",
    "revision": "bc8725553a4b50858f99a40b8a7d2e05"
  },
  {
    "url": "portfolio/featuredwebapps/uk-telephone-codes/index.html",
    "revision": "11ae4b1a4dde9fbcd30b2d9227355788"
  },
  {
    "url": "portfolio/featuredwebapps/world-cup-wallchart-2014/index.html",
    "revision": "efb8ae399b86410a46b21e1b07787f54"
  },
  {
    "url": "portfolio/index.html",
    "revision": "680dc5e4186f258a1319af2c55b346cf"
  },
  {
    "url": "service-worker.min.js",
    "revision": "7e6a926cc15ee0fadf65ba4db6a90a21"
  }
])

  workbox.routing.registerRoute(
    // Cache font files.
    /\.(?:eot|svg|ttf|woff|woff2)$/,
    // Use the cache if it's available.
    new workbox.strategies.CacheFirst({
      cacheName: 'font-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 15,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ],
    })
  )
  workbox.routing.registerRoute(
    // Cache image files.
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    // Use the cache if it's available.
    new workbox.strategies.CacheFirst({
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 20,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ],
    })
  )
} else {
  console.log('Boo! Workbox didn\'t load 😬')
}
