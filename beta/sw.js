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
    "url": "/beta/_nuxt/9d50a33bdb204f2fce42.js",
    "revision": "190f9c20a7bcb320ee3e1370fa905b04"
  },
  {
    "url": "/beta/_nuxt/a7534a1f39ee588bcc5d.js",
    "revision": "69d8488fd2f6302235066359aa5445a3"
  },
  {
    "url": "/beta/_nuxt/b5edec5224e1a03ce76d.js",
    "revision": "0f53d5243220e9cd753b86b4e9975dcd"
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
