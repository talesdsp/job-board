import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { JobProp } from "..";

const Job: React.FC<JobProp> = ({ job, onClick }) => {
  return (
    <Paper onClick={onClick} className="job">
      <div>
        <Typography variant="h4">{job.title}</Typography>
        <Typography variant="h5">{job.company}</Typography>
        <Typography variant="h6">{job.location}</Typography>
      </div>
      <div>
        <Typography>
          {job.created_at
            .split(" ")
            .slice(0, 3)
            .join(" ")}
        </Typography>
      </div>
    </Paper>
  );
};
export default Job;
