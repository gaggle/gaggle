"use strict";
var DoubleBuffer = require("../themes/microfolio/source/js/double-buffer")

describe("double-buffer", function () {
  this.timeout(5000)
  var buffer
  beforeEach(function () {
    buffer = new DoubleBuffer(undefined, undefined, {duration: 10})
  })

  it("should have default duration", function () {
    var buffer = new DoubleBuffer(undefined, undefined)
    expect(buffer.options.duration).to.be.a("number")
  })

  describe("#set", function () {
    it("should immediately set front buffer", function () {
      var buffer = new DoubleBuffer(undefined, undefined, {duration: 10000})
      return new Promise(function (resolve) {
        buffer.set("./base/test/test.jpg")
        setTimeout(resolve, 100) // enough time to load image, but not enough to end the transition
      })
        .then(function () {
          expect(buffer.back.get()).to.be.empty
          expect(buffer.front.get()).not.to.be.empty
        })
    })

    it("should eventually set back buffer", function () {
      return buffer.set("./base/test/test.jpg")
        .then(function () {
          expect(buffer.back.get()).not.to.be.empty
          expect(buffer.front.get()).to.be.empty
        })
    })

    it("should reject on bad filepath", function () {
      return buffer.set("doesntexist.jpg")
        .then(
          undefined,
          function (err) {
            expect(err).to.be.an("Error")
          })
    })

    it("should support setting multiple paths", function () {
      return buffer.set("./base/test/test.jpg", "./base/test/test.jpg")
    })
  })
})
