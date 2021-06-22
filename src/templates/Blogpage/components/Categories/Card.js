import React from "react";
import {
  CategoryAuthor,
  CategoryBlogCard,
  CategoryMetaWrapper,
  CategoryTextWrapper,
  CategoryBlogCardWrapper,
  CategoryTitle,
  StyledLink,
  CategoryDate,
} from "./Categories.style";

const CategoryCard = props => {
  return (
    <CategoryBlogCardWrapper>
      <StyledLink to={props?.url}>
        <CategoryBlogCard image={props.image}>
          <CategoryTextWrapper>
            <CategoryTitle>{props.title}</CategoryTitle>
            <CategoryMetaWrapper>
              <CategoryAuthor>{props.author}</CategoryAuthor>
              {"-"}
              <CategoryDate>{props.date}</CategoryDate>
            </CategoryMetaWrapper>
          </CategoryTextWrapper>
        </CategoryBlogCard>
      </StyledLink>
    </CategoryBlogCardWrapper>
  );
};

export default CategoryCard;
