import styled from "styled-components";
import { Link } from "gatsby";
import { SPACING, COLORS } from "@components/constants";

export const CategoryWrapper = styled.div``;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const CategoryBlockWrapper = styled.div`
  margin-top: ${SPACING.md};
`;

export const CategoryBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  overflow: hidden;
  @media (min-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (min-width: 1440px) {
    grid-template-rows: repeat(3, 170px);
  }
`;

export const CategoryBlogCardWrapper = styled.div`
  overflow: hidden;
  @media (min-width: 1024px) {
    &:nth-child(1) {
      grid-column: 1 / span 5;
      grid-row: 1 / span 3;
      border-radius: 24px 0 0 24px;
    }
    &:nth-child(2) {
      grid-column: 6 / span 3;
      grid-row: 1 / span 2;
    }
    &:nth-child(3) {
      grid-column: 9 / span3;
      grid-row: 1 / span 2;
      border-radius: 0 24px 0 0;
    }
    &:nth-child(4) {
      grid-column: 6 / span 2;
      grid-row: 3;
    }
    &:nth-child(5) {
      grid-column: 8 / span 2;
      grid-row: 3;
    }
    &:nth-child(6) {
      grid-column: 10 / span 3;
      grid-row: 3;
      border-radius: 0 0 24px 0;
    }
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
      p {
        display: none;
      }
      h2 {
        font-size: 1.6rem;
        line-height: 2.5rem;
      }
    }
  }
`;

export const CategoryBlogCard = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: 100%;
  cursor: pointer;
  background-image: linear-gradient(
      11.06deg,
      #2c3336 -15.64%,
      rgba(44, 51, 54, 0) 75.3%
    ),
    linear-gradient(173.86deg, #2c3336 -10.11%, rgba(44, 51, 54, 0) 73.68%),
    url(${props => props.image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: transform 300ms;

  @media (min-width: 1440px) {
    padding-top: 0;
  }

  &:hover {
    &:not(h2):not(p) {
      transform: scale(1.01);
      transition: transform 300ms ease-in-out;
    }
  }
`;

export const HeaderContainer = styled.div`
  margin-top: 1rem;
`;

export const CategoryTextWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  color: #fff;

  @media (min-width: 1200px) {
    bottom: 25px;
    left: 25px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 2.8rem;
  line-height: 3.9rem;
  font-family: Merriweather;
  font-weight: bold;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CategoryMetaWrapper = styled.p`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const CategoryAuthor = styled.span`
  font-size: 1.5rem;
  line-height: 2.4rem;
  font-weight: normal;
  font-family: Mulish;
  margin-right: 5px;
`;

export const CategoryDate = styled.span`
  font-size: 1.5rem;
  line-height: 2.4rem;
  font-weight: normal;
  font-family: Mulish;
  margin-left: 5px;
`;

export const BlogBreadCrum = styled.span`
  font-size: 1.3rem;
  font-weight: normal;
  font-family: Mulish;
  color: ${COLORS.textBodyGrey};

  a {
    text-decoration: none;
    font: inherit;
    color: inherit;
  }

  span {
    color: ${COLORS.textDisable};
    font: inherit;
  }
`;
