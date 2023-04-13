import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import ejs from "ejs";

const data = {
  name: "sanni",
  _id: 2344,
  color: "red",
};

export const appConfig = (app: Application) => {
  app
    .use(cors())
    .use(morgan("dev"))
    .set("view engine", "ejs")
    .use(express.json())
    .use(express.static("public"))
    .use(express.static(`${__dirname} public/asset`))
    .use(express.static(`${__dirname} public/css`));

  app
    .get("/", (req: Request, res: Response) => {
      res.status(200).json({
        message: "Api Up ✔💕❤💖",
      });
    })

    .use("/view", (req: Request, res: Response) => {
      res.render("index", data);
    });

  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({
      message: `This Route ${req.body} is not Found `,
    });
  });
};
