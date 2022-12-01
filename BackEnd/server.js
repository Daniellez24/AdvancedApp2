var express = require("express");
var app = express();

app.get("/products", function (req, res) {
  res.send("Hey, I am get response");
});

app.post("/addProduct", function (req, res) {
  res.send("Hey, I am post response");
});

const server = app.listen(8081, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("App listening at http://localhost:8081/", host, port);
});
