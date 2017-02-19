"use strict";
const expect = require("chai").expect
const Header = require("../pages/header.component")
const HomePage = require("../pages/home.page")
const uiTesting = require("../ui-testing")

describe("home", () => {
  for (let e of uiTesting.sizes) {
    (function (size) {
      let size_str = `${size.width}x${size.height}`
      it(`has links to home and blog (${size_str})`, () => {
        HomePage.open()
        HomePage.size(size)
        expect(Header.home_link.isVisible()).to.be.true
        expect(Header.blog_link.isVisible()).to.be.true
      })
    })(e)
  }
})
