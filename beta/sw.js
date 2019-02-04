importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/237a2d4a7973e8a45705.js",
    "revision": "ca4a68104464402b8ea840fa52a062fd"
  },
  {
    "url": "/beta/_nuxt/4a92a3494729154f4bab.js",
    "revision": "5e3f7d5e180cf412c64a2c17e5d3cfe9"
  },
  {
    "url": "/beta/_nuxt/519fc6da0f4ec3eaba84.js",
    "revision": "2fef70d0fc5df560af153dd040c5eec5"
  },
  {
    "url": "/beta/_nuxt/60d07c64e2a55743f1bf.js",
    "revision": "73d8c452a4a12efcfc3a3333ac5a509c"
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
