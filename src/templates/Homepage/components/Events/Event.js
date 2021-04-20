import React from "react";
import Card from "./Card";
import {
  EventSliderWrapper,
  EventWrapper,
  NavigationButton,
} from "./Event.styles";
import StaticData from "./Event.data";
import { Heading } from "@components/Heading";
import Slider from "react-slick";
import MaterialUIPickers from "./EventDatePicker";

const settings = {
  dots: true,
  pauseOnHover: false,
  swipeToSlide: false,
  infinite: true,
  autoplay: false,
  speed: 1000,
  slidesToScroll: 1,
  cssEase: "linear",
  variableWidth: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToScroll: 1,
      },
    },
  ],
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <NavigationButton next>
      <button onClick={onClick}>
        <svg
          width="13"
          height="21"
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
      </button>
    </NavigationButton>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <NavigationButton prev>
      <button onClick={onClick}>
        <svg
          width="13"
          height="21"
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
      </button>
    </NavigationButton>
  );
}

const Events = props => {
  console.log(props.data);
  return (
    <EventWrapper>
      <Heading>Here's What's Coming Up</Heading>
      <MaterialUIPickers />
      <EventSliderWrapper>
        <Slider {...settings}>
          {props.data.length &&
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
        </Slider>
      </EventSliderWrapper>
    </EventWrapper>
  );
};

export default Events;
