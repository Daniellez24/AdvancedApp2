import express from "express";
var app = express();

import productRouts from "./routes/product.js";

app.use(productRouts);

const server = app.listen(8081, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("App listening at http://localhost:8081/", host, port);
});
