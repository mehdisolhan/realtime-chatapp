const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.js");

const PORT = process.env.PORT || 5000;

const router = require("./router");

corsOptions = {
  cors: true,
  origins: ["http://localhost:3000", "http://localhost:5000"],
};

const app = express();
const server = http.createServer(app);
const io = socketio(server, corsOptions);

io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    console.log("join", socket.id);
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) {
      return callback(error);
    }

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room!`,
    });
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name}, has joined the room!`,
    });

    socket.join(user.room);

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    console.log(socket.id);
    const user = getUser(socket.id);

    console.log("user ->", user.name);
    console.log("message ->", message);

    io.to(user.room).emit("message", { user: user.name, text: message });
    io.to(user.room).emit("roomData", {
      room: user.name,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left.`,
      });
    }
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started`));
