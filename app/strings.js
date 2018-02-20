exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	str = str.replace(/([a-z])\1{1,}/g, function(a,b,c) { return a.slice(0, amount); });
  	return str;
  },
  wordWrap: function(str, cols) {
		var res = str.match(/([a-z]{1,})/g);
		var resultStr = "";
		res.forEach(function(item, i, res) {
			if(item.length > 1 && res[i+1] !== undefined && res[i+1].length > 1) {resultStr += item + '\n';}
			else if (item.length === 1 && res[i+1] !== undefined && res[i+1].length > 1) {resultStr += item + '\n';}
			else if (item.length === 1 && res[i+1] !== undefined && res[i+1].length === 1) {resultStr += item + ' ';}
			else if (i === res.length-1) {resultStr += item;}
		});
		return resultStr;
  },

  reverseString: function(str) {
  	return str.split('').reverse().join('');
  }
};
