$(document).ready(function() {
    var socket = io();
    window.socket = socket;

    document.getElementById('search-button').onclick = function()
    {
      var input_value = document.getElementById('search-text').value;
      //location.href = "https://giphy.com/" + input_value;
      console.log(document.getElementById('search-text').value);

      socket.emit('query',input_value);
      document.getElementById('search-text').value = "Search for...";
    };

    socket.on('return_gif', function(message){
        console.log(message);
        //location.href = message;
        var gif_url = message;
        document.getElementById('kitty').src = gif_url;
    });

     //socket.emit('Heeeeey','Hello');
   // socket.on('Welcome', function(message){
       // console.log(message);
   // });
});

function fillField(input,val) {
    if(input.value == "")
       input.value = val;
  };
  
function clearField(input,val) {
    if(input.value == val)
       input.value = "";
  };
  
function displayGif(input, val) {
    if (input.value == "Static Image")
        input.value = val;
};