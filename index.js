// importing exprss
const express = require("express");
const connectDB = require("./Config/mongoose");
//definting port number 8000
const port = process.env.PORT || 8000;
//importing mongoose model
//firing express
const app = express();

connectDB();

//settingUP view engine to ejs
app.set("view engine", "ejs");
app.set("views", "./Views");

//using express.static as a middleware to use static files
app.use(express.static("Assets"));
app.use(express.urlencoded({ extended: false }));

//definting route
app.use("/", require("./Routers"));

//listening the port and check whether the sever running correctly on port or not
app.listen(port, function (err) {
  if (err) {
    console.log(`error occure form the server : ${err}`);
    return;
  }
  console.log(`Server Sucessfully run on port : ${port}`);
});
