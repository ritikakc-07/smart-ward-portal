const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/:ward", (req, res) => {
  const filePath = path.join(__dirname, "../data/budget.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Could not read budget file" });

    const budgetData = JSON.parse(data);

    // Calculate percentage used for frontend bars
    const utilization = budgetData.categories.map(cat => ({
      label: cat.title,
      percentage: Math.round((cat.used / cat.allocated) * 100)
    }));

    res.json({
      ward: req.params.ward,
      fiscalYear: "2080/81",
      totalBudget: budgetData.totalBudget,
      utilization
    });
  });
});

module.exports = router;
