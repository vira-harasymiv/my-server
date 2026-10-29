const express = require("express");
const app = express();
app.use(express.static("public"));
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Guest! This is my first server.");
});

app.get("/api/time", (req, res) => {
  res.json({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/about", (req, res) => {
  res.send("This is the page about a program");
});

app.get("/api/greeting", (req, res) => {
  res.json({
    name: req.query.name,
  });
});
