var Buffer = require("./Buffer")

var DoubleBuffer = function (parentNode, referenceNode) {
  this.back = new Buffer("back", parentNode, referenceNode)
  this.front = new Buffer("front", this.back)
  return this
}

DoubleBuffer.prototype.set = function () {
  var self = this
  var paths = Array.prototype.slice.call(arguments)

  var _set = function (path) {
    return loadImage(path)
      .then(function () {
        return self.front.fadeIn(path)
      })
      .then(function () {
        return new Promise(function (resolve) {
          self.back.set(self.front.get())
          setTimeout(function () {
            self.front.reset()
            resolve()
          }, 100) // small delay to avoid occasional blinking
        })
      })
      .then(function () {
        if (paths.length) {
          return _set(paths.shift())
        }
      })
  }

  var path = paths.shift()
  return _set(path)
}

var loadImage = function (path) {
  return new Promise(function (resolve) {
    var img = new Image()
    img.addEventListener("load", function () {
      resolve(img)
    }, false)
    img.src = path
  })
}

module.exports = DoubleBuffer
