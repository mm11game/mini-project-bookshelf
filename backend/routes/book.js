const express = require("express");
const router = express.Router();
const bookControllers = require("../controllers/book.js");
const { auth } = require("../middleware/auth.js");

// router.post("/login", userControllers.login);
// router.post("/signup", userControllers.signup);
router.get("/", bookControllers.bookList);
router.post("/", auth, bookControllers.bookUpload);
router.delete("/", auth, bookControllers.bookDelete);

router.get("/memo", auth, bookControllers.getMemoList);
router.post("/memo", auth, bookControllers.postMemo);
router.delete("/memo", auth, bookControllers.deleteMemo);
router.patch("/memo", auth, bookControllers.updateMemo);

module.exports = router;
