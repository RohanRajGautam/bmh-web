import React from "react";
import {
  CategorySliderBlockWrapper,
  CategorySliderWrapper,
} from "./CategorySlider.styles";
import BlogCard from "../../../Homepage/components/Blog/components/Card";
import { Heading } from "../../../../components/Heading";

const CategorySlider = props => {
  return (
    <CategorySliderBlockWrapper>
      <Heading clean>Mental Wellness Articles</Heading>
      <CategorySliderWrapper>
        {props.data.length &&
          props.data.map((item, index) => (
            <BlogCard
              title={item.title}
              thumbnail={item.featuredImage.node?.sourceUrl}
              desc={item.excerpt.replace(/<[^>]+>/g, "")}
              key={index}
              url={item.uri}
            />
          ))}
      </CategorySliderWrapper>
    </CategorySliderBlockWrapper>
  );
};

export default CategorySlider;
