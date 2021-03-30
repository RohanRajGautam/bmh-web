import React from "react";
import {
  CategoryAuthor,
  CategoryBlogCard,
  CategoryMetaWrapper,
  CategoryTextWrapper,
  CategoryBlogCardWrapper,
  CategoryTitle,
} from "./Categories.style";

const CategoryCard = props => {
  return (
    <CategoryBlogCardWrapper>
      <CategoryBlogCard image={props.image}>
        <CategoryTextWrapper>
          <CategoryTitle>{props.title}</CategoryTitle>
          <CategoryMetaWrapper>
            <CategoryAuthor>{props.author}</CategoryAuthor>
            <CategoryAuthor>{props.date}</CategoryAuthor>
          </CategoryMetaWrapper>
        </CategoryTextWrapper>
      </CategoryBlogCard>
    </CategoryBlogCardWrapper>
  );
};

export default CategoryCard;
