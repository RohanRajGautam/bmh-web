import styled from "styled-components";
import { Heading } from "@components/Heading";

const primary = "#6CA448";
const graniteGrey = "#2C3336";
const medicalGrey = "#5f6468";
const gray3 = "#828282";

export const LogoContainer = styled.img`
  width: 350px;
  @media (min-width: 1824px) {
    width: min-ImageContent;
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
  margin-top: 4rem;
  letter-spacing: 1px;

  @media (max-width: 576px) {
    font-size: 3rem;
    margin-top: 6rem;
  }
  @media (min-width: 1024px) {
    margin-top: 7rem;
    font-size: 4.5rem;
  }
  @media (min-width: 1824px) {
    font-size: 5rem;
  }
`;

export const FirstText = styled.p`
  font-family: Mulish;
  letter-spacing: 0.1px;
  color: ${gray3};
  margin-bottom: 4rem;
  text-align: justify;

  @media (max-width: 860px) {
    width: 90vw;
    font-size: 2rem;
    text-align: left;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
    text-align: left;
  }

  @media (min-width: 1024px) {
    margin-bottom: 7rem;
    font-size: 2.5rem;
    width: 80%;
  }
  @media (min-width: 1824px) {
    margin-bottom: 7rem;
    font-size: 2.6rem;
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
  margin-bottom: 3.6rem;
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  span {
    margin-left: 1.2rem;
  }
  svg {
    display: block;
  }
  @media (min-width: 1024px) {
    /* margin-right: 28px; */
    font-size: 3rem;
  }
  @media (min-width: 1824px) {
    margin-right: 2.8rem;
    margin-bottom: 4rem;
    font-size: 3.6rem;
  }
`;

export const ServicesItemWrapper = styled.div`
  display: grid;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2.4rem;
    /* grid-column-gap: 5rem; */
  }
  @media (min-width: 1440px) {
    grid-row-gap: 2.5rem;
    /* grid-column-gap: 6rem; */
  }
`;

export const ServicesItems = styled.div`
  font-size: 1.4rem;
  letter-spacing: 0.1px;

  font-family: Mulish;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    white-space: nowrap;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1440px) {
    font-size: 2rem;
  }
  @media (min-width: 1824px) {
    font-size: 2.4rem;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${medicalGrey};
  font-size: 1.6rem;
  &:hover {
    border-bottom: 2px solid #6ca448;
    padding-bottom: 5px;
  }
  @media (min-width: 768px) {
    font-size: 1.6rem;
    white-space: nowrap;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1440px) {
    font-size: 2rem;
  }
  @media (min-width: 1824px) {
    font-size: 2.4rem;
  }
`;

export const ExploreWrapper = styled.a`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -15%;
  right: 5%;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    white-space: nowrap;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1440px) {
    font-size: 2rem;
    bottom: -17%;
  }
  @media (min-width: 1824px) {
    font-size: 2.4rem;
    bottom: -20%;
  }

  &:hover {
    span {
      svg {
        path {
          transform: translateX(1.5rem);
          transition: all 0.4s;
          stroke: #6ca448;
        }
        circle {
          stroke: #6ca448;
          stroke-width: 2;
        }
      }
    }
  }
`;
export const ExploreText = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.1px;
  color: #2c3336;
  margin-right: 2rem;

  &:hover {
    color: ${primary};
  }
`;
