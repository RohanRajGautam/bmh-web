import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import {
  EventCard,
  EventDate,
  EventDay,
  EventTime,
  EventTitle,
} from "./EventDialog.styles";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    background: "#6ca448",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "#fff",
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    background: "#6CA448",
  },
}))(MuiDialogContent);

const EventDialog = ({ open, handleClose, props }) => {
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle onClose={handleClose} />
        <DialogContent>
          <EventCard>
            <EventDay>{props.day}</EventDay>
            <EventDate>{props.date}</EventDate>
            <EventTitle>{props.title}</EventTitle>
            <EventTime>{props.time}</EventTime>
            <EventTime>{props.venue}</EventTime>
          </EventCard>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventDialog;
