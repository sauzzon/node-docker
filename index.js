const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://saujan:mypassword@mongo:27017/?authSource=admin")
  .then(() => console.log("Succesfully connected to DB"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("<h2>Hello! from docker container</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
