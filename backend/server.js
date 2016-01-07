var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
app.get('/', function(req,res) {
  res.status(200).json({
    message: 'Welcome to the service'
  });
});

io.on('connection', function(socket) {
  console.log('user connected, id:', socket.id);
  socket.on('hello', function() {
    console.log('user said hello! id:', socket.id);
  });
  socket.on('disconnect', function() {
    console.log('user disconnected, id:', socket.id);
  });
});
http.listen(port, function(){
  console.log('listens on',port);
});
