const mongoose = require("mongoose");

// mongoose schema
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

//giving name to the schema model
const todoList = mongoose.model("todoList", todoSchema);
module.exports = todoList;
