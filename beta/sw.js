importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/67b26ac8da655dd41757.js",
    "revision": "1069c122f171d1320616a5eda2e40efa"
  },
  {
    "url": "/beta/_nuxt/95607a46ad2f36afca37.js",
    "revision": "88988bbbe17c6d8d73c91348def7bc87"
  },
  {
    "url": "/beta/_nuxt/9f9ba24b7cf588808454.js",
    "revision": "bd0b5696335266f8c04390a00b5cb765"
  },
  {
    "url": "/beta/_nuxt/ad5daf98be048be94ddc.js",
    "revision": "6f7adce9aefd8416dc605f518ae80325"
  },
  {
    "url": "/beta/_nuxt/b9ee8a38119aa63aca93.js",
    "revision": "906f8f087dd58eb9e3d7301fb3345894"
  },
  {
    "url": "/beta/_nuxt/ddcaffc4e88e39cb9958.js",
    "revision": "fe33372a1403c97dc27acf4a99a960b2"
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
