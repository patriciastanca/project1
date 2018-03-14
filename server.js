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
    console.log(message);

    //search for a gif
    client.search('gifs', {"q": message, "limit": 1}).then((response)=> {
      response.data.forEach((gifObject) => {
        console.log(gifObject);
        socket.emit('return_gif', gifObject.embed_url);

        console.log("Gif name: ", gifObject.title);
        console.log("Gif URL: ", gifObject.url);
      });
    })
    .catch((err) => {
    });
  });
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});

