// server.js
const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const apiUrl = process.env.API_URL || "https://api.example.com";

app.get("/", (req, res) => {
  res.send(`Hello World! ${process.env.API_KEY}`);
});

app.get("/data", async (req, res) => {
  try {
    res.json([]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
