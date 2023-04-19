const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const port = process.env.PORT || 5000;
const expressServer = http.createServer(app);

const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("New User Connected");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
