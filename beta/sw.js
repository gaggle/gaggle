importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/23d122481cc47fbc77cd.js",
    "revision": "44cc3cc036afdbf70c933f4924eb87a1"
  },
  {
    "url": "/beta/_nuxt/69c4cdfa3f8fe078af76.js",
    "revision": "1706132f7dbcbf03072a5c8b10b842db"
  },
  {
    "url": "/beta/_nuxt/739a1d68f71ec97b21cc.js",
    "revision": "db52804452957911295c8995539c18aa"
  },
  {
    "url": "/beta/_nuxt/7af835fe69b177d817ae.js",
    "revision": "f8d0f96d023372a722c210385609d9d5"
  },
  {
    "url": "/beta/_nuxt/d2a4f6b020d8d07ea3a2.js",
    "revision": "d5d85b12bc0f6fdffb82e12f2b2c8c8d"
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
