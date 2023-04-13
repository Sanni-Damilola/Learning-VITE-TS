import express, { Application } from "express";
import { appConfig } from "./app";
import { dataBase } from "./config/db";

const app: Application = express();
const port = 2001;
appConfig(app);
dataBase();

app.listen(port, () => {
  console.log("done on port", port);
});
