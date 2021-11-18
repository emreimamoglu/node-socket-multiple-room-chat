var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var room = require('./routes/room');
server.listen(5000);
app.use(express.json());

//app.use('/auth',auth); using these routes login process will be done
//app.use('/room',room); using these routes room creation and

const io = require('socket.io')(server,{cors: {origin: ['http://localhost:8080'],}});
const { sendMessage, joinRoom } = require("./socketHandler")(io);
const onConnection = (socket) => {
  socket.on("room:join",joinRoom);
  socket.on("message:send",sendMessage);
}

io.on("connection", onConnection);