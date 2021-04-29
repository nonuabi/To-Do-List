const Task = require("../Models/Schema");

module.exports.titleName = function (req, res) {
  Task.find({}, function (err, data) {
    if (err) {
  
      return res.render("home", {
        title: "To Do List",
        err: "error",
        arr: undefined,
      });
    }
    return res.render("home", {
      title: "To Do List",
      arr: data,
      err: undefined,
    });
  });
};
