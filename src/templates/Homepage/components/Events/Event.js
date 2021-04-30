import React, { useRef } from "react";
import Card from "./Card";
import {
  EventSliderWrapper,
  EventWrapper,
  NavigationButton,
  NavigationButtonWrapper,
} from "./Event.styles";
import { Heading } from "@components/Heading";
import MaterialUIPickers from "./EventDatePicker";

const Events = props => {
  const eventRef = useRef(null);
  const scroll = scrollOffset => {
    eventRef.current.scrollLeft += scrollOffset;
  };

  return (
    <EventWrapper id="events">
      <Heading data-aos="fade-up-right">Here's What's Coming Up</Heading>
      <MaterialUIPickers />
      <EventSliderWrapper ref={eventRef}>
        {props?.data.length &&
          props.data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              day={item.eventDay}
              date={item.eventMonth + " " + item.eventYear}
              time={item.eventStartTime}
              venue={
                item.eventLocations.nodes.length &&
                item.eventLocations.nodes[0].name
              }
            />
          ))}
      </EventSliderWrapper>
      <NavigationButtonWrapper>
        <NavigationButton onClick={() => scroll(-370)}>
          <svg
            width="9"
            height="17"
            viewBox="0 0 13 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1.88721L3 10.8872L11 19.8872"
              stroke="#5F6468"
              strokeWidth="3"
            />
          </svg>
        </NavigationButton>
        <NavigationButton right onClick={() => scroll(370)}>
          <svg
            width="9"
            height="17"
            viewBox="0 0 13 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 1.88721L10 10.8872L2 19.8872"
              stroke="#5F6468"
              strokeWidth="3"
            />
          </svg>
        </NavigationButton>
      </NavigationButtonWrapper>
    </EventWrapper>
  );
};

export default Events;
