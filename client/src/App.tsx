import React, { SetStateAction, useEffect, useState } from "react";
import { JobModel } from "..";
import "./App.css";
import Jobs from "./Jobs";

const JOB_API_URL = process.env.REACT_APP_GET_JOB || "http://localhost:5500/jobs";

async function fetchJobs(updateCb: React.Dispatch<SetStateAction<JobModel[]>>) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  return updateCb(json);
}

const App: React.FC = () => {
  const [jobList, updateJobs] = useState<JobModel[]>([]);

  useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
};

export default App;
