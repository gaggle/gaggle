importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/039fa0d2066f2278d6eb.js",
    "revision": "9cf353302647a7a33121622975086f16"
  },
  {
    "url": "/_nuxt/2aac78b61d00f41b6d85.js",
    "revision": "7974289e9be7d35932153c344e03d476"
  },
  {
    "url": "/_nuxt/5cd88dad650f17048c1b.js",
    "revision": "062561a865e0e1d2128169d73b836ea9"
  },
  {
    "url": "/_nuxt/86a1ee6ab6bbd05db7cc.js",
    "revision": "e847b6788f614fb45cba041f2b91c081"
  },
  {
    "url": "/_nuxt/b6c083f0608f8b12d8fe.js",
    "revision": "b86e90ecb26bc03d52f60caa0ed0e22f"
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
