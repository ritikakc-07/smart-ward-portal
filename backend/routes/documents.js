const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// GET all documents/services
router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../data/documents.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading documents file:", err);
      return res.status(500).json({ error: "Could not read documents file" });
    }

    try {
      const documents = JSON.parse(data);
      res.json(documents); // send array of services
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).json({ error: "Invalid documents JSON" });
    }
  });
});

module.exports = router;
