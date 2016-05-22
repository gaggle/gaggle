"use strict";
var tracker = require("../../themes/microfolio/source/js/look-at")

var getTransform = function (el) {
  return el.style.transform || el.style.mozTransform
}

describe("look-at", function () {
  var center, el
  before(function () {
    center = {x: document.documentElement.clientWidth / 2, y: document.documentElement.clientHeight / 2}
  })

  beforeEach(function () {
    el = document.createElement("div")
  })

  it("should have zero rotation in middle of screen", function () {
    tracker(el, center.x, center.y)
    expect(getTransform(el)).to.include("rotateY(0deg) rotateX(0deg)")
  })

  it("should limit rotation", function () {
    tracker(el, 0, center.y)
    expect(getTransform(el)).to.include("rotateY(-89deg)")
    tracker(el, 0, center.y, {max_degrees: 3})
    expect(getTransform(el)).to.include("rotateY(-3deg)")
  })

  it("should always set perspective", function () {
    tracker(el, center.x, center.y)
    expect(getTransform(el)).to.include("perspective")
  })

  it("should support perspective from options", function () {
    tracker(el, center.x, center.y, {perspective: "1000px"})
    expect(getTransform(el)).to.include("perspective(1000px)")
  })

  it("should grab perspective from element's style", function () {
    el.style.perspective = "1000px"
    tracker(el, center.x, center.y)
    expect(getTransform(el)).to.include("perspective(1000px)")
  })
})
