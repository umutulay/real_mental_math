const express = require("express");
const path = require("path");
const serverless = require("serverless-http");

const app = express();

app.use(express.static(path.join(__dirname, "../public"))); // Serve static files from public folder

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "index.html"));
});

app.get("/quiz", (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "quiz.html"));
});

app.get("/results", (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "results.html"));
});

module.exports = app;
module.exports.handler = serverless(app);
