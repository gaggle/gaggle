"use strict";
var throttler = require("../themes/microfolio/source/js/throttler")

describe("throttler", function () {
  var clock
  beforeEach(function () {
    clock = sinon.useFakeTimers()
  })

  afterEach(function () {
    clock.restore()
  })

  it("should invoke function", function () {
    var spy = sinon.spy()
    var fn = throttler(spy, 1000)
    fn()
    expect(spy.callCount).to.eql(1)
  })

  it("should limit invocations", function () {
    var spy = sinon.spy()
    var fn = throttler(spy, 1000)
    fn()
    fn()
    expect(spy.callCount).to.eql(1)
  })

  it("should allow reinvoke after delay", function () {
    var spy = sinon.spy()
    var fn = throttler(spy, 1000)
    fn()
    clock.tick(999)
    fn()
    clock.tick(1)
    fn()
    expect(spy.callCount).to.eql(2)
  })
})
