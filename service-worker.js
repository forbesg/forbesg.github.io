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
    "revision": "158e82d2aa8251bb8ed365d6ef98efce"
  },
  {
    "url": "css/styles.css",
    "revision": "2aea0566bcb196463844c579a9ea708c"
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
    "revision": "a4d7fa7efadb4a35ac17b53611234bf7"
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
    "revision": "12b5d9725b4b75675ea082dacaaa978a"
  },
  {
    "url": "portfolio/blackberry/my-lists/index.html",
    "revision": "739e83a44916c7425632ce3abf4eed16"
  },
  {
    "url": "portfolio/blackberry/star-wars-db/index.html",
    "revision": "d61dc384ce33b0374187323f865fbf98"
  },
  {
    "url": "portfolio/index.html",
    "revision": "2aae5153f95b7fbc34f638691bc4722f"
  },
  {
    "url": "portfolio/web/beauty-edinburgh/index.html",
    "revision": "299b21a31482df094fd770717b6fd710"
  },
  {
    "url": "portfolio/web/fish-landscapes/index.html",
    "revision": "fbc25272eed2a24bd45e4ce8278d049d"
  },
  {
    "url": "portfolio/web/fnbg-ltd/index.html",
    "revision": "334a42926e5c3fd541a0ca0ffb8f47b2"
  },
  {
    "url": "portfolio/web/moffat-museum-trust/index.html",
    "revision": "c67ea4b555a52695ba61c02bacae7950"
  },
  {
    "url": "portfolio/web/the-star-at-cotton/index.html",
    "revision": "bc61298444b9761641e012037512e62a"
  },
  {
    "url": "portfolio/webapps/duns-oral-history-project/index.html",
    "revision": "2e5d04e6d1fe891189c4b364f1f1c27c"
  },
  {
    "url": "portfolio/webapps/euro-2016-wallchart/index.html",
    "revision": "a48f98601dc45a3af03a2f50a91245a6"
  },
  {
    "url": "portfolio/webapps/granite-setts-direct/index.html",
    "revision": "4446746f2e66bed995cfebaa1656eced"
  },
  {
    "url": "portfolio/webapps/little-city-treat/index.html",
    "revision": "897f1fbd7bb619e757683474c344b655"
  },
  {
    "url": "portfolio/webapps/recipe-manager-react/index.html",
    "revision": "a131485b58f4a9a5ab45f02c8d0e5a1a"
  },
  {
    "url": "portfolio/webapps/recipe-manager/index.html",
    "revision": "65e818af28917e9babf3e718b2a2824e"
  },
  {
    "url": "portfolio/webapps/uk-telephone-codes/index.html",
    "revision": "d0368613c8c317e265ac1234ece543db"
  },
  {
    "url": "portfolio/webapps/world-cup-wallchart-2014/index.html",
    "revision": "db3279c14da770e5d9c91333656a16c9"
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
