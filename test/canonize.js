"use strict";

module.exports = function (s) {
  return s
    .toLowerCase()
    .replace(/( |\.)+/g, "-")
    .replace(/(\(|\))/g, "")
}
