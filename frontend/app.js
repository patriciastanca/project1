$(document).ready(function() {
    var socket = io();
    window.socket = socket;

    document.getElementById('search-button').onclick = function()
    {
      var input_value = document.getElementById('search-text').value;
      location.href = "https://giphy.com/" + input_value;
      document.getElementById('search-text').value = "Search for...";
      socket.emit('query',input_value);

      console.log(document.getElementById('search-text').value);
      console.log(location.href);
    };

   
    socket.emit('Heeeeey','Hello');
    socket.on("Welcome", function(message){
        console.log(message);
    });
});

function fillField(input,val) {
    if(input.value == "")
       input.value=val;
  };
  
  function clearField(input,val) {
    if(input.value == val)
       input.value="";
  };

  //function setDefaultValueForSearchField(){
  //  document.getElementById('search-text').value = "Search for...";
  //}
