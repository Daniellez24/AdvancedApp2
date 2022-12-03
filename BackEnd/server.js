import express from "express";
import cors from "cors";
const app = express();

import productRouts from "./routes/product.js";
import { formDbConnection } from "./services/db.js";

formDbConnection();
app.use(cors("*"));
app.use(express.json());
app.use(productRouts);

app.listen(8081, function () {
  console.log("App listening at http://localhost:8081/");
});
