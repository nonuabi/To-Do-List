module.exports.titleName = function (req, res) {
  return res.render("home", {
    title: "To Do List",
  });
};
