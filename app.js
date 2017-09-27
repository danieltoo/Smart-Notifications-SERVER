var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);
app.set('view engine', 'ejs');
server.listen(3000, () => console.log('listening on *:3000'));

var messages = []

var s = null

app.get("/", (req,res) => { 
  try {
    s.broadcast.emit('message', "Se conectaron");
  }catch (e) {
    console.log("Primer")
  }
  res.render("index");
});


websocket.on('connection', (socket) => {
    s = socket
  	console.log('A client just joined on', socket.id);
    
  	socket.on('message', (message) => {
  	  messages.push(message)
  	  console.log(messages)
  	  socket.broadcast.emit('message', message);
  	});

});