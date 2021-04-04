import { Heading } from "@components/Heading";
import styled from "styled-components";

const primary = "#6CA448";
const graniteGrey = "#2C3336";
const lightGreen = "#86CF57";
const blueGrey = "#C5CCD3";

export const HorizontalComponentWrapper = styled.div`
  overflow-x: auto;
`;

export const HorizontalComponent = styled.div`
  margin-top: 100px;
  padding: 5vw;
  margin-bottom: 5em;
  font-size: 12px;
  height: 100vh;
  background-color: ${graniteGrey};
  width: fit-content;
`;

export const HorizontalComponentBlockWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HorizontalComponentBlock = styled.div`
  margin-right: 110px;
`;

export const HorizontalComponentTitle = styled.h3`
  font-size: 3em;
  font-family: Mulish;
  letter-spacing: 0.1px;
  margin-bottom: 24px;
  color: #fff;
`;

export const HorizontalComponentTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HorizontalComponentHeading = styled.h2`
  font-size: 6em;
  color: ${lightGreen};
  font-family: Merriweather;
  letter-spacing: 0.1px;
  margin-bottom: 70px;
`;

export const Image = styled.div`
  height: 600px;
  width: 880px;
  background-color: #fff;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const SubtitleWrapper = styled.div`
  margin-bottom: 96px;
`;

export const HorizontalHeading = styled(Heading)`
  color: #fff;
`;

export const FirstText = styled.p`
  font-family: Mulish;
  font-size: 24px;
  letter-spacing: 0.1px;
  color: ${blueGrey};
  margin-bottom: 96px;
  width: 75%;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ServicesHeading = styled.h2`
  font-size: 36px;
  letter-spacing: 0.1px;
  color: ${primary};
  font-weight: 700;
  font-family: Merriweather;
  margin-right: 28px;
`;

export const ServicesItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 36px;
  grid-column-gap: 60px;
`;

export const ServicesItems = styled.div`
  font-size: 24px;
  letter-spacing: 0.1px;
  color: ${blueGrey};
  font-family: Mulish;
  white-space: nowrap;
`;
