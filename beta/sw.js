importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/60d07c64e2a55743f1bf.js",
    "revision": "73d8c452a4a12efcfc3a3333ac5a509c"
  },
  {
    "url": "/beta/_nuxt/699f21fa71b8b2af24c6.js",
    "revision": "0348e8e74a23682fe80aca4517c2d3fb"
  },
  {
    "url": "/beta/_nuxt/6d290124443db53d0bb8.js",
    "revision": "968461f5f8824c2368868a39c34cf70b"
  },
  {
    "url": "/beta/_nuxt/857fed9df54b5242648c.js",
    "revision": "556081565046bec7ac1f0bb33332dd48"
  },
  {
    "url": "/beta/_nuxt/8a20c176ff4f8b97637a.js",
    "revision": "02ba0f9c4c5f2c23aa71579937a3fe81"
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
