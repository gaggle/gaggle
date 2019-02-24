importScripts('/beta/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/beta/_nuxt/0a073ab180ca7211fe2d.js",
    "revision": "d1142f59fe8df315c61c655f8c351d1b"
  },
  {
    "url": "/beta/_nuxt/145427b3230a542503f3.js",
    "revision": "e172289c5340b72597dc012b1492afd7"
  },
  {
    "url": "/beta/_nuxt/267532f4804b437b7711.js",
    "revision": "033181a4b9f1a7b65c654473682eac4e"
  },
  {
    "url": "/beta/_nuxt/2a45123e9806abd33dc9.js",
    "revision": "47ff3919b92325654313ee741d5df9bc"
  },
  {
    "url": "/beta/_nuxt/a515dd0943de722e0773.js",
    "revision": "b691423c1dfe80013ca0ef39e9aa8da6"
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
