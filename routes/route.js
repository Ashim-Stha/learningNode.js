const express = require("express");
const router = express.Router();
let { people } = require("../data.js");

router.get("/", (req, res) => {
  res.status(401).json({ success: "true", id: 5 });
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.send("fail");
  }
  res.status(200).send({ success: true, person: name });
});

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).send(`Not found of id:${id}`);
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.json({ success: true, data: newPeople });
});

module.exports = router;
