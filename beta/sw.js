importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/0c7bbc20a9be15409255.js",
    "revision": "e45c9d61805e1a8ff94200c3c1ff8577"
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
    "url": "/beta/_nuxt/7f0a2689b9f9b3df47d8.js",
    "revision": "eb04a17e549317ed5d85902d2740603b"
  },
  {
    "url": "/beta/_nuxt/81f0ab19aadf97caf119.js",
    "revision": "a8f4ca3a1d626e7d3c17c4fec5f13c23"
  },
  {
    "url": "/beta/_nuxt/9d84358fc36735420ba7.js",
    "revision": "ad19daa177fd393a386fcf823009a453"
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
