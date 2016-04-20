"use strict";
var ThemeManager = require("../themes/microfolio/source/js/ThemeManager")

describe("ThemeManager", function () {
  var el
  beforeEach(function () {
    el = document.createElement("div")
    document.body.appendChild(el)
  })

  it("should find elements by name", function () {
    var theme = new ThemeManager(["div"])
    expect(theme._elements).to.have.lengthOf(1)
  })

  it("should find elements by reference", function () {
    var theme = new ThemeManager([el])
    expect(theme._elements).to.have.lengthOf(1)
  })

  it("should throw on invalid element", function () {
    var fn = function () {
      new ThemeManager(["doesntexist"])
    }
    expect(fn).to.throw(Error)
  })

  describe("#set", function () {
    it("should call onChanged", function (done) {
      var theme = new ThemeManager([])
      theme.onChanged = function (theme) {
        expect(theme).to.equal("foo")
        done()
      }
      theme.set("foo")
    })

    it("should emit event", function (done) {
      var theme = new ThemeManager([])
      theme.on(theme.events.changed, function (theme) {
        expect(theme).to.equal("foo")
        done()
      })
      theme.set("foo")
    })

    it("should add theme to element", function () {
      var theme = new ThemeManager(["div"])
      theme.set("foo")
      expect(el.className).to.equal("foo")
    })
  })

  describe("#setRandom", function () {
    it("should pick a random element", function () {
      var theme = new ThemeManager([], ["bar"])
      theme.setRandom()
      expect(theme.theme).to.equal("bar")
    })

    it("should support endless picking", function () {
      var theme = new ThemeManager([], ["foo", "bar"])
      theme.setRandom()
      theme.setRandom()
      theme.setRandom()
      expect(["foo", "bar"]).to.contain(theme.theme)
    })
  })
})
