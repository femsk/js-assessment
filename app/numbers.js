exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return ((num >> (bit - 1)) & 1);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var arr = [];
    for (var i = 0; i <= 7; i++) {
      arr.unshift( num & (1 << i) ? 1 : 0 );
    }
    return arr.join('');
  },

  multiply: function(a, b) {
    var n = a*b;
    return +n.toFixed(5);
  }
};
