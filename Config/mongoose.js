const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/to-do-list");

const dp = mongoose.connection;
dp.on("error", console.error.bind(console, "connection error to dp!"));

dp.once("open", function () {
  console.log("we are connected!");
});
