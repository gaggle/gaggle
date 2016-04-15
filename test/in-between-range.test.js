"use strict";
var inBetween = require("../themes/microfolio/source/js/in-between-range")

describe("in-between", function () {
  it("should find value", function () {
    var conf = {
      "1-10": "foo"
    }
    assert.equal(inBetween(conf, 5), "foo")
    assert.equal(inBetween(conf, 1.234), "foo")
  })

  it("should favor first value along borders", function () {
    var conf = {
      "1-3": "foo",
      "3-6": "bar"
    }
    assert.equal(inBetween(conf, 2.9), "foo")
    assert.equal(inBetween(conf, 3), "foo")
    assert.equal(inBetween(conf, 3.1), "bar")
  })

  it("should return undefined if not specified", function () {
    var conf = {
      "1-2": "foo",
      "8-9": "bar"
    }
    assert.equal(inBetween(conf, 5), undefined)
  })
})
