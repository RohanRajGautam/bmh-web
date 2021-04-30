import React, { useRef } from "react";
import { BlogCard } from "./components";
import { Heading } from "@components/Heading";
import {
  BlogWrapper,
  SliderWrapper,
  HeadingWrapper,
  StyledLink,
  NavigationButton,
  StyledLinkMobile,
  NavigationButtonWrapper,
  SpaceBetween,
} from "./Blog.styles";

const Blog = props => {
  const sliderRef = useRef(null);
  const scroll = scrollOffset => {
    sliderRef.current.scrollLeft += scrollOffset;
  };
  return (
    <BlogWrapper>
      <HeadingWrapper>
        <Heading data-aos="fade-up-right">On The Blog</Heading>
        <StyledLink to="/blog-cat" data-aos="flip-right">
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
      <SliderWrapper ref={sliderRef}>
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
      </SliderWrapper>
      <SpaceBetween>
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
        <StyledLinkMobile to="/blog-cat">
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
      </SpaceBetween>
    </BlogWrapper>
  );
};

export default Blog;
