importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

if (workbox) {
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
    "revision": "e4b153b295fb45bc1744e304e431e485"
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
    "revision": "6984c1bec54af0b28c9b209b9d418012"
  },
  {
    "url": "contact/index.html",
    "revision": "76b91e6b4ba21c3acc311457b42a78d5"
  },
  {
    "url": "css/styles.css",
    "revision": "5e93ea35e303e6911b13b60152e3b09c"
  },
  {
    "url": "index.html",
    "revision": "25ef2e361720b4d9e01408882c1ec695"
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
    "revision": "f0508c4ce6d3467e3707e264c41cdae4"
  },
  {
    "url": "portfolio/blackberry/my-lists/index.html",
    "revision": "940550dcf8d477c5bf5517a8bf01fc61"
  },
  {
    "url": "portfolio/blackberry/star-wars-db/index.html",
    "revision": "160c9fa548be1d6fa35857d7a08e4e61"
  },
  {
    "url": "portfolio/index.html",
    "revision": "398b5eb426d6b2439c16e5a6805527cd"
  },
  {
    "url": "portfolio/web/beauty-edinburgh/index.html",
    "revision": "9913a96484459a95f0bbbb4c49a14158"
  },
  {
    "url": "portfolio/web/fnbg-ltd/index.html",
    "revision": "452c0cb28f5be04dae709f824d2b2f68"
  },
  {
    "url": "portfolio/web/moffat-museum-trust/index.html",
    "revision": "0266b73405004c41d2a793bffcbfc3ae"
  },
  {
    "url": "portfolio/web/the-star-at-cotton/index.html",
    "revision": "5872d3a74fc86e90eab691b31270c28f"
  },
  {
    "url": "portfolio/webapps/cobble-garden-market/index.html",
    "revision": "f07f3d3096bbc890ffd7c35bdeb3455a"
  },
  {
    "url": "portfolio/webapps/duns-oral-history-project/index.html",
    "revision": "b29e6a721b7c72186eb519b33bccfb4b"
  },
  {
    "url": "portfolio/webapps/euro-2016-wallchart/index.html",
    "revision": "9c6337da7139811a90f7577b18299a22"
  },
  {
    "url": "portfolio/webapps/recipe-manager-react/index.html",
    "revision": "4464c26f7d5c4f4d13a2fd3347866dab"
  },
  {
    "url": "portfolio/webapps/recipe-manager/index.html",
    "revision": "6bb537f43dda3a49af921202528b2e14"
  },
  {
    "url": "portfolio/webapps/uk-telephone-codes/index.html",
    "revision": "28f3e04761504b28ef121e8819c7a716"
  },
  {
    "url": "portfolio/webapps/world-cup-wallchart-2014/index.html",
    "revision": "8f8d1a08b427689b119ae01f0b06022f"
  },
  {
    "url": "service-worker.min.js",
    "revision": "d4991a7de0fb3875614318e32dcc4cc4"
  },
  {
    "url": "watch.png",
    "revision": "2267a13506869d6ee2edf2b316ca7ab9"
  }
])
} else {
  console.log('Boo! Workbox didn\'t load 😬');
}
