import React from "react";
import CategoryCard from "./Card";
import {
  CategoryWrapper,
  CategoryBlockWrapper,
  CategoryBlock,
  BlogBreadCrum,
  BlogHeading,
} from "./Categories.style";

const Categories = props => {
  console.log(props);
  return (
    <CategoryWrapper>
      <BlogHeading clean>{props && props.data.name}</BlogHeading>
      <BlogBreadCrum>Home {">"} Blogs & Articles</BlogBreadCrum>
      <CategoryBlockWrapper>
        <CategoryBlock>
          {props.data &&
            props.data.posts.nodes.map((item, index) => (
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
