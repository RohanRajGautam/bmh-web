import styled from "styled-components";
import { Link } from "gatsby";

const borderColor = "#C5CCD3";
const graniteGrey = "#2C3336";
const medicalGrey = "#5F6468";

export const RecentWrapper = styled.div`
  margin: 40px 20px;
  @media (min-width: 768px) {
    margin: 80px 40px;
  }
  @media (min-width: 1024px) {
    margin: 120px 90px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
`;

export const RecentBlockWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const RecentCard = styled.article`
  padding: 0 12px;
  transition: transform 300ms;
  &:hover {
    figure {
      transform: scale(1.05);
      transition: transform 300ms;
    }
  }
  margin: 0 5px;
  &:first-child {
    margin-left: 0;
  }
  @media (min-width: 600px) {
    margin: 0 20px;
  }
`;

export const RecentCardInner = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  overflow: hidden;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const RecentCardImage = styled.figure`
  width: 100%;
  height: 190px;
  background-image: linear-gradient(
      11.06deg,
      #2c3336 -15.64%,
      rgba(44, 51, 54, 0) 75.3%
    ),
    linear-gradient(173.86deg, #2c3336 -10.11%, rgba(44, 51, 54, 0) 73.68%),
    url(${props => props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    width: 240px;
  }
`;

export const RecentCardDesc = styled.div`
  padding: 20px;
  border: 1px solid ${borderColor};
  border-top: none;
  width: 240px;
  @media (min-width: 768px) {
    width: 330px;
    border-left: none;
    border-top: 1px solid ${borderColor};
  }
`;

export const RecentCardTitle = styled.h2`
  font-size: 14px;
  letter-spacing: 0.1px;
  font-family: Merriweather;
  font-weight: 700;
  color: ${graniteGrey};
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  min-height: 36px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const RecentCardDate = styled.time`
  font-size: 14px;
  letter-spacing: 0.3px;
  font-family: Mulish;
  color: ${medicalGrey};
`;
