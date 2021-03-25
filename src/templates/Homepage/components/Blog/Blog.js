import React from "react";
import styled from "styled-components";
import BlogCard from "./card";
import blog from "../../../../images/blog.png";
import blog1 from "../../../../images/blog1.png";
import blog2 from "../../../../images/blog2.png";
import blog3 from "../../../../images/blog3.png";
import blog4 from "../../../../images/blog4.png";
import Slider from "react-slick";
import Heading from "../../../../components/Heading";
import { Link } from "gatsby";

const settings = {
  dots: false,
  arrow: true,
  fadeIn: false,
  pauseOnHover: false,
  slidesToShow: 3,
  swipeToSlide: true,
  centerPadding: "60px",
  speed: 500,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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
  margin: 72px 0 0 96px;
  overflow: hidden;
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
              stroke-width="3"
            />
            <path
              d="M62.3807 22.0264H0.977905"
              stroke="#2C3336"
              stroke-width="3"
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
