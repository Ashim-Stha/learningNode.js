const express = require("express");
const app = express();

const { data } = require("./data");

app.get("/", (req, res) => {
  //   res.json([{name:'Ashim'},{name:"Chandrey"}]);
  //   res.json(name);
  res.send(`<a href='/api/data'>Data</a>`);
});

app.get("/api/data", (req, res) => {
  //to get selective data only
  const newData = data.map((data) => {
    const { id, name } = data;
    return { id, name };
  });
  res.json(newData);
});

app.get("/api/data/9.99", (req, res) => {
  const newPrice = data.find((data) => data.price === 9.99);
  res.json(newPrice);
});

app.get("/api/data/:price", (req, res) => {
  // console.log(typeof req.params);
  console.log(req.params);

  const { price } = req.params; //returns string
  const mapPrice = data.find((data) => data.price === Number(price)); //so change to num

  console.log(mapPrice);
  if (!mapPrice) {
    return res.status(404).send("ERROR");
  }
  res.send(mapPrice);
});

app.get("/api/data/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  // console.log(typeof data);
  let sortdata = [...data];
  if (search) {
    sortdata = sortdata.filter((data) => {
      return data.name.startsWith(search);
    });
  }
  if (limit) {
    sortdata = sortdata.slice(0, Number(limit));
  }

  if (sortdata.length < 1) {
    return res.status(200).send("not found");
  }
  // console.log(typeof sortdata);
  res.status(200).json(sortdata);
});

app.listen(5000, () => {
  console.log("sever running");
});

// console.log(JSON.stringify(name));
