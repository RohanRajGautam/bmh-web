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
  return (
    <CategoryWrapper>
      <Heading clean>Mental Health & Awareness Articles</Heading>
      <BlogBreadCrum>Home>Blogs & Articles</BlogBreadCrum>
      <CategoryBlockWrapper>
        <CategoryBlock>
          {StaticData &&
            StaticData.map((item, index) => (
              <CategoryCard
                key={index}
                title={item.title}
                author={item.author}
                date={item.date}
                image={item.image}
              />
            ))}
        </CategoryBlock>
      </CategoryBlockWrapper>
    </CategoryWrapper>
  );
};

export default Categories;
