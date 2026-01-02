const express = require("express");  // bring Express
const cors = require("cors");        // bring CORS

const app = express();  // create app (server)

app.use(cors());        // allow frontend to ask questions
app.use(express.json());// allow backend to read JSON data

// Test endpoint
app.get("/", (req, res) => {
  res.send("Smart Ward Portal API is working!");
});

module.exports = app;

const documentsRoutes = require("./routes/documents"); // import the route
app.use("/api/v1/documents", documentsRoutes);         // use route at /api/v1/documents
