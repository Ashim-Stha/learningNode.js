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

const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "Ashim") {
    req.user = { name: "Ashim", id: 7 };
    next();
  } else {
    res.status(404).send("Unauthorized");
  }
};

// app.get("/", logger, (req, res) => {
//   res.send("Home");
// });

//instead of hardcoding logger in every route we can use app.use instead
// app.use(logger);

//we can give path also;logger is invoked any after /api/
app.use([authorize, logger]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("server running");
});
