importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/4f9ec5d92cc5b039dbc6.js",
    "revision": "b2de099944998f167a46745b3d532f9b"
  },
  {
    "url": "/beta/_nuxt/588858de75af9ea55cad.js",
    "revision": "5240159135ba50691cb3578577fe0af3"
  },
  {
    "url": "/beta/_nuxt/930bb0aef423f5b343d1.js",
    "revision": "1b49e306e9e90dc191fb5f9a4406b663"
  },
  {
    "url": "/beta/_nuxt/d7e832c500f3814e73e5.js",
    "revision": "b35c39fb29878317d3d655edb37c2344"
  },
  {
    "url": "/beta/_nuxt/da46c6397eebbc672c3d.js",
    "revision": "6ad7ced540d176c58a8bede8499fbfca"
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
