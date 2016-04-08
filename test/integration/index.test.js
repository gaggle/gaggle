"use strict";

// this.demoTestGoogle = function (browser) {
//   browser
//     .url('http://example.com')
//     .waitForElementVisible('body', 1000)
//     .click('a')
//     .waitForElementVisible('body', 1000)
//     .assert.title('IANA — IANA-managed Reserved Domains')
//     .end();
// };

var validThemes = ["sunrise", "streaky", "clouds", "dog", "hospital", "dusk"]

module.exports = {
  before: function (browser) {
    browser
      .url("http://localhost:4000")
      .waitForElementVisible("body", 1000)
  },

  "noJS fallback - no elements should be tagged with 'noJS'": function (browser) {
    browser.expect.element('.noJS').to.not.be.present
  },

  "theming - should apply theme to .content": function (browser) {
    browser
      .getAttribute(".content", "class", function (result) {
        var overlap = intersect(result.value.split(" "), validThemes)
        this.assert.equal(overlap.length, 1, overlap)
      })
  },

  "theming - should apply theme to buffer": function (browser) {
    browser
      .getAttribute(".back", "class", function (result) {
        var overlap = intersect(result.value.split(" "), validThemes)
        this.assert.equal(overlap.length, 1, overlap)
      })
  }
}



var intersect = function (array1, array2) {
  return array1.filter(function (n) {
    return array2.indexOf(n) != -1
  })
}
