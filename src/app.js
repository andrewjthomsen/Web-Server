const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
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
    helpText: "This is some helpful text."
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
