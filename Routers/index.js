const express = require("express");
const router = express.Router();

const homeController = require("../Controllers/home_controller");

router.get("/", homeController.titleName);

module.exports = router;
