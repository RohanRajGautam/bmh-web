import React from "react";
import {
  EventCard,
  EventDate,
  EventDay,
  EventTime,
  EventTitle,
} from "./Event.styles";
import EventDialog from "./EventDialog";

const Card = props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <EventCard onClick={handleClickOpen}>
        <EventDay>{props.day}</EventDay>
        <EventDate>{props.date}</EventDate>
        <EventTitle>{props.title}</EventTitle>
        <EventTime>{props.time}</EventTime>
        <EventTime>{props.venue}</EventTime>
      </EventCard>
      <EventDialog open={open} handleClose={handleClose} props={props} />
    </>
  );
};

export default Card;
