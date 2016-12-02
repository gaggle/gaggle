"use strict";
const expect = require('chai').expect
const HomePage = new (require('./pages/home.page'))
const uiTesting = require("../ui-testing")

describe('home', function () {
  for (var e of uiTesting.sizes) {
    (function (size) {
      let size_s = `${size.width}x${size.height}`
      it(`has links to home and blog (${size_s})`, () => {
        HomePage.open()
        HomePage.size(size)
        expect(HomePage.home_link.isVisible()).to.be.true
        expect(HomePage.blog_link.isVisible()).to.be.true
      })
    })(e)
  }
})
