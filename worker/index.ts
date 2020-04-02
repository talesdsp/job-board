import { CronJob } from "cron";
import fetchGithub from "./tasks/fetch-github";

const fetchData = async () => {
  await fetchGithub();
};

const job = new CronJob("*/10 * * * *", fetchData, null, true, "America/Los_Angeles");

job.start();
