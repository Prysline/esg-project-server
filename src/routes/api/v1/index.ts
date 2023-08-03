import { Router, Request, Response } from "express";
import elastic from "../../../elastic/client";
import { readFileSync } from "fs";
import dotenv from "dotenv";

dotenv.config({ path: "env/.env." + process.env.NODE_ENV });
const router = Router();

const host: string = (process.env.ELASTIC_HOST as string) || "localhost";
const port: number = Number(process.env.ELASTIC_PORT) || 9200;
const apiKey: string = (process.env.APIKEY as string) || "SKIP";
const tlsPath: string =
  (process.env.TLS_PATH as string) || "/etc/elasticsearch/http_ca.crt";
const clientOptions = {
  node: `https://${host}:${port}`,
  auth: { apiKey },
  tls: {
    ca: readFileSync(tlsPath)
  },
};

router.get("/connect", (req: Request, res: Response) => {
  const client = elastic.newClient(clientOptions);
  const text = elastic.testConnection(client);
  res.send(text);
});

router.get("/", (req: Request, res: Response) => {
  res.send("/api/v1/ run!");
});

export default router;
