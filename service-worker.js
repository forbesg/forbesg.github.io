importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');
  workbox.routing.registerRoute(
    // Cache CSS files.
    /\.css$/,
    // Use cache but update in the background.
    new workbox.strategies.StaleWhileRevalidate({
      // Use a custom cache name.
      cacheName: 'css-cache',
    })
  )
  workbox.routing.registerRoute(
    // Cache CSS files.
    /\.js$/,
    // Use cache but update in the background.
    new workbox.strategies.StaleWhileRevalidate({
      // Use a custom cache name.
      cacheName: 'js-cache',
    })
  )
  workbox.routing.registerRoute(
    // Cache CSS files.
    /\.html$/,
    // Use cache but update in the background.
    new workbox.strategies.StaleWhileRevalidate({
      // Use a custom cache name.
      cacheName: 'html-cache',
    })
  )
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
  workbox.precaching.precacheAndRoute([
  {
    "url": "100.png",
    "revision": "639735239daa5b4002b269790db96144"
  },
  {
    "url": "1024.png",
    "revision": "0b7c36c604241a2fe2910eccd5827418"
  },
  {
    "url": "114.png",
    "revision": "b32fcc4ed807ae532df2c1332519c536"
  },
  {
    "url": "120.png",
    "revision": "b3e1cfe7904074ac0f0879563b4ac7da"
  },
  {
    "url": "128.png",
    "revision": "a388e092248250320365260b9cbd3188"
  },
  {
    "url": "144.png",
    "revision": "4bb201ae5c7cab60ed0fc59ea168b52c"
  },
  {
    "url": "152.png",
    "revision": "52ec836e8e15f60ea4f446bebebbcfe7"
  },
  {
    "url": "16.png",
    "revision": "ca0dcceaf83ff94d44930a2b0a32a0c1"
  },
  {
    "url": "167.png",
    "revision": "6964e7bb9aac84ee3393287f2454f8db"
  },
  {
    "url": "180.png",
    "revision": "644b4cc3660ad4bef96484c17c5254e4"
  },
  {
    "url": "20.png",
    "revision": "fc253c5239c95ae32bac93d2393b1a5f"
  },
  {
    "url": "256.png",
    "revision": "59515966fb18934431dba560dbdcc189"
  },
  {
    "url": "29.png",
    "revision": "fd5c78a85657b8bd7c2f8e0217ceaa2a"
  },
  {
    "url": "32.png",
    "revision": "dd3eddee6a4fed98aae988b0e9a5d0bd"
  },
  {
    "url": "40.png",
    "revision": "c1267e3605811300af26debb036c3d81"
  },
  {
    "url": "404.html",
    "revision": "d22f40bd4131f2e0d106c367145e4201"
  },
  {
    "url": "50.png",
    "revision": "3d1be73f75f967d4e28fdf799ceb5845"
  },
  {
    "url": "512.png",
    "revision": "4991dea84bcb625a5e4cef4223a20cb1"
  },
  {
    "url": "57.png",
    "revision": "b71c69dca52afed1c8d714c5fd31b6c8"
  },
  {
    "url": "58.png",
    "revision": "d4e3c4b07ab2f03fbc17513c49b88b2f"
  },
  {
    "url": "60.png",
    "revision": "584df2d5c730ce48c4f9a3c8aaefbde5"
  },
  {
    "url": "64.png",
    "revision": "981b8e92161ca4657a74a4725cef228b"
  },
  {
    "url": "72.png",
    "revision": "3f3abed7b67e0d455e9803caf666f2fb"
  },
  {
    "url": "76.png",
    "revision": "13afba112aeef03ef68f155ac59e7bcf"
  },
  {
    "url": "80.png",
    "revision": "96d84e241ca218a3327b37400745e482"
  },
  {
    "url": "87.png",
    "revision": "8ca88887889d5b2b09a00d2a9e5c93f0"
  },
  {
    "url": "about/index.html",
    "revision": "0727c9e7fe5e9d180836789ebfac74d2"
  },
  {
    "url": "contact/index.html",
    "revision": "65d1eb2fbcf3a385f48dbc0e2d43456f"
  },
  {
    "url": "css/styles.css",
    "revision": "1b0547ac87fa34e6d81a09fe2506e1e7"
  },
  {
    "url": "index.html",
    "revision": "fe6f265a628ea5442df3fda5c40482f8"
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
    "revision": "53c52d64c1ac796225f8c59e7f2c49e3"
  },
  {
    "url": "portfolio/blackberry/my-lists/index.html",
    "revision": "40664b6115162ef3028811a85a7b7f3e"
  },
  {
    "url": "portfolio/blackberry/star-wars-db/index.html",
    "revision": "cedb90a0e904190960d0c6b73e785682"
  },
  {
    "url": "portfolio/index.html",
    "revision": "82630899338edf367b009eb32fa967f0"
  },
  {
    "url": "portfolio/web/beauty-edinburgh/index.html",
    "revision": "6b45991d91a496d40a5606b68fac497b"
  },
  {
    "url": "portfolio/web/fnbg-ltd/index.html",
    "revision": "4663edb12f01246608076a61054c9c08"
  },
  {
    "url": "portfolio/web/moffat-museum-trust/index.html",
    "revision": "2a9ecaeb1a0a14c7dc6786ddd88eb350"
  },
  {
    "url": "portfolio/web/the-star-at-cotton/index.html",
    "revision": "3e08cad37ef7314404731e99d6bc99ca"
  },
  {
    "url": "portfolio/webapps/cobble-garden-market/index.html",
    "revision": "2dd5fe993b7bac2f480523f95de62e37"
  },
  {
    "url": "portfolio/webapps/duns-oral-history-project/index.html",
    "revision": "1a877a29e05818a2666949987152754b"
  },
  {
    "url": "portfolio/webapps/euro-2016-wallchart/index.html",
    "revision": "4c138a3a2d81f726ab74b2e4159662b7"
  },
  {
    "url": "portfolio/webapps/recipe-manager-react/index.html",
    "revision": "aadd67c594624d48d4f08bfd899da7e3"
  },
  {
    "url": "portfolio/webapps/recipe-manager/index.html",
    "revision": "80f83fa6493466d24f69bd9cea524212"
  },
  {
    "url": "portfolio/webapps/uk-telephone-codes/index.html",
    "revision": "3b6e8ec0a94cd24edcf0a8360ed0761e"
  },
  {
    "url": "portfolio/webapps/world-cup-wallchart-2014/index.html",
    "revision": "05b37ebdd2dd4b728831a210979b828e"
  },
  {
    "url": "service-worker.min.js",
    "revision": "e645862e5a3d729b8021d54ca82912b6"
  },
  {
    "url": "watch.png",
    "revision": "2267a13506869d6ee2edf2b316ca7ab9"
  }
])
} else {
  console.log('Boo! Workbox didn\'t load 😬');
}
