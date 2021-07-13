const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user.js");
const { auth } = require("../middleware/auth.js");

router.post("/login", userControllers.login);
router.post("/signup", userControllers.signup);
router.get("/logout", userControllers.logout);

module.exports = router;
