const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Responsible for defining paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// Setup hbs engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Andrew Thomsen"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Andrew Thomsen"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Andrew Thomsen"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Its raining.",
    location: "Seattle, Washington"
  });
});

app.listen(3000, () => {
  console.log("Server running on PORT 3000.");
});
