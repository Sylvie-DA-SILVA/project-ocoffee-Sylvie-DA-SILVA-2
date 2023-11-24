// Import NPM module
const express = require("express"); // Syntaxe CJS

// Create Express app
const app = express();

// Configure view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Configure assets routes (static folder)
app.use(express.static("./public"));

// Favicon static route
app.use("/favicon.ico", express.static("./public/images/logo.svg"));

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
