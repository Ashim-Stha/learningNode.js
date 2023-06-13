const express = require("express");
const app = express();

const route = require("./route");
const auth = require("./auth");

app.use(express.static("../formm"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api/people", route);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("server runnning");
});
