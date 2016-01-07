var express = require('express')
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3001;
var io = require('socket.io-client');
app.get('/', function(req,res) {
  res.status(200).sendFile(__dirname+'/public/index.html');
});
app.get('/hello', function(req,res) {
  socket.emit('hello');
  res.status(200).json({
    message: 'you said hello'
  });
});
http.listen(port, function(){
  console.log('front end listens on',port);
});
var backendUrl = 'http://192.168.33.30:3000';
var socket = io.connect(backendUrl, {'forceNew':true});
