import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: "env/.env." + process.env.NODE_ENV });

const app: Express = express();
const port = process.env.PORT || 5001;
const host: String = process.env.HOST || "localhost";

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server listening on http://${host}:${port}`);
});
