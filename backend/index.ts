import express, { Application } from "express";

const app: Application = express();
const port = 2001;

app.listen(port, () => {
  console.log("done on port", port);
});
