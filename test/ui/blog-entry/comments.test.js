"use strict";
const BlogEntryPage = require("../../pages/blog-entry.page")
const uiTesting = require("../../ui-testing")

describe("blog entry", () => {
  for (let e of uiTesting.sizes) {
    (function (size) {
      let size_str = `${size.width}x${size.height}`
      it(`displays comments (${size_str})`, () => {
        BlogEntryPage.open("1980/testing-disqus-comment-system/")
        BlogEntryPage.size(size)
        browser.scroll("#disqus_thread")
      })
    })(e)
  }
})
