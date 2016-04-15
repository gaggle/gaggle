var Buffer = require("./Buffer")

var DoubleBuffer = function (parentNode, referenceNode, options) {
  if (!options) options = {}
  if (!options.duration) options.duration = 2000

  this.back = new Buffer("back", parentNode, referenceNode)
  this.front = new Buffer("front", this.back)
  this.options = options
  return this
}

/**
 * @param {...string} path
 */
DoubleBuffer.prototype.set = function (path) {
  var self = this
  var paths = Array.prototype.slice.call(arguments)

  var _set = function (p) {
    return loadImage(p)
      .then(function () {
        return self.front.fadeIn(p, self.options.duration)
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

  path = paths.shift()
  return _set(path)
}

var loadImage = function (path) {
  return new Promise(function (resolve, reject) {
    var img = new Image()
    img.addEventListener("load", function () {
      resolve(img)
    }, false)
    img.addEventListener("error", function () {
      reject(new Error("Error loading " + path))
    }, false)
    img.src = path
  })
}

module.exports = DoubleBuffer
