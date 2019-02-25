var express = require('express');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

app.use(express.static('public'));




app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
  });






io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });

  io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
    });
  });

  io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });

  

 server.listen(process.env.PORT || 3000);
 console.log('hallo ik ben een serveur');

//   io.on('connection', function(socket) {
//     socket.on('send-nickname', function(nickname) {
//         socket.nickname = nickname;
//         users.push(socket.nickname);
//         console.log(users);
//     });

// });

// io.on('typing', () => {
//     socket.broadcast.emit('typing', {
//       username: socket.username
//     });
// });