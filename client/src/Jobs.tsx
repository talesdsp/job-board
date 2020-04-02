import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import React, { useState } from "react";
import { JobModel, JobsProp } from "..";
import Job from "./Job";
import JobModal from "./JobModal";

const Jobs: React.FC<JobsProp> = ({ jobs }) => {
  //  Modal
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //  Pagination
  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 50);

  const [activeStep, setActiveStep] = useState(1);
  const [selectedJob, selectJob] = useState<JobModel>();

  const jobsOnPage = jobs.slice(activeStep * 50, (activeStep + 1) * 50);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="jobs">
      <JobModal open={open} job={selectedJob} handleClose={handleClose} />
      <Typography variant="h3" component="h1">
        Entry level Software Jobs
      </Typography>
      <Typography variant="h5" component="h2">
        Found {numJobs} Jobs
      </Typography>

      {jobsOnPage.map((job, i) => (
        <Job
          key={i}
          job={job}
          onClick={() => {
            handleClickOpen();
            selectJob(job);
          }}
        />
      ))}
      <div>
        Page {activeStep} of {numPages - 1}
      </div>

      <MobileStepper
        variant="progress"
        steps={numPages}
        position="static"
        activeStep={activeStep}
        className="mobile"
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep >= numPages - 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 1}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
};
export default Jobs;
