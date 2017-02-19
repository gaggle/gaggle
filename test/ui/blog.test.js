"use strict";
const expect = require("chai").expect
const BlogPage = require("../pages/blog.page")
const Header = require("../pages/header.component.js")
const uiTesting = require("../ui-testing")

describe("blog", () => {
  for (let e of uiTesting.sizes) {
    (function (size) {
      let size_str = `${size.width}x${size.height}`
      it(`has links to home and blog (${size_str})`, () => {
        BlogPage.open()
        BlogPage.size(size)
        expect(Header.home_link.isVisible()).to.be.true
        expect(Header.blog_link.isVisible()).to.be.true
      })
    })(e)
  }
})
