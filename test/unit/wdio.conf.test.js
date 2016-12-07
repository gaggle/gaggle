"use strict";
const expect = require("chai").expect
const _ = require("lodash")
const rewire = require("rewire")

describe("wdio.conf", () => {
  let conf, env

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
      conf = rewire("../../wdio.conf")
    })

    it("should specificy phantomjs capability", () => {
      expect(conf.config.capabilities).to.eql([{browserName: "phantomjs"}])
    })
  })

  describe("with SauceLabs active", () => {
    beforeEach(() => {
      process.env.SAUCE_USERNAME = "sauce_user"
      process.env.TRAVIS_JOB_NUMBER = "123"
      process.env.TRAVIS_BUILD_NUMBER = "abc"
      conf = rewire("../../wdio.conf")
    })

    it("should specify many capabilities", () => {
      expect(conf.config.capabilities.length).to.be.above(1)
    })

    it("should pass Travis job number as tunnel identifier", () => {
      expect(conf.config.capabilities[0]["tunnel-identifier"]).to.eq("123")
    })

    it("should pass Travis build number as build", () => {
      expect(conf.config.capabilities[0].build).to.eq("abc")
    })
  })
})

