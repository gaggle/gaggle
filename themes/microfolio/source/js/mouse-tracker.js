"use strict";
var throttle = require("./throttler")

var SCALE       = 1,
    OFFSET      = 0,
    PERSPECTIVE = 500,
    MAX_DEG     = 3

var followCursor = function (el) {

  return {
    run: function (e) {
      var raw_width = Math.max(document.documentElement.clientWidth,
                               window.innerWidth || 0)
      var w = raw_width / 2
      var raw_height = Math.max(document.documentElement.clientHeight,
                                window.innerHeight || 0)
      var h = raw_height / 2

      var factor_x = MAX_DEG / w
      var factor_y = MAX_DEG / h * -1

      var e = e || window.event
      var degX = (e.clientX - w) * factor_x
      var degY = (e.clientY - h) * factor_y
      var xformmsg = "perspective(" + PERSPECTIVE + "px) " +
                     "rotateY(" + degX + "deg) " +
                     "rotateX(" + degY + "deg)"
      if (OFFSET != 0) xformmsg += " " +
                                   "translateZ(" + OFFSET + "px)"
      if (SCALE != 1) xformmsg += " " +
                                  "scaleX(" + SCALE + ") " +
                                  "scaleY(" + SCALE + ")"
      el.style.transform = xformmsg
    }
  }
}

module.exports = function (el) {
  var follower = new followCursor(el)
  document.body.onmousemove = throttle(follower.run, 50)
}
