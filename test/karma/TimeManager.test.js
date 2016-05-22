"use strict";
var TimeManager = require("../../themes/microfolio/source/js/TimeManager")

var SECOND = 1000
var MINUTE = 60 * SECOND
var HOUR = 60 * MINUTE
var A_MOMENT = 90 * SECOND

describe("TimeManager", function () {
  var clock
  beforeEach(function () {
    clock = sinon.useFakeTimers()
  })

  afterEach(function () {
    clock.restore()
  })

  describe("construction", function () {
    it("should allow construction", function () {
      new TimeManager()
    })

    it("should support options arg", function () {
      new TimeManager({})
    })

    it("should support custom start time option", function () {
      var t = new TimeManager({startTime: 0})
      expect(t.time.getTime()).to.equal(0)
    })
  })

  describe("#set", function () {
    var t
    beforeEach(function () {
      t = new TimeManager()
      t.start()
    })

    it("should support new time via date object", function () {
      t.set(new Date(0))
      expect(t.time.getTime()).to.equal(0)
    })

    it("should support new time via epoch", function () {
      t.set(0)
      expect(t.time.getTime()).to.equal(0)
    })

    it("should also reset start time when setting new time", function () {
      t.set(0)
      expect(t.opts.startTime.getTime()).to.equal(0)
    })

    it("should return the new time", function () {
      var res = t.set(0)
      expect(res).to.exist
    })

    it("should emit initialized on setting time", function (done) {
      t.on(t.events.initialized, done)
      t.set(0)
    })
  })

  describe("#start", function () {
    var t
    beforeEach(function () {
      t = new TimeManager()
    })

    it("should not start automatically", function () {
      t.on(t.events.tick, function () {
        assert.fail()
      })
      clock.tick(A_MOMENT)
    })

    it("should be startable", function (done) {
      t.on(t.events.tick, done)
      t.start()
      clock.tick(A_MOMENT)
    })

    it("should emit initialized on start", function (done) {
      t.on(t.events.initialized, done)
      t.start()
    })

    it("should not initialize on quiet start", function () {
      t.on(t.events.initialized, assert.fail)
      t.start(true)
    })
  })

  describe("#stop", function () {
    var t
    beforeEach(function () {
      t = new TimeManager()
      t.start()
    })

    it("should be stoppable", function () {
      t.on(t.events.tick, assert.fail)
      t.stop()
      clock.tick(A_MOMENT)
    })
  })

  describe("#on time events", function () {
    var t
    beforeEach(function () {
      t = new TimeManager({startTime: new Date(1980, 1, 26, 0, 0, 0)})
      t.start()
    })

    it("should emit every second", function (done) {
      t.on(t.events.theSecond, function (second) {
        expect(second).to.equal(1)
        done()
      })
      clock.tick(SECOND)
    })

    it("should emit on the minute", function (done) {
      t.on(t.events.theMinute, function (minute) {
        expect(minute).to.equal(1)
        done()
      })
      clock.tick(MINUTE)
    })

    it("should emit minutes elapsed", function (done) {
      t.on(t.events.minutesElapsed, function (minutes) {
        expect(minutes).to.equal(1)
        done()
      })
      clock.tick(MINUTE)
    })

    it("should emit on the hour", function (done) {
      t.on(t.events.theHour, function (hour) {
        expect(hour).to.equal(1)
        done()
      })
      clock.tick(HOUR)
    })
  })
})
