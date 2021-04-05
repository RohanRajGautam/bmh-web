import React from "react";
import { Heading } from "../../../../components/Heading";
import CategoryCard from "./Card";
import StaticData from "./Categories.data";
import {
  CategoryWrapper,
  CategoryBlockWrapper,
  CategoryBlock,
  BlogBreadCrum,
} from "./Categories.style";

const Categories = props => {
  console.log(props);
  return (
    <CategoryWrapper>
      <Heading clean>{props && props.data.name}</Heading>
      <BlogBreadCrum>Home {">"} Blogs & Articles</BlogBreadCrum>
      <CategoryBlockWrapper>
        <CategoryBlock>
          {props.data &&
            props.data.posts.nodes.map((item, index) => (
              <CategoryCard
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
