var CronJob = require("cron").CronJob;
var fetchGithub = require("./tasks/fetch-github");

const fetchData = async () => {
  await fetchGithub();
};

var job = new CronJob("*/10 * * * *", fetchData, null, true, "America/Los_Angeles");

job.start();
