importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/332db1c7dbb604520cd3.js",
    "revision": "d215b05bd2ecbf4cffa2d134d346222c"
  },
  {
    "url": "/beta/_nuxt/34fd2661b54a86ed9cdb.js",
    "revision": "6edb864e90eb856c7ef4d89bad9a43c5"
  },
  {
    "url": "/beta/_nuxt/4d46cb7b1033e5687847.js",
    "revision": "c9124e6d53e4a3969215e7db6bb7bfaf"
  },
  {
    "url": "/beta/_nuxt/67b26ac8da655dd41757.js",
    "revision": "1069c122f171d1320616a5eda2e40efa"
  },
  {
    "url": "/beta/_nuxt/ac80e03751bb4803b515.js",
    "revision": "552990d9925c5339f81c9908294b3e95"
  },
  {
    "url": "/beta/_nuxt/d02a38c60d1c1f6249c1.js",
    "revision": "98468dc4380f6fdc4bed78fc0a543ef5"
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
