"use strict";
var expect = require("chai").expect
var batrix = require("./browser-matrix")

describe("browser-matrix", function () {
  it("returns list", function () {
    expect(batrix('foo').length).to.eql(5)
  })

  it("has entries with expected keys", function () {
    expect(batrix('foo')[0]).to.contain.all.keys(["browser", "buildname", "groupname", "res", "slug", "tunnelIdentifier"])
  })
})
