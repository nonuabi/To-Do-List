// importing mongoose
const mongoose = require("mongoose");
//connecting mongoose to the project
mongoose.connect("mongodb://localhost/to-do-list");

//making a ref of mongoose connection
const dp = mongoose.connection;

//checking for the errors
dp.on("error", console.error.bind(console, "connection error to dp!"));

//open the connect
dp.once("open", function () {
  console.log("we are connected!");
});
