import { Link } from "gatsby";
import React from "react";
import CategoryCard from "./Card";
import {
  CategoryWrapper,
  CategoryBlockWrapper,
  CategoryBlock,
  BlogBreadCrum,
  HeaderContainer,
} from "./Categories.style";
import { HeadingPrimary } from "@components/Heading";

const Categories = props => {
  const data = props.data;
  return (
    <CategoryWrapper>
      <BlogBreadCrum>
        <Link to="/">Home</Link> {" / "} <span>Blogs & Articles</span>
      </BlogBreadCrum>
      <HeaderContainer>
        <HeadingPrimary>
          Featured <span> Articles</span>
        </HeadingPrimary>
      </HeaderContainer>
      <CategoryBlockWrapper>
        <CategoryBlock>
          {data.posts.nodes.map((item, index) => (
            <CategoryCard
              url={item.uri}
              key={index}
              title={item.title}
              author={item.author.node.name}
              date={item.date.substring(0, 10)}
              image={item.featuredImage.node.sourceUrl}
            />
          ))}
        </CategoryBlock>
      </CategoryBlockWrapper>
    </CategoryWrapper>
  );
};

export default Categories;
