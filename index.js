const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

app.use(express.static(path.join(__dirname, "public"))); // Serve static files from public folder

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/quiz", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "quiz.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
