import React from "react";
import {
  CategorySliderBlockWrapper,
  CategorySliderWrapper,
  HeadingWrapper,
} from "./CategorySlider.styles";
// import BlogCard from "../../../Homepage/components/Blog/components/Card";
import BlogCard from "./BlogCard";
import { HeadingPrimary } from "@components/Heading";

const CategorySlider = props => {
  return (
    <CategorySliderBlockWrapper>
      <HeadingWrapper>
        <HeadingPrimary>
          Recent Mental Health <span> Articles</span>
        </HeadingPrimary>
      </HeadingWrapper>
      <CategorySliderWrapper>
        {props.data.length &&
          props.data.map((item, index) => (
            <BlogCard
              url={item?.uri}
              title={item?.title}
              date={item?.date}
              thumbnail={
                item?.featuredImage?.node?.localFile?.childImageSharp?.fluid
              }
              desc={item?.excerpt.replace(/<[^>]+>/g, "")}
              key={index}
              blogcat
            />
          ))}
      </CategorySliderWrapper>
    </CategorySliderBlockWrapper>
  );
};

export default CategorySlider;
