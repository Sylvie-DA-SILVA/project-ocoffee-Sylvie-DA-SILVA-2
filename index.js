// Import NPM module
const express = require("express"); // Syntaxe CJS

// Create Express app
const app = express();

// Configure Express app
app.get("/", (req, res) => {
  res.send("Hello !");
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`🚀 oCoffee app started at http://localhost:${port}`);
});
