var express = require('express');
var path = require('path');

var app = express();

var http = require('http').Server(app);

var port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, './frontend')));

http.listen(port, function() {
  console.log('listening on *:' + port);
});

var main = function() {
  
function fillField(input,val) {
  if(input.value == "")
     input.value=val;
};

function clearField(input,val) {
  if(input.value == val)
     input.value="";
};

document.getElementById('search-button').onclick = function()
{
  var input_value = document.getElementById('search-text').value;
  location.href = "https://giphy.com/" + input_value;

  console.log(document.getElementById('search-text').value);
  console.log(location.href);
};

}

$(document).ready(main);