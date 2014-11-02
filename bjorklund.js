var bjorklund = (function() {

  var generate = function(numPulses, numSteps) {
    var PULSE = '1',
      STEP = '0';
      pulses = repeat([PULSE], numPulses);
      steps = repeat([STEP], numSteps);
      pattern = distribute(steps, pulses);

    return pattern.reduce(function(accum, ele){
      return accum.concat(ele.split('').map(function(s) {
        return +s;
      }));
    }, []);
  };
  
  var distribute = function(dividend, remainder) {
    var newDividend = [],
      newRemainder = [];
    if (remainder.length > 1) {  
      newRemainder = repeat([dividend[0]], dividend.length % remainder.length);
      remainder.forEach(function (ele) {
        newDividend.push("" + dividend[0] + ele);
      });
      return distribute(newDividend, newRemainder);
    } else {
      return remainder ? dividend.concat(remainder) : dividend;
    }
  };
  
  var repeat = function (arr, repetitions) {
    var repeated;
    if (repetitions > 0) {
      repeated = arr.slice();
      for (var i = 0; i < repetitions - 1; i++) {
        repeated = repeated.concat(arr);
      }
    } else {
      repeated = [];
    }
    return repeated;
  };

  return {
    generate: generate
  };
})();
