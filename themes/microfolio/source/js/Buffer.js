var animate = require("./animate")

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
  this.element.style.backgroundImage = ""
  return animate.fadeOut(this.element, {duration: 0})
}

Buffer.prototype.isEmpty = function () {
  return this.element.style.backgroundImage == ""
}

Buffer.prototype.fadeIn = function (path) {
  this.set(path)
  return animate.fadeIn(this.element, {duration: 2000})
}

var url = function (path) {
  return "url('" + path + "')"
}

var unurl = function (url) {
  return url.slice(4, url.length - 1)
}

module.exports = Buffer
