//first we create a big file
const fs = require("fs");
// for (let i = 0; i <= 1000; i++) {
//   fs.writeFileSync("big.txt", `Hello Hi ${i}`, { flag: "a" });
// }

//to read big file we use stream

const stream = fs.createReadStream("big.txt");

// const stream = fs.createReadStream("big.txt", {
//   highWaterMark: 9000,
//   encoding: "utf8",
// });
//highWaterMark controls the size of buffer

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
