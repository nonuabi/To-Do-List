const express = require("express");
const router = express.Router();

//importing home controller
const homeController = require("../Controllers/home_controller");
//importing add item controller
const dataController = require("../Controllers/add_title_contorller");
//importing delete item controller
const deleteController = require("../Controllers/delete_list_controller");

//defing routes
router.get("/", homeController.titleName);
router.post("/create-data", dataController.add);
router.get("/delete-list", deleteController.delete);

module.exports = router;
