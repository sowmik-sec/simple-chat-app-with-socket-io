const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const port = process.env.PORT || 5000;
const expressServer = http.createServer(app);

const io = new Server(expressServer);

io.on("connection", (socket) => {
  socket.join("kitchen-room");
  io.sockets.in("kitchen-room").emit("cooking", "Fried Rice");
  io.sockets.in("kitchen-room").emit("boiling", "Boiling water");

  socket.join("bed-room");
  io.sockets.in("bed-room").emit("sleep", `I'm sleeping`);
  io.sockets.in("bed-room").emit("rest", `I'm taking rest`);
});

// io.on("connection", (socket) => {
//   socket.on("chat", (msg) => {
//     io.emit("chat_transfer", msg);
//   });
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
