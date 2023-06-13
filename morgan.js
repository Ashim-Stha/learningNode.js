//npm i morgan
const express = require("express");
const { listen } = require("express/lib/application");
const app = express();
const morgan = require("morgan");
const path = require("path");
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

// app.get("/", (req, res) => {
//   //   res.status(200).send("Home Page");
//   res.sendFile(path.resolve(__dirname, "./folder/index.html")); //for reading file
// });

app.use(express.static("./public")); //for rendering whatever html css or js inside public folder
app.use(morgan("tiny")); //provide http details

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h2>ERROR</h2>");
});

app.listen(5000, () => {
  console.log("server is listening on 5000");
});
