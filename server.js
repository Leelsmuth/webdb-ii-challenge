const express = require("express");
const server = express();
const helmet = require("helmet");
const carRouter = require("./routes/cars-router");

// Basic server usage
server.use(express.json());
server.use(helmet());

// Routes
// server.use("/api/cars", carRouter);

server.get("/", (req, res) => {
  res.send("<h3>DB Helpers with knex</h3>");
});

module.exports = server;
