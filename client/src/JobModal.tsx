import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import React from "react";
import { Modal } from "..";

const Transition: React.FC = (props) => {
  return <Slide direction="up" {...props} />;
};

const JobModal: React.FC<Modal> = ({ job, open, handleClose }) => {
  if (!job) {
    return null;
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {job.title} - {job.company}
        <img src={job.company_logo} alt="company logo" className="detail-logo" />
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-slide-description"
          dangerouslySetInnerHTML={{ __html: job.description }}
        ></DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        <a href={job.url} target="_blank" rel="noopener">
          <Button color="primary">Apply</Button>
        </a>
      </DialogActions>
    </Dialog>
  );
};

export default JobModal;
