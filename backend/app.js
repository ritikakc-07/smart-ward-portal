const express = require("express");
const cors = require("cors");

const app = express();  // create server

// Middlewares
app.use(cors());          // allow frontend to call backend
app.use(express.json());  // parse JSON in POST requests

// Test endpoint
app.get("/", (req, res) => {
  res.send("Smart Ward Portal API is working!");
});

// Routes
app.use("/api/v1/documents", require("./routes/documents"));
app.use("/api/v1/announcements", require("./routes/announcements"));
app.use("/api/v1/budget", require("./routes/budget"));

// Export app for server.js
module.exports = app;
