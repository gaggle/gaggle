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
    "url": "/beta/_nuxt/c549205f359f17a53f5e.js",
    "revision": "aae6be9dbe29a14473f369f506ebc701"
  },
  {
    "url": "/beta/_nuxt/cfdad0f3f2e26f57a0e5.js",
    "revision": "93a7075509056013551421f76b4e5aaa"
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
