exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
	count: function (start, end) {
		var timer;
		function tick() {
			console.log(start);
			start++;
			if (start <= end) {
				timer = setTimeout(tick, 100);
			}
		}
		tick();
		
		return {
			cancel: function() {
				timer && clearTimeout(timer);
			}
		};
	}
};
