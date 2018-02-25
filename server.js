var express = require('express');
var path = require('path');

var app = express();

var http = require('http').Server(app);

var port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, './frontend')));

http.listen(port, function() {
  console.log('listening on *:' + port);
});

document.getElementById('search-button').onclick = function()
{
  var input_value = document.getElementById('search-text').value;
  location.href = "https://giphy.com/" + input_value;

  console.log(document.getElementById('search-text').value);
  console.log(location.href);
};