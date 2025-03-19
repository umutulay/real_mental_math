import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import serverless from "serverless-http";

// Fix "__dirname" not defined in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "../public"))); // Serve static files

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "index.html"));
});

app.get("/quiz", (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "quiz.html"));
});

app.get("/results", (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "results.html"));
});

export default serverless(app); // ✅ Correct ES module export for Vercel
