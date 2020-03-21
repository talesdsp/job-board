var fetch = require("node-fetch");
var redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");

const setAsync = promisify(client.set).bind(client);

const baseURL = "https://jobs.github.com/positions.json";

async function fetchGithub() {
  let resultCount = 1;
  let onPage = 0;
  const allJobs = [];

  //fetch all pages
  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    resultCount = jobs.length;
    allJobs.push(...jobs);
    console.log("got", jobs.length, "jobs on page", onPage);
    onPage++;
  }

  //filter algo
  // const jrJobs = allJobs.filter((job) => {
  //   const jobTitle = job.title.toLowerCase();

  //   if (
  //     jobTitle.includes("senior") ||
  //     jobTitle.includes("manager") ||
  //     jobTitle.includes("sr") ||
  //     jobTitle.includes("architect")
  //   ) {
  //     return false;
  //   }
  //   return true;
  // });

  //set in redis
  console.log("total jobs: ", allJobs.length);
  const success = await setAsync("github", JSON.stringify(allJobs));
  console.log(success);
}
fetchGithub();

module.exports = fetchGithub;
