import React from "react";
import { RecentBlockWrapper, RecentWrapper } from "./RecentPost.styles";
import { Heading } from "../../../../components/Heading";
import StaticData from "./RecentPost.data";
import RecentCard from "./RecentCard";
import Slider from "react-slick";

const settings = {
  dots: true,
  pauseOnHover: false,
  swipeToSlide: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 3,
  speed: 1000,
  slidesToScroll: 1,
  arrows: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 1,
        variableWidth: true,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 1,
        variableWidth: false,
        slidesToShow: 1,
      },
    },
  ],
};

const RecentPost = props => {
  return (
    <RecentWrapper>
      <Heading>Recent Articles</Heading>
      <RecentBlockWrapper>
        <Slider {...settings}>
          {StaticData &&
            StaticData.map((item, index) => (
              <RecentCard
                title={item.title}
                image={item.image}
                date={item.date}
                key={index}
              />
            ))}
        </Slider>
      </RecentBlockWrapper>
    </RecentWrapper>
  );
};

export default RecentPost;
