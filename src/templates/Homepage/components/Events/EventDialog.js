import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import {
  Wrapper,
  DialogContent,
  TextContainer,
  Title,
  Value,
  EventTitle,
  DialogHeader,
  SecondaryTextMain,
  Cost,
  SecondaryText,
  SecondaryTitle,
  SecondaryValue,
  PlaceholderLogo,
} from "./EventDialog.styles";

import placeholderImg from "@images/icons/placeholder-logo.png";

const useStyles = makeStyles(theme => ({
  closeButton: {
    position: "absolute",
    right: "1rem",
    top: "1rem",
    color: "#6CA448",
  },
  dialogPaper: {
    borderRadius: 24,
    maxWidth: 450,
    maxHeight: 610,
    width: 450,
    height: 610,

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      borderRadius: 0,
      height: "100%",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: 0,
    },
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
        PaperProps={{ classes: { root: classes.dialogPaper } }}
      >
        <Wrapper>
          <DialogHeader>
            <EventTitle>{props.title}</EventTitle>
            {props.instructor && (
              <TextContainer>
                <Title>Featured Speaker:</Title>
                <Value>{props.instructor}</Value>
              </TextContainer>
            )}
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <PlaceholderLogo>
              <img
                src={placeholderImg}
                alt="placeholder-logo"
                draggable={false}
              />
            </PlaceholderLogo>
          </DialogHeader>
          <DialogContent>
            {props.cost && (
              <SecondaryTextMain>
                <Cost>Cost: ${props.cost}</Cost>
              </SecondaryTextMain>
            )}
            {props.time && (
              <SecondaryText>
                <SecondaryTitle>Time: </SecondaryTitle>
                <SecondaryValue>
                  {props.date} - {props.time}
                </SecondaryValue>
              </SecondaryText>
            )}
            {props.venue && (
              <SecondaryText>
                <SecondaryTitle>Address: </SecondaryTitle>
                <SecondaryValue>{props.venue}</SecondaryValue>
              </SecondaryText>
            )}
          </DialogContent>
        </Wrapper>
      </Dialog>
    </div>
  );
};

export default EventDialog;
