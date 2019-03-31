importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/2aac78b61d00f41b6d85.js",
    "revision": "7974289e9be7d35932153c344e03d476"
  },
  {
    "url": "/beta/_nuxt/77718832790081fab6da.js",
    "revision": "df80ad10187434a3ba80987edf1c72fb"
  },
  {
    "url": "/beta/_nuxt/85968ada550d944bb8ba.js",
    "revision": "91cb1ea4bc3140dae42f37b0071a1998"
  },
  {
    "url": "/beta/_nuxt/86a1ee6ab6bbd05db7cc.js",
    "revision": "e847b6788f614fb45cba041f2b91c081"
  },
  {
    "url": "/beta/_nuxt/b6c083f0608f8b12d8fe.js",
    "revision": "b86e90ecb26bc03d52f60caa0ed0e22f"
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
