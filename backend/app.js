const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const wardsRoute = require("./routes/wards");
const budgetRoute = require("./routes/budget");

// Use routes
app.use("/api/wards", wardsRoute);
app.use("/api/budget", budgetRoute);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
