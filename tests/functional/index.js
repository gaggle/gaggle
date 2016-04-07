"use strict";

define(function (require) {
  var registerSuite = require("intern!object")
  var assert = require("intern/chai!assert")
  var validThemes = ["sunrise", "streaky", "clouds", "dog", "hospital", "dusk"]

  registerSuite({
    name: "integration tests",

    before: function () {
      return this.remote
        .get(require.toUrl("http://localhost:4000"))
        .setFindTimeout(5000)
    },

    "noJS fallback": {
      "no elements should be tagged with 'noJS'": function () {
        return this.remote
          .findAllByClassName("noJS")
          .then(function (els) {
            assert.lengthOf(els, 0, "No elements should be found")
          })
      }
    },

    "theming": {
      "should apply theme to .content": function () {
        return this.remote
          .findByClassName("content")
          .then(function (el) {
            return el.getAttribute("class")
          })
          .then(function (classes) {
            return [classes, intersect(classes.split(" "), validThemes)]
          })
          .then(function (data) {
            var classes = data[0], result = data[1]
            assert.lengthOf(result, 1, "Can't find theme in classes '" + classes + "'")
          })
      },

      "should apply theme to buffers": function () {
        this.remote.findByClassName("back")
          .then(function (el) {
            return el.getAttribute("class")
          })
          .then(function (classes) {
            return [classes, intersect(classes.split(" "), validThemes)]
          })
          .then(function (data) {
            var classes = data[0], result = data[1]
            assert.lengthOf(result, 1, "Can't find theme in classes '" + classes + "'")
          })
      }
    }
  })
})

var intersect = function (array1, array2) {
  return array1.filter(function (n) {
    return array2.indexOf(n) != -1
  })
}
