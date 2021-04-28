const express = require("express");
const router = express.Router();

const homeController = require("../Controllers/home_controller");
const dataController = require("../Controllers/add_title_contorller");
const deleteController = require("../Controllers/delete_list_controller");

router.get("/", homeController.titleName);
router.post("/create-data", dataController.add);
router.get("/delete-list", deleteController.delete);

module.exports = router;
