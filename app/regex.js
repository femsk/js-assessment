exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return str.search(/\d/) !== -1;
  },

  containsRepeatingLetter: function(str) {
    var res = str.match(/([a-z])\1{1,}/ig);
    if (res !== null) return true;
    else return false;
  },

  endsWithVowel: function(str) {
    return str.search(/[aeiou]$/i) !== -1;
  },

  captureThreeNumbers: function(str) {
    var res = str.match(/\d{3}/g);
    if (res !== null) return res[0];
    else return false;
  },

  matchesPattern: function(str) {
    re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(str);
  },

  isUSD: function(str) {
    re = /^\$(\d{1,3}){1}(,\d{3})*(\.\d{2})?$/;
    return re.test(str);
  }
};
