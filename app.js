const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const path = require("path");
const linkRoute = require("./routes/linkRoute");

mongoose.connect("mongodb://127.0.0.1:27017/newLinks");

let db = mongoose.connection;

db.on("error", () => {
  console.log("Houve um erro");
});
db.once("open", () => {
  console.log("Banco de dados carregado");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

app.use('/', linkRoute);

app.listen(PORT, () => {
  console.log("servidor rodando");
});
