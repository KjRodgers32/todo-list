const express = require("express");
const expressApp = express();
const cors = require("cors");

expressApp.use(express.json());
expressApp.use(cors());

module.exports = expressApp;
