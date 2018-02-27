$(document).ready(function() {
    document.getElementById('search-button').onclick = function()
    {
      var input_value = document.getElementById('search-text').value;
      location.href = "https://giphy.com/" + input_value;
      document.getElementById('search-text').value = "Search for...";

      console.log(document.getElementById('search-text').value);
      console.log(location.href);
    };
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
