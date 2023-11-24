// Import NPM module
const express = require("express"); // Syntaxe CJS

// Create Express app
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

// Configure Express app
app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/catalog", (req, res) => {
  res.render("pages/catalog");
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`🚀 oCoffee app started at http://localhost:${port}`);
});
