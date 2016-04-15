"use strict";
// Based on http://jsfiddle.net/LzX4s/
var isFunction = require("lodash/isFunction")

var easing = {
  linear: function (progress) {
    return progress;
  },
  quadratic: function (progress) {
    return Math.pow(progress, 2)
  },
  swing: function (progress) {
    return 0.5 - Math.cos(progress * Math.PI) / 2
  },
  circ: function (progress) {
    return 1 - Math.sin(Math.acos(progress))
  },
  back: function (progress, x) {
    return Math.pow(progress, 2) * ((x + 1) * progress - x)
  },
  bounce: function (progress) {
    for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (progress >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2)
      }
    }
  },
  elastic: function (progress, x) {
    return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress)
  }
}

var animate = function (options, callback) {
  return new Promise(function (resolve) {
    var start = new Date
    var id = setInterval(function () {
      var timePassed = new Date - start
      var progress = timePassed / (options.duration || 500)
      if (options.progressCb) options.progressCb(progress)
      if (progress > 1) {
        progress = 1
      }
      options.progress = progress
      var delta = options.delta(progress)
      options.step(delta)
      if (progress == 1) {
        clearInterval(id)
        callback ? callback() : resolve()
      }
    }, options.delay || 10)
  })
}

exports.fadeOut = function (element, options, callback) {
  if (isFunction(options) && !callback) {
    callback = options
    options = {}
  } else if (!options) {
    options = {}
  }
  var to = 1
  return animate({
    duration: options.duration,
    delta: function (progress) {
      progress = this.progress
      return easing.swing(progress)
    },
    progressCb: options.progress,
    step: function (delta) {
      element.style.opacity = to - delta
    }
  }, callback)
}

exports.fadeIn = function (element, options, callback) {
  if (isFunction(options) && !callback) {
    callback = options
    options = {}
  } else if (!options) {
    options = {}
  }
  var to = 0
  return animate({
    duration: options.duration,
    delta: function (progress) {
      progress = this.progress
      return easing.swing(progress)
    },
    progressCb: options.progress,
    step: function (delta) {
      element.style.opacity = to + delta
    }
  }, callback)
}
