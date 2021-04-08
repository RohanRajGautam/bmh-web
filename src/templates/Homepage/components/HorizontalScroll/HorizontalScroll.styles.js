import { Heading } from "@components/Heading";
import styled from "styled-components";

const primary = "#6CA448";
const graniteGrey = "#2C3336";
const lightGreen = "#86CF57";
const blueGrey = "#C5CCD3";

export const HorizontalComponentWrapper = styled.div`
  @media (min-width: 1024px) {
    overflow-x: auto;
  }
`;

export const HorizontalComponent = styled.div`
  margin-top: 100px;
  padding: 5vw;
  margin-bottom: 5em;
  font-size: 12px;
  background-color: ${graniteGrey};
  width: fit-content;
  @media (min-width: 1024px) {
    min-height: 100vh;
  }
`;

export const HorizontalComponentBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const HorizontalComponentBlock = styled.div`
  svg {
    display: none;
  }
  @media (min-width: 1024px) {
    margin-right: 110px;
    svg {
      display: block;
    }
  }
`;

export const HorizontalComponentFourthOrder = styled(HorizontalComponentBlock)`
  order: 5;
  @media (min-width: 1024px) {
    order: unset;
  }
`;

export const HorizontalComponentFifthOrder = styled(HorizontalComponentBlock)`
  order: 6;
  @media (min-width: 1024px) {
    order: unset;
  }
`;

export const HorizontalComponentMobile = styled.div`
  display: block;
  margin-top: 96px;
  @media (min-width: 1024px) {
    display: none;
    margin-top: 0;
  }
`;

export const HorizontalComponentDesktop = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const HorizontalComponentTitle = styled.h3`
  font-size: 14px;
  font-family: Mulish;
  letter-spacing: 0.1px;
  color: #fff;
  margin-bottom: 8px;
  @media (min-width: 576px) {
    font-size: 24px;
    margin-bottom: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 36px;
    margin-bottom: 24px;
  }
`;

export const HorizontalComponentTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HorizontalComponentHeading = styled.h2`
  color: ${lightGreen};
  font-family: Merriweather;
  letter-spacing: 0.1px;
  margin-bottom: 40px;
  font-size: 24px;
  @media (min-width: 576px) {
    font-size: 40px;
    margin-bottom: 60px;
  }
  @media (min-width: 1024px) {
    font-size: 72px;
    margin-bottom: 70px;
  }
`;

export const Image = styled.div`
  width: 100%;
  padding-bottom: 75%;
  background-color: #fff;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media (min-width: 1024px) {
    height: 600px;
    width: 880px;
  }
`;

export const SubtitleWrapper = styled.div`
  margin-bottom: 48px;
  @media (min-width: 1024px) {
    margin-bottom: 96px;
  }
`;

export const HorizontalHeading = styled(Heading)`
  color: #fff;
  margin-top: 40px;
  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

export const FirstText = styled.p`
  font-family: Mulish;
  font-size: 14px;
  letter-spacing: 0.1px;
  color: ${blueGrey};
  margin-bottom: 48px;
  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 96px;
    font-size: 24px;
    width: 75%;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
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
    margin-bottom: 0;
    font-size: 36px;
  }
`;

export const ServicesItemWrapper = styled.div`
  display: grid;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 36px;
    grid-column-gap: 60px;
  }
`;

export const ServicesItems = styled.div`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: ${blueGrey};
  font-family: Mulish;
  @media (min-width: 768px) {
    font-size: 20px;
    white-space: nowrap;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;
