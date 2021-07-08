import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import Card from "./Card";
import {
  EventSliderWrapper,
  EventWrapper,
  NotFoundContainer,
  NotFoundText,
  Header,
  Subtitle,
  HeadingWrapper,
  DatePickerWrapper,
} from "./Event.styles";
import MaterialUIPickers from "./EventDatePicker";
import { HeadingPrimary } from "@components/Heading";
import { getMonthName, dragSlider } from "../../../../utility";

const Events = props => {
  // const eventRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  // const scroll = scrollOffset => {
  //   eventRef.current.scrollLeft += scrollOffset;
  // };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  useEffect(() => {
    let year = selectedDate.getFullYear();
    let month = ("0" + (selectedDate.getMonth() + 1)).slice(-2);

    // Full month in word
    // let month = selectedDate.toLocaleString("default", { month: "long" });

    // Return events of date equal to or greater than the selected date
    const data = props?.data.filter(function (item) {
      return item.eventYear >= `${year}` && item.eventMonth >= `${month}`;
    });

    setEvents(data);
  }, [selectedDate, props]);

  useEffect(() => {
    dragSlider("#event-slider");
  }, []);

  return (
    <EventWrapper id="events">
      <HeadingWrapper data-aos="fade-up">
        <Header>
          <Subtitle>Events</Subtitle>
          <HeadingPrimary>
            Next on <br />
            the <span>calendar</span>
          </HeadingPrimary>
        </Header>
        <DatePickerWrapper>
          <MaterialUIPickers
            handleDateChange={handleDateChange}
            selectedDate={selectedDate}
          />
        </DatePickerWrapper>
      </HeadingWrapper>
      <EventSliderWrapper data-aos="fade-up" id="event-slider">
        {!isEmpty(events) ? (
          events.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              day={item.eventDay}
              date={item.eventDay + " " + getMonthName(item.eventMonth)}
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
    </EventWrapper>
  );
};

export default Events;
