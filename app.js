const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
// app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(express.static('views'));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/createplan", function (req, res) {
  res.render("createplan");
});

app.listen(3000, function (req, res) {
  console.log("Server listing on port 3000");
});
