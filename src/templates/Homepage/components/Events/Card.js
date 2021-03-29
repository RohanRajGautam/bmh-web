import React from "react";
import {
  EventCard,
  EventDate,
  EventDay,
  EventTime,
  EventTitle,
} from "./Event.styles";

const Card = props => {
  return (
    <EventCard>
      <EventDay>{props.day}</EventDay>
      <EventDate>{props.date}</EventDate>
      <EventTitle>{props.title}</EventTitle>
      <EventTime>{props.time}</EventTime>
      <EventTime>{props.venue}</EventTime>
    </EventCard>
  );
};

export default Card;
