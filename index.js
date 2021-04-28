const express = require("express");
const port = 8000;
require("./Config/mongoose");


const app = express();



var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "./Views");
app.use(express.static("Assets"));
app.use(bodyParser.urlencoded({extended:false}));
app.use("/", require("./Routers"));

app.listen(port, function (err) {
  if (err) {
    console.log(`error occure form the server : ${err}`);
    return;
  }
  console.log(`Server Sucessfully run on port : ${port}`);
});
