const express = require("express"); // Syntaxe CJS

const app = express();

app.get("/", (req, res) => {
  res.send("Hello !");
});

const port = 3000;
app.listen(port, () => {
  console.log(`🚀 oCoffee app started at http://localhost:${port}`)
})
