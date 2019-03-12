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
    "url": "/_nuxt/b7dfb4ee0777da572a47.js",
    "revision": "e6717b6cc0ac8f50503b8d716b32b469"
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
