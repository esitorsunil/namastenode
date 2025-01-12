const http = require("node:http");

const server = http.createServer(function (req, res) {
  if(req.url === "/getSecretData") {
    res.end("There is no secret data, hahaha");
  }
  res.end("My First Server");
});


server.listen(3000);