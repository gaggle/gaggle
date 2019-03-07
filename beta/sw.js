importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/4d46cb7b1033e5687847.js",
    "revision": "c9124e6d53e4a3969215e7db6bb7bfaf"
  },
  {
    "url": "/beta/_nuxt/67b26ac8da655dd41757.js",
    "revision": "1069c122f171d1320616a5eda2e40efa"
  },
  {
    "url": "/beta/_nuxt/7b110df3947743256fae.js",
    "revision": "6dce0a03a6fd45c08989da0b151eefd0"
  },
  {
    "url": "/beta/_nuxt/a96407b800dc193c30e4.js",
    "revision": "f8f43fdca56a6b512687a8f3f726cb9a"
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
