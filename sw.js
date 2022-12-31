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
    "url": "/_nuxt/4f05dcc.js",
    "revision": "fc7edd0c60c822acc588c3331d0d8193"
  },
  {
    "url": "/_nuxt/6e9e525.js",
    "revision": "d6d4ea9a1740cec715d16d2b911f9c86"
  },
  {
    "url": "/_nuxt/e4863cc.js",
    "revision": "9f66a48c1df3b3c3148fa1def9f1519b"
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
