import styled from "styled-components";
import { Heading } from "@components/Heading";

const primary = "#6CA448";
const graniteGrey = "#2C3336";
const medicalGrey = "#5f6468";
const gray3 = "#828282";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh 5vw;
  @media (min-width: 1824px) {
    margin: 10rem 15rem;
  }
`;
export const LogoContainer = styled.img`
  width: 350px;
  @media (min-width: 1824px) {
    width: min-content;
  }
`;

export const SubtitleWrapper = styled.div`
  margin-bottom: 5rem;
  /* @media (min-width: 1024px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1824px) {
    margin-bottom: 72px;
  } */
`;

export const HorizontalHeading = styled(Heading)`
  color: ${graniteGrey};
  margin-top: 40px;
  @media (max-width: 576px) {
    font-size: 3rem;
    margin-top: 60px;
  }
  @media (min-width: 1024px) {
    margin-top: 5rem;
    font-size: 3.5rem;
  }
  @media (min-width: 1824px) {
    font-size: 5rem;
  }
`;

export const FirstText = styled.p`
  font-family: Mulish;
  font-size: 14px;
  letter-spacing: 0.1px;
  color: ${gray3};
  margin-bottom: 40px;
  text-align: justify;
  @media (min-width: 768px) {
    font-size: 20px;
    text-align: left;
  }

  @media (min-width: 1024px) {
    margin-bottom: 7rem;
    font-size: 18px;
    width: 55%;
  }
  @media (min-width: 1824px) {
    margin-bottom: 72px;
    font-size: 24px;
    width: 70%;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
`;

export const ServicesHeading = styled.h2`
  letter-spacing: 0.1px;
  color: ${primary};
  font-weight: 700;
  font-family: Merriweather;
  margin-bottom: 36px;
  font-size: 18px;
  display: flex;
  align-items: center;
  span {
    margin-left: 12px;
  }
  svg {
    display: block;
  }
  @media (min-width: 576px) {
    font-size: 24px;
  }
  @media (min-width: 1024px) {
    margin-right: 28px;
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
  @media (min-width: 1824px) {
    margin-right: 28px;
    margin-bottom: 4rem;
    font-size: 36px;
  }
`;

export const ServicesItemWrapper = styled.div`
  display: grid;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, auto);
    grid-row-gap: 24px;
    grid-column-gap: 5rem;
    position: relative;
  }
  @media (min-width: 1440px) {
    grid-row-gap: 36px;
    grid-column-gap: 60px;
  }
`;

export const ServicesItems = styled.div`
  font-size: 14px;
  letter-spacing: 0.1px;
  font-family: Mulish;

  @media (min-width: 768px) {
    font-size: 16px;
    white-space: nowrap;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
  @media (min-width: 1824px) {
    font-size: 24px;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${medicalGrey};
  &:hover {
    border-bottom: 2px solid #6ca448;
    padding-bottom: 5px;
  }
`;

export const VectorDot = styled.div`
  @media (min-width: 1024px) {
    height: 20px;
    width: 20px;
    background-color: #6ca448;
    border-radius: 50%;
    position: absolute;
    left: 13%;
    z-index: 2;
    /* top: 4%; */
  }
  @media (min-width: 1920px) {
    left: 40%;
}
  }
`;

export const VectorLine = styled.img`
  @media (min-width: 1024px) {
    position: relative;
    left: 14%;
  }
  @media (min-width: 1920px) {
    left: 40%;
    top: 7%;
  }
`;

export const VectorDotSecond = styled.div`
  @media (min-width: 1024px) {
    height: 20px;
    width: 20px;
    background-color: #6ca448;
    border-radius: 50%;
    position: absolute;
    left: 111%;
    bottom: 96%;
  }
  @media (min-width: 1920px) {
    bottom: 98%;
    left: 140%;
  }
`;

export const VectorWrapper = styled.div`
  display: none;
  @media (min-width: 1260px) {
    display: block;
    position: absolute;
  }
`;
