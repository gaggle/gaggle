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
    "url": "/beta/_nuxt/8af9c90cc3a32886915f.js",
    "revision": "3feb9229ddf9f142772caee435e3c17d"
  },
  {
    "url": "/beta/_nuxt/bbfbfae3f482d903e81d.js",
    "revision": "db52804452957911295c8995539c18aa"
  },
  {
    "url": "/beta/_nuxt/f23c8340ce67ff61b761.js",
    "revision": "debc36356eacd14c8c4121d77b795571"
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
