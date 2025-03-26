import express from "express";
 import { join } from "path";
 import { fileURLToPath } from "url"; // Import to resolve __dirname
 import serverless from "serverless-http";
 
 // Fix for __dirname in ES modules
 const __filename = fileURLToPath(import.meta.url);
 const __dirname = join(__filename, '../'); // Get the directory name

const app = express();

app.use(express.static(join(__dirname, "../public"))); 

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "../views", "index.html"));
});

app.get("/quiz", (req, res) => {
    res.sendFile(join(__dirname, "../views", "quiz.html"));
});

app.get("/results", (req, res) => {
    res.sendFile(join(__dirname, "../views", "results.html"));
});

export default app;
export const handler = serverless(app);
