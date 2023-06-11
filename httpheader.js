const http = require("http");
const fs = require("fs");
const home = fs.readFileSync("./folder/index.html");
const homeCss = fs.readFileSync("./folder/styles.css");

const server = http.createServer((req, res) => {
  console.log(req.method);
  //   console.log(req.url);

  if (req.url === "/") {
    //specifying header
    res.writeHead(200, { "content-type": "text/html" });

    //for plain text only
    //   res.writeHead(200, { "content-type": "text/plain" });
    res.write(home);
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });

    // //for svg
    // res.writeHead(200,{'content-type':'image/svg'})
    // //for js
    // res.writeHead(200,{'content-type':'text/javascript'})

    res.write(homeCss);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About page</h1>");
    res.end();
  } else {
    res.end("not found");
  }
});

server.listen(5000);
