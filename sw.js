importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/69c4cdfa3f8fe078af76.js",
    "revision": "1706132f7dbcbf03072a5c8b10b842db"
  },
  {
    "url": "/_nuxt/739a1d68f71ec97b21cc.js",
    "revision": "db52804452957911295c8995539c18aa"
  },
  {
    "url": "/_nuxt/b7dfb4ee0777da572a47.js",
    "revision": "e6717b6cc0ac8f50503b8d716b32b469"
  },
  {
    "url": "/_nuxt/c4c24dbe7763e50d1fa0.js",
    "revision": "d183754550cfc1b16d88101fc2bf8229"
  },
  {
    "url": "/_nuxt/d2a4f6b020d8d07ea3a2.js",
    "revision": "d5d85b12bc0f6fdffb82e12f2b2c8c8d"
  }
], {
  "cacheId": "gaggle",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
