"use strict";
const expect = require("chai").expect
const BlogPage = new (require("./pages/blog.page"))
const HeaderPage = new (require("./pages/header.page"))
const uiTesting = require("../ui-testing")

describe("blog", () => {
  for (let e of uiTesting.sizes) {
    (function (size) {
      let size_s = `${size.width}x${size.height}`
      it(`has links to home and blog (${size_s})`, () => {
        BlogPage.open()
        BlogPage.size(size)
        expect(HeaderPage.home_link.isVisible()).to.be.true
        expect(HeaderPage.blog_link.isVisible()).to.be.true
      })
    })(e)
  }
})
