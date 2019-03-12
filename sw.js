importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06467cf196601dd03352.js",
    "revision": "c3143082eae54654f675e695cb74d847"
  },
  {
    "url": "/_nuxt/69c4cdfa3f8fe078af76.js",
    "revision": "1706132f7dbcbf03072a5c8b10b842db"
  },
  {
    "url": "/_nuxt/af19cbbb3d7bf0486fde.js",
    "revision": "7667d3bc0ce9a50e59777f18bc20849f"
  },
  {
    "url": "/_nuxt/bbfbfae3f482d903e81d.js",
    "revision": "db52804452957911295c8995539c18aa"
  },
  {
    "url": "/_nuxt/f23c8340ce67ff61b761.js",
    "revision": "debc36356eacd14c8c4121d77b795571"
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
