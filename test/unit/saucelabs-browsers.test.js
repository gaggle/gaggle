"use strict";
var expect = require("chai").expect
var get_browsers = require("../saucelabs-browsers")

describe("browsers", function () {
  const browsers = get_browsers()
  for (var key in browsers) {
    if (!browsers.hasOwnProperty(key)) continue
    let val = browsers[key]
    it(`should define dict for ${key}`, () => {
      expect(val).to.have.all.keys([
        "base", "browserName", "name",
        "platform", "version",
        "tunnel-identifier", "build"])
    })
  }

  it("should support name prefix option", () => {
    const browser = first(get_browsers({"name-prefix": "foobar"}))
    expect(browser.name).to.have.string("foobar")
  })

  it("should support tunnel option", () => {
    const browser = first(get_browsers({tunnel: "foo"}))
    expect(browser["tunnel-identifier"]).to.equal("foo")
  })

  it("should support build option", () => {
    const browser = first(get_browsers({build: "foo"}))
    expect(browser.build).to.have.string("foo")
  })
})

const first = function (obj) {
  return obj[Object.keys(obj)[0]]
}
