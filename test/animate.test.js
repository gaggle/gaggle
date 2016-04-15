"use strict";
var animate = require("../themes/microfolio/source/js/animate")

describe("animate", function () {
  describe("#fadeIn", function () {
    var el
    beforeEach(function () {
      el = document.createElement("div")
      el.style.opacity = 0
    })

    it("should return a promise", function () {
      return animate.fadeIn(el)
    })

    it("should support completion callback", function (done) {
      animate.fadeIn(el, done)
    })

    it("should support options AND completion callback", function (done) {
      animate.fadeOut(el, {}, done)
    })

    it("should support duration", function () {
      var start = Date.now()
      var duration = 100
      return animate.fadeIn(el, {duration: duration})
        .then(function () {
          var elapsed = Date.now() - start
          var maxDuration = duration * 1.5
          assert.isBelow(elapsed, maxDuration)
        })
    })

    it("should support progress callback", function () {
      var called = false
      return animate.fadeIn(el, {
          progress: function () {
            called = true
          }
        })
        .then(function () {
          assert.isTrue(called)
        })
    })

    it("should animate opacity", function () {
      return animate.fadeIn(el)
        .then(function () {
          assert.equal(el.style.opacity, "1")
        })
    })
  })

  describe("#fadeOut", function () {
    var el
    beforeEach(function () {
      el = document.createElement("div")
      el.style.opacity = 1
    })

    it("should return a promise", function () {
      return animate.fadeOut(el)
    })

    it("should support completion callback", function (done) {
      animate.fadeOut(el, done)
    })

    it("should support options AND completion callback", function (done) {
      animate.fadeOut(el, {}, done)
    })

    it("should support duration", function () {
      var start = Date.now()
      var duration = 100
      return animate.fadeOut(el, {duration: duration})
        .then(function () {
          var elapsed = Date.now() - start
          var maxDuration = duration * 1.5
          assert.isBelow(elapsed, maxDuration)
        })
    })

    it("should support progress callback", function () {
      var called = false
      return animate.fadeOut(el, {
          progress: function () {
            called = true
          }
        })
        .then(function () {
          assert.isTrue(called)
        })
    })

    it("should animate opacity", function () {
      return animate.fadeOut(el)
        .then(function () {
          assert.equal(el.style.opacity, "0")
        })
    })
  })
})
