import React, { useEffect, useRef } from "react";
import { RecentBlockWrapper, RecentWrapper } from "./RecentPost.styles";
import { Heading } from "../../../../components/Heading";
// import StaticData from "./RecentPost.data";
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
};

const RecentPost = props => {
  const recentSliderRef = useRef(null);
  useEffect(() => {
    let slickListDiv = document.getElementsByClassName("slick-list")[0];
    slickListDiv.addEventListener("wheel", event => {
      event.preventDefault();
      event.wheelDeltaX < 0 && recentSliderRef.current.slickNext();
      event.wheelDeltaX > 0 && recentSliderRef.current.slickPrev();
    });
    return () => {
      slickListDiv.removeEventListener("wheel", event => {
        event.preventDefault();
      });
    };
  }, [recentSliderRef]);

  return (
    <RecentWrapper>
      <Heading clean>Recent Articles</Heading>
      <RecentBlockWrapper>
        <Slider {...settings} ref={recentSliderRef}>
          {props.data &&
            props.data.posts.nodes.map((item, index) => (
              <RecentCard
                title={item.title}
                image={item.featuredImage.node.sourceUrl}
                date={item.date.substring(0, 10)}
                key={index}
              />
            ))}
        </Slider>
      </RecentBlockWrapper>
    </RecentWrapper>
  );
};

export default RecentPost;
