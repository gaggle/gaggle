var transitionEvent = require("./which-transition-event")()

var FADE_IN = "fadein"
var FADE_IN_TIMEOUT = 15 * 1000

var Buffer = function (cls, parentNode, referenceNode) {
  this.element = document.createElement("buffer")
  this.element.classList.add(cls)

  if (parentNode instanceof Buffer) parentNode = parentNode.element
  if (parentNode) parentNode.insertBefore(this.element, referenceNode)
  return this
}

Buffer.prototype.set = function (path) {
  this.element.style.backgroundImage = url(path)
}

Buffer.prototype.get = function () {
  return unurl(this.element.style.backgroundImage)
}

Buffer.prototype.reset = function () {
  this.element.classList.remove(FADE_IN)
  this.element.style.backgroundImage = ""
}

Buffer.prototype.fadeIn = function (path) {
  var self = this
  return new Promise(function (resolve, reject) {
    self.set(path)
    self.element.classList.add(FADE_IN)
    var timeout = setTimeout(function () {
      self.element.classList.remove(FADE_IN)
      reject()
    }, FADE_IN_TIMEOUT)
    self.element.addEventListener(transitionEvent, function (e) {
      e.target.removeEventListener(e.type, arguments.callee) // one-time event
      clearTimeout(timeout)
      resolve()
    }, false)
  })
}

Buffer.prototype.isEmpty = function () {
  return this.element.style.backgroundImage == ""
}

var url = function (path) {
  return "url('" + path + "')"
}

var unurl = function (url) {
  return url.slice(4, url.length - 1)
}

module.exports = Buffer
