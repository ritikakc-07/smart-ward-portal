const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Get all wards
router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../data/wards.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Could not read wards file" });
    res.json(JSON.parse(data));
  });
});

module.exports = router;
