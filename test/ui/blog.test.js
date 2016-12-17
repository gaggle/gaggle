"use strict";
const expect = require("chai").expect
const uiTesting = require("../ui-testing")
const BlogPage = require("./pages/blog.page")
const HeaderPage = require("./pages/header.page")

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
