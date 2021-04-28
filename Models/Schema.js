const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  date: {
    type: String,
  },
});

const todoList = mongoose.model("todoList", todoSchema);
module.exports = todoList;
