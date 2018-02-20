exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var prom = new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve(value);
      }, 1000);
    });
    return prom;
  },

  manipulateRemoteData: function(url) {
    function http(url) {
      return new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
          if(this.status == 200) {
            resolve(this.response);
          }
        };

        xhr.send();
      });
    }

    return http(url).then(
      response => {
        var arr = JSON.parse(response);
        var arr2 = [];
        arr.people.forEach(function(item, i, arr) {
          arr2.push(item.name);
        });
        return arr2.sort();
      }
    );
  }  
};
