const express = require("express");
const redis = require("redis");
const cors = require("cors");
const { promisify } = require("util");

const morgan = require("morgan");

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.get("/jobs", async (req, res) => {
  try {
    const jobs = await getAsync("github");
    res.send(jobs);
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT || 5500, (req, res) => {});
