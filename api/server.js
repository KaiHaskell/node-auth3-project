const express = require("express");

const restricted = require("../routers/auth/restricted-middleware");

const authRouter = require("../routers/auth/auth-router");
const usersRouter = require("../routers/users/users-router");

const server = express();

server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", restricted, usersRouter);

module.exports = server;

// function checkRole(role) {
//   return (req, res, next) => {
//     if (
//       req.decodedToken &&
//       req.decodedToken.role &&
//       req.decodedToken.role.toLowerCase() === role
//     ) {
//       next();
//     } else {
//       res.status(403).json({ Error: "Could not verify role" });
//     }
//   };
// }
