import styled from "styled-components";
import donate from "@images/donate/donate1.png";
import { Button } from "@components/Button";

export const DonateWrapper = styled.div`
  width: 100%;
  padding: 40% 5vw 5vw;
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
  margin-top: 100px;
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
  width: 100%;
  @media (min-width: 481px) {
    width: 80%;
  }
  @media (min-width: 768px) {
    font-size: 4px;
    position: absolute;
    top: 50%;
    bottom: 0;
    right: 0;
    width: 40%;
    transform: translateY(-50%);
  }
  @media (min-width: 1025px) {
    font-size: 5px;
  }
  @media (min-width: 1201px) {
    font-size: 6px;
  }
  @media (min-width: 1824px) {
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
  text-align: center;
  @media (max-width: 576px) {
    font-size: 6em;
  }
  @media (min-width: 768px) {
    margin: 0 0 0.75em 0;
    width: 80%;
    text-align: left;
  }
`;

export const DonateParagraph = styled.div`
  font-family: Mulish;
  font-size: 2.4em;
  line-height: 1.7;
  color: #fff;
  margin: 0 auto 3em;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 15px;
  }
  @media (min-width: 768px) {
    margin: 0 0 3em 0;
    width: 80%;
    text-align: left;
  }
`;

export const DonateButton = styled(Button)`
  display: block;
  padding: 2rem 0;
  max-width: 100%;
  @media (max-width: 576px) {
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    max-width: 80%;
  }
`;
