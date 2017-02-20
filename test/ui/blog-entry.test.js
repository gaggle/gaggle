"use strict";
const expect = require("chai").expect
const BlogEntryPage = require("../pages/blog-entry.page")
const Footer = require("../pages/footer.component")
const uiTesting = require("../ui-testing")

describe("blog entry", () => {
  for (let e of uiTesting.sizes) {
    (function (size) {
      let size_str = `${size.width}x${size.height}`
      it(`has author info (${size_str})`, () => {
        BlogEntryPage.open("1980/example/")
        BlogEntryPage.size(size)
        Footer.scroll_author_picture()
        expect(Footer.author_picture.isVisible()).to.be.true
      })

      it(`displays list bullets (${size_str})`, () => {
        BlogEntryPage.open("1980/lists/")
        BlogEntryPage.size(size)
      })

      it(`displays comments (${size_str})`, () => {
        BlogEntryPage.open("1980/testing-disqus-comment-system/")
        BlogEntryPage.size(size)
        browser.scroll("#disqus_thread")
      })

      it(`renders an alpha post (${size_str})`, () => {
        BlogEntryPage.open("1980/alpha/")
        BlogEntryPage.size(size)
      })
    })(e)
  }
})
