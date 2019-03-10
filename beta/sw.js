importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/588858de75af9ea55cad.js",
    "revision": "5240159135ba50691cb3578577fe0af3"
  },
  {
    "url": "/beta/_nuxt/aa3a6d22475077a659ee.js",
    "revision": "7c2125b9f811783af0799765bb5b5321"
  },
  {
    "url": "/beta/_nuxt/d7e832c500f3814e73e5.js",
    "revision": "b35c39fb29878317d3d655edb37c2344"
  },
  {
    "url": "/beta/_nuxt/da46c6397eebbc672c3d.js",
    "revision": "6ad7ced540d176c58a8bede8499fbfca"
  },
  {
    "url": "/beta/_nuxt/dbf5f31c4ab974db22cf.js",
    "revision": "658bdd6a35825568162b9b4de1060ccd"
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
