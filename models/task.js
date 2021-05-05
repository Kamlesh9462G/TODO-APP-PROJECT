// require the library
const mongoose = require("mongoose");

// creating Schema for Tasks
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  created_at: { type: Date, required: true, default: Date.now },
});

const Task = mongoose.model("Task", taskSchema);

// exporting the Schema
module.exports = Task;
