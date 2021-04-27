const express = require("express");
const port = 8000;
const app = express();

app.use("/", require("./Routers"));

app.listen(port, function (err) {
  if (err) {
    console.log(`error occure form the server : ${err}`);
    return;
  }
  console.log(`Server Sucessfully run on port : ${port}`);
});
