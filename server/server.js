const express = require("express");
const app = express();
const morgan = require("morgan");
const db = require("./models");

const port = 4444;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello Express");
});

db.sequelize
  .sync()
  .then(() => {
    console.log("DB Connect Success");
  })
  .catch((err) => {
    console.error("DB Connect Failure ==> " + err);
  });

app.listen(port, () => {
  console.log(`Server Start ${port}`);
});
