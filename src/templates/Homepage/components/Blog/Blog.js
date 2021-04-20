import React from "react";
import Slider from "react-slick";
import { BlogCard } from "./components";
// import { staticBlog } from "./Blog.datas";
import { Heading } from "@components/Heading";
import {
  BlogWrapper,
  SliderWrapper,
  HeadingWrapper,
  StyledLink,
  NavigationButton,
  StyledLinkMobile,
} from "./Blog.styles";

const settings = {
  dots: true,
  infinite: true,
  autoplay: false,
  cssEase: "linear",
  variableWidth: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
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
  console.log(props.data);
  return (
    <BlogWrapper>
      <HeadingWrapper>
        <Heading>On The Blog</Heading>
        <StyledLink to="/blog">
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
          {props.data.allPost.nodes.length &&
            props.data.allPost.nodes.map((item, index) => (
              <BlogCard
                url={item.uri}
                title={item.title}
                thumbnail={
                  item.featuredImage.node && item.featuredImage.node.sourceUrl
                }
                desc={item.excerpt.replace(/<[^>]+>/g, "")}
                key={index}
              />
            ))}
        </Slider>
      </SliderWrapper>
      <StyledLinkMobile to="/blog">
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
      </StyledLinkMobile>
    </BlogWrapper>
  );
};

export default Blog;
