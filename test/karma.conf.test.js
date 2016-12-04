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

describe("karma.conf", function () {
  let conf, env

  const get_conf = () => {
    var c = new FakeConfig()
    rewire("../karma.conf")(c)
    return c.data
  }

  before(() => {
    env = _.cloneDeep(process.env)
  })

  afterEach(()=> {
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
})

