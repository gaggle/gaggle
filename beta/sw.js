importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/3b19e99072904645417d.js",
    "revision": "2f3b559ff668026b34d2df31bb305cd4"
  },
  {
    "url": "/beta/_nuxt/6b3bd7c9e3ec702e6aae.js",
    "revision": "5574f8d8beb21021648d9af797e19169"
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
    "url": "/beta/_nuxt/e3e59fd7d2dd95d370d9.js",
    "revision": "c63753b37f762329e85b22aeb13fe65f"
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
