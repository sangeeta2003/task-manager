// tasks.js
const express = require('express');
const router = express.Router();
const {
  getAlltasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} = require ('..//controller/tasks')
// Define your route handlers using the router object.
router.route('/').get(getAlltasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
  // Your route logic here


module.exports = router;
