var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);
server.listen(3000, () => console.log('listening on *:3000'));

var messages = []

app.get("/", function (req,res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.send({
    	'status' : 'ok'
    });
})

websocket.on('connection', (socket) => {
  	console.log('A client just joined on', socket.id);
  	
  	socket.on('message', (message) => {
	  messages.push(message)
	  console.log(messages)
	  socket.broadcast.emit('message', message);
	});

});