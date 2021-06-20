import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import {
  Wrapper,
  DialogContent,
  DialogTitle,
  TextContainer,
  Title,
  Value,
  EventTitle,
  Divider,
} from "./EventDialog.styles";

const useStyles = makeStyles(() => ({
  closeButton: {
    position: "absolute",
    right: "1rem",
    top: "1rem",
    color: "#6CA448",
  },
}));

const EventDialog = ({ open, handleClose, props, onClose }) => {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth={"md"}
      >
        <Wrapper>
          <DialogTitle>
            <EventTitle>{props.title}</EventTitle>
            <Divider />
          </DialogTitle>
          <DialogContent>
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            {props.instructor && (
              <TextContainer>
                <Title>Featured Speaker -</Title>
                <Value>{props.instructor}</Value>
              </TextContainer>
            )}
            {props.cost && (
              <TextContainer>
                <Title>Entrance cost -</Title>
                <Value>${props.cost}</Value>
              </TextContainer>
            )}
            {props.time && (
              <TextContainer>
                <Title>Time -</Title>
                <Value>{props.time}</Value>
              </TextContainer>
            )}
            {props.venue && (
              <TextContainer>
                <Title>Address -</Title>
                <Value>{props.venue}</Value>
              </TextContainer>
            )}
          </DialogContent>
        </Wrapper>
      </Dialog>
    </div>
  );
};

export default EventDialog;
