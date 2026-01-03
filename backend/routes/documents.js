const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// absolute path to documents.json
const filePath = path.join(__dirname, "../data/documents.json");

// GET all documents
router.get("/", (req, res) => {
  const data = fs.readFileSync(filePath, "utf8");
  res.json(JSON.parse(data));
});

module.exports = router;
