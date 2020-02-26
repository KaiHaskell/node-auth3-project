const express = require("express");

const authRouter = require("../routers/auth/auth-router.js");
const usersRouter = require("../routers/users/users-router.js");

const server = express();

server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

module.exports = server;

function checkRole(role) {}
