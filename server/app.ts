var express = require("express");
var app = express();
const cors = require("cors");
var taskController = require("./controllers/taskController");

// Middleware configuration
app.use(express.json());
app.use(cors());

// Routes
app.use("/tasks", taskController);

module.exports = app;
