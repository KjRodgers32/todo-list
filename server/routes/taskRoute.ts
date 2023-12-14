var express = require("express");
var router = express.Router();
var taskController = require("../app/task-controller");

router.route("/").get(taskController.getTask).post(taskController.addTask);

module.exports = router;
