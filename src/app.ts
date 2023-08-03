import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config({ path: "env/.env." + process.env.NODE_ENV });

const app: Express = express();
const port = process.env.PORT || 5001;
const host: String = process.env.HOST || "localhost";

app.use(router)

app.listen(port, () => {
  console.log(`[server]: Server listening on http://${host}:${port}`);
});
