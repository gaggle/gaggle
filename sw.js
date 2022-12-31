importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/066e60c.js",
    "revision": "f1ae18b2ee0e41de6cdeaa1ce4bf34c1"
  },
  {
    "url": "/_nuxt/1b382d2.js",
    "revision": "1b16799752b948186dc4b75675bc8152"
  },
  {
    "url": "/_nuxt/6e9e525.js",
    "revision": "d6d4ea9a1740cec715d16d2b911f9c86"
  },
  {
    "url": "/_nuxt/ad1e3c8.js",
    "revision": "807f50c57cd470f65113afd9f245a1d4"
  },
  {
    "url": "/_nuxt/af4b488.js",
    "revision": "ed95f1ebb284ffec00160d3e965d71a8"
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
