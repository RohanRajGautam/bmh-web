import styled from "styled-components";
import donate from "@images/donate/donate1.png";

export const DonateWrapper = styled.div`
  width: 100%;
  padding: 40% 20px 20px;
  background-image: linear-gradient(
      274.39deg,
      #ffffff -11.28%,
      #2c3336 -11.28%,
      rgba(44, 51, 54, 0) 55.82%
    ),
    linear-gradient(0deg, rgba(108, 164, 72, 0.13), rgba(108, 164, 72, 0.13)),
    linear-gradient(283.09deg, #ffffff -6.96%, rgba(255, 255, 255, 0) 26.96%),
    url(${donate});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    padding: 0;
    padding-top: 36%;
    position: relative;
    overflow: hidden;
  }
`;

export const DonateStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const DonateColumn = styled.div`
  font-size: 5px;
  width: 80%;
  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    bottom: 0;
    right: 0;
    width: 40%;
    transform: translateY(-50%);
  }
  @media (min-width: 768px) {
    font-size: 4px;
  }
  @media (min-width: 1025px) {
    font-size: 5px;
  }
  @media (min-width: 1201px) {
    font-size: 6px;
  }
  @media (min-width: 1441px) {
    font-size: 10px;
  }
`;

export const DonateHeading = styled.h2`
  font-family: Merriweather;
  font-weight: 700;
  font-size: 4.8em;
  margin: 0 auto 0.75em;
  line-height: 1.35;
  color: #fff;
  width: 80%;
  @media (min-width: 768px) {
    margin: 0 0 0.75em 0;
  }
`;

export const DonateParagraph = styled.div`
  font-family: Mulish;
  font-size: 2.4em;
  line-height: 1.7;
  color: #fff;
  margin: 0 auto 3em;
  width: 80%;
  @media (min-width: 768px) {
    margin: 0 0 3em 0;
  }
`;
