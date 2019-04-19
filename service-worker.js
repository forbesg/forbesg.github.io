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
    "revision": "be12c72964d2c5191b6ba39ba38a739b"
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
    "revision": "6b4e2c5f703eb94ceaea8b7d66ddf5a2"
  },
  {
    "url": "contact/index.html",
    "revision": "e279cf237f4cf92e5a5a72dd02038799"
  },
  {
    "url": "css/styles.css",
    "revision": "5e93ea35e303e6911b13b60152e3b09c"
  },
  {
    "url": "index.html",
    "revision": "06973147e0d8fa8647477d08609eccba"
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
    "revision": "4c89a78d76469982e20f499882536c4c"
  },
  {
    "url": "portfolio/blackberry/my-lists/index.html",
    "revision": "ebca1fcfb00455eed9d8f8c7df4b6770"
  },
  {
    "url": "portfolio/blackberry/star-wars-db/index.html",
    "revision": "9665e15c19da223914af8c58dc75f859"
  },
  {
    "url": "portfolio/index.html",
    "revision": "438c3123017cda411980927739f483fb"
  },
  {
    "url": "portfolio/web/beauty-edinburgh/index.html",
    "revision": "571d98d35de33f27101e84e1a2aad885"
  },
  {
    "url": "portfolio/web/fnbg-ltd/index.html",
    "revision": "48e4f3e8fd16593a266065a655cea972"
  },
  {
    "url": "portfolio/web/moffat-museum-trust/index.html",
    "revision": "a95fe3f155d40d613a2c4b2be973f5bd"
  },
  {
    "url": "portfolio/web/the-star-at-cotton/index.html",
    "revision": "5fa2a25b22da15e9448b606b19995f02"
  },
  {
    "url": "portfolio/webapps/cobble-garden-market/index.html",
    "revision": "e0b505f8c856fb2653c216d861e601c1"
  },
  {
    "url": "portfolio/webapps/duns-oral-history-project/index.html",
    "revision": "9a2e1220b42514ac59e32d3b8cf15137"
  },
  {
    "url": "portfolio/webapps/euro-2016-wallchart/index.html",
    "revision": "607c19d5492ded8ea57289661c238e39"
  },
  {
    "url": "portfolio/webapps/recipe-manager-react/index.html",
    "revision": "ed14922feb408de80fb70628e6797605"
  },
  {
    "url": "portfolio/webapps/recipe-manager/index.html",
    "revision": "f3661dd7dc2ed0b902b9530e66fd903a"
  },
  {
    "url": "portfolio/webapps/uk-telephone-codes/index.html",
    "revision": "96102b35e5b3a57b08ffdaee1dde12fd"
  },
  {
    "url": "portfolio/webapps/world-cup-wallchart-2014/index.html",
    "revision": "10524fcc6268ad473a3dd4b9f73e5168"
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
