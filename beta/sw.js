importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/60d07c64e2a55743f1bf.js",
    "revision": "73d8c452a4a12efcfc3a3333ac5a509c"
  },
  {
    "url": "/beta/_nuxt/78cb16c570606f7efa4c.js",
    "revision": "218bdea3bd2f24387dd20f72a8b904cf"
  },
  {
    "url": "/beta/_nuxt/7fbb7d87616262bf4e60.js",
    "revision": "5364ea98cc6a11f27425ae7126d42356"
  },
  {
    "url": "/beta/_nuxt/8a20c176ff4f8b97637a.js",
    "revision": "02ba0f9c4c5f2c23aa71579937a3fe81"
  },
  {
    "url": "/beta/_nuxt/a8319cb01300febc51e9.js",
    "revision": "de3562598a71345b70ec1c5ea8dedb25"
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
