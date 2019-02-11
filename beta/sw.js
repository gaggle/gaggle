importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/60d07c64e2a55743f1bf.js",
    "revision": "73d8c452a4a12efcfc3a3333ac5a509c"
  },
  {
    "url": "/beta/_nuxt/8a20c176ff4f8b97637a.js",
    "revision": "02ba0f9c4c5f2c23aa71579937a3fe81"
  },
  {
    "url": "/beta/_nuxt/8d1a0336461b94f645e5.js",
    "revision": "0289664ff38e5c4d919868229ea61030"
  },
  {
    "url": "/beta/_nuxt/e1f30fe445f73dfe944b.js",
    "revision": "696e04eb6b0015c1ea09c782cdfbfc8f"
  },
  {
    "url": "/beta/_nuxt/f6e8b9ade5cfa0f7972e.js",
    "revision": "2d255451d5925f7f9365d13a4fd092a9"
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
