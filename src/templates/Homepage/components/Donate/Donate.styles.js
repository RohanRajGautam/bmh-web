import styled from "styled-components";
import donate from "@images/donate-new.jpg";
import { Button } from "@components/Button";

export const DonateWrapper = styled.div`
  width: 100%;
  padding: 40% 5vw 5vw;
  margin-top: 5vh;

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
  @media (min-width: 768px) {
    padding: 0;
    padding-top: 40%;
    position: relative;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    padding: 15vw 0vw;
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
    position: absolute;
    top: 50%;
    /* bottom: 0; */
    right: 0;
    width: 40%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
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
    margin: 0;
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
  width: 80%;
  margin-top: 2rem;
  @media (max-width: 767px) {
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    max-width: 80%;
  }
`;
