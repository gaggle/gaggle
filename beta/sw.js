importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/3b19e99072904645417d.js",
    "revision": "2f3b559ff668026b34d2df31bb305cd4"
  },
  {
    "url": "/beta/_nuxt/6d96484671c11ffc4bfa.js",
    "revision": "fcc9fce3b2cc6fc34c7980cc3a859e7d"
  },
  {
    "url": "/beta/_nuxt/7d53c066c08f5ed8f419.js",
    "revision": "802c4240bd30d34c3ef493920428d2eb"
  },
  {
    "url": "/beta/_nuxt/8a20c176ff4f8b97637a.js",
    "revision": "02ba0f9c4c5f2c23aa71579937a3fe81"
  },
  {
    "url": "/beta/_nuxt/9c10213561069b5b0451.js",
    "revision": "e9eb83c5fa1600a4e622dfa06b329e86"
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
