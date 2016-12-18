"use strict";
const expect = require("chai").expect
const uiTesting = require("../ui-testing")
const BlogEntryPage = require("./pages/blog_entry.page")
const FooterPage = require("./pages/footer.page")

describe("blog entry", () => {
  for (let e of uiTesting.sizes) {
    (function (size) {
      let size_s = `${size.width}x${size.height}`
      it(`has author info (${size_s})`, () => {
        BlogEntryPage.open("2016/example/")
        BlogEntryPage.size(size)
        FooterPage.scroll_author_picture()
        expect(FooterPage.author_picture.isVisible()).to.be.true
      })

      it(`displays list bullets (${size_s})`, () => {
        BlogEntryPage.open("2016/lists/")
        BlogEntryPage.size(size)
      })

      it(`displays comments (${size_s})`, () => {
        BlogEntryPage.open("2016/testing-disqus-comment-system/")
        browser.scroll("#disqus_thread")
        BlogEntryPage.size(size)
      })
    })(e)
  }
})
