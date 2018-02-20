exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var arr = [];
    var subArr = [];
    var result = [];
    function rec(data) {
      if (data.hasOwnProperty('files')) {
        for (var i = 0; i < data.files.length; i++) {
          if ((typeof data.files[i]) === "string") {
            arr.push(data.files[i]);
            if (data.files[i].indexOf(dirName) === (data.files[i].length - 2)) {
              subArr.push(data.files[i]);
            }
          }
          if ((typeof data.files[i]) === "object") {
            rec(data.files[i]);
          }
        }
      }
    }
    rec(data);
    if (dirName) {result = subArr;}
    else {result = arr;}
    return result;
  },

  permute: function(arr) {

    function permutations(list)
    {
      // Empty list has one permutation
      if (list.length == 0)
        return [[]];

      var result = [];
      
      for (var i=0; i<list.length; i++)
      {
        // Clone list (kind of)
        var copy = Object.create(list);
    
        // Cut one element from list
        var head = copy.splice(i, 1);
        
        // Permute rest of list
        var rest = permutations(copy);
        
        // Add head to each permutation of rest of list
        for (var j=0; j<rest.length; j++)
        {
          var next = head.concat(rest[j]);
          result.push(next);
        }
      }
      
      return result;
    }
    return permutations(arr);

  },

  fibonacci: function(n) {
    function fib(n) {
      return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }
    return fib(n);
  },

  validParentheses: function(n) {
    var str = '';
    var arr = [];
        
    function brace(leftRem, rightRem, str, count) {      
      if (leftRem < 0 || rightRem < leftRem) return;

      if (leftRem == 0 && rightRem == 0) {
        arr.push(str);
        
      } else {
        if (leftRem > 0) {
          str = str.slice(0, count) + '(' + str.slice(count+1);
          brace((leftRem - 1), rightRem, str, count + 1);
        }
        if (rightRem > 0) {
          str = str.slice(0, count) + ')' + str.slice(count+1);
          brace(leftRem, (rightRem - 1), str, count + 1);
        }
      }
    }

    brace(n, n, str, 0);
    return arr;
  }
};
