const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  } else if (req.url === "/about") {
    res.end("This is about page");
  } else {
    res.end("oops");
  }
  //   res.write("Hello");
  //   res.end(`<h3>oops</h3>`);
});

server.listen(5000);
