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
    "url": "/beta/_nuxt/5ebf6becf0ba49ed0500.js",
    "revision": "0109d7a57d4184856d190c80c3a67043"
  },
  {
    "url": "/beta/_nuxt/67b26ac8da655dd41757.js",
    "revision": "1069c122f171d1320616a5eda2e40efa"
  },
  {
    "url": "/beta/_nuxt/81f0ab19aadf97caf119.js",
    "revision": "a8f4ca3a1d626e7d3c17c4fec5f13c23"
  },
  {
    "url": "/beta/_nuxt/bad691530a1c09595c12.js",
    "revision": "ce5db378c44b372754291eb97ee71283"
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
