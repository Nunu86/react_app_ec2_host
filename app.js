// app.js
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON (if needed)
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello from Node.js backend!");
});

// Example API route
app.get("/api/greet", (req, res) => {
  res.json({ message: "Hello from API!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Export app for testing purposes
