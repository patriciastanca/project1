var main = function() {
    //to do
    document.getElementById('search-button').onclick = function()
    {
        location.href = document.getElementById('search-text').value;
        console.log("location.href");
    };
}

$(document).ready(main);