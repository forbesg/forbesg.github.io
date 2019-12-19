importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

if (workbox) {
  workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "37fd8030fa661924a2e6ce4cb4d73921"
  },
  {
    "url": "about/index.html",
    "revision": "c8f779a79e26e882ba84246320ee1459"
  },
  {
    "url": "contact/index.html",
    "revision": "1e54e730fbc5955edab0df4153ce5f08"
  },
  {
    "url": "css/styles.css",
    "revision": "458c92e8a112dc1cc8c0c4100843bbc6"
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
    "revision": "94ccad871219da29c04254fac27ecc7f"
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
    "revision": "25daecead9956a6e95ff3d8387749534"
  },
  {
    "url": "portfolio/blackberry/my-lists/index.html",
    "revision": "6b0d5ab93f6f838e5cbdd3fb4dece966"
  },
  {
    "url": "portfolio/blackberry/star-wars-db/index.html",
    "revision": "1680734bb8d0838a23e2d42cb8b2a3ab"
  },
  {
    "url": "portfolio/index.html",
    "revision": "d2cea710d9715171f34ff16c32783b5c"
  },
  {
    "url": "portfolio/web/beauty-edinburgh/index.html",
    "revision": "7f786f69c81a95383ad5a87ab3d2f452"
  },
  {
    "url": "portfolio/web/fnbg-ltd/index.html",
    "revision": "558798a9d7ab7c63a2045008c69adb19"
  },
  {
    "url": "portfolio/web/moffat-museum-trust/index.html",
    "revision": "1c2223c4367bb8bd1c8f4e772408bdfe"
  },
  {
    "url": "portfolio/web/the-star-at-cotton/index.html",
    "revision": "2f1811839b16de710c8b2f37eb96d5d3"
  },
  {
    "url": "portfolio/webapps/cobble-garden-market/index.html",
    "revision": "df94fd3c18b0c6aeb2264b1f3043bcff"
  },
  {
    "url": "portfolio/webapps/duns-oral-history-project/index.html",
    "revision": "a88fbaa414c2e7f684ddfb7ca5add196"
  },
  {
    "url": "portfolio/webapps/euro-2016-wallchart/index.html",
    "revision": "74914799a45fa9ee2a80d6b46303851b"
  },
  {
    "url": "portfolio/webapps/little-city-treat/index.html",
    "revision": "e4cbc9250c927b405860e1b286c00fb4"
  },
  {
    "url": "portfolio/webapps/recipe-manager-react/index.html",
    "revision": "f85bc29f71fd4815a54acccd91bbe92d"
  },
  {
    "url": "portfolio/webapps/recipe-manager/index.html",
    "revision": "d16d364cf2de4c4aa97c08ac34a2d338"
  },
  {
    "url": "portfolio/webapps/uk-telephone-codes/index.html",
    "revision": "6829f38c6c9a6ee86a8f1c66c31b62b2"
  },
  {
    "url": "portfolio/webapps/world-cup-wallchart-2014/index.html",
    "revision": "c9f52db080fa5fde514e0fa9873cddc8"
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
