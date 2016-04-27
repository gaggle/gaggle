"use strict";

var lookAt = function (el, x, y, opts) {
  opts = parseOpts(opts, el)
  var raw_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  var w = raw_width / 2
  var raw_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  var h = raw_height / 2

  var factor_x = opts.max_degrees / w
  var factor_y = opts.max_degrees / h * -1

  var degX = (x - w) * factor_x
  var degY = (y - h) * factor_y

  var transform = "perspective(" + opts.perspective + ") " +
    "rotateY(" + degX + "deg) " +
    "rotateX(" + degY + "deg)"
  el.style.transform = transform
  el.style.mozTransform = transform
}

var parseOpts = function (raw_opts, el) {
  var opts = raw_opts || {}
  if (!opts.max_degrees) opts.max_degrees = 89
  if (!opts.perspective) opts.perspective = getComputedStyle(el).perspective || el.style.perspective || "500px"
  return opts
}

module.exports = lookAt
