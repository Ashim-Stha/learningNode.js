const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream("./big.txt", "utf8");
  fileStream.on("open", () => {
    fileStream.pipe(res); //to write
  });
  fileStream.on("error", (err) => {
    res.end(err);
  });
});

server.listen(5000);
