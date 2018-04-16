$(document).ready(function() {
    var socket = io();
    window.socket = socket;

    var search_button = document.getElementById('search-button');
    var search_field = document.getElementById('search-text');
    var result_field = document.getElementById('result-field');

    search_button.onclick = function()
    {
      var input_value = search_field.value;
      socket.emit('query',input_value);
      search_field.value = "Search for...";
    };

    socket.on('return_gif', function(message){
        console.log(message);
        var gif_url = message;

        if (gif_url != undefined) {
            result_field.src = gif_url;
        } else {
            result_field.src = "css/oops_robot.jpg";
        }
        
    });

    search_field.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode == 13){
            search_button.click();
            search_button.focus();
        }
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