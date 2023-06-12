const express = require("express");
const app = express();

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); //if not invoked the page will be loading continuously
  //   res.send("hello"); //we can send instead
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("about");
});
app.listen(5000, () => {
  console.log("server running");
});
