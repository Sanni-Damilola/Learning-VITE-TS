import { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import ejs from "ejs";

export const appConfig = (app: Application) => {
  app.use(cors()).use(morgan("dev")).set("view engine", "ejs");

  app
    .get("/", (req: Request, res: Response) => {
      res.status(200).json({
        message: "Api Up ✔💕❤💖",
      });
    })
    .use("/view", (req: Request, res: Response) => {
      res.render("index");
    });

  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({
      message: `This Route ${req.body} is not Found `,
    });
  });
};
