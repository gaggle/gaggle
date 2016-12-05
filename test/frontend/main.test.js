"use strict";
/* global onReady */
var expect = require("chai").expect
var createElements = require("../create-elements")

describe("main", function () {
  describe("#update_datetime", function () {
    it("unobtrusively transforms text", function () {
      var el = createElements("div", {
        text: "Hello World",
        class: "relative-time",
        dataset: {datetime: "1980-02-26T13:37:00+00:00"}
      })
      document.body.appendChild(el)
      onReady()
      expect(el.textContent).to.include("years ago")
    })
  })
})
