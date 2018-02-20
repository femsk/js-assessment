exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) return i
    }
    return -1;
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) sum += arr[i]
    return sum;
  },

  remove: function(arr, item) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var arr3 = [];
    arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var countElem = 0;
    arr.forEach(function (thisItem, i, arr) {
      if (arr[i] === item) {
        countElem++;
      }
    });
    return countElem;
  },

  duplicates: function(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        
        if ((i != j) && (arr[i] === arr[j]) && (arr2.indexOf(arr[i]) === -1)) {
          arr2.push(arr[i]);
        }

      }
    }
    return arr2;
  },

  square: function(arr) {
    arr.forEach(function(item, i, arr) {
      arr.splice(i, 1, Math.pow(item, 2));
    });
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var occ = [];
    arr.forEach(function(item , i, arr1) {
      if (item === target) occ.push(i);
    });
    return occ;
  }
};
