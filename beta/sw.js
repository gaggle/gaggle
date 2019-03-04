importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
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
    "url": "/beta/_nuxt/e7feb37c32f7f0e5a307.js",
    "revision": "041a486b1a2b988d3f684c9671b29162"
  },
  {
    "url": "/beta/_nuxt/f33e8fafb04acee572b6.js",
    "revision": "c2c96e2099a8c84f45d2075f7cf099df"
  },
  {
    "url": "/beta/_nuxt/fbf102bb9c9eaf718fc9.js",
    "revision": "47b949f6d7ab8114def86ea6fb4deca8"
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
