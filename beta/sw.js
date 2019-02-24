importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/7035f2d8ffd23cff8b78.js",
    "revision": "6721822f7ca4faa60721e5739ad21ef7"
  },
  {
    "url": "/beta/_nuxt/8acb8bc447a23105d1e7.js",
    "revision": "a41f06648b63f50cf8387a988bdf5e69"
  },
  {
    "url": "/beta/_nuxt/97bcc387721026f476c9.js",
    "revision": "16e0710fc6a7d02503a7aa76d7d261c0"
  },
  {
    "url": "/beta/_nuxt/99bd467b931bf522a992.js",
    "revision": "f133bcc35fb19c1e8b1adc7b00148a4a"
  },
  {
    "url": "/beta/_nuxt/a515dd0943de722e0773.js",
    "revision": "b691423c1dfe80013ca0ef39e9aa8da6"
  },
  {
    "url": "/beta/_nuxt/df80ce445845ac91524c.js",
    "revision": "23d76eae7054b2b8957aa26023037254"
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
