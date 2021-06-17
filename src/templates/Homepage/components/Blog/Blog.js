import React from "react";
import {
  BlogWrapper,
  SliderWrapper,
  HeadingWrapper,
  StyledLink,
  Subtitle,
  Header,
} from "./Blog.styles";

import { BlogCard } from "./components";
import { HeadingPrimary } from "@components/Heading";
import CheckOurBlog from "./CheckOurBlog";

const Blog = props => {
  // const sliderRef = useRef(null);
  // const scroll = scrollOffset => {
  //   sliderRef.current.scrollLeft += scrollOffset;
  // };
  console.log(props);
  return (
    <BlogWrapper>
      <HeadingWrapper data-aos="fade-up">
        <Header>
          <Subtitle>The blog</Subtitle>
          <HeadingPrimary>
            On Our <span> Minds</span>
          </HeadingPrimary>
        </Header>
        <StyledLink to="/blog-cat">
          <CheckOurBlog />
        </StyledLink>
      </HeadingWrapper>
      <SliderWrapper data-aos="fade-up">
        {props.data.allPost.nodes.length &&
          props.data.allPost.nodes.map((item, index) => (
            <BlogCard
              url={item.uri}
              title={item.title}
              date={item.date}
              thumbnail={
                item.featuredImage.node && item.featuredImage.node.sourceUrl
              }
              desc={item.excerpt.replace(/<[^>]+>/g, "")}
              key={index}
            />
          ))}
      </SliderWrapper>
    </BlogWrapper>
  );
};

export default Blog;
