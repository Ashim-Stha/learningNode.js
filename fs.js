const fs = require("fs");

const hello = fs.readFileSync("./content/hello.txt", "utf8");
fs.writeFileSync("./content/write.txt", ` ${hello} ashim`);

//to append file
fs.writeFileSync("./content/write.txt", "hahah", { flag: "a" });

// fs.readFile("./content/write.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
// return;
//   }
//   const first = result;
//   fs.readFile(
//     "./content/hello.txt",
//     "utf8",
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       const second = result;
//     },
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       fs.writeFile("./content/async.txt", (err, result) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     }
//   );
// });
fs.readFile("./content/write.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
