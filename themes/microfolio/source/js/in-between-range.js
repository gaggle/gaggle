"use strict";
module.exports = function (conf, key) {
  var data = confParser(conf)
  for (var i = 0; i < data.length; i++) {
    var entry = data[i]
    var min = entry[0], max = entry[1], value = entry[2]
    if (isBetween(key, min, max)) {
      return value
    }
  }
}

var confParser = function (conf) {
  return Object.keys(conf).map(function (rangestr) {
    var text = conf[rangestr]
    var pair = rangestr.split("-").map(Number)
    pair.push(text)
    return pair
  })
}

var isBetween = function (x, min, max) {
  return x >= min && x <= max
}
