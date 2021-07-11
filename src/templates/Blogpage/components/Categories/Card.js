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
  ImageContainer,
} from "./Categories.style";

const CategoryCard = props => {
  return (
    <CategoryBlogCardWrapper>
      <StyledLink to={props?.url}>
        <CategoryBlogCard>
          <CategoryTextWrapper>
            <CategoryTitle>{props.title}</CategoryTitle>
            <CategoryMetaWrapper>
              <CategoryAuthor>{props.author}</CategoryAuthor>
              {"-"}
              <CategoryDate>{props.date}</CategoryDate>
            </CategoryMetaWrapper>
          </CategoryTextWrapper>
          <ImageContainer fluid={props?.image} />
        </CategoryBlogCard>
      </StyledLink>
    </CategoryBlogCardWrapper>
  );
};

export default CategoryCard;
