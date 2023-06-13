const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  //   console.log(req.body);
  const { name } = req.body; //input data
  if (name) {
    return res.send(`Welcome ${name}`);
  }
  res.send("Please provide credentials");
});

module.exports = router;
