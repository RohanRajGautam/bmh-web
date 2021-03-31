import React from "react";
import {
  CategorySliderBlockWrapper,
  CategorySliderWrapper,
  NavigationButton,
} from "./CategorySlider.styles";
import Slider from "react-slick";
import { staticBlog } from "../../../Homepage/components/Blog/Blog.datas";
import BlogCard from "../../../Homepage/components/Blog/components/Card";
import { Heading } from "../../../../components/Heading";

const settings = {
  dots: true,
  pauseOnHover: false,
  swipeToSlide: true,
  infinite: true,
  autoplay: false,
  speed: 1000,
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
  return (
    <CategorySliderBlockWrapper>
      <Heading clean>Mental Wellness Articles</Heading>
      <CategorySliderWrapper>
        <Slider {...settings}>
          {staticBlog &&
            staticBlog.map((item, index) => (
              <BlogCard
                title={item.title}
                thumbnail={item.thumbnail}
                desc={item.desc}
                key={index}
              />
            ))}
        </Slider>
      </CategorySliderWrapper>
    </CategorySliderBlockWrapper>
  );
};

export default CategorySlider;
