import React from "react";
import styled, { css } from "styled-components";
import BlogCard from "./card";
import blog from "../../../../images/blog.png";
import blog1 from "../../../../images/blog1.png";
import blog2 from "../../../../images/blog2.png";
import blog3 from "../../../../images/blog3.png";
import blog4 from "../../../../images/blog4.png";
import Slider from "react-slick";
import { Link } from "gatsby";
import Heading from "../../../../components/Heading";

const staticBlog = [
  {
    thumbnail: blog,
    title: "In Her Own Words: Crystal’s Story",
    desc:
      "I never felt good in my own skin. I suffered from low self-esteem for many years.",
  },
  {
    thumbnail: blog1,
    title: "Your Defining Moment In Spite of Holiday Grief",
    desc:
      "“That is a brilliant idea!” You have said this yourself or heard others say it...",
  },
  {
    thumbnail: blog2,
    title: "What food can I eat to improve my mood?",
    desc: "Did you know that what you eat can impact your mood?",
  },
  {
    thumbnail: blog3,
    title: "Men Not Discussing Mental Health is Leading to Higher Death Rates",
    desc:
      "Your mental health is inseparable from your physical health. While this might be...",
  },
  {
    thumbnail: blog4,
    title:
      "Several crucial reseach findings that can help peopledeal with COVID-19",
    desc:
      "Your mental health is inseparable from your physical health. While this might be...",
  },
];

const graniteGray = "#2C3336";

const BlogWrapper = styled.div`
  margin: 72px 0 140px 96px;
`;

const SliderWrapper = styled.div`
  margin-top: 40px;
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 96px;
`;

const StyledLink = styled(Link)`
  span {
    margin-right: 15px;
  }
  font-size: 24px;
  font-weight: 600;
  font-family: Mulish;
  letter-spacing: 0.1px;
  color: ${graniteGray};
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const NavigationButton = styled.div`
  position: absolute;
  bottom: -80px;
  button {
    height: 40px;
    width: 40px;
    border: 1px solid #c5ccd3;
    border-radius: 3px;
    display: grid;
    place-items: center;
    background-color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #f4f4f4;
    }
  }
  ${({ next }) =>
    next &&
    css`
      left: 80px;
    `}

  ${({ prev }) =>
    prev &&
    css`
      margin-left: 20px;
    `}
`;

const settings = {
  dots: true,
  pauseOnHover: false,
  swipeToSlide: true,
  infinite: true,
  autoplay: true,
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

const Blog = props => {
  return (
    <BlogWrapper>
      <HeadingWrapper>
        <Heading>on the blog</Heading>
        <StyledLink to="/">
          <span>Check our blog</span>
          <svg
            width="78"
            height="44"
            viewBox="0 0 78 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="56.1667" cy="21.9002" r="21.3333" stroke="#2C3336" />
            <path
              d="M53.4193 13.0669L62.3788 22.0266L53.4193 30.986"
              stroke="#2C3336"
              strokeWidth="3"
            />
            <path
              d="M62.3807 22.0264H0.977905"
              stroke="#2C3336"
              strokeWidth="3"
            />
          </svg>
        </StyledLink>
      </HeadingWrapper>
      <SliderWrapper>
        <Slider {...settings}>
          {staticBlog.map((item, index) => (
            <BlogCard
              title={item.title}
              thumbnail={item.thumbnail}
              desc={item.desc}
              key={index}
            />
          ))}
        </Slider>
      </SliderWrapper>
    </BlogWrapper>
  );
};

export default Blog;
