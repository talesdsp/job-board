import cors from "cors";
import express, { Request, Response } from "express";
import { createClient } from "redis";
import { promisify } from "util";

const morgan = require("morgan");

const client = createClient();
const getAsync = promisify(client.get).bind(client);

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.get("/jobs", async function(req: Request, res: Response) {
  try {
    let jobs = [];
    jobs.push(await getAsync("github"));

    res.send(...jobs);
  } catch (err) {
    console.warn(err);
  }
});

app.listen(process.env.PORT || 5500, () => {});
