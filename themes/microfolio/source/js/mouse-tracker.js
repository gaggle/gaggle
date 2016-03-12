"use strict";
var throttle = require("./throttler")

function getMouseCoords(e) {
  var e = e || window.event
  document.getElementById('msg').innerHTML = e.clientX + ', ' +
                                             e.clientY + '<br>' + e.screenX +
                                             ', ' + e.screenY;
}

var followCursor = function (el) {

  return {
    run: function (e) {
      var raw_width = Math.max(document.documentElement.clientWidth,
                               window.innerWidth || 0)
      var w = raw_width / 2
      var raw_height = Math.max(document.documentElement.clientHeight,
                                window.innerHeight || 0)
      var h = raw_height / 2

      var max_deg = 7
      var factor_x = max_deg / w
      var factor_y = max_deg / h * -1

      var e = e || window.event
      var degX = (e.clientX - w) * factor_x
      var degY = (e.clientY - h) * factor_y
      el.style.transform =
        "perspective(1000px) rotateY(" + degX + "deg) rotateX(" + degY + "deg)"
    }
  }
}

module.exports = function (el) {
  var follower = new followCursor(el)
  document.body.onmousemove = throttle(follower.run, 50)
}
