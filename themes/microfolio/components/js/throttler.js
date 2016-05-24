"use strict";

// https://jsfiddle.net/jonathansampson/m7G64/
module.exports = function (callback, limit) {
  var wait = false;                         // Initially, we're not waiting
  return function () {                      // We return a throttled function
    if (!wait) {                            // If we're not waiting
      callback.apply(this, arguments)       // Execute users function
      wait = true;                          // Prevent future invocations
      setTimeout(function () {              // After a period of time
        wait = false;                       // And allow future invocations
      }, limit);
    }
  }
}
