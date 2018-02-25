var express = require('express');
var path = require('path');

var app = express();

var http = require('http').Server(app);

var port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, './frontend')));

http.listen(port, function() {
  console.log('listening on *:' + port);
});

require("jsdom").env("", function(err, window) {
	if (err) {
		console.error(err);
		return;
	}

	var $ = require("jquery")(window);
});

var main = function() {
document.getElementById('search-button').onclick = function()
{
  var input_value = document.getElementById('search-text').value;
  location.href = "https://giphy.com/" + input_value;

  console.log(document.getElementById('search-text').value);
  console.log(location.href);
};

}
$(document).ready(main);