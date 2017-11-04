var express = require('express');
var http = require('http')
var socketio = require('socket.io');
var bodyParser = require('body-parser')

var app = express();
var server = http.Server(app);
var websocket = socketio(server);

var port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
server.listen(port, () => console.log('listening on *:8000'));

var alerts = []
var socketApps = null

var tempUser  = {
  idUser : "0000002",
  refCompany : "CENIDET",
  phoneNumber : [],
  name:"Daniel",
  lastName : "Torres",
  email: "mi@email.com",
  userName: "Danieltoo",
  aliasUser:"Danieltoo"
}


app.post("/login", (req,res) => { 
  console.log(req.body.email)
  console.log(req.body.password)
  if(req.body.email === tempUser.email && req.body.password === 'pass'){
    res.status(200).json({token : "Mi token", idUser:tempUser.idUser})
  }else {
    if (req.body.email !== tempUser.email){
      res.status(404).send("The email you've entered doesn't match any account")
    }else {
       res.status(404).send("The password you've entered is incorrect")
    } 
  }
});


app.post('/recive/alerts', (req,res) => {
  console.log("Recive alerts")
  alerts.push(req.body)
  socketApps.emit('alertsCounter', alerts.length);
  res.status(200).send('ok')
})


app.get('/api/user/:userId', (req,res) => {
  console.log("Requiere usuario")
  res.status(200).json(tempUser)
})

app.post('/api/alerts', (req, res) => {
  console.log(req.body.longitude)
  console.log(req.body.latitude)
  res.status(200).json({alerts : alerts})
})

app.use(function(req, res, next) {
    res.status(400);
    res.send('404 : Request Not Found, check the URL or the parameters sended');
});


websocket.on('connection', (socket) => {
    s = socket
  	console.log('A client just joined on', socket.id);
    socket.emit('counterAlert', alerts.length);
    socket.on('disconnect', function() {
      console.log('Got disconnect!');
   });
});