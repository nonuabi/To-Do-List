// importing exprss
const express = require("express");
//definting port number
const port = 8000;
//importing mongoose model
require("./Config/mongoose");

//firing express
const app = express();

//adding body parser
var bodyParser = require("body-parser");

//settingUP view engine to ejs
app.set("view engine", "ejs");
app.set("views", "./Views");

//using express.static as a middleware to use static files
app.use(express.static("Assets"));
app.use(bodyParser.urlencoded({ extended: false }));

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
