const io = require('socket.io')(3000,{cors: {origin: ['http://localhost:8080'],}});
const { sendMessage, joinRoom } = require("./socketHandler")(io);
const onConnection = (socket) => {
  socket.on("room:join",joinRoom);
  socket.on("message:send",sendMessage);
}
io.on("connection", onConnection);