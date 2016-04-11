"use strict";
require("chai").should()

var validThemes = ["sunrise", "streaky", "clouds", "dog", "hospital", "dusk"]

describe("index", function () {
  browser.addCommand("intersectClasses", function async(selector, otherClasses) {
    return browser.getAttribute(selector, "class")
      .then(function (classes) {
        return intersect(classes.split(" "), otherClasses)
      })
  })

  before(function () {
    browser.url("http://localhost:4000")
  })

  describe("noJS fallback", function () {
    it("all 'noJS' classes should be removed after page load", function () {
      browser.elements('.noJS').value.should.be.empty
    })
  })

  describe("theming", function () {
    it("should apply theme to .content", function () {
      browser.intersectClasses(".content", validThemes).should.have.length(1)
    })
  })
})

var intersect = function (array1, array2) {
  return array1.filter(function (n) {
    return array2.indexOf(n) != -1
  })
}
