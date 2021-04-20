import React, { useEffect, useRef } from "react";
import {
  CategorySliderBlockWrapper,
  CategorySliderWrapper,
  NavigationButton,
} from "./CategorySlider.styles";
import Slider from "react-slick";
import BlogCard from "../../../Homepage/components/Blog/components/Card";
import { Heading } from "../../../../components/Heading";

const settings = {
  dots: true,
  pauseOnHover: false,
  swipeToSlide: true,
  infinite: true,
  autoplay: false,
  slidesToScroll: 1,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  variableWidth: true,
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

const CategorySlider = props => {
  const categorySliderRef = useRef(null);
  useEffect(() => {
    let slickListDiv = document.getElementsByClassName("slick-list")[1];
    slickListDiv.addEventListener("wheel", event => {
      event.preventDefault();
      event.wheelDeltaX < 0 && categorySliderRef.current.slickNext();
      event.wheelDeltaX > 0 && categorySliderRef.current.slickPrev();
    });
    return () => {
      slickListDiv.removeEventListener("wheel", event => {
        event.preventDefault();
      });
    };
  }, [categorySliderRef]);

  return (
    <CategorySliderBlockWrapper>
      <Heading clean>Mental Wellness Articles</Heading>
      <CategorySliderWrapper>
        <Slider {...settings} ref={categorySliderRef}>
          {props.data.length &&
            props.data.map((item, index) => (
              <BlogCard
                title={item.title}
                thumbnail={item.featuredImage.node?.sourceUrl}
                desc={item.excerpt.replace(/<[^>]+>/g, "")}
                key={index}
              />
            ))}
        </Slider>
      </CategorySliderWrapper>
    </CategorySliderBlockWrapper>
  );
};

export default CategorySlider;
