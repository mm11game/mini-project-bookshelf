const express = require("express");
const router = express.Router();
const itemController = require("../controllers/item");

router.get("/list", itemController.list);

module.exports = router;
