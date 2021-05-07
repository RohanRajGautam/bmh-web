import styled from "styled-components";
import { Heading } from "@components/Heading";
import { Button } from "@components/Button";

const primary = "#6CA448";
const graniteGrey = "#2C3336";
const medicalGrey = "#5f6468";
const gray3 = "#828282";

export const Container = styled.div`
  width: 65vw;
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
    width: min-ImageContent;
  }
`;

export const VectorLine = styled.img`
  position: absolute;
  top: 14%;
  left: 46%;
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
    font-size: 2.5rem;
    margin-top: 60px;
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
  font-size: 14px;
  letter-spacing: 0.1px;
  color: ${gray3};
  margin-bottom: 40px;
  text-align: justify;
  @media (max-width: 576px) {
    width: 90vw;
  }
  @media (min-width: 768px) {
    font-size: 20px;
    text-align: left;
  }

  @media (min-width: 1024px) {
    margin-bottom: 7rem;
    font-size: 18px;
    width: 60%;
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
    margin-bottom: 4rem;
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
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 24px;
    grid-column-gap: 36px;
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

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

// image wrapperStyle
export const ImagePlaceholder = styled.div`
  width: 35vw;
  height: 100vh;
  background: #eee;

  @media (max-width: 576px) {
    margin-top: 5rem;
    position: absolute;
  }
`;

export const ImageLast = styled.img`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -o-object-fit: cover;
  object-fit: cover;
  filter: brightness(35%);
  backdrop-filter: blur(10px);

  @media (max-width: 576px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const ImageContent = styled.div`
  z-index: 3;

  position: absolute;
  bottom: 5%;
  margin-left: 2rem;
  /* @media (max-width: 576px) {

  } */
`;

export const ButtonWrapper = styled(Button)`
  /* position: absolute;
  right: 3%;
  top: 80%; */
  padding: 10px 30px;
  border-radius: 50px;
  text-transform: uppercase;

  @media (max-width: 576px) {
    /* right: 85%;
    top: 88%; */
    width: 90vw;
    padding: 15px 40px;
    margin-top: 2rem;
  }
`;

export const TextWrapper = styled.p`
  /* position: absolute;
  bottom: 24%;
  right: 3%; */
  color: #fff;
  font-size: 4rem;
  text-transform: capitalize;
  font-style: oblique;
  font-weight: 700;
  letter-spacing: 1px;

  @media (max-width: 576px) {
    /* bottom: 15%;
    right: 85%; */
    font-size: 3rem;
  }
`;
