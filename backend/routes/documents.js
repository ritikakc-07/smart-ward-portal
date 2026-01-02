const express = require("express");
const fs = require("fs");       // read files
const router = express.Router(); // create a router

// GET all documents
router.get("/", (req, res) => {
  const data = fs.readFileSync("./data/documents.json", "utf8"); // read JSON file
  res.json(JSON.parse(data)); // send JSON to frontend
});

module.exports = router;
