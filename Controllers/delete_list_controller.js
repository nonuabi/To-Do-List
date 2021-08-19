const todoList = require("../Models/Schema");

//delete item form the data base controler
module.exports.delete = function (req, res) {
  let id = req.query.id;

  todoList.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log(`Error in deleting an object from the database : ${err}`);
      return;
    }
    return res.redirect("back");
  });
};
