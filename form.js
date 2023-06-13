const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("./formm"));

let { people } = require("./data.js");
// console.log(people);
//parse from data
app.use(express.urlencoded({ extended: false }));

//parse data
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Home");
// });

app.post("/login", (req, res) => {
  //   console.log(req.body);
  const { name } = req.body; //input data
  if (name) {
    return res.send(`Welcome ${name}`);
  }
  res.send("Please provide credentials");
});

app.get("/api/products", (req, res) => {
  res.status(401).json({ success: "true", id: 7 });
});

app.post("/api/products", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.send("fail");
  }
  res.status(200).send({ success: true, person: name });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.log(id, name);
  const person = people.find((person) => person.id === Number(id));
  // console.log(person.name, person.id);
  if (!person) {
    res.status(404).send(`Not found of id:${id}`);
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).send(`Not found of id:${id}`);
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.json({ success: true, data: newPeople });
});
app.listen(5000, () => {
  console.log("server runnning");
});
