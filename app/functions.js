exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures: function(arr, fn) {
    var arr2 = [];
    var fn2 = function(a) {
      return function() { return fn(a); };
    };

    for (var i = 0; i < arr.length; i++) {
      arr2.push(fn2(arr[i]));
    }
    return arr2;
  },

  partial: function(fn, str1, str2) {
    return bound = fn.bind(null, str1, str2);
  },

  useArguments: function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    return fn.apply(this, [].slice.call(arguments, 1, arguments.length));
  },

  partialUsingArguments: function(fn) {
    var arr = [];
    arr = [].slice.call(arguments, 1);
    return function(arg) {
      var arr1 = [].slice.call(arguments);
      var conArr = arr.concat(arr1);
      return fn.apply(null, conArr);
    };
  },

  curryIt: function(fn) {
    function applyArguments(_fn, args) {
      return _fn.apply(null, args);
    }
    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

        if (allArgumentsProvided) {
          return applyArguments(fn, accumulatedArguments);
        }

        return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
      };
    }

    return getArgumentAccumulator([], fn.length);
  }
};
