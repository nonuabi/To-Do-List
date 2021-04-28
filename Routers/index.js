const express = require("express");
const router = express.Router();

const homeController = require("../Controllers/home_controller");
const dataController = require('../Controllers/add_title_contorller');


router.get("/", homeController.titleName);
router.post("/create-data", dataController.add);

module.exports = router;
