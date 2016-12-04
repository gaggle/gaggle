"use strict";
var expect = require("chai").expect
var canonize = require("./canonize")

describe("canonize", function () {
  it("should work", () => {
    expect(canonize("tHIS iS A TEst (sentence)")).to.eql("this-is-a-test-sentence")
  })
})
