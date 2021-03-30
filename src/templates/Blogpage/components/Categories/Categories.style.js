import styled from "styled-components";

const medicalGrey = "#5F6468";

export const CategoryWrapper = styled.div`
  margin: 40px 20px;
  @media (min-width: 768px) {
    margin: 80px 40px;
  }
  @media (min-width: 1024px) {
    margin: 120px 90px;
  }
`;

export const CategoryBlockWrapper = styled.div`
  margin-top: 72px;
`;

export const CategoryBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  overflow: hidden;
  font-size: 6px;
  @media (min-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    font-size: 7px;
  }

  @media (min-width: 1440px) {
    font-size: 8px;
    grid-template-rows: repeat(3, 220px);
  }
`;

export const CategoryBlogCardWrapper = styled.div`
  overflow: hidden;
  @media (min-width: 1024px) {
    &:nth-child(1) {
      grid-column: 1 / span 5;
      grid-row: 1 / span 3;
    }
    &:nth-child(2) {
      grid-column: 6 / span 3;
      grid-row: 1 / span 2;
    }
    &:nth-child(3) {
      grid-column: 9 / span3;
      grid-row: 1 / span 2;
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
    }
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
      p {
        display: none;
      }
      h2 {
        font-size: 2em;
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
    transform: scale(1.02);
    transition: transform 300ms;
  }
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
  font-size: 3em;
  letter-spacing: 0.3px;
  line-height: 1.35;
  font-family: Merriweather;
  font-weight: 700;
`;

export const CategoryMetaWrapper = styled.p`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const CategoryAuthor = styled.div`
  font-size: 11px;
  letter-spacing: 0.3px;
  font-family: Mulish;
  margin-right: 8px;
  @media (min-width: 1200px) {
    font-size: 13px;
  }
`;

export const BlogBreadCrum = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-family: Mulish;
  letter-spacing: 0.3px;
  color: ${medicalGrey};
  margin-top: 18px;
`;
