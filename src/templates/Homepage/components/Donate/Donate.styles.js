import styled from "styled-components";
import donate from "@images/donate/donate-homepage.png";
import { Button } from "@components/Button";

export const DonateWrapper = styled.div`
  width: 100%;
  padding: 40% 5vw 5vw;
  background: linear-gradient(
      85.72deg,
      rgba(0, 0, 0, 0.5) 28.57%,
      rgba(0, 0, 0, 0) 79.22%
    ),
    url(${donate});

  background-blend-mode: multiply, normal;
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
    top: 45%;
    bottom: 0;
    left: 5%;
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
  font-size: 5em;
  margin: 0 auto 0.75em;
  line-height: 1.6;
  color: #fff;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 6em;
  }
  @media (min-width: 768px) {
    margin: 0 0 1em 0;
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
  max-width: 80%;
  @media (max-width: 870px) {
    margin: 0 auto 5vh;
  }
  @media (min-width: 1024px) {
    max-width: 80%;
    margin: 5vh 0;
  }
`;
