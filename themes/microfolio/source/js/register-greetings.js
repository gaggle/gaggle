"use strict";
module.exports = function (stateManager, conf) {
  var el = document.getElementsByTagName("greeting")[0]
  Object.keys(conf).forEach(function (eventName) {
    var eventData = conf[eventName]
    stateManager.on(eventName, function (value) {
      eventData.some(function (e) {
        var min = e[0], max = e[1], data = e[2]
        if (stateManager._debug == true)
          data += " (" + value + "/" + min + "-" + max + ")"
        if (isBetween(value, min, max) && data != el.innerHTML) {
          el.innerHTML = data
          return true
        }
      })
    })
  })
}

var isBetween = function (x, min, max) {
  return x >= min && x <= max
}
