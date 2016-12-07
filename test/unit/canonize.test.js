"use strict";
let expect = require("chai").expect
let canonize = require("../canonize")

describe("canonize", () => {
  it("should work", () => {
    expect(canonize("tHIS iS A TEst (sentence)")).to.eql("this-is-a-test-sentence")
  })
})
