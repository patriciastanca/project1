var express = require('express');
var path = require('path');

var app = express();

var http = require('http').Server(app);

var io = require('socket.io')(http);

var port = process.env.PORT || 3001;

var GphApiClient = require ('giphy-js-sdk-core');
client = GphApiClient("HSub9HpymwLnjDWWssQ844HLmzVTVv4n");

app.use(express.static(path.join(__dirname, './frontend')));

io.sockets.on("connection", function(socket){
  //console.log(socket.id); 
  //socket.on("Heeeeey", function(message){
   // console.log("It works!");
   // socket.emit('Welcome','HELLO');
  //});

  socket.on('query', function(message){
    console.log("The search keyword inserted by the user is: ", message);

    //declare the array that will contain the list of gif urls returned by the search
    var gif_results = [];

    //search for gifs that match the search keyword
    client.search('gifs', {"q": message}).then((response)=> {
      response.data.forEach((gifObject) => {
        gif_results.push(gifObject.embed_url);
        console.log("patriiiii", gifObject);
      });

      console.log("The array of gifs that match the search keyword: ", gif_results);
      console.log("The length of the array of gifs that match the search keyword: ", gif_results.length);

    //select a random gif from the array of gifs returned by the search
    var selected_random_gif_url = gif_results[Math.floor(Math.random() * gif_results.length)];
    console.log("The URL of the randomly selected gif is:", selected_random_gif_url);

    //emit the selected random gif, even if it is undefined
    socket.emit('return_gif', selected_random_gif_url);
    })
    .catch((err) => {
      console.log("The followin error was encountered:", err);
    });
  });
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});

