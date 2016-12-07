"use strict";
const expect = require("chai").expect
const _ = require("lodash")
const rewire = require("rewire")

class FakeConfig {
  constructor() {
    this.data = {}
  }

  set(o) {
    Object.assign(this.data, o)
  }
}

describe("karma.conf", () => {
  let conf, env

  const get_conf = () => {
    let c = new FakeConfig()
    rewire("../karma.conf")(c)
    return c.data
  }

  before(() => {
    env = _.cloneDeep(process.env)
  })

  afterEach(() => {
    process.env = _.cloneDeep(env)
  })

  describe("by default", () => {
    beforeEach(() => {
      // Scoop out envs that are present when Travis runs
      delete process.env.SAUCE_USERNAME
      delete process.env.TRAVIS_JOB_NUMBER
      delete process.env.TRAVIS_BUILD_NUMBER
      conf = get_conf()
    })

    it("should specificy phantomjs browser", () => {
      expect(conf.browsers).to.eql(["PhantomJS"])
    })

    it("should specify coverage as reporter", () => {
      expect(conf.reporters).to.include("coverage")
    })
  })

  describe("with SauceLabs active", () => {
    beforeEach(() => {
      process.env.SAUCE_USERNAME = "sauce_user"
      process.env.TRAVIS_JOB_NUMBER = "123"
      process.env.TRAVIS_BUILD_NUMBER = "abc"
      conf = get_conf()
    })

    it("should specify many browsers", () => {
      expect(conf.browsers.length).to.be.above(1)
    })

    it("should specify many custom launchers", () => {
      expect(Object.keys(conf.customLaunchers).length).to.be.above(1)
    })

    it("should pass Travis job number as tunnel identifier", () => {
      const first_browser = conf.customLaunchers[conf.browsers[0]]
      expect(first_browser["tunnel-identifier"]).to.eq("123")
    })

    it("should pass Travis build number as build", () => {
      const first_browser = conf.customLaunchers[conf.browsers[0]]
      expect(first_browser.build).to.eq("abc")
    })

    it("should specify saucelabs as reporter", () => {
      expect(conf.reporters).to.include("saucelabs")
    })
  })
})

