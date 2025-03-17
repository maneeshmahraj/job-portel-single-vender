const express = require("express");
const router = express.Router();
const {
  getLanguages,
  addLanguage,
  deleteLanguage,
} = require("../controllers/languageController");

router.get("/read", getLanguages);
router.post("/create", addLanguage);
router.post("/:id", deleteLanguage);

module.exports = router;
