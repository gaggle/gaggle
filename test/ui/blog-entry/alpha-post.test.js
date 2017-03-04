"use strict";
const BlogEntryPage = require("../pages/blog-entry.page")
const uiTesting = require("../ui-testing")

describe("blog entry", () => {
  for (let e of uiTesting.sizes) {
    (function (size) {
      let size_str = `${size.width}x${size.height}`
      it(`renders an alpha post (${size_str})`, () => {
        BlogEntryPage.open("1980/alpha/")
        BlogEntryPage.size(size)
      })
    })(e)
  }
})