import React, { useRef, useState, useEffect } from "react";
import { isEmpty } from "lodash";
import Card from "./Card";
import {
  EventSliderWrapper,
  EventWrapper,
  NavigationButton,
  NavigationButtonWrapper,
  NotFoundContainer,
  NotFoundText,
} from "./Event.styles";
import { Heading } from "@components/Heading";
import MaterialUIPickers from "./EventDatePicker";
// import EventDialog from "./EventDialog";

const Events = props => {
  const eventRef = useRef(null);
  const scroll = scrollOffset => {
    eventRef.current.scrollLeft += scrollOffset;
  };

  const [selectedDate, setSelectedDate] = useState(new Date("2021-05-01"));
  const [events, setEvents] = useState([]);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  useEffect(() => {
    let year = selectedDate.getFullYear();
    let month = ("0" + (selectedDate.getMonth() + 1)).slice(-2);

    console.log("date:", selectedDate);
    console.log("date:", year);
    console.log("month:", month);

    // Full month in word
    // let month = selectedDate.toLocaleString("default", { month: "long" });

    const data = props?.data.filter(function (item) {
      return item.eventYear >= `${year}` && item.eventMonth >= `${month}`;
    });
    setEvents(data);
  }, [selectedDate]);

  console.log(events);

  return (
    <EventWrapper id="events" data-aos="fade-up">
      <Heading>Here's What's Coming Up</Heading>
      <MaterialUIPickers
        handleDateChange={handleDateChange}
        selectedDate={selectedDate}
      />
      <EventSliderWrapper ref={eventRef}>
        {!isEmpty(events) ? (
          events.map((item, index) => (
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
              instructor={item.eventInstructors?.nodes[0]?.name}
              cost={item.eventCost}
            />
          ))
        ) : (
          <NotFoundContainer>
            <NotFoundText>
              No events were found. Please try a different date.
            </NotFoundText>
          </NotFoundContainer>
        )}
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
