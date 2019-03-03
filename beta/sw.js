importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/0a39b319c2b3a396fbb8.js",
    "revision": "b3b83e29befebc53ed2951ea83534123"
  },
  {
    "url": "/beta/_nuxt/0c7bbc20a9be15409255.js",
    "revision": "e45c9d61805e1a8ff94200c3c1ff8577"
  },
  {
    "url": "/beta/_nuxt/5341f9fd34d8fa9f69bf.js",
    "revision": "851b6e98e378ebed04e2b73e6531ca94"
  },
  {
    "url": "/beta/_nuxt/67b26ac8da655dd41757.js",
    "revision": "1069c122f171d1320616a5eda2e40efa"
  },
  {
    "url": "/beta/_nuxt/84926173f9aff7d6c94c.js",
    "revision": "4c6defbdd786b81ffd24b963b83e49e5"
  },
  {
    "url": "/beta/_nuxt/f33e8fafb04acee572b6.js",
    "revision": "c2c96e2099a8c84f45d2075f7cf099df"
  }
], {
  "cacheId": "gaggle",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/beta/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/beta/.*'), workbox.strategies.networkFirst({}), 'GET')
