import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import { teamRoute } from "./routes/router";
import { httpLogger } from "./logger/httplogger";

dotenv.config();

const app: Express = express();

app.use(helmet());

app.use(httpLogger);

app.use("/teams", teamRoute);
app.use("*", (req: Request, res: Response) => {
    res.status(404).send("content not found");
  });


export { app };
