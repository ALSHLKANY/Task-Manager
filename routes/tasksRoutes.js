const express = require("express");
const router = express.Router();
const tasksControllers = require("../controllers/tasksControllers");

router
  .route("/")
  .get(tasksControllers.getAllTasks)
  .post(tasksControllers.createTask);

router
  .route("/:id")
  .get(tasksControllers.getTask)
  .patch(tasksControllers.updateTask)
  .delete(tasksControllers.deleteTask);

module.exports = router;
