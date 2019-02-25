importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/0c7bbc20a9be15409255.js",
    "revision": "e45c9d61805e1a8ff94200c3c1ff8577"
  },
  {
    "url": "/beta/_nuxt/2bf0d187174d39de06d0.js",
    "revision": "caf2a557e7b64f223af1e646eaec0c93"
  },
  {
    "url": "/beta/_nuxt/5dc184c381251c34e6ea.js",
    "revision": "dff096cf5d04c7e8cdb245ab9c284b22"
  },
  {
    "url": "/beta/_nuxt/67b26ac8da655dd41757.js",
    "revision": "1069c122f171d1320616a5eda2e40efa"
  },
  {
    "url": "/beta/_nuxt/74dc4c6e7ffd401d23d5.js",
    "revision": "da72a9d8107fc606437e98fe360fd99f"
  },
  {
    "url": "/beta/_nuxt/7529378d897d0b0c36cb.js",
    "revision": "91be192b6f2325b049529af4a538a94c"
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
