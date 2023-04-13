import { Application, Request, Response } from "express";
import cors from "cors"
import morgan from "morgan"



export const appConfig = (app: Application) => {
    app.use(cors()).use(morgan("dev"))

    app.all("*", (req: Request, res: Response) => {
        res.status(404).json({
    message: ``
})
    })
}