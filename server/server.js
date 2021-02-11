const express = require("express");
const app = express();
const morgan = require("morgan");

const port = 4444;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(port, () => {
  console.log(`Server Start ${port}`);
});
