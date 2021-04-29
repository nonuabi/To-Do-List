const todolist = require("../Models/Schema");

module.exports.add = function (req, res) {
  todolist.create(req.body, function (err) {
    if (err) {
      console.log(`error occure in creating a list in database : ${err}`);
      return;
    }
    res.redirect("back");
  });
};
