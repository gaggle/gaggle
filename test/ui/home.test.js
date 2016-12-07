"use strict";
const expect = require("chai").expect
const HeaderPage = new (require("./pages/header.page"))
const HomePage = new (require("./pages/home.page"))
const uiTesting = require("../ui-testing")

describe("home", () => {
  for (let e of uiTesting.sizes) {
    (function (size) {
      let size_s = `${size.width}x${size.height}`
      it(`has links to home and blog (${size_s})`, () => {
        HomePage.open()
        HomePage.size(size)
        expect(HeaderPage.home_link.isVisible()).to.be.true
        expect(HeaderPage.blog_link.isVisible()).to.be.true
      })
    })(e)
  }
})
