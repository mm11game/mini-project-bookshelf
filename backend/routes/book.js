const express = require("express");
const router = express.Router();
const bookControllers = require("../controllers/book.js");
const { auth } = require("../middleware/auth.js");

// router.post("/login", userControllers.login);
// router.post("/signup", userControllers.signup);
router.get("/", bookControllers.bookList);
router.post("/", auth, bookControllers.bookUpload);
router.get("/memo", auth, bookControllers.getMemo);
router.post("/memo", auth, bookControllers.postMemo);

module.exports = router;
